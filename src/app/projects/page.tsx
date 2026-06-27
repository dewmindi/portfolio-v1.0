"use client";

import { usePageTransition } from "../components/PageTransition";
import { featuredProjects } from "../../../projects";
import ProjectsShell from "./ProjectsShell";

function ProjectsList() {
  // Route through the shared curtain transition
  const { navigate } = usePageTransition();

  return (
    <>
      {/* Logo / Branding */}
              <button
          onClick={() => navigate("/")}
          className="w-fit text-xs tracking-[0.2em] text-white/50 font-medium uppercase hover:text-white transition-colors"
        >
          HOME
        </button>
      <div className="flex items-baseline gap-2">
        
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-none text-white flex items-center">
          <span className="text-5xl md:text-7xl font-light mr-1">©</span>Projects
        </h1>
        <h1 className="text-2xl md:text-3xl font-light text-white/70"> (08) </h1>
      </div>

      {/* Recently Completed list */}
      <div className="flex flex-col gap-3 my-auto pl-1">
        <p className="text-xs tracking-[0.2em] text-white/50 font-medium mb-2">
          RECENTLY COMPLETED
        </p>
        {featuredProjects
          .filter((p) => p.featured)
          .map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="flex gap-3 border-b border-white/20 pb-3 p-2 cursor-pointer group hover:bg-white/5 transition-colors"
            >
              <span className="w-8 h-8 shrink-0 flex items-center justify-center text-xs border rounded transition-all duration-300 border-white/20 text-white/40 group-hover:border-white/60 group-hover:text-white">
                {project.id}
              </span>
              <div>
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </div>
          ))}
        <button
          onClick={() => navigate("/web-development-projects")}
          className="w-fit text-sm font-medium tracking-wide text-white/90 hover:text-white transition-colors mt-1"
        >
          VIEW ALL
        </button>
      </div>

      {/* Core Brand Tagline */}
      <div className="max-w-md pr-4">
        <p className="text-3xl md:text-[2.1rem] font-normal leading-[1.15] tracking-tight text-white/90">
          We are a multidisciplinary design studio specializing in bespoke residential projects.
        </p>
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <ProjectsShell>
      <ProjectsList />
    </ProjectsShell>
  );
}
