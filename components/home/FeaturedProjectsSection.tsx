import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  stats: {
    size: string;
    duration: string;
  };
}

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export default function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-between items-end mb-20">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Featured Work</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Recent
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="hidden lg:flex border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6 font-bold hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl min-h-[500px] hover:border-teal-500 transition-all duration-500 cursor-pointer hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Project info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/90 transition-all duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-white/60 text-sm font-semibold">{project.year}</span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 font-medium">{project.location}</p>
                <div className="flex gap-6 text-sm text-white/70">
                  <div>
                    <span className="font-semibold">{project.stats.size}</span>
                    <span className="ml-2">Size</span>
                  </div>
                  <div>
                    <span className="font-semibold">{project.stats.duration}</span>
                    <span className="ml-2">Duration</span>
                  </div>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

