import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, Calendar, Clock, ArrowUpRight } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', company: '', revenue: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details, Map, Calendly */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
                Office & Direct Booking
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
                Get In Touch
              </h2>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                Connect directly for margin audit reviews, fractional systems strategy, or M&A exit preparation.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6 pt-4 border-t border-black/[0.04] text-left">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    Direct Email (Replace)
                  </span>
                  <a href="mailto:your-email@domain.com" className="text-sm font-bold text-textPrimary hover:text-accentGold transition-colors">
                    [your-email@domain.com]
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    Secure Voice Line (Replace)
                  </span>
                  <a href="tel:+910000000000" className="text-sm font-bold text-textPrimary hover:text-accentGold transition-colors">
                    [+91 (00000) 00000]
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    Office Hours (Replace)
                  </span>
                  <span className="text-sm font-bold text-textPrimary">
                    [Mon - Fri: 09:00 - 18:00 IST]
                  </span>
                </div>
              </div>

              {/* Chat Channels */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    WhatsApp Chat Channel (Replace)
                  </span>
                  <a href="#" className="text-sm font-bold text-textPrimary hover:text-accentGold transition-colors">
                    [Click to chat on WhatsApp]
                  </a>
                </div>
              </div>

              {/* LinkedIn Redirect */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    Verified LinkedIn (Replace)
                  </span>
                  <a href="#" className="text-sm font-bold text-textPrimary hover:text-accentGold transition-colors">
                    [Click to view LinkedIn profile]
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.03] shadow-sm text-accentGold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest block">
                    Headquarters (Replace)
                  </span>
                  <span className="text-sm font-bold text-textPrimary">
                    [Replace with headquarters address details]
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Custom Map Mock */}
            <div className="relative aspect-[16/10] bg-bgDark rounded-premium overflow-hidden shadow-lg border border-black/5 p-4 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute top-[35%] left-[40%] w-[1.5px] h-[50%] bg-accentGold/20 rotate-45 pointer-events-none" />
              <div className="absolute top-[10%] left-[20%] w-[1.5px] h-[75%] bg-accentGold/20 -rotate-12 pointer-events-none" />
              
              <div className="absolute top-[45%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-8 h-8 bg-accentGold/30 rounded-full animate-ping" />
                <span className="absolute w-4 h-4 bg-accentGold rounded-full" />
              </div>

              <span className="relative z-10 bg-black/75 backdrop-blur text-[8px] font-bold uppercase tracking-widest text-accentGold border border-accentGold/20 px-2 py-0.5 rounded w-fit text-left">
                Headquarters Location (Replace Map)
              </span>

              <div className="relative z-10 bg-black/80 backdrop-blur p-3 rounded-xl border border-white/5 space-y-1 w-fit max-w-[200px] text-left">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">[Office City]</h4>
                <p className="text-[9px] text-gray-400 font-light leading-snug">[Replace with short location tags]</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Calendar Booking Placeholder */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form */}
            <div className="bg-white p-8 sm:p-10 rounded-premium border border-black/[0.03] shadow-premium">
              <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2 text-left">
                <MessageSquareCode className="w-5 h-5 text-accentGold" />
                Strategic Session Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                      placeholder="[Enter Full Name]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                      placeholder="[Enter Email Address]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                      placeholder="[Enter Company Name]"
                    />
                  </div>

                  {/* Annual Revenue Bracket */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                      Annual Revenue Range
                    </label>
                    <select
                      required
                      value={formState.revenue}
                      onChange={(e) => setFormState({ ...formState, revenue: e.target.value })}
                      className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                    >
                      <option value="" disabled>Select range</option>
                      <option value="under2m">Under $2M ARR</option>
                      <option value="2to5m">$2M – $5M ARR</option>
                      <option value="5to20m">$5M – $20M ARR</option>
                      <option value="over20m">Over $20M ARR</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                    Core Scaling Bottleneck
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors resize-none"
                    placeholder="[Describe your current scaling bottleneck or operational friction...]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-left">
                  <Magnetic>
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-full bg-bgDark text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 group hover:bg-accentGold transition-colors duration-300 w-full sm:w-auto cursor-pointer"
                    >
                      {submitted ? (
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

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-xl border border-emerald-100 text-left"
                  >
                    ✓ Your session request has been registered. Our office will contact you to verify details and align calendars in 24 hours.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Visual Calendar Booking Placeholder */}
            <div className="bg-white p-8 rounded-premium border border-black/[0.03] shadow-premium flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-accentGold text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  Self-Schedule Option
                </span>
                <h4 className="text-base font-bold text-textPrimary">
                  [Replace with Calendar Embed (Calendly / Cal.com)]
                </h4>
                <p className="text-[11px] text-textSecondary font-light leading-relaxed max-w-sm">
                  If you prefer direct self-scheduling, you can integrate your calendar widget here.
                </p>
              </div>
              
              <Magnetic>
                <a
                  href="#"
                  className="px-6 py-3.5 rounded-full border border-black/15 hover:border-accentGold hover:text-accentGold text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5"
                >
                  [Book via Widget]
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
