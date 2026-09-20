import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InstagramSection: React.FC = () => {
  const { contactInfo } = useApp();

  const instaFeeds = [
    {
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
      caption: 'Live inside our Kolkata studio! Students practicing mustard paste tempering.',
      likes: '142',
      comments: '18',
    },
    {
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
      caption: 'Crisp buttercream rosettes and ganache drip demo during day 3 of cake art.',
      likes: '289',
      comments: '34',
    },
    {
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
      caption: 'Festive Bengali bhog thali prepared by our weekend batch students.',
      likes: '356',
      comments: '42',
    },
    {
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
      caption: 'Aroma of slow-dum biryani filling the studio kitchen right now!',
      likes: '412',
      comments: '51',
    },
    {
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      caption: 'Freshly baked rosemary & sea salt focaccia with olive oil dimples.',
      likes: '198',
      comments: '23',
    },
    {
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80',
      caption: 'Mastering high flame wok tossing for non-soggy hakka noodles.',
      likes: '267',
      comments: '29',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              Social Community
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
              Follow Our Food Journey
            </h2>
            <p className="mt-2 text-[#5C524B] text-sm sm:text-base">
              Catch daily stories, behind-the-scenes student bloopers, recipe tips, and live batch updates on Instagram.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#D82D7E] via-[#E1306C] to-[#F77737] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-[#E1306C]/25 transition-all hover:scale-[1.02]"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram ({contactInfo.instagramHandle})</span>
            </a>
          </div>
        </div>

        {/* 6-Grid Instagram Feed simulation with interactive links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaFeeds.map((feed, idx) => (
            <a
              key={idx}
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#FAF6EE] border border-[#E8DFC8] shadow-xs cursor-pointer block"
            >
              <img
                src={feed.image}
                alt="Suruchi Food Training Instagram Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with Instagram stats */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white text-xs">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </div>
                
                <p className="text-[11px] line-clamp-3 leading-snug">
                  {feed.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                    {feed.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-white" />
                    {feed.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Small brand banner */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#7A726B]">
            Tag <span className="font-semibold text-[#7A1C2D]">@suruchifoodtraining</span> or use <span className="font-semibold text-[#BA2D1D]">#SuruchiFoodTraining</span> to be featured on our official channel!
          </p>
        </div>

      </div>
    </section>
  );
};
