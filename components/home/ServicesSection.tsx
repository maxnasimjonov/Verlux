"use client";

import { useState } from "react";
import {
  Building2,
  Hammer,
  Home,
  Wrench,
  Flower2,
  Layers,
} from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/data/homeData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Hammer,
  Wrench,
  Layers,
  Flower2,
};

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-8 lg:px-16 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Our Services</div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            What We
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive construction solutions tailored to your unique needs and vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            if (!Icon) return null;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative overflow-hidden bg-white border-2 border-gray-200 p-8 min-h-[350px] flex flex-col justify-between hover:border-teal-500 transition-all duration-500 cursor-pointer ${service.angle} hover:rotate-0 hover:scale-105 hover:shadow-2xl ${
                  hoveredService === index ? 'z-20' : ''
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-3xl font-black mb-1 text-gray-900 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <h4 className="text-xl font-bold text-gray-600">{service.subtitle}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                </div>

                <Link 
                  href="/services" 
                  className="relative z-10 inline-flex items-center text-gray-900 font-bold group/link hover:text-teal-600 transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </Link>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

