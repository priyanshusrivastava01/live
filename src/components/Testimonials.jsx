import React, { useState } from 'react';
import { Play, X, Quote, ArrowLeft, ArrowRight, Video, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import testimonial1 from '../assets/testimonial_1.png';
import testimonial2 from '../assets/testimonial_2.png';
import testimonial3 from '../assets/testimonial_3.png';

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Siddharth Mehta",
      role: "Managing Director",
      company: "Mehta Logistics",
      rating: 5,
      quote: "\"Working with Arunn completely streamlined our fleet routing and automated our dispatch reporting. Our operational efficiency skyrocketed, and we cleared bottleneck delays that had plagued us for years.\"",
      metric: "₹45 Lakhs Saved/Yr",
      image: testimonial1,
      linkedinUrl: "https://linkedin.com",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2,
      name: "Pooja Hegde",
      role: "Chief Operating Officer",
      company: "Veda Wellness",
      rating: 5,
      quote: "\"Before integrating Arunn's workflow SOPs, our customer booking path was highly manual and team-dependent. Today, 95% of our bookings are completely automated, saving us days of admin work.\"",
      metric: "18 hours saved/wk",
      image: testimonial2,
      linkedinUrl: "https://linkedin.com",
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      id: 3,
      name: "Vikramaditya Roy",
      role: "Founder",
      company: "Roy Capital Ventures",
      rating: 5,
      quote: "\"Arunn's operational exit-readiness audit was the game-changer for our acquisition round. He helped us package our systems, resulting in a cleaner diligence process and a higher valuation multiple.\"",
      metric: "3.2x Valuation Increase",
      image: testimonial3,
      linkedinUrl: "https://linkedin.com",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ];

  const handleScroll = (direction) => {
    const container = document.getElementById('testimonial-scroll');
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-bgCanvas text-textPrimary py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50%] h-[50%] bg-accentGold/[0.01] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="inline-block text-[11px] tracking-[0.25em] font-bold text-accentGold mb-6 uppercase font-heading">
              — EXECUTIVE FEEDBACK
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
              Client Testimonials
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-serif italic text-textSecondary mt-4 font-normal">
                Proven Impact, <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">Verified Results.</span>
              </span>
            </h2>
            <p className="text-textSecondary font-serif italic text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Hear directly from the company directors, corporate officers, and CEOs who have scaled their operations and decoupled themselves from day-to-day administration.
            </p>
          </div>

          <div className="flex items-center space-x-3 mt-4">
            <button
              onClick={() => handleScroll('left')}
              className="p-3.5 rounded-full border border-black/[0.08] text-textSecondary hover:border-accentGold hover:text-accentGold hover:bg-white transition-all duration-300 cursor-pointer shadow-premium"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3.5 rounded-full border border-black/[0.08] text-textSecondary hover:border-accentGold hover:text-accentGold hover:bg-white transition-all duration-300 cursor-pointer shadow-premium"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          id="testimonial-scroll"
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
        >
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="flex-shrink-0 w-full sm:w-[480px] snap-start bg-white border border-black/[0.07] rounded-premium p-6 sm:p-8 flex flex-col justify-between group hover:border-accentGold/20 transition-all duration-500 relative shadow-premium"
            >
              <div className="space-y-6">
                
                {/* Video testimonial card block */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 border border-black/[0.06]">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideo(test)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-bgDark flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-accentGold hover:text-white transition-all duration-300 group/btn cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>

                  {/* Video Badge */}
                  <span className="absolute bottom-4 left-4 bg-bgDark/85 backdrop-blur text-[9px] font-extrabold uppercase tracking-widest text-accentGold border border-accentGold/20 px-2.5 py-1 rounded flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" />
                    Client Video Case Study
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accentGold text-accentGold" />
                  ))}
                  <span className="text-[10px] text-textSecondary font-semibold pl-2 uppercase tracking-wider font-heading">
                    Verified Review
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative space-y-4">
                  <Quote className="w-8 h-8 text-accentGold/10 absolute -top-2 -left-2" />
                  <p className="text-[13.5px] text-textSecondary leading-relaxed font-light italic relative z-10 pl-6 text-left font-body">
                    {test.quote}
                  </p>
                </div>
              </div>

              {/* Author, Result & LinkedIn */}
              <div className="pt-6 border-t border-black/[0.05] flex justify-between items-end mt-8">
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-textPrimary leading-none font-heading">
                      {test.name}
                    </h4>
                    <a
                      href="#"
                      className="text-textSecondary hover:text-accentGold transition-colors"
                      title={test.linkedinUrl}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="text-[10px] text-accentGold mt-1.5 block font-heading font-semibold">
                    {test.role}, {test.company}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-accentGold bg-accentGold/10 border border-accentGold/20 px-3 py-1 rounded-full uppercase tracking-wider font-heading">
                  {test.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Testimonial Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-3xl aspect-[16/9] bg-bgDark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-accentGold hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              
              {/* Bottom detail strip inside modal */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur p-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs font-bold text-white">{activeVideo.name}</span>
                  <span className="text-[10px] text-accentGold block">{activeVideo.role}, {activeVideo.company}</span>
                </div>
                <span className="text-xs font-extrabold text-accentGold">{activeVideo.metric}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
