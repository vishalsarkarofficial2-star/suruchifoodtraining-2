import React from 'react';
import { Calendar, Clock, MapPin, Users, AlertCircle, ArrowRight, CheckCircle, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WorkshopsSection: React.FC = () => {
  const { workshops, openEnquiryModal, setIsAdminModalOpen } = useApp();

  return (
    <section id="workshops" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              Live Hands-on Workshops
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
              Upcoming Classes & Workshops
            </h2>
            <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
              Short, high-intensity weekend masterclasses focusing on specific culinary specializations. Master signature dishes in a single hands-on session.
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF6EE] hover:bg-[#FAF7F2] text-[#7A1C2D] text-xs font-semibold rounded-full border border-[#E8DFC8] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Schedule New Workshop (Admin)</span>
            </button>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Date Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={workshop.image}
                    alt={workshop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Limited Seats tag (shown only if configured) */}
                  {workshop.limitedSeats && (
                    <div className="absolute top-3 left-3 bg-red-600/95 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <AlertCircle className="w-3 h-3" />
                      <span>Limited Seats Available</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-[#7A1C2D] shadow-xs">
                    {workshop.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BA2D1D]">
                      {workshop.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#330A12] leading-snug group-hover:text-[#7A1C2D] transition-colors">
                      {workshop.name}
                    </h3>
                    <p className="text-xs text-[#5C524B] leading-relaxed line-clamp-2">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Logistics Badges */}
                  <div className="space-y-2 pt-2 border-t border-[#E8DFC8]/60 text-xs text-[#423B36]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#7A1C2D] shrink-0" />
                      <span className="font-semibold">{workshop.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#BA2D1D] shrink-0" />
                      <span>{workshop.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#7A726B] shrink-0" />
                      <span className="truncate">{workshop.location}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-[#7A726B]">
                        Trainer: <strong className="text-[#330A12]">{workshop.trainer}</strong>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <Users className="w-3 h-3" />
                        {workshop.availableSeats} of {workshop.totalSeats} seats left
                      </span>
                    </div>
                  </div>

                  {/* Deadline notification */}
                  <div className="text-[11px] text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-200/60">
                    Registration Deadline: <strong>{workshop.registrationDeadline}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openEnquiryModal(`Workshop: ${workshop.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md shadow-[#7A1C2D]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>Reserve Your Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
