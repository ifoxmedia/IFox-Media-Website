import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { ProjectInquiry } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialBudget = '',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Website Development & Digital Marketing',
    budget: initialBudget || '₹40,000 - ₹80,000',
    timeline: 'Within 2 - 4 Weeks',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = encodeURIComponent(
      `Hello IFox Media! I would like to discuss a project:\n\n` +
      `👤 Name: ${formData.fullName || 'Prospective Client'}\n` +
      `📞 Phone: ${formData.phone || 'Not provided'}\n` +
      `✉️ Email: ${formData.email || 'Not provided'}\n` +
      `🏢 Company: ${formData.company || 'N/A'}\n` +
      `🚀 Service: ${formData.service}\n` +
      `💰 Budget: ${formData.budget}\n` +
      `📝 Details: ${formData.message || 'I would like to receive a proposal.'}`
    );
    return `https://wa.me/917972578726?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Your Growth Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                Let's Build Something Exceptional Together
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Whether you need a cutting-edge high-conversion website, aggressive SEO dominance, or profitable ad campaigns, our leadership team is ready to review your requirements.
              </p>

              {/* Direct Verified Contact Details Block */}
              <div className="mt-8 space-y-4">
                {/* Phone Link */}
                <a
                  id="contact-phone-card"
                  href={`tel:${AGENCY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200/90 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5200] shrink-0 group-hover:bg-[#FF5200] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Direct Call / Phone</span>
                    <div className="text-lg font-black text-gray-950 group-hover:text-[#FF5200] transition-colors">
                      {AGENCY_CONTACT.phoneDisplay}
                    </div>
                    <span className="text-[11px] text-emerald-600 font-medium">Click to call immediately</span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  id="contact-email-card"
                  href={`mailto:${AGENCY_CONTACT.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200/90 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5200] shrink-0 group-hover:bg-[#FF5200] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Official Inquiries</span>
                    <div className="text-base font-black text-gray-950 group-hover:text-[#FF5200] transition-colors break-all">
                      {AGENCY_CONTACT.email}
                    </div>
                    <span className="text-[11px] text-gray-500">Also reached via {AGENCY_CONTACT.backupEmail}</span>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a
                  id="contact-whatsapp-card"
                  href={AGENCY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">WhatsApp Instant Chat</span>
                    <div className="text-base font-black text-emerald-950">
                      +91 79725 78726
                    </div>
                    <span className="text-[11px] text-emerald-700">Typically replies within 15 minutes</span>
                  </div>
                </a>
              </div>
            </div>

            {/* SLA Commitments */}
            <div className="mt-8 p-5 bg-gray-100/70 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
              <div className="flex items-center gap-2 text-gray-900 font-bold">
                <Clock className="w-4 h-4 text-[#FF5200]" />
                <span>Working Hours: {AGENCY_CONTACT.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-[#FF5200]" />
                <span>Serving Clients Across India, UAE, UK & USA</span>
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold pt-1">
                ✓ Non-Disclosure Agreements (NDA) honored upon request.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Inquiry Received Successfully!</h3>
                  <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <strong className="text-gray-900">{formData.fullName || 'valued client'}</strong>. Our technical director will review your scope and contact you at <strong className="text-gray-900">{formData.email}</strong> within 2 hours.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={getWhatsAppPrefilledUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Send to WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-black text-gray-950">Request a Tailored Proposal</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out this quick brief or call us at <strong>{AGENCY_CONTACT.phoneDisplay}</strong>.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Your Name <span className="text-[#FF5200]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Work Email <span className="text-[#FF5200]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Phone Number <span className="text-[#FF5200]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 079725 78726"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Primary Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                      >
                        <option value="Website Development & Digital Marketing">Full Growth Suite (Web + Marketing)</option>
                        <option value="Website Development (Custom Next.js / React)">Custom Website Development</option>
                        <option value="E-Commerce Store (Shopify / Custom)">E-Commerce Platform Development</option>
                        <option value="High-Converting Landing Pages">High-Converting Landing Pages</option>
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Performance Paid Ads (Meta & Google Ads)">Performance Paid Ads (PPC)</option>
                        <option value="Social Media & Brand Growth">Social Media & Brand Growth</option>
                        <option value="Conversion Rate Optimization (CRO)">CRO & Analytics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                      >
                        <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000 (Starter / Funnel)</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000 (Standard Growth)</option>
                        <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 – ₹2,50,000 (Scale-Up / E-Com)</option>
                        <option value="₹2,50,000+">₹2,50,000+ (Enterprise Full-Stack)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Notes */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Tell Us About Your Project & Goals
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your current website link, specific challenges, target timeline, or what you want to achieve..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit and WhatsApp options */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      id="submit-proposal-button"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-[#FF5200] hover:bg-[#E04600] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      id="send-via-whatsapp-btn"
                      href={getWhatsAppPrefilledUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                      title="Send this inquiry directly to WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>

                  <div className="text-center pt-2 text-[11px] text-gray-500">
                    We respect your privacy. No spam. You will be connected directly with an IFox Media specialist.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
