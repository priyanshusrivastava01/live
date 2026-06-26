import React, { useState } from 'react';
import { Play, X, Quote, ArrowLeft, ArrowRight, Video, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      name: "[Replace with Client Name]",
      role: "[Replace with Client Position]",
      company: "[Replace with Client Company]",
      rating: 5,
      quote: "\"[Replace with verified quote explaining the impact of your operational advisory, revenue systems, or M&A support on the business.]\"",
      metric: "[Replace with Outcome Metric - e.g. +400k revenue]",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // placeholder portrait
      linkedinUrl: "[Replace with client's LinkedIn URL]",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2,
      name: "[Replace with Client Name]",
      role: "[Replace with Client Position]",
      company: "[Replace with Client Company]",
      rating: 5,
      quote: "\"[Replace with verified quote explaining the time-saving advantages, SOP playbooks implementation, or workflow automations deployed.]\"",
      metric: "[Replace with Outcome Metric - e.g. 15h saved/wk]",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      linkedinUrl: "[Replace with client's LinkedIn URL]",
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      id: 3,
      name: "[Replace with Client Name]",
      role: "[Replace with Client Position]",
      company: "[Replace with Client Company]",
      rating: 5,
      quote: "\"[Replace with verified quote explaining the brand positioning restructuring, value pricing strategies, or exit readiness audits.]\"",
      metric: "[Replace with Outcome Metric - e.g. 9.2x acquisition multiple]",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      linkedinUrl: "[Replace with client's LinkedIn URL]",
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
    <section className="bg-bgDark text-white py-24 px-6 md:px-12 relative overflow-hidden border-b border-white/[0.04]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50%] h-[50%] bg-accentGold/[0.015] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
              Executive Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
              Client Testimonials
            </h2>
            <p className="text-sm text-gray-400 font-light max-w-xl">
              Hear directly from the company directors, corporate officers, and CEOs who have scaled their operations and decoupled themselves from day-to-day administration.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3.5 rounded-full border border-white/10 hover:border-accentGold hover:text-accentGold transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3.5 rounded-full border border-white/10 hover:border-accentGold hover:text-accentGold transition-all duration-300 cursor-pointer"
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
              className="flex-shrink-0 w-full sm:w-[480px] snap-start bg-black/40 border border-white/[0.05] rounded-premium p-6 sm:p-8 flex flex-col justify-between group hover:border-accentGold/20 transition-all duration-500 relative"
            >
              <div className="space-y-6">
                
                {/* Video testimonial card block */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/25 transition-colors duration-300" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideo(test)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-bgDark flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-accentGold hover:text-white transition-all duration-300 group/btn cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>

                  {/* Video Badge */}
                  <span className="absolute bottom-4 left-4 bg-bgDark/80 backdrop-blur text-[9px] font-extrabold uppercase tracking-widest text-accentGold border border-accentGold/20 px-2.5 py-1 rounded flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" />
                    [Replace with Video Testimonial]
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accentGold text-accentGold" />
                  ))}
                  <span className="text-[10px] text-gray-400 font-semibold pl-2 uppercase tracking-wider">
                    [Certified Rating]
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative space-y-4">
                  <Quote className="w-8 h-8 text-accentGold/20 absolute -top-2 -left-2" />
                  <p className="text-[13px] text-gray-300 leading-relaxed font-light italic relative z-10 pl-6 text-left">
                    {test.quote}
                  </p>
                </div>
              </div>

              {/* Author, Result & LinkedIn */}
              <div className="pt-6 border-t border-white/[0.05] flex justify-between items-end mt-8">
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-white leading-none">
                      {test.name}
                    </h4>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accentGold transition-colors"
                      title={test.linkedinUrl}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <span className="text-[10px] text-accentGold mt-1.5 block">
                    {test.role}, {test.company}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-white bg-white/[0.06] border border-white/[0.08] px-3 py-1 rounded-full uppercase tracking-wider">
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
