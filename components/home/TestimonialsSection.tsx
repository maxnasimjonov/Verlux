"use client";

import { Star } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import StaggerAnimation from "@/components/ui/stagger-animation";

interface Testimonial {
  name: string;
  role: string;
  project: string;
  rating: number;
  text: string;
  avatar: string;
  gradient: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="mb-20 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">Testimonials</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Client
              <br />
              <span className="text-gray-600">
                Stories
              </span>
            </h2>
          </div>
        </ScrollAnimation>
        
        <StaggerAnimation
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          direction="up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-600 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gray-500 text-gray-500" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed italic font-medium">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 font-semibold mb-1">{testimonial.role}</div>
                    <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggerAnimation>
      </div>
    </section>
  );
}

