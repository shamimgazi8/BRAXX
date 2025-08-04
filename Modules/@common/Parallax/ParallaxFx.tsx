'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Increase scrollable area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Image will grow from 50% to 100% size
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], ['40%', '0%']);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      {/* Sticky image section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#1e1e21]">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale, translateY }}
        >
          <img
            src="https://images.prismic.io/zero-cms-disco/ZxpNmIF3NbkBX-mo_4_SectionBuffer_DWM_ZERO_MY25_FXE_FINALS_V1_HI_0001_0005.jpg?auto=format,compress"
            alt="Featured Bike"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Optional overlay content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* <h1 className="text-white text-4xl md:text-6xl font-bold">BRAXX FXE</h1> */}
        </div>
      </div>
    </div>
  );
}
