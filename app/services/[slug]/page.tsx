import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/homeData";
import { serviceDetails } from "@/lib/data/serviceDetails";
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
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Shield,
  AlertTriangle,
  Wrench,
  Droplets,
  Ruler,
  FileCheck,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/faq-accordion";

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

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Verlux Construction",
    };
  }

  return {
    title: `${service.fullTitle} | Verlux Construction`,
    description: service.detailedDescription || service.description,
  };
}

const iconComponentMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Wrench,
  Droplets,
  AlertTriangle,
  Ruler,
  FileCheck,
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const details = serviceDetails[slug];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left" delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                  <span className="text-sm font-bold text-teal-700 uppercase tracking-wide">Our Services</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
                  {service.fullTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {service.detailedDescription || service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white rounded-full px-8 py-6 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/quote">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-8 py-6 font-bold border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
                  >
                    <Link href="/services">
                      View All Services
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.fullTitle}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive solutions tailored to your specific needs
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                  <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-teal-500 bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 font-semibold text-lg leading-relaxed">{feature}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-12 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-black mb-2 text-gray-900">
                  Our Process
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A systematic approach ensuring quality results
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.process.map((step, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-teal-500 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed pt-1.5">{step}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific Detailed Content */}
      {details && (
        <>
          {/* Why It Matters Section */}
          {details.whyItMatters && (
            <section className="py-20 px-8 lg:px-16 bg-white">
              <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <ScrollAnimation direction="left" delay={0.1}>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={details.whyItMatters.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={0.2}>
                    <div>
                      {details.whyItMatters.badge && (
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          details.whyItMatters.badge.color === "red" ? "bg-red-50 border-red-100" :
                          details.whyItMatters.badge.color === "orange" ? "bg-orange-50 border-orange-100" :
                          details.whyItMatters.badge.color === "blue" ? "bg-blue-50 border-blue-100" :
                          details.whyItMatters.badge.color === "amber" ? "bg-amber-50 border-amber-100" :
                          details.whyItMatters.badge.color === "cyan" ? "bg-cyan-50 border-cyan-100" :
                          "bg-teal-50 border-teal-100"
                        } border mb-6`}>
                          <AlertTriangle className={`w-4 h-4 ${
                            details.whyItMatters.badge.color === "red" ? "text-red-600" :
                            details.whyItMatters.badge.color === "orange" ? "text-orange-600" :
                            details.whyItMatters.badge.color === "blue" ? "text-blue-600" :
                            details.whyItMatters.badge.color === "amber" ? "text-amber-600" :
                            details.whyItMatters.badge.color === "cyan" ? "text-cyan-600" :
                            "text-teal-600"
                          }`} />
                          <span className={`text-sm font-bold uppercase tracking-wide ${
                            details.whyItMatters.badge.color === "red" ? "text-red-700" :
                            details.whyItMatters.badge.color === "orange" ? "text-orange-700" :
                            details.whyItMatters.badge.color === "blue" ? "text-blue-700" :
                            details.whyItMatters.badge.color === "amber" ? "text-amber-700" :
                            details.whyItMatters.badge.color === "cyan" ? "text-cyan-700" :
                            "text-teal-700"
                          }`}>{details.whyItMatters.badge.text}</span>
                        </div>
                      )}
                      <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
                        {details.whyItMatters.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {details.whyItMatters.description}
                      </p>
                      <div className="space-y-4">
                        {details.whyItMatters.points.map((point, index) => {
                          const PointIcon = iconComponentMap[point.icon];
                          return (
                            <div key={index} className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                {PointIcon && <PointIcon className="w-6 h-6 text-teal-600" />}
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 mb-1">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>
          )}

          {/* Common Problems Section */}
          {details.commonProblems && details.commonProblems.length > 0 && (
            <section className="py-20 px-8 lg:px-16 bg-white">
              <div className="container mx-auto max-w-7xl">
                <ScrollAnimation direction="up" delay={0.1}>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
                      Common {service.fullTitle} Problems We Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      We address all types of issues and deterioration related to {service.fullTitle.toLowerCase()}
                    </p>
                  </div>
                </ScrollAnimation>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {details.commonProblems.map((problem, index) => {
                    const ProblemIcon = iconComponentMap[problem.icon];
                    return (
                      <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                        <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-teal-500 bg-white hover:shadow-xl transition-all duration-300 group">
                          <div className="w-16 h-16 rounded-xl bg-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            {ProblemIcon && <ProblemIcon className="w-8 h-8 text-white" />}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                        </div>
                      </ScrollAnimation>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Benefits Section */}
          {details.benefits && details.benefits.length > 0 && (
            <section className="py-20 px-8 lg:px-16 bg-white">
              <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <ScrollAnimation direction="left" delay={0.1}>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-bold text-teal-700 uppercase tracking-wide">Benefits</span>
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
                        Why Choose Our {service.fullTitle}
                      </h2>
                      <div className="space-y-6">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1 text-lg">{benefit.title}</h3>
                              <p className="text-gray-600">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={0.2}>
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={`Professional ${service.fullTitle.toLowerCase()}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8 bg-white/90 backdrop-blur-md rounded-xl max-w-sm">
                          <div className="text-4xl font-black text-gray-900 mb-2">15+</div>
                          <div className="text-lg font-bold text-gray-700">Years of Experience</div>
                          <div className="text-sm text-gray-600 mt-2">In {service.fullTitle.toLowerCase()}</div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {details.faqs && details.faqs.length > 0 && (
            <section className="py-12 px-8 lg:px-16 bg-gray-50">
              <div className="container mx-auto max-w-4xl">
                <ScrollAnimation direction="up" delay={0.1}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-black mb-2 text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                      Everything you need to know about {service.fullTitle.toLowerCase()}
                    </p>
                  </div>
                </ScrollAnimation>
                <FAQAccordion items={details.faqs} />
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation direction="up" delay={0.1}>
            {Icon && (
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
            )}
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-50/90 mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Our experts are ready to help with your {service.fullTitle.toLowerCase()} needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="tel:+14374520850"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full font-bold transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 (437) 452-0850
              </a>
              <a
                href="mailto:info@verlux.com"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full font-bold transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@verlux.com
              </a>
            </div>
            <Button
              asChild
              className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
