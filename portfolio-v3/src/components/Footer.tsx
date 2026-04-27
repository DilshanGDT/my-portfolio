import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks, footerInfo } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FigmaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.044 1.355-3.044 3.019s1.379 3.019 3.044 3.019 3.044-1.355 3.044-3.019-1.379-3.019-3.044-3.019zm7.68 7.509c-2.476 0-4.49-2.014-4.49-4.49v-4.49h4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm0-7.509h-3.019v3.019c0 1.665 1.355 3.019 3.019 3.019s3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const socialIconMap: Record<string, React.ReactNode> = {
  github: <GitHubIcon />,
  figma: <FigmaIcon />,
  discord: <DiscordIcon />,
};

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const bgFooter = isDark ? 'bg-[#282C33] border-[#ABB2BF]/20' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const hoverClass = isDark ? 'hover:text-white' : 'hover:text-black';
  const divider = isDark ? 'bg-[#ABB2BF]/20' : 'bg-gray-200';

  return (
    <footer className={`border-t ${bgFooter} transition-colors duration-300`}>
      {/* Main footer row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {/* Figma-like logo mark */}
              <span className="text-[#C778DD] text-lg">✦</span>
              <span className={`font-semibold text-sm ${textPrimary}`}>
                {personalInfo.handle}
              </span>
            </div>
            <p className={`text-xs ${textSecondary} ml-6`}>
              {footerInfo.email}
            </p>
            <p className={`text-xs ${textSecondary} ml-6`}>
              Web designer and front-end developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`${textSecondary} ${hoverClass} transition-colors duration-200`}
              >
                {socialIconMap[link.icon] ?? (
                  <span className="text-xs">{link.name}</span>
                )}
              </a>
            ))}
            {/* Always show GitHub, Figma, Discord in footer */}
            {!socialLinks.find((s) => s.icon === 'discord') && (
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className={`${textSecondary} ${hoverClass} transition-colors duration-200`}
              >
                <DiscordIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px ${divider} mx-6 lg:mx-16`} />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <p className={`text-xs text-center ${textSecondary}`}>
          {footerInfo.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
