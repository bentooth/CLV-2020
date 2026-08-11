import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";
import { affiliates } from "@/data/affiliates";

export const metadata: Metadata = {
  title: "Affiliates",
  description:
    "Meet CLV Construction's trusted affiliates and partners serving Brownsville and the Rio Grande Valley.",
  alternates: {
    canonical: "/affiliates",
  },
  openGraph: {
    title: "Affiliates | CLV Construction",
    description:
      "Meet CLV Construction's trusted affiliates and partners serving Brownsville and the Rio Grande Valley.",
    url: "/affiliates",
  },
};

export default function AffiliatesPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14">
      <h1 className="text-2xl font-bold tracking-wide md:text-3xl">
        Affiliates
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {affiliates.map((affiliate) => (
          <AffiliateCard key={affiliate.name} affiliate={affiliate} />
        ))}
      </div>
    </section>
  );
}
