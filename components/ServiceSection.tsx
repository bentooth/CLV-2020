import Image from "next/image";
import { services } from "@/data/projects";

export default function ServiceSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="mb-8 text-center text-3xl font-bold tracking-wide text-foreground md:mb-12 md:text-4xl"
      >
        Our Services
      </h2>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col overflow-hidden border border-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 border-t-2 border-accent p-5 md:p-6">
              <h3 className="text-lg font-bold tracking-wide text-foreground md:text-xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
