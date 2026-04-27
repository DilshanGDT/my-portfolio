import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { skills, Skill, Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  skill: Skill | null;
  onClose: () => void;
  isDark: boolean;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ skill, onClose, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!skill) return null;
  
  const certs = skill.certificates;
  const cert: Certificate = certs[currentIndex];
  
  const bgCard = isDark ? 'bg-[#1E2228]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const imgBg = isDark ? 'bg-[#282C33]' : 'bg-gray-100';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={`relative z-10 w-full max-w-sm ${bgCard} border ${borderColor} shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Image */}
        <div className={`relative ${imgBg} h-48 flex items-center justify-center overflow-hidden`}>
          <img
            src={cert.imageUrl}
            alt={cert.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {/* Placeholder if image missing */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`w-16 h-16 rounded-full border-2 ${isDark ? 'border-[#ABB2BF]/30' : 'border-gray-300'} flex items-center justify-center mb-2`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={textSecondary}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <span className={`text-xs ${textSecondary}`}>Certificate Image</span>
          </div>

          {/* Cert counter if multiple */}
          {certs.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
              {currentIndex + 1} / {certs.length}
            </div>
          )}

          {/* Navigation arrows if multiple certs */}
          {certs.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((i) => (i - 1 + certs.length) % certs.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentIndex((i) => (i + 1) % certs.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-1">
            <h3 className={`font-semibold text-sm ${textPrimary} leading-snug flex-1 pr-2`}>
              {cert.title}
            </h3>
            <button
              onClick={onClose}
              className={`${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors shrink-0`}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-[#C778DD] mb-1">{cert.issuer}</p>
          <p className={`text-xs ${textSecondary} mb-3`}>{cert.date}</p>

          <div className={`w-full h-px ${isDark ? 'bg-[#ABB2BF]/20' : 'bg-gray-200'} mb-3`} />

          <p className={`text-xs leading-relaxed ${textSecondary}`}>{cert.description}</p>

          {/* Dot indicators for multiple certs */}
          {certs.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-4">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-[#C778DD]' : isDark ? 'bg-[#ABB2BF]/40' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillTag: React.FC<{
  skill: Skill;
  isDark: boolean;
  onClick: (skill: Skill) => void;
}> = ({ skill, isDark, onClick }) => {
  const tagBase = isDark
    ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:border-[#C778DD] hover:text-[#C778DD] hover:bg-[#C778DD]/5'
    : 'border-gray-300 text-gray-500 hover:border-[#C778DD] hover:text-[#C778DD] hover:bg-[#C778DD]/5';

  return (
    <button
      onClick={() => onClick(skill)}
      className={`px-3 py-1 text-xs border cursor-pointer transition-all duration-200 ${tagBase} font-mono`}
    >
      {skill.name}
    </button>
  );
};

const SkillsRow: React.FC<{
  category: string;
  categorySkills: Skill[];
  isDark: boolean;
  onSkillClick: (skill: Skill) => void;
}> = ({ category, categorySkills, isDark, onSkillClick }) => {
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`border ${borderColor} flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4`}>
      <span className={`text-sm font-medium ${textPrimary} w-60 shrink-0`}>{category}</span>
      <div className={`w-px h-8 ${isDark ? 'bg-[#ABB2BF]/20' : 'bg-gray-200'} hidden sm:block`} />
      <div className="flex flex-wrap gap-2">
        {categorySkills.map((skill) => (
          <SkillTag key={skill.id} skill={skill} isDark={isDark} onClick={onSkillClick} />
        ))}
      </div>
    </div>
  );
};

const SkillsTechnologies: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';

  const categories = ['Frontend', 'Backend', 'AI'];

  return (
    <section
      id="skills-technologies"
      className={`${bgSection} py-20 px-6 lg:px-16 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className={`font-semibold text-xl ${textPrimary}`}>
            <span className="text-[#C778DD]">#</span>skills &amp; technologies
          </h2>
          <div className="flex-1 h-px bg-[#C778DD] max-w-xs" />
        </div>

        {/* Skill Rows */}
        <div className="flex flex-col gap-3">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <SkillsRow
                key={cat}
                category={cat}
                categorySkills={catSkills}
                isDark={isDark}
                onSkillClick={setSelectedSkill}
              />
            );
          })}
        </div>

        <p className={`text-xs mt-4 ${isDark ? 'text-[#ABB2BF]' : 'text-gray-400'}`}>
          * Click any skill tag to view certifications
        </p>
      </div>

      {/* Certificate Modal */}
      {selectedSkill && (
        <CertificateModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
          isDark={isDark}
        />
      )}
    </section>
  );
};

export default SkillsTechnologies;
