"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

const showcaseImages = [
    { src: "/gallery/stucco/stucco-2.jpg", alt: "Stucco application" },
    { src: "/gallery/caulking/caulking-3.jpg", alt: "Caulking work" },
    { src: "/gallery/balcony/balcony-3.jpg", alt: "Balcony restoration" },
    { src: "/gallery/caulking/caulking-2.jpg", alt: "Precision caulking" },
    { src: "/gallery/caulking/caulking-5.jpg", alt: "Professional caulking" },
    { src: "/gallery/masonry/masonry-4.jpg", alt: "Masonry expertise" },
];

const pillars = [
    { title: "Clear Communication", description: "Transparent updates throughout your project" },
    { title: "Honest Transactions", description: "No hidden fees or surprise costs" },
    { title: "Quality Craftsmanship", description: "Premium materials and expert techniques" },
    { title: "Safety First", description: "Protecting employees and customers alike" },
    { title: "On Time Delivery", description: "Strict adherence to budget and timelines" },
    { title: "Professionalism", description: "Utmost respect and expertise" },
];

export default function WhyDifferent() {
    return (
        <>
            {/* Why Different Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">Why Choose Us</div>
                            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                                What Makes Us Different
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Since 2005, Verlux has been committed to doing things differently. We&apos;ve identified the common challenges in the construction industry and built our company around solving them.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {pillars.map((pillar, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-brand">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{pillar.title}</h4>
                                            <p className="text-sm text-gray-600">{pillar.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/quote"
                                className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative h-[600px] overflow-hidden">
                                <Image
                                    src="/gallery/stucco/stucco-1.jpg"
                                    alt="Construction work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Overlay card */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl max-w-xs">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-brand flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">All Under One Roof</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    We offer a comprehensive range of services, eliminating the hassle of calling multiple contractors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-24 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="text-sm uppercase tracking-[0.2em] text-white/70 font-bold mb-4">Our Work</div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
                            Quality You Can See
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Our portfolio speaks for itself. Browse through some of our recent projects showcasing expert craftsmanship across all our services.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        {showcaseImages.map((image, index) => (
                            <div key={index} className="group relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white font-medium text-sm">{image.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link
                            href="/gallery"
                            className="inline-flex items-center px-8 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
                        >
                            View Full Gallery
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
