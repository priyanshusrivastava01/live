import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Magnetic from './Magnetic';
import consultantImage from '../assets/consultant.png';

export default function Hero() {
  const containerRef = useRef(null);
  const portraitRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    // GSAP Animation: Split Text Headline Reveal
    const words = headlineRef.current.querySelectorAll('.word-reveal');
    gsap.fromTo(words, 
      { y: '100%', opacity: 0 },
      { 
        y: '0%', 
        opacity: 1, 
        duration: 1, 
        stagger: 0.08, 
        ease: 'power4.out',
        delay: 0.2
      }
    );

    // Parallax effect on the consultant portrait on scroll
    gsap.to(portraitRef.current, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, []);

  const headlinePart1 = "I Help Companies Build";
  const headlinePart2 = "Predictable Growth.";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-bgCanvas pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-accentGold/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-10 w-[30%] h-[30%] bg-black/[0.015] rounded-full filter blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Typographical Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8 z-10 text-left">
          {/* Subtle Tagline - Inspired by the screenshot gold/yellow border pill */}
          <div className="inline-flex items-center space-x-2 bg-accentGold/5 border border-accentGold/20 rounded-full px-5 py-2 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accentGold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D1F] font-heading">
              STRATEGIC ADVISORY · BUSINESS SYSTEMS · SYSTEMS ARCHITECT
            </span>
          </div>

          {/* Staggered Reveal Headline - Inspired by the screenshot */}
          <h1
            ref={headlineRef}
            className="text-
            4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-textPrimary tracking-tight leading-[1.05] font-heading"
          >
            <span className="block overflow-hidden pb-1">
              {headlinePart1.split(' ').map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-3">
                  <span className="word-reveal inline-block origin-bottom-left">
                    {word}
                  </span>
                </span>
              ))}
            </span>
            <span className="block overflow-hidden pb-1 mt-2">
              {headlinePart2.split(' ').map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-3">
                  <span className="word-reveal inline-block origin-bottom-left font-serif font-medium text-accentGold italic">
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          {/* Supporting Copy - Inspired by the screenshot */}
          <p className="text-base sm:text-lg text-textSecondary font-light leading-relaxed max-w-xl">
            Helping founders, CEOs, and growing businesses scale operations and optimize revenue streams. <span className="font-semibold text-textPrimary">The focus isn't just high-level strategy—it's executing custom operating systems that drive predictable results.</span>
          </p>

          {/* Call to Actions */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Magnetic>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-accentGold to-[#B08D1F] text-white text-sm font-bold tracking-wider uppercase text-center hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)] transition-all duration-300 shadow-premium relative group overflow-hidden block"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Secure Your Consultation
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </Magnetic>
              <a
                href="#case-studies"
                className="px-8 py-4 rounded-xl bg-white text-textPrimary text-sm font-semibold tracking-wider uppercase text-center border border-black/[0.08] hover:border-black/20 transition-colors duration-300 shadow-premium flex items-center justify-center gap-2 group"
              >
                Explore Case Studies
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Trusted By Line below CTAs */}
            <p className="text-xs text-textSecondary/80 pl-2">
              Trusted by founders, startups, and growing businesses across India.
            </p>
          </div>
        </div>

        {/* Portait & Achievement Cards */}
        <div className="lg:col-span-5 relative flex justify-center items-end lg:mt-0 mt-8 w-full">
          <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden">
            <img
              ref={portraitRef}
              src={consultantImage}
              alt="Marcus Vance Portrait"
              className="w-full h-[115%] object-cover object-top scale-105"
            />
            {/* Elegant overlay vignettes to blend portrait into the light canvas */}
            {/* Fade bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-bgCanvas via-bgCanvas/80 to-transparent pointer-events-none z-10" />
            {/* Fade left edge for desktop */}
            <div className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-bgCanvas to-transparent pointer-events-none z-10 hidden lg:block" />
            {/* Fade right edge for desktop */}
            <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-bgCanvas to-transparent pointer-events-none z-10 hidden lg:block" />
            {/* Fade top edge */}
            <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-bgCanvas to-transparent pointer-events-none z-10" />
          </div>

          {/* Floating Achievement Card 1 (EBITDA Growth - Editable) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -top-6 -right-6 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-black/[0.05] flex items-center space-x-3.5 max-w-[210px] animate-float z-20"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="p-2.5 bg-accentGold/10 rounded-xl text-accentGold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-textPrimary leading-none uppercase tracking-wide">
                [00% EBITDA]
              </div>
              <div className="text-[9px] uppercase font-bold tracking-wider text-textSecondary mt-1">
                Average EBITDA Growth (Replace)
              </div>
            </div>
          </motion.div>

          {/* Floating Achievement Card 2 (Capital Secured - Editable) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 md:-left-8 bg-bgDark/95 text-white p-4 rounded-2xl shadow-2xl border border-white/[0.08] flex items-center space-x-3.5 max-w-[220px] animate-float z-20"
            style={{ animationDelay: '2.5s' }}
          >
            <div className="p-2.5 bg-white/10 rounded-xl text-accentGold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none uppercase tracking-wide">
                [$0.0B+ Capital]
              </div>
              <div className="text-[9px] uppercase font-semibold tracking-wider text-gray-400 mt-1">
                Capital Advised (Replace)
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-widest text-textSecondary">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-1 rounded-full border border-black/10 text-textSecondary"
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
