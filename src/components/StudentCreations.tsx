import React from 'react';
import { Award, Heart, Sparkles, Quote, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudentCreations: React.FC = () => {
  const { studentCreations, openEnquiryModal, contactInfo } = useApp();

  return (
    <section id="creations" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            Real Practical Results
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Made by Our Students
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            No stock imagery or simulated results. These are dishes and celebration cakes prepared by our students during their very first training batches at Suruchi Food Training.
          </p>
        </div>

        {/* Student Creations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentCreations.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={item.photo}
                    alt={`${item.dishName} prepared by ${item.studentName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#7A1C2D] shadow-xs">
                    Student Work
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#330A12] group-hover:text-[#7A1C2D] transition-colors leading-snug">
                      {item.dishName}
                    </h3>
                    <p className="text-xs font-semibold text-[#BA2D1D] mt-0.5">
                      Course: {item.courseName}
                    </p>
                  </div>

                  {/* Comment */}
                  <div className="relative pt-2 text-xs text-[#5C524B] italic leading-relaxed">
                    <Quote className="w-3.5 h-3.5 text-[#E8DFC8] absolute -top-1 -left-1" />
                    <p className="pl-3">"{item.comment}"</p>
                  </div>
                </div>
              </div>

              {/* Student Footer */}
              <div className="px-5 pb-5 pt-2 border-t border-[#E8DFC8]/60 flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-[#330A12]">
                  {item.studentName}
                </span>
                {item.batch && (
                  <span className="text-[11px] text-[#7A726B]">
                    {item.batch}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF6EE] to-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#330A12]">
              Want to see your creations featured here?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C524B]">
              Join our upcoming beginner or weekend training batch and start cooking with confidence.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openEnquiryModal('Admission Enquiry')}
              className="px-6 py-3 bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-[1.02]"
            >
              Start Your Training
            </button>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white hover:bg-[#FAF6EE] text-[#330A12] border border-[#E8DFC8] text-xs font-semibold rounded-full transition-colors inline-flex items-center gap-1.5"
            >
              <span>More on Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
