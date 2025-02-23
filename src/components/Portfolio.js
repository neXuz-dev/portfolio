"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import allProjects from '../projects';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedDetails, setExpandedDetails] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
    if (expandedDetails === index) setExpandedDetails(null);
  };

  const toggleDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  const locEstimates = {
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
  };

  const totalLOC = Object.values(locEstimates).reduce((sum, loc) => sum + loc, 0);

  const stats = {
    totalProjects: allProjects.length, // 45
    uniqueTechnologies: [...new Set(allProjects.flatMap(p => p.tags))].length, // ~54
    estimatedLinesOfCode: totalLOC, // 63,700
    estimatedHours: Math.round(totalLOC * 0.05), // 3,185
    memoryManipulationProjects: allProjects.filter(p => 
      p.tags.includes("Memory Manipulation") || p.tags.includes("Reverse Engineering")
    ).length, // 18
    apiIntegrations: allProjects.filter(p => 
      p.tags.some(tag => tag.includes("API"))
    ).length, // 10
    realTimeProjects: allProjects.filter(p => 
      p.description.toLowerCase().includes("real-time") || 
      p.tags.includes("Real-time Data") || 
      p.highlights.some(h => h.toLowerCase().includes("real-time"))
    ).length, // 14
    guiDrivenProjects: allProjects.filter(p => 
      p.tags.includes("Windows Forms") || 
      p.tags.includes("WPF") || 
      p.tags.includes("GUI Development") || 
      p.highlights.some(h => h.toLowerCase().includes("gui"))
    ).length, // 11
    reverseEngineeringTasks: allProjects.filter(p => 
      p.tags.includes("Reverse Engineering")
    ).length, // 15
    languages: [
      { name: 'C#', percentage: 36, color: 'bg-blue-500' },
      { name: 'AutoIt', percentage: 31, color: 'bg-green-500' },
      { name: 'C++', percentage: 9, color: 'bg-purple-500' },
      { name: 'ASM', percentage: 9, color: 'bg-red-500' },
      { name: 'Pine Script', percentage: 7, color: 'bg-teal-500' },
      { name: 'JavaScript', percentage: 4, color: 'bg-yellow-500' },
      { name: 'Python', percentage: 4, color: 'bg-orange-500' },
      { name: 'PHP', percentage: 2, color: 'bg-pink-500' },
    ],
  };

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
            <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://raw.githubusercontent.com/neXuz-dev/portfolio/main/public/CV_Job-Dorge_2024.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
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
                  C++, C#, AutoIt, Python, ASM
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  JavaScript, PHP, Pine Script
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  .NET, Next.js, React, Tailwind CSS
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Windows API, Unreal Engine 5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Panel */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.totalProjects}</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.uniqueTechnologies}</p>
              <p className="text-gray-300">Unique Technologies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.estimatedLinesOfCode.toLocaleString()}</p>
              <p className="text-gray-300">Lines of Code (Est.)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.estimatedHours.toLocaleString()}</p>
              <p className="text-gray-300">Hours Coding (Est.)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.memoryManipulationProjects}</p>
              <p className="text-gray-300">Memory Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.apiIntegrations}</p>
              <p className="text-gray-300">API Integrations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.realTimeProjects}</p>
              <p className="text-gray-300">Real-Time Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.guiDrivenProjects}</p>
              <p className="text-gray-300">GUI Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-300">{stats.reverseEngineeringTasks}</p>
              <p className="text-gray-300">Reverse Eng. Tasks</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Language Distribution</h3>
            <div className="flex w-full h-6 rounded-full overflow-hidden bg-gray-600">
              {stats.languages.map((lang, index) => (
                <div
                  key={index}
                  className={`${lang.color} h-full`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {stats.languages.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-3 h-3 ${lang.color} rounded-full mr-2`}></span>
                  <span className="text-gray-300">{lang.name}: {lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="projects">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Projects</h2>
          
          <div className="space-y-6">
            {allProjects.map((project, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors">
                <div className="flex justify-between items-center">
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => toggleProject(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                  </div>
                  <button onClick={() => toggleProject(index)}>
                    {expandedProject === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
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
                    <button 
                      onClick={() => toggleDetails(index)}
                      className="mt-4 px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg hover:bg-blue-900/70 transition-colors flex items-center gap-2"
                    >
                      {expandedDetails === index ? "Hide Full Details" : "Show Full Details"}
                    </button>
                  </div>
                )}

                {expandedDetails === index && (
                  <div className="mt-6 p-6 bg-gray-700 rounded-lg border border-gray-600 prose prose-invert max-w-none text-gray-200">
                    <ReactMarkdown 
                      components={{
                        h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-blue-300 mt-4 mb-2" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2" {...props} />,
                        li: ({node, ...props}) => <li className="text-gray-200" {...props} />,
                        strong: ({node, ...props}) => <strong className="text-blue-200" {...props} />,
                        p: ({node, ...props}) => <p className="text-gray-200 mb-4" {...props} />,
                        code: ({node, inline, ...props}) => 
                          inline ? (
                            <code className="bg-gray-800 text-blue-300 px-1 rounded" {...props} />
                          ) : (
                            <pre className="bg-gray-800 p-4 rounded-lg text-blue-300 overflow-x-auto"><code {...props} /></pre>
                          )
                      }}
                    >
                      {project.detailedDescription}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
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