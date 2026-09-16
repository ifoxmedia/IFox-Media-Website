import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  category: string;
  badge: string;
  badgeColor: string;
  svg: React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    id: 'google',
    name: 'Google Partner',
    category: 'Search & Performance Ads',
    badge: 'Certified Partner',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Google">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
    ),
  },
  {
    id: 'meta',
    name: 'Meta',
    category: 'Business Partner',
    badge: 'Marketing Partner',
    badgeColor: 'text-[#0064E0] bg-blue-50/80 border-blue-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Meta">
        <defs>
          <linearGradient id="metaGradMarquee" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0081FB" />
            <stop offset="50%" stopColor="#0064E0" />
            <stop offset="100%" stopColor="#0079F3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#metaGradMarquee)"
          d="M16.994 3.003c-2.316 0-4.402 1.173-5.006 2.873-.604-1.7-2.69-2.873-5.006-2.873C3.09 3.003 0 5.986 0 11.966c0 6.07 3.18 9.031 6.982 9.031 2.378 0 4.417-1.123 5.006-2.827.588 1.704 2.628 2.827 5.006 2.827 3.802 0 6.982-2.961 6.982-9.031 0-5.98-3.09-8.963-6.982-8.963zm.012 14.92c-2.185 0-3.906-1.84-4.838-4.838-.073-.238-.142-.472-.206-.704.47-.945 1.056-1.82 1.745-2.585.874-.972 2.008-1.576 3.299-1.576 2.052 0 3.633 1.558 3.633 4.852 0 3.32-1.581 4.851-3.633 4.851zm-9.988 0c-2.052 0-3.633-1.531-3.633-4.851 0-3.294 1.581-4.852 3.633-4.852 1.291 0 2.425.604 3.299 1.576.689.765 1.275 1.64 1.745 2.585-.064.232-.133.466-.206.704-.932 2.998-2.653 4.838-4.838 4.838z"
        />
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Meta Ads & Audience Network',
    badge: 'Official Ad Platform',
    badgeColor: 'text-[#1877F2] bg-blue-50 border-blue-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Facebook">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path
          fill="#FFFFFF"
          d="M15.5 12h-2.5v8h-3.3v-8H7.5V9.3h2.2V7.4c0-2.3 1.4-3.5 3.4-3.5 1 0 1.9.1 2.2.1v2.5h-1.5c-1.1 0-1.4.5-1.4 1.4v1.4h2.9l-.3 2.7z"
        />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Growth & Visual Commerce',
    badge: 'Brand & Reels Network',
    badgeColor: 'text-[#C13584] bg-pink-50 border-pink-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Instagram">
        <defs>
          <linearGradient id="igGradMarquee" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#F77737" />
            <stop offset="50%" stopColor="#F56040" />
            <stop offset="75%" stopColor="#FD1D1D" />
            <stop offset="100%" stopColor="#C13584" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igGradMarquee)" />
        <path
          fill="#FFFFFF"
          d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.9a3.1 3.1 0 110-6.2 3.1 3.1 0 010 6.2zm5.1-8.2a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm2.9 2.2c-.1-1.3-.4-2.5-1.3-3.4-.9-.9-2.1-1.2-3.4-1.3C14 4.3 9.9 4.3 8.6 4.4 7.3 4.5 6.1 4.8 5.2 5.7c-.9.9-1.2 2.1-1.3 3.4-.1 1.3-.1 5.4 0 6.7.1 1.3.4 2.5 1.3 3.4.9.9 2.1 1.2 3.4 1.3 1.3.1 5.4.1 6.7 0 1.3-.1 2.5-.4 3.4-1.3.9-.9 1.2-2.1 1.3-3.4.1-1.3.1-5.4 0-6.7zm-2 8.3c-.3.7-.8 1.2-1.5 1.5-1 .4-3.4.3-4.5.3s-3.5.1-4.5-.3c-.7-.3-1.2-.8-1.5-1.5-.4-1-.3-3.4-.3-4.5s-.1-3.5.3-4.5c.3-.7.8-1.2 1.5-1.5 1-.4 3.4-.3 4.5-.3s3.5-.1 4.5.3c.7.3 1.2.8 1.5 1.5.4 1 .3 3.4.3 4.5s.1 3.5-.3 4.5z"
        />
      </svg>
    ),
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'High-Intent Search & PMax',
    badge: 'Advanced Partner',
    badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Google Ads">
        <path
          fill="#FBBC04"
          d="M3.5 15.8l6.8-11.8c.8-1.4 2.6-1.9 4-1.1l2.4 1.4c1.4.8 1.9 2.6 1.1 4L11 20.1c-.8 1.4-2.6 1.9-4 1.1L4.6 19.8c-1.4-.8-1.9-2.6-1.1-4z"
        />
        <path
          fill="#4285F4"
          d="M17.8 8.3l2.4 1.4c1.4.8 1.9 2.6 1.1 4l-4.5 7.8c-.8 1.4-2.6 1.9-4 1.1l-2.4-1.4c-1.4-.8-1.9-2.6-1.1-4l4.5-7.8c.8-1.4 2.6-1.9 4-1.1z"
        />
        <circle cx="5.8" cy="18.2" r="3" fill="#34A853" />
      </svg>
    ),
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    category: 'Conversational Sales Funnels',
    badge: 'Direct Integration',
    badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="WhatsApp">
        <circle cx="12" cy="12" r="12" fill="#25D366" />
        <path
          fill="#FFFFFF"
          d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.5.2 2.1.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.2-.6-.3z"
        />
      </svg>
    ),
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    category: 'Full-Funnel Attribution',
    badge: 'GA4 Certified',
    badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Google Analytics">
        <path fill="#F9AB00" d="M12 2a2 2 0 012 2v16a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z" />
        <path fill="#E37400" d="M19 8a2 2 0 012 2v10a2 2 0 01-2 2 2 2 0 01-2-2V10a2 2 0 012-2z" />
        <circle cx="5" cy="18" r="2" fill="#F9AB00" />
      </svg>
    ),
  },
];

export const PartnerMarquee: React.FC = () => {
  // We duplicate the array to guarantee a seamless, stutter-free continuous marquee loop
  const marqueeList = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partner-marquee-section"
      aria-label="Official Partner Platforms & Integrations"
      className="relative py-8 bg-white border-y border-gray-200/80 shadow-xs overflow-hidden"
    >
      {/* Eyebrow Label Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5200] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5200]" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
              Official Ecosystem Partners & Certified Ad Networks
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span className="inline-flex items-center gap-1 font-medium text-gray-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Ad Agency Access</span>
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="hidden md:inline font-medium text-gray-600">
              Direct Meta & Google Growth Reps
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Track with Edge Soft Gradient Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Strip */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] py-2 items-center gap-4 sm:gap-6">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:shadow-md hover:border-orange-300 hover:bg-orange-50/20 transition-all duration-200 shrink-0 group cursor-default select-none"
            >
              {/* Partner Logo Icon */}
              <div className="p-1 rounded-xl bg-gray-50 group-hover:bg-white group-hover:scale-105 transition-transform duration-200 border border-gray-100 flex items-center justify-center">
                {partner.svg}
              </div>

              {/* Partner Info */}
              <div className="text-left pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[#FF5200] transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${partner.badgeColor}`}
                  >
                    {partner.badge}
                  </span>
                </div>
                <div className="text-[11px] text-gray-500 whitespace-nowrap mt-0.5">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
