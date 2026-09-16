import React from 'react';
import { ArrowRight, Phone, MessageCircle, Sparkles, CheckCircle2, TrendingUp, Code2, Award, Zap, ShieldCheck } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Agency Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF5200] animate-pulse" />
              <span>Full-Stack Growth Agency</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600 font-medium">Digital Marketing & Web Dev</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
              We Engineer High-Impact <br className="hidden sm:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5200] via-[#FF661A] to-[#E04600]">
                Websites & Marketing
              </span>{' '}
              That Scale Real Revenue.
            </h1>

            {/* Tagline Subtext with Agency Motto */}
            <div className="mt-5 flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-700">
              <span className="text-[#FF5200]">CREATE</span>
              <span>•</span>
              <span className="text-gray-900">GROW</span>
              <span>•</span>
              <span className="text-[#FF5200]">TRANSFORM</span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              IFox Media pairs laser-focused <strong className="text-gray-900 font-semibold">performance digital marketing</strong> (SEO, Google & Meta Ads, high-converting funnels) with <strong className="text-gray-900 font-semibold">bespoke website engineering</strong> (blazing-fast Next.js, e-commerce, and corporate web platforms).
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                id="hero-cta-quote"
                href="#contact"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#FF5200] hover:bg-[#E04600] rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-audit"
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-sm transition-all hover:border-orange-300"
              >
                <Sparkles className="w-4 h-4 text-[#FF5200]" />
                <span>Free 24h Website Audit</span>
              </button>

              <a
                id="hero-cta-whatsapp"
                href={AGENCY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#128C7E] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
                title="Chat with Founder on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Verification Callout */}
            <div className="mt-6 flex items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1.5 font-medium text-gray-800">
                <Phone className="w-3.5 h-3.5 text-[#FF5200]" />
                <span>Direct Hotline:</span>
                <a href={`tel:${AGENCY_CONTACT.phoneRaw}`} className="font-bold text-[#FF5200] hover:underline">
                  {AGENCY_CONTACT.phoneDisplay}
                </a>
              </div>
              <span className="text-gray-300">|</span>
              <div className="text-gray-500">
                Guaranteed response under 2 hours
              </div>
            </div>

            {/* Trust Checklist */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5200] shrink-0" />
                <span>95+ PageSpeed Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5200] shrink-0" />
                <span>Average 4.8x Ad ROAS</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#FF5200] shrink-0" />
                <span>No Long-Term Lock-in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Agency Metrics & Interactive Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5200]/30 to-orange-400/30 rounded-3xl blur-xl opacity-70" />

              {/* Main Interactive Agency Dashboard Card */}
              <div className="relative bg-[#0F141C] text-white p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs font-mono text-gray-400 ml-2">ifoxmedia-growth-matrix</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#FF5200] bg-orange-950/80 border border-orange-500/30 px-2 py-0.5 rounded">
                    LIVE PRODUCTION
                  </span>
                </div>

                {/* Two Core Pillars Cards */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {/* Pillar 1: Web Dev */}
                  <div className="bg-white/5 hover:bg-white/10 transition-colors p-3.5 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#FF5200] flex items-center justify-center mb-2">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-gray-200">Website Dev</div>
                    <div className="text-2xl font-black text-white mt-1">99.8%</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <Zap className="w-3 h-3" /> Core Web Vitals Pass
                    </div>
                  </div>

                  {/* Pillar 2: Digital Marketing */}
                  <div className="bg-white/5 hover:bg-white/10 transition-colors p-3.5 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#FF5200] flex items-center justify-center mb-2">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-gray-200">Digital Marketing</div>
                    <div className="text-2xl font-black text-white mt-1">4.8x</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> Average Campaign ROAS
                    </div>
                  </div>
                </div>

                {/* Key Proven Numbers */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                  <div className="flex justify-between items-center text-xs text-gray-300">
                    <span>Active Client Growth Rate</span>
                    <span className="font-bold text-[#FF5200]">+320% YoY</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FF5200] to-amber-400 h-full rounded-full w-[88%]" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 text-center divide-x divide-white/10 pt-2 text-[11px]">
                    <div>
                      <div className="font-extrabold text-white text-base">150+</div>
                      <div className="text-gray-400 text-[10px]">Deployments</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-[#FF5200] text-base">&lt; 1s</div>
                      <div className="text-gray-400 text-[10px]">Avg Speed</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-emerald-400 text-base">99.4%</div>
                      <div className="text-gray-400 text-[10px]">Retention</div>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Tool Stack Chips */}
                <div className="mt-4">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-2">
                    Industry Standard Execution Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js', 'React', 'Tailwind', 'Google Ads', 'Meta Ads', 'SEO Engine', 'Shopify', 'GA4'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Consultation Link Banner inside Card */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-gray-400">Have an urgent project?</span>
                    <div className="font-bold text-white">{AGENCY_CONTACT.email}</div>
                  </div>
                  <a
                    href={`tel:${AGENCY_CONTACT.phoneRaw}`}
                    className="text-xs font-bold bg-[#FF5200] hover:bg-[#E04600] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
