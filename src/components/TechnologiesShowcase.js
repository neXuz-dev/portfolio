import React, { useState, useEffect } from 'react';

const TechnologyCard = ({ icon, name, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 transition-all duration-300 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 ${color} opacity-0 rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-5' : ''}`}></div>
      
      <div className="flex items-start">
        <div className={`text-2xl p-3 rounded-md ${color} bg-opacity-20 mr-4`}>
          {icon}
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-100">{name}</h4>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TechnologiesShowcase = ({ language }) => {
  const technologies = [
    {
      icon: '🔷',
      name: 'C#',
      description: language === 'fr' 
        ? '.NET, WPF, Windows Forms et Entity Framework'
        : '.NET, WPF, Windows Forms and Entity Framework',
      color: 'bg-blue-500'
    },
    {
      icon: '⚙️',
      name: 'C++',
      description: language === 'fr' 
        ? 'APIs Windows, manipulation mémoire et DirectX'
        : 'Windows APIs, memory manipulation and DirectX',
      color: 'bg-purple-500'
    },
    {
      icon: '⚡',
      name: 'AutoIt',
      description: language === 'fr' 
        ? 'Automatisation, GUIs et manipulation système'
        : 'Automation, GUIs and system manipulation',
      color: 'bg-green-500'
    },
    {
      icon: '💬',
      name: 'JavaScript',
      description: language === 'fr' 
        ? 'React, Next.js et intégrations front-end'
        : 'React, Next.js and front-end integrations',
      color: 'bg-yellow-500'
    },
    {
      icon: '🐍',
      name: 'Python',
      description: language === 'fr' 
        ? 'Analyse de données, bots Discord et web scraping'
        : 'Data analysis, Discord bots and web scraping',
      color: 'bg-teal-500'
    },
    {
      icon: '💭',
      name: 'Assembly',
      description: language === 'fr' 
        ? 'Rétro-ingénierie et modification de bas niveau'
        : 'Reverse engineering and low-level modification',
      color: 'bg-red-500'
    }
  ];
  
  const toolsAndFrameworks = [
    {
      icon: '🧰',
      name: 'Windows API',
      description: language === 'fr' 
        ? 'Interaction système profonde et hooks'
        : 'Deep system interaction and hooks',
      color: 'bg-blue-400'
    },
    {
      icon: '🎮',
      name: 'Unreal Engine',
      description: language === 'fr' 
        ? 'Blueprints et développement de jeux 3D'
        : 'Blueprints and 3D game development',
      color: 'bg-purple-400'
    },
    {
      icon: '📊',
      name: 'Memory Manipulation',
      description: language === 'fr' 
        ? 'Analyse dynamique et modification de processus'
        : 'Dynamic analysis and process modification',
      color: 'bg-green-400'
    }
  ];
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
        <span className="w-2 h-8 bg-blue-500 rounded-md mr-3"></span>
        {language === 'fr' ? 'Technologies & Outils' : 'Technologies & Tools'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {technologies.map((tech, index) => (
          <TechnologyCard 
            key={index}
            icon={tech.icon}
            name={tech.name}
            description={tech.description}
            color={tech.color}
          />
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
        <span className="w-2 h-8 bg-blue-500 rounded-md mr-3"></span>
        {language === 'fr' ? 'Frameworks & Spécialités' : 'Frameworks & Specialties'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {toolsAndFrameworks.map((tool, index) => (
          <TechnologyCard 
            key={index}
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
            color={tool.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesShowcase;