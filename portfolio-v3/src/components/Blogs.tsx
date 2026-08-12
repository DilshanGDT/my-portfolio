import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { blogs, mediumProfileUrl, Blog } from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const BlogCard: React.FC<{ blog: Blog; isDark: boolean }> = ({ blog, isDark }) => {
  const borderColor = isDark ? 'border-[#ABB2BF]/20' : 'border-gray-200';
  const cardBg = isDark ? 'bg-[#2D3139]' : 'bg-gray-50';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';
  const btnBase = isDark
    ? 'border-[#ABB2BF]/30 text-[#ABB2BF] hover:border-white/50 hover:text-white'
    : 'border-gray-300 text-gray-500 hover:border-black/50 hover:text-black';
  const imgBg = isDark ? 'bg-[#1E2228]' : 'bg-gray-200';

  return (
    <article className={`border ${borderColor} ${cardBg} overflow-hidden flex flex-col group transition-colors duration-300`}>
      {/* Blog cover image */}
      <div className={`relative h-44 ${imgBg} overflow-hidden flex items-center justify-center`}>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className={`text-xs ${textSecondary} font-mono`}>blog-cover.png</span>
        </div>
        <div className={`absolute bottom-2 right-2 w-12 h-12 dot-pattern ${isDark ? 'text-[#ABB2BF]/20' : 'text-gray-400/20'}`} />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className={`font-semibold text-sm ${textPrimary} line-clamp-2 leading-snug`}>{blog.title}</h3>
        <p className={`text-xs ${textSecondary} leading-relaxed line-clamp-3`}>{blog.excerpt}</p>

        <div className="mt-auto pt-3">
          <a
            href={blog.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs border px-3 py-1.5 transition-colors duration-200 ${btnBase}`}
          >
            <ExternalLinkIcon /> Read on Medium
          </a>
        </div>
      </div>
    </article>
  );
};

const Blogs: React.FC = () => {
  const { isDark } = useTheme();

  const bgSection = isDark ? 'bg-[#282C33]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#ABB2BF]' : 'text-[#ABB2BF]';

  return (
    <section id="blogs" className={`${bgSection} py-20 px-6 lg:px-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className={`font-semibold text-xl ${textPrimary}`}>
              <span className="text-[#C778DD]">#</span>blogs
            </h2>
            <div className="h-px bg-[#C778DD] w-32 sm:w-64" />
          </div>
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${textSecondary} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors flex items-center gap-1`}
          >
            View all <span>→</span>
          </a>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} isDark={isDark} />
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
    </section>
  );
};

export default Blogs;
