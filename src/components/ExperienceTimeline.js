import React, { useState } from 'react';
import { Code, Calendar, Award, Clock, Gamepad2 } from 'lucide-react';

const ICONS = {
  qanga: Gamepad2,
  soleo: Code,
  cs: Award,
  racing: Clock,
  dev: Calendar,
};

const ExperienceTimeline = ({ language }) => {
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      id: 'qanga',
      year: '2025—present',
      title: language === 'fr' ? 'Développeur Principal — Qanga (IolaCorp)' : 'Lead Developer — Qanga (IolaCorp)',
      description: language === 'fr'
        ? "Reprise de 99% du développement d'un jeu multijoueur UE5. De zéro en C++ moteur à des forks custom, vertex factories, shaders HLSL/SM6 et serveurs dédiés — 2 400+ commits en moins d'un an."
        : 'Took over 99% of development on a UE5 multiplayer game. From zero engine C++ to custom forks, vertex factories, HLSL/SM6 shaders, and dedicated servers — 2,400+ commits in under a year.',
      tags: ['C++', 'Unreal Engine 5', 'Rust', 'Dedicated Servers', 'Steam SDK'],
    },
    {
      id: 'soleo',
      year: '2017—2023',
      title: language === 'fr' ? 'Technicien / Développeur chez SARL Soleo Tech' : 'Technician / Developer at SARL Soleo Tech',
      description: language === 'fr'
        ? "Développement d'outils système, automatisation et maintenance de systèmes POS, personnalisation d'ERP et intégration d'API."
        : 'System tool development, POS system automation and maintenance, ERP customization and API integration.',
      tags: ['C#', 'AutoIt', 'PHP', 'Windows API', 'ERP/CRM'],
    },
    {
      id: 'cs',
      year: '2014—2016',
      title: language === 'fr' ? 'Joueur Professionnel Counter-Strike' : 'Professional Counter-Strike Player',
      description: language === 'fr'
        ? "Compétition au plus haut niveau, analyse stratégique, entraînement d'équipe et coordination."
        : 'Competing at the highest level, strategic analysis, team training and coordination.',
      tags: ['Team Coordination', 'Strategic Planning', 'Performance Analysis'],
    },
    {
      id: 'racing',
      year: '2015—present',
      title: language === 'fr' ? 'Records Mondiaux en Simulation de Course' : 'Racing Simulation World Records',
      description: language === 'fr'
        ? 'Détenteur de records mondiaux dans plusieurs simulations de course, nécessitant précision et optimisation.'
        : 'Holder of world records in multiple racing simulations, requiring precision and optimization.',
      tags: ['Performance Optimization', 'Data Analysis', 'Real-time Decision Making'],
    },
    {
      id: 'dev',
      year: '2008—present',
      title: language === 'fr' ? 'Développement Logiciel Indépendant' : 'Independent Software Development',
      description: language === 'fr'
        ? "Plus de 18 ans de développement de solutions systèmes, d'automatisation et d'outils de performance à travers 58 projets."
        : 'Over 18 years building systems software, automation, and performance tooling across 58 projects.',
      tags: ['C++', 'C#', 'Rust', 'Python', 'System Integration'],
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="mb-5 text-xs uppercase tracking-widest text-dim">
        <span className="text-edge">&gt;</span>{' '}
        {language === 'fr' ? 'Parcours' : 'Experience Timeline'}
      </h3>

      <div className="relative">
        {/* Solid timeline spine */}
        <div className="absolute left-3 top-1 z-0 h-full w-px bg-line sm:left-4" />

        <div className="relative z-10 space-y-5">
          {experiences.map((exp) => {
            const Icon = ICONS[exp.id];
            const active = activeExperience === exp.id;
            return (
              <div
                key={exp.id}
                className="relative pl-10 sm:pl-14"
                onMouseEnter={() => setActiveExperience(exp.id)}
                onMouseLeave={() => setActiveExperience(null)}
              >
                {/* Node */}
                <div className={`absolute left-0 top-0 flex h-7 w-7 items-center justify-center border bg-void transition-colors sm:left-1 ${active ? 'border-accent' : 'border-edge'}`}>
                  <Icon className={`h-3.5 w-3.5 ${active ? 'text-accent' : 'text-dim'}`} />
                </div>

                <div className={`border bg-panel p-4 transition-colors ${active ? 'border-edge bg-raised' : 'border-line'}`}>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-fg sm:text-base">{exp.title}</h4>
                    <span className="border border-line px-2 py-0.5 text-xs tabular-nums text-accent">{exp.year}</span>
                  </div>

                  <p className="text-sm text-dim">{exp.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
