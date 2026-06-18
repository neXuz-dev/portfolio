import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, GripHorizontal } from 'lucide-react';
import ScreenshotGallery from './ScreenshotGallery';

const ProjectShowcase = ({ projects, language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);
  const slideWidth = useRef(0);

  const featuredProjects = projects.filter(project =>
    project.content.en.title === "Qanga" ||
    project.content.en.title === "FH6 GearAI" ||
    project.content.en.title === "RzAudioBuilds" ||
    project.content.en.title === "Rz Asset Control Center" ||
    project.content.en.title === "RziRTool - iRacing Telemetry Overlay" ||
    project.content.en.title === "Qanga Server Manager" ||
    project.content.en.title === "RzCloak"
  );

  const shouldAllowDrag = (target) => {
    const textElements = ['P', 'H3', 'SPAN', 'A', 'BUTTON'];
    let currentNode = target;

    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return false;
    }

    while (currentNode && currentNode !== containerRef.current) {
      if (textElements.includes(currentNode.tagName)) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }

    return true;
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleMouseDown = (e) => {
    if (!shouldAllowDrag(e.target)) return;
    if (e.button !== 0) return;

    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);

    if (containerRef.current) {
      slideWidth.current = containerRef.current.offsetWidth;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const delta = currentX - startX;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > slideWidth.current * 0.2) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    if (!shouldAllowDrag(e.target)) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);

    if (containerRef.current) {
      slideWidth.current = containerRef.current.offsetWidth;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const delta = currentX - startX;
    setDragOffset(delta);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => handleDragEnd();
    const handleGlobalTouchEnd = () => handleDragEnd();

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalTouchEnd);

    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
      clearTimeout(timer);
    };
  }, [activeIndex, isDragging, dragOffset]);

  const calculateTransform = () =>
    `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`;

  if (featuredProjects.length === 0) return null;

  return (
    <section className="mx-auto mt-8 max-w-6xl px-4">
      <div className="panel" ref={containerRef}>
        <div className="panel-head">
          <span>
            <span className="text-accent">##</span>{' '}
            {language === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
          </span>
          <span className="hidden items-center gap-2 text-dim sm:flex">
            <GripHorizontal size={14} />
            {language === 'fr' ? 'glisser' : 'drag'} · {activeIndex + 1}/{featuredProjects.length}
          </span>
        </div>

        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: isDragging ? calculateTransform() : `translateX(-${activeIndex * 100}%)`,
                transitionProperty: isDragging ? 'none' : 'transform',
              }}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex w-full flex-shrink-0 flex-col gap-5 p-5 md:flex-row md:items-center sm:p-6"
                >
                  <div className="relative h-48 w-full overflow-hidden border border-line md:h-64 md:w-1/3">
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <ScreenshotGallery
                        screenshots={project.screenshots}
                        title={project.content[language].title}
                        compact={true}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-raised text-dim">
                        <span className="text-xs uppercase tracking-widest">// no preview</span>
                        <span className="mt-2 text-2xl text-edge">{'</>'}</span>
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 z-10 flex gap-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="border border-edge bg-void/90 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-2/3">
                    <h3 className="mb-2 text-lg font-bold text-fg md:text-2xl">
                      <span className="text-accent">›</span> {project.content[language].title}
                    </h3>
                    <p className="mb-4 select-text text-sm text-dim">
                      {project.content[language].description}
                    </p>
                    <div className="space-y-1.5">
                      {project.content[language].highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex gap-2 text-sm text-fg/90">
                          <span className="text-accent">+</span>
                          <span className="select-text">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-accent transition-colors hover:text-fg"
                    >
                      {language === 'fr' ? 'voir les détails' : 'view details'}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-edge bg-void/90 text-dim transition-colors hover:text-accent"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-edge bg-void/90 text-dim transition-colors hover:text-accent"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 border-t border-line py-3">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 transition-all ${
                index === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-edge hover:bg-dim'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
