import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Layers, Zap, TrendingUp, HelpCircle } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface InteractiveEstimatorProps {
  onApplyScope: (scopeSummary: { service: string; budget: string; details: string }) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({ onApplyScope }) => {
  const [pillar, setPillar] = useState<'both' | 'development' | 'marketing'>('both');
  const [devTier, setDevTier] = useState<'landing' | 'business' | 'ecommerce' | 'custom'>('business');
  const [marketingTier, setMarketingTier] = useState<'seo' | 'ppc' | 'fullFunnel'>('fullFunnel');
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'thorough'>('standard');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Dynamic estimate calculations
  const calculateEstimates = () => {
    let baseInr = 0;
    let expectedRoi = '3.5x - 5.5x';
    let timelineWeeks = '3 - 4 Weeks';

    // Development component
    if (pillar === 'development' || pillar === 'both') {
      if (devTier === 'landing') baseInr += 25000;
      else if (devTier === 'business') baseInr += 45000;
      else if (devTier === 'ecommerce') baseInr += 75000;
      else if (devTier === 'custom') baseInr += 120000;
    }

    // Marketing component
    if (pillar === 'marketing' || pillar === 'both') {
      if (marketingTier === 'seo') baseInr += 30000;
      else if (marketingTier === 'ppc') baseInr += 40000;
      else if (marketingTier === 'fullFunnel') baseInr += 70000;
    }

    if (pillar === 'both') {
      // 15% combined bundle benefit
      baseInr = Math.round(baseInr * 0.85);
      expectedRoi = '4.5x - 7.0x';
    }

    if (timeline === 'rush') {
      baseInr = Math.round(baseInr * 1.15);
      timelineWeeks = '7 - 10 Days';
    } else if (timeline === 'thorough') {
      timelineWeeks = '5 - 6 Weeks';
    }

    const inrFormatted = `₹${baseInr.toLocaleString('en-IN')}`;
    const usdFormatted = `$${Math.round(baseInr / 85).toLocaleString('en-US')}`;

    return {
      investment: currency === 'INR' ? inrFormatted : usdFormatted,
      roi: expectedRoi,
      timelineWeeks,
      baseInr,
    };
  };

  const estimates = calculateEstimates();

  const handleLockIn = () => {
    let serviceLabel = '';
    if (pillar === 'both') serviceLabel = 'Full Growth Suite (Web Dev + Digital Marketing)';
    else if (pillar === 'development') serviceLabel = `Website Development (${devTier.toUpperCase()})`;
    else serviceLabel = `Digital Marketing (${marketingTier.toUpperCase()})`;

    const details = `Scope: ${serviceLabel} | Timeline: ${estimates.timelineWeeks} | Target ROI: ${estimates.roi}`;

    onApplyScope({
      service: serviceLabel,
      budget: estimates.investment,
      details,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Configure your deliverables to receive transparent budget brackets, execution milestones, and projected returns before booking your strategy call.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left / Configurator (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
            {/* Step 1: Select Primary Domain */}
            <div className="mb-8">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3">
                1. Select Strategic Domain
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { key: 'both', label: 'Full Growth Suite', sub: 'Dev + Marketing', badge: 'Best Value' },
                  { key: 'development', label: 'Website Dev Only', sub: 'Custom Web / Store', badge: null },
                  { key: 'marketing', label: 'Digital Marketing', sub: 'SEO + Ads Growth', badge: null },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setPillar(opt.key as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      pillar === opt.key
                        ? 'border-[#FF5200] bg-orange-50/50 shadow-sm ring-1 ring-[#FF5200]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {opt.badge && (
                      <span className="absolute -top-2 right-2 text-[9px] font-extrabold bg-[#FF5200] text-white px-1.5 py-0.5 rounded-full uppercase">
                        {opt.badge}
                      </span>
                    )}
                    <div className="text-xs font-bold text-gray-900">{opt.label}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Web Dev Tier (if dev selected) */}
            {(pillar === 'development' || pillar === 'both') && (
              <div className="mb-8 animate-in fade-in duration-200">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3">
                  2. Web Development Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'landing', title: 'Landing Funnel', time: '1 Week' },
                    { id: 'business', title: 'Corporate Portal', time: '2-3 Weeks' },
                    { id: 'ecommerce', title: 'E-Commerce Store', time: '3-4 Weeks' },
                    { id: 'custom', title: 'Custom Web App', time: '4-6 Weeks' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setDevTier(t.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        devTier === t.id
                          ? 'border-[#FF5200] bg-orange-50 text-[#FF5200] font-bold'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-xs">{t.title}</div>
                      <div className="text-[10px] text-gray-400 mt-1">{t.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Marketing Tier (if marketing selected) */}
            {(pillar === 'marketing' || pillar === 'both') && (
              <div className="mb-8 animate-in fade-in duration-200">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3">
                  {pillar === 'both' ? '3.' : '2.'} Marketing Strategy Focus
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'seo', name: 'SEO & Organic Growth', tag: 'Google Rank #1' },
                    { id: 'ppc', name: 'Paid Ads (Meta & Google)', tag: 'Instant Traffic' },
                    { id: 'fullFunnel', name: 'Omnichannel Funnel', tag: 'Ads + SEO + Retarget' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMarketingTier(m.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        marketingTier === m.id
                          ? 'border-[#FF5200] bg-orange-50 text-[#FF5200] font-bold'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-xs">{m.name}</div>
                      <div className="text-[10px] text-gray-500 mt-1">{m.tag}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Timeline Urgency */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3">
                Execution Velocity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'rush', label: 'Priority Sprint', note: 'Fast-Track Team' },
                  { id: 'standard', label: 'Standard Delivery', note: 'Recommended' },
                  { id: 'thorough', label: 'Phased Deployment', note: 'Deep Enterprise' },
                ].map((vel) => (
                  <button
                    key={vel.id}
                    type="button"
                    onClick={() => setTimeline(vel.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      timeline === vel.id
                        ? 'border-[#FF5200] bg-orange-50 text-[#FF5200] font-bold'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-xs">{vel.label}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{vel.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right / Live Projection Output (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F131A] text-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Currency Selector */}
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  ESTIMATED PROJECTION
                </span>
                <div className="inline-flex bg-white/10 p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-2 py-0.5 rounded font-bold ${currency === 'INR' ? 'bg-[#FF5200] text-white' : 'text-gray-300'}`}
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-0.5 rounded font-bold ${currency === 'USD' ? 'bg-[#FF5200] text-white' : 'text-gray-300'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="mt-6">
                <span className="text-xs text-gray-400">Estimated Investment Starting From:</span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                  {estimates.investment}
                </div>
                <div className="text-[11px] text-gray-400 mt-1">
                  *Transparent milestone pricing, no hidden agency surprises.
                </div>
              </div>

              {/* Metric Highlights */}
              <div className="mt-6 space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-300 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Target ROI Multiple:
                  </span>
                  <span className="text-sm font-black text-emerald-400">{estimates.roi}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-300 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#FF5200]" />
                    Estimated Launch Timeline:
                  </span>
                  <span className="text-sm font-black text-white">{estimates.timelineWeeks}</span>
                </div>
              </div>

              {/* Scope Checklist Included */}
              <div className="mt-6">
                <div className="text-[11px] uppercase font-bold text-gray-400 mb-2">
                  Guaranteed Deliverables:
                </div>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5200]" />
                    <span>Dedicated Technical Project Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5200]" />
                    <span>Mobile-First Responsive Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5200]" />
                    <span>Real-Time GA4 & ROI Analytics Dashboard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock In Scope Action */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                id="estimator-lockin-btn"
                onClick={handleLockIn}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#FF5200] hover:bg-[#E04600] rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <span>Apply This Scope To Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-gray-400">
                  Or call directly for custom enterprise quoting:{' '}
                  <a href={`tel:${AGENCY_CONTACT.phoneRaw}`} className="text-[#FF5200] font-bold hover:underline">
                    {AGENCY_CONTACT.phoneDisplay}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
