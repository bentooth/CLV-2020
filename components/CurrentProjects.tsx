import { currentProjects } from "@/data/projects";

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 15.5h2.2c.9 0 1.5-.5 1.5-1.25S11.6 13 10.7 13H8.5v4M14 17v-4h2.2c.8 0 1.3.4 1.3 1s-.5 1-1.3 1H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CurrentProjects() {
  if (currentProjects.length === 0) return null;

  return (
    <section
      className="border-t border-border bg-surface"
      aria-labelledby="current-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="max-w-2xl">
          <h2
            id="current-projects-heading"
            className="text-2xl font-bold tracking-wide text-foreground md:text-3xl"
          >
            Current Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            Home plans for projects currently underway.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-6">
          {currentProjects.map((project) => (
            <li key={project.id}>
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-border bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-surface text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <PdfIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold tracking-wide text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </div>
                <span className="mt-5 text-xs font-bold uppercase tracking-wide text-accent">
                  View plans →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
