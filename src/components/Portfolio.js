"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Download, Filter, Menu, X, ShoppingCart, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import allProjects from '../projects';
import ProjectsSection from './ProjectsSection';
import CustomCursor from './CustomCursor';
import { initSmoothScroll } from '../utils/smoothScroll';
import AnimatedSkillBars from './AnimatedSkillBars';
import ProjectShowcase from './ProjectShowcase';
import ExperienceTimeline from './ExperienceTimeline';
import ParticleBackground from './ParticleBackground';
import TechnologiesShowcase from './TechnologiesShowcase';

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
  "Rz Asset Control Center": 13500,
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
  "Number Recognition Game": 1600,
  "Qanga": 300000,
  "Qanga Steam Uploader": 500,
  "RzCloak": 3200,
  "Backblaze Backup MCP Server": 800
};

const TOTAL_LOC = Object.values(LOC_ESTIMATES).reduce((sum, loc) => sum + loc, 0);

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // New state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // New state for form submission status
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];
  
  const stats = {
    totalProjects: 48,
    uniqueTechnologies: 35,
    estimatedLinesOfCode: TOTAL_LOC,
    estimatedHours: Math.round(TOTAL_LOC * 0.05),
    memoryManipulationProjects: 15,
    apiIntegrations: 10,
    realTimeProjects: 18,
    guiDrivenProjects: 14,
    reverseEngineeringTasks: 15,
    languages: [
      { name: 'C++', percentage: 57, color: 'bg-purple-500' },
      { name: 'AutoIt', percentage: 22, color: 'bg-green-500' },
      { name: 'Rust', percentage: 7, color: 'bg-orange-500' },
      { name: 'C#', percentage: 5, color: 'bg-blue-500' },
      { name: 'C', percentage: 5, color: 'bg-red-500' },
      { name: 'Python', percentage: 3, color: 'bg-yellow-500' },
      { name: 'TypeScript', percentage: 1, color: 'bg-teal-500' },
    ]
  };

  useEffect(() => {
    document.body.classList.add('cursor-none');
    const cleanupScrollListeners = initSmoothScroll();
    return () => {
      document.body.classList.remove('cursor-none');
      if (typeof cleanupScrollListeners === 'function') {
        cleanupScrollListeners();
      }
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // New handler for form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // New handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: language === 'fr' 
          ? 'Veuillez remplir tous les champs' 
          : 'Please fill in all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: language === 'fr'
          ? 'Veuillez entrer une adresse e-mail valide'
          : 'Please enter a valid email address'
      });
      return;
    }
    
    try {
      setFormStatus({
        isSubmitting: true,
        isSubmitted: false,
        error: null
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false
        }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error.message
      });
    }
  };

  return (
    <div className="min-h-screen text-gray-100 relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background with Particle Effect */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-800/70 backdrop-blur-sm shadow-lg z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img 
              src="/favicon.ico" 
              alt="neXuz-dev logo" 
              className="h-8 w-8 transition-transform hover:scale-110"
            />
            <a 
              href="/" 
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
            >
              neXuz-dev
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-3">
              <a 
                href="#skills" 
                className="bg-gray-700/60 text-gray-200 font-medium px-4 py-1.5 rounded-full border border-gray-600 hover:bg-blue-600/70 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md animate-slide-up"
              >
                {language === 'fr' ? 'Compétences' : 'Skills'}
              </a>
              <a 
                href="#projects" 
                className="bg-gray-700/60 text-gray-200 font-medium px-4 py-1.5 rounded-full border border-gray-600 hover:bg-blue-600/70 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md animate-slide-up"
                style={{ animationDelay: '0.1s' }}
              >
                {language === 'fr' ? 'Projets' : 'Projects'}
              </a>
              <a
                href="/store"
                className="bg-gray-700/60 text-gray-200 font-medium px-4 py-1.5 rounded-full border border-gray-600 hover:bg-blue-600/70 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                {language === 'fr' ? 'Boutique' : 'Store'}
              </a>
              <a
                href="#about"
                className="bg-gray-700/60 text-gray-200 font-medium px-4 py-1.5 rounded-full border border-gray-600 hover:bg-blue-600/70 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                {language === 'fr' ? 'À propos' : 'About'}
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-gray-700/60 text-gray-300 hover:bg-blue-600/70 hover:text-white transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-600/60 text-gray-200 rounded-full px-3 py-2 border border-gray-500/50 hover:bg-gray-500/70 transition-all duration-300 animate-fade-in"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800/90 backdrop-blur-sm border-t border-gray-700/50 animate-fade-in">
            <div className="px-4 py-3 space-y-2">
              <a 
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-gray-700/60 rounded transition-all"
              >
                {language === 'fr' ? 'Compétences' : 'Skills'}
              </a>
              <a 
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-gray-700/60 rounded transition-all"
              >
                {language === 'fr' ? 'Projets' : 'Projects'}
              </a>
              <a
                href="/store"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-gray-700/60 rounded transition-all"
              >
                {language === 'fr' ? 'Boutique' : 'Store'}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-gray-700/60 rounded transition-all"
              >
                {language === 'fr' ? 'À propos' : 'About'}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-100 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rémi Job-Dorge</h1>
          <p className="text-xl text-gray-300 mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'fr' ? 'Ingénieur Logiciel Systèmes & Développeur Unreal Engine 5' : 'Systems Software Engineer & Unreal Engine 5 Developer'}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:jobdorge.pro@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors hover:scale-105 duration-300">
              <Mail className="w-5 h-5 mr-2" />
              jobdorge.pro@gmail.com
            </a>
            <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors hover:scale-105 duration-300">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors hover:scale-105 duration-300">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="/CV_Job-Dorge_2025.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors hover:scale-105 duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-300">
              {language === 'fr'
                ? "Ingénieur logiciel systèmes avec plus de 18 ans d'expérience, spécialisé dans le développement C++ Unreal Engine 5 avec forks moteur custom, l'optimisation de performances et la programmation bas-niveau. Basé à Villeneuve-Loubet, France."
                : "Systems software engineer with 18+ years of experience, specialized in Unreal Engine 5 C++ development with custom engine forks, performance optimization, and low-level systems programming. Based in Villeneuve-Loubet, France."
              }
            </p>
          </div>
        </div>
      </header>

      {/* Store CTA */}
      <section className="max-w-6xl mx-auto mt-6 px-4 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <a href="/store" className="block group">
          <div className="relative overflow-hidden rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-gray-800/80 to-purple-900/20 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-600/20">
                  <ShoppingCart size={28} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">
                    {language === 'fr' ? 'Boutique' : 'Store'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {language === 'fr'
                      ? 'Outils MCP, logiciels de protection, analyseurs de performance et plus.'
                      : 'MCP tools, protection software, performance analyzers, and more.'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/80 group-hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 font-medium whitespace-nowrap">
                {language === 'fr' ? 'Voir la boutique' : 'Browse Store'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* At a Glance Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4 relative z-10">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-gray-700/50 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'En bref' : 'At a Glance'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
            {[
              { value: stats.totalProjects, text: language === 'fr' ? 'Projets Réalisés' : 'Projects Completed' },
              { value: stats.uniqueTechnologies, text: language === 'fr' ? 'Technologies Uniques' : 'Unique Technologies' },
              { value: stats.estimatedLinesOfCode.toLocaleString(), text: language === 'fr' ? 'Lignes de Code (Est.)' : 'Lines of Code (Est.)' },
              { value: stats.estimatedHours.toLocaleString(), text: language === 'fr' ? 'Heures de Codage (Est.)' : 'Hours Coding (Est.)' },
              { value: stats.memoryManipulationProjects, text: language === 'fr' ? 'Projets Mémoire' : 'Memory Projects' },
              { value: stats.apiIntegrations, text: language === 'fr' ? 'Intégrations API' : 'API Integrations' },
              { value: stats.realTimeProjects, text: language === 'fr' ? 'Projets Temps Réel' : 'Real-Time Projects' },
              { value: stats.guiDrivenProjects, text: language === 'fr' ? 'Projets GUI' : 'GUI Projects' },
              { value: stats.reverseEngineeringTasks, text: language === 'fr' ? 'Tâches Rétro-Ingénierie' : 'Reverse Eng. Tasks' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-3xl font-semibold text-blue-300 transform hover:scale-110 transition-transform duration-300">{item.value}</p>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 animate-on-scroll opacity-0">
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
                  <div key={index} className="flex items-center animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                    <span className={`w-3 h-3 ${lang.color} rounded-full mr-2 transform hover:scale-125 transition-transform duration-300`}></span>
                    <span className="text-gray-300">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <ProjectShowcase projects={allProjects} language={language} />

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4 scroll-mt-24 relative z-10" id="skills">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'Expertise Technique' : 'Technical Expertise'}
          </h2>
          
          <TechnologiesShowcase language={language} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4 scroll-mt-24 relative z-10" id="projects">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">
            {language === 'fr' ? 'Projets' : 'Projects'}
          </h2>
          <ProjectsSection projects={allProjects} language={language} />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4 scroll-mt-24 relative z-10" id="about">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'À propos de moi' : 'About Me'}
          </h2>
          
          <div className="text-gray-300 space-y-4">
            {language === 'fr' ? (
              <>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                  Basé à Villeneuve-Loubet, France, j'ai plus de 18 ans d'expérience en développement logiciel et plus de 6 ans
                  en tant que Technicien chez SARL Soleo Tech (2017-2023), où j'ai développé une expertise en développement logiciel,
                  optimisation système, automatisation et rétro-ingénierie.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                  En 2025, j'ai repris 99% du développement de Qanga, un jeu multijoueur en monde ouvert sur Unreal Engine 5
                  (projet IolaCorp). Partant de zéro en C++ UE5, j'ai accumulé plus de 2 400 commits en moins d'un an,
                  en développant des forks moteur custom, des systèmes de vertex factory, des shaders HLSL/SM6 et des serveurs dédiés Linux.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
                  Ma passion pour la technologie découle de mon parcours dans le gaming compétitif, notamment en
                  tant qu'ancien joueur professionnel de Counter-Strike (2014-2016) et détenteur de plusieurs records
                  mondiaux en simulation automobile depuis 2015. Cette quête de performance et d'efficacité se reflète
                  dans mon travail, axé sur les systèmes critiques en performance et l'optimisation temps réel.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.5s' }}>
                  Je me spécialise en C++ (Unreal Engine 5), Rust, C# et Python. Mon approche analytique et logique
                  me permet de résoudre des problèmes en les déconstruisant méthodiquement. En dehors du code,
                  je m'intéresse à l'astronomie, la science-fiction et la mythologie.
                </p>
              </>
            ) : (
              <>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                  Based in Villeneuve-Loubet, France, I have 18+ years of experience in software development and over six years
                  as a Technician at SARL Soleo Tech (2017-2023), where I developed expertise in software development,
                  system optimization, automation, and reverse engineering.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                  In 2025, I took over 99% of development on Qanga, an open-world multiplayer game on Unreal Engine 5
                  (IolaCorp project). Starting from zero UE5 C++ experience, I accumulated 2,400+ commits in under a year,
                  building custom engine forks, vertex factory systems, HLSL/SM6 shaders, and dedicated Linux servers.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
                  My passion for technology stems from my background in competitive gaming, notably as a former professional Counter-Strike player
                  (2014-2016) and a holder of multiple world records in racing simulation since 2015. This pursuit of performance and efficiency
                  is reflected in my work, which focuses on performance-critical systems and real-time optimization.
                </p>
                <p className="animate-on-scroll opacity-0" style={{ animationDelay: '0.5s' }}>
                  I specialize in C++ (Unreal Engine 5), Rust, C#, and Python. My analytical and logical approach allows me to
                  solve problems by methodically breaking them down. Beyond coding, I have a strong interest in astronomy,
                  science fiction, and mythology.
                </p>
              </>
            )}
          </div>

          <ExperienceTimeline language={language} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4 relative z-10 scroll-mt-24" id="contact">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            {language === 'fr' ? 'Travaillons Ensemble' : 'Let\'s Work Together'}
          </h2>
          
          <p className="text-gray-300 mb-6">
            {language === 'fr' 
              ? "Vous avez un projet qui nécessite mon expertise ? N'hésitez pas à me contacter pour discuter de la façon dont je peux vous aider." 
              : "Do you have a project that requires my expertise? Feel free to reach out to discuss how I can help you."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:jobdorge.pro@gmail.com" className="hover:text-blue-400 transition-colors">
                    jobdorge.pro@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Github className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                {language === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}
              </h3>
              
              {/* Updated Contact Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">
                    {language === 'fr' ? 'Nom' : 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded border border-gray-700 p-2 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">
                    {language === 'fr' ? 'Email' : 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded border border-gray-700 p-2 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">
                    {language === 'fr' ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded border border-gray-700 p-2 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                {/* Form status messages */}
                {formStatus.error && (
                  <div className="text-red-400 text-sm py-1">
                    {formStatus.error}
                  </div>
                )}
                
                {formStatus.isSubmitted && (
                  <div className="text-green-400 text-sm py-1">
                    {language === 'fr' 
                      ? 'Message envoyé avec succès!' 
                      : 'Message sent successfully!'}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`px-4 py-2 text-white rounded transition-colors ${
                    formStatus.isSubmitting 
                      ? 'bg-blue-800 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {formStatus.isSubmitting 
                    ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...') 
                    : (language === 'fr' ? 'Envoyer' : 'Send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-8 mb-8 px-4 py-6 text-center text-gray-400 bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-700/50 relative z-10 animate-on-scroll opacity-0">
        <p>© neXuz-dev, {new Date().getFullYear()}. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
};

export default Portfolio;