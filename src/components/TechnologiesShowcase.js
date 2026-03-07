import React, { useState } from 'react';

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
      icon: '⚙️',
      name: 'C++',
      description: language === 'fr'
        ? 'Unreal Engine 5, forks moteur custom, vertex factories, shaders HLSL/SM6'
        : 'Unreal Engine 5, custom engine forks, vertex factories, HLSL/SM6 shaders',
      color: 'bg-purple-500'
    },
    {
      icon: '🦀',
      name: 'Rust',
      description: language === 'fr'
        ? 'Outils de déploiement, protection de binaires, applications GUI egui'
        : 'Deployment tooling, binary protection, egui GUI applications',
      color: 'bg-orange-500'
    },
    {
      icon: '🔷',
      name: 'C#',
      description: language === 'fr'
        ? '.NET, WPF, Windows Forms, Entity Framework, gestion d\'assets'
        : '.NET, WPF, Windows Forms, Entity Framework, asset management',
      color: 'bg-blue-500'
    },
    {
      icon: '⚡',
      name: 'AutoIt',
      description: language === 'fr'
        ? 'Automatisation, GUIs, manipulation système, IA de jeu'
        : 'Automation, GUIs, system manipulation, game AI',
      color: 'bg-green-500'
    },
    {
      icon: '🐍',
      name: 'Python',
      description: language === 'fr'
        ? 'Vision par ordinateur (YOLO), CTF, analyse de données'
        : 'Computer vision (YOLO), CTF challenges, data analysis',
      color: 'bg-yellow-500'
    },
    {
      icon: '💬',
      name: 'TypeScript',
      description: language === 'fr'
        ? 'Serveurs MCP, intégrations API, outils d\'automatisation'
        : 'MCP servers, API integrations, automation tooling',
      color: 'bg-teal-500'
    }
  ];

  const toolsAndFrameworks = [
    {
      icon: '🎮',
      name: 'Unreal Engine 5',
      description: language === 'fr'
        ? 'Forks moteur custom, architecture de plugins C++, pipelines de rendu, streaming monde'
        : 'Custom engine forks, C++ plugin architecture, rendering pipelines, world streaming',
      color: 'bg-indigo-500'
    },
    {
      icon: '🧰',
      name: language === 'fr' ? 'Programmation Systèmes' : 'Systems Programming',
      description: language === 'fr'
        ? 'Manipulation mémoire, hooks, simulation d\'entrées, overlays de jeu'
        : 'Memory manipulation, hooking, input simulation, game overlays',
      color: 'bg-blue-400'
    },
    {
      icon: '🔒',
      name: language === 'fr' ? 'Sécurité' : 'Security',
      description: language === 'fr'
        ? 'Rétro-ingénierie, protection de binaires, CTF, analyse de crash dumps'
        : 'Reverse engineering, binary protection, CTF, crash dump analysis',
      color: 'bg-red-400'
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
