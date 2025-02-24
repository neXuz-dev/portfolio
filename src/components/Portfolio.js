"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Download, Filter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import allProjects from '../projects';
import ProjectsSection from './ProjectsSection';

const LOC_ESTIMATES = {
  "Age of Empires Online AI Assistant": 1000,
  "Aimlab Performance Analyzer": 800,
  "Assetto Corsa Smart Shift Optimizer": 1500,
  "Screen Monitoring and Image Recognition Counter": 600,
  "LastWarBot Gameplay Analyzer": 2000,
  "NanoTrigger Input Analyzer": 1200,
  "Orchestra License Dumper": 800,
  "Path of Exile Data Monitor": 1500,
  "Rocket League Memory Analyzer": 1000,
  "RLTool Gameplay Analyzer": 1200,
  "Rz Asset Control Center": 7000,
  "RziRTool - iRacing Telemetry Overlay": 1700,
  "Sloop Auto-Sail Mechanics Study": 900,
  "Perflib Key Identifier": 200,
  "Soleo Tech Manager": 2500,
  "Windows System Configuration Tool": 2000,
  "Test Drive Unlimited Shift Analyzer": 1500,
  "Wo Long Interaction Analyzer": 1200,
  "System Tray Icon Manager": 700,
  "Image Upscaling Discord Bot": 1500,
  "DALL-E Mini Discord Bot": 1200,
  "RzOverlay Game Data Visualizer": 1800,
  "GearAI (Forza Horizon 5) Analyzer": 1000,
  "For Honor Combat Analyzer": 900,
  "Forza Horizon 4 Gear Analyzer": 3000,
  "Genshin Impact Memory Analyzer": 400,
  "Halo MCC Gameplay Analyzer": 800,
  "Lost Ark Helper": 1000,
  "Ninja Gaiden 2 Mechanics Analyzer": 500,
  "Automation and System Utilities in AutoIt3": 1000,
  "Reverse Engineering Game Mechanics": 400,
  "Data Extraction for POS Systems": 2000,
  "Dolibarr ERP Customization": 5000,
  "Unreal Engine 5 Bag End": 6000,
  "Reverse Engineering Construct 3 Game Timer": 300,
  "Remnant ESP Overlay": 1800,
  "WinHTTP CRM Enhancer": 1200,
  "QRCode Generator": 800,
  "TradingView Structure Indicator": 1000,
  "TradingView Market Sessions": 1200,
  "Advanced Trading Strategy": 1500,
  "Corpus Puzzle Solver Study": 500,
  "Wo Long Cheat Table Analyzer": 800,
  "Automated Gameplay Assistant LostWarBot": 2000,
  "Portfolio Website": 1200,
  "RLBot Nexto/Immortal Auto-Switcher": 800,
};

const TOTAL_LOC = Object.values(LOC_ESTIMATES).reduce((sum, loc) => sum + loc, 0);

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];
  const stats = {
    totalProjects: 46,
    uniqueTechnologies: 31,
    estimatedLinesOfCode: TOTAL_LOC,
    estimatedHours: Math.round(TOTAL_LOC * 0.05),
    memoryManipulationProjects: 15,
    apiIntegrations: 8,
    realTimeProjects: 16,
    guiDrivenProjects: 11,
    reverseEngineeringTasks: 15,
    languages: [
      { name: 'C#', percentage: 38, color: 'bg-blue-500' },
      { name: 'AutoIt', percentage: 21, color: 'bg-green-500' },
      { name: 'C++', percentage: 10, color: 'bg-purple-500' },
      { name: 'ASM', percentage: 9, color: 'bg-red-500' },
      { name: 'JavaScript', percentage: 8, color: 'bg-yellow-500' },
      { name: 'Pine Script', percentage: 6, color: 'bg-teal-500' },
      { name: 'Python', percentage: 5, color: 'bg-orange-500' },
      { name: 'PHP', percentage: 3, color: 'bg-pink-500' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.ico" 
              alt="neXuz-dev logo" 
              className="h-8 w-8"
            />
            <a href="/" className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors">
              neXuz-dev
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-gray-200 rounded px-2 py-1 border border-gray-600"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
            
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === 'fr' ? 'Compétences' : 'Skills'}
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === 'fr' ? 'Projets' : 'Projects'}
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === 'fr' ? 'À propos' : 'About'}
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-gray-100">neXuz-dev</h1>
          <p className="text-xl text-gray-300 mt-2">
            {language === 'fr' ? 'Expert en Développement Logiciel & Analyste Technique' : 'Expert Software Developer & Technical Analyst'}
          </p>
          
          <div className="mt-4 flex gap-4 flex-wrap">
            <a href="mailto:jobdorge.pro@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              jobdorge.pro@gmail.com
            </a>
            <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="/CV_Job-Dorge_2024.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          <div className="mt-6">
            <p className="text-gray-300">
              {language === 'fr' 
                ? "Expert en développement logiciel spécialisé dans l'automatisation, la rétro-ingénierie et l'optimisation système. Basé à Villeneuve-Loubet, France, avec plus de 6 ans d'expérience professionnelle dans les solutions techniques."
                : "Expert in software development with a focus on automation, reverse engineering, and system optimization. Based in Villeneuve-Loubet, France, with over 6 years of professional experience in technical solutions."
              }
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto mt-8 px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'En bref' : 'At a Glance'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.totalProjects}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Projets Réalisés' : 'Projects Completed'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.uniqueTechnologies}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Technologies Uniques' : 'Unique Technologies'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.estimatedLinesOfCode.toLocaleString()}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Lignes de Code (Est.)' : 'Lines of Code (Est.)'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.estimatedHours.toLocaleString()}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Heures de Codage (Est.)' : 'Hours Coding (Est.)'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.memoryManipulationProjects}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Projets Mémoire' : 'Memory Projects'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.apiIntegrations}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Intégrations API' : 'API Integrations'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.realTimeProjects}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Projets Temps Réel' : 'Real-Time Projects'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.guiDrivenProjects}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Projets GUI' : 'GUI Projects'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.reverseEngineeringTasks}</p>
              <p className="text-gray-300">{language === 'fr' ? 'Tâches Rétro-Ingénierie' : 'Reverse Eng. Tasks'}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              {language === 'fr' ? 'Distribution des langages' : 'Language Distribution'}
            </h3>
            <div className="space-y-4">
              <div className="flex w-full h-8 rounded-lg overflow-hidden bg-gray-700">
                {stats.languages.map((lang, index) => (
                  <div
                    key={index}
                    className={`${lang.color} h-full`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {stats.languages.map((lang, index) => (
                  <div key={index} className="flex items-center">
                    <span className={`w-3 h-3 ${lang.color} rounded-full mr-2`}></span>
                    <span className="text-gray-300">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4" id="projects">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">
            {language === 'fr' ? 'Projets' : 'Projects'}
          </h2>
          <ProjectsSection projects={allProjects} language={language} />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4" id="about">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'À propos de moi' : 'About Me'}
          </h2>
          
          <div className="text-gray-300 space-y-4">
            {language === 'fr' ? (
              <>
                <p>
                  Basé à Villeneuve-Loubet, France, j'apporte plus de 6 ans d'expérience en tant que 
                  Technicien chez SARL Soleo Tech (2017-2023), où j'ai développé une expertise en 
                  développement logiciel, optimisation système et support technique.
                </p>
                <p>
                  Ma passion pour la technologie découle de mon parcours dans le gaming compétitif, 
                  où j'ai établi plusieurs records mondiaux en simulation automobile depuis 2015. 
                  Cette quête d'excellence se traduit dans mon travail, axé sur l'automatisation, 
                  la rétro-ingénierie et la création de solutions efficaces.
                </p>
                <p>
                  En dehors du code, je m'intéresse à l'astronomie, la musique et la mythologie—des 
                  centres d'intérêt qui nourrissent ma curiosité et mes capacités de résolution de 
                  problèmes. Je suis un autodidacte engagé dans l'apprentissage continu et la 
                  création de solutions techniques impactantes.
                </p>
              </>
            ) : (
              <>
                <p>
                  Based in Villeneuve-Loubet, France, I bring over 6 years of experience as a Technician 
                  at SARL Soleo Tech (2017-2023), where I developed expertise in software development, 
                  system optimization, and technical support.
                </p>
                <p>
                  My passion for technology stems from a background in competitive gaming, where I 
                  achieved multiple world records in simulation racing since 2015. This drive for 
                  excellence translates into my work, focusing on automation, reverse engineering, 
                  and creating efficient solutions.
                </p>
                <p>
                  Outside of coding, I enjoy astronomy, music, and exploring mythology—interests that 
                  fuel my curiosity and problem-solving skills. I'm an autodidact committed to 
                  continuous learning and delivering impactful technical solutions.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 px-4 py-6 text-center text-gray-400">
        <p>© neXuz-dev, {new Date().getFullYear()}. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
};

export default Portfolio;