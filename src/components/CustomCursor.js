"use client";

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState('default');
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (cursorRef.current) {
        const cursor = cursorRef.current;
        if (cursorType === 'text') {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        } else {
          cursor.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
        }
        if (hidden) {
          setHidden(false);
        }
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const isLink = element?.tagName === 'A' || 
                      element?.tagName === 'BUTTON' ||
                      element?.closest('a') ||
                      element?.closest('button') ||
                      element?.tagName === 'SELECT' ||
                      element?.role === 'button';
        const isTextInput = element?.tagName === 'INPUT' && 
                            (element?.type === 'text' || 
                            element?.type === 'email' || 
                            element?.type === 'password') ||
                            element?.tagName === 'TEXTAREA';
        if (isTextInput && cursorType !== 'text') {
          setCursorType('text');
        } else if (isLink && cursorType !== 'pointer') {
          setCursorType('pointer');
        } else if (!isTextInput && !isLink && cursorType !== 'default') {
          setCursorType('default');
        }
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorType, hidden]);

  let cursorElement;
  
  switch (cursorType) {
    case 'text':
      cursorElement = (
        <div 
          className="w-1 h-6 bg-white pointer-events-none"
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)' }}
        />
      );
      break;
    case 'pointer':
      cursorElement = (
        <svg 
          width="32" // Increased from 26
          height="32" // Increased from 26
          viewBox="0 0 26 26" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`pointer-events-none ${clicked ? 'scale-90' : 'scale-100'} transition-transform duration-150`}
          style={{ filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.7))' }}
        >
          <path 
            d="M7 3L19 15L13 16L11 21L7 3Z" 
            fill="#60a5fa" // Changed to a light blue color
            stroke="rgba(0, 0, 0, 0.5)" 
            strokeWidth="1.2"
          />
        </svg>
      );
      break;
    default:
      cursorElement = (
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 26 26" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`pointer-events-none ${clicked ? 'scale-90' : 'scale-100'} transition-transform duration-150`}
          style={{ filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.7))' }}
        >
          <path 
            d="M7 3L19 15L13 16L11 21L7 3Z" 
            fill="white" 
            stroke="rgba(0, 0, 0, 0.5)" 
            strokeWidth="1.2"
          />
        </svg>
      );
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[100000] ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
      style={{ willChange: 'transform', transformOrigin: 'center', pointerEvents: 'none' }}
    >
      {cursorElement}
    </div>
  );
};

export default CustomCursor;