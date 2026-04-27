import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { experiences, Experience } from '../data/portfolioData';

/* ── Modal ── */
const ExperienceModal: React.FC<{ experience: Experience | null; onClose: () => void; isDark: boolean }> = ({ experience, onClose, isDark }) => {
  if (!experience) return null;
  const bgCard = isDark ? 'bg-[#1E2228]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className={`relative z-10 w-full max-w-lg ${bgCard} border ${borderColor} p-6 shadow-2xl`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`font-semibold text-base ${textPrimary} mb-1`}>{experience.title}</h3>
            <p className={`text-sm ${textSecondary}`}>{experience.company} &nbsp;·&nbsp; {experience.type}</p>
            <p className="text-sm text-[#C778DD] mt-1">{experience.period}</p>
          </div>
          <button onClick={onClose} className={`ml-4 p-1 ${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors`} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className={`w-full h-px ${isDark ? 'bg-[#ABB2BF]/20' : 'bg-gray-200'} mb-4`} />
        <p className={`text-sm leading-relaxed ${textSecondary}`}>{experience.description}</p>
      </div>
    </div>
  );
};

/* ── Experience Card ── */
const ExperienceCard: React.FC<{ exp: Experience; isDark: boolean; onReadMore: (exp: Experience) => void }> = ({ exp, isDark, onReadMore }) => {
  const bg = isDark ? 'bg-[#2D3139] border-[#ABB2BF]/20' : 'bg-gray-50 border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const btnBorder = isDark
    ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:text-white hover:border-white/50'
    : 'border-gray-300 text-gray-500 hover:text-black hover:border-black/50';
  return (
    <div className={`border ${bg} p-4 flex flex-col gap-2`} style={{ minHeight: '160px' }}>
      <h4 className={`font-semibold text-sm ${textPrimary} leading-snug`}>{exp.title}</h4>
      <p className={`text-xs ${textSecondary}`}>{exp.company} · {exp.type}</p>
      <p className="text-xs text-[#C778DD]">{exp.period}</p>
      <div className="mt-auto pt-3">
        <button onClick={() => onReadMore(exp)} className={`text-xs border px-3 py-1.5 font-medium transition-colors duration-200 ${btnBorder}`}>
          Read More
        </button>
      </div>
    </div>
  );
};

/* ── Zigzag Timeline Row (desktop) ── */
// Renders a row of 3 cards connected by a horizontal line with nodes above each card.
// "direction" controls which side the vertical connector drops from ('right' = right side goes down).
const ZigzagRow: React.FC<{
  exps: Experience[];
  isDark: boolean;
  onReadMore: (exp: Experience) => void;
  direction: 'ltr' | 'rtl'; // ltr = left-to-right read order, connector drops on right; rtl drops on left
  isFirst: boolean;
  isLast: boolean;
}> = ({ exps, isDark, onReadMore, direction, isFirst, isLast }) => {
  const lineColor = isDark ? '#ABB2BF' : '#9ca3af';
  const nodeBg = isDark ? '#ABB2BF' : '#9ca3af';
  const nodeBorder = isDark ? '#282C33' : '#ffffff';

  return (
    <div className="relative w-full">
      {/* SVG for the timeline lines */}
      <svg
        className="absolute top-0 left-0 w-full overflow-visible pointer-events-none"
        style={{ height: '28px' }}
        preserveAspectRatio="none"
      >
        {/* Horizontal line across */}
        <line x1="0" y1="16" x2="100%" y2="16" stroke={lineColor} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

        {/* Left incoming vertical connector (only if not first row) */}
        {!isFirst && direction === 'rtl' && (
          <line x1="100%" y1="0" x2="100%" y2="" stroke={lineColor} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        )}
        {!isFirst && direction === 'ltr' && (
          <line x1="0" y1="0" x2="0" y2="" stroke={lineColor} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        )}
      </svg>

      {/* Nodes rendered as absolutely positioned divs */}
      <div className="relative w-full flex justify-between px-[16.5%]" style={{ height: '28px' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ width: '16px', marginTop: '6px' }}
          >
            <div
              className="rounded-full z-10"
              style={{
                width: '16px', height: '16px',
                backgroundColor: nodeBg,
                border: `3px solid ${nodeBorder}`,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 mt-1 ml-4 mr-4">
        {exps.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} isDark={isDark} onReadMore={onReadMore} />
        ))}
      </div>

      {/* Right/left vertical drop connector to next row */}
      {!isLast && (
        <div
          className="absolute"
          style={{
            right: direction === 'ltr' ? 0 : 'auto',
            left: direction === 'rtl' ? 0 : 'auto',
            top: '16px',
            bottom: '-72px',
            width: '1.5px',
            backgroundColor: lineColor,
          }}
        />
      )}
    </div>
  );
};

/* ── Mobile vertical timeline ── */
const MobileTimeline: React.FC<{
  exps: Experience[];
  isDark: boolean;
  onReadMore: (exp: Experience) => void;
}> = ({ exps, isDark, onReadMore }) => {
  const lineColor = isDark ? '#ABB2BF' : '#9ca3af';
  const nodeBg = isDark ? '#ABB2BF' : '#9ca3af';
  const nodeBorder = isDark ? '#282C33' : '#ffffff';

  return (
    <div className="relative pl-8">
      {/* Vertical spine */}
      <div
        className="absolute left-2.5 top-0 bottom-0 w-px"
        style={{ backgroundColor: lineColor }}
      />
      <div className="flex flex-col gap-6">
        {exps.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Node */}
            <div
              className="absolute -left-7 top-4 rounded-full z-10"
              style={{
                width: '14px', height: '14px',
                backgroundColor: nodeBg,
                border: `3px solid ${nodeBorder}`,
              }}
            />
            <ExperienceCard exp={exp} isDark={isDark} onReadMore={onReadMore} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Main Section ── */
const EducationExperience: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [showAll, setShowAll] = useState(false);

  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const hoverText = isDark ? 'hover:text-white' : 'hover:text-black';

  // Always show 2 rows (6 entries). More rows appear when "View all" clicked.
  const ROWS_PER_PAGE = 2;
  const COLS = 3;
  const visibleCount = showAll ? experiences.length : ROWS_PER_PAGE * COLS;
  const visibleExps = experiences.slice(0, visibleCount);

  // Split into rows of 3
  const rows: Experience[][] = [];
  for (let i = 0; i < visibleExps.length; i += COLS) {
    const row = visibleExps.slice(i, i + COLS);
    rows.push(row);
  }
  return (
    <section id="education-experience" className={`${bgSection} py-20 px-6 lg:px-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className={`font-semibold text-xl ${textPrimary} whitespace-nowrap`}>
            <span className="text-[#C778DD]">#</span>education &amp; experience
          </h2>
          <div className="flex-1 h-px bg-[#C778DD] max-w-xs" />
        </div>

        {/* ── Desktop Zigzag Timeline ── */}
        <div className="hidden md:block relative" style={{ paddingBottom: '28px' }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="relative" style={{ marginBottom: rowIdx < rows.length - 1 ? '56px' : '0' }}>
              <ZigzagRow
                exps={row}
                isDark={isDark}
                onReadMore={setSelectedExp}
                direction={rowIdx % 2 === 0 ? 'ltr' : 'rtl'}
                isFirst={rowIdx === 0}
                isLast={rowIdx === rows.length - 1}
              />
            </div>
          ))}
        </div>

        {/* ── Mobile Vertical Timeline ── */}
        <div className="md:hidden">
          <MobileTimeline exps={visibleExps} isDark={isDark} onReadMore={setSelectedExp} />
        </div>

        {/* View all / View less */}
        <div className="flex items-center gap-2 mt-8">
          {/* <span className="text-[#C778DD]">→</span> */}
          <button
            onClick={() => setShowAll((v) => !v)}
            className={`flex items-center gap-1 text-sm ${textSecondary} ${hoverText} transition-colors duration-200`}
          >
            {showAll ? 'View less' : 'View all'} <span>⟶</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ExperienceModal experience={selectedExp} onClose={() => setSelectedExp(null)} isDark={isDark} />
    </section>
  );
};

export default EducationExperience;
