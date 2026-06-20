"use client";
import { motion } from "framer-motion";
import { usePageTransition } from "../components/PageTransition";
import { featuredProjects } from "../../../projects";

const siteUrl = "https://dewmindi.com";
const pageUrl = `${siteUrl}/web-development-service-srilanka`;

const projects = [
  { name: "Ceylon Herbs E-commerce Website", slug: "ceylon-herbs", type: "WebApplication" },
  { name: "Milano Cafe Bar Restaurant Website", slug: "milano-cafe-bar", type: "WebApplication" },
  { name: "JR Global Pathways Consulting", slug: "jr-global-pathways", type: "WebApplication" },
];



// then spread projectUrls into the returned array above

export default function WebDevClient() {
  const { navigate } = usePageTransition();

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white font-sans flex flex-col px-6 md:px-12 py-8 select-none">
        {/* Top bar: title + close */}
        <div className="flex justify-between items-start shrink-0">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              All Projects
            </h2>
            <span className="text-sm md:text-base font-light text-white/50">
              ({featuredProjects.length})
            </span>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
          >
            Close
          </button>
        </div>

        {/* Project list — revealed one after another */}
        <div className="flex-1 flex flex-col justify-center gap-1 overflow-y-auto py-8 max-w-3xl">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.09,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <button
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="flex gap-3 w-full text-left border-b border-white/20 pb-3 p-2 cursor-pointer group hover:bg-white/5 transition-colors"
              >
                <span className="w-8 h-8 shrink-0 flex items-center justify-center text-xs border rounded transition-all duration-300 border-white/20 text-white/40 group-hover:border-white/60 group-hover:text-white">
                  {project.id}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors">
                    {project.title.trim()}
                  </h3>
                  <p className="text-sm text-white/60">{project.description}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": pageUrl,
            url: pageUrl,
            name: "Web Development Projects - Dewmindi",
            about: { "@id": `${siteUrl}/#person` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projects.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${pageUrl}#${p.slug}`,
                name: p.name,
              })),
            },
          }),
        }}
      />
    </>
  );
}
