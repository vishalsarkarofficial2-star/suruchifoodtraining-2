import React from 'react';
import { Flame, Compass, Users, Sparkles, BookOpen, Layers } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      title: 'Hands-On Training',
      description: 'Learn by actually preparing food yourself. Each student gets their own workstation and handles real cooking from scratch.',
      icon: Flame,
    },
    {
      title: 'Step-by-Step Guidance',
      description: 'Clear, patient instructions throughout the entire cooking process. We explain why each step matters, not just what to do.',
      icon: Compass,
    },
    {
      title: 'Beginner Friendly',
      description: 'Training thoughtfully structured so complete novices feel at home. No prior knife skills or culinary knowledge required.',
      icon: Users,
    },
    {
      title: 'Practical Techniques',
      description: 'Learn realistic, reliable techniques that can easily be replicated in ordinary home or cloud kitchen setups without exorbitant gear.',
      icon: Sparkles,
    },
    {
      title: 'Recipe Guidance',
      description: 'Structured, tested recipe sheets with exact gram measurements, spice balance rules, and storage preservation instructions.',
      icon: BookOpen,
    },
    {
      title: 'Small Batch Training',
      description: 'Strict batch size caps so the instructor can watch your pan, taste your sauce, and correct techniques in real-time.',
      icon: Layers,
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            Why Suruchi Food Training
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Why Choose Our Training Studio
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            We focus on true culinary craftsmanship—giving you the skills, instincts, and confidence to prepare exceptional dishes every single time.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFC8] shadow-xs hover:border-[#7A1C2D]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#7A1C2D] group-hover:bg-[#7A1C2D] group-hover:text-white border border-[#E8DFC8] flex items-center justify-center transition-colors mb-6 shadow-xs">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#330A12] group-hover:text-[#7A1C2D] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
