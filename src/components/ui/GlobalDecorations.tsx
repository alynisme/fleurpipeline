"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function GlobalDecorations() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-[100] shadow-[0_0_8px_rgba(236,72,153,0.8)]"
        style={{ scaleX }}
      />
      
      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pink-400 pointer-events-none z-[100] mix-blend-difference hidden sm:block"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 250,
            mass: 0.5
          }}
        />
      )}
    </>
  );
}
