"use client";

import { useRef, useCallback } from "react";

export function useHoverSound(src: string = "/keypress.mp3") {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.loop = false;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {
      // Audio not supported; fail silently
    }
  }, [src]);

  return play;
}
