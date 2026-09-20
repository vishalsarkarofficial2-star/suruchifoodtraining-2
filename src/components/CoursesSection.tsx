import React, { useState, useMemo } from 'react';
import { BookOpen, Calendar, Clock, ChevronRight, MessageCircle, Sparkles, Filter, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Course } from '../types';

export const CoursesSection: React.FC = () => {
  const { courses, setSelectedCourse, openEnquiryModal, setIsAdminModalOpen, contactInfo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories from actual courses
  const categories = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => set.add(c.category));
    return ['All', ...Array.from(set)];
  }, [courses]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Practical Culinary Programs
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
              Our Courses & Training Programs
            </h2>
            <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
              Hands-on cooking modules with dedicated workstations, pure ingredients, and real kitchen skills. Designed for beginners, enthusiasts, and future food entrepreneurs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#FAF6EE] text-[#7A1C2D] text-xs font-semibold rounded-full border border-[#E8DFC8] shadow-xs transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Manage / Add Courses</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 scrollbar-none">
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

            {/* Quick Search Input */}
            <div className="w-full sm:w-64 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipe or course..."
                className="w-full px-3.5 py-2 text-xs bg-white border border-[#E8DFC8] rounded-full focus:outline-none focus:border-[#7A1C2D] text-[#330A12] placeholder-[#7A726B]"
              />
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFC8] p-8">
            <p className="text-sm font-semibold text-[#330A12]">No courses found for your search.</p>
            <p className="text-xs text-[#7A726B] mt-1">Try selecting "All" or contact our trainer for custom modules.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-xl hover:border-[#7A1C2D]/40 transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#330A12]/80 backdrop-blur-xs text-white">
                      {course.category}
                    </span>
                    {course.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37] text-[#330A12] flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3" /> Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/95 backdrop-blur-xs text-[#330A12] shadow-xs">
                      {course.trainingMode}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Duration & Skill level */}
                    <div className="flex items-center justify-between text-[11px] text-[#7A726B] mb-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#BA2D1D]" />
                        {course.duration}
                      </span>
                      <span className="font-semibold text-emerald-700">
                        {course.skillLevel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-[#330A12] group-hover:text-[#7A1C2D] transition-colors leading-snug">
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#5C524B] mt-2 line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* What Students Will Learn (First 2 highlights) */}
                    <div className="mt-3.5 pt-3 border-t border-[#FAF6EE] space-y-1.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A726B]">
                        Key Practical Highlights:
                      </p>
                      {course.whatYouWillLearn.slice(0, 2).map((h, i) => (
                        <p key={i} className="text-[11px] text-[#423B36] flex items-start gap-1.5 line-clamp-1">
                          <span className="text-[#BA2D1D] font-bold">✓</span>
                          <span>{h}</span>
                        </p>
                      ))}
                    </div>

                    {/* Upcoming Batch Notice */}
                    <div className="mt-3 py-1 px-2.5 rounded-lg bg-[#FAF6EE] border border-[#E8DFC8]/60 text-[11px] text-[#7A1C2D] flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#BA2D1D]" />
                      <span className="truncate">Batch: {course.upcomingBatch}</span>
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-3 border-t border-[#E8DFC8]/80 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#7A726B]">Training Fee:</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-xl font-bold text-[#7A1C2D]">
                          {course.fee}
                        </span>
                        {course.originalFee && (
                          <span className="text-xs text-gray-400 line-through">
                            {course.originalFee}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="w-full py-2.5 px-3 rounded-xl border border-[#E8DFC8] bg-[#FAF7F2] hover:bg-[#FAF6EE] text-[#330A12] text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>View Course</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#7A726B]" />
                      </button>

                      <button
                        onClick={() => openEnquiryModal(course.title)}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-semibold text-center shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8]">
          <p className="text-sm font-serif font-bold text-[#330A12]">
            Looking for customized 1-on-1 culinary training or a custom menu?
          </p>
          <p className="text-xs text-[#5C524B] mt-1 max-w-xl mx-auto">
            We offer bespoke training schedules for students traveling abroad, cloud kitchens, or private home cooks.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openEnquiryModal('Custom Culinary Training')}
              className="px-5 py-2.5 bg-[#BA2D1D] text-white text-xs font-semibold rounded-full shadow-xs hover:bg-[#96253A] transition-colors"
            >
              Request Custom Syllabus
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Suruchi Food Training, I am interested in custom cooking classes. Please let me know how we can proceed.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-[#E8DFC8] text-[#330A12] text-xs font-semibold rounded-full hover:bg-[#FAF7F2] inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Talk to Trainer on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
