import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/homeData";
import { serviceDetails } from "@/lib/data/serviceDetails";
import { serviceGalleryImages, processIcons } from "@/lib/data/serviceGallery";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  Wrench,
  Droplets,
  Ruler,
  FileCheck,
  ClipboardCheck,
  Search,
  FileText,
  CheckCircle2,
  FlaskConical,
  Trash2,
  Brush,
  Cylinder,
  Target,
  CheckSquare,
  BookOpen,
  Calculator,
  HardHat,
  Award,
  Package,
  Grid3X3,
  Palette,
  Thermometer,
  Scissors,
  Sparkles,
  Hammer,
  Paintbrush,
  Layers,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import FAQAccordion from "@/components/ui/faq-accordion";

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

const processIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck,
  Search,
  FileText,
  Hammer,
  Droplets,
  CheckCircle2,
  FlaskConical,
  Trash2,
  Brush,
  Cylinder,
  Target,
  CheckSquare,
  BookOpen,
  Paintbrush,
  Layers,
  Shield,
  Calculator,
  HardHat,
  Award,
  Package,
  Wrench,
  Grid3X3,
  Palette,
  Thermometer,
  Scissors,
  Sparkles,
  Ruler,
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const details = serviceDetails[slug];
  const galleryImages = serviceGalleryImages[slug] || [];
  const processIconNames = processIcons[slug] || [];

  return (
    <div className="min-h-screen bg-white text-brand overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 lg:px-16 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left" delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-gray-50 mb-8">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Our Services</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-brand tracking-tight">
                  {service.fullTitle}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                  {service.detailedDescription || service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 font-semibold border-2 border-brand text-brand bg-white hover:bg-brand hover:text-white transition-all duration-200"
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-[600px] overflow-hidden">
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

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-brand tracking-tight">
                  Our {service.fullTitle} Work
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  Browse through our completed {service.fullTitle.toLowerCase()} projects
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((image, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.05 + index * 0.03}>
                  <div className="group relative aspect-square overflow-hidden bg-gray-200">
                    <Image
                      src={image}
                      alt={`${service.fullTitle} project ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center px-6 py-4 font-semibold border-2 border-brand text-brand bg-white hover:bg-brand hover:text-white transition-all duration-200"
              >
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-brand tracking-tight">
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
                  <div className="p-6 border border-gray-300 bg-white hover:border-brand hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 border-2 border-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-brand"></div>
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

      {/* Process Section with Icons */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-brand tracking-tight">
                  Our Process
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  A systematic approach ensuring quality results
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => {
                const iconName = processIconNames[index] || "CheckCircle2";
                const ProcessIcon = processIconMap[iconName] || CheckCircle2;
                return (
                  <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                    <div className="bg-white border border-gray-300 p-6 hover:border-brand hover:shadow-md transition-all duration-200 group">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 border-2 border-brand bg-white flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-200">
                          <ProcessIcon className="w-6 h-6" />
                        </div>
                        <div className="pt-1">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                            Step {index + 1}
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed">{step}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
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
                        src={galleryImages[1] || service.image}
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
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand bg-white mb-6">
                          <span className="text-xs font-semibold uppercase tracking-wider text-brand">{details.whyItMatters.badge.text}</span>
                        </div>
                      )}
                      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-brand tracking-tight">
                        {details.whyItMatters.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        {details.whyItMatters.description}
                      </p>
                      <div className="space-y-6">
                        {details.whyItMatters.points.map((point, index) => {
                          const PointIcon = iconComponentMap[point.icon];
                          return (
                            <div key={index} className="flex items-start gap-4 border-l-4 border-brand pl-6">
                              <div className="w-10 h-10 border-2 border-brand bg-white flex items-center justify-center flex-shrink-0">
                                {PointIcon && <PointIcon className="w-5 h-5 text-brand" />}
                              </div>
                              <div>
                                <h3 className="font-semibold text-brand mb-2 text-lg">{point.title}</h3>
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
            <section className="py-20 px-8 lg:px-16 bg-gray-50">
              <div className="container mx-auto max-w-7xl">
                <ScrollAnimation direction="up" delay={0.1}>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-brand tracking-tight">
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
                        <div className="p-6 border border-gray-300 bg-white hover:border-brand hover:shadow-md transition-all duration-200 group">
                          <div className="w-14 h-14 border-2 border-brand bg-white flex items-center justify-center mb-5 group-hover:bg-brand transition-all duration-200">
                            {ProblemIcon && <ProblemIcon className="w-7 h-7 text-brand group-hover:text-white transition-all duration-200" />}
                          </div>
                          <h3 className="text-lg font-semibold text-brand mb-3">{problem.title}</h3>
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
                      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-brand tracking-tight">
                        Why Choose Our {service.fullTitle}
                      </h2>
                      <div className="space-y-8">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex gap-5 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                            <div className="w-8 h-8 border-2 border-brand bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-brand"></div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-brand mb-2 text-lg">{benefit.title}</h3>
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
                        src={galleryImages[2] || service.image}
                        alt={`Professional ${service.fullTitle.toLowerCase()}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="text-center p-10 bg-white border-2 border-brand max-w-sm">
                          <div className="text-5xl font-bold text-brand mb-2">15+</div>
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
            <section className="py-16 px-8 lg:px-16 bg-gray-50">
              <div className="container mx-auto max-w-4xl">
                <ScrollAnimation direction="up" delay={0.1}>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-brand tracking-tight">
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
