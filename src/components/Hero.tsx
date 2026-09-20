import React from 'react';
import { ChefHat, CheckCircle2, MessageCircle, ArrowRight, Sparkles, Award, Users, Flame } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { openEnquiryModal, contactInfo } = useApp();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIndicators = [
    { title: 'Practical Training', desc: '100% hands-on culinary stations', icon: Flame },
    { title: 'Beginner Friendly', desc: 'No prior cooking experience needed', icon: Users },
    { title: 'Step-by-Step Guidance', desc: 'Continuous trainer mentoring', icon: ChefHat },
    { title: 'Professional Techniques', desc: 'Commercial kitchen standards', icon: Award },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FAF6EE] to-[#FAF7F2]">
      {/* Decorative culinary background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#7A1C2D]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1C2D]/10 border border-[#7A1C2D]/20 text-[#7A1C2D] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Suruchi Food Training • Practical Culinary Academy</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#330A12] leading-[1.12] tracking-tight">
              Learn Cooking.{' '}
              <span className="text-[#BA2D1D] block sm:inline">Master Skills.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D]">
                Create Delicious Food.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#423B36] max-w-2xl leading-relaxed font-normal">
              Professional practical food training designed to help beginners, home cooks, aspiring entrepreneurs and food enthusiasts develop real cooking skills.
            </p>

            {/* Three primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => handleScrollTo('#courses')}
                className="px-6 py-3.5 bg-[#7A1C2D] hover:bg-[#611323] text-white font-semibold text-sm rounded-full shadow-lg shadow-[#7A1C2D]/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openEnquiryModal()}
                className="px-6 py-3.5 bg-[#BA2D1D] hover:bg-[#96253A] text-white font-semibold text-sm rounded-full shadow-md shadow-[#BA2D1D]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Training</span>
              </button>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-full shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5C524B]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                All Ingredients Provided
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Individual Workstations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Take What You Cook Home
              </span>
            </div>
          </div>

          {/* Right Column: Visual Training Photography with Floating Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#7A1C2D]/30 via-[#D4AF37]/30 to-transparent blur-md -z-10" />

              {/* Main Culinary Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&auto=format&fit=crop&q=85"
                  alt="Practical hands-on cooking training at Suruchi Food Training Studio"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141211]/80 via-transparent to-black/10" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DFC8]/80 text-[#1E1B18] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#BA2D1D] uppercase tracking-wider">
                        Practical Kitchen Training
                      </p>
                      <h2 className="font-serif text-base font-bold text-[#330A12]">
                        Suruchi Food Training Studio
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#7A1C2D] text-white flex items-center justify-center font-bold text-xs shadow">
                      100%
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5C524B] mt-1 line-clamp-1">
                    Hands-on practical cooking under direct trainer guidance
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Small Batches */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-xl p-3 shadow-xl border border-[#E8DFC8] flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6EE] text-[#7A1C2D] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5 text-[#BA2D1D]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#330A12]">Small Batch Focus</p>
                  <p className="text-[10px] text-[#7A726B]">Dedicated individual attention</p>
                </div>
              </div>

              {/* Floating Badge 2: Certified Training */}
              <div className="absolute top-1/2 -right-3 sm:-right-6 bg-white rounded-xl p-3 shadow-xl border border-[#E8DFC8] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#330A12]">Certified Training</p>
                  <p className="text-[10px] text-[#7A726B]">Authentic skill building</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Indicators Grid Bar */}
        <div className="mt-14 pt-8 border-t border-[#E8DFC8]/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trustIndicators.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white border border-[#E8DFC8]/80 shadow-xs hover:border-[#7A1C2D]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] text-[#7A1C2D] group-hover:bg-[#7A1C2D] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-base font-bold text-[#330A12] leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#5C524B] mt-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
