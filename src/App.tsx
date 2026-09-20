/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { FoodGallery } from './components/FoodGallery';
import { StudentCreations } from './components/StudentCreations';
import { VideoGallery } from './components/VideoGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EntrepreneurSection } from './components/EntrepreneurSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { FAQSection } from './components/FAQSection';
import { TrainingLocation } from './components/TrainingLocation';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#330A12] selection:bg-[#7A1C2D] selection:text-white font-sans antialiased">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Section 1 & 2: Hero & Trust Highlights */}
          <Hero />

          {/* Section 3: About Suruchi & Meet Your Trainer */}
          <AboutSection />

          {/* Section 4: Courses & Training Programs */}
          <CoursesSection />

          {/* Section 5: Upcoming Classes & Workshops */}
          <WorkshopsSection />

          {/* Section 6: Food Prepared During Training (Gallery & Lightbox) */}
          <FoodGallery />

          {/* Section 7: Made by Our Students */}
          <StudentCreations />

          {/* Section 8: See Our Training in Action (Videos & Reels) */}
          <VideoGallery />

          {/* Section 9: Why Choose Us */}
          <WhyChooseUs />

          {/* Section 10: Training for Food Entrepreneurs */}
          <EntrepreneurSection />

          {/* Section 11: What Our Students Say (Testimonials) */}
          <TestimonialsSection />

          {/* Section 12: Instagram Community Feed */}
          <InstagramSection />

          {/* Section 13: Frequently Asked Questions */}
          <FAQSection />

          {/* Section 14: Visit Our Training Centre Location */}
          <TrainingLocation />

          {/* Section 15: Contact Us Form & Direct Channels */}
          <ContactSection />

          {/* Section 16: Recipes & Educational Blog */}
          <BlogSection />
        </main>

        {/* Section 17: Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <CourseDetailModal />
        <EnquiryModal />
        <AdminDashboard />

        {/* Floating Utilities */}
        <FloatingWhatsApp />
        <MobileBottomBar />
      </div>
    </AppProvider>
  );
}

