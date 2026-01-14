"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryImages, galleryCategories } from "@/lib/data/galleryData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Diagonal Image */}
      <section className="relative overflow-hidden text-white pt-32 pb-20 min-h-[500px] bg-brand">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
        </div>

        {/* Diagonal Image Container */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <Image
              src="/gallery/caulking/caulking-2.jpg"
              alt="Gallery showcase"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide uppercase">Our Work</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Project
              <br />
              <span className="text-gray-200">Gallery</span>
            </h1>
            <p className="text-xl text-gray-50/90 leading-relaxed max-w-xl">
              Browse through our completed projects showcasing quality craftsmanship across all our services.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-brand text-white"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-400"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-brand">{filteredImages.length}</span> image
              {filteredImages.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain select-none"
              sizes="100vw"
              priority
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
