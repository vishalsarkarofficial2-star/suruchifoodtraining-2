import React, { useState } from 'react';
import { ChefHat, Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Youtube, Shield, Lock, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { contactInfo, courses, setSelectedCourse, openEnquiryModal, setIsAdminModalOpen } = useApp();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#24060C] text-[#FAF7F2] pt-16 pb-24 sm:pb-16 border-t border-[#7A1C2D]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7A1C2D] border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
                <ChefHat className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight text-[#FAF7F2]">
                  Suruchi Food Training
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                  Culinary Training Academy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              Professional food and cooking training academy teaching students, homemakers, and future entrepreneurs the authentic art of practical culinary craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
                title="Instagram @suruchifoodtraining"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Suruchi
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">
                  Upcoming Workshops
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#creations" className="hover:text-white transition-colors">
                  Student Creations
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-white transition-colors">
                  Training Videos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Recipe Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#D4AF37]">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {courses.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-left hover:text-white transition-colors line-clamp-1"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openEnquiryModal('Food Business Training')}
                  className="text-left text-[#D4AF37] hover:underline font-semibold"
                >
                  Entrepreneurship Program →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#D4AF37]">
              Studio Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{contactInfo.address}, {contactInfo.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {contactInfo.whatsapp}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Admin login trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} Suruchi Food Training. All culinary training rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-neutral-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-neutral-200 transition-colors"
            >
              Terms of Admission
            </button>
            <span>•</span>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="hover:text-[#D4AF37] text-neutral-300 font-medium inline-flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-white text-[#330A12] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFC8]">
            <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3 mb-4">
              <h3 className="font-serif text-lg font-bold">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Training Admission'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-full text-[#7A726B] hover:text-[#330A12]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#5C524B] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Suruchi Food Training is committed to protecting your privacy. Any personal details submitted via our course enquiry forms (including full name, phone number, WhatsApp number, and email address) are used strictly for admission communication and training scheduling.
                  </p>
                  <p>
                    We never sell, rent, or distribute your private contact details to third-party advertisers. All WhatsApp notifications relate directly to class schedules, recipe handouts, or payment confirmations.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Course Registration:</strong> Seats in our hands-on batches are confirmed upon completion of the course registration deposit.
                  </p>
                  <p>
                    <strong>2. Hygiene & Kitchen Etiquette:</strong> Students are expected to maintain professional kitchen hygiene standards, clean footwear, and tied-back hair inside the training studio.
                  </p>
                  <p>
                    <strong>3. Practical Materials:</strong> All standard cooking and baking ingredients used during in-person studio batches are provided by Suruchi Food Training unless specifically noted.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-[#E8DFC8] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
