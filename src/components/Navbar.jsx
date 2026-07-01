import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle backdrop glass trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Books', href: '#books' },
    { name: 'Resources', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-bgCanvas/85 backdrop-blur-xl border-b border-black/[0.04] shadow-premium'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 text-xl font-extrabold tracking-tight">
            <span className="font-heading text-textPrimary">ARUNN</span>
            <span className="font-heading text-accentGold font-light">GUPTAA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accentGold inline-block"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-300 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accentGold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Magnetic>
              <a
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-bgDark border border-bgDark transition-all duration-300 hover:bg-transparent hover:text-textPrimary group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Book Consultation
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-accentGold origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 -z-0" style={{ zIndex: 1 }} />
                {/* Text color overlay helper */}
                <span className="absolute inset-0 bg-transparent z-10" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-textPrimary hover:text-accentGold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 h-[1.5px] bg-accentGold/20 w-full">
          <div
            className="h-full bg-accentGold transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full bg-bgCanvas border-b border-black/[0.05] z-40 px-6 py-8 shadow-xl lg:hidden flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-textSecondary hover:text-textPrimary transition-colors py-2 border-b border-black/[0.02]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-bgDark text-white font-semibold rounded-full hover:bg-accentGold transition-colors flex items-center justify-center gap-2"
            >
              Book Consultation
              <ArrowUpRight className="w-4.5 h-4.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
