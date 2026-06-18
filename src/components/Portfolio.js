"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X, ArrowRight } from 'lucide-react';
import allProjects from '../projects';
import ProjectsSection from './ProjectsSection';
import ProjectShowcase from './ProjectShowcase';
import ExperienceTimeline from './ExperienceTimeline';
import TechnologiesShowcase from './TechnologiesShowcase';
import BootSequence from './BootSequence';

const LOC_ESTIMATES = {
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
  "Rz Asset Control Center": 13500,
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
  "RLBot Nexto/Immortal Auto-Switcher": 800,
  "Number Recognition Game": 1600,
  "Qanga": 300000,
  "Qanga Steam Uploader": 500,
  "RzCloak": 3200,
  "Backblaze Backup MCP Server": 800,
  "RzAudioBuilds": 29369,
  "FH6 GearAI": 28400,
  "RzMemoryScanner": 2888,
  "RzMCPInterface": 152751,
  "Dynamic Quest System": 115583,
  "QAI": 47341,
  "RzIndirectInstancing": 15030,
  "FlyVehicleMovement": 9762,
  "QWeapon": 5066,
  "EasyCook": 4139,
  "QNotification": 6057,
  "QReport": 928,
  "RzRemap": 3780,
  "Local Agent MCP Toolkit": 1539,
  "Shell-to-Windows Converter": 296,
  "CTF Challenge Solvers & Research": 2170
};

const TOTAL_LOC = Object.values(LOC_ESTIMATES).reduce((sum, loc) => sum + loc, 0);

// Blue-dominant ramp (one amber accent) - no purple, terminal-flat.
const LANGUAGES = [
  { name: 'C++',        percentage: 68, color: '#5b8cf5' },
  { name: 'C#',         percentage: 13, color: '#2f5fb0' },
  { name: 'Rust',       percentage: 9,  color: '#e0a53b' },
  { name: 'AutoIt',     percentage: 4,  color: '#3a6fd6' },
  { name: 'Python',     percentage: 3,  color: '#7c8bb0' },
  { name: 'C',          percentage: 2,  color: '#24477f' },
  { name: 'TypeScript', percentage: 1,  color: '#4a567a' },
];

const NAV_LINKS = [
  { href: '#skills',   en: 'skills',   fr: 'skills' },
  { href: '#projects', en: 'projects', fr: 'projects' },
  { href: '/store',    en: 'store',    fr: 'store' },
  { href: '#about',    en: 'about',    fr: 'about' },
];

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const stats = {
    totalProjects: allProjects.length,
    uniqueTechnologies: 64,
    estimatedLinesOfCode: TOTAL_LOC,
    estimatedHours: Math.round(TOTAL_LOC * 0.05),
    memoryManipulationProjects: 19,
    apiIntegrations: 11,
    realTimeProjects: 25,
    guiDrivenProjects: 24,
    reverseEngineeringTasks: 19,
  };

  const statCells = [
    { value: stats.totalProjects, label: language === 'fr' ? 'Projets' : 'Projects' },
    { value: stats.uniqueTechnologies, label: language === 'fr' ? 'Technologies' : 'Technologies' },
    { value: stats.estimatedLinesOfCode.toLocaleString(), label: language === 'fr' ? 'Lignes (est.)' : 'Lines of Code (est.)' },
    { value: stats.estimatedHours.toLocaleString(), label: language === 'fr' ? 'Heures (est.)' : 'Hours Coding (est.)' },
    { value: stats.memoryManipulationProjects, label: language === 'fr' ? 'Projets Mémoire' : 'Memory Projects' },
    { value: stats.apiIntegrations, label: language === 'fr' ? 'Intégrations API' : 'API Integrations' },
    { value: stats.realTimeProjects, label: language === 'fr' ? 'Temps Réel' : 'Real-Time Projects' },
    { value: stats.guiDrivenProjects, label: language === 'fr' ? 'Projets GUI' : 'GUI Projects' },
    { value: stats.reverseEngineeringTasks, label: language === 'fr' ? 'Rétro-Ing.' : 'Reverse Eng. Tasks' },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: language === 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill in all fields',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address',
      });
      return;
    }

    try {
      setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: error.message });
    }
  };

  return (
    <div className="scanlines min-h-screen bg-void text-fg">
      <BootSequence />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-30 w-full border-b border-line bg-void/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/favicon.ico" alt="Rz Software logo" className="h-7 w-7 border border-edge" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-fg">neXuz</span>
              <span className="text-dim">-dev</span>
            </span>
            <span className="hidden border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-dim sm:inline-block">
              Rz Software
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-fg transition-colors hover:border-accent hover:bg-brand hover:text-white"
              >
                <span className="text-accent">/</span>{language === 'fr' ? link.fr : link.en}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle - no emoji flags */}
            <div className="hidden items-center border border-line text-xs sm:flex">
              {['en', 'fr'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                    language === code ? 'bg-brand text-white' : 'text-dim hover:text-accent'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="border border-line p-1.5 text-dim transition-colors hover:text-accent md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-line bg-void md:hidden">
            <div className="space-y-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border border-line px-3 py-2 text-sm uppercase tracking-wider text-fg transition-colors hover:border-accent hover:bg-brand hover:text-white"
                >
                  <span className="text-accent">/</span>{language === 'fr' ? link.fr : link.en}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                {['en', 'fr'].map((code) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={`border border-line px-3 py-1 text-xs uppercase ${
                      language === code ? 'bg-brand text-white' : 'text-dim'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Header / whoami ─────────────────────────────────── */}
      <header className="mx-auto max-w-6xl px-4 pt-24 pb-8">
        <div className="panel term-in">
          <div className="panel-head">
            <span><span className="text-accent">rémi@rz-software</span>:~/portfolio$</span>
            <span className="hidden text-dim sm:inline">villeneuve-loubet · fr</span>
          </div>
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-sm text-dim">
              <span className="text-accent">$</span> whoami
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Rémi Job-Dorge
            </h1>
            <p className="mt-1 text-base text-accent sm:text-lg">
              {language === 'fr'
                ? 'Ingénieur Logiciel Systèmes · Développeur Unreal Engine 5'
                : 'Systems Software Engineer · Unreal Engine 5 Developer'}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-fg/90">
              <span className="text-dim"># </span>
              {language === 'fr'
                ? "Ingénieur logiciel systèmes avec plus de 18 ans d'expérience, spécialisé dans le développement C++ Unreal Engine 5 avec forks moteur custom, l'optimisation de performances et la programmation bas-niveau."
                : 'Systems software engineer with 18+ years of experience, specialized in Unreal Engine 5 C++ development with custom engine forks, performance optimization, and low-level systems programming.'}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href="mailto:jobdorge.pro@gmail.com" className="btn btn-accent">
                <Mail size={15} /> email
              </a>
              <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={15} /> github
              </a>
              <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="btn">
                <Linkedin size={15} /> linkedin
              </a>
              <a href="/CV_Job-Dorge_2025.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                <Download size={15} /> cv.pdf
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Store CTA ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4">
        <a href="/store" className="group block panel transition-colors hover:border-edge">
          <div className="flex flex-col items-start justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="border border-edge px-2 py-1 text-xs uppercase tracking-widest text-accent">
                store
              </span>
              <p className="text-sm text-dim">
                {language === 'fr'
                  ? 'Outils MCP, logiciels de protection, analyseurs de performance, et plus.'
                  : 'MCP tools, protection software, performance analyzers, and more.'}
              </p>
            </div>
            <span className="btn btn-accent shrink-0">
              {language === 'fr' ? 'voir la boutique' : 'browse store'}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </section>

      {/* ── At a Glance ─────────────────────────────────────── */}
      <section className="mx-auto mt-8 max-w-6xl px-4">
        <div className="panel">
          <div className="panel-head">
            <span>
              <span className="text-accent">##</span> {language === 'fr' ? 'En bref' : 'At a Glance'}
            </span>
            <span className="text-dim">stat --summary</span>
          </div>

          <div className="grid grid-cols-2 border-t border-line sm:grid-cols-3">
            {statCells.map((item, index) => (
              <div key={index} className="border-b border-r border-line px-4 py-4">
                <div className="text-2xl font-bold tabular-nums text-accent sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-dim">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Language distribution */}
          <div className="border-t border-line px-4 py-5">
            <h3 className="mb-3 text-xs uppercase tracking-widest text-dim">
              {language === 'fr' ? 'Distribution des langages' : 'Language Distribution'}
            </h3>
            <div className="flex h-7 w-full overflow-hidden border border-line">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="h-full"
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name} ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: lang.color }} />
                  <span className="text-fg">{lang.name}</span>
                  <span className="tabular-nums text-dim">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ───────────────────────────────── */}
      <ProjectShowcase projects={allProjects} language={language} />

      {/* ── Skills ──────────────────────────────────────────── */}
      <section id="skills" className="mx-auto mt-8 max-w-6xl scroll-mt-24 px-4">
        <div className="panel">
          <div className="panel-head">
            <span>
              <span className="text-accent">##</span> {language === 'fr' ? 'Expertise Technique' : 'Technical Expertise'}
            </span>
            <span className="text-dim">cat skills.txt</span>
          </div>
          <div className="p-5 sm:p-6">
            <TechnologiesShowcase language={language} />
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────── */}
      <section id="projects" className="mx-auto mt-8 max-w-6xl scroll-mt-24 px-4">
        <div className="panel">
          <div className="panel-head">
            <span>
              <span className="text-accent">##</span> {language === 'fr' ? 'Projets' : 'Projects'}
            </span>
            <span className="text-dim">ls -la ./projects</span>
          </div>
          <div className="p-5 sm:p-6">
            <ProjectsSection projects={allProjects} language={language} />
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section id="about" className="mx-auto mt-8 max-w-6xl scroll-mt-24 px-4">
        <div className="panel">
          <div className="panel-head">
            <span>
              <span className="text-accent">##</span> {language === 'fr' ? 'À propos' : 'About Me'}
            </span>
            <span className="text-dim">man rémi</span>
          </div>
          <div className="p-5 sm:p-6">
            <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-fg/90">
              {language === 'fr' ? (
                <>
                  <p>
                    Basé à Villeneuve-Loubet, France, j'ai plus de 18 ans d'expérience en développement logiciel et plus de 6 ans
                    en tant que Technicien chez SARL Soleo Tech (2017-2023), où j'ai développé une expertise en développement logiciel,
                    optimisation système, automatisation et rétro-ingénierie.
                  </p>
                  <p>
                    En 2025, j'ai repris 99% du développement de Qanga, un jeu multijoueur en monde ouvert sur Unreal Engine 5
                    (projet IolaCorp). Partant de zéro en C++ UE5, j'ai accumulé plus de 2 400 commits en moins d'un an,
                    en développant des forks moteur custom, des systèmes de vertex factory, des shaders HLSL/SM6 et des serveurs dédiés Linux.
                  </p>
                  <p>
                    Ma passion pour la technologie découle de mon parcours dans le gaming compétitif, notamment en
                    tant qu'ancien joueur professionnel de Counter-Strike (2014-2016) et détenteur de plusieurs records
                    mondiaux en simulation automobile depuis 2015. Cette quête de performance et d'efficacité se reflète
                    dans mon travail, axé sur les systèmes critiques en performance et l'optimisation temps réel.
                  </p>
                  <p>
                    Je me spécialise en C++ (Unreal Engine 5), Rust, C# et Python. Mon approche analytique et logique
                    me permet de résoudre des problèmes en les déconstruisant méthodiquement. En dehors du code,
                    je m'intéresse à l'astronomie, la science-fiction et la mythologie.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Based in Villeneuve-Loubet, France, I have 18+ years of experience in software development and over six years
                    as a Technician at SARL Soleo Tech (2017-2023), where I developed expertise in software development,
                    system optimization, automation, and reverse engineering.
                  </p>
                  <p>
                    In 2025, I took over 99% of development on Qanga, an open-world multiplayer game on Unreal Engine 5
                    (IolaCorp project). Starting from zero UE5 C++ experience, I accumulated 2,400+ commits in under a year,
                    building custom engine forks, vertex factory systems, HLSL/SM6 shaders, and dedicated Linux servers.
                  </p>
                  <p>
                    My passion for technology stems from my background in competitive gaming, notably as a former professional Counter-Strike player
                    (2014-2016) and a holder of multiple world records in racing simulation since 2015. This pursuit of performance and efficiency
                    is reflected in my work, which focuses on performance-critical systems and real-time optimization.
                  </p>
                  <p>
                    I specialize in C++ (Unreal Engine 5), Rust, C#, and Python. My analytical and logical approach allows me to
                    solve problems by methodically breaking them down. Beyond coding, I have a strong interest in astronomy,
                    science fiction, and mythology.
                  </p>
                </>
              )}
            </div>

            <ExperienceTimeline language={language} />
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="mx-auto mt-8 max-w-6xl scroll-mt-24 px-4">
        <div className="panel">
          <div className="panel-head">
            <span>
              <span className="text-accent">##</span> {language === 'fr' ? 'Travaillons Ensemble' : "Let's Work Together"}
            </span>
            <span className="text-dim">./contact.sh</span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="mb-6 max-w-2xl text-sm text-dim">
              {language === 'fr'
                ? "Vous avez un projet qui nécessite mon expertise ? N'hésitez pas à me contacter pour discuter de la façon dont je peux vous aider."
                : 'Do you have a project that requires my expertise? Feel free to reach out to discuss how I can help you.'}
            </p>

            <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              {/* Contact channels */}
              <div className="bg-panel p-5">
                <h3 className="mb-4 text-xs uppercase tracking-widest text-dim">
                  {language === 'fr' ? 'Me Contacter' : 'Contact'}
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="mailto:jobdorge.pro@gmail.com" className="flex items-center gap-3 link">
                    <Mail size={16} className="text-accent" /> jobdorge.pro@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 link">
                    <Linkedin size={16} className="text-accent" /> LinkedIn Profile
                  </a>
                  <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 link">
                    <Github size={16} className="text-accent" /> GitHub Profile
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="bg-panel p-5">
                <h3 className="mb-4 text-xs uppercase tracking-widest text-dim">
                  {language === 'fr' ? 'Envoyez un message' : 'Send a message'}
                </h3>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-wider text-dim">
                      {language === 'fr' ? 'Nom' : 'Name'}
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="field" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-wider text-dim">
                      Email
                    </label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="field" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-wider text-dim">
                      Message
                    </label>
                    <textarea id="message" rows="4" value={formData.message} onChange={handleInputChange} className="field resize-y" />
                  </div>

                  {formStatus.error && (
                    <div className="border border-alert/40 px-3 py-2 text-xs text-alert">
                      <span className="text-alert">! </span>{formStatus.error}
                    </div>
                  )}
                  {formStatus.isSubmitted && (
                    <div className="border border-accent/40 px-3 py-2 text-xs text-accent">
                      <span>✓ </span>
                      {language === 'fr' ? 'Message envoyé avec succès.' : 'Message sent successfully.'}
                    </div>
                  )}

                  <button type="submit" disabled={formStatus.isSubmitting} className="btn btn-accent disabled:cursor-not-allowed disabled:opacity-50">
                    {formStatus.isSubmitting
                      ? language === 'fr' ? 'envoi…' : 'sending…'
                      : language === 'fr' ? 'envoyer' : 'send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="mx-auto mb-10 mt-8 max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-2 border-t border-line pt-5 text-xs text-dim sm:flex-row sm:items-center">
          <p>
            <span className="text-accent">$</span> echo &quot;© Rz Software · neXuz-dev {new Date().getFullYear()}&quot;
          </p>
          <p>{language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
