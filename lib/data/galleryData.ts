export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: "all", name: "All Projects", slug: "all" },
  { id: "balcony", name: "Balcony Restoration", slug: "balcony-restoration" },
  { id: "masonry", name: "Masonry Restoration", slug: "masonry-restoration" },
  { id: "caulking", name: "Caulking & Sealant", slug: "caulking-sealant-application" },
  { id: "coating", name: "Architectural Coating", slug: "architectural-coating-painting" },
  { id: "garage", name: "Underground Garage", slug: "underground-garage-structure-repairs" },
  { id: "roof", name: "Roof Replacement", slug: "roof-replacement-repair" },
  { id: "stucco", name: "Stucco Installation", slug: "stucco-installation-repair" },
  { id: "siding", name: "Siding Installation", slug: "siding-installation-repair" },
  { id: "windows", name: "Windows Installation", slug: "windows-installations" },
];

export const galleryImages: GalleryImage[] = [
  // Balcony Restoration
  { src: "/gallery/balcony/balcony-1.png", alt: "Balcony repair project", category: "balcony" },
  { src: "/gallery/balcony/balcony-2.jpg", alt: "Balcony restoration work", category: "balcony" },
  { src: "/gallery/balcony/balcony-3.jpg", alt: "Balcony concrete repair", category: "balcony" },
  { src: "/gallery/balcony/balcony-4.jpg", alt: "Balcony waterproofing", category: "balcony" },
  { src: "/gallery/balcony/balcony-5.jpg", alt: "Balcony structural repair", category: "balcony" },
  { src: "/gallery/balcony/balcony-6.jpg", alt: "Balcony restoration completed", category: "balcony" },
  { src: "/gallery/balcony/balcony-7.jpg", alt: "Balcony railing replacement", category: "balcony" },
  { src: "/gallery/balcony/balcony-8.jpg", alt: "Balcony finishing work", category: "balcony" },
  { src: "/gallery/balcony/balcony-9.jpg", alt: "Balcony project completion", category: "balcony" },
  { src: "/gallery/balcony/balcony-before.jpg", alt: "Balcony before restoration", category: "balcony" },
  { src: "/gallery/balcony/balcony-after.jpg", alt: "Balcony after restoration", category: "balcony" },
  { src: "/gallery/caulking/caulking-3.jpg", alt: "Balcony scaffolding work", category: "balcony" },

  // Masonry Restoration
  { src: "/gallery/masonry/masonry-1.jpg", alt: "Masonry brick restoration", category: "masonry" },
  { src: "/gallery/masonry/masonry-2.jpg", alt: "Masonry repointing work", category: "masonry" },
  { src: "/gallery/masonry/masonry-3.jpg", alt: "Masonry repair project", category: "masonry" },
  { src: "/gallery/masonry/masonry-4.jpg", alt: "Masonry tuckpointing", category: "masonry" },
  { src: "/assests/masonry-restoration-brick-repointing-01.JPG", alt: "Brick repointing detail", category: "masonry" },
  { src: "/assests/masonry-restoration-brick-repointing-02.JPG", alt: "Masonry restoration progress", category: "masonry" },
  { src: "/assests/masonry-restoration-brick-repointing-03.JPG", alt: "Completed masonry work", category: "masonry" },
  { src: "/assests/masonry-brick-wall-construction-01.JPG", alt: "Brick wall construction", category: "masonry" },
  { src: "/assests/masonry-bricklaying-worker-wall-ties.JPG", alt: "Bricklaying with wall ties", category: "masonry" },
  { src: "/assests/exterior-brick-wall-mortar-repair.JPG", alt: "Exterior mortar repair", category: "masonry" },
  { src: "/assests/exterior-brick-wall-repointing-white-mortar.JPG", alt: "White mortar repointing", category: "masonry" },
  { src: "/assests/exterior-brick-wall-tuckpointing-repair.JPG", alt: "Tuckpointing repair work", category: "masonry" },

  // Caulking & Sealant
  { src: "/gallery/caulking/caulking-1.jpg", alt: "Caulking application", category: "caulking" },
  { src: "/gallery/caulking/caulking-2.jpg", alt: "Sealant installation", category: "caulking" },
  { src: "/gallery/caulking/caulking-3.jpg", alt: "Joint sealing work", category: "caulking" },
  { src: "/gallery/caulking/caulking-4.jpg", alt: "Professional caulking", category: "caulking" },
  { src: "/gallery/caulking/caulking-5.jpg", alt: "Caulking project completion", category: "caulking" },
  { src: "/assests/interior-wall-black-stripe-painted.JPG", alt: "Interior wall sealing", category: "caulking" },
  { src: "/assests/pillar-base-sealant-cracked-concrete.JPG", alt: "Pillar base sealant", category: "caulking" },

  // Architectural Coating / Painting
  { src: "/gallery/coating/coating-1.png", alt: "Metal cladding coating", category: "coating" },
  { src: "/gallery/coating/coating-2.jpg", alt: "Exterior coating application", category: "coating" },
  { src: "/gallery/coating/coating-3.jpg", alt: "Protective coating work", category: "coating" },
  { src: "/gallery/coating/coating-4.jpg", alt: "Building coating project", category: "coating" },
  { src: "/gallery/coating/coating-5.jpg", alt: "Architectural coating", category: "coating" },
  { src: "/gallery/coating/coating-6.jpg", alt: "Exterior painting work", category: "coating" },
  { src: "/gallery/coating/coating-7.jpg", alt: "Commercial coating project", category: "coating" },
  { src: "/gallery/coating/coating-8.jpg", alt: "Industrial coating application", category: "coating" },
  { src: "/gallery/coating/coating-9.jpg", alt: "Finish coating work", category: "coating" },
  { src: "/assests/exterior-wall-textured-paint-renovation.JPG", alt: "Textured paint renovation", category: "coating" },
  { src: "/assests/building-facade-white-blue-wall.JPG", alt: "Facade coating work", category: "coating" },

  // Underground Garage Structure
  { src: "/gallery/garage/garage-1.png", alt: "Concrete pouring in garage", category: "garage" },
  { src: "/gallery/garage/garage-2.png", alt: "Parking garage repair", category: "garage" },
  { src: "/gallery/garage/garage-3.jpg", alt: "Garage structure work", category: "garage" },
  { src: "/gallery/garage/garage-4.jpg", alt: "Underground garage project", category: "garage" },
  { src: "/gallery/garage/garage-5.jpg", alt: "Garage concrete repair", category: "garage" },
  { src: "/gallery/garage/garage-6.jpg", alt: "Structural garage repair", category: "garage" },
  { src: "/gallery/garage/garage-7.jpg", alt: "Garage reinforcement work", category: "garage" },
  { src: "/gallery/garage/garage-8.jpg", alt: "Underground structure repair", category: "garage" },
  { src: "/gallery/garage/garage-9.jpg", alt: "Garage waterproofing", category: "garage" },
  { src: "/gallery/garage/garage-10.jpg", alt: "Garage floor restoration", category: "garage" },
  { src: "/gallery/garage/garage-11.jpg", alt: "Parking structure repair", category: "garage" },
  { src: "/gallery/garage/garage-12.jpg", alt: "Garage pillar repair", category: "garage" },
  { src: "/gallery/garage/garage-13.jpg", alt: "Underground garage finishing", category: "garage" },
  { src: "/gallery/garage/garage-14.jpg", alt: "Garage ceiling repair", category: "garage" },
  { src: "/gallery/garage/garage-15.jpg", alt: "Completed garage project", category: "garage" },
  { src: "/assests/underground-garage-bobcat-equipment.JPG", alt: "Garage equipment work", category: "garage" },
  { src: "/assests/underground-garage-columns-utilities.JPG", alt: "Garage columns repair", category: "garage" },
  { src: "/assests/underground-garage-concrete-pillar-1187.JPG", alt: "Concrete pillar restoration", category: "garage" },
  { src: "/assests/underground-garage-pillar-10B-utilities.JPG", alt: "Pillar utilities work", category: "garage" },
  { src: "/assests/underground-garage-water-damage-bobcat.JPG", alt: "Water damage repair", category: "garage" },
  { src: "/assests/parking-garage-aisle-pillars-pipes.JPG", alt: "Garage aisle restoration", category: "garage" },

  // Roof Replacement
  { src: "/gallery/roof/roof-1.jpg", alt: "Roof replacement project", category: "roof" },
  { src: "/gallery/roof/roof-2.jpg", alt: "Roofing work in progress", category: "roof" },
  { src: "/gallery/roof/roof-3.jpg", alt: "Commercial roof repair", category: "roof" },
  { src: "/gallery/roof/roof-4.jpg", alt: "Roof installation work", category: "roof" },
  { src: "/gallery/roof/roof-5.jpg", alt: "Roof membrane application", category: "roof" },
  { src: "/gallery/roof/roof-6.jpg", alt: "Completed roof project", category: "roof" },
  { src: "/assests/rooftop-davit-system-maintenance.JPG", alt: "Rooftop maintenance", category: "roof" },
  { src: "/assests/rooftop-hvac-city-skyline-view.JPG", alt: "Rooftop HVAC work", category: "roof" },
  { src: "/assests/rooftop-equipment-gravel-surface.JPG", alt: "Rooftop equipment", category: "roof" },
  { src: "/assests/rooftop-counterweights-city-skyline.JPG", alt: "Rooftop work equipment", category: "roof" },

  // Stucco Installation
  { src: "/gallery/stucco/stucco-1.jpg", alt: "Stucco installation work", category: "stucco" },
  { src: "/gallery/stucco/stucco-2.jpg", alt: "Stucco repair project", category: "stucco" },
  { src: "/gallery/stucco/stucco-3.jpg", alt: "Stucco finishing work", category: "stucco" },
  { src: "/assests/exterior-wall-stucco-brick-patterning.JPG", alt: "Stucco brick pattern", category: "stucco" },
  { src: "/assests/exterior-wall-stucco-worker-scaffolding.JPG", alt: "Stucco worker on scaffolding", category: "stucco" },
  { src: "/assests/exterior-wall-faux-brick-pattern-stucco.JPG", alt: "Faux brick stucco", category: "stucco" },

  // Siding Installation
  { src: "/gallery/siding/siding-1.jpg", alt: "Waterproofing siding", category: "siding" },
  { src: "/gallery/siding/siding-2.png", alt: "Expansion joint repair", category: "siding" },
  { src: "/gallery/siding/siding-3.png", alt: "Construction workers on siding", category: "siding" },
  { src: "/gallery/siding/siding-4.jpg", alt: "Siding installation project", category: "siding" },
  { src: "/gallery/siding/siding-5.jpg", alt: "Exterior siding work", category: "siding" },
  { src: "/gallery/siding/siding-6.jpg", alt: "Siding repair work", category: "siding" },
  { src: "/gallery/siding/siding-7.jpg", alt: "ACM panel siding", category: "siding" },
  { src: "/assests/building-exterior-textured-brick-scaffolding.JPG", alt: "Building siding work", category: "siding" },
  { src: "/assests/building-facade-construction-worker.JPG", alt: "Facade siding installation", category: "siding" },

  // Windows Installation
  { src: "/gallery/windows/windows-1.jpg", alt: "Window installation project", category: "windows" },
  { src: "/gallery/windows/windows-2.jpg", alt: "Commercial window work", category: "windows" },
  { src: "/gallery/windows/windows-3.jpg", alt: "Window replacement project", category: "windows" },
];
