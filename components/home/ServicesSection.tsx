"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Building,
  Hammer,
  Home,
  Layers,
  Droplet,
  Paintbrush,
  Square,
  Maximize,
} from "lucide-react";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/data/homeData";
import ScrollAnimation from "@/components/ui/scroll-animation";
import StaggerAnimation from "@/components/ui/stagger-animation";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Building,
  Hammer,
  Layers,
  Droplet,
  Paintbrush,
  Square,
  Maximize,
};

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  // Show only the first 3 services on home page
  const featuredServices = services.slice(0, 3);

  return (
    <section className="relative pt-32 pb-8 px-8 lg:px-16 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
            <div className="text-md uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">Our Services</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive construction solutions tailored to your unique needs and vision.
            </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8 py-6 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
        
        <StaggerAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          direction="up"
        >
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            if (!Icon) return null;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative overflow-hidden bg-white border-2 border-gray-200 min-h-[350px] flex flex-col justify-between hover:border-gray-600 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl ${
                  hoveredService === index ? 'z-20' : ''
                }`}
              >
                {/* Service Image - Always visible */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500"></div>
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-[1]"></div>
                
                {/* Content - Title always visible, rest on hover */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8">
                  {/* Title - Always visible */}
                  <div>
                    <h3 className="text-3xl font-black mb-1 text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>

                  {/* Additional info - Shows on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-15 h-15 rounded-2xl bg-gray-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-200 mb-4">{service.subtitle}</h4>
                      <p className="text-gray-200 leading-relaxed mb-8">{service.description}</p>
                    </div>
                    <div className="inline-flex items-center text-white font-bold transition-colors group/link hover:text-gray-500">
                      Learn More
                      <ChevronRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-[1]"></div>
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}

