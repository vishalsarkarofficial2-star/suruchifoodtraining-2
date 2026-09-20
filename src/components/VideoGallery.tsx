import React, { useState } from 'react';
import { Play, Instagram, Youtube, Film, X, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VideoItem } from '../types';

export const VideoGallery: React.FC = () => {
  const { videos, contactInfo } = useApp();
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1C2D]/10 text-[#7A1C2D] text-xs font-semibold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              Video Demonstrations & Reels
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#330A12] tracking-tight">
              See Our Training in Action
            </h2>
            <p className="mt-3 text-[#5C524B] text-sm sm:text-base">
              Get an authentic glimpse inside our culinary studio—witness flame control, knife skills, icing piping, and student reactions during live sessions.
            </p>
          </div>

          <div>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D82D7E] via-[#E1306C] to-[#F77737] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-[#E1306C]/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail & Play Overlay */}
                <div
                  onClick={() => setPlayingVideo(video)}
                  className="relative aspect-video overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#7A1C2D] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#7A1C2D] group-hover:text-white transition-all">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-xs text-white">
                    {video.type === 'instagram_reel' ? (
                      <>
                        <Instagram className="w-3 h-3 text-pink-400" />
                        <span>Instagram Reel</span>
                      </>
                    ) : (
                      <>
                        <Youtube className="w-3 h-3 text-red-500" />
                        <span>Training Clip</span>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BA2D1D]">
                    {video.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#330A12] group-hover:text-[#7A1C2D] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-[#5C524B] leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Bottom direct link */}
              <div className="p-6 pt-0">
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#FAF6EE] text-[#330A12] text-xs font-semibold text-center border border-[#E8DFC8] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7A726B]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Preview */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-[#1E1B18] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="font-serif text-sm font-bold truncate max-w-md">
                  {playingVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setPlayingVideo(null)}
                className="p-1 rounded-full text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video preview simulation & direct link */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center text-white">
              <img
                src={playingVideo.thumbnail}
                alt={playingVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs"
              />
              <div className="relative z-10 max-w-md space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E1306C] text-white mx-auto flex items-center justify-center shadow-xl animate-pulse">
                  <Instagram className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{playingVideo.title}</h3>
                  <p className="text-xs text-white/80 mt-1">{playingVideo.description}</p>
                </div>
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E1306C] hover:bg-[#C13584] text-white font-semibold text-xs rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  <span>Open Video on @suruchifoodtraining</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
