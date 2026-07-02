import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProblemSection from './components/ProblemSection';
import SignatureFramework from './components/SignatureFramework';
import Services from './components/Services';
import BooksShowcase from './components/BooksShowcase';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import About from './components/About'; // Founder Story & Timeline Section
import LatestInsights from './components/LatestInsights';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import GoldenCTA from './components/GoldenCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-bgCanvas text-textPrimary selection:bg-accentGold selection:text-white">
        {/* Navigation Header */}
        <Navbar />

        {/* Core Layout Sections sequenced for maximum conversion flow */}
        <main>
          {/* 1. Hero & Positioning Hook */}
          <Hero />

          {/* 2. Client Trust Marquee */}
          <TrustedBy />

          {/* 3. Deconstructed Bottlenecks */}
          <ProblemSection />

          {/* 6. Signature Process Framework Timeline */}
          <SignatureFramework />

          {/* 7. Strategic Value Services Grid */}
          <Services />

          {/* 8. Books Showcase Section */}
          <BooksShowcase />

          {/* 11. Network Audience Size Social Badges */}
          <SocialProof />

          {/* 12. Founder Story Biography & Professional Milestones */}
          <About />


          {/* 14. Latest Strategic Insights Briefs */}
          <LatestInsights />

          {/* 10. Testimonials Video Card Swipe Carousel */}
          <Testimonials />

          {/* 15. FAQ Collapsible Accordions */}
          <FAQ />


          {/* 17. Intake Form Application, Booking Calendar & Headquarters Maps */}
          <Contact />

          {/* Golden CTA Banner Section */}
          <GoldenCTA />
        </main>

        {/* Footer & Privacy Disclosures */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
