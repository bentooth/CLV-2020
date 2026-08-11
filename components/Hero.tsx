import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Homes Built" },
  { value: "100+", label: "Projects Completed" },
];

const primaryCta = {
  href: "/contact",
  label: "Get a Free Estimate",
};

const secondaryCta = {
  href: "/projects",
  label: "View Our Projects",
};

/** Replace this path to swap the hero background image. */
const heroImage = {
  src: "/Home1.jpg",
  alt: "Custom coastal-style home built by CLV Construction in South Texas",
};

export default function Hero() {
  return (
    <section className="relative isolate" aria-labelledby="hero-heading">
      <div className="relative flex min-h-[calc(100svh-11rem)] items-center md:min-h-[calc(100svh-12rem)]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="hero-animate-image object-cover object-[70%_center]"
          sizes="100vw"
        />

        {/* Left-weighted gradient keeps text readable while homes stay visible on the right */}
        <div
          className="hero-animate-overlay absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/45 via-[#1a1a1a]/25 to-[#1a1a1a]/05"
          aria-hidden="true"
        />
        <div
          className="hero-animate-overlay absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 via-transparent to-[#1a1a1a]/10"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 pb-28 md:px-6 md:py-20 md:pb-32 lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="hero-animate-item hero-delay-1 mb-4">
              <span className="inline-block rounded-md bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm md:px-4 md:py-2 md:text-sm">
                Proudly Building Across South Texas
              </span>
            </p>

            <h1
              id="hero-heading"
              className="hero-animate-item hero-delay-2 text-4xl font-bold leading-[1.1] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Built for the RGV.
              <br className="hidden sm:block" />{" "}
              Built to Last.
            </h1>

            <p className="hero-animate-item hero-delay-3 mt-5 max-w-lg text-base leading-relaxed text-white/90 md:mt-6 md:text-lg">
              From custom homes and commercial construction to complete
              remodels, CLV Construction delivers dependable craftsmanship
              throughout the Rio Grande Valley.
            </p>

            <div className="hero-animate-item hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-[#8f181b] md:px-6 md:py-3 md:text-sm"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-white/70 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-white/25 md:px-6 md:py-3 md:text-sm"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlaps the hero image; bottom padding keeps the next section clear */}
      <div className="hero-animate-item hero-delay-5 relative z-20 -mt-16 px-4 pb-8 sm:-mt-14 md:-mt-16 md:px-6 md:pb-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/rwb2.png"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="(max-width: 1152px) 100vw, 1152px"
            aria-hidden="true"
          />
          <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`flex flex-col items-center gap-1 px-6 py-6 text-center sm:py-8 ${
                  index > 0
                    ? "border-t border-border sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <span className="text-3xl font-bold tracking-wide text-accent md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-muted md:text-base">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative z-10 flex flex-col items-center gap-2 border-t border-border px-4 py-5 text-center md:py-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted md:text-sm">
              Certified by
            </p>
            <Image
              src="/images/va.png"
              alt="VA certified"
              width={220}
              height={94}
              className="h-auto w-[160px] object-contain md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
