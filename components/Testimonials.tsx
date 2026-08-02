"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;

const testimonials = [
  {
    src: "/testimonials/testimonial-1.png",
    alt: "5-star Google review from Marlena praising CLV renovation work",
    width: 1346,
    height: 606,
  },
  {
    src: "/testimonials/testimonial-2.png",
    alt: "5-star Google review from Cesar de los Santos about CLV building their first home",
    width: 1348,
    height: 406,
  },
  {
    src: "/testimonials/testimonial-3.png",
    alt: "5-star Google review from Emilio Caballero recommending CLV for home buying and building",
    width: 1338,
    height: 276,
  },
  {
    src: "/testimonials/testimonial-4.png",
    alt: "5-star Google review from Shane Wilson about CLV work on South Padre Island",
    width: 1328,
    height: 276,
  },
  {
    src: "/testimonials/testimonial-5.png",
    alt: "5-star Google review from Elisa Macias about CLV walk-in shower remodel",
    width: 1320,
    height: 482,
  },
] as const;

const slideCount = testimonials.length;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slideCount <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, index]);

  function goToSlide(slide: number) {
    setIndex(slide);
  }

  return (
    <section
      id="testimonials"
      className="relative z-10 scroll-mt-40 md:scroll-mt-48"
      aria-labelledby="testimonials-heading"
    >
      <div className="bg-[#202124]">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-5 md:px-6 md:pt-12 md:pb-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold tracking-wide text-white md:text-4xl"
            >
              Testimonials
            </h2>
          </div>

          <div
            className="mx-auto mt-3 max-w-3xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null,
                )
              ) {
                setPaused(false);
              }
            }}
          >
            <div className="grid overflow-hidden">
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.src}
                  className={`col-start-1 row-start-1 flex items-center transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    i === index
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={testimonial.src}
                    alt={i === index ? testimonial.alt : ""}
                    width={testimonial.width}
                    height={testimonial.height}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.src}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1} of ${slideCount}`}
                  aria-current={i === index}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none -mb-16 h-16 bg-gradient-to-b from-[#202124] to-transparent md:-mb-24 md:h-24"
      />
    </section>
  );
}
