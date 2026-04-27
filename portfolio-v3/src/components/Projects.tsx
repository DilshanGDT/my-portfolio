import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects, Project } from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIconSm = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ── Project Detail Modal ── */
const ProjectModal: React.FC<{ project: Project | null; onClose: () => void; isDark: boolean }> = ({ project, onClose, isDark }) => {
  if (!project) return null;
  const bgCard = isDark ? 'bg-[#1E2228]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const tagColor = isDark ? 'text-[#ABB2BF]' : 'text-gray-500';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className={`relative z-10 w-full max-w-lg ${bgCard} border ${borderColor} p-6 shadow-2xl`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`font-semibold text-base ${textPrimary} mb-1`}>{project.title}</h3>
            <p className={`text-xs ${tagColor} font-mono`}>{project.tags.join(' · ')}</p>
          </div>
          <button onClick={onClose} className={`ml-4 p-1 ${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors`} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className={`w-full h-px ${isDark ? 'bg-[#ABB2BF]/20' : 'bg-gray-200'} mb-4`} />

        {/* Image thumbnail */}
        <div className={`w-full h-40 ${isDark ? 'bg-[#282C33]' : 'bg-gray-100'} mb-4 flex items-center justify-center overflow-hidden`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span className={`text-xs ${textSecondary} font-mono`}>project-image.png</span>
        </div>

        <p className={`text-sm leading-relaxed ${textSecondary} mb-5`}>{project.longDescription || project.description}</p>

        {/* Action links */}
        <div className="flex gap-3 flex-wrap">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${isDark ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:text-white hover:border-white/50' : 'border-gray-300 text-gray-500 hover:text-black hover:border-black/50'}`}>
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${isDark ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:text-white hover:border-white/50' : 'border-gray-300 text-gray-500 hover:text-black hover:border-black/50'}`}>
              <GitHubIconSm /> Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const cardBg = isDark ? 'bg-[#2D3139]' : 'bg-gray-50';
  const tagColor = isDark ? 'text-[#ABB2BF]' : 'text-gray-500';
  const btnBase = isDark
    ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:border-white/50 hover:text-white'
    : 'border-gray-300 text-gray-500 hover:border-black/50 hover:text-black';
  const imgBg = isDark ? 'bg-[#1E2228]' : 'bg-gray-200';

  return (
    <section id="projects" className={`${bgSection} py-20 px-6 lg:px-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className={`font-semibold text-xl ${textPrimary}`}>
              <span className="text-[#C778DD]">#</span>projects
            </h2>
            <div className="h-px bg-[#C778DD] w-32 sm:w-64" />
          </div>
          <button className={`text-sm ${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors flex items-center gap-1`}>
            View all <span>→</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className={`border ${borderColor} ${cardBg} overflow-hidden flex flex-col group transition-colors duration-300`}>

              {/* Project Image */}
              <div className={`relative h-44 ${imgBg} overflow-hidden flex items-center justify-center`}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className={`text-xs ${textSecondary} font-mono`}>project-image.png</span>
                </div>
                {/* Dot pattern overlay */}
                <div className={`absolute bottom-2 right-2 w-12 h-12 dot-pattern ${isDark ? 'text-[#ABB2BF]/20' : 'text-gray-400/20'}`} />
              </div>

              {/* Tags */}
              <div className={`border-t ${borderColor} px-4 py-2`}>
                <p className={`text-xs ${tagColor} font-mono`}>{project.tags.join(' ')}</p>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className={`font-semibold text-sm ${textPrimary}`}>{project.title}</h3>
                <p className={`text-xs ${textSecondary} leading-relaxed`}>{project.description}</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto pt-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${btnBase}`}>
                      <ExternalLinkIcon /> Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${btnBase}`}>
                      <GitHubIconSm /> Repo
                    </a>
                  )}
                  {/* Read More button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${btnBase}`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative dot grid */}
        <div className="flex justify-end mt-8">
          <svg className={`w-20 h-16 ${isDark ? 'text-[#ABB2BF]/20' : 'text-[#ABB2BF]/30'}`} viewBox="0 0 60 48">
            {Array.from({ length: 4 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 12 + 6} cy={r * 12 + 6} r="1.5" fill="currentColor" />
              ))
            )}
          </svg>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} />
    </section>
  );
};

export default Projects;
