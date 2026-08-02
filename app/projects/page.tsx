import type { Metadata } from "next";
import Image from "next/image";
import CurrentProjects from "@/components/CurrentProjects";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <section
        className="relative isolate flex min-h-[180px] items-end md:min-h-[220px]"
        aria-labelledby="projects-heading"
      >
        <Image
          src="/projects-hero.jpg"
          alt="CLV Construction residential project with indoor and outdoor living spaces"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/45 to-[#1a1a1a]/25"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-5 md:px-6 md:py-6">
          <h1
            id="projects-heading"
            className="text-2xl font-bold tracking-wide text-white md:text-3xl"
          >
            Projects
          </h1>
          <p className="mt-1 max-w-xl text-sm text-white/90">
            A selection of residential and commercial work from CLV Construction.
          </p>
        </div>
      </section>
      <ProjectGallery />
      <CurrentProjects />
    </div>
  );
}
