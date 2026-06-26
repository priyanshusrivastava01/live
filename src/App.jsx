import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProblemSection from './components/ProblemSection';
import SignatureFramework from './components/SignatureFramework';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import About from './components/About'; // Founder Story & Timeline Section
import LeadMagnet from './components/LeadMagnet';
import LatestInsights from './components/LatestInsights';
import FAQ from './components/FAQ';
import ConsultationCTA from './components/ConsultationCTA';
import Contact from './components/Contact';
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

          {/* 8. Distinct Competitive Pillars */}
          <WhyChooseUs />

          {/* 9. Case Studies & Before/After Interactive Slider */}
          <CaseStudies />

          {/* 10. Testimonials Video Card Swipe Carousel */}
          <Testimonials />

          {/* 11. Network Audience Size Social Badges */}
          <SocialProof />

          {/* 12. Founder Story Biography & Professional Milestones */}
          <About />

          {/* 13. Low-Friction Growth Checklist Lead Magnet Capture */}
          <LeadMagnet />

          {/* 14. Latest Strategic Insights Briefs */}
          <LatestInsights />

          {/* 15. FAQ Collapsible Accordions */}
          <FAQ />

          {/* 16. Onboarding Journey & Booking CTA */}
          <ConsultationCTA />

          {/* 17. Intake Form Application, Booking Calendar & Headquarters Maps */}
          <Contact />
        </main>

        {/* Footer & Privacy Disclosures */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
