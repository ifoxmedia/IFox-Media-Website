import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Layers, 
  Briefcase, 
  Calculator, 
  GitMerge, 
  Star, 
  Mail,
  ArrowUp
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home, href: '#' },
  { id: 'services', label: 'Services', icon: Layers, href: '#services' },
  { id: 'case-studies', label: 'Work', icon: Briefcase, href: '#case-studies' },
  { id: 'estimator', label: 'Estimator', icon: Calculator, href: '#estimator', badge: 'ROI' },
  { id: 'process', label: 'Process', icon: GitMerge, href: '#process' },
  { id: 'testimonials', label: 'Reviews', icon: Star, href: '#testimonials' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export const BottomNavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolledPastHero, setScrolledPastHero] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolledPastHero(scrollY > 300);

      // Determine active section based on scroll offset
      const sectionIds = ['contact', 'testimonials', 'process', 'estimator', 'case-studies', 'services'];
      const scrollMid = scrollY + window.innerHeight * 0.35;

      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollMid >= top) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (href === '#') {
      e.preventDefault();
      scrollToTop();
      setActiveSection('hero');
      return;
    }

    const targetEl = document.getElementById(id);
    if (targetEl) {
      e.preventDefault();
      const navOffset = 90;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div
      id="bottom-dock-container"
      className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-center items-center px-2 sm:px-4"
    >
      <div className="pointer-events-auto transition-all duration-300 transform hover:scale-[1.01] max-w-full">
        {/* Luxury Dock Capsule */}
        <nav
          aria-label="Bottom Quick Navigation Bar"
          className="relative flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-2 rounded-full bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-black/40 text-white select-none max-w-[calc(100vw-1rem)] overflow-x-auto no-scrollbar"
        >
          {/* Subtle Ambient Top Border Highlight */}
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5200]/40 to-transparent" />

          {/* Navigation Tabs */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                id={`bottom-nav-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                aria-label={item.label}
                className={`relative group flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 min-h-[36px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF5200] to-[#FF3D00] text-white shadow-md shadow-orange-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={item.label}
              >
                <Icon className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                
                {/* Responsive Label: Active expands label on mobile; on desktop (sm+) always show */}
                <span className={`text-[11px] sm:text-xs tracking-tight ${isActive ? 'font-bold inline' : 'font-medium hidden sm:inline'} whitespace-nowrap`}>
                  {item.label}
                </span>

                {/* Optional Mini Badge */}
                {item.badge && !isActive && (
                  <span className="hidden md:inline-block px-1 py-0.2 text-[9px] font-extrabold bg-[#FF5200]/20 text-[#FF5200] border border-[#FF5200]/30 rounded-full tracking-wider uppercase">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}

          {/* Quick Back to Top Action */}
          {scrolledPastHero && (
            <>
              <div className="w-px h-5 bg-white/15 mx-0.5 shrink-0" />
              <button
                id="bottom-nav-scroll-top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
