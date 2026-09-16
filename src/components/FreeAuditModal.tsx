import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldAlert, Zap, Search, ArrowRight, MessageCircle } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeAuditModal: React.FC<FreeAuditModalProps> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focus, setFocus] = useState('full');
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const getWhatsAppAuditLink = () => {
    const text = encodeURIComponent(
      `Hi IFox Media, I would like to request a Free 24-Hour Digital Audit for my business:\n` +
      `🌐 Website: ${websiteUrl || 'Not yet launched'}\n` +
      `📞 Phone: ${phone || 'N/A'}\n` +
      `✉️ Email: ${email || 'N/A'}\n` +
      `🎯 Audit Focus: ${focus}`
    );
    return `https://wa.me/917972578726?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {done ? (
          <div className="py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-orange-100 text-[#FF5200] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-950">Audit Request Dispatched!</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              Our technical audit team has queued your domain <strong className="text-gray-900">{websiteUrl}</strong>. We will prepare your custom PDF diagnostic report and send it to <strong className="text-gray-900">{email}</strong> within 24 hours.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={getWhatsAppAuditLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-Track On WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free • No Obligation</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
              Claim Your Free 24h Digital & Web Audit
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Discover why your website might be leaking conversions or losing keyword rankings to direct competitors.
            </p>

            {/* Audit Perks Highlights */}
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <Zap className="w-4 h-4 text-[#FF5200] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block text-[11px]">Speed & Vitals</span>
                <span className="text-[10px] text-gray-500">PageSpeed & UX</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <Search className="w-4 h-4 text-[#FF5200] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block text-[11px]">SEO Ranking</span>
                <span className="text-[10px] text-gray-500">Keyword Gaps</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <ShieldAlert className="w-4 h-4 text-[#FF5200] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block text-[11px]">Ad ROI Leak</span>
                <span className="text-[10px] text-gray-500">Funnel Traps</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Website URL / Social Handle <span className="text-[#FF5200]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g. www.yourcompany.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Your Work Email <span className="text-[#FF5200]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Phone / WhatsApp <span className="text-[#FF5200]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 079725 78726"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Primary Area of Concern
                </label>
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                >
                  <option value="full">360° Comprehensive Audit (Web Speed + SEO + Ads)</option>
                  <option value="speed">Website Speed, Mobile UX & Core Web Vitals</option>
                  <option value="seo">Google Organic Rankings & Technical SEO Gaps</option>
                  <option value="ads">Paid Ad Performance & Conversion Funnels</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF5200] hover:bg-[#E04600] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Generate My Free Audit Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-gray-500">
                Guaranteed delivery within 24 hours. No sales pressure.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
