import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ProjectsSection = ({ projects, language }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedDetails, setExpandedDetails] = useState(null);

  // Define categories based on logical grouping (unchanged)
  const categories = {
    'Analyzers': {
      matcher: (title) => [
        'Age of Empires Online AI Assistant',
        'Aimlab Performance Analyzer',
        'For Honor Combat Analyzer',
        'Forza Horizon 4 Gear Analyzer',
        'GearAI (Forza Horizon 5) Analyzer',
        'Genshin Impact Memory Analyzer',
        'Halo MCC Gameplay Analyzer',
        'LastWarBot Gameplay Analyzer',
        'NanoTrigger Input Analyzer',
        'Ninja Gaiden 2 Mechanics Analyzer',
        'Path of Exile Data Monitor',
        'RLTool Gameplay Analyzer',
        'Rocket League Memory Analyzer',
        'Rz Asset Control Center',
        'Wo Long Cheat Table Analyzer',
        'Wo Long Interaction Analyzer'
      ].includes(title),
      color: 'blue'
    },
    // ... (other categories remain unchanged)
  };

  const languages = [
    { name: 'All', count: projects.length },
    { name: 'C#', count: projects.filter(p => p.tags.includes('C#')).length },
    { name: 'AutoIt', count: projects.filter(p => p.tags.includes('AutoIt')).length },
    { name: 'C++', count: projects.filter(p => p.tags.includes('C++')).length },
    { name: 'ASM', count: projects.filter(p => p.tags.includes('ASM')).length },
    { name: 'Pine Script', count: projects.filter(p => p.tags.includes('Pine Script')).length },
    { name: 'JavaScript', count: projects.filter(p => p.tags.includes('JavaScript')).length },
    { name: 'Python', count: projects.filter(p => p.tags.includes('Python')).length },
    { name: 'PHP', count: projects.filter(p => p.tags.includes('PHP')).length }
  ];

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (selectedCategory !== 'All') {
      result = result.filter(project => categories[selectedCategory].matcher(project.content.en.title));
    }

    if (selectedLanguage !== 'All') {
      result = result.filter(project => project.tags.includes(selectedLanguage));
    }

    return result;
  }, [selectedCategory, selectedLanguage, projects]);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
    if (expandedDetails === index) setExpandedDetails(null);
  };

  const toggleDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap gap-3 items-center">
          <Filter className="w-5 h-5 text-gray-400" />
          <span className="text-gray-300 font-medium">{language === 'fr' ? 'Catégorie :' : 'Category:'}</span>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === 'All' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            {language === 'fr' ? 'Toutes Catégories' : 'All Categories'} ({projects.length})
          </button>
          {Object.entries(categories).map(([category, { color }]) => {
            const count = projects.filter(project => categories[category].matcher(project.content.en.title)).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category ? `bg-${color}-900/50 text-${color}-300 border border-${color}-700` : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <Filter className="w-5 h-5 text-gray-400" />
          <span className="text-gray-300 font-medium">{language === 'fr' ? 'Langage :' : 'Language:'}</span>
          {languages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang.name)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                ${selectedLanguage === lang.name ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {lang.name} ({lang.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.content.en.title}
            className="border border-gray-700 rounded-lg p-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-100">
                  {project.content[language].title}
                </h3>
                <p className="text-gray-300 mt-2">{project.content[language].description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {Object.entries(categories).map(([category, { matcher, color }]) =>
                    matcher(project.content.en.title) && (
                      <span
                        key={category}
                        className={`bg-${color}-900/30 text-${color}-300 text-sm px-2 py-1 rounded border border-${color}-800`}
                      >
                        {category}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-900/30 text-blue-300 text-sm px-2 py-1 rounded border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleProject(index)}
                className="ml-4 p-1 hover:bg-gray-700 rounded transition-colors"
              >
                {expandedProject === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>

            {expandedProject === index && (
              <div className="mt-4 pl-4 border-l-2 border-gray-700">
                <ul className="space-y-2">
                  {project.content[language].highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => toggleDetails(index)}
                  className="mt-4 px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  {expandedDetails === index
                    ? (language === 'fr' ? 'Cacher les Détails' : 'Hide Details')
                    : (language === 'fr' ? 'Montrer les Détails' : 'Show Details')}
                </button>

                {expandedDetails === index && (
                  <div className="mt-4 p-4 bg-gray-700 rounded border border-gray-600">
                    <ReactMarkdown
                      components={{
                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-blue-300 mt-4 mb-2" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-200" {...props} />,
                        strong: ({ node, ...props }) => <strong className="text-blue-200" {...props} />,
                        p: ({ node, ...props }) => <p className="text-gray-200 mb-4" {...props} />,
                        code: ({ node, inline, ...props }) =>
                          inline ? (
                            <code className="bg-gray-800 text-blue-300 px-1 rounded" {...props} />
                          ) : (
                            <pre className="bg-gray-800 p-4 rounded-lg text-blue-300 overflow-x-auto"><code {...props} /></pre>
                          ),
                      }}
                    >
                      {project.content[language].detailedDescription}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;