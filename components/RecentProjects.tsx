"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const INTERVAL_MS = 4000;
const TRANSITION_MS = 700;

const recentProjectImages = [
  "/recent-projects/3104_basque_1.jpg",
  "/recent-projects/10_conquistador_1.jpg",
  "/recent-projects/4830_Villa_Madrid_4.JPG",
  "/recent-projects/5526_Rawhide_Dr_1.JPG",
  "/recent-projects/5778_Buckeye_ct_5.JPG",
  "/recent-projects/Pechero_11.JPG",
  "/recent-projects/nicklestone2.JPG",
  "/recent-projects/IMG_1226.jpg",
  "/recent-projects/IMG_1227.jpg",
  "/recent-projects/IMG_1229.jpg",
  "/recent-projects/IMG_1312.jpg",
  "/recent-projects/IMG_1950.jpg",
  "/recent-projects/IMG_6436.jpg",
  "/recent-projects/IMG_6437%20(1).jpg",
  "/recent-projects/IMG_6486.jpeg",
  "/recent-projects/IMG_6503.jpeg",
  "/recent-projects/IMG_6979.jpg",
  "/recent-projects/IMG_7118.jpg",
  "/recent-projects/IMG_7123.jpg",
  "/recent-projects/IMG_7228.jpg",
  "/recent-projects/gloor.jpg",
  "/recent-projects/dji_fly_20260312_155448_37_1773349026890_photo_optimized.JPEG",
  "/recent-projects/Screenshot%202026-08-01%20at%208.42.53%E2%80%AFPM.jpg",
] as const;

const midpoint = Math.ceil(recentProjectImages.length / 2);
const topSource = recentProjectImages.slice(0, midpoint);
const bottomSource = recentProjectImages.slice(midpoint);

const slideCount = Math.min(topSource.length, bottomSource.length);
const topImages = topSource.slice(0, slideCount);
const bottomImages = bottomSource.slice(0, slideCount);

type MarqueeRowProps = {
  images: readonly string[];
  label: string;
  cardClassName: string;
  rowClassName: string;
  index: number;
  enableTransition: boolean;
};

function MarqueeRow({
  images,
  label,
  cardClassName,
  rowClassName,
  index,
  enableTransition,
}: MarqueeRowProps) {
  const loopImages = [...images, ...images];

  return (
    <div
      className={`overflow-hidden ${rowClassName}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-3 md:gap-4 ${
          enableTransition
            ? "transition-transform duration-700 ease-out motion-reduce:transition-none"
            : ""
        }`}
        style={{
          transform: `translateX(calc(-1 * ${index} * var(--project-step)))`,
        }}
      >
        {loopImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`relative shrink-0 overflow-hidden bg-surface ${cardClassName}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 70vw, 360px"
            />
          </div>
        ))}
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function RecentProjects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const activeDot = index % slideCount;

  useEffect(() => {
    if (paused || slideCount <= 1 || index >= slideCount) return;

    const id = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, index]);

  useEffect(() => {
    if (index < slideCount) return;

    const timeout = window.setTimeout(() => {
      setEnableTransition(false);
      setIndex(0);
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (enableTransition) return;
    const frame = window.requestAnimationFrame(() => {
      setEnableTransition(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [enableTransition]);

  function goToSlide(slide: number) {
    setEnableTransition(true);
    setIndex(slide);
  }

  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="recent-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h2
          id="recent-projects-heading"
          className="text-3xl font-bold tracking-wide text-foreground md:text-4xl"
        >
          Recent Projects
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
          Custom homes and remodels built across the Rio Grande Valley.
        </p>
      </div>

      <div
        className="mt-8 md:mt-10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Recent project photos"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setPaused(false);
          }
        }}
      >
        <div className="flex flex-col gap-3 md:gap-4">
          <MarqueeRow
            images={topImages}
            label="Recent project photos"
            index={index}
            enableTransition={enableTransition}
            rowClassName="[--project-step:calc(280px+0.75rem)] sm:[--project-step:calc(340px+0.75rem)] md:[--project-step:calc(380px+1rem)]"
            cardClassName="h-44 w-[280px] sm:h-52 sm:w-[340px] md:h-56 md:w-[380px]"
          />
          <MarqueeRow
            images={bottomImages}
            label="More project photos"
            index={index}
            enableTransition={enableTransition}
            rowClassName="[--project-step:calc(240px+0.75rem)] sm:[--project-step:calc(280px+0.75rem)] md:[--project-step:calc(300px+1rem)]"
            cardClassName="h-36 w-[240px] sm:h-40 sm:w-[280px] md:h-44 md:w-[300px]"
          />
        </div>

        <div className="mt-5 flex justify-center gap-2 md:mt-6">
          {Array.from({ length: slideCount }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1} of ${slideCount}`}
              aria-current={i === activeDot}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                i === activeDot
                  ? "w-6 bg-accent"
                  : "w-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center md:mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:bg-[#8f181b] md:px-6 md:py-3 md:text-sm"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
