import React from 'react';
import { motion } from 'framer-motion';

import featured1 from '../assets/carasoul/featured1.png';
import featured2 from '../assets/carasoul/featured2.png';
import featured3 from '../assets/carasoul/featured3.png';
import featured4 from '../assets/carasoul/featured4.png';
import featured5 from '../assets/carasoul/featured5.png';
import featured6 from '../assets/carasoul/featured6.jpg';
import featured7 from '../assets/carasoul/featured7.jpg';
import featured8 from '../assets/carasoul/featured8.jpg';

const images = [
  featured1,
  featured2,
  featured3,
  featured4,
  featured5,
  featured6,
  featured7,
  featured8
];

export default function TrustedBy() {
  return (
    <section className="bg-[#F5F2EB] border-y border-black/[0.06] py-7 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
        {/* Left Side Header */}
        <div className="flex items-center gap-4 w-full lg:w-auto shrink-0 justify-center lg:justify-start">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-textSecondary font-heading">
            Featured In
          </span>
          <div className="hidden lg:block w-px h-8 bg-black/10 mx-2" />
        </div>

        {/* Right Side Carousel */}
        <div className="w-full flex-1 overflow-hidden relative">
          {/* Faint gradient overlays on sides for a premium fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F5F2EB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F5F2EB] to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden w-full">
            <motion.div 
              className="flex gap-16 items-center shrink-0 pr-16"
              animate={{
                x: [0, "-50%"]
              }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity
              }}
            >
              {/* Loop twice for seamless scrolling */}
              {[...images, ...images].map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`Featured logo ${idx + 1}`} 
                  className="h-8 md:h-10 w-auto object-contain select-none pointer-events-none shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
