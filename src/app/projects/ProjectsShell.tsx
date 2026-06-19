"use client";

import NavMenu from "../components/NavMenu";

// Shared chrome for the projects list page and every single-project detail
// page: background grid, the right-hand showcase column, and the navigation
// menu. Only the left column (`children`) changes per page.
export default function ProjectsShell({
  children,
  video = "/project-page.MOV",
}: {
  children: React.ReactNode;
  video?: string;
}) {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-hidden select-none">

      {/* 1. Background Vertical Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-r border-white/[0.03] h-full last:border-r-0"
          />
        ))}
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 min-h-screen w-full grid grid-cols-12 px-6 md:px-12 py-8">

        {/* Left Column: page-specific content */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full min-h-[85vh] md:min-h-0">
          {children}
        </div>

        {/* Right Column: Navigation Header & Project Showcase */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full mt-12 md:mt-0">

          {/* Top Header Navigation (Menu Link) */}
          <div className="flex justify-end items-start pt-2">
            <NavMenu />
          </div>

          {/* Project Feature Showcase */}
          <div className="w-full flex flex-col gap-4 mt-auto">
            <div className="flex justify-between items-center w-full group cursor-pointer border-b border-white/10 pb-3" />

            {/* Featured Hero Showcase */}
            <div className="relative w-full aspect-[16/9] grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl overflow-hidden">
              <video
                key={video}
                src={video}
                autoPlay
                loop
                muted
                className="object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
