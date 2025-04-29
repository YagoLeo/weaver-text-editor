import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative w-[71vw] h-[80vh] bg-black rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-gray-800 hover:bg-gray-500/30 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt="Full size" 
            className="max-w-full max-h-full object-contain" 
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 