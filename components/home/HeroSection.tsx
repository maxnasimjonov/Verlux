"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Play,
  TrendingUp,
  Target,
  Star,
  Zap,
} from "lucide-react";
// import Link from "next/link";
import type { Stat } from "@/lib/data/homeData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Target,
  Star,
  Zap,
};

interface HeroSectionProps {
  stats: Stat[];
}

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 sm:pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white mb-8 shadow-lg shadow-teal-500/30">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Award-Winning Excellence</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
              Building Your Dreams,
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                One Brick at a Time
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-medium">
              Transform your vision into reality with precision, passion, and unparalleled expertise in construction.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white border-0 rounded-full font-bold shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 border-2 border-gray-900 text-gray-900 bg-white hover:bg-gray-900 hover:text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Our Work
              </Button>
            </div>

            {/* Stats Grid - Desktop only */}
            <div className="hidden lg:grid grid-cols-4 gap-6 pt-8 border-t-2 border-gray-200">
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                if (!Icon) return null;
                return (
                  <div key={index} className="group">
                    <Icon className={`w-6 h-6 ${stat.color} mb-3 group-hover:scale-125 transition-transform`} />
                    <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="House construction site with construction workers building a residential home"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Row - Mobile only (after image) */}
        <div className="lg:hidden flex items-center justify-between gap-4 mt-8 pt-6 border-t-2 border-gray-200">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            if (!Icon) return null;
            return (
              <div key={index} className="group flex-1 text-center">
                <Icon className={`w-4 h-4 ${stat.color} mb-2 mx-auto group-hover:scale-125 transition-transform`} />
                <div className="text-xl font-black text-gray-900 mb-0.5">{stat.value}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
