import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram, Facebook, Youtube, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { contactInfo, submitEnquiry } = useApp();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    await submitEnquiry({
      fullName: form.name,
      mobileNumber: form.phone,
      whatsappNumber: form.phone,
      email: form.email,
      city: 'Contact Page Submission',
      interestedCourse: form.subject,
      preferredTrainingMode: 'Undecided',
      preferredBatch: 'Undecided',
      message: form.message,
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Contact Suruchi Food Training
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            Have questions about syllabus, upcoming batch slots, or private masterclasses? Reach out to us directly or visit our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#330A12]">
                Official Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-[#330A12] hover:text-[#7A1C2D] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-[#7A1C2D] flex items-center justify-center shrink-0 group-hover:bg-[#7A1C2D] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A726B] block">Phone Number</span>
                    <span className="font-medium text-xs sm:text-sm">{contactInfo.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    'Hello Suruchi Food Training, I am interested in your cooking training. Please share the course details, fees and upcoming batch information.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#330A12] hover:text-emerald-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A726B] block">WhatsApp</span>
                    <span className="font-medium text-xs sm:text-sm">{contactInfo.whatsapp}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-[#330A12] hover:text-[#7A1C2D] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-[#BA2D1D] flex items-center justify-center shrink-0 group-hover:bg-[#BA2D1D] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A726B] block">Email Address</span>
                    <span className="font-medium text-xs sm:text-sm">{contactInfo.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-[#330A12]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A726B] block">Business Hours</span>
                    <span className="text-xs leading-relaxed text-[#5C524B]">{contactInfo.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E8DFC8]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A726B] block mb-3">
                  Connect on Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-pink-600 hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-colors"
                    title="Instagram @suruchifoodtraining"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                    title="YouTube Channel"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-xs flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#330A12]">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-[#5C524B] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Suruchi Food Training. We will review your note and respond back shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', email: '', subject: 'General Question', message: '' });
                  }}
                  className="px-5 py-2.5 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full hover:bg-[#611323] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#330A12]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-[#7A726B] mt-0.5">
                    We respond within 24 hours during working days.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#330A12] mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Suman Sen"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#330A12] mb-1">
                      Phone / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 98300 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#330A12] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. suman@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#330A12] mb-1">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-white"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Course Fee & Batch Inquiry">Course Fee & Batch Inquiry</option>
                      <option value="1-on-1 Private Training">1-on-1 Private Training</option>
                      <option value="Food Business Consultation">Food Business Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you'd like to learn or any questions you have..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC8] text-xs focus:outline-none focus:border-[#7A1C2D] bg-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#7A1C2D] hover:bg-[#611323] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
