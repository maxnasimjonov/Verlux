"use client";

import type { Stat } from "@/lib/data/homeData";
import StaggerAnimation from "@/components/ui/stagger-animation";

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative pt-8 pb-12 px-8 lg:px-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <StaggerAnimation
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          staggerDelay={0.1}
          direction="up"
        >
          {stats.map((stat, index) => {
            return (
              <div 
                key={index} 
                className="group text-center transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-600 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}

