"use client";

import { stats } from "@/lib/data/aboutData";

export default function CompanyStats() {
    return (
        <section className="py-16 bg-brand text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 mb-4 group-hover:bg-white/20 transition-all duration-300">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-4xl lg:text-5xl font-black mb-2 text-white">
                                    {stat.value}
                                </div>
                                <div className="text-base font-semibold mb-1 text-white/90 uppercase tracking-wider">{stat.label}</div>
                                <div className="text-white/60 text-sm">{stat.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
