"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface StaggerAnimationProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  threshold?: number;
}

export default function StaggerAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.6,
  threshold = 0.1,
}: StaggerAnimationProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(ref.current?.children || []).indexOf(entry.target);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      Array.from(ref.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (ref.current) {
        Array.from(ref.current.children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, [threshold, children.length]);

  const getTransform = (index: number) => {
    const isVisible = visibleItems.has(index);
    switch (direction) {
      case "up":
        return isVisible ? "translateY(0)" : "translateY(30px)";
      case "down":
        return isVisible ? "translateY(0)" : "translateY(-30px)";
      case "left":
        return isVisible ? "translateX(0)" : "translateX(30px)";
      case "right":
        return isVisible ? "translateX(0)" : "translateX(-30px)";
      case "fade":
        return "translateY(0)";
      default:
        return "translateY(0)";
    }
  };

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleItems.has(index) ? 1 : 0,
            transform: getTransform(index),
            transition: `opacity ${duration}s ease-out ${index * staggerDelay}s, transform ${duration}s ease-out ${index * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

