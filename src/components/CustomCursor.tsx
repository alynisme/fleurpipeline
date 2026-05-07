"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      animate={{
        x: mousePosition.x - 16, // center the 32x32 icon
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
        rotate: isHovering ? 45 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Soft glow effect behind the flower */}
        <div className="absolute inset-0 bg-pink-200 blur-md rounded-full opacity-50 scale-150"></div>
        {/* Flower Icon */}
        <Flower2 
          size={32} 
          className="text-pink-400 drop-shadow-sm relative z-10" 
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
}
