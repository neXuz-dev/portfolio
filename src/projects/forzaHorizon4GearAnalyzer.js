export default {
  tags: ["AutoIt", "AutoHotkey", "KDMemory", "Controller Input"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Forza Horizon 4 Gear Analyzer",
          description: "A multi-component system for studying gear shifting in Forza Horizon 4.",
          highlights: [
            "Memory-based gear analysis",
            "Joystick input processing",
            "Multi-script architecture",
            "Configurable settings"
          ],
          detailedDescription: `
This sophisticated multi-component system automates gear shifting analysis in Forza Horizon 4 using AutoIt and AutoHotkey, demonstrating low-level programming, memory manipulation, and input processing skills for technical mastery.

### System Architecture

- **GearAI_v7_clutch.au3:** Core script for memory-based gear analysis with GUI.
- **KDMemory.au3:** Custom library for memory operations.
- **RzPadder.au3:** Processes joystick inputs into keyboard presses.
- **_IsPressed360.au3:** Reads Xbox 360 controller data.
- **DragAI_v2.ahk & SkillsFarm_v1.ahk:** Supplementary automation scripts.

### Key Features

- Real-time gear analysis with memory reads.
- Gradient-based joystick control.
- Modular, configurable design with INI files.

### Why Impressive

A real-time system interacting at the memory level, showcasing mastery of low-level concepts, system architecture, and hardware integration, with broad applicability to automation and technical analysis.
  `
      },
      fr: {
          title: "Analyseur de Vitesse Forza Horizon 4",
          description: "Un système multi-composants pour étudier le changement de vitesse dans Forza Horizon 4.",
          highlights: [
              "Analyse de vitesse basée sur la mémoire",
              "Traitement des entrées du joystick",
              "Architecture multi-scripts",
              "Paramètres configurables"
          ],
          detailedDescription: `
  Ce système multi-composants sophistiqué automatise l'analyse du changement de vitesse dans Forza Horizon 4 en utilisant AutoIt et AutoHotkey, démontrant des compétences en programmation de bas niveau, en manipulation de la mémoire et en traitement des entrées pour une maîtrise technique.

  ### Architecture du système

  - **GearAI_v7_clutch.au3 :** Script principal pour l'analyse de vitesse basée sur la mémoire avec interface graphique.
  - **KDMemory.au3 :** Bibliothèque personnalisée pour les opérations mémoire.
  - **RzPadder.au3 :** Traite les entrées du joystick en pressions de touches.
  - **_IsPressed360.au3 :** Lit les données de la manette Xbox 360.
  - **DragAI_v2.ahk & SkillsFarm_v1.ahk :** Scripts d'automatisation supplémentaires.

  ### Principales caractéristiques

  - Analyse de vitesse en temps réel avec des lectures de mémoire.
  - Contrôle du joystick basé sur le gradient.
  - Conception modulaire et configurable avec des fichiers INI.

  ### Pourquoi impressionnant

  Un système en temps réel interagissant au niveau de la mémoire, mettant en valeur la maîtrise des concepts de bas niveau, de l'architecture système et de l'intégration matérielle, avec une large applicabilité à l'automatisation et à l'analyse technique.
      `
      }
  }
};