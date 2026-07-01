import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowUpRight, Star, CheckCircle2, DownloadCloud, X, ShoppingCart, ShieldCheck } from 'lucide-react';
import Magnetic from './Magnetic';
import employeeRetentionCover from '../assets/employee_retention_cover.png';
import franchiseExpansionCover from '../assets/franchise_expansion_cover.png';
import businessAutomationCover from '../assets/business_automation_cover.png';
import fundRaisingCover from '../assets/fund_raising_cover.png';
import exportImportCover from '../assets/export_import_cover.png';
import growthDiagnosisCover from '../assets/growth_diagnosis_cover.png';

const booksData = [
  {
    id: 1,
    title: "Employee Retention PowerKit",
    subtitle: "Proven Frameworks to Keep Your Top Talent & Build a High-Performance Culture",
    tag: "TALENT RETENTION",
    rating: "5.0 ★ Reader Rating",
    category: "Talent",
    bestsellerBadge: "#1 Bestseller",
    coverImg: employeeRetentionCover,
    description: "The complete guide to structuring retention systems that engage, align, and retain your core players. Eliminate employee turnover costs and establish a self-governing business culture.",
    takeaways: [
      "Identify attrition warning signs and implement early retention interventions",
      "Deploy step-by-step onboarding frameworks that double initial employee retention",
      "Construct competitive equity-incentive models tailored for growth teams"
    ],
    coverBg: "linear-gradient(135deg, #0F0F10 0%, #202022 100%)",
    spineBg: "#0F0F10",
    accentColor: "#C9A227",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  },
  {
    id: 2,
    title: "Branch / Franchise Expansion PowerKit",
    subtitle: "Proven Blueprints & Legal SOPs to Scale Your Business Across Locations",
    tag: "EXPANSION & FRANCHISE",
    rating: "4.9 ★ Operations Choice",
    category: "Expansion",
    bestsellerBadge: "#1 Release",
    coverImg: franchiseExpansionCover,
    description: "The comprehensive playbook for scaling your physical or operational footprints. Discover how to structure franchise agreements, automate store audit lines, and replicate sales channels consistently.",
    takeaways: [
      "Set up standard operating procedures for new location launches",
      "Draft compliant legal franchise agreement structures",
      "Deploy automated location performance audits and dashboards"
    ],
    coverBg: "linear-gradient(135deg, #3C2E13 0%, #705824 100%)",
    spineBg: "#3C2E13",
    accentColor: "#E6C15C",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  },
  {
    id: 3,
    title: "Business Automation PowerKit",
    subtitle: "Eliminating Administrative Friction with AI-Driven Workflows & Syncs",
    tag: "BUSINESS AUTOMATION",
    rating: "4.9 ★ Tech Leader",
    category: "Automation",
    bestsellerBadge: "Top Choice",
    coverImg: businessAutomationCover,
    description: "Eliminate manual repetitive processes. A complete architectural blueprint to connect HubSpot, Salesforce, and configure custom AI workflow agents to manage operations.",
    takeaways: [
      "Deploy automated client onboarding and invoice pipelines",
      "Build and sync data flows across multiple database channels",
      "Integrate custom AI assistant triggers to handle admin friction"
    ],
    coverBg: "linear-gradient(135deg, #1C2E24 0%, #30583F 100%)",
    spineBg: "#1C2E24",
    accentColor: "#5CE68B",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  },
  {
    id: 4,
    title: "Fund Raising PowerKit",
    subtitle: "Structuring Valuation & Strategic Pitching for Capital Growth",
    tag: "FUND RAISING & EQUITY",
    rating: "4.8 ★ Financial Choice",
    category: "Fund Raising",
    bestsellerBadge: "Highly Rated",
    coverImg: fundRaisingCover,
    description: "Secure scaling capital on premium terms. Learn how to map financial growth models, prepare exit multiplier audit folders, and deliver high-impact investor pitches.",
    takeaways: [
      "Formulate expansion budgets and valuation growth models",
      "Organize data rooms and due diligence folders before buyer audits",
      "Pitch structures that protect founder equity and control"
    ],
    coverBg: "linear-gradient(135deg, #1B2B3F 0%, #2A456C 100%)",
    spineBg: "#1B2B3F",
    accentColor: "#5C9DE6",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  },
  {
    id: 5,
    title: "Export–Import Launch PowerKit",
    subtitle: "Proven Blueprints for Global Market Operations & Customs Integration",
    tag: "GLOBAL TRADE & OPERATIONS",
    rating: "4.9 ★ Trade Expert",
    category: "Global Trade",
    bestsellerBadge: "Voted #1",
    coverImg: exportImportCover,
    description: "Scale your revenue globally. Master custom integrations, international logistics chains, tax compliance structures, and global partner acquisition campaigns.",
    takeaways: [
      "Configure cross-border payment structures and tax setups",
      "Standardize logistics lines for international freight and customs",
      "Acquire overseas distributor networks using account-based campaigns"
    ],
    coverBg: "linear-gradient(135deg, #3A1E4A 0%, #603875 100%)",
    spineBg: "#3A1E4A",
    accentColor: "#CE9CE6",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  },
  {
    id: 6,
    title: "Growth Diagnosis PowerKit",
    subtitle: "Isolating Margin Leaks & Resolving Operational Bottlenecks",
    tag: "GROWTH DIAGNOSIS",
    rating: "5.0 ★ Diagnostic Pick",
    category: "Diagnosis",
    bestsellerBadge: "Executive Pick",
    coverImg: growthDiagnosisCover,
    description: "A clinic for your operations. Discover how to isolate margin drops, optimize employee performance metrics, and build predictable, self-sustaining revenue engines.",
    takeaways: [
      "Isolate leaks in marketing, sales, and delivery pipelines",
      "Create performance rating dashboards for core teams",
      "Deploy custom operating blueprints that double valuation multiples"
    ],
    coverBg: "linear-gradient(135deg, #4F1F1F 0%, #823E3E 100%)",
    spineBg: "#4F1F1F",
    accentColor: "#E67C7C",
    textColor: "#ffffff",
    amazonLink: "https://amazon.in",
  }
];

function ThreeDBook({ book }) {
  return (
    <div className="perspective-1000 w-[240px] sm:w-[280px] h-[345px] sm:h-[395px] relative group select-none">
      <div 
        className="w-full h-full relative preserve-3d duration-500 group-hover:[transform:rotateY(-22deg)_rotateX(6deg)] shadow-[0_15px_35px_rgba(0,0,0,0.15)] rounded-r-lg"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Spine Side */}
        <div 
          className="absolute top-0 left-0 w-5 sm:w-6 h-full origin-left preserve-3d"
          style={{ 
            backgroundColor: book.spineBg,
            transform: 'rotateY(-90deg) translateX(-12px)',
            transformOrigin: 'left',
          }}
        >
          {/* Spine text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center [writing-mode:vertical-rl] text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/50 select-none">
            {book.title}
          </div>
        </div>

        {/* Cover Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-r-lg select-none overflow-hidden border-y border-r border-white/10"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'translateZ(1px)'
          }}
        >
          {book.coverImg ? (
            <img 
              src={book.coverImg} 
              alt={book.title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full p-5 sm:p-7 flex flex-col justify-between" style={{ background: book.coverBg }}>
              {/* Cover Header */}
              <div className="space-y-1.5 relative z-10 text-left">
                <span 
                  className="text-[8px] font-extrabold tracking-widest px-2 py-0.5 rounded bg-white/10 uppercase"
                  style={{ color: book.accentColor }}
                >
                  {book.bestsellerBadge}
                </span>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-heading pt-1">
                  ARUNN GUPTAA
                </div>
              </div>

              {/* Cover Title */}
              <div className="my-auto relative z-10 text-left">
                <h4 className="text-lg sm:text-2xl font-black text-white leading-tight font-heading tracking-tight">
                  {book.title.split(' ').map((word, idx) => (
                    <span key={idx} className="block">
                      {word}
                    </span>
                  ))}
                </h4>
              </div>

              {/* Cover Footer */}
              <div className="border-t border-white/10 pt-3 relative z-10 flex items-center justify-between">
                <span className="text-[7px] uppercase tracking-widest text-white/60 font-body">
                  Advisory Playbook
                </span>
                <span 
                  className="text-[9px] font-bold"
                  style={{ color: book.accentColor }}
                >
                  ★ ★ ★ ★ ★
                </span>
              </div>
            </div>
          )}
          {/* Spine Shine highlight */}
          <div className="absolute top-0 left-0 w-3 sm:w-4 h-full bg-gradient-to-r from-black/25 via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default function BooksShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', company: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeBook = booksData[activeIdx];

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setLeadForm({ name: '', email: '', company: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="books" className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[35%] h-[35%] bg-accentGold/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="inline-block text-[11px] tracking-[0.25em] font-bold text-accentGold mb-6 uppercase font-heading">
            — ADVISORY PLAYBOOKS & ASSETS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
            Published Works
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-serif italic text-textSecondary mt-4 font-normal">
              Structuring Systems for <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">Enterprise Value.</span>
            </span>
          </h2>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Book Cover Spot */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBook.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* 3D Book Cover Component */}
                <ThreeDBook book={activeBook} />

                {/* Floating Category Badge */}
                <span className="absolute -top-4 -right-4 bg-white px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-textPrimary shadow-lg border border-black/[0.05] z-20">
                  {activeBook.category}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Book Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left lg:pl-4">
            
            {/* Meta Tags */}
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center space-x-1.5 bg-accentGold/10 border border-accentGold/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGold animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B08D1F] font-heading">
                  {activeBook.tag}
                </span>
              </span>
              <span className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">
                {activeBook.rating}
              </span>
            </div>

            {/* Title & Subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBook.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <h3 className="text-2xl sm:text-4xl font-extrabold text-textPrimary tracking-tight leading-tight font-heading">
                  {activeBook.title}
                </h3>
                <p className="text-sm font-semibold text-textSecondary font-serif italic max-w-xl">
                  {activeBook.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeBook.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-[13px] sm:text-sm text-textSecondary font-light leading-relaxed max-w-xl font-body"
              >
                {activeBook.description}
              </motion.p>
            </AnimatePresence>

            {/* Bullet Points */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBook.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="space-y-3 pt-2"
              >
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-textPrimary font-heading">
                  Inside the advisory guide:
                </h4>
                <ul className="space-y-2.5">
                  {activeBook.takeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-[13px] text-textSecondary font-light leading-relaxed max-w-lg font-body">
                      <CheckCircle2 className="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Magnetic>
                <a
                  href={activeBook.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accentGold to-[#B08D1F] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-premium hover:shadow-[0_10px_25px_rgba(201,162,39,0.25)] transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Get Book on Amazon
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </Magnetic>
              
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] hover:border-black/20 text-textPrimary text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-premium"
              >
                <DownloadCloud className="w-4 h-4" />
                Download PDF Preview
              </button>
            </div>

          </div>

        </div>

        {/* Thumbnail Selector Tabs */}
        <div className="mt-20">
          <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-textSecondary mb-6 text-center lg:text-left">
            SELECT A BOOK TO PREVIEW ({booksData.length} VOLUMES)
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {booksData.map((book, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={book.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between h-[120px] group cursor-pointer ${
                    isActive 
                      ? 'bg-bgDark border-accentGold shadow-xl scale-[1.04] text-white' 
                      : 'bg-white hover:bg-white border-black/[0.05] hover:border-black/10 shadow-sm text-textSecondary'
                  }`}
                >
                  {/* Left Spine Indicator */}
                  <div 
                    className="absolute top-0 left-0 w-1.5 h-full rounded-l-xl transition-opacity duration-300"
                    style={{ background: book.coverBg }}
                  />

                  <div className="pl-1 text-left">
                    <span 
                      className={`text-[8px] font-extrabold uppercase tracking-widest block mb-1 ${
                        isActive ? 'text-accentGold' : 'text-textSecondary/60'
                      }`}
                    >
                      {book.category}
                    </span>
                    <span className={`text-xs font-bold font-heading line-clamp-2 leading-snug ${
                      isActive ? 'text-white' : 'text-textSecondary group-hover:text-textPrimary'
                    }`}>
                      {book.title}
                    </span>
                  </div>

                  <div className="pl-1 flex items-center justify-between w-full pt-2">
                    <span className={`text-[9px] font-medium ${
                      isActive ? 'text-white/60' : 'text-textSecondary/80'
                    }`}>
                      Vol. 0{book.id}
                    </span>
                    <ChevronIndicator isActive={isActive} book={book} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Chapter Download Lead Capture Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-premium p-8 shadow-2xl border border-black/[0.05] z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-textSecondary hover:text-textPrimary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-left space-y-2 mb-6">
                <span className="inline-flex items-center space-x-1 text-accentGold">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-[9px] font-extrabold tracking-widest uppercase font-heading">
                    Free Chapter Download
                  </span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary leading-tight">
                  Get Preview: {activeBook.title}
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Enter your business details below to get the complimentary draft chapter and diagnostic worksheet sent to your inbox.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleLeadSubmit} className="space-y-4 text-left">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary block">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.company}
                    onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-bgDark hover:bg-accentGold text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {formSubmitted ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Verification Logged
                      </>
                    ) : (
                      <>
                        <DownloadCloud className="w-4 h-4" />
                        Request Free Preview
                      </>
                    )}
                  </button>
                </div>
              </form>

              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-emerald-50 text-emerald-800 text-[11px] font-medium rounded-xl border border-emerald-100"
                >
                  ✓ The requested preview link for <strong>{activeBook.title}</strong> has been sent to <strong>{leadForm.email}</strong>.
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ChevronIndicator({ isActive, book }) {
  return (
    <div 
      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
        isActive 
          ? 'bg-accentGold text-white' 
          : 'bg-black/[0.03] text-textSecondary/40 group-hover:bg-black/5 group-hover:text-textPrimary'
      }`}
    >
      <span className="text-[10px] font-bold">→</span>
    </div>
  );
}
