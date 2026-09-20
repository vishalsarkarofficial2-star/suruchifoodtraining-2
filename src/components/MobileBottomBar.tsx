import React from 'react';
import { Phone, MessageCircle, BookOpen, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MobileBottomBar: React.FC = () => {
  const { contactInfo, openEnquiryModal } = useApp();

  const handleCoursesClick = () => {
    const el = document.querySelector('#courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defaultMessage = 'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.';
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFC8] px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-xl bg-white border border-[#E8DFC8] text-[#330A12] active:bg-[#FAF6EE] transition-colors"
          aria-label="Call Suruchi Food Training"
        >
          <Phone className="w-4 h-4 text-[#7A1C2D]" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 active:bg-emerald-100 transition-colors"
          aria-label="WhatsApp Suruchi Food Training"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">WhatsApp</span>
        </a>

        {/* Courses Button */}
        <button
          onClick={handleCoursesClick}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-xl bg-white border border-[#E8DFC8] text-[#330A12] active:bg-[#FAF6EE] transition-colors"
          aria-label="View Courses"
        >
          <BookOpen className="w-4 h-4 text-[#BA2D1D]" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Courses</span>
        </button>

        {/* Enquire Button */}
        <button
          onClick={() => openEnquiryModal()}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-xl bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D] text-white active:opacity-90 shadow-sm transition-transform"
          aria-label="Enquire for Course"
        >
          <Send className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Enquire</span>
        </button>

      </div>
    </div>
  );
};
