import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerMarquee } from './components/PartnerMarquee';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FreeAuditModal } from './components/FreeAuditModal';
import { Footer } from './components/Footer';
import { RightSlideActionBar } from './components/RightSlideActionBar';
import { BottomNavBar } from './components/BottomNavBar';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledBudget, setPrefilledBudget] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyScope = (scope: { service: string; budget: string; details: string }) => {
    setPrefilledService(scope.service);
    setPrefilledBudget(scope.budget);
    setPrefilledMessage(scope.details);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-[#FF5200] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Partner Ecosystem Marquee: Google, Meta, Facebook, Instagram */}
        <PartnerMarquee />

        {/* Core Services: Website Development & Digital Marketing */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Scope & ROI Estimator */}
        <InteractiveEstimator onApplyScope={handleApplyScope} />

        {/* Selected Portfolio & Case Studies */}
        <PortfolioShowcase />

        {/* 4-Step Process Framework: CREATE • GROW • TRANSFORM */}
        <ProcessSection />

        {/* Client Reviews & FAQs */}
        <TestimonialsSection />

        {/* Direct Contact & Proposal Request */}
        <ContactSection
          initialService={prefilledService}
          initialBudget={prefilledBudget}
          initialMessage={prefilledMessage}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer />

      {/* Premium Right-Side Popup Slide Bar (Call, WhatsApp, Mail, Enquiry) */}
      <RightSlideActionBar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Premium Floating Bottom Navigation Dock */}
      <BottomNavBar />

      {/* 24-Hour Free Audit Request Modal */}
      <FreeAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
