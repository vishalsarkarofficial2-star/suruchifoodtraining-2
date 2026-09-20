import React from 'react';
import { MapPin, Navigation, Clock, Phone, Building2, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TrainingLocation: React.FC = () => {
  const { contactInfo } = useApp();

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EE] border-b border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Culinary Studio Studio Visit
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Visit Our Training Centre
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            Equipped with individual gas burners, professional baking ovens, preparation counters, and dedicated ventilation.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#BA2D1D]">
                  Location & Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#330A12] mt-1">
                  Suruchi Food Training Studio
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#423B36]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] text-[#7A1C2D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#330A12] font-semibold">Studio Address:</strong>
                    <p className="text-[#5C524B] leading-relaxed mt-0.5">
                      {contactInfo.address}, {contactInfo.city}, {contactInfo.state} - {contactInfo.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] text-[#BA2D1D] flex items-center justify-center shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#330A12] font-semibold">Landmark:</strong>
                    <p className="text-[#5C524B] leading-relaxed mt-0.5">
                      {contactInfo.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#330A12] font-semibold">Class Timings & Hours:</strong>
                    <p className="text-[#5C524B] leading-relaxed mt-0.5">
                      {contactInfo.classTimings}
                    </p>
                    <p className="text-[#7A726B] text-[11px] mt-0.5">
                      {contactInfo.businessHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFC8]">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#7A1C2D]/20 transition-all hover:scale-[1.01]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving / Transit Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs relative min-h-[340px] bg-[#FAF7F2] flex items-center justify-center">
            <iframe
              title="Suruchi Food Training Studio Location Map"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                contactInfo.address + ' ' + contactInfo.city
              )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E8DFC8] shadow-sm text-xs text-[#330A12] font-medium pointer-events-none">
              📍 Suruchi Food Training Studio
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
