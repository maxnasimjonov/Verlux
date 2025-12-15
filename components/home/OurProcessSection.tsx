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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design & Approval",
    description: "Our architects and designers work closely with you to refine the design, ensuring it meets all requirements and regulations before obtaining necessary permits.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Construction & Execution",
    description: "With your approval, our skilled team begins construction. We maintain open communication, provide regular updates, and ensure quality at every stage.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Completion & Handover",
    description: "We conduct final inspections, address any concerns, and ensure everything meets our high standards before handing over your completed project with full documentation.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function OurProcessSection() {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Our Process</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              How We
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Build Your Dreams
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial consultation to final handover, we follow a proven process that ensures quality, transparency, and your complete satisfaction.
            </p>
          </div>
        </ScrollAnimation>

        {/* Process Steps */}
        <StaggerAnimation
          className="space-y-12 lg:space-y-16"
          staggerDelay={0.15}
          direction="up"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl ${
                    !isEven ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  
                  {/* Step Number */}
                  <div className={`absolute top-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl font-black text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white mb-6 shadow-lg`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Step {step.number}</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}

