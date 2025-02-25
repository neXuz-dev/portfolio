import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const ProjectShowcase = ({ projects, language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);

  const featuredProjects = projects.filter(project => 
    project.content.en.title === "Rz Asset Control Center" ||
    project.content.en.title === "RziRTool - iRacing Telemetry Overlay" ||
    project.content.en.title === "QRCode Generator" ||
    project.content.en.title === "Image Upscaling Discord Bot" ||
    project.content.en.title === "Unreal Engine 5 Bag End"
  );

  const minSwipeDistance = 50;

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    else if (isRightSwipe) prevSlide();
  };

  const onMouseDown = (e) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (mouseStart !== null) {
      setMouseEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd) return;
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    else if (isRightSwipe) prevSlide();
    setMouseStart(null);
    setMouseEnd(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

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

  if (featuredProjects.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto mt-6 relative overflow-hidden">
      <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
        <span className="w-2 h-8 bg-blue-500 rounded-md mr-3"></span>
        {language === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
      </h3>
      
      <div 
        className="relative bg-gray-800/60 rounded-lg shadow-2xl p-5 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {/* Sliding container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
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
                  <p className="text-gray-300 mb-4">
                    {project.content[language].description}
                  </p>
                  <div className="space-y-2">
                    {project.content[language].highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {highlight}
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