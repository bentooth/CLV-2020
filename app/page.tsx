import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeCta from "@/components/HomeCta";
import RecentProjects from "@/components/RecentProjects";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: {
    absolute: "CLV Construction",
  },
  description:
    "CLV Construction is a Texas based, full service contractor specializing in commercial, residential, and remodeling construction across Brownsville and the Rio Grande Valley.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CLV Construction",
    description:
      "Texas based full service contractor for commercial, residential, and remodeling construction in the Rio Grande Valley.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <RecentProjects />
      <Testimonials />
      <HomeCta />
    </>
  );
}
