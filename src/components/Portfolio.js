"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const projects = [
    {
      title: "Age of Empires Online AI Assistant",
      description: "An automation tool demonstrating advanced memory manipulation and external library integration.",
      tags: ["AutoIt", "Memory Manipulation", "API Integration", "Automation"],
      highlights: [
        "Direct memory interaction using custom KDMemory.au3 library",
        "Integration with FastFind.dll for optimized pixel detection",
        "Event-driven programming with hotkey implementation",
        "Clean, modular code structure with thorough documentation"
      ]
    },
    {
      title: "Assetto Corsa Smart Shift Optimizer",
      description: "A sophisticated real-time gear optimization tool built in C#.",
      tags: ["C#", ".NET", "Windows API", "Memory Manipulation"],
      highlights: [
        "Advanced process introspection and memory management",
        "Dynamic memory address calculation",
        "External process control via input simulation",
        "Reverse engineering capabilities"
      ]
    },
    {
      title: "Rz Asset Control Center",
      description: "A robust web application for cryptocurrency asset management and automated trading.",
      tags: ["ASP.NET Core", "Entity Framework", "KuCoin API", "Real-time Data"],
      highlights: [
        "Secure user authentication with 2FA",
        "Real-time WebSocket data handling",
        "Automated trading bot implementation",
        "PostgreSQL database integration"
      ]
    },
    {
      title: "RziRTool - iRacing Telemetry Overlay",
      description: "A sophisticated real-time telemetry visualization tool using ImGui.NET and Veldrid.",
      tags: ["C#", "ImGui.NET", "Veldrid", "Real-time Data"],
      highlights: [
        "Real-time data visualization with customizable UI",
        "Advanced graphics rendering",
        "Asynchronous programming",
        "MVVM architecture"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 text-gray-100">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-gray-100">Rémi Job-Dorge</h1>
          <p className="text-xl text-gray-300 mt-2">Expert Software Developer & Technical Analyst</p>
          
          <div className="mt-4 flex gap-4">
            <a href="mailto:jobdorge@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </a>
            <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Globe className="w-5 h-5 mr-2" />
              Portfolio
            </a>
          </div>

          <div className="mt-6">
            <p className="text-gray-300">
              Passionate developer with expertise in automation, reverse engineering, and system-level programming.
              Committed to continuous learning and solving complex technical challenges.
            </p>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4">
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
      <section className="max-w-4xl mx-auto mt-8 px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Featured Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
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
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About Me</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              With a background in competitive gaming and a passion for technology, I've developed
              a unique approach to software development that combines deep technical knowledge with
              practical problem-solving skills.
            </p>
            <p>
              My experience ranges from low-level system programming to full-stack web development,
              with a particular focus on automation and performance optimization. I'm constantly
              learning and exploring new technologies, driven by a desire to understand how things
              work at their core.
            </p>
            <p>
              Beyond coding, I'm an enthusiast of astronomy, music, and competitive gaming,
              bringing a well-rounded perspective to my technical work. My approach is guided by
              principles of pragmatism, continuous learning, and attention to detail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;