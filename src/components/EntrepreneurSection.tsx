import React from 'react';
import { Briefcase, TrendingUp, DollarSign, Package, ChefHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EntrepreneurSection: React.FC = () => {
  const { openEnquiryModal } = useApp();

  const businessModules = [
    { title: 'Home Food Business', desc: 'Launching a hygienic, high-demand food delivery service from your home kitchen.' },
    { title: 'Cloud Kitchen Basics', desc: 'Operating delivery-only food brands on Swiggy and Zomato with optimized overheads.' },
    { title: 'Bakery & Cake Business', desc: 'Pricing custom celebration cakes, managing orders, and packaging for safe transport.' },
    { title: 'Menu Planning & Engineering', desc: 'Designing streamlined menus that minimize wastage and maximize daily profit margins.' },
    { title: 'Food Costing & Pricing Basics', desc: 'Exact formula for calculating portion costs, raw materials, labor, and final retail price.' },
    { title: 'Kitchen Workflow & Bulk Prep', desc: 'Batch prep systems, base gravies, marinade standards, and quick ticket turnaround.' },
    { title: 'Food Packaging Basics', desc: 'Selecting leak-proof, food-grade containers that preserve heat, crispness, and presentation.' },
    { title: 'Basic Food Branding', desc: 'Label design, social media food photography basics, and customer loyalty retention.' },
  ];

  return (
    <section id="entrepreneurs" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF6EE] to-[#FAF7F2] relative border-b border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-[#BA2D1D]" />
              Culinary Entrepreneurship
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] leading-tight">
              Turn Your Cooking Skills Into a Business
            </h2>

            <p className="text-sm sm:text-base text-[#5C524B] leading-relaxed">
              Passionate about cooking but unsure how to turn it into a profitable livelihood? Our practical business training guides you through the realistic steps of running a home food business, cloud kitchen, or custom baking service.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E8DFC8] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#7A1C2D] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>The Practical Entrepreneur Advantage</span>
              </div>
              <p className="text-xs text-[#5C524B] leading-relaxed">
                We do not teach theoretical jargon. You learn practical costing spreadsheets, supplier sourcing tricks, batch prep techniques, and customer satisfaction tips based on real culinary business realities.
              </p>
            </div>

            <div>
              <button
                onClick={() => openEnquiryModal('Food Business & Entrepreneurship Training')}
                className="px-7 py-3.5 bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D] hover:from-[#611323] hover:to-[#96253A] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-[#7A1C2D]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>Enquire About Business Training</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Business Modules Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessModules.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs hover:border-[#7A1C2D]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF6EE] text-[#7A1C2D] group-hover:bg-[#7A1C2D] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#330A12] group-hover:text-[#7A1C2D] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5C524B] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
