import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import ReactDOM from 'react-dom';

const ScreenshotGallery = ({ screenshots, title, compact = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalElement, setModalElement] = useState(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
      }
      setModalElement(modalRoot);
    }

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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
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

  const ctrl =
    'flex items-center justify-center border border-edge bg-void/90 text-dim transition-colors hover:text-accent';

  const modalContent = modalOpen && (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-void/97" onClick={closeModal}>
      <div className="relative max-h-screen w-full max-w-6xl p-4">
        <img
          src={screenshots[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="mx-auto max-h-[90vh] max-w-full border border-line object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <button onClick={closeModal} className={`absolute right-4 top-4 p-2 ${ctrl}`}>
          <X size={22} />
        </button>

        {screenshots.length > 1 && (
          <>
            <button onClick={prevImage} className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 ${ctrl}`}>
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextImage} className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 ${ctrl}`}>
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 border border-line bg-void/90 px-3 py-1 text-xs tabular-nums text-dim">
              {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className={`relative w-full overflow-hidden border border-line bg-void ${compact ? 'h-48 md:h-64' : 'h-64 md:h-80'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={screenshots[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="absolute bottom-3 right-3 border border-line bg-void/90 px-2 py-0.5 text-xs tabular-nums text-dim">
          {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
        </div>

        <button onClick={openModal} className={`absolute right-3 top-3 p-1.5 ${ctrl}`}>
          <Maximize size={16} />
        </button>

        {screenshots.length > 1 && (
          <>
            <button onClick={prevImage} className={`absolute left-3 top-1/2 -translate-y-1/2 p-1.5 ${ctrl}`}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 ${ctrl}`}>
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {!compact && screenshots.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-void/80 p-2">
            <div className="flex max-w-full space-x-2 overflow-x-auto p-1">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-14 w-20 flex-shrink-0 overflow-hidden border-2 transition-all ${
                    index === currentIndex ? 'border-accent opacity-100' : 'border-line opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={screenshot} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {modalElement && modalOpen && ReactDOM.createPortal(modalContent, modalElement)}
    </>
  );
};

export default ScreenshotGallery;
