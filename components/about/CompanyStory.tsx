"use client";

import Image from "next/image";
import { companyStory } from "@/lib/data/aboutData";

export default function CompanyStory() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side - Creative grid like home page */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-[200px] overflow-hidden">
                                    <Image
                                        src="/gallery/balcony/balcony-1.png"
                                        alt="Balcony restoration project"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[280px] overflow-hidden">
                                    <Image
                                        src="/gallery/stucco/stucco-1.jpg"
                                        alt="Stucco work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-[280px] overflow-hidden">
                                    <Image
                                        src="/gallery/balcony/balcony-2.jpg"
                                        alt="Balcony project"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[200px] overflow-hidden">
                                    <Image
                                        src="/gallery/masonry/masonry-4.jpg"
                                        alt="Masonry work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Experience badge */}
                        <div className="absolute -bottom-6 -right-6 bg-brand text-white px-8 py-6 shadow-xl">
                            <div className="text-4xl font-black">15+</div>
                            <div className="text-sm uppercase tracking-wider">Years Experience</div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">Our Story</div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                            {companyStory.title}
                        </h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-8 border-l-4 border-brand pl-4">
                            {companyStory.subtitle}
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            {companyStory.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 border-l-4 border-brand">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h4>
                                <p className="text-gray-600">{companyStory.mission}</p>
                            </div>
                            <div className="bg-gray-50 p-6 border-l-4 border-brand">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Our Vision</h4>
                                <p className="text-gray-600">{companyStory.vision}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
