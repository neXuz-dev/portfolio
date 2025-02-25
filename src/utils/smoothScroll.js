"use client";

export const initSmoothScroll = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      smoothScrollTo(targetElement.offsetTop - 80, 800); // Offset for fixed header, duration 800ms
    });
  });

  // Add animation class to elements when they scroll into view
  const checkAnimationElements = () => {
    const animationElements = document.querySelectorAll('.animate-on-scroll');
    
    animationElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const triggerPosition = window.innerHeight - 100;
      
      if (elementPosition < triggerPosition) {
        element.classList.add('animate-fade-in-up');
        element.classList.remove('opacity-0');
      }
    });
  };

  // Run once on load and then on scroll
  checkAnimationElements();
  window.addEventListener('scroll', checkAnimationElements);

  // Enhanced smooth scrolling implementation
  
  // Variables for smooth scrolling
  let isScrolling = false;
  let targetPosition = 0;
  let startPosition = 0;
  let startTime = 0;
  let rafId = null;
  const scrollDuration = 600; // ms - reduced from 800 for faster scrolling

  // Use requestAnimationFrame for smooth scroll
  const smoothScrollTo = (target, duration = scrollDuration) => {
    // Cancel any ongoing scroll animation
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    
    isScrolling = true;
    startPosition = window.pageYOffset;
    targetPosition = target;
    startTime = performance.now();
    const totalDistance = targetPosition - startPosition;
    
    // Easing function - easeInOutQuad
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      
      window.scrollTo(0, startPosition + totalDistance * easeProgress);
      
      if (progress < 1) {
        rafId = requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false;
        rafId = null;
      }
    };
    
    rafId = requestAnimationFrame(animateScroll);
  };

  // Override default mousewheel behavior for smoother scrolling
  const smoothMouseWheel = () => {
    // Store the previous scroll position
    let lastScrollTop = window.pageYOffset;
    let accumulatedDelta = 0;
    let wheelTimeout = null;
    
    const onWheel = (e) => {
      e.preventDefault();
      
      // Calculate a smoother delta value
      const delta = e.deltaY;
      
      // Add to the accumulated delta
      accumulatedDelta += delta * 0.7; // Increased sensitivity from 0.5 to 0.7
      
      // Clear existing timeout
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }
      
      // Apply the smooth scroll with a debounce
      if (!isScrolling) {
        const scrollTo = window.pageYOffset + accumulatedDelta;
        smoothScrollTo(scrollTo, 200); // Shorter duration for wheel scrolling - reduced from 300
      }
      
      // Reset accumulated delta after a short delay
      wheelTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 150);
    };
    
    // Add passive: false to ensure preventDefault works
    window.addEventListener('wheel', onWheel, { passive: false });
    
    // Return a cleanup function
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  };
  
  // Activate the smooth mousewheel scrolling
  return smoothMouseWheel();
};