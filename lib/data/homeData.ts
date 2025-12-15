export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  angle: string;
  image: string;
}

export interface Project {
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

export interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  project: string;
  rating: number;
  text: string;
  avatar: string;
  gradient: string;
}

export const services: Service[] = [
  {
    icon: "Home",
    title: "Balcony",
    subtitle: "Restoration",
    description: "Expert balcony restoration services to restore safety and beauty to your outdoor spaces",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    angle: "rotate-3",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: "Hammer",
    title: "Masonry",
    subtitle: "Restoration",
    description: "Professional masonry restoration to preserve and restore the structural integrity of your building",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    angle: "-rotate-2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
  },
  {
    icon: "Droplet",
    title: "Caulking & Sealant",
    subtitle: "Application",
    description: "Professional caulking and sealant application to protect your building from water damage and energy loss",
    gradient: "from-orange-500 via-red-500 to-rose-500",
    angle: "rotate-2",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: "Paintbrush",
    title: "Architectural Coating",
    subtitle: "/ Painting",
    description: "Expert architectural coating and painting services to enhance and protect your building's exterior",
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    angle: "-rotate-1",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: "Building2",
    title: "Underground Garage",
    subtitle: "Structure Repairs",
    description: "Comprehensive underground garage structure repairs to ensure safety and structural integrity",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    angle: "rotate-1",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: "Layers",
    title: "Roof Replacement",
    subtitle: "& Repair",
    description: "Expert roof replacement and repair services that stand the test of time and weather",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    angle: "-rotate-2",
    image: "https://primeroofingfl.com/wp-content/uploads/2025/05/roofing-contractor-at-work.jpg",
  },
  {
    icon: "Building",
    title: "Stucco Installation",
    subtitle: "& Repair",
    description: "Professional stucco installation and repair services for durable and beautiful exteriors",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    angle: "rotate-2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
  },
  {
    icon: "Square",
    title: "Siding Installation",
    subtitle: "& Repair",
    description: "Expert siding installation and repair to enhance curb appeal and protect your property",
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    angle: "-rotate-1",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: "Maximize",
    title: "Windows",
    subtitle: "Installations",
    description: "Professional window installations to improve energy efficiency and enhance your property's value",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    angle: "rotate-1",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Modern Family Home",
    category: "Residential",
    location: "Downtown Area",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    stats: { size: "3,200 sqft", duration: "8 months" },
  },
  {
    title: "Office Complex",
    category: "Commercial",
    location: "Business District",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    stats: { size: "45,000 sqft", duration: "14 months" },
  },
  {
    title: "Luxury Kitchen Remodel",
    category: "Renovation",
    location: "Suburban Home",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
    stats: { size: "650 sqft", duration: "6 weeks" },
  },
  {
    title: "Custom Deck & Patio",
    category: "Outdoor",
    location: "Residential",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    stats: { size: "1,200 sqft", duration: "3 weeks" },
  },
];

export const stats: Stat[] = [
  { value: "15+", label: "Years Experience", icon: "TrendingUp", color: "text-emerald-400" },
  { value: "500+", label: "Projects Completed", icon: "Target", color: "text-blue-400" },
  { value: "98%", label: "Client Satisfaction", icon: "Star", color: "text-cyan-400" },
  { value: "24/7", label: "Support Available", icon: "Zap", color: "text-purple-400" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    project: "Kitchen Remodel",
    rating: 5,
    text: "Verlux transformed our kitchen beyond our wildest expectations. The attention to detail and professionalism is unmatched.",
    avatar: "SJ",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    project: "Commercial Build",
    rating: 5,
    text: "Outstanding work on our office space. They completed the project ahead of schedule and under budget. Exceptional!",
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    project: "Home Renovation",
    rating: 5,
    text: "Working with Verlux was a dream. They brought our vision to life and exceeded every expectation along the way.",
    avatar: "ER",
    gradient: "from-purple-500 to-violet-500",
  },
];

