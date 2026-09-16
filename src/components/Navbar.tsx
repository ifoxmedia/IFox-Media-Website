import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, ArrowRight, Sparkles, Code2, TrendingUp } from 'lucide-react';
import { IFoxLogo } from './IFoxLogo';
import { AGENCY_CONTACT } from '../data/agencyData';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Subtle Premium Tagline Bar */}
      <div className="bg-[#090D16] text-gray-300 text-[11px] py-1.5 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-gray-400">
            <span className="inline-flex items-center gap-1.5 text-white font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5200] animate-pulse" />
              IFox Media Digital Engineering
            </span>
            <span className="text-gray-600">•</span>
            <span>CREATE • GROW • TRANSFORM</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-400 text-[11px]">
            <span>{AGENCY_CONTACT.hours}</span>
            <span className="text-gray-600">•</span>
            <span className="text-emerald-400 font-medium">Accepting New Client Projects</span>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md py-3 border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#FF5200] rounded-lg p-0.5 hover:opacity-95 transition-opacity"
            aria-label="IFox Media Home"
          >
            <IFoxLogo variant="light" size={isScrolled ? 'xs' : 'sm'} />
          </a>

          {/* Desktop Navigation Links - Ultra Clean & Premium */}
          <div className="hidden lg:flex items-center space-x-7">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                id="nav-services-link"
                href="#services"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-[#FF5200] transition-colors py-2 group"
              >
                <span>Services</span>
                <span className="text-[10px] bg-orange-50 text-[#FF5200] font-bold px-2 py-0.5 rounded-full border border-orange-200/60 group-hover:bg-[#FF5200] group-hover:text-white transition-colors">
                  2 Core
                </span>
              </a>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 p-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <a
                    href="#services-development"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100/80 flex items-center justify-center text-[#FF5200] shrink-0 group-hover:bg-[#FF5200] group-hover:text-white transition-colors shadow-sm">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#FF5200] transition-colors">Website Development</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">High-speed React/Next.js, e-commerce, custom corporate portals.</p>
                    </div>
                  </a>

                  <a
                    href="#services-marketing"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50/60 transition-colors group mt-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100/80 flex items-center justify-center text-[#FF5200] shrink-0 group-hover:bg-[#FF5200] group-hover:text-white transition-colors shadow-sm">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#FF5200] transition-colors">Digital Marketing</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">SEO, Google & Meta Ads, conversion rate optimization, analytics.</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              id="nav-case-studies-link"
              href="#case-studies"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5200] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF5200] hover:after:w-full after:transition-all after:duration-200"
            >
              Case Studies
            </a>
            <a
              id="nav-process-link"
              href="#process"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5200] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF5200] hover:after:w-full after:transition-all after:duration-200"
            >
              Our Process
            </a>
            <a
              id="nav-estimator-link"
              href="#estimator"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5200] transition-colors flex items-center gap-1.5 py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF5200] hover:after:w-full after:transition-all after:duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5200]" />
              <span>Scope Estimator</span>
            </a>
            <a
              id="nav-testimonials-link"
              href="#testimonials"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5200] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF5200] hover:after:w-full after:transition-all after:duration-200"
            >
              Reviews
            </a>
            <a
              id="nav-contact-link"
              href="#contact"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5200] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF5200] hover:after:w-full after:transition-all after:duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - Pure & Clean */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-[#FF5200] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <div className="pb-3 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Services</span>
              <div className="mt-2 space-y-2">
                <a
                  href="#services-development"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1"
                >
                  <span>Website Development</span>
                  <span className="text-xs text-[#FF5200] bg-orange-50 px-2 py-0.5 rounded-md font-bold">High Speed</span>
                </a>
                <a
                  href="#services-marketing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1"
                >
                  <span>Digital Marketing</span>
                  <span className="text-xs text-[#FF5200] bg-orange-50 px-2 py-0.5 rounded-md font-bold">High ROI</span>
                </a>
              </div>
            </div>

            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1.5"
            >
              Case Studies & Portfolio
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1.5"
            >
              Our 4-Step Process
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1.5 flex items-center justify-between"
            >
              <span>Project Scope Estimator</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF5200]" />
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1.5"
            >
              Client Reviews & FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-[#FF5200] py-1.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
