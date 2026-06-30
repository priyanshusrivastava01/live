import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquareCode, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

// Inline local SVG component for WhatsApp
const WhatsappIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const payload = {
        fullName: formState.name,
        email: formState.email,
        phone: '',
        message: `Company: ${formState.company}\nRevenue: ${formState.revenue || 'Not Provided'}\n\nMessage: ${formState.message}`
      };

      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', company: '', revenue: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      setError('Server is offline or unreachable. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0F0F10] text-white py-28 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.03]">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35%] h-[35%] bg-accentGold/[0.03] rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35%] h-[35%] bg-accentGold/[0.02] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details, Map, Cal.com */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 bg-accentGold/10 border border-accentGold/20 rounded-full px-4 py-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-accentGold animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E6C15C] font-heading">
                  Direct Line & Advisory Intake
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none font-heading">
                Let's Build Your <br />
                <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-serif italic font-normal">
                  Growth Engine
                </span>
              </h2>
              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
                Get in touch to align your systems, scale operations, or structure a high-performance marketing ecosystem.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6 pt-6 border-t border-white/[0.08] text-left">
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/[0.05] shadow-sm text-accentGold group-hover:bg-accentGold/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">
                    Direct Email
                  </span>
                  <a href="mailto:info@arunlive.com" className="text-sm font-bold text-white hover:text-[#E6C15C] transition-colors font-body">
                    info@arunlive.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/[0.05] shadow-sm text-accentGold group-hover:bg-accentGold/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">
                    Voice Line / Chat
                  </span>
                  <a href="tel:+91967011167" className="text-sm font-bold text-white hover:text-[#E6C15C] transition-colors font-body">
                    +91 96701 11167
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Calendar Booking Placeholder */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form */}
            <div className="bg-white/[0.03] p-8 sm:p-10 rounded-3xl border border-white/[0.06] backdrop-blur-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5 text-left font-heading">
                <MessageSquareCode className="w-5 h-5 text-accentGold" />
                Strategic Session Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 font-heading block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#18181B] border border-white/[0.08] rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accentGold transition-all duration-300 focus:ring-1 focus:ring-accentGold/35"
                      placeholder="e.g. Arunn Guptaa"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 font-heading block">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#18181B] border border-white/[0.08] rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accentGold transition-all duration-300 focus:ring-1 focus:ring-accentGold/35"
                      placeholder="arun@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 font-heading block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-[#18181B] border border-white/[0.08] rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accentGold transition-all duration-300 focus:ring-1 focus:ring-accentGold/35"
                      placeholder="e.g. Sales Overflow Inc."
                    />
                  </div>

                  {/* Annual Revenue Bracket */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 font-heading block">
                      Annual Revenue Range
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formState.revenue}
                        onChange={(e) => setFormState({ ...formState, revenue: e.target.value })}
                        className="w-full bg-[#18181B] border border-white/[0.08] rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accentGold transition-all duration-300 focus:ring-1 focus:ring-accentGold/35 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#18181B] text-gray-400">Select range</option>
                        <option value="under1c" className="bg-[#18181B] text-white">Under ₹1 Crore ($120K) ARR</option>
                        <option value="1to5c" className="bg-[#18181B] text-white">₹1 Crore – ₹5 Crores ($120K – $600K) ARR</option>
                        <option value="5to25c" className="bg-[#18181B] text-white">₹5 Crores – ₹25 Crores ($600K – $3M) ARR</option>
                        <option value="over25c" className="bg-[#18181B] text-white">Over ₹25 Crores ($3M) ARR</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                        <ArrowUpRight className="w-3.5 h-3.5 rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 font-heading block">
                    Core Scaling Bottleneck
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#18181B] border border-white/[0.08] rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accentGold transition-all duration-300 focus:ring-1 focus:ring-accentGold/35 resize-none"
                    placeholder="Describe your current scaling bottleneck or sales challenges..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-left">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-accentGold to-[#B08D1F] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 group hover:shadow-[0_8px_25px_rgba(201,162,39,0.25)] transition-all duration-300 w-full sm:w-auto cursor-pointer border-none disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : submitted ? (
                        <span>Application Sent</span>
                      ) : (
                        <>
                          Submit Strategy Application
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 text-red-300 text-xs font-medium rounded-xl border border-red-500/20 text-left"
                  >
                    ⚠ {error}
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 text-emerald-300 text-xs font-medium rounded-xl border border-emerald-500/20 text-left"
                  >
                    ✓ Your session request has been registered. We will contact you to verify details and align calendars in 24 hours.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Premium Social Redirect/Cal Widget */}
            <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/[0.06] backdrop-blur-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left group hover:border-accentGold/20 transition-all duration-300">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-accentGold text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  Direct Self-Schedule
                </span>
                <h4 className="text-base font-bold text-white font-heading">
                  Schedule 1:1 Strategic Audit
                </h4>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed max-w-sm">
                  Skip the intake queue. Book a slot directly on our advisory calendar to check compatibility.
                </p>
              </div>
              
              <Magnetic>
                <a
                  href="https://www.arunlive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full border border-white/10 group-hover:border-accentGold text-white hover:text-accentGold text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5"
                >
                  Book Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
