import React, { useState } from 'react';
import VideoModal from './VideoModal';
import ImageModal from './ImageModal';

interface FeatureCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, image, videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isVideoFile = videoUrl.toLowerCase().endsWith('.mp4');
  const isImageFile = videoUrl.toLowerCase().endsWith('.png') || videoUrl.toLowerCase().endsWith('.jpg') || videoUrl.toLowerCase().endsWith('.jpeg');

  return (
    <>
      <div className="bg-white rounded-lg border-[1px] border-[#7080A233] overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
           onClick={() => setIsModalOpen(true)}>
        <div className="relative bg-[#F0F6FF] p-2">
          <img src={image} alt={title} className="h-24 w-64 object-cover rounded" />
        </div>
        <div className="py-2 px-4">
          <h3 className="text-xs font-semibold mb-1" style={{ fontSize: '10px' }}>{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-2 h-[28px]" style={{ fontSize: '8px', lineHeight: '12px' }}>{description}</p>
        </div>
      </div>
      {isModalOpen && isVideoFile && (
        <VideoModal 
          videoUrl={videoUrl} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      {isModalOpen && isImageFile && (
        <ImageModal 
          imageUrl={videoUrl} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default FeatureCard; 