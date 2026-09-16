import React, { useState } from 'react';
import { 
  Code2, 
  TrendingUp, 
  ShoppingBag, 
  Layout, 
  ShieldCheck, 
  Search, 
  Share2, 
  BarChart3, 
  Check, 
  ArrowRight, 
  Sparkles,
  Layers,
  Zap,
  Globe2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'marketing'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF5200] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Digital Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
            Our Two Core Service Powerhouses
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            From modern web engineering that converts casual visitors into customers, to aggressive performance marketing campaigns that scale your sales pipeline.
          </p>

          {/* Interactive Filter Pills - Mobile Responsive */}
          <div className="mt-6 sm:mt-8 inline-flex items-center justify-center p-1 sm:p-1.5 bg-gray-100/95 rounded-2xl border border-gray-200/80 max-w-full overflow-x-auto no-scrollbar gap-1 shadow-sm">
            <button
              id="filter-all-services"
              onClick={() => setActiveTab('all')}
              className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all shrink-0 flex items-center justify-center gap-1.5 min-h-[38px] ${
                activeTab === 'all'
                  ? 'bg-white text-gray-950 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>All</span>
              <span className="hidden sm:inline">Capabilities</span>
              <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full bg-gray-200/80 text-gray-700 font-semibold">
                {SERVICES_DATA.length}
              </span>
            </button>
            <button
              id="filter-web-dev"
              onClick={() => setActiveTab('development')}
              className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shrink-0 min-h-[38px] ${
                activeTab === 'development'
                  ? 'bg-[#FF5200] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code2 className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Web Dev</span>
              <span className="hidden sm:inline">Website Development</span>
            </button>
            <button
              id="filter-digital-marketing"
              onClick={() => setActiveTab('marketing')}
              className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shrink-0 min-h-[38px] ${
                activeTab === 'marketing'
                  ? 'bg-[#FF5200] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Marketing</span>
              <span className="hidden sm:inline">Digital Marketing</span>
            </button>
          </div>
        </div>

        {/* Anchor point for direct development deep link */}
        <div id="services-development" className="pt-4" />
        <div id="services-marketing" className="pt-4" />

        {/* Services Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const isDev = service.category === 'development';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-8 hover:border-orange-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 ${
                        isDev
                          ? 'bg-orange-50 text-[#FF5200] border border-orange-200/60'
                          : 'bg-blue-50 text-blue-600 border border-blue-200/60'
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>
                    <span
                      className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full ${
                        isDev
                          ? 'bg-orange-100/80 text-[#FF5200]'
                          : 'bg-blue-100/80 text-blue-700'
                      }`}
                    >
                      {isDev ? 'Website Dev' : 'Digital Marketing'}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-[#FF5200] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-4 sm:mt-5 space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-[#FF5200] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Measurable Benchmark Banner */}
                  <div className="mt-5 sm:mt-6 p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs gap-2">
                    <span className="text-gray-500 font-medium shrink-0">Target Benchmark:</span>
                    <span className="font-extrabold text-[#FF5200] text-right">{service.metrics}</span>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-100 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-gray-700 hover:text-[#FF5200] flex items-center justify-center gap-1 py-1.5 transition-colors"
                  >
                    <span>View Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2.5 sm:py-2 text-xs font-bold text-white bg-gray-900 hover:bg-[#FF5200] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Selected Service */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF5200] flex items-center justify-center font-bold">
                  {getIcon(selectedServiceModal.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5200]">
                    {selectedServiceModal.category === 'development' ? 'Website Development' : 'Digital Marketing'}
                  </span>
                  <h3 className="text-2xl font-black text-gray-950">{selectedServiceModal.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3">
                Official Deliverables Included:
              </h4>
              <div className="space-y-2">
                {selectedServiceModal.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <Check className="w-4 h-4 text-[#FF5200] shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-orange-50/70 border border-orange-200">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-700">Estimated Performance Benchmark:</span>
                <span className="text-[#FF5200]">{selectedServiceModal.metrics}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onSelectService(serviceName);
                }}
                className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#FF5200] hover:bg-[#E04600] rounded-xl shadow-md transition-all"
              >
                Get Quote For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
