import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import OurProcessSection from "@/components/home/OurProcessSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import QualityExcellenceSection from "@/components/home/QualityExcellenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { services, featuredProjects, stats, testimonials } from "@/lib/data/homeData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <HeroSection />
      <ServicesSection services={services} />
      <StatsSection stats={stats} />
      <OurProcessSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <QualityExcellenceSection />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
