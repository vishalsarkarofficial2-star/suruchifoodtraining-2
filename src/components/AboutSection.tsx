import React from 'react';
import { ChefHat, Check, Heart, Compass, Sparkles, MessageCircle, Edit3 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutSection: React.FC = () => {
  const { trainerInfo, setIsAdminModalOpen, openEnquiryModal, contactInfo } = useApp();

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E8DFC8] text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <ChefHat className="w-3.5 h-3.5 text-[#BA2D1D]" />
            About Suruchi Food Training
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#330A12] tracking-tight">
            Dedicated to the Craft of Real, Practical Cooking
          </h2>
          <p className="mt-3 text-[#5C524B] text-base sm:text-lg">
            A specialized culinary academy founded to demystify cooking techniques, celebrate rich flavors, and empower students to cook with intuition, confidence, and commercial precision.
          </p>
        </div>

        {/* 2-Column Philosophy & Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#330A12]">
              Why Our Practical Training Makes the Real Difference
            </h3>
            
            <p className="text-[#423B36] leading-relaxed text-sm sm:text-base">
              At <strong className="text-[#7A1C2D]">Suruchi Food Training</strong>, we believe cooking cannot be learned solely from digital screens or static recipe books. The real magic happens at the burner—where you see when mustard seeds pop, feel the resistance of properly kneaded bread dough, and smell the exact moment raw spices turn into a savory gravy base.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#7A1C2D] text-white shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#330A12]">Our Core Philosophy</h4>
                  <p className="text-xs text-[#5C524B] mt-1 leading-relaxed">
                    "{trainerInfo.trainingPhilosophy}"
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-[#330A12]">
                What Students Learn at Suruchi:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Sensory flame and heat regulation',
                  'Authentic spice tempering (tadka / phoron)',
                  'Texture balance & emulsion stability',
                  'Eggless and commercial baking secrets',
                  'Standardized commercial recipe ratios',
                  'Hygienic kitchen workflow & cost budgeting'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#330A12]">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] border border-[#E8DFC8]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80"
                  alt="Practical hands-on training workstation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-center">
                <p className="font-serif font-bold text-lg text-[#7A1C2D]">Zero Guesswork</p>
                <p className="text-[11px] text-[#7A726B]">Gram-by-gram recipe consistency</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-xl bg-[#7A1C2D] text-white text-center shadow-sm">
                <p className="font-serif font-bold text-lg text-amber-200">100% Practical</p>
                <p className="text-[11px] text-white/80">Every student prepares own dishes</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] border border-[#E8DFC8]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&auto=format&fit=crop&q=80"
                  alt="Culinary instructor training students"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* "Meet Your Trainer" Section */}
        <div className="mt-8 pt-12 border-t border-[#E8DFC8]/70">
          <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-sm relative overflow-hidden">
            
            {/* Corner Decorative ribbon */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-[#7A1C2D] hover:text-[#4A0E1A] bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-[#E8DFC8] transition-all shadow-xs"
                title="Edit Trainer bio & credentials in Admin"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile in Admin</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Trainer Photo */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white mb-4">
                  <img
                    src={trainerInfo.photo}
                    alt={trainerInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#330A12]">
                  {trainerInfo.name}
                </h4>
                <p className="text-xs font-semibold text-[#BA2D1D] uppercase tracking-wider mt-0.5">
                  {trainerInfo.title}
                </p>
                <p className="text-[11px] text-[#7A726B] mt-1">
                  Suruchi Food Training Lead
                </p>
              </div>

              {/* Trainer Bio & Philosophy */}
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1C2D] bg-[#7A1C2D]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Meet Your Trainer</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#330A12]">
                  Patient, Hands-on Guidance at Every Step
                </h3>

                <p className="text-xs sm:text-sm text-[#423B36] leading-relaxed">
                  {trainerInfo.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#330A12]">
                    Our Teaching Methodology:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#5C524B]">
                    {trainerInfo.approach.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BA2D1D] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => openEnquiryModal()}
                    className="px-5 py-2.5 bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-semibold rounded-full shadow-sm transition-all"
                  >
                    Talk to the Trainer & Enquire
                  </button>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      'Hello Suruchi Food Training, I would like to speak with the trainer regarding cooking classes.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white hover:bg-[#FAF7F2] text-[#330A12] border border-[#E8DFC8] text-xs font-semibold rounded-full transition-all inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Trainer Directly</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
