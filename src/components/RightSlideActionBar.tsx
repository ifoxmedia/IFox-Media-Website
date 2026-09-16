import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Send, 
  Sparkles, 
  Check, 
  Copy, 
  ChevronRight, 
  ChevronLeft,
  X,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface RightSlideActionBarProps {
  onOpenAudit: () => void;
  onOpenContact: () => void;
}

export const RightSlideActionBar: React.FC<RightSlideActionBarProps> = ({
  onOpenAudit,
  onOpenContact,
}) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [activePopup, setActivePopup] = useState<'call' | 'whatsapp' | 'mail' | 'enquiry' | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      {/* Right Side Slide Bar Container */}
      <aside
        id="right-slide-action-bar"
        aria-label="Quick Connect Action Bar"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 pointer-events-auto"
      >
        <div className="relative flex items-center">
          {/* Collapse/Expand Toggle Tab */}
          <button
            id="toggle-right-bar-btn"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              setActivePopup(null);
            }}
            aria-label={isCollapsed ? "Expand quick contact bar" : "Collapse quick contact bar"}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-5 h-12 rounded-l-md bg-[#0F172A]/90 hover:bg-[#1E293B] text-gray-400 hover:text-white border-l border-t border-b border-white/10 flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
            title={isCollapsed ? "Open Quick Actions" : "Hide Quick Actions"}
          >
            {isCollapsed ? (
              <ChevronLeft className="w-3.5 h-3.5 text-[#FF5200]" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Main Action Dock */}
          <div
            className={`transition-all duration-300 ease-out ${
              isCollapsed ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="bg-[#0A0E1A]/95 backdrop-blur-xl border-l border-t border-b border-white/15 rounded-l-2xl shadow-[0_12px_45px_rgba(0,0,0,0.45)] py-3 px-1.5 flex flex-col items-center gap-2.5">
              
              {/* 1. CALL BUTTON */}
              <div 
                className="relative group"
                onMouseEnter={() => setActivePopup('call')}
                onMouseLeave={() => setActivePopup((prev) => prev === 'call' ? null : prev)}
              >
                <button
                  id="right-bar-call-btn"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      window.location.href = `tel:${AGENCY_CONTACT.phoneRaw}`;
                    } else {
                      setActivePopup(activePopup === 'call' ? null : 'call');
                    }
                  }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 relative ${
                    activePopup === 'call'
                      ? 'bg-[#FF5200] text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white/5 text-gray-300 hover:bg-[#FF5200] hover:text-white hover:scale-105'
                  }`}
                  aria-label={`Call IFox Media at ${AGENCY_CONTACT.phoneDisplay}`}
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </button>

                {/* Call Slide-out Card */}
                {activePopup === 'call' && (
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 w-64 max-w-[calc(100vw-4.5rem)] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl p-4 text-left animate-in fade-in slide-in-from-right-3 duration-200 z-50">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-white">Direct Line</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); closePopup(); }}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-400">Speak directly with our senior digital strategist:</p>
                      <a
                        href={`tel:${AGENCY_CONTACT.phoneRaw}`}
                        className="block mt-1 text-base font-extrabold text-[#FF5200] hover:text-[#ff6a26] transition-colors"
                      >
                        {AGENCY_CONTACT.phoneDisplay}
                      </a>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span>Mon–Sat: 9:00 AM – 7:30 PM</span>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center gap-2">
                      <a
                        href={`tel:${AGENCY_CONTACT.phoneRaw}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#FF5200] hover:bg-[#E04600] text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call Now</span>
                      </a>
                      <button
                        onClick={() => handleCopy(AGENCY_CONTACT.phoneRaw, 'phone')}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                        title="Copy phone number"
                      >
                        {copiedType === 'phone' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. WHATSAPP BUTTON */}
              <div 
                className="relative group"
                onMouseEnter={() => setActivePopup('whatsapp')}
                onMouseLeave={() => setActivePopup((prev) => prev === 'whatsapp' ? null : prev)}
              >
                <a
                  id="right-bar-whatsapp-btn"
                  href={AGENCY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActivePopup(null)}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 relative ${
                    activePopup === 'whatsapp'
                      ? 'bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 scale-105'
                      : 'bg-white/5 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-105'
                  }`}
                  aria-label="Chat with IFox Media on WhatsApp"
                  title="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  {/* Live Status Pulse */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-[#0A0E1A]" />
                </a>

                {/* WhatsApp Slide-out Card */}
                {activePopup === 'whatsapp' && (
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 w-64 max-w-[calc(100vw-4.5rem)] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl p-4 text-left animate-in fade-in slide-in-from-right-3 duration-200 z-50">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">WhatsApp Live</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); closePopup(); }}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-300 font-medium">Chat instantly with our technical & growth team.</p>
                      <p className="text-[11px] text-gray-400 mt-1">Average response time: <strong className="text-white">&lt; 15 minutes</strong></p>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/10">
                      <a
                        href={AGENCY_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Start WhatsApp Chat</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. MAIL BUTTON */}
              <div 
                className="relative group"
                onMouseEnter={() => setActivePopup('mail')}
                onMouseLeave={() => setActivePopup((prev) => prev === 'mail' ? null : prev)}
              >
                <button
                  id="right-bar-mail-btn"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      window.location.href = `mailto:${AGENCY_CONTACT.email}`;
                    } else {
                      setActivePopup(activePopup === 'mail' ? null : 'mail');
                    }
                  }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 relative ${
                    activePopup === 'mail'
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105'
                      : 'bg-white/5 text-gray-300 hover:bg-sky-500 hover:text-white hover:scale-105'
                  }`}
                  aria-label={`Email IFox Media at ${AGENCY_CONTACT.email}`}
                  title="Official Email"
                >
                  <Mail className="w-4 h-4" />
                </button>

                {/* Mail Slide-out Card */}
                {activePopup === 'mail' && (
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 w-64 max-w-[calc(100vw-4.5rem)] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl p-4 text-left animate-in fade-in slide-in-from-right-3 duration-200 z-50">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Official Email</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); closePopup(); }}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-400">Send RFP, project briefs, or partnership inquiries:</p>
                      <a
                        href={`mailto:${AGENCY_CONTACT.email}`}
                        className="block mt-1 text-xs font-bold text-white hover:text-sky-400 transition-colors break-all"
                      >
                        {AGENCY_CONTACT.email}
                      </a>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center gap-2">
                      <a
                        href={`mailto:${AGENCY_CONTACT.email}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Send Email</span>
                      </a>
                      <button
                        onClick={() => handleCopy(AGENCY_CONTACT.email, 'email')}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                        title="Copy email address"
                      >
                        {copiedType === 'email' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Separator Line */}
              <div className="w-6 h-px bg-white/10 my-0.5" />

              {/* 4. ENQUIRY BUTTON */}
              <div 
                className="relative group"
                onMouseEnter={() => setActivePopup('enquiry')}
                onMouseLeave={() => setActivePopup((prev) => prev === 'enquiry' ? null : prev)}
              >
                <button
                  id="right-bar-enquiry-btn"
                  onClick={() => {
                    setActivePopup(activePopup === 'enquiry' ? null : 'enquiry');
                  }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 relative ${
                    activePopup === 'enquiry'
                      ? 'bg-gradient-to-br from-[#FF5200] to-[#FF3D00] text-white shadow-lg shadow-orange-500/40 scale-105'
                      : 'bg-orange-500/10 text-[#FF5200] border border-[#FF5200]/30 hover:bg-[#FF5200] hover:text-white hover:scale-105'
                  }`}
                  aria-label="Make an Enquiry"
                  title="Quick Enquiry"
                >
                  <Send className="w-4 h-4" />
                </button>

                {/* Enquiry Slide-out Card */}
                {activePopup === 'enquiry' && (
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 w-72 max-w-[calc(100vw-4.5rem)] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl p-4 text-left animate-in fade-in slide-in-from-right-3 duration-200 z-50">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF5200]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-white">Project Enquiry</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); closePopup(); }}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-300">
                        Ready to accelerate your digital growth? Choose how you want to connect:
                      </p>

                      <div className="pt-1 flex flex-col gap-2">
                        {/* Option 1: Free 24h Audit */}
                        <button
                          onClick={() => {
                            closePopup();
                            onOpenAudit();
                          }}
                          className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group/audit flex items-center justify-between"
                        >
                          <div>
                            <span className="block text-xs font-bold text-white group-hover/audit:text-[#FF5200] transition-colors">
                              Free 24hr Digital Audit
                            </span>
                            <span className="block text-[10px] text-gray-400">
                              Comprehensive speed, SEO & ad audit report
                            </span>
                          </div>
                          <Sparkles className="w-3.5 h-3.5 text-[#FF5200] shrink-0" />
                        </button>

                        {/* Option 2: Custom Proposal */}
                        <button
                          onClick={() => {
                            closePopup();
                            onOpenContact();
                          }}
                          className="w-full text-left p-2.5 rounded-lg bg-[#FF5200] hover:bg-[#E04600] text-white transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="block text-xs font-bold">
                              Request Custom Proposal
                            </span>
                            <span className="block text-[10px] text-orange-100">
                              Detailed deliverables & pricing scope
                            </span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 text-center text-[10px] text-gray-400">
                      ⚡ Guaranteed response within 2 hours
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
