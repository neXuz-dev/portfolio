const products = [
  {
    id: 'ue5-mcp',
    icon: 'Gamepad2',
    price: 499.99,
    currency: 'EUR',
    tags: ['C++', 'Unreal Engine 5', 'MCP'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'UE5 Editor MCP',
        subtitle: 'AI-Assisted Unreal Engine Automation',
        description: 'MCP server providing AI assistants with full programmatic access to the Unreal Engine 5 editor. 46,000+ lines of production code. Automate repetitive tasks, inspect blueprints, and manipulate assets through natural language.',
        features: [
          'Actor, blueprint, and material manipulation',
          'Animation and widget blueprint operations',
          'Asset search, validation, and batch processing',
          'JSON-based protocol — works with any MCP-compatible AI',
        ],
      },
      fr: {
        name: 'UE5 Editor MCP',
        subtitle: 'Automatisation UE5 Assistee par IA',
        description: 'Serveur MCP donnant aux assistants IA un acces programmatique complet a l\'editeur Unreal Engine 5. 46 000+ lignes de code production. Automatisez les taches repetitives, inspectez les blueprints et manipulez les assets en langage naturel.',
        features: [
          'Manipulation d\'acteurs, blueprints et materiaux',
          'Operations sur animations et widget blueprints',
          'Recherche, validation et traitement par lots d\'assets',
          'Protocole JSON — compatible avec tout IA MCP',
        ],
      },
    },
  },
  {
    id: 'dynamic-quest-system',
    icon: 'Gamepad2',
    price: 599.99,
    currency: 'EUR',
    tags: ['C++', 'Unreal Engine 5', 'Gameplay'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'Dynamic Quest System',
        subtitle: 'Production-Grade UE5 Quest Framework',
        description: '52,000+ lines of C++ delivering a complete quest framework for Unreal Engine 5. Modular condition/objective architecture, async operations, thread-safe design, binary serialization, and support for 100+ concurrent quests per player.',
        features: [
          'Modular condition and objective architecture',
          'Async operations with thread-safe design',
          'Binary serialization and visual editor',
          'Event-driven progression with Blueprint integration',
        ],
      },
      fr: {
        name: 'Dynamic Quest System',
        subtitle: 'Framework de Quetes UE5 Production',
        description: '52 000+ lignes de C++ pour un framework de quetes complet pour Unreal Engine 5. Architecture modulaire condition/objectif, operations asynchrones, design thread-safe, serialisation binaire et support 100+ quetes concurrentes par joueur.',
        features: [
          'Architecture modulaire condition/objectif',
          'Operations asynchrones et design thread-safe',
          'Serialisation binaire et editeur visuel',
          'Progression evenementielle avec integration Blueprint',
        ],
      },
    },
  },
  {
    id: 'rz-indirect-instancing',
    icon: 'Cpu',
    price: 699.99,
    currency: 'EUR',
    tags: ['C++', 'Unreal Engine 5', 'Rendering'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'RzIndirectInstancing',
        subtitle: 'Custom GPU Instancing & Vertex Factory',
        description: '20,000+ lines of C++ implementing a custom vertex factory and GPU instancing system for UE5. RHI-level optimizations, custom HLSL/SM6 shaders, LOD support, and GPU scene mesh integration. Optimized for UE 5.7.',
        features: [
          'Custom vertex factory with RHI-level optimizations',
          'HLSL/SM6 shader development',
          'LOD support and GPU scene mesh integration',
          'Efficient rendering of high-count instances',
        ],
      },
      fr: {
        name: 'RzIndirectInstancing',
        subtitle: 'Instanciation GPU & Vertex Factory Custom',
        description: '20 000+ lignes de C++ implementant un vertex factory custom et un systeme d\'instanciation GPU pour UE5. Optimisations RHI, shaders HLSL/SM6 custom, support LOD et integration GPU scene mesh. Optimise pour UE 5.7.',
        features: [
          'Vertex factory custom avec optimisations RHI',
          'Developpement de shaders HLSL/SM6',
          'Support LOD et integration GPU scene mesh',
          'Rendu efficace de grandes quantites d\'instances',
        ],
      },
    },
  },
  {
    id: 'backblaze-mcp',
    icon: 'HardDrive',
    price: 249.99,
    currency: 'EUR',
    tags: ['TypeScript', 'MCP', 'Backup'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'Backblaze Computer Backup MCP',
        subtitle: 'AI Backup Management — Reverse Engineered',
        description: 'MCP server for Backblaze Computer Backup (not B2). Built through extensive reverse engineering of Backblaze\'s proprietary protocol — no public API exists for this. Browse, search, and restore files through AI.',
        features: [
          'Full file browsing and search across backups',
          'Restore creation and status monitoring',
          'Multi-computer support with 2FA',
          'Reverse-engineered protocol — the only MCP for non-B2 Backblaze',
        ],
      },
      fr: {
        name: 'Backblaze Computer Backup MCP',
        subtitle: 'Gestion de Backup IA — Reverse Engineere',
        description: 'Serveur MCP pour Backblaze Computer Backup (pas B2). Construit par reverse engineering approfondi du protocole proprietaire Backblaze — aucune API publique n\'existe. Parcourez, recherchez et restaurez des fichiers via IA.',
        features: [
          'Navigation et recherche completes dans les backups',
          'Creation de restaurations et suivi de statut',
          'Support multi-ordinateur avec 2FA',
          'Protocole reverse-engineere — le seul MCP pour Backblaze non-B2',
        ],
      },
    },
  },
  {
    id: 'rzcloak',
    icon: 'Shield',
    price: 249.99,
    currency: 'EUR',
    tags: ['Rust', 'Security', 'Windows'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'RzCloak',
        subtitle: 'Binary Protection Tool',
        description: 'Rust-based binary protection and obfuscation tool for Windows executables. Hardens your compiled binaries against reverse engineering and tampering.',
        features: [
          'PE binary obfuscation and hardening',
          'Anti-debugging and anti-tampering checks',
          'Import table protection',
          'Lightweight — no runtime dependencies',
        ],
      },
      fr: {
        name: 'RzCloak',
        subtitle: 'Outil de Protection Binaire',
        description: 'Outil de protection et d\'obfuscation de binaires en Rust pour les executables Windows. Renforce vos binaires compiles contre le reverse engineering et la falsification.',
        features: [
          'Obfuscation et renforcement de binaires PE',
          'Protections anti-debugging et anti-tampering',
          'Protection de la table d\'imports',
          'Leger — aucune dependance runtime',
        ],
      },
    },
  },
  {
    id: 'trace-exporter',
    icon: 'Cpu',
    price: 99.99,
    currency: 'EUR',
    tags: ['Rust', 'Unreal Engine 5', 'Profiling'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'TraceFrameExporter',
        subtitle: 'Unreal Insights Trace Analyzer',
        description: 'AI-friendly Unreal Insights trace analyzer. Extracts structured performance data from .utrace files — frame stats, CPU/GPU timers, thread breakdowns — into formats AI tools can reason about.',
        features: [
          'Aggregated frame analysis (avg/p95/p99)',
          'Hierarchical call trees with timing data',
          'Thread breakdown with percentage attribution',
          'CLI tool — integrates into any pipeline',
        ],
      },
      fr: {
        name: 'TraceFrameExporter',
        subtitle: 'Analyseur de Traces Unreal Insights',
        description: 'Analyseur de traces Unreal Insights optimise pour l\'IA. Extrait des donnees de performance structurees depuis les fichiers .utrace — stats de frames, timers CPU/GPU, ventilation par thread.',
        features: [
          'Analyse agregee de frames (avg/p95/p99)',
          'Arbres d\'appels hierarchiques avec donnees de timing',
          'Ventilation par thread avec attribution en pourcentage',
          'Outil CLI — s\'integre dans tout pipeline',
        ],
      },
    },
  },
  {
    id: 'server-manager-template',
    icon: 'Gamepad2',
    price: 99.99,
    currency: 'EUR',
    tags: ['Rust', 'SSH', 'egui'],
    purchaseUrl: null,
    content: {
      en: {
        name: 'Game Server Manager',
        subtitle: 'Rust SSH Server Management GUI',
        description: 'Template Rust/egui application for managing dedicated game servers via SSH. Multi-region support, real-time log streaming, and secure credential storage. Adapt it to any game server.',
        features: [
          'Multi-region server management',
          'Real-time log streaming and monitoring',
          'Encrypted SSH key storage',
          'Audio alerts for server events',
        ],
      },
      fr: {
        name: 'Game Server Manager',
        subtitle: 'GUI Rust de Gestion Serveur SSH',
        description: 'Application template Rust/egui pour gerer des serveurs de jeu dedies via SSH. Support multi-region, streaming de logs en temps reel et stockage securise. Adaptable a tout serveur de jeu.',
        features: [
          'Gestion de serveurs multi-regions',
          'Streaming et monitoring de logs en temps reel',
          'Stockage chiffre de cles SSH',
          'Alertes audio pour les evenements serveur',
        ],
      },
    },
  },
  {
    id: 'custom-dev',
    icon: 'Cpu',
    price: null,
    currency: 'EUR',
    tags: ['C++', 'Rust', 'MCP'],
    isService: true,
    purchaseUrl: null,
    content: {
      en: {
        name: 'Custom Development',
        subtitle: 'Tools & Plugins On Demand',
        description: 'Need a custom MCP server, UE5 plugin, Rust tool, or automation solution? I build production-grade software tailored to your exact requirements.',
        features: [
          'Custom MCP servers for any service',
          'UE5 C++ plugin development',
          'Rust CLI tools and GUI applications',
          'Reverse engineering and systems integration',
        ],
      },
      fr: {
        name: 'Developpement Sur Mesure',
        subtitle: 'Outils & Plugins a la Demande',
        description: 'Besoin d\'un serveur MCP custom, d\'un plugin UE5, d\'un outil Rust ou d\'une solution d\'automatisation ? Je developpe des logiciels de qualite production adaptes a vos besoins.',
        features: [
          'Serveurs MCP custom pour tout service',
          'Developpement de plugins C++ UE5',
          'Outils CLI et applications GUI en Rust',
          'Reverse engineering et integration systeme',
        ],
      },
    },
  },
];

export default products;
