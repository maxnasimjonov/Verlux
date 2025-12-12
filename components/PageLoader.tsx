"use client";

import { useEffect, useState } from "react";
import { Construction, Hammer, Wrench, HardHat } from "lucide-react";

interface FirstVisitLoaderProps {
  children: React.ReactNode;
  minimumDelay?: number;
}

export default function FirstVisitLoader({ children, minimumDelay = 800 }: FirstVisitLoaderProps) {
  // Check localStorage immediately to avoid flash
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("verlux_has_visited") !== "true";
  });

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = typeof window !== "undefined" 
      ? localStorage.getItem("verlux_has_visited") === "true"
      : true;

    if (hasVisitedBefore) {
      // User has visited before, skip loading
      setIsLoading(false);
      return;
    }

    // First visit - show loading and preload assets
    const startTime = Date.now();

    // Preload critical assets
    const preloadAssets = async () => {
      const pathname = typeof window !== "undefined" ? window.location.pathname : "";
      
      // Base critical images that appear on most pages
      let criticalImages: string[] = [
        // About page hero
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        // Company story image
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        // Team member images
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      ];

      // Page-specific images
      if (pathname === "/") {
        // Home page service images
        criticalImages.push(
          "https://www.ctvnews.ca/resizer/v2/FCO6HRFZCK5EYYRFF7A7ALFANY.jpg?smart=true&auth=b05bc2fa21704d0e0e6db662765107d3f331ce261a1875a62dbaa57a4dd75a54&width=1400&height=787",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
          "https://www.bankrate.com/brp/2025/03/17162426/Whats-the-difference-between-a-home-renovation-and-a-remodel.jpeg?auto=webp&optimize=high&crop=16:9",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
          "https://primeroofingfl.com/wp-content/uploads/2025/05/roofing-contractor-at-work.jpg",
          "https://captainhandy.ca/wp-content/uploads/2024/02/Captain_Handy_18-watermarked-1024x683.webp",
          // Featured projects
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
        );
      } else if (pathname === "/projects") {
        // Projects page - preload first few project images
        criticalImages.push(
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
        );
      }

      // Preload images
      const imagePromises = criticalImages.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block on error
        });
      });

      // Wait for Cloudinary video iframe to be ready
      const videoPromise = new Promise<void>((resolve) => {
        // Check if we're on the home page (where video is used)
        if (pathname === "/") {
          const checkVideo = () => {
            const iframe = document.querySelector('iframe[src*="cloudinary.com"]');
            if (iframe) {
              // Give iframe time to load
              setTimeout(() => resolve(), 800);
            } else {
              // If no video on this page, resolve immediately
              resolve();
            }
          };
          // Check after a short delay to allow iframe to be added to DOM
          setTimeout(checkVideo, 200);
          // Timeout after 2.5 seconds
          setTimeout(() => resolve(), 2500);
        } else {
          resolve(); // Not on home page, no video to wait for
        }
      });

      // Wait for all assets to load or timeout
      await Promise.race([
        Promise.all([...imagePromises, videoPromise]),
        new Promise((resolve) => setTimeout(resolve, 3500)), // Max 3.5 seconds
      ]);

      // Ensure minimum delay
      const elapsed = Date.now() - startTime;
      const remainingDelay = Math.max(0, minimumDelay - elapsed);
      await new Promise((resolve) => setTimeout(resolve, remainingDelay));

      // Mark as visited
      if (typeof window !== "undefined") {
        localStorage.setItem("verlux_has_visited", "true");
      }

      setIsLoading(false);
    };

    preloadAssets();
  }, [minimumDelay]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50/30 flex items-center justify-center fixed inset-0 z-50">
        <div className="text-center">
          {/* Animated Construction Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              {/* Rotating Construction Icon */}
              <div className="absolute inset-0 animate-spin">
                <Construction className="w-24 h-24 text-teal-600 opacity-20" />
              </div>
              {/* Pulsing Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <HardHat className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900">
              Building Your Experience
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
            </div>
            <p className="text-gray-600 text-sm">Preparing everything for you...</p>
          </div>

          {/* Construction Tools Animation */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
            <Hammer className="w-6 h-6 text-teal-600 animate-pulse [animation-delay:-0.5s]" />
            <Wrench className="w-6 h-6 text-cyan-500 animate-pulse [animation-delay:-0.3s]" />
            <HardHat className="w-6 h-6 text-teal-600 animate-pulse [animation-delay:-0.1s]" />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

