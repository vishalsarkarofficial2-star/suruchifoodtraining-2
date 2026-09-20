import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FloatingWhatsApp: React.FC = () => {
  const { contactInfo } = useApp();
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.';
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end group">
      
      {/* Friendly speech bubble tooltip */}
      {showTooltip && (
        <div className="mb-2.5 hidden sm:flex items-center gap-2 bg-white text-[#330A12] px-3.5 py-2 rounded-2xl shadow-xl border border-[#E8DFC8] text-xs animate-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <p className="font-medium">
            Chat with Trainer on WhatsApp
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#7A726B] hover:text-[#330A12] ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-700/30 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
        aria-label="Contact Suruchi Food Training on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
