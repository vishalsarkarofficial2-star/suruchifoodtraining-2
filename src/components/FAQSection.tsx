import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Edit3, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FAQSection: React.FC = () => {
  const { faqs, setIsAdminModalOpen, openEnquiryModal, contactInfo } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            Everything you need to know about joining our culinary and baking training sessions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E8DFC8] overflow-hidden bg-[#FAF7F2] transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6EE] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#330A12] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#7A1C2D] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#7A1C2D] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C524B] leading-relaxed border-t border-[#E8DFC8]/50 bg-white">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info & Admin edit note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#330A12]">
              Still have a specific question?
            </h4>
            <p className="text-xs text-[#7A726B] mt-0.5">
              Our training coordinator is available on WhatsApp to assist you directly.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Suruchi Food Training, I have a question about your cooking classes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#7A726B] border border-[#E8DFC8] transition-colors"
              title="Edit FAQs in Admin Panel"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
