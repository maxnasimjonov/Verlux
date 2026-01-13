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
      <section className="relative pt-32 pb-24 px-8 lg:px-16 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left" delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-gray-50 mb-8">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Our Services</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 tracking-tight">
                  {service.fullTitle}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                  {service.detailedDescription || service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 font-semibold rounded-none transition-all duration-200"
                  >
                    <Link href="/quote">
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 font-semibold border-2 border-gray-900 rounded-none hover:bg-gray-900 hover:text-white transition-all duration-200"
                  >
                    <Link href="/services">
                      All Services
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.fullTitle}
                  fill
                  className="object-cover grayscale"
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
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                  What We Offer
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive solutions tailored to your specific needs
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                  <div className="p-6 border border-gray-300 bg-white hover:border-gray-900 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-gray-900"></div>
                      </div>
                      <p className="text-gray-700 font-medium text-base leading-relaxed">{feature}</p>
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
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 tracking-tight">
                  Our Process
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  A systematic approach ensuring quality results
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.process.map((step, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                  <div className="bg-white border border-gray-300 p-5 hover:border-gray-900 hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border-2 border-gray-900 bg-white flex items-center justify-center text-gray-900 font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-normal leading-relaxed pt-1">{step}</p>
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
                    <div className="relative h-[500px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={details.whyItMatters.title}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={0.2}>
                    <div>
                      {details.whyItMatters.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-900 bg-white mb-6">
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-900">{details.whyItMatters.badge.text}</span>
                        </div>
                      )}
                      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                        {details.whyItMatters.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        {details.whyItMatters.description}
                      </p>
                      <div className="space-y-6">
                        {details.whyItMatters.points.map((point, index) => {
                          const PointIcon = iconComponentMap[point.icon];
                          return (
                            <div key={index} className="flex items-start gap-4 border-l-4 border-gray-900 pl-6">
                              <div className="w-10 h-10 border-2 border-gray-900 bg-white flex items-center justify-center flex-shrink-0">
                                {PointIcon && <PointIcon className="w-5 h-5 text-gray-900" />}
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
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
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                      Common {service.fullTitle} Problems We Solve
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      We address all types of issues and deterioration related to {service.fullTitle.toLowerCase()}
                    </p>
                  </div>
                </ScrollAnimation>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {details.commonProblems.map((problem, index) => {
                    const ProblemIcon = iconComponentMap[problem.icon];
                    return (
                      <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                        <div className="p-6 border border-gray-300 bg-white hover:border-gray-900 hover:shadow-sm transition-all duration-200">
                          <div className="w-14 h-14 border-2 border-gray-900 bg-white flex items-center justify-center mb-5">
                            {ProblemIcon && <ProblemIcon className="w-7 h-7 text-gray-900" />}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{problem.description}</p>
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
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-gray-50 mb-8">
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Benefits</span>
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-gray-900 tracking-tight">
                        Why Choose Our {service.fullTitle}
                      </h2>
                      <div className="space-y-8">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex gap-5 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                            <div className="w-8 h-8 border-2 border-gray-900 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-gray-900"></div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={0.2}>
                    <div className="relative h-[600px] overflow-hidden border border-gray-300">
                      <Image
                        src={service.image}
                        alt={`Professional ${service.fullTitle.toLowerCase()}`}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="text-center p-10 bg-white border-2 border-gray-900 max-w-sm">
                          <div className="text-5xl font-bold text-gray-900 mb-2">15+</div>
                          <div className="text-base font-semibold text-gray-700 uppercase tracking-wide">Years of Experience</div>
                          <div className="text-sm text-gray-600 mt-3">In {service.fullTitle.toLowerCase()}</div>
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
                  <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 tracking-tight">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-base text-gray-600">
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

    </div>
  );
}
