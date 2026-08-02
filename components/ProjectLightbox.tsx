"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { Project } from "@/data/projects";

type ProjectLightboxProps = {
  project: Project;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function ProjectLightbox({
  project,
  index,
  onIndexChange,
  onClose,
}: ProjectLightboxProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = project.images.length;
  const current = ((index % count) + count) % count;
  const onCloseRef = useRef(onClose);
  const onIndexChangeRef = useRef(onIndexChange);

  useEffect(() => {
    onCloseRef.current = onClose;
    onIndexChangeRef.current = onIndexChange;
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key === "ArrowRight" && count > 1) {
        onIndexChangeRef.current((current + 1) % count);
      }
      if (event.key === "ArrowLeft" && count > 1) {
        onIndexChangeRef.current((current - 1 + count) % count);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, current]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 text-white">
          <div>
            <h2 id={titleId} className="text-xl font-bold tracking-wide md:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 px-2 py-1 text-sm font-bold uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            aria-label="Close gallery"
          >
            Close
          </button>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black md:aspect-[16/10]">
          <Image
            src={project.images[current]}
            alt={`${project.title} photo ${current + 1} of ${count}`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => onIndexChange((current - 1 + count) % count)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 text-lg font-bold text-white transition-colors hover:bg-black/70 md:left-4"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => onIndexChange((current + 1) % count)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 text-lg font-bold text-white transition-colors hover:bg-black/70 md:right-4"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              {current + 1} / {count}
            </p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => onIndexChange(i)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 transition-opacity ${
                    i === current
                      ? "border-accent opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${i + 1}`}
                  aria-current={i === current}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
