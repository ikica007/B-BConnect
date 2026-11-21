import { useState } from 'react';
import { ArrowUpRight, Play, Image as ImageIcon, Video, X, Maximize2, Sparkles, Film, Eye } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { useLanguage } from '../context/LanguageContext';
import { GalleryTranslationItem } from '../i18n/translations';

export function Gallery() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'fotos' | 'videos' | 'tiefbau' | 'spleissen' | 'hausanschluss'>('all');
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);

  const selectedMedia: GalleryTranslationItem | null = selectedMediaId
    ? t.gallery.items.find((item) => item.id === selectedMediaId) || null
    : null;

  const filteredItems = t.gallery.items.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'fotos') return item.type === 'image';
    if (activeTab === 'videos') return item.type === 'video';
    if (activeTab === 'tiefbau') return item.category === 'tiefbau';
    if (activeTab === 'spleissen') return item.category === 'spleissen';
    if (activeTab === 'hausanschluss') return item.category === 'hausanschluss' || item.category === 'verteiler';
    return true;
  });

  return (
    <section id="galerie" className="py-24 md:py-36 bg-transparent border-t border-navy-700/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-electric/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.15)]">
            <ArrowUpRight size={16} /> <TextRoll center>{t.gallery.badge}</TextRoll>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite tracking-tight uppercase max-w-4xl leading-[1.15]">
            <TextRoll center>{t.gallery.headingLine1}</TextRoll>{' '}
            <span className="text-electric block mt-2"><TextRoll center>{t.gallery.headingLine2}</TextRoll></span>
          </h2>
          <p className="text-coolgray text-base md:text-xl font-light max-w-3xl mt-6">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: 'all', label: t.gallery.tabs.all, icon: Sparkles },
            { id: 'fotos', label: t.gallery.tabs.fotos, icon: ImageIcon },
            { id: 'videos', label: t.gallery.tabs.videos, icon: Film },
            { id: 'tiefbau', label: t.gallery.tabs.tiefbau },
            { id: 'spleissen', label: t.gallery.tabs.spleissen },
            { id: 'hausanschluss', label: t.gallery.tabs.hausanschluss },
          ].map((tab) => {
            const IconC = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-300 border ${
                  isActive
                    ? 'bg-electric text-navy-900 border-electric shadow-[0_0_20px_rgba(0,163,255,0.4)]'
                    : 'bg-navy-800/80 text-coolgray border-navy-700 hover:border-electric/50 hover:text-offwhite'
                }`}
              >
                {IconC && <IconC size={15} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Media Display */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMediaId(item.id)}
              className="group bg-navy-800/80 border border-navy-700 rounded-2xl overflow-hidden hover:border-electric/60 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer shadow-xl relative flex flex-col justify-between"
            >
              {/* Media Preview Container */}
              <div className="h-60 relative overflow-hidden bg-navy-950">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                {/* Top Badge (Photo vs Video) */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-navy-900/90 backdrop-blur-md border border-white/10 text-offwhite text-[10px] font-bold px-3 py-1 rounded-full">
                  {item.type === 'video' ? (
                    <>
                      <Video size={12} className="text-electric animate-pulse" />
                      <span className="text-electric">{t.gallery.badgeVideo}</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={12} className="text-coolgray" />
                      <span>{t.gallery.badgePhoto}</span>
                    </>
                  )}
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-navy-900/40 backdrop-blur-[2px]">
                  {item.type === 'video' ? (
                    <div className="w-14 h-14 rounded-full bg-electric text-navy-900 flex items-center justify-center shadow-[0_0_25px_rgba(0,163,255,0.8)] scale-90 group-hover:scale-100 transition-transform">
                      <Play size={26} fill="currentColor" className="ml-1" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-navy-900/90 border border-electric/60 text-electric flex items-center justify-center shadow-lg">
                      <Maximize2 size={20} />
                    </div>
                  )}
                </div>

                {/* Bottom Location Tag */}
                <div className="absolute bottom-3 left-3 z-10 text-[10px] uppercase font-mono tracking-widest text-coolgray bg-navy-900/80 px-2.5 py-1 rounded-md border border-navy-700">
                  📍 {item.location}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-navy-800/90">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-electric block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-offwhite group-hover:text-electric transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                
                <div className="mt-4 pt-3 border-t border-navy-700/60 flex items-center justify-between text-[11px] font-bold text-coolgray group-hover:text-electric transition-colors">
                  <span>{t.gallery.viewZoom}</span>
                  <Eye size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Video Modal Dialog */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedMediaId(null)}
        >
          <div 
            className="bg-navy-900 border border-navy-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="p-5 border-b border-navy-700/80 flex items-center justify-between bg-navy-950">
              <div className="flex items-center gap-3">
                <span className="bg-electric/20 border border-electric/40 text-electric text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedMedia.type === 'video' ? t.gallery.modalVideoTag : t.gallery.modalPhotoTag}
                </span>
                <span className="text-xs text-coolgray font-mono hidden sm:inline-block">
                  📍 {selectedMedia.location}
                </span>
              </div>
              <button 
                onClick={() => setSelectedMediaId(null)}
                className="w-10 h-10 rounded-full bg-navy-800 border border-navy-700 hover:border-electric text-offwhite hover:text-electric flex items-center justify-center transition-colors"
                aria-label={t.gallery.closeLabel}
              >
                <X size={20} />
              </button>
            </div>

            {/* Media Content Body */}
            <div className="relative bg-black flex-1 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              {selectedMedia.type === 'video' && selectedMedia.videoUrl ? (
                <video 
                  src={selectedMedia.videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full max-h-[60vh] object-contain"
                />
              ) : (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title} 
                  className="w-full h-full max-h-[60vh] object-contain"
                />
              )}
            </div>

            {/* Footer Information */}
            <div className="p-6 bg-navy-900 border-t border-navy-700/80">
              <span className="text-xs uppercase tracking-widest text-electric font-bold block mb-1">
                {selectedMedia.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-offwhite mb-2">
                {selectedMedia.title}
              </h3>
              <p className="text-xs sm:text-sm text-coolgray font-light">
                {t.gallery.modalFooterPrefix} {selectedMedia.location}.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
