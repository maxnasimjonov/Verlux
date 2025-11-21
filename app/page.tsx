import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { services, featuredProjects, stats, testimonials } from "@/lib/data/homeData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <HeroSection stats={stats} />
      <ServicesSection services={services} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
