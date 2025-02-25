import React, { useState } from 'react';
import { Code, Calendar, Award, Clock } from 'lucide-react';

const ExperienceTimeline = ({ language }) => {
  const [activeExperience, setActiveExperience] = useState(null);
  
  const experiences = [
    {
      id: 'soleo',
      year: '2017-2023',
      title: language === 'fr' ? 'Technicien / Développeur chez SARL Soleo Tech' : 'Technician / Developer at SARL Soleo Tech',
      description: language === 'fr' 
        ? 'Développement d\'outils système, automatisation et maintenance de systèmes POS, personnalisation d\'ERP et intégration d\'API.' 
        : 'System tool development, POS system automation and maintenance, ERP customization and API integration.',
      tags: ['C#', 'AutoIt', 'PHP', 'Windows API', 'ERP/CRM']
    },
    {
      id: 'cs',
      year: '2014-2016',
      title: language === 'fr' ? 'Joueur Professionnel Counter-Strike' : 'Professional Counter-Strike Player',
      description: language === 'fr' 
        ? 'Compétition au plus haut niveau, analyse stratégique, entraînement d\'équipe et coordination.' 
        : 'Competing at the highest level, strategic analysis, team training and coordination.',
      tags: ['Team Coordination', 'Strategic Planning', 'Performance Analysis']
    },
    {
      id: 'racing',
      year: '2015-present',
      title: language === 'fr' ? 'Records Mondiaux en Simulation de Course' : 'Racing Simulation World Records',
      description: language === 'fr' 
        ? 'Détenteur de records mondiaux dans plusieurs simulations de course, nécessitant précision et optimisation.' 
        : 'Holder of world records in multiple racing simulations, requiring precision and optimization.',
      tags: ['Performance Optimization', 'Data Analysis', 'Real-time Decision Making']
    },
    {
      id: 'dev',
      year: '2008-present',
      title: language === 'fr' ? 'Développement Logiciel Indépendant' : 'Independent Software Development',
      description: language === 'fr' 
        ? 'Développement continu de solutions personnalisées, répondant à des défis uniques à travers divers projets.' 
        : 'Ongoing development of custom solutions, addressing unique challenges across various projects.',
      tags: ['C#', 'C++', 'Python', 'JavaScript', 'System Integration']
    }
  ];
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-100 mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-500 rounded-md mr-3"></span>
        {language === 'fr' ? 'Parcours' : 'Experience Timeline'}
      </h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 left-3 sm:left-4 top-0 z-0"></div>
        
        {/* Experience items */}
        <div className="space-y-8 relative z-10">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="pl-10 sm:pl-14 relative"
              onMouseEnter={() => setActiveExperience(exp.id)}
              onMouseLeave={() => setActiveExperience(null)}
            >
              {/* Timeline node */}
              <div className="absolute left-0 sm:left-1 top-0 w-7 h-7 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center">
                {exp.id === 'soleo' && <Code className="w-3 h-3 text-blue-400" />}
                {exp.id === 'cs' && <Award className="w-3 h-3 text-blue-400" />}
                {exp.id === 'racing' && <Clock className="w-3 h-3 text-blue-400" />}
                {exp.id === 'dev' && <Calendar className="w-3 h-3 text-blue-400" />}
              </div>
              
              <div className={`bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 transition-all duration-300 ${activeExperience === exp.id ? 'shadow-lg shadow-blue-500/10 border-blue-500/30' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium text-gray-100">{exp.title}</h4>
                  <span className="text-sm text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded">{exp.year}</span>
                </div>
                
                <p className="text-gray-300 text-sm">{exp.description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700/70 text-gray-300 text-xs px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;