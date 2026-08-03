"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectLightbox from "@/components/ProjectLightbox";

export default function ProjectGallery() {
  const [active, setActive] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  function openProject(project: Project) {
    setActive(project);
    setImageIndex(0);
  }

  return (
    <>
      <section
        className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14"
        aria-labelledby="completed-projects-heading"
      >
        <div className="max-w-2xl">
          <h2
            id="completed-projects-heading"
            className="text-2xl font-bold tracking-wide text-foreground md:text-3xl"
          >
            Completed Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            Browse finished residential and remodel work by category.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              className="group block w-full overflow-hidden border border-border bg-white text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]"
            >
              <div className="relative w-full overflow-hidden bg-surface pt-[75%]">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="border-t-2 border-accent p-5 md:p-6">
                <h3 className="text-lg font-bold tracking-wide text-foreground md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {project.images.length}{" "}
                  {project.images.length === 1 ? "photo" : "photos"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active ? (
        <ProjectLightbox
          project={active}
          index={imageIndex}
          onIndexChange={setImageIndex}
          onClose={() => setActive(null)}
        />
      ) : null}
    </>
  );
}
