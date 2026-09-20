import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles, ChefHat } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EnquiryModal: React.FC = () => {
  const {
    isEnquiryModalOpen,
    closeEnquiryModal,
    prefilledCourseName,
    courses,
    submitEnquiry,
    contactInfo,
  } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    city: '',
    interestedCourse: '',
    preferredTrainingMode: 'Hands-on Offline',
    preferredBatch: 'Weekend Special (Sat & Sun)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledCourseName) {
      setFormData((prev) => ({
        ...prev,
        interestedCourse: prefilledCourseName,
      }));
    } else if (courses.length > 0 && !formData.interestedCourse) {
      setFormData((prev) => ({
        ...prev,
        interestedCourse: courses[0].title,
      }));
    }
  }, [prefilledCourseName, courses]);

  // Reset states on open/close
  useEffect(() => {
    if (isEnquiryModalOpen) {
      setSubmitted(false);
      setErrorMessage('');
    }
  }, [isEnquiryModalOpen]);

  if (!isEnquiryModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      setErrorMessage('Please fill in your Full Name and Mobile Number.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        whatsappNumber: formData.whatsappNumber || formData.mobileNumber,
        email: formData.email,
        city: formData.city,
        interestedCourse: formData.interestedCourse,
        preferredTrainingMode: formData.preferredTrainingMode,
        preferredBatch: formData.preferredBatch,
        message: formData.message,
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please try again or WhatsApp us directly.');
    }
  };

  const directWhatsappText = `Hello Suruchi Food Training! I submitted an enquiry for ${formData.interestedCourse || 'Cooking Training'}. Name: ${formData.fullName || 'Student'}, Phone: ${formData.mobileNumber}. Please share batch and admission details.`;
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(directWhatsappText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E8DFC8]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFC8] bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#7A1C2D] text-white flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#330A12]">
                Student Admission & Enquiry Form
              </h3>
              <p className="text-[11px] text-[#7A726B]">
                Suruchi Food Training Academy
              </p>
            </div>
          </div>

          <button
            onClick={closeEnquiryModal}
            className="p-2 rounded-full text-[#7A726B] hover:text-[#330A12] hover:bg-[#E8DFC8]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#330A12]">
                Enquiry Received!
              </h3>

              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC8] max-w-md mx-auto">
                <p className="text-sm font-semibold text-[#7A1C2D] leading-relaxed">
                  “Thank you for contacting Suruchi Food Training. Our team will contact you shortly.”
                </p>
              </div>

              <p className="text-xs text-[#5C524B] max-w-md mx-auto">
                We review batch availability and will call/WhatsApp you with the complete syllabus and schedule.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-sm inline-flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Fast WhatsApp Confirmation</span>
                </a>

                <button
                  onClick={closeEnquiryModal}
                  className="px-6 py-3 bg-[#FAF7F2] hover:bg-[#FAF6EE] border border-[#E8DFC8] text-[#330A12] text-xs font-semibold rounded-full transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Name & Mobile row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ananya Das"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="e.g. +91 98300 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  />
                </div>
              </div>

              {/* WhatsApp & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    WhatsApp Number (If different)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. +91 98300 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. student@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  />
                </div>
              </div>

              {/* City & Interested Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Kolkata / Howrah / Salt Lake"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Interested Course / Workshop
                  </label>
                  <select
                    value={formData.interestedCourse}
                    onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2] text-[#330A12]"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.fee})
                      </option>
                    ))}
                    <option value="Food Business & Cloud Kitchen Program">
                      Food Business & Cloud Kitchen Program
                    </option>
                    <option value="Custom 1-on-1 Culinary Training">
                      Custom 1-on-1 Culinary Training
                    </option>
                    <option value="Upcoming Weekend Workshop">
                      Upcoming Weekend Workshop
                    </option>
                  </select>
                </div>
              </div>

              {/* Training Mode & Batch Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Preferred Training Mode
                  </label>
                  <select
                    value={formData.preferredTrainingMode}
                    onChange={(e) => setFormData({ ...formData, preferredTrainingMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  >
                    <option value="Hands-on Offline Studio">Hands-on Offline (Cooking Studio)</option>
                    <option value="Live Online Interactive">Live Online Interactive</option>
                    <option value="Hybrid (Offline + Online)">Hybrid (Offline + Online)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Preferred Batch Time
                  </label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                  >
                    <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                    <option value="Weekday Morning (10:30 AM – 1:30 PM)">Weekday Morning (10:30 AM – 1:30 PM)</option>
                    <option value="Weekday Afternoon (2:30 PM – 5:30 PM)">Weekday Afternoon (2:30 PM – 5:30 PM)</option>
                    <option value="Flexible / Immediate Available Batch">Flexible / Next Available Batch</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#330A12] mb-1">
                  Your Message or Any Specific Cooking Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. I am a beginner wanting to learn eggless baking for my family..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-[#FAF7F2]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7A1C2D] to-[#BA2D1D] hover:from-[#611323] hover:to-[#96253A] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#7A1C2D]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#7A726B]">
                🔒 We respect your privacy. No spam. You will only receive course updates from Suruchi Food Training.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
