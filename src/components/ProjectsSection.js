import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Filter, Image } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ScreenshotGallery from './ScreenshotGallery';

const ProjectsSection = ({ projects, language }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedDetails, setExpandedDetails] = useState(null);
  const [showScreenshots, setShowScreenshots] = useState(null);

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

    if (selectedLanguage !== 'All') {
      result = result.filter(project => project.tags.includes(selectedLanguage));
    }

    return result;
  }, [selectedLanguage, projects]);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
    if (expandedDetails === index) setExpandedDetails(null);
    if (showScreenshots === index) setShowScreenshots(null);
  };

  const toggleDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };
  
  const toggleScreenshots = (index) => {
    setShowScreenshots(showScreenshots === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Language Filter */}
      <div className="flex flex-wrap gap-3 items-center mb-6">
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

                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() => toggleDetails(index)}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-2"
                  >
                    {expandedDetails === index
                      ? (language === 'fr' ? 'Cacher les Détails' : 'Hide Details')
                      : (language === 'fr' ? 'Montrer les Détails' : 'Show Details')}
                  </button>
                  
                  {/* Only show the Screenshots button if the project has screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <button
                      onClick={() => toggleScreenshots(index)}
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-2"
                    >
                      <Image size={18} />
                      {showScreenshots === index
                        ? (language === 'fr' ? 'Cacher les Captures' : 'Hide Screenshots')
                        : (language === 'fr' ? 'Voir les Captures' : 'View Screenshots')}
                    </button>
                  )}
                </div>
                
                {/* Screenshots gallery */}
                {showScreenshots === index && project.screenshots && project.screenshots.length > 0 && (
                  <div className="mt-4">
                    <ScreenshotGallery 
                      screenshots={project.screenshots} 
                      title={project.content[language].title} 
                    />
                  </div>
                )}

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