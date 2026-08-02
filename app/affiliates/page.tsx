import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";
import { affiliates } from "@/data/affiliates";

export const metadata: Metadata = {
  title: "Affiliates",
};

export default function AffiliatesPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 md:px-6 md:py-14">
      {affiliates.map((affiliate) => (
        <AffiliateCard key={affiliate.name} affiliate={affiliate} />
      ))}
    </section>
  );
}
