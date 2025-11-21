import { Star } from "lucide-react";

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
        <div className="mb-20 max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Testimonials</div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Client
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-teal-500 transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed italic font-medium">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex-shrink-0 flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 font-semibold mb-1">{testimonial.role}</div>
                    <div className="text-sm text-teal-600 font-bold uppercase tracking-wider">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

