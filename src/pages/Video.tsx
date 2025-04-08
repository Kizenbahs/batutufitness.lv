import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { videos } from '../data/videos';
import { PlayCircle, X } from 'lucide-react';

interface VideoCardProps {
  video: typeof videos[0];
  onVideoClick: (video: typeof videos[0]) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onVideoClick }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onVideoClick(video)}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={language === 'lv' ? video.title.lv : video.title.en}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-[#FBBF24]" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {language === 'lv' ? video.title.lv : video.title.en}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {language === 'lv' ? video.description.lv : video.description.en}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#FBBF24] text-sm">
            {new Date(video.date).toLocaleDateString(language === 'lv' ? 'lv-LV' : 'en-US')}
          </span>
          <button className="text-white hover:text-[#FBBF24] transition-colors text-sm">
            {language === 'lv' ? 'Skatīties' : 'Watch'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const VideoModal: React.FC<{ video: typeof videos[0] | null; onClose: () => void }> = ({ video, onClose }) => {
  if (!video) return null;

  // Add autoplay parameter to the video URL
  const videoUrlWithAutoplay = video.videoUrl.includes('?') 
    ? `${video.videoUrl}&autoplay=1` 
    : `${video.videoUrl}?autoplay=1`;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full h-[90vh] max-w-6xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#FBBF24] transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="w-full h-full">
          <iframe
            src={videoUrlWithAutoplay}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VideoPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with H1 */}
      <section className="pt-32 pb-20 relative" style={{ 
        backgroundImage: 'url("/batutu-fitness-maratons.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'lv' ? 'Ielūkojies mūsu treniņos' : 'Take a look at our training'}
            </h1>
            <p className="text-xl font-semibold text-yellow-400">
              {language === 'lv' ? 'Skaties, kā notiek mūsu reālās nodarbības!' : 'Watch how our real classes happen!'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onVideoClick={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
};

export default VideoPage; 