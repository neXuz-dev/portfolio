export default {
  tags: ["Python", "RLBot Framework", "Windows API", "Real-time Systems", "Strategic Decision Making"],  // Tags remain language-agnostic
  content: {
      en: {
          title: "RLBot Nexto/Immortal Auto-Switcher",
          description: "A strategic plugin for RLBot that dynamically switches between two specialized bots to optimize gameplay performance.",
          highlights: [
              "Intelligent real-time bot switching logic",
              "Low-level Windows API integration",
              "Optimized vector operations for performance",
              "Advanced game state analysis",
              "Debounced control system"
          ],
          detailedDescription: `
This project demonstrates expertise in competitive software development through a sophisticated RLBot plugin that combines the strengths of two renowned bots ("Nexto" and "Immortal") by intelligently switching between them based on real-time game conditions.

### Core Features & Technical Implementation

- **Strategic Bot Management:**
  - Analyzes game state including positions, boost levels, team data, and goals
  - Makes real-time decisions for optimal bot selection
  - Implements sophisticated air dribble detection
  - Manages post-goal reset behaviors

- **Windows API Integration:**
  - Uses ctypes for direct Windows API interaction
  - Implements SendInput for keyboard simulation
  - Demonstrates low-level system control capabilities

- **Performance Optimization:**
  - Custom Vector class with __slots__ for memory efficiency
  - Optimized distance calculations avoiding square roots
  - Debounced switching mechanism to prevent oscillation

### Architecture & Design

- **Core Components:**
  - plugin_AutoNextmortal class for centralized control
  - Sophisticated switching logic with multiple condition checks
  - Real-time monitoring and analysis system
  - Integration with RLBot framework

- **Decision Logic:**
  - Activates "Immortal" for aerial opportunities
  - Falls back to "Nexto" for ground play and defense
  - Includes opponent proximity analysis
  - Maintains consistent post-goal behavior

### Technical Significance

This project showcases:
- Advanced real-time system development
- Strategic integration of existing solutions
- Performance-oriented optimization
- Practical application of game theory concepts

The implementation demonstrates strong capabilities in system-level programming, strategic decision-making, and optimization of real-time systems, with skills directly applicable to competitive software development environments.
  `
      },
      fr: {
          title: "Auto-Switcher RLBot Nexto/Immortal",
          description: "Un plugin stratégique pour RLBot qui bascule dynamiquement entre deux bots spécialisés pour optimiser les performances de jeu.",
          highlights: [
              "Logique intelligente de changement de bot en temps réel",
              "Intégration de l'API Windows de bas niveau",
              "Opérations vectorielles optimisées pour la performance",
              "Analyse avancée de l'état du jeu",
              "Système de contrôle anti-rebond"
          ],
          detailedDescription: `
Ce projet démontre une expertise dans le développement de logiciels compétitifs grâce à un plugin RLBot sophistiqué qui combine les forces de deux bots renommés ("Nexto" et "Immortal") en basculant intelligemment entre eux en fonction des conditions de jeu en temps réel.

### Principales caractéristiques et mise en œuvre technique

- **Gestion stratégique des bots :**
  - Analyse l'état du jeu, y compris les positions, les niveaux de boost, les données de l'équipe et les buts
  - Prend des décisions en temps réel pour une sélection optimale du bot
  - Implémente une détection sophistiquée des dribbles aériens
  - Gère les comportements de réinitialisation après un but

- **Intégration de l'API Windows :**
  - Utilise ctypes pour une interaction directe avec l'API Windows
  - Implémente SendInput pour la simulation du clavier
  - Démontre des capacités de contrôle système de bas niveau

- **Optimisation des performances :**
  - Classe Vector personnalisée avec __slots__ pour l'efficacité de la mémoire
  - Calculs de distance optimisés évitant les racines carrées
  - Mécanisme de commutation anti-rebond pour éviter les oscillations

### Architecture et conception

- **Composants principaux :**
  - Classe plugin_AutoNextmortal pour un contrôle centralisé
  - Logique de commutation sophistiquée avec de multiples vérifications de conditions
  - Système de surveillance et d'analyse en temps réel
  - Intégration avec le framework RLBot

- **Logique de décision :**
  - Active "Immortal" pour les opportunités aériennes
  - Revient à "Nexto" pour le jeu au sol et la défense
  - Inclut l'analyse de la proximité de l'adversaire
  - Maintient un comportement cohérent après un but

### Importance technique

Ce projet met en valeur :
- Le développement de systèmes avancés en temps réel
- L'intégration stratégique de solutions existantes
- L'optimisation axée sur la performance
- L'application pratique de concepts de la théorie des jeux

La mise en œuvre démontre de solides capacités en programmation au niveau du système, en prise de décision stratégique et en optimisation des systèmes en temps réel, avec des compétences directement applicables aux environnements de développement de logiciels compétitifs.
  `
      }
  }
};