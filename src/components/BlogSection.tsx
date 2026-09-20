import React, { useState, useMemo } from 'react';
import { BookOpen, Calendar, User, Clock, Share2, ArrowRight, X, Sparkles, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const { blogs, activeBlogReader, setActiveBlogReader } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedShare, setCopiedShare] = useState(false);

  const categories = [
    'All',
    'Cooking Tips',
    'Baking Tips',
    'Food Business Tips',
    'Recipes',
    'Kitchen Hacks',
    'Student Stories',
  ];

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'All') return blogs;
    return blogs.filter((b) => b.category === selectedCategory);
  }, [blogs, selectedCategory]);

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Culinary Knowledge & Recipes
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
              Recipes & Food Training Blog
            </h2>
            <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
              Learn culinary science, spice alchemy, baking troubleshooting, and food business strategies shared directly by our training team.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#7A1C2D] text-white shadow-sm'
                  : 'bg-white text-[#423B36] border border-[#E8DFC8] hover:bg-[#FAF6EE] hover:text-[#7A1C2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div
                  onClick={() => setActiveBlogReader(post)}
                  className="relative aspect-[16/10] overflow-hidden bg-[#FAF6EE] cursor-pointer"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#330A12]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#7A726B]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#BA2D1D]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveBlogReader(post)}
                    className="font-serif text-xl font-bold text-[#330A12] group-hover:text-[#7A1C2D] transition-colors leading-snug cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5C524B] leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#FAF6EE]">
                <button
                  onClick={() => setActiveBlogReader(post)}
                  className="text-xs font-bold text-[#7A1C2D] hover:text-[#4A0E1A] inline-flex items-center gap-1 group/btn"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleShare(post)}
                  className="p-2 text-[#7A726B] hover:text-[#7A1C2D] rounded-full hover:bg-[#FAF6EE] transition-colors"
                  title="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeBlogReader && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E8DFC8] max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFC8] bg-[#FAF7F2] shrink-0">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#7A1C2D]/10 text-[#7A1C2D]">
                {activeBlogReader.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activeBlogReader)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8DFC8] bg-white text-xs text-[#330A12] hover:bg-[#FAF6EE] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#7A1C2D]" />
                  <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
                </button>

                <button
                  onClick={() => setActiveBlogReader(null)}
                  className="p-1.5 rounded-full text-[#7A726B] hover:text-[#330A12] hover:bg-[#E8DFC8]/50"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#E8DFC8] shadow-sm">
                <img
                  src={activeBlogReader.featuredImage}
                  alt={activeBlogReader.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A726B]">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#BA2D1D]" />
                    {activeBlogReader.author}
                  </span>
                  <span>•</span>
                  <span>{activeBlogReader.date}</span>
                  <span>•</span>
                  <span>{activeBlogReader.readTime}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#330A12] leading-tight">
                  {activeBlogReader.title}
                </h1>

                <p className="text-sm font-medium text-[#7A1C2D] bg-[#FAF6EE] p-4 rounded-xl border border-[#E8DFC8] italic">
                  "{activeBlogReader.summary}"
                </p>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-sm text-[#423B36] leading-relaxed pt-2">
                {activeBlogReader.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-[#E8DFC8] flex flex-wrap gap-2">
                {activeBlogReader.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E8DFC8] text-[11px] font-medium text-[#5C524B]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Related CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF6EE] to-[#FAF7F2] border border-[#E8DFC8] text-center space-y-2">
                <h4 className="font-serif font-bold text-base text-[#330A12]">
                  Want to practice these skills hands-on?
                </h4>
                <p className="text-xs text-[#5C524B]">
                  Join our practical culinary and baking workshops at Suruchi Food Training Studio.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setActiveBlogReader(null);
                      const el = document.querySelector('#courses');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-semibold rounded-full shadow-sm"
                  >
                    Explore Practical Courses
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
