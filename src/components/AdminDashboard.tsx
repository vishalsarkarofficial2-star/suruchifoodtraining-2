import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Save,
  BookOpen,
  Calendar,
  Image as ImageIcon,
  MessageSquare,
  Phone,
  HelpCircle,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
  Eye,
  AlertCircle,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Course, Workshop, GalleryItem, Testimonial, FAQItem } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    workshops,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    enquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    contactInfo,
    updateContactInfo,
    faqs,
    addFAQ,
    updateFAQ,
    deleteFAQ,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'enquiries' | 'courses' | 'workshops' | 'gallery' | 'faqs' | 'testimonials' | 'contact'
  >('enquiries');

  // New Course state
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState<Omit<Course, 'id'>>({
    title: '',
    category: 'Indian Cooking',
    shortDescription: '',
    duration: '2 Days (4 hrs/day)',
    trainingMode: 'Hands-on Offline',
    fee: '₹3,500',
    originalFee: '₹4,500',
    skillLevel: 'Beginner Friendly',
    whatYouWillLearn: ['Spice roasting and grinding', 'Authentic gravy balance', 'Flame control techniques'],
    recipesCovered: ['Signature Gravy', 'Tawa Specialties', 'Marination Science'],
    whoShouldJoin: ['Cooking beginners', 'Homemakers', 'Aspiring food entrepreneurs'],
    classSchedule: 'Weekend: 11:00 AM - 3:00 PM',
    materialsRequired: 'All cooking ingredients provided by Suruchi Food Training.',
    certificateProvided: true,
    upcomingBatch: 'Next Saturday',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    featured: false,
  });

  // New Workshop state
  const [showAddWorkshop, setShowAddWorkshop] = useState(false);
  const [newWorkshop, setNewWorkshop] = useState<Omit<Workshop, 'id'>>({
    name: '',
    date: 'Upcoming Weekend',
    time: '11:00 AM – 4:00 PM',
    location: 'Suruchi Food Training Studio',
    isOnline: false,
    availableSeats: 6,
    totalSeats: 10,
    price: '₹1,800',
    trainer: 'Head Culinary Instructor',
    registrationDeadline: '2 Days Before Batch',
    limitedSeats: true,
    category: 'Masterclass',
    description: 'Intensive hands-on live workshop.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
  });

  // New FAQ state
  const [showAddFAQ, setShowAddFAQ] = useState(false);
  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' });

  // Contact info local edit state
  const [localContact, setLocalContact] = useState(contactInfo);
  const [contactSaved, setContactSaved] = useState(false);

  if (!isAdminModalOpen) return null;

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo(localContact);
    setContactSaved(true);
    setTimeout(() => setContactSaved(false), 2500);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title) return;
    addCourse({
      ...newCourse,
      id: `course-${Date.now()}`,
    });
    setShowAddCourse(false);
    setNewCourse({
      title: '',
      category: 'Indian Cooking',
      shortDescription: '',
      duration: '2 Days (4 hrs/day)',
      trainingMode: 'Hands-on Offline',
      fee: '₹3,500',
      originalFee: '₹4,500',
      skillLevel: 'Beginner Friendly',
      whatYouWillLearn: ['Kitchen safety', 'Technique mastering'],
      recipesCovered: ['Signature Recipe 1', 'Signature Recipe 2'],
      whoShouldJoin: ['Beginners', 'Food Enthusiasts'],
      classSchedule: 'Weekend Batch (11 AM - 3 PM)',
      materialsRequired: 'All ingredients included in studio.',
      certificateProvided: true,
      upcomingBatch: 'Next Weekend',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
      featured: false,
    });
  };

  const handleCreateWorkshop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWorkshop.name) return;
    addWorkshop({
      ...newWorkshop,
      id: `ws-${Date.now()}`,
    });
    setShowAddWorkshop(false);
  };

  const handleCreateFAQ = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFAQ.question || !newFAQ.answer) return;
    addFAQ({
      id: `faq-${Date.now()}`,
      question: newFAQ.question,
      answer: newFAQ.answer,
    });
    setShowAddFAQ(false);
    setNewFAQ({ question: '', answer: '' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 border border-[#E8DFC8] max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFC8] bg-[#330A12] text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7A1C2D] border border-[#D4AF37] flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                Trainer & Admin Control Center
              </h3>
              <p className="text-[11px] text-[#D4AF37]">
                Suruchi Food Training Website Management
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-2.5 bg-[#FAF7F2] border-b border-[#E8DFC8] shrink-0 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'enquiries' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Student Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'courses' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Courses ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'workshops' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Workshops ({workshops.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'gallery' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Food Gallery ({gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'faqs' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs ({faqs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all ${
              activeTab === 'contact' ? 'bg-[#7A1C2D] text-white' : 'text-[#5C524B] hover:bg-[#FAF6EE]'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact & Studio Info</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 bg-white">
          
          {/* TAB 1: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#330A12]">
                    Student Admission Enquiries
                  </h4>
                  <p className="text-xs text-[#7A726B]">
                    Live leads captured through the website and course modals.
                  </p>
                </div>
              </div>

              {enquiries.length === 0 ? (
                <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]">
                  <p className="text-sm font-semibold text-[#330A12]">No student enquiries yet.</p>
                  <p className="text-xs text-[#7A726B] mt-1">When students fill in the enquiry form, they will appear here immediately.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 sm:p-5 rounded-2xl border border-[#E8DFC8] bg-[#FAF7F2] hover:bg-[#FAF6EE] transition-all flex flex-col sm:flex-row justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="font-serif font-bold text-base text-[#330A12]">
                            {enq.fullName}
                          </h5>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            enq.status === 'Enrolled'
                              ? 'bg-emerald-100 text-emerald-800'
                              : enq.status === 'Contacted'
                              ? 'bg-amber-100 text-amber-800'
                              : enq.status === 'New'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-neutral-100 text-neutral-800'
                          }`}>
                            {enq.status}
                          </span>
                          <span className="text-[11px] text-[#7A726B]">
                            {new Date(enq.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#423B36]">
                          <p>
                            <strong>Phone:</strong>{' '}
                            <a href={`tel:${enq.mobileNumber}`} className="text-[#7A1C2D] underline">
                              {enq.mobileNumber}
                            </a>
                          </p>
                          <p>
                            <strong>Course:</strong> {enq.interestedCourse}
                          </p>
                          <p>
                            <strong>Mode:</strong> {enq.preferredTrainingMode}
                          </p>
                          {enq.whatsappNumber && (
                            <p>
                              <strong>WhatsApp:</strong>{' '}
                              <a
                                href={`https://wa.me/${enq.whatsappNumber.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-700 underline"
                              >
                                {enq.whatsappNumber}
                              </a>
                            </p>
                          )}
                          {enq.city && <p><strong>City:</strong> {enq.city}</p>}
                          {enq.preferredBatch && <p><strong>Batch:</strong> {enq.preferredBatch}</p>}
                        </div>

                        {enq.message && (
                          <div className="text-xs bg-white p-2.5 rounded-xl border border-[#E8DFC8] mt-2 italic text-[#5C524B]">
                            "{enq.message}"
                          </div>
                        )}
                      </div>

                      {/* Action status */}
                      <div className="flex sm:flex-col items-center justify-end gap-2 shrink-0">
                        <select
                          value={enq.status}
                          onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                          className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#E8DFC8] bg-white text-[#330A12]"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Enrolled">Enrolled</option>
                          <option value="Archived">Archived</option>
                        </select>

                        <button
                          onClick={() => deleteEnquiry(enq.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: COURSES */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#330A12]">
                    Courses Management
                  </h4>
                  <p className="text-xs text-[#7A726B]">
                    Add, edit fees, batches, and culinary curricula.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddCourse(!showAddCourse)}
                  className="px-4 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddCourse ? 'Cancel' : 'Add New Course'}</span>
                </button>
              </div>

              {/* Add Course Form */}
              {showAddCourse && (
                <form onSubmit={handleCreateCourse} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
                  <h5 className="font-serif font-bold text-sm text-[#330A12]">New Course Information</h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Course Title"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <select
                      value={newCourse.category}
                      onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    >
                      <option value="Indian Cooking">Indian Cooking</option>
                      <option value="Bengali Cuisine">Bengali Cuisine</option>
                      <option value="Bakery & Baking">Bakery & Baking</option>
                      <option value="Cake Making">Cake Making</option>
                      <option value="Snacks & Fast Food">Snacks & Fast Food</option>
                      <option value="Chinese / Indo-Chinese">Chinese / Indo-Chinese</option>
                      <option value="Desserts & Sweets">Desserts & Sweets</option>
                      <option value="Food Business Training">Food Business Training</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Fee (e.g. ₹3,500)"
                      value={newCourse.fee}
                      onChange={(e) => setNewCourse({ ...newCourse, fee: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Duration (e.g. 2 Days)"
                      value={newCourse.duration}
                      onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Next Batch (e.g. Starting Saturday)"
                      value={newCourse.upcomingBatch}
                      onChange={(e) => setNewCourse({ ...newCourse, upcomingBatch: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={newCourse.image}
                      onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Short Description"
                    value={newCourse.shortDescription}
                    onChange={(e) => setNewCourse({ ...newCourse, shortDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                  />

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddCourse(false)}
                      className="px-4 py-2 border border-[#E8DFC8] text-xs font-semibold rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full"
                    >
                      Save Course
                    </button>
                  </div>
                </form>
              )}

              {/* Course items */}
              <div className="space-y-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-2xl border border-[#E8DFC8] flex items-center justify-between gap-4 bg-[#FAF7F2]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <h5 className="font-serif font-bold text-sm text-[#330A12] truncate">
                          {course.title}
                        </h5>
                        <p className="text-[11px] text-[#7A726B]">
                          {course.category} • {course.duration} • <span className="font-semibold text-[#7A1C2D]">{course.fee}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateCourse({ ...course, featured: !course.featured })}
                        className={`px-2.5 py-1 text-[10px] font-bold rounded-md border ${
                          course.featured
                            ? 'bg-[#D4AF37] text-[#330A12] border-[#D4AF37]'
                            : 'bg-white text-[#7A726B] border-[#E8DFC8]'
                        }`}
                      >
                        {course.featured ? 'Featured' : 'Standard'}
                      </button>

                      <button
                        onClick={() => deleteCourse(course.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete course"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WORKSHOPS */}
          {activeTab === 'workshops' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#330A12]">
                    Upcoming Workshops & Classes
                  </h4>
                  <p className="text-xs text-[#7A726B]">
                    Manage schedules, available seats, and "Limited Seats Available" markers.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddWorkshop(!showAddWorkshop)}
                  className="px-4 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddWorkshop ? 'Cancel' : 'New Workshop'}</span>
                </button>
              </div>

              {/* Add Workshop Form */}
              {showAddWorkshop && (
                <form onSubmit={handleCreateWorkshop} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Workshop Name"
                      value={newWorkshop.name}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, name: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Date (e.g. Sunday, Oct 12)"
                      value={newWorkshop.date}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Price (e.g. ₹1,800)"
                      value={newWorkshop.price}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, price: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="number"
                      placeholder="Available Seats"
                      value={newWorkshop.availableSeats}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, availableSeats: parseInt(e.target.value) || 0 })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Deadline (e.g. 2 Days Prior)"
                      value={newWorkshop.registrationDeadline}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, registrationDeadline: e.target.value })}
                      className="px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                    />
                    <div className="flex items-center gap-2 px-3 py-2 text-xs">
                      <input
                        type="checkbox"
                        id="limitedSeats"
                        checked={newWorkshop.limitedSeats}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, limitedSeats: e.target.checked })}
                      />
                      <label htmlFor="limitedSeats" className="text-[#330A12] font-semibold">
                        Tag "Limited Seats Available"
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full"
                    >
                      Publish Workshop
                    </button>
                  </div>
                </form>
              )}

              {/* Workshops List */}
              <div className="space-y-3">
                {workshops.map((ws) => (
                  <div
                    key={ws.id}
                    className="p-4 rounded-2xl border border-[#E8DFC8] bg-[#FAF7F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-serif font-bold text-base text-[#330A12]">
                          {ws.name}
                        </h5>
                        {ws.limitedSeats && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">
                            Limited Seats
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5C524B] mt-0.5">
                        {ws.date} • {ws.time} • <strong>{ws.availableSeats}/{ws.totalSeats} seats remaining</strong> • {ws.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateWorkshop({ ...ws, limitedSeats: !ws.limitedSeats })}
                        className="px-3 py-1.5 text-xs rounded-xl border border-[#E8DFC8] bg-white hover:bg-[#FAF6EE] text-[#330A12]"
                      >
                        Toggle "Limited Seats"
                      </button>

                      <button
                        onClick={() => deleteWorkshop(ws.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#330A12]">
                    Food Gallery Management
                  </h4>
                  <p className="text-xs text-[#7A726B]">
                    Images displayed in the culinary showcase and modal lightbox.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-2xl overflow-hidden aspect-square border border-[#E8DFC8] group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between text-white text-[11px]">
                      <span className="font-bold">{item.title}</span>
                      <button
                        onClick={() => deleteGalleryItem(item.id)}
                        className="p-1.5 bg-red-600 rounded-lg text-white self-end hover:bg-red-700"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#330A12]">
                    FAQ Questions & Answers
                  </h4>
                  <p className="text-xs text-[#7A726B]">
                    Fully customizable answers to prospective student questions.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddFAQ(!showAddFAQ)}
                  className="px-4 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddFAQ ? 'Cancel' : 'Add FAQ'}</span>
                </button>
              </div>

              {showAddFAQ && (
                <form onSubmit={handleCreateFAQ} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Question (e.g. Do you provide certificates?)"
                    value={newFAQ.question}
                    onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                  />
                  <textarea
                    rows={3}
                    required
                    placeholder="Detailed Answer"
                    value={newFAQ.answer}
                    onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl bg-white"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full"
                    >
                      Save FAQ
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-3">
                {faqs.map((f) => (
                  <div
                    key={f.id}
                    className="p-4 rounded-2xl border border-[#E8DFC8] bg-[#FAF7F2] space-y-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h5 className="font-serif font-bold text-sm text-[#330A12]">
                        {f.question}
                      </h5>
                      <button
                        onClick={() => deleteFAQ(f.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-[#5C524B] leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT INFO */}
          {activeTab === 'contact' && (
            <form onSubmit={handleSaveContact} className="space-y-4 max-w-2xl">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#330A12]">
                  Training Studio Contact Details
                </h4>
                <p className="text-xs text-[#7A726B]">
                  Changes here immediately update the website headers, footer, and WhatsApp buttons.
                </p>
              </div>

              {contactSaved && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Contact info successfully saved!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={localContact.phone}
                    onChange={(e) => setLocalContact({ ...localContact, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={localContact.whatsapp}
                    onChange={(e) => setLocalContact({ ...localContact, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">Email</label>
                  <input
                    type="email"
                    value={localContact.email}
                    onChange={(e) => setLocalContact({ ...localContact, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">Instagram Profile URL</label>
                  <input
                    type="url"
                    value={localContact.instagramUrl}
                    onChange={(e) => setLocalContact({ ...localContact, instagramUrl: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#330A12] mb-1">Studio Address</label>
                <input
                  type="text"
                  value={localContact.address}
                  onChange={(e) => setLocalContact({ ...localContact, address: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">Landmark</label>
                  <input
                    type="text"
                    value={localContact.landmark}
                    onChange={(e) => setLocalContact({ ...localContact, landmark: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#330A12] mb-1">Business Hours</label>
                  <input
                    type="text"
                    value={localContact.businessHours}
                    onChange={(e) => setLocalContact({ ...localContact, businessHours: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E8DFC8] rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#7A1C2D] text-white text-xs font-semibold rounded-full flex items-center gap-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Contact Details</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
