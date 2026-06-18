import React from 'react';
import { Cpu, Boxes, Hash, Zap, Code2, Braces, Gamepad2, Terminal, Shield } from 'lucide-react';

const TechRow = ({ Icon, name, description }) => (
  <div className="flex flex-col gap-1 border-b border-line px-3 py-3 transition-colors last:border-b-0 hover:bg-raised sm:flex-row sm:items-baseline sm:gap-3">
    <div className="flex w-44 shrink-0 items-center gap-2 text-accent">
      <Icon size={15} className="shrink-0" />
      <span className="text-sm font-bold uppercase tracking-wide">{name}</span>
    </div>
    <p className="text-sm text-dim">
      <span className="mr-2 text-edge">›</span>
      {description}
    </p>
  </div>
);

const TechnologiesShowcase = ({ language }) => {
  const technologies = [
    {
      Icon: Cpu,
      name: 'C++',
      description: language === 'fr'
        ? 'Unreal Engine 5, forks moteur custom, vertex factories, shaders HLSL/SM6'
        : 'Unreal Engine 5, custom engine forks, vertex factories, HLSL/SM6 shaders',
    },
    {
      Icon: Boxes,
      name: 'Rust',
      description: language === 'fr'
        ? 'Outils de déploiement, protection de binaires, applications GUI egui'
        : 'Deployment tooling, binary protection, egui GUI applications',
    },
    {
      Icon: Hash,
      name: 'C#',
      description: language === 'fr'
        ? ".NET, WPF, Windows Forms, Entity Framework, gestion d'assets"
        : '.NET, WPF, Windows Forms, Entity Framework, asset management',
    },
    {
      Icon: Zap,
      name: 'AutoIt',
      description: language === 'fr'
        ? 'Automatisation, GUIs, manipulation système, IA de jeu'
        : 'Automation, GUIs, system manipulation, game AI',
    },
    {
      Icon: Code2,
      name: 'Python',
      description: language === 'fr'
        ? 'Vision par ordinateur (YOLO), CTF, analyse de données'
        : 'Computer vision (YOLO), CTF challenges, data analysis',
    },
    {
      Icon: Braces,
      name: 'TypeScript',
      description: language === 'fr'
        ? "Serveurs MCP, intégrations API, outils d'automatisation"
        : 'MCP servers, API integrations, automation tooling',
    },
  ];

  const toolsAndFrameworks = [
    {
      Icon: Gamepad2,
      name: 'Unreal Engine 5',
      description: language === 'fr'
        ? 'Forks moteur custom, architecture de plugins C++, pipelines de rendu, streaming monde'
        : 'Custom engine forks, C++ plugin architecture, rendering pipelines, world streaming',
    },
    {
      Icon: Terminal,
      name: language === 'fr' ? 'Prog. Systèmes' : 'Systems Prog.',
      description: language === 'fr'
        ? "Manipulation mémoire, hooks, simulation d'entrées, overlays de jeu"
        : 'Memory manipulation, hooking, input simulation, game overlays',
    },
    {
      Icon: Shield,
      name: language === 'fr' ? 'Sécurité' : 'Security',
      description: language === 'fr'
        ? 'Rétro-ingénierie, protection de binaires, CTF, analyse de crash dumps'
        : 'Reverse engineering, binary protection, CTF, crash dump analysis',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-xs uppercase tracking-widest text-dim">
          <span className="text-edge">&gt;</span>{' '}
          {language === 'fr' ? 'Technologies & Outils' : 'Technologies & Tools'}
        </h3>
        <div className="border border-line">
          {technologies.map((tech) => (
            <TechRow key={tech.name} {...tech} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs uppercase tracking-widest text-dim">
          <span className="text-edge">&gt;</span>{' '}
          {language === 'fr' ? 'Frameworks & Spécialités' : 'Frameworks & Specialties'}
        </h3>
        <div className="border border-line">
          {toolsAndFrameworks.map((tool) => (
            <TechRow key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesShowcase;
