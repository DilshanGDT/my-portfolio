import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const DribbbleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.048 6.411 1.73 1.35 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.01-.817zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.5 0-.99.044-1.47.126zm10.012 3.658c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.217.537 3.388-.43 6.767.258 7.08.345-.07-2.256-.768-4.354-1.95-6.08z" />
  </svg>
);
const FigmaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.044 1.355-3.044 3.019s1.379 3.019 3.044 3.019 3.044-1.355 3.044-3.019-1.379-3.019-3.044-3.019zm7.68 7.509c-2.476 0-4.49-2.014-4.49-4.49v-4.49h4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm0-7.509h-3.019v3.019c0 1.665 1.355 3.019 3.019 3.019s3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const socialIconMap: Record<string, React.ReactNode> = {
  github: <GitHubIcon />,
  dribbble: <DribbbleIcon />,
  figma: <FigmaIcon />,
};

/* ── Decorative SVG shapes used throughout the hero ── */

/** Dot grid pattern */
const DotGrid: React.FC<{ className?: string; cols?: number; rows?: number }> = ({
  className = '', cols = 5, rows = 5,
}) => (
  <svg
    className={className}
    viewBox={`0 0 ${cols * 12} ${rows * 12}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {Array.from({ length: rows }).map((_, r) =>
      Array.from({ length: cols }).map((_, c) => (
        <circle key={`${r}-${c}`} cx={c * 12 + 6} cy={r * 12 + 6} r="1.5" fill="currentColor" />
      ))
    )}
  </svg>
);

/** Two overlapping rectangles (outline only) */
const DoubleRect: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="2" y="2" width="70" height="70" stroke="currentColor" strokeWidth="2" />
    <rect x="48" y="48" width="70" height="70" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/30' : 'border-[#ABB2BF]/40';
  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const decoColor = isDark ? 'text-[#ABB2BF]/25' : 'text-[#ABB2BF]/40';

  return (
    <section id="hero" className={`min-h-screen ${bgSection} flex flex-col transition-colors duration-300 relative overflow-hidden`}>

      {/* ── Fixed left panel: vertical line + social icons ── */}
      <div className="fixed left-6 top-0 z-40 hidden md:flex flex-col items-center">
        {/* Line from navbar bottom down to first icon */}
        <div className="w-px bg-[#ABB2BF] flex-shrink-0" style={{ height: '220px' }} />
        {/* Social icons */}
        <div className="flex flex-col gap-5 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors duration-200`}
            >
              {socialIconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Hero Content ── */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:pl-24 lg:pr-16 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <h1 className={`font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 ${textPrimary}`}>
              {personalInfo.name} is a{' '}
              <span className="text-[#C778DD]">Full-Stack</span>
              <br />
              <span className="text-[#C778DD]">Web Developer</span>
            </h1>
            <p className={`text-sm ${textSecondary} mb-8 max-w-sm leading-relaxed`}>
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* Contact Me — filled C778DD */}
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#C778DD] border border-[#C778DD] ${isDark ? 'text-white' : 'text-black'} hover:bg-[#b560c4] hover:border-[#b560c4] transition-colors duration-200`}
              >
                Contact me <span>→</span>
              </a>

              {/* My Resume — outline with download icon */}
              <a
                href={personalInfo.resumeUrl}
                download
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border ${borderColor} ${
                  isDark ? 'text-white hover:border-white/60' : 'text-black hover:border-black/60'
                } transition-colors duration-200`}
              >
                My Resume <DownloadIcon />
              </a>
            </div>

            {/* Quote — italic */}
            <p className={`text-base font-medium italic ${textPrimary}`}>
              {personalInfo.quote}
            </p>
          </div>

          {/* Right — image + decorative shapes */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">

            {/* Double overlapping rect decoration (top-left of image area) */}
            <DoubleRect className={`absolute -left-4 top-4 w-28 h-28 ${decoColor} hidden lg:block`} />

            {/* Outer border rectangle */}
            <div className={`absolute top-3 right-0 w-52 h-68 border ${borderColor} hidden lg:block`}
              style={{ height: '272px', width: '208px' }}
            />

            {/* Developer image */}
            <div className="relative z-10">
              <div
                className={`w-56 h-72 sm:w-64 sm:h-80 lg:w-64 lg:h-80 ${isDark ? 'bg-[#ABB2BF]/10' : 'bg-gray-100'} flex items-center justify-center overflow-hidden relative`}
              >
                <img
                  src="/profile.png"
                  alt="Dilshan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className={`text-xs ${textSecondary} font-mono`}>profile.png</span>
                </div>
              </div>

              {/* Currently working tag */}
              <div
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 text-xs whitespace-nowrap ${
                  isDark ? 'bg-[#282C33] border border-[#ABB2BF]/30' : 'bg-white border border-gray-200 shadow-md'
                }`}
              >
                <span className="w-2 h-2 rounded-sm bg-[#C778DD] inline-block" />
                <span className={textSecondary}>Currently working on</span>
                <span className={`font-semibold ${textPrimary}`}>{personalInfo.currentlyWorking}</span>
              </div>
            </div>

            {/* Dot grid bottom-right of image */}
            <DotGrid
              cols={6} rows={5}
              className={`absolute -bottom-4 right-0 w-20 h-16 ${decoColor}`}
            />
          </div>
        </div>
      </div>

      {/* ── Background corner decorative elements ── */}

      {/* Top-right corner square outline */}
      <div
        className={`absolute top-20 right-4 w-20 h-20 border-2 ${isDark ? 'border-[#ABB2BF]/15' : 'border-[#ABB2BF]/25'} hidden lg:block`}
      />
      {/* Mid-right square outline */}
      <div
        className={`absolute top-3/4 -right-10 w-28 h-24 border-2 ${isDark ? 'border-[#ABB2BF]/10' : 'border-[#ABB2BF]/20'} hidden lg:block`}
      />
      {/* Bottom-left corner square */}
      <div
        className={`absolute bottom-8 -left-3 w-20 h-20 border-2 ${isDark ? 'border-[#ABB2BF]/15' : 'border-[#ABB2BF]/25'} hidden lg:block`}
      />
    </section>
  );
};

export default Hero;
