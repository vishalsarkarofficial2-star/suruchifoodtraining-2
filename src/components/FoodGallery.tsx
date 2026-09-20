import React, { useState, useMemo } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GalleryItem } from '../types';

export const FoodGallery: React.FC = () => {
  const { gallery, activeLightboxItem, setActiveLightboxItem } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cakes',
    'Bakery',
    'Indian Food',
    'Bengali Food',
    'Snacks',
    'Desserts',
    'Restaurant Style Dishes',
    'Student Creations',
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return gallery;
    return gallery.filter((item) => item.category === activeCategory);
  }, [gallery, activeCategory]);

  const currentIndex = activeLightboxItem
    ? filteredItems.findIndex((it) => it.id === activeLightboxItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setActiveLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveLightboxItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            Culinary Visual Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
            Food Prepared During Training
          </h2>
          <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
            Every dish here is prepared inside our training kitchen during practical cooking and baking sessions. Click on any image to inspect textures, glazes, and details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#7A1C2D] text-white shadow-sm'
                  : 'bg-white text-[#423B36] border border-[#E8DFC8] hover:bg-[#FAF7F2] hover:text-[#7A1C2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#E8DFC8]/40 border border-[#E8DFC8] shadow-xs cursor-pointer hover:shadow-xl hover:border-[#7A1C2D]/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-bold leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <span className="mt-2 text-[11px] text-white/90 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full screen</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxItem(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Lightbox Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] border-2 border-white/20 shadow-2xl bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            
            {/* Caption underneath */}
            <div className="mt-4 text-center text-white px-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {activeLightboxItem.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {activeLightboxItem.title}
              </h3>
              {activeLightboxItem.description && (
                <p className="text-xs text-neutral-300 mt-1.5">
                  {activeLightboxItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
