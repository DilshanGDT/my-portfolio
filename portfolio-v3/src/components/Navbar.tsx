import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolioData';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/** Renders "#label" with # always in purple #C778DD */
const NavLabel: React.FC<{ label: string }> = ({ label }) => (
  <span>
    <span className="text-[#C778DD]">#</span>
    <span>{label.startsWith('#') ? label.slice(1) : label}</span>
  </span>
);

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sectionMap: Record<string, string> = {
    '#about-me': 'education-experience',
    '#skills': 'skills-technologies',
    '#my-work': 'projects',
    '#contacts': 'contact-me',
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['education-experience', 'skills-technologies', 'projects', 'contact-me'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionMap[href]);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const bgClass = isDark ? 'bg-[#282C33] border-[#ABB2BF]/20' : 'bg-white border-gray-200';
  const textClass = isDark ? 'text-[#ABB2BF]' : 'text-gray-600';
  const hoverClass = isDark ? 'hover:text-white' : 'hover:text-black';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${bgClass} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — place logo.png in /public/logo.png */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="DilshanGDT"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const fallback = img.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span
            className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black'} ${hoverClass} transition-colors duration-200`}
            style={{ display: 'none' }}
          >
            DilshanGDT
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === sectionMap[link.href];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive ? (isDark ? 'text-white' : 'text-black') : `${textClass} ${hoverClass}`}`}
                >
                  <NavLabel label={link.label} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className={`hidden md:flex items-center justify-center w-8 h-8 ${textClass} ${hoverClass} transition-colors duration-200`} aria-label="Toggle theme">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className={`flex items-center justify-center w-8 h-8 ${textClass} ${hoverClass} transition-colors duration-200`} aria-label="Toggle theme">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMobileOpen((v) => !v)} className={`${textClass} ${hoverClass} transition-colors duration-200`} aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t ${bgClass} px-6 py-4`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === sectionMap[link.href];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block text-sm font-medium transition-colors duration-200 ${isActive ? (isDark ? 'text-white' : 'text-black') : `${textClass} ${hoverClass}`}`}
                  >
                    <NavLabel label={link.label} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
