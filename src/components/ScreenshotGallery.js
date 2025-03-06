import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import ReactDOM from 'react-dom';

const ScreenshotGallery = ({ screenshots, title, compact = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalElement, setModalElement] = useState(null);
  
  useEffect(() => {
    // Create portal target for modal if needed
    if (typeof document !== 'undefined') {
      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
      }
      setModalElement(modalRoot);
    }
    
    // Clean up function
    return () => {
      if (modalOpen) {
        document.body.style.overflow = 'auto';
      }
    };
  }, []);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openModal = (e) => {
    e.stopPropagation();
    setModalOpen(true);
    // Prevent scrolling when the modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (!modalOpen) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage(e);
    } else if (e.key === 'ArrowLeft') {
      prevImage(e);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  // Create the modal JSX
  const modalContent = modalOpen && (
    <div 
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative max-w-6xl max-h-screen p-4 w-full">
        <img 
          src={screenshots[currentIndex]} 
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-full object-contain mx-auto"
          onClick={(e) => e.stopPropagation()}
        />
        
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700"
        >
          <X size={24} />
        </button>
        
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/80 text-white px-3 py-1 rounded-full">
              {currentIndex + 1} / {screenshots.length}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div 
        className={`relative ${compact ? 'h-48 md:h-64' : 'h-64 md:h-80'} w-full bg-gray-900/70 rounded-lg overflow-hidden shadow-inner`}
      >
        {/* Current image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={screenshots[currentIndex]} 
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="h-full w-full object-contain"
          />
        </div>
        
        {/* Screenshot count indicator */}
        <div className="absolute bottom-3 right-3 bg-gray-900/70 text-gray-200 text-sm px-2 py-1 rounded">
          {currentIndex + 1} / {screenshots.length}
        </div>
        
        {/* Expand button */}
        <button
          onClick={openModal}
          className="absolute top-3 right-3 bg-gray-900/70 text-gray-200 p-1.5 rounded-full hover:bg-gray-800"
        >
          <Maximize size={18} />
        </button>
        
        {/* Navigation arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/70 text-gray-200 p-1.5 rounded-full hover:bg-gray-800"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/70 text-gray-200 p-1.5 rounded-full hover:bg-gray-800"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        
        {/* Thumbnail navigation for non-compact view */}
        {!compact && screenshots.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-gradient-to-t from-gray-900/80 to-transparent">
            <div className="flex space-x-2 overflow-x-auto p-1 max-w-full">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 h-14 w-20 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                >
                  <img 
                    src={screenshot} 
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Render modal using portal to ensure it's at the top level of the DOM */}
      {modalElement && modalOpen && ReactDOM.createPortal(modalContent, modalElement)}
    </>
  );
};

export default ScreenshotGallery;