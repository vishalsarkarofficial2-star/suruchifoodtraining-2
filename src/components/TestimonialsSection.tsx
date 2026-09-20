import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, openEnquiryModal } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            Student Experiences & Feedback
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            Honest reflections from students who attended our practical cooking and baking workshops.
          </p>
        </div>

        {/* Carousel / Card display */}
        <div className="max-w-4xl mx-auto">
          {testimonials.length > 0 && (
            <div className="relative bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8DFC8] shadow-md">
              <Quote className="w-12 h-12 text-[#E8DFC8] absolute top-6 right-8 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                {/* Photo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-[#FAF6EE]">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].studentName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 text-center sm:text-left flex-1">
                  {/* Stars */}
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="font-serif text-base sm:text-lg text-[#330A12] italic leading-relaxed">
                    "{testimonials[currentIndex].review}"
                  </p>

                  <div className="pt-2">
                    <h3 className="font-serif text-base font-bold text-[#330A12]">
                      {testimonials[currentIndex].studentName}
                    </h3>
                    <p className="text-xs font-semibold text-[#BA2D1D]">
                      Course: {testimonials[currentIndex].courseAttended}
                    </p>
                    <p className="text-[11px] text-[#7A726B] mt-0.5">
                      Batch: {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-[#E8DFC8]/60 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-6 bg-[#7A1C2D]' : 'w-2 bg-[#D5C7B3]'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full bg-white border border-[#E8DFC8] text-[#330A12] hover:bg-[#FAF6EE] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full bg-white border border-[#E8DFC8] text-[#330A12] hover:bg-[#FAF6EE] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Small transparent note */}
        <div className="mt-6 text-center text-[11px] text-[#7A726B]">
          * We do not invent fake reviews or statistics. Genuine verified student feedback submitted after practical batches.
        </div>

      </div>
    </section>
  );
};
