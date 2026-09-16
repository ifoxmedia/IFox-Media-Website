import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-gray-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The IFox Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            How We Create, Grow & Transform Brands
          </h2>
          <p className="mt-3 text-base text-gray-600">
            A battle-tested 4-step framework ensuring zero wasted ad spend, zero development stalls, and measurable commercial velocity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Timeline */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FF5200] to-orange-400">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-[#FF5200]" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Details Checklist */}
                <div className="space-y-2 pt-3 border-t border-gray-100">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF5200] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag indicator at bottom */}
              <div className="mt-6 pt-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Phase {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
