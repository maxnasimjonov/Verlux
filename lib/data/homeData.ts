export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  angle: string;
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
    title: "Residential",
    subtitle: "Construction",
    description: "Custom homes built to your exact specifications with precision and care",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    angle: "rotate-3",
  },
  {
    icon: "Building2",
    title: "Commercial",
    subtitle: "Construction",
    description: "Professional commercial building solutions that scale with your business",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    angle: "-rotate-2",
  },
  {
    icon: "Hammer",
    title: "Renovations",
    subtitle: "& Remodeling",
    description: "Transform your existing space into something extraordinary",
    gradient: "from-orange-500 via-red-500 to-rose-500",
    angle: "rotate-2",
  },
  {
    icon: "Wrench",
    title: "Kitchen",
    subtitle: "& Bathroom",
    description: "Complete remodeling services with attention to every detail",
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    angle: "-rotate-1",
  },
  {
    icon: "Layers",
    title: "Roofing",
    subtitle: "Services",
    description: "Expert roof installation and repair that stands the test of time",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    angle: "rotate-1",
  },
  {
    icon: "Flower2",
    title: "Landscaping",
    subtitle: "& Design",
    description: "Beautiful outdoor spaces that complement your architecture",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    angle: "-rotate-2",
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

