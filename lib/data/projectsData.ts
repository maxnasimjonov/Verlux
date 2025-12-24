export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  images?: string[];
  description: string;
  stats: {
    size: string;
    duration: string;
    budget?: string;
  };
  features?: string[];
  serviceType: string;
}

export const allProjects: Project[] = [
  {
    id: "1",
    title: "Modern Family Home",
    category: "Residential",
    serviceType: "Residential Construction",
    location: "Downtown Toronto",
    year: "2024",
    image: "/assests/apartment-building-scaffolding-construction.JPG",
    images: [
      "/assests/apartment-building-scaffolding-construction.JPG",
      "/assests/brickwork-installation-worker-scaffolding.JPG",
      "/assests/building-facade-construction-worker.JPG",
    ],
    description: "A stunning modern family home featuring open-concept living, premium finishes, and sustainable design elements. This 3,200 sqft home includes 4 bedrooms, 3 bathrooms, and a spacious backyard perfect for family gatherings.",
    stats: { size: "3,200 sqft", duration: "8 months", budget: "$850,000" },
    features: ["Open-concept design", "Energy-efficient windows", "Premium hardwood flooring", "Smart home integration", "Custom kitchen", "Master suite with walk-in closet"],
  },
  {
    id: "2",
    title: "Office Complex",
    category: "Commercial",
    serviceType: "Commercial Construction",
    location: "Business District, Toronto",
    year: "2024",
    image: "/assests/building-exterior-textured-brick-scaffolding.JPG",
    images: [
      "/assests/building-exterior-textured-brick-scaffolding.JPG",
      "/assests/building-exterior-textured-brick-scaffolding.JPG",
    ],
    description: "A state-of-the-art office complex designed for modern businesses. Features include flexible workspace configurations, advanced HVAC systems, and sustainable building materials.",
    stats: { size: "45,000 sqft", duration: "14 months", budget: "$12M" },
    features: ["LEED certified", "Flexible floor plans", "Advanced security systems", "Energy-efficient design", "Parking for 200+ vehicles", "Rooftop terrace"],
  },
  {
    id: "3",
    title: "Luxury Kitchen Remodel",
    category: "Renovation",
    serviceType: "Kitchen & Bathroom Remodeling",
    location: "North York, ON",
    year: "2023",
    image: "/assests/interior-wall-black-stripe-painted.JPG",
    images: [
      "/assests/interior-wall-black-stripe-painted.JPG",
      "/assests/interior-utility-installation-pipes.JPG",
    ],
    description: "Complete kitchen transformation featuring custom cabinetry, premium appliances, and elegant quartz countertops. The design maximizes space while maintaining a luxurious aesthetic.",
    stats: { size: "650 sqft", duration: "6 weeks", budget: "$85,000" },
    features: ["Custom cabinetry", "Premium appliances", "Quartz countertops", "Island with seating", "Under-cabinet lighting", "Tile backsplash"],
  },
  {
    id: "4",
    title: "Custom Deck & Patio",
    category: "Outdoor",
    serviceType: "Deck & Patio Construction",
    location: "Mississauga, ON",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    description: "A beautiful outdoor living space featuring composite decking, built-in seating, and a covered pergola. Perfect for entertaining and year-round enjoyment.",
    stats: { size: "1,200 sqft", duration: "3 weeks", budget: "$35,000" },
    features: ["Composite decking", "Built-in seating", "Covered pergola", "Outdoor kitchen area", "LED lighting", "Privacy screens"],
  },
  {
    id: "5",
    title: "Historic Home Restoration",
    category: "Renovation",
    serviceType: "Renovations & Remodeling",
    location: "Old Toronto",
    year: "2023",
    image: "/assests/masonry-restoration-brick-repointing-02.JPG",
    description: "Careful restoration of a century-old Victorian home, preserving original character while adding modern amenities and improving energy efficiency.",
    stats: { size: "2,800 sqft", duration: "10 months", budget: "$450,000" },
    features: ["Original features preserved", "Modern HVAC system", "Updated electrical", "Restored hardwood floors", "Period-appropriate fixtures", "Energy-efficient upgrades"],
  },
  {
    id: "6",
    title: "Retail Storefront",
    category: "Commercial",
    serviceType: "Commercial Construction",
    location: "Yorkville, Toronto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    description: "Modern retail space with floor-to-ceiling windows, custom display fixtures, and an inviting storefront design that maximizes visibility and customer appeal.",
    stats: { size: "3,500 sqft", duration: "4 months", budget: "$280,000" },
    features: ["Floor-to-ceiling windows", "Custom fixtures", "Modern lighting", "Accessible design", "Storage solutions", "Brand integration"],
  },
  {
    id: "7",
    title: "Master Bathroom Suite",
    category: "Renovation",
    serviceType: "Kitchen & Bathroom Remodeling",
    location: "Richmond Hill, ON",
    year: "2024",
    image: "/assests/interior-utility-installation-pipes.JPG",
    description: "Luxurious master bathroom featuring a freestanding tub, walk-in shower with rain head, double vanity, and premium tile work throughout.",
    stats: { size: "350 sqft", duration: "5 weeks", budget: "$55,000" },
    features: ["Freestanding tub", "Walk-in shower", "Double vanity", "Heated floors", "Premium fixtures", "Custom tile work"],
  },
  {
    id: "8",
    title: "Multi-Unit Residential",
    category: "Residential",
    serviceType: "Residential Construction",
    location: "Scarborough, ON",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2076&auto=format&fit=crop",
    description: "A modern 8-unit residential building featuring contemporary design, energy-efficient systems, and premium finishes throughout each unit.",
    stats: { size: "12,000 sqft", duration: "18 months", budget: "$3.2M" },
    features: ["8 units", "Energy-efficient design", "Underground parking", "Rooftop terrace", "Modern amenities", "Premium finishes"],
  },
  {
    id: "9",
    title: "Complete Roof Replacement",
    category: "Renovation",
    serviceType: "Roofing",
    location: "Etobicoke, ON",
    year: "2023",
    image: "/assests/rooftop-davit-system-maintenance.JPG",
    description: "Full roof replacement with premium shingles, improved ventilation, and enhanced insulation. Includes new gutters and downspouts.",
    stats: { size: "2,400 sqft", duration: "1 week", budget: "$28,000" },
    features: ["Premium shingles", "Improved ventilation", "Enhanced insulation", "New gutters", "25-year warranty", "Energy-efficient materials"],
  },
  {
    id: "10",
    title: "Landscape Design & Hardscaping",
    category: "Outdoor",
    serviceType: "Landscaping & Hardscaping",
    location: "Oakville, ON",
    year: "2024",
    image: "https://captainhandy.ca/wp-content/uploads/2024/02/Captain_Handy_18-watermarked-1024x683.webp",
    description: "Comprehensive landscape design featuring interlocking stone patios, custom plantings, outdoor lighting, and a water feature.",
    stats: { size: "5,000 sqft", duration: "4 weeks", budget: "$65,000" },
    features: ["Interlocking stone", "Custom plantings", "Outdoor lighting", "Water feature", "Irrigation system", "Fire pit area"],
  },
  {
    id: "11",
    title: "Basement Finishing",
    category: "Renovation",
    serviceType: "Renovations & Remodeling",
    location: "Markham, ON",
    year: "2023",
    image: "/assests/basement-construction-black-wall-band.JPG",
    description: "Complete basement transformation into a multi-functional space including home theater, gym area, and guest suite with full bathroom.",
    stats: { size: "1,800 sqft", duration: "8 weeks", budget: "$95,000" },
    features: ["Home theater", "Gym area", "Guest suite", "Full bathroom", "Wet bar", "Storage solutions"],
  },
  {
    id: "12",
    title: "Warehouse Facility",
    category: "Commercial",
    serviceType: "Commercial Construction",
    location: "Vaughan, ON",
    year: "2024",
    image: "/assests/underground-garage-columns-utilities.JPG",
    description: "Large-scale warehouse facility with high ceilings, loading docks, office space, and advanced security systems for logistics operations.",
    stats: { size: "85,000 sqft", duration: "12 months", budget: "$8.5M" },
    features: ["High ceilings", "Loading docks", "Office space", "Security systems", "Climate control", "Fire suppression"],
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Outdoor",
] as const;

