"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Download } from 'lucide-react';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  // Featured Projects
  const featuredProjects = [
    {
      title: "Rz Asset Control Center",
      description: "A robust web application for cryptocurrency asset management and automated trading with KuCoin integration.",
      tags: ["ASP.NET Core", "Entity Framework", "KuCoin API", "WebSocket", "PostgreSQL"],
      highlights: [
        "Secure authentication with 2FA implementation",
        "Real-time data updates via WebSocket",
        "Automated Dollar-Cost Averaging (DCA) trading bot",
        "Dynamic UI with homemade HTML generation"
      ]
    },
    {
      title: "RziRTool - iRacing Telemetry Overlay",
      description: "A real-time telemetry visualization tool for iRacing using advanced graphics rendering.",
      tags: ["C#", "ImGui.NET", "Veldrid", "MVVM", "Async Programming"],
      highlights: [
        "Customizable real-time RPM and tire temperature displays",
        "Advanced DirectX rendering with layered windows",
        "MVVM architecture for maintainability",
        "Hotkey-toggleable overlay with persistent settings"
      ]
    },
    {
      title: "Assetto Corsa Smart Shift Optimizer",
      description: "A tool for analyzing and optimizing gear shifting patterns in Assetto Corsa, built to study real-time data processing.",
      tags: ["C#", ".NET", "Windows API", "Memory Manipulation"],
      highlights: [
        "Dynamic memory address resolution for data analysis",
        "Real-time extraction of RPM and gear data",
        "Simulation of optimal shift points for learning purposes",
        "Configurable settings via external INI files"
      ]
    },
    {
      title: "Age of Empires Online AI Assistant",
      description: "A tool providing real-time alerts for resource management and villager activity in Age of Empires Online.",
      tags: ["AutoIt", "Memory Manipulation", "FastFind.dll", "System Interaction"],
      highlights: [
        "Custom memory interaction library (KDMemory.au3)",
        "Pixel detection for on-screen element monitoring",
        "Alerts for resource levels and villager status",
        "Event-driven system with hotkey support"
      ]
    },
    {
      title: "Soleo Tech Manager",
      description: "A desktop app for internal management with Google API integration.",
      tags: ["C#", "Windows Forms", "Google API", "Data Management"],
      highlights: [
        "Google Calendar and Sheets integration",
        "Event scheduling and data visualization",
        "Windows Registry manipulation for UAC",
        "Backup and restore functionality"
      ]
    },
    {
      title: "Path of Exile Data Monitor",
      description: "A utility for monitoring in-game data in Path of Exile to study memory structures and system interaction.",
      tags: ["C#", "Windows API", "Input Simulation", "Memory Analysis"],
      highlights: [
        "Dynamic memory address tracking for data insights",
        "Real-time health value monitoring",
        "Experimental input simulation for timing studies",
        "TCP connection analysis for network behavior"
      ]
    }
  ];

  // Additional Notable Projects
  const additionalProjects = [
    { title: "Aimlab Performance Analyzer", description: "Tool for studying aim training performance with pixel detection." },
    { title: "LastWarBot", description: "Pixel analysis system for gameplay data exploration in C#." },
    { title: "Orchestra License Dumper", description: "Reverse-engineered tool for license data extraction." },
    { title: "Rocket League Memory Analysis", description: "C++ tool for analyzing Unreal Engine memory structures." },
    { title: "Sloop Sail Alerts", description: "OCR-based tool for studying sailing mechanics in Sea of Thieves." },
    { title: "TradingView Structure Indicator", description: "Pine Script tool for market structure analysis." },
    { title: "Intelligent Image Upscaling Bot", description: "Discord bot using ESRGAN for image enhancement." },
    { title: "GearAI (Forza Horizon 5)", description: "Gear shifting analysis tool with memory insights." },
    { title: "For Honor Combat Analyzer", description: "Image recognition tool for studying combat patterns." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors">
            Rémi Job-Dorge
          </a>
          <div className="flex gap-6">
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-gray-100">Rémi Job-Dorge</h1>
          <p className="text-xl text-gray-300 mt-2">Expert Software Developer & Technical Analyst</p>
          
          <div className="mt-4 flex gap-4 flex-wrap">
            <a href="mailto:jobdorge@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              jobdorge@gmail.com
            </a>
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="/Remi_Job-Dorge_CV.pdf" download className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          <div className="mt-6">
            <p className="text-gray-300">
              Expert in software development with a focus on automation, reverse engineering, and system optimization. 
              Based in Villeneuve-Loubet, France, with over 6 years of professional experience in technical solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="skills">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Core Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Low-level System Programming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Memory Manipulation & Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Reverse Engineering
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Process Automation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  C++, C#, AutoIt, Python
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  .NET Framework & Core
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Windows API Programming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Assembly Language
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="projects">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Featured Projects</h2>
          
          {/* Featured Projects */}
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleProject(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                  {expandedProject === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                
                <p className="text-gray-300 mt-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-900/30 text-blue-300 text-sm px-2 py-1 rounded border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedProject === index && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-800">
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li 
                          key={highlightIndex}
                          className="text-gray-300 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Notable Projects */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Additional Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalProjects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-medium text-gray-100">{project.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="about">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About Me</h2>
          
          <div className="text-gray-300 space-y-4">
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
              fuel my curiosity and problem-solving skills. I’m an autodidact committed to 
              continuous learning and delivering impactful technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 px-4 py-6 text-center text-gray-400">
        <p>© Rémi Job-Dorge, February 23, 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;