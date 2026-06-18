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
    { name: 'PHP', count: projects.filter(p => p.tags.includes('PHP')).length },
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
    <div className="space-y-5">
      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 flex items-center gap-2 text-xs uppercase tracking-widest text-dim">
          <Filter className="h-4 w-4" />
          {language === 'fr' ? 'filtre' : 'filter'}
        </span>
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => setSelectedLanguage(lang.name)}
            className={`border px-2.5 py-1 text-xs uppercase tracking-wider transition-colors ${
              selectedLanguage === lang.name
                ? 'border-accent bg-brand text-white'
                : 'border-line text-dim hover:border-edge hover:text-accent'
            }`}
          >
            {lang.name} <span className="tabular-nums opacity-70">[{lang.count}]</span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.content.en.title}
            className="border border-line bg-panel transition-colors hover:bg-raised"
          >
            <div className="flex items-start justify-between gap-4 p-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-edge">›</span>
                  <h3 className="text-base font-bold text-fg sm:text-lg">
                    {project.content[language].title}
                  </h3>
                </div>
                <p className="mt-1.5 pl-4 text-sm text-dim">{project.content[language].description}</p>

                <div className="mt-2.5 flex flex-wrap gap-1.5 pl-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="chip">{tag}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleProject(index)}
                className="shrink-0 border border-line p-1 text-dim transition-colors hover:border-edge hover:text-accent"
                aria-label="Toggle project"
              >
                {expandedProject === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>

            {expandedProject === index && (
              <div className="border-t border-line p-4">
                <ul className="space-y-1.5">
                  {project.content[language].highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-2 text-sm text-fg/90">
                      <span className="text-accent">+</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={() => toggleDetails(index)} className="btn">
                    {expandedDetails === index
                      ? language === 'fr' ? 'cacher les détails' : 'hide details'
                      : language === 'fr' ? 'montrer les détails' : 'show details'}
                  </button>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <button onClick={() => toggleScreenshots(index)} className="btn">
                      <Image size={15} />
                      {showScreenshots === index
                        ? language === 'fr' ? 'cacher captures' : 'hide screenshots'
                        : language === 'fr' ? 'voir captures' : 'view screenshots'}
                    </button>
                  )}
                </div>

                {showScreenshots === index && project.screenshots && project.screenshots.length > 0 && (
                  <div className="mt-4">
                    <ScreenshotGallery
                      screenshots={project.screenshots}
                      title={project.content[language].title}
                    />
                  </div>
                )}

                {expandedDetails === index && (
                  <div className="mt-4 border border-line bg-void p-4 text-sm">
                    <ReactMarkdown
                      components={{
                        h3: ({ node, ...props }) => <h3 className="mb-2 mt-4 text-sm font-bold uppercase tracking-wider text-accent first:mt-0" {...props} />,
                        ul: ({ node, ...props }) => <ul className="my-2 space-y-1.5" {...props} />,
                        li: ({ node, ...props }) => <li className="flex gap-2 text-fg/90 before:text-accent before:content-['+']" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-fg" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-3 text-dim" {...props} />,
                        a: ({ node, ...props }) => <a className="text-accent underline-offset-2 hover:underline" {...props} />,
                        hr: ({ node, ...props }) => <hr className="my-4 border-line" {...props} />,
                        code: ({ node, inline, ...props }) =>
                          inline ? (
                            <code className="border border-line bg-panel px-1 text-accent" {...props} />
                          ) : (
                            <pre className="overflow-x-auto border border-line bg-panel p-3 text-accent"><code {...props} /></pre>
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
