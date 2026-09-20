import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Course,
  Workshop,
  GalleryItem,
  StudentCreation,
  VideoItem,
  Testimonial,
  BlogPost,
  FAQItem,
  Enquiry,
  ContactInfo,
  TrainerInfo,
} from '../types';
import {
  INITIAL_COURSES,
  INITIAL_WORKSHOPS,
  INITIAL_GALLERY,
  INITIAL_STUDENT_CREATIONS,
  INITIAL_VIDEOS,
  INITIAL_TESTIMONIALS,
  INITIAL_BLOGS,
  INITIAL_FAQS,
  INITIAL_CONTACT_INFO,
  INITIAL_TRAINER,
} from '../data/initialData';

interface AppContextType {
  courses: Course[];
  workshops: Workshop[];
  gallery: GalleryItem[];
  studentCreations: StudentCreation[];
  videos: VideoItem[];
  testimonials: Testimonial[];
  blogs: BlogPost[];
  faqs: FAQItem[];
  enquiries: Enquiry[];
  contactInfo: ContactInfo;
  trainerInfo: TrainerInfo;

  // Course mutations
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;

  // Workshop mutations
  addWorkshop: (workshop: Workshop) => void;
  updateWorkshop: (workshop: Workshop) => void;
  deleteWorkshop: (id: string) => void;

  // Gallery mutations
  addGalleryItem: (item: GalleryItem) => void;
  updateGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;

  // Student creations mutations
  addStudentCreation: (creation: StudentCreation) => void;
  updateStudentCreation: (creation: StudentCreation) => void;
  deleteStudentCreation: (id: string) => void;

  // Video mutations
  addVideo: (video: VideoItem) => void;
  updateVideo: (video: VideoItem) => void;
  deleteVideo: (id: string) => void;

  // Testimonials mutations
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  // Blog mutations
  addBlog: (blog: BlogPost) => void;
  updateBlog: (blog: BlogPost) => void;
  deleteBlog: (id: string) => void;

  // FAQ mutations
  addFAQ: (faq: FAQItem) => void;
  updateFAQ: (faq: FAQItem) => void;
  deleteFAQ: (id: string) => void;

  // Enquiry mutations
  submitEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  deleteEnquiry: (id: string) => void;

  // Information updates
  updateContactInfo: (info: ContactInfo) => void;
  updateTrainerInfo: (trainer: TrainerInfo) => void;
  resetAllDataToDefault: () => void;

  // Interactive UI Modal States
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  isEnquiryModalOpen: boolean;
  prefilledCourseName: string;
  openEnquiryModal: (courseName?: string) => void;
  closeEnquiryModal: () => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (isOpen: boolean) => void;
  activeBlogReader: BlogPost | null;
  setActiveBlogReader: (blog: BlogPost | null) => void;
  activeLightboxItem: GalleryItem | null;
  setActiveLightboxItem: (item: GalleryItem | null) => void;
  activeVideo: VideoItem | null;
  setActiveVideo: (video: VideoItem | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COURSES: 'sft_courses_v1',
  WORKSHOPS: 'sft_workshops_v1',
  GALLERY: 'sft_gallery_v1',
  STUDENT_CREATIONS: 'sft_creations_v1',
  VIDEOS: 'sft_videos_v1',
  TESTIMONIALS: 'sft_testimonials_v1',
  BLOGS: 'sft_blogs_v1',
  FAQS: 'sft_faqs_v1',
  ENQUIRIES: 'sft_enquiries_v1',
  CONTACT: 'sft_contact_v1',
  TRAINER: 'sft_trainer_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Helper to load or fallback
  const loadInitial = <T,>(key: string, fallback: T): T => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return fallback;
  };

  const [courses, setCourses] = useState<Course[]>(() => loadInitial(STORAGE_KEYS.COURSES, INITIAL_COURSES));
  const [workshops, setWorkshops] = useState<Workshop[]>(() => loadInitial(STORAGE_KEYS.WORKSHOPS, INITIAL_WORKSHOPS));
  const [gallery, setGallery] = useState<GalleryItem[]>(() => loadInitial(STORAGE_KEYS.GALLERY, INITIAL_GALLERY));
  const [studentCreations, setStudentCreations] = useState<StudentCreation[]>(() =>
    loadInitial(STORAGE_KEYS.STUDENT_CREATIONS, INITIAL_STUDENT_CREATIONS)
  );
  const [videos, setVideos] = useState<VideoItem[]>(() => loadInitial(STORAGE_KEYS.VIDEOS, INITIAL_VIDEOS));
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() =>
    loadInitial(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS)
  );
  const [blogs, setBlogs] = useState<BlogPost[]>(() => loadInitial(STORAGE_KEYS.BLOGS, INITIAL_BLOGS));
  const [faqs, setFaqs] = useState<FAQItem[]>(() => loadInitial(STORAGE_KEYS.FAQS, INITIAL_FAQS));
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => loadInitial(STORAGE_KEYS.ENQUIRIES, []));
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() =>
    loadInitial(STORAGE_KEYS.CONTACT, INITIAL_CONTACT_INFO)
  );
  const [trainerInfo, setTrainerInfo] = useState<TrainerInfo>(() =>
    loadInitial(STORAGE_KEYS.TRAINER, INITIAL_TRAINER)
  );

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WORKSHOPS, JSON.stringify(workshops));
  }, [workshops]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STUDENT_CREATIONS, JSON.stringify(studentCreations));
  }, [studentCreations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRAINER, JSON.stringify(trainerInfo));
  }, [trainerInfo]);

  // UI Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [prefilledCourseName, setPrefilledCourseName] = useState<string>('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [activeBlogReader, setActiveBlogReader] = useState<BlogPost | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const openEnquiryModal = (courseName?: string) => {
    setPrefilledCourseName(courseName || '');
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  // Course mutations
  const addCourse = (course: Course) => setCourses(prev => [course, ...prev]);
  const updateCourse = (course: Course) =>
    setCourses(prev => prev.map(c => (c.id === course.id ? course : c)));
  const deleteCourse = (id: string) => setCourses(prev => prev.filter(c => c.id !== id));

  // Workshop mutations
  const addWorkshop = (workshop: Workshop) => setWorkshops(prev => [workshop, ...prev]);
  const updateWorkshop = (workshop: Workshop) =>
    setWorkshops(prev => prev.map(w => (w.id === workshop.id ? workshop : w)));
  const deleteWorkshop = (id: string) => setWorkshops(prev => prev.filter(w => w.id !== id));

  // Gallery mutations
  const addGalleryItem = (item: GalleryItem) => setGallery(prev => [item, ...prev]);
  const updateGalleryItem = (item: GalleryItem) =>
    setGallery(prev => prev.map(g => (g.id === item.id ? item : g)));
  const deleteGalleryItem = (id: string) => setGallery(prev => prev.filter(g => g.id !== id));

  // Student creation mutations
  const addStudentCreation = (creation: StudentCreation) =>
    setStudentCreations(prev => [creation, ...prev]);
  const updateStudentCreation = (creation: StudentCreation) =>
    setStudentCreations(prev => prev.map(s => (s.id === creation.id ? creation : s)));
  const deleteStudentCreation = (id: string) =>
    setStudentCreations(prev => prev.filter(s => s.id !== id));

  // Video mutations
  const addVideo = (video: VideoItem) => setVideos(prev => [video, ...prev]);
  const updateVideo = (video: VideoItem) =>
    setVideos(prev => prev.map(v => (v.id === video.id ? video : v)));
  const deleteVideo = (id: string) => setVideos(prev => prev.filter(v => v.id !== id));

  // Testimonial mutations
  const addTestimonial = (testimonial: Testimonial) =>
    setTestimonials(prev => [testimonial, ...prev]);
  const updateTestimonial = (testimonial: Testimonial) =>
    setTestimonials(prev => prev.map(t => (t.id === testimonial.id ? testimonial : t)));
  const deleteTestimonial = (id: string) => setTestimonials(prev => prev.filter(t => t.id !== id));

  // Blog mutations
  const addBlog = (blog: BlogPost) => setBlogs(prev => [blog, ...prev]);
  const updateBlog = (blog: BlogPost) =>
    setBlogs(prev => prev.map(b => (b.id === blog.id ? blog : b)));
  const deleteBlog = (id: string) => setBlogs(prev => prev.filter(b => b.id !== id));

  // FAQ mutations
  const addFAQ = (faq: FAQItem) => setFaqs(prev => [...prev, faq]);
  const updateFAQ = (faq: FAQItem) =>
    setFaqs(prev => prev.map(f => (f.id === faq.id ? faq : f)));
  const deleteFAQ = (id: string) => setFaqs(prev => prev.filter(f => f.id !== id));

  // Enquiry submissions
  const submitEnquiry = async (data: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    const newEnquiry: Enquiry = {
      ...data,
      id: 'enq-' + Date.now(),
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'New',
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return true;
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => (e.id === id ? { ...e, status } : e)));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  // Info updates
  const updateContactInfo = (info: ContactInfo) => setContactInfo(info);
  const updateTrainerInfo = (trainer: TrainerInfo) => setTrainerInfo(trainer);

  const resetAllDataToDefault = () => {
    setCourses(INITIAL_COURSES);
    setWorkshops(INITIAL_WORKSHOPS);
    setGallery(INITIAL_GALLERY);
    setStudentCreations(INITIAL_STUDENT_CREATIONS);
    setVideos(INITIAL_VIDEOS);
    setTestimonials(INITIAL_TESTIMONIALS);
    setBlogs(INITIAL_BLOGS);
    setFaqs(INITIAL_FAQS);
    setContactInfo(INITIAL_CONTACT_INFO);
    setTrainerInfo(INITIAL_TRAINER);
  };

  return (
    <AppContext.Provider
      value={{
        courses,
        workshops,
        gallery,
        studentCreations,
        videos,
        testimonials,
        blogs,
        faqs,
        enquiries,
        contactInfo,
        trainerInfo,

        addCourse,
        updateCourse,
        deleteCourse,

        addWorkshop,
        updateWorkshop,
        deleteWorkshop,

        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,

        addStudentCreation,
        updateStudentCreation,
        deleteStudentCreation,

        addVideo,
        updateVideo,
        deleteVideo,

        addTestimonial,
        updateTestimonial,
        deleteTestimonial,

        addBlog,
        updateBlog,
        deleteBlog,

        addFAQ,
        updateFAQ,
        deleteFAQ,

        submitEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,

        updateContactInfo,
        updateTrainerInfo,
        resetAllDataToDefault,

        selectedCourse,
        setSelectedCourse,
        isEnquiryModalOpen,
        prefilledCourseName,
        openEnquiryModal,
        closeEnquiryModal,
        isAdminModalOpen,
        setIsAdminModalOpen,
        activeBlogReader,
        setActiveBlogReader,
        activeLightboxItem,
        setActiveLightboxItem,
        activeVideo,
        setActiveVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
