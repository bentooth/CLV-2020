import Image from "next/image";
import Link from "next/link";

const phone = "(956) 454-4141";
const phoneHref = "tel:9564544141";

const ctaImage = {
  src: "/Final-Cta.jpg",
  alt: "CLV Construction custom home at sunset in South Texas",
};

export default function HomeCta() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="home-cta-heading"
    >
      <Image
        src={ctaImage.src}
        alt={ctaImage.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[#1a1a1a]/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 text-center md:px-6 md:py-16">
        <h2
          id="home-cta-heading"
          className="text-3xl font-bold tracking-wide text-white md:text-4xl"
        >
          Ready to build?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
          Tell us about your project and we&apos;ll put together a free
          estimate for your South Texas build or remodel.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-[#8f181b] md:px-4 md:py-2"
          >
            Get a Free Estimate
          </Link>
          <a
            href={phoneHref}
            className="text-sm font-bold uppercase tracking-wide text-white/95 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Or call {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
