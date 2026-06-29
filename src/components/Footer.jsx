import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    setSubscribed(false);

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        setError(data.error || 'Subscription failed. Please try again.');
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      setError('Server is offline.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bgDark text-white pt-20 pb-8 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top block: Newsletter & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Logo & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center space-x-2 text-xl font-extrabold tracking-tight">
              <span className="font-heading text-white">ARUNN</span>
              <span className="font-heading text-accentGold font-light">GUPTAA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accentGold inline-block" />
            </a>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Deploying standard operating systems and cashflow growth frameworks to scale companies into independent, high-value assets.
            </p>
            
            {/* Social channels (placeholders) */}
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300" title="[Link to your LinkedIn Profile]" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300" title="[Link to your Twitter / X Profile]" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300" title="[Link to your YouTube Channel]" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300" title="[Link to your Instagram Profile]" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Subscribe to the Executive Brief (Replace)
              </h3>
              <p className="text-[12px] text-gray-400 font-light max-w-md">
                Get weekly strategy blueprints on business processes, M&A checklists, margins auditing, and scale guidelines directly to your inbox.
              </p>
            </div>

            <div className="space-y-3">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accentGold/50 flex-grow transition-colors"
                />
                <Magnetic>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-full bg-white text-bgDark text-xs font-bold uppercase tracking-wider hover:bg-accentGold hover:text-white transition-colors duration-300 w-full sm:w-auto cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : subscribed ? "Subscribed ✓" : "Subscribe"}
                  </button>
                </Magnetic>
              </form>
              {error && (
                <p className="text-[10px] text-red-400 font-light text-left pl-2">
                  ⚠ {error}
                </p>
              )}
              {subscribed && (
                <p className="text-[10px] text-emerald-400 font-light text-left pl-2">
                  ✓ Successfully subscribed to executive brief!
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/[0.04] text-left">
          {/* Services link list */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-accentGold uppercase">
              Core Frameworks
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Business Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Positioning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Growth Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Operations Audit</a></li>
            </ul>
          </div>

          {/* Resources link list */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-accentGold uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#insights" className="hover:text-white transition-colors">Insights Blog</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">TEDx Keynote [Replace]</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Velocity OS SOP [Replace]</a></li>
            </ul>
          </div>

          {/* Company links list */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-accentGold uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">About / Story</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Press & Speaking</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Headquarters</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Advisory Board</a></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-accentGold uppercase">
              Legal Credits
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">[Privacy Policy]</a></li>
              <li><a href="#" className="hover:text-white transition-colors">[Terms of Advisory]</a></li>
              <li><a href="#" className="hover:text-white transition-colors">[Cookie Policy]</a></li>
              <li><a href="#" className="hover:text-white transition-colors">[Fiduciary Disclosures]</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Block */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-left">
          <p className="text-[10px] text-gray-500 font-medium">
            © {currentYear} [Replace with Corporate Legal Name]. All rights reserved. [Replace with Company Registration Credits].
          </p>
          <p className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
            <span>Designed in alignment with premium Apple & Linear aesthetics</span>
            <span className="w-1.5 h-1.5 bg-accentGold rounded-full" />
          </p>
        </div>

      </div>
    </footer>
  );
}
