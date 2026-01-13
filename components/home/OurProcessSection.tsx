"use client";

import Image from "next/image";
import { FileText, Search, Hammer, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import StaggerAnimation from "@/components/ui/stagger-animation";

const steps = [
  {
    number: "01",
    title: "Consultation & Planning",
    description: "We start by understanding your vision, budget, and timeline. Our team conducts a thorough site assessment and creates a detailed project plan tailored to your needs.",
    icon: FileText,
    image: "/assests/wall-measurement-construction-tape.JPG",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design & Approval",
    description: "Our architects and designers work closely with you to refine the design, ensuring it meets all requirements and regulations before obtaining necessary permits.",
    icon: Search,
    image: "/assests/exterior-wall-brick-patterning-scaffolding.JPG",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Construction & Execution",
    description: "With your approval, our skilled team begins construction. We maintain open communication, provide regular updates, and ensure quality at every stage.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-gray-700 to-red-500",
  },
  {
    number: "04",
    title: "Completion & Handover",
    description: "We conduct final inspections, address any concerns, and ensure everything meets our high standards before handing over your completed project with full documentation.",
    icon: CheckCircle,
    image: "/assests/apartment-building-scaffolding-construction.JPG",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function OurProcessSection() {
  return (
    <section className="relative py-20 lg:py-24 px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">Our Process</div>
            <h2 className="text-6xl sm:text-6xl lg:text-6xl font-black mb-6 leading-tight">
              How We Build Your Dreams
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial consultation to final handover, we follow a proven process that ensures quality, transparency, and your complete satisfaction.
            </p>
          </div>
        </ScrollAnimation>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Container */}
          <div className="relative">
            {/* Main connecting line for desktop - aligned with node centers */}
            <div className="hidden lg:block absolute top-[36px] left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            
            <StaggerAnimation
              className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-6 lg:items-stretch"
              staggerDelay={0.1}
              direction="up"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div key={index} className="relative group flex flex-col h-full">
                    {/* Timeline node connector */}
                    <div className="hidden lg:flex flex-col items-center mb-8 flex-shrink-0">
                      {/* Timeline node */}
                      <div className="relative w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center shadow-xl border-4 border-white z-20 group-hover:scale-125 group-hover:shadow-2xl transition-all duration-300 ring-4 ring-white/50">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Step Card - Equal height */}
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col flex-1">
                      {/* Image - Fixed height */}
                      <div className="relative h-56 flex-shrink-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gray-600/10 blur-2xl opacity-60 -z-10 transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                        
                        {/* Step Number */}
                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                          <span className="text-sm font-black text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Content - Flexible, pushes indicator to bottom */}
                      <div className="p-6 flex flex-col flex-1 min-h-0">
                        <h3 className="text-xl xl:text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                          {step.description}
                        </p>
                        
                        {/* Step indicator - Always at bottom */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-600 text-white text-xs font-semibold shadow-sm w-fit mt-auto">
                          <span>Step {index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </StaggerAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

