import Image from "next/image";

export default function VaBadge() {
  return (
    <section className="relative overflow-hidden bg-surface py-8 md:py-10">
      <Image
        src="/images/rwb2.png"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Certified by
        </p>
        <Image
          src="/images/va.png"
          alt="VA certified"
          width={280}
          height={120}
          className="h-auto w-[200px] object-contain md:w-[280px]"
        />
      </div>
    </section>
  );
}
