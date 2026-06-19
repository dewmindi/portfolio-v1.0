"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// A "wipe" is a single continuous slide: the curtain enters from `from`,
// covers the screen at `cover`, then keeps moving to `exit` to reveal the
// new page underneath — one smooth motion in a single direction.
type Wipe = {
  from: Record<string, string>;
  cover: Record<string, string>;
  exit: Record<string, string>;
};

const wipes: Wipe[] = [
  { from: { y: "-100%" }, cover: { y: "0%" }, exit: { y: "100%" } }, // top → down
  { from: { y: "100%" }, cover: { y: "0%" }, exit: { y: "-100%" } }, // bottom → up
  { from: { x: "-100%" }, cover: { x: "0%" }, exit: { x: "100%" } }, // left → right
  { from: { x: "100%" }, cover: { x: "0%" }, exit: { x: "-100%" } }, // right → left
];

type Phase = "idle" | "covering" | "covered" | "revealing";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<Phase>("idle");
  const [wipe, setWipe] = useState<Wipe>(wipes[0]);
  const pendingHref = useRef<string | null>(null);
  const pendingPath = useRef<string | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Strip whitespace, hash and any trailing slash so the target always
  // compares cleanly against `pathname` (which is already normalized).
  const normalizePath = (href: string) => {
    const path = href.trim().split("#")[0].split("?")[0] || "/";
    return path.length > 1 ? path.replace(/\/+$/, "") : path;
  };

  const navigate = useCallback((href: string) => {
    if (pendingHref.current) return; // a transition is already running
    setWipe(wipes[Math.floor(Math.random() * wipes.length)]);
    pendingHref.current = href.trim();
    pendingPath.current = normalizePath(href);
    setPhase("covering");
  }, []);

  // Once the curtain has covered the screen and the route has actually
  // changed to the target, slide the curtain away to reveal the new page.
  useEffect(() => {
    if (phase === "covered" && pendingPath.current === normalizePath(pathname)) {
      setPhase("revealing");
    }
  }, [pathname, phase]);

  // Clear the deadlock-safety timer once the curtain starts revealing again.
  useEffect(() => {
    if (phase !== "covered" && fallbackTimer.current) {
      clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }
  }, [phase]);

  const handleAnimationComplete = () => {
    if (phase === "covering") {
      setPhase("covered");
      if (pendingHref.current) router.push(pendingHref.current);
      // Safety net: never stay covered forever if the route never matches.
      fallbackTimer.current = setTimeout(() => {
        setPhase((p) => (p === "covered" ? "revealing" : p));
      }, 1500);
    } else if (phase === "revealing") {
      pendingHref.current = null;
      pendingPath.current = null;
      setPhase("idle");
    }
  };

  const target =
    phase === "revealing" ? wipe.exit : phase === "idle" ? wipe.from : wipe.cover;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        aria-hidden
        initial={wipe.from}
        animate={target}
        // Reset to the off-screen start position instantly (no visible slide);
        // animate smoothly for cover and reveal.
        transition={
          phase === "idle"
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        }
        onAnimationComplete={handleAnimationComplete}
        style={{ pointerEvents: phase === "idle" ? "none" : "auto" }}
        className="fixed inset-0 z-[100] bg-black"
      />
    </TransitionContext.Provider>
  );
}

// Drop-in replacement for next/link that routes through the curtain transition.
export function TransitionLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const { navigate } = usePageTransition();
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
