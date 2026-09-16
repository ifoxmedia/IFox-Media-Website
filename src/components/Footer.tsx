import React from 'react';
import { IFoxLogo } from './IFoxLogo';
import { AGENCY_CONTACT } from '../data/agencyData';
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0D14] text-gray-400 pt-20 pb-24 sm:pb-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <IFoxLogo variant="dark" size="md" />
            </a>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed mt-2">
              IFox Media is an elite digital engineering & performance marketing firm. We empower high-growth brands with conversion-focused websites and high-ROI acquisition funnels.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <a
                id="footer-call-btn"
                href={`tel:${AGENCY_CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors border border-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5200]" />
                <span>{AGENCY_CONTACT.phoneDisplay}</span>
              </a>

              <a
                id="footer-whatsapp-btn"
                href={AGENCY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-400 font-semibold transition-colors border border-[#25D366]/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Web Development Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              Website Development
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  Custom Next.js & React Web Apps
                </a>
              </li>
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  High-Converting Landing Pages
                </a>
              </li>
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  E-Commerce (Shopify & Custom)
                </a>
              </li>
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  Corporate Portals & B2B Sites
                </a>
              </li>
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  PageSpeed & Core Web Vitals
                </a>
              </li>
              <li>
                <a href="#services-development" className="hover:text-[#FF5200] transition-colors">
                  Website Security & Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              Digital Marketing
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  Google Search & Shopping Ads
                </a>
              </li>
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  Meta (Instagram & Facebook) Ads
                </a>
              </li>
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  Conversion Rate Optimization (CRO)
                </a>
              </li>
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  Social Media Strategy & Reels
                </a>
              </li>
              <li>
                <a href="#services-marketing" className="hover:text-[#FF5200] transition-colors">
                  GA4 Attribution & Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Info */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-gray-500 block text-[11px]">Primary Phone:</span>
                <a href={`tel:${AGENCY_CONTACT.phoneRaw}`} className="text-white font-bold hover:text-[#FF5200]">
                  {AGENCY_CONTACT.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[11px]">Inquiry Email:</span>
                <a href={`mailto:${AGENCY_CONTACT.email}`} className="text-white font-medium hover:text-[#FF5200] break-all">
                  {AGENCY_CONTACT.email}
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[11px]">Operating Hours:</span>
                <span className="text-gray-300">{AGENCY_CONTACT.hours}</span>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Accepting new client projects</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-300">IFox Media</strong>. All rights reserved.
            <span className="mx-2">•</span>
            <span>CREATE • GROW • TRANSFORM</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-gray-300 transition-colors">Case Studies</a>
            <a href="#estimator" className="hover:text-gray-300 transition-colors">Scope Estimator</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
