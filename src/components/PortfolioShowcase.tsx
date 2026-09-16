import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Filter } from 'lucide-react';

export const PortfolioShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'development' | 'marketing' | 'both'>('all');

  const filteredCases = CASE_STUDIES.filter((c) => {
    if (filter === 'all') return true;
    if (filter === 'both') return c.category === 'both';
    return c.category === filter || c.category === 'both';
  });

  return (
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Selected Client Case Studies
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-xl">
              We measure our craft by business metrics: revenue multiplied, page load times collapsed, and conversion funnels streamlined.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                filter === 'all' ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('development')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                filter === 'development' ? 'bg-[#FF5200] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                filter === 'marketing' ? 'bg-[#FF5200] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Marketing
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="group bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-200/90 overflow-hidden hover:shadow-xl hover:border-orange-300/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner with Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {study.industry}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-orange-400 font-semibold">{study.client}</span>
                    <h3 className="text-xl font-black text-white leading-snug mt-0.5">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  {/* Problem & Solution */}
                  <div className="space-y-2.5 text-xs leading-relaxed text-gray-600">
                    <p>
                      <strong className="text-gray-900 font-bold">Challenge:</strong> {study.problem}
                    </p>
                    <p>
                      <strong className="text-gray-900 font-bold">IFox Strategy:</strong> {study.solution}
                    </p>
                  </div>

                  {/* Metrics Banner */}
                  <div className="mt-6 grid grid-cols-3 gap-2 bg-white p-3.5 rounded-xl border border-gray-100 shadow-xs text-center">
                    {study.results.map((res, i) => (
                      <div key={i} className="px-1">
                        <div className="text-lg sm:text-xl font-black text-[#FF5200] leading-none">
                          {res.value}
                        </div>
                        <div className="text-[10px] text-gray-500 mt-1 line-clamp-1 font-medium">
                          {res.label}
                        </div>
                        <div className="text-[9px] font-bold text-emerald-600 mt-0.5">
                          {res.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-200/60 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
