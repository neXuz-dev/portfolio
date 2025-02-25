"use client";

import { useState, useEffect, useRef } from 'react';

const AnimatedSkillBars = ({ language }) => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  
  const skills = [
    {
      id: 'systemProgramming',
      name: language === 'fr' ? 'Programmation Système' : 'System Programming',
      percentage: 95,
      color: 'bg-blue-500',
      description: language === 'fr' 
        ? 'Manipulation de mémoire, APIs système et optimisation bas niveau.' 
        : 'Memory manipulation, system APIs and low-level optimization.',
    },
    {
      id: 'reverseEngineering',
      name: language === 'fr' ? 'Rétro-ingénierie' : 'Reverse Engineering',
      percentage: 90,
      color: 'bg-purple-500',
      description: language === 'fr' 
        ? 'Analyse de binaires, décompilation et étude des structures de données.' 
        : 'Binary analysis, decompilation and data structure examination.',
    },
    {
      id: 'automation',
      name: language === 'fr' ? 'Automatisation' : 'Automation',
      percentage: 88,
      color: 'bg-green-500',
      description: language === 'fr' 
        ? 'Création de workflows et d\'outils pour rationaliser les processus.' 
        : 'Creating workflows and tools to streamline processes.',
    },
    {
      id: 'uiDevelopment',
      name: language === 'fr' ? 'Développement UI' : 'UI Development',
      percentage: 85,
      color: 'bg-yellow-500',
      description: language === 'fr' 
        ? 'Interfaces intuitives avec React, WPF et Windows Forms.' 
        : 'Intuitive interfaces with React, WPF and Windows Forms.',
    },
    {
      id: 'apiIntegration',
      name: language === 'fr' ? 'Intégration d\'API' : 'API Integration',
      percentage: 82,
      color: 'bg-red-500',
      description: language === 'fr' 
        ? 'Connecter des services et des systèmes via des API REST, WS, et plus.' 
        : 'Connecting services and systems via REST APIs, WS, and more.',
    },
    {
      id: 'gameIntegration',
      name: language === 'fr' ? 'Intégration de Jeux' : 'Game Integration',
      percentage: 92,
      color: 'bg-teal-500',
      description: language === 'fr' 
        ? 'Analyse de moteurs de jeu et développement d\'outils connexes.' 
        : 'Game engine analysis and related tool development.',
    }
  ];

  // Use Intersection Observer to detect when skills are visible
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="py-4" ref={skillsRef}>
      <div className="space-y-6 mt-8">
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="relative"
            onMouseEnter={() => setActiveSkill(skill.id)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <span className="text-gray-300">{skill.percentage}%</span>
            </div>
            
            <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`${skill.color} h-full rounded-full transform-gpu`}
                style={{ 
                  width: isVisible ? `${skill.percentage}%` : '0%',
                  transition: 'width 1s ease-out'
                }}
              ></div>
            </div>
            
            {activeSkill === skill.id && (
              <div className="absolute mt-2 py-2 px-3 bg-gray-800 text-gray-300 text-sm rounded shadow-lg border border-gray-700 transform-gpu animate-fade-in-up z-10">
                {skill.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSkillBars;