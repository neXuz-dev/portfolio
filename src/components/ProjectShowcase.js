import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, GripHorizontal } from 'lucide-react';

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
    project.content.en.title === "Rz Asset Control Center" ||
    project.content.en.title === "RziRTool - iRacing Telemetry Overlay" ||
    project.content.en.title === "QRCode Generator" ||
    project.content.en.title === "Image Upscaling Discord Bot" ||
    project.content.en.title === "Unreal Engine 5 Bag End"
  );

  // Function to check if we should allow dragging based on the target element
  const shouldAllowDrag = (target) => {
    // Don't initiate drag on text elements or their descendants
    const textElements = ['P', 'H3', 'SPAN', 'A', 'BUTTON'];
    let currentNode = target;
    
    // Check if the user is trying to select text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return false;
    }
    
    // Walk up the DOM tree to see if we clicked on or inside a text element
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
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  };

  const handleMouseDown = (e) => {
    // Skip if they're clicking on a text element
    if (!shouldAllowDrag(e.target)) return;
    
    // Only handle left mouse button
    if (e.button !== 0) return;
    
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    
    // Measure the slide width when we start dragging
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
    
    // Calculate which slide to snap to based on drag distance
    if (Math.abs(dragOffset) > slideWidth.current * 0.2) {
      if (dragOffset > 0) {
        // Dragged right - go to previous slide
        prevSlide();
      } else {
        // Dragged left - go to next slide
        nextSlide();
      }
    }
    
    // Reset drag offset
    setDragOffset(0);
  };

  // Handle touch events
  const handleTouchStart = (e) => {
    // Skip if they're touching on a text element
    if (!shouldAllowDrag(e.target)) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    
    // Measure the slide width when we start dragging
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
    // Add global mouse up and touch end listeners
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

  const getTagColor = (tag) => {
    const colorMap = {
      'C#': 'bg-blue-900/30 text-blue-300 border-blue-800',
      'C++': 'bg-purple-900/30 text-purple-300 border-purple-800',
      'Python': 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
      'ASM': 'bg-red-900/30 text-red-300 border-red-800',
      'AutoIt': 'bg-green-900/30 text-green-300 border-green-800',
      'Unreal Engine 5': 'bg-indigo-900/30 text-indigo-300 border-indigo-800',
      'JavaScript': 'bg-amber-900/30 text-amber-300 border-amber-800',
      'React': 'bg-cyan-900/30 text-cyan-300 border-cyan-800',
      'Discord.py': 'bg-violet-900/30 text-violet-300 border-violet-800',
      'ESRGAN': 'bg-pink-900/30 text-pink-300 border-pink-800',
      'ImGui.NET': 'bg-teal-900/30 text-teal-300 border-teal-800',
      'Entity Framework': 'bg-rose-900/30 text-rose-300 border-rose-800',
      'Blender': 'bg-orange-900/30 text-orange-300 border-orange-800'
    };
    return colorMap[tag] || 'bg-gray-900/30 text-gray-300 border-gray-800';
  };

  const calculateTransform = () => {
    // Normal sliding plus any drag offset
    return `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`;
  };

  if (featuredProjects.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mt-6 relative overflow-hidden">
      <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center px-4">
        <span className="w-2 h-8 bg-blue-500 rounded-md mr-3"></span>
        {language === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
      </h3>
      
      <div 
        className="relative bg-gray-800/60 rounded-lg shadow-2xl p-5 backdrop-blur-sm border border-gray-700/50 overflow-hidden mx-4"
        ref={containerRef}
      >
        {/* Drag handle indicator */}
        <div className="absolute top-2 right-16 md:right-20 z-10 flex items-center gap-2 text-gray-400 text-sm">
          <GripHorizontal size={16} />
          <span className="hidden md:inline">{language === 'fr' ? 'Glisser pour naviguer' : 'Drag to navigate'}</span>
        </div>
        
        {/* Draggable container */}
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
              transform: isDragging 
                ? calculateTransform() 
                : `translateX(-${activeIndex * 100}%)`,
              transitionProperty: isDragging ? 'none' : 'transform'
            }}
          >
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="w-full md:w-1/3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700/60 to-gray-900/80 h-48 md:h-64 flex items-center justify-center relative">
                  <div className="text-6xl opacity-60 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {project.tags.includes('C#') ? '🔷' :
                     project.tags.includes('Python') ? '🐍' :
                     project.tags.includes('C++') ? '⚙️' :
                     project.tags.includes('Unreal Engine 5') ? '🎮' :
                     project.tags.includes('AutoIt') ? '⚡' : '💻'}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded border ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.content[language].title}
                  </h3>
                  <p className="text-gray-300 mb-4 select-text">
                    {project.content[language].description}
                  </p>
                  <div className="space-y-2">
                    {project.content[language].highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span className="select-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 flex items-center text-blue-300 hover:text-blue-200 transition-colors group"
                  >
                    {language === 'fr' ? 'Voir les détails' : 'View details'}
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-500 w-5' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          onClick={prevSlide}
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          onClick={nextSlide}
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectShowcase;