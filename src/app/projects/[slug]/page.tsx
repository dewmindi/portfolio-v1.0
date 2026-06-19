"use client";

import { useParams } from "next/navigation";
import { usePageTransition } from "../../components/PageTransition";
import { getProjectBySlug } from "../../../../projects";
import ProjectsShell from "../ProjectsShell";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { navigate } = usePageTransition();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <ProjectsShell>
        <div className="flex flex-col justify-center h-full gap-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/projects")}
            className="w-fit text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
          >
            ← Back to projects
          </button>
        </div>
      </ProjectsShell>
    );
  }

  return (
    <ProjectsShell video={project.video}>
      {/* Back / Branding */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/web-development-service-srilanka")}
          className="w-fit text-xs tracking-[0.2em] text-white/50 font-medium uppercase hover:text-white transition-colors"
        >
          ← All Projects
        </button>
        <div className="flex items-baseline gap-2">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none text-white flex items-center">
            <span className="text-4xl md:text-6xl font-light mr-1">©</span>
            {project.title.trim()}
          </h1>
        </div>
      </div>

      {/* Project Details */}
      <div className="my-auto max-w-md space-y-6">
        <p className="text-xs tracking-[0.2em] text-white/50 font-medium">
          PROJECT {project.id}
        </p>
        <p className="text-2xl md:text-[2rem] font-normal leading-[1.2] tracking-tight text-white/90">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/90 hover:text-white transition-colors border-b border-white/30 pb-1"
        >
          Visit Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Tagline */}
      <div className="max-w-md pr-4">
        <p className="text-base md:text-lg font-normal leading-[1.4] tracking-tight text-white/50">
          I build story-driven digital experiences that are visually stunning, technically robust, and strategically aligned with your business goals.
        </p>
      </div>
    </ProjectsShell>
  );
}
