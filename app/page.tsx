import Hero from "@/components/Hero";
import HomeCta from "@/components/HomeCta";
import RecentProjects from "@/components/RecentProjects";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";

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
