import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative w-[75vw] h-[80vh] bg-black rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-gray-800 hover:bg-gray-500/30 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <video 
          className="w-full h-full object-contain"
          controls
          autoPlay
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal; 