import React, { useState } from 'react';
import { Utensils, Menu, X, Phone, MessageCircle, Lock, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { openEnquiryModal, setIsAdminModalOpen, contactInfo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Student Creations', href: '#creations' },
    { label: 'Videos', href: '#videos' },
    { label: 'Business Training', href: '#entrepreneurs' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8]/60 transition-all">
      {/* Top micro bar for direct contact & admin toggle */}
      <div className="bg-[#4A0E1A] text-[#FAF6EE] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-200/90 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            New Practical Cooking Batches Now Open
          </span>
          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1 hover:text-amber-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 hover:text-amber-200 transition-colors"
          >
            <span>Instagram:</span>
            <span className="text-amber-300 font-semibold">{contactInfo.instagramHandle}</span>
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="inline-flex items-center gap-1 text-[11px] text-amber-200/80 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-all"
            title="Open Admin Dashboard to manage courses, content & enquiries"
          >
            <Lock className="w-3 h-3" />
            <span>Admin Panel</span>
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1C2D] to-[#4A0E1A] text-white flex items-center justify-center shadow-md shadow-[#7A1C2D]/20 group-hover:scale-105 transition-transform">
              <Utensils className="w-6 h-6 text-[#E5B842]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#330A12] leading-none">
                Suruchi
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#BA2D1D] mt-1">
                Food Training Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.slice(0, 8).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-[13px] font-medium text-[#292522] hover:text-[#7A1C2D] hover:bg-[#F2EADB]/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-[13px] font-medium text-[#292522] hover:text-[#7A1C2D] rounded-lg flex items-center gap-1">
                More
                <span className="text-[10px]">▼</span>
              </button>
              <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-[#E8DFC8] py-2 hidden group-hover:block transition-all">
                {navLinks.slice(8).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-2 text-xs font-medium text-[#292522] hover:bg-[#FAF6EE] hover:text-[#7A1C2D]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => openEnquiryModal()}
              className="px-5 py-2.5 bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D] hover:from-[#611323] hover:to-[#96253A] text-white font-medium text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#7A1C2D]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => openEnquiryModal()}
              className="sm:hidden px-3 py-1.5 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#330A12] hover:bg-[#F2EADB] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-xs font-medium text-[#292522] hover:bg-[#F2EADB] hover:text-[#7A1C2D] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#BA2D1D]" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8DFC8] flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="w-full py-3 bg-[#7A1C2D] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md text-center"
            >
              Submit Admission Enquiry
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
