export type TrainingMode = 'Hands-on Offline' | 'Live Online' | 'Hybrid (Offline + Online)';

export type SkillLevel = 'Beginner Friendly' | 'All Levels' | 'Intermediate' | 'Professional / Entrepreneur';

export interface Course {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  trainingMode: TrainingMode;
  duration: string;
  fee: string;
  originalFee?: string;
  skillLevel: SkillLevel;
  upcomingBatch: string;
  whatYouWillLearn: string[];
  recipesCovered: string[];
  whoShouldJoin: string[];
  classSchedule: string;
  materialsRequired: string;
  certificateProvided: boolean;
  certificateDetails?: string;
  featured?: boolean;
}

export interface Workshop {
  id: string;
  name: string;
  category: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  availableSeats: number;
  totalSeats: number;
  price: string;
  trainer: string;
  registrationDeadline: string;
  limitedSeats: boolean;
  image: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cakes' | 'Bakery' | 'Indian Food' | 'Bengali Food' | 'Snacks' | 'Desserts' | 'Restaurant Style Dishes' | 'Student Creations';
  image: string;
  description?: string;
}

export interface StudentCreation {
  id: string;
  studentName: string;
  dishName: string;
  courseName: string;
  photo: string;
  comment: string;
  batch?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string; // YouTube embed or Instagram Reel URL
  type: 'instagram_reel' | 'youtube' | 'demonstration';
  description: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  courseAttended: string;
  rating: number;
  review: string;
  photo: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Recipes' | 'Cooking Tips' | 'Baking Tips' | 'Kitchen Hacks' | 'Food Business Tips' | 'Student Stories';
  featuredImage: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Enquiry {
  id: string;
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  city: string;
  interestedCourse: string;
  preferredTrainingMode: string;
  preferredBatch: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Archived';
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  businessHours: string;
  classTimings: string;
}

export interface TrainerInfo {
  name: string;
  title: string;
  photo: string;
  bio: string;
  trainingPhilosophy: string;
  experienceSummary: string;
  approach: string[];
  message: string;
}
