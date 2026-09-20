import React from 'react';
import { X, Clock, Calendar, Check, Award, BookOpen, MessageCircle, AlertCircle, Sparkles, ChefHat } from 'lucide-react';
import { Course } from '../types';
import { useApp } from '../context/AppContext';

interface CourseDetailModalProps {
  course?: Course | null;
  onClose?: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose }) => {
  const { selectedCourse, setSelectedCourse, openEnquiryModal, contactInfo } = useApp();

  const currentCourse = course !== undefined ? course : selectedCourse;
  const handleClose = onClose || (() => setSelectedCourse(null));

  if (!currentCourse) return null;

  const handleEnrollClick = () => {
    handleClose();
    openEnquiryModal(currentCourse.title);
  };

  const whatsappMessage = `Hello Suruchi Food Training, I want to ask about the "${currentCourse.title}" course (Fee: ${currentCourse.fee}, Mode: ${currentCourse.trainingMode}). Please share upcoming batch dates and admission procedure.`;
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E8DFC8] max-h-[92vh] flex flex-col">
        
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFC8] bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#7A1C2D]/10 text-[#7A1C2D]">
              {currentCourse.category}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FAF6EE] text-[#5C524B] border border-[#E8DFC8]">
              {currentCourse.trainingMode}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full text-[#5C524B] hover:text-[#330A12] hover:bg-[#E8DFC8]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] border border-[#E8DFC8] shadow-md bg-[#FAF6EE]">
              <img
                src={currentCourse.image}
                alt={currentCourse.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:col-span-7 space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#330A12] leading-tight">
                {currentCourse.title}
              </h2>
              <p className="text-sm text-[#5C524B] leading-relaxed">
                {currentCourse.shortDescription}
              </p>

              {/* Badges strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8]">
                  <p className="text-[10px] uppercase font-bold text-[#7A726B]">Course Fee</p>
                  <p className="font-serif font-bold text-base text-[#7A1C2D]">{currentCourse.fee}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8]">
                  <p className="text-[10px] uppercase font-bold text-[#7A726B]">Duration</p>
                  <p className="font-sans font-semibold text-xs text-[#330A12] mt-0.5">{currentCourse.duration}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] col-span-2 sm:col-span-1">
                  <p className="text-[10px] uppercase font-bold text-[#7A726B]">Skill Level</p>
                  <p className="font-sans font-semibold text-xs text-emerald-700 mt-0.5">{currentCourse.skillLevel}</p>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs text-[#BA2D1D] font-medium">
                <Calendar className="w-4 h-4" />
                <span>Upcoming Batch: {currentCourse.upcomingBatch}</span>
              </div>
            </div>
          </div>

          {/* Section: What You Will Learn */}
          <div className="space-y-3 pt-4 border-t border-[#E8DFC8]">
            <h3 className="font-serif text-lg font-bold text-[#330A12] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              What You Will Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentCourse.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8]/60 text-xs text-[#330A12]">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Recipes & Topics Covered */}
          <div className="space-y-3 pt-4 border-t border-[#E8DFC8]">
            <h3 className="font-serif text-lg font-bold text-[#330A12] flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#7A1C2D]" />
              Recipes & Practical Topics Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {currentCourse.recipesCovered.map((recipe, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-xs font-medium text-[#423B36] shadow-2xs"
                >
                  🍽️ {recipe}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Practical Logistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFC8]">
            {/* Who Should Join */}
            <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#330A12]">Who Should Join</h4>
              <ul className="space-y-1.5 text-xs text-[#5C524B]">
                {currentCourse.whoShouldJoin.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C2D] mt-1.5 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Schedule & Timing */}
            <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#330A12] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#BA2D1D]" />
                Class Schedule & Timing
              </h4>
              <p className="text-xs text-[#5C524B] leading-relaxed">
                {currentCourse.classSchedule}
              </p>
              <div className="pt-2 text-[11px] text-[#7A726B]">
                * Flexible weekend & weekday batch options available upon request.
              </div>
            </div>

            {/* Materials Required */}
            <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] space-y-1.5">
              <h4 className="font-serif font-bold text-sm text-[#330A12]">Materials & Ingredients</h4>
              <p className="text-xs text-[#5C524B] leading-relaxed">
                {currentCourse.materialsRequired}
              </p>
            </div>

            {/* Certificate Information (Notice editable honest presentation) */}
            <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] space-y-1.5">
              <h4 className="font-serif font-bold text-sm text-[#330A12] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                Certificate Information
              </h4>
              {currentCourse.certificateProvided ? (
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Certificate Provided
                  </span>
                  <p className="text-xs text-[#5C524B] leading-relaxed">
                    {currentCourse.certificateDetails || 'Certificate of Completion awarded upon successful course demonstration.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Skill-Building Workshop (No Mandatory Certificate)
                  </span>
                  <p className="text-xs text-[#5C524B]">
                    Focus is 100% on hands-on practical skill acquisition and recipes.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Sticky Bottom Actions */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#7A726B]">Total Investment:</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-[#7A1C2D]">
                {currentCourse.fee}
              </span>
              {currentCourse.originalFee && (
                <span className="text-xs text-gray-400 line-through">
                  {currentCourse.originalFee}
                </span>
              )}
              <span className="text-[11px] text-[#7A726B]">
                (Inclusive of all training ingredients)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={handleEnrollClick}
              className="flex-1 sm:flex-initial px-7 py-3 rounded-full bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D] hover:from-[#611323] hover:to-[#96253A] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#7A1C2D]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Enroll Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
