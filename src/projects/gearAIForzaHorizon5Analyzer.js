export default {
  tags: ["AutoIt", "KDMemory", "Windows API", "Real-time Data"], // Tags remain language-agnostic
  content: {
      en: {
          title: "GearAI (Forza Horizon 5) Analyzer",
          description: "A tool for analyzing gear shifting in Forza Horizon 5.",
          highlights: [
              "Real-time speed and gear monitoring",
              "Custom memory library integration",
              "Configurable via INI files",
              "User-friendly GUI"
          ],
          detailedDescription: `
GearAI is a sophisticated AutoIt tool designed to analyze gear shifting in Forza Horizon 5, demonstrating deep understanding of low-level system interaction, memory manipulation, and real-time data processing, aimed at mastering these concepts.

### Key Technologies & Concepts

- **Process Interaction:** Identifies *ForzaHorizon5.exe* and retrieves module base addresses.
- **Memory Reading & Writing:** Uses custom *KDMemory* library to monitor speed and gear.
- **Dynamic Analysis:** Configurable shift points via *config.ini* for adaptability.
- **GUI:** Provides real-time feedback and car profile selection.
- **Hotkeys:** *PAUSE* and *HOME* keys control operation.

### How It Works

- Loads *config.ini*, sets up GUI, monitors process, analyzes data, and updates UI in real-time.

### Why This Matters

- **Reverse Engineering:** Identifies memory locations for data analysis.
- **System-Level:** Direct memory and process interaction.
- **Algorithmic Thinking:** Designs gear shift logic.
- **Professionalism:** Compiled as a standalone executable.

A strong example of core programming principles and technical learning applied practically.
  `
      },
      fr: {
          title: "Analyseur GearAI (Forza Horizon 5)",
          description: "Un outil pour analyser le changement de vitesse dans Forza Horizon 5.",
          highlights: [
              "Surveillance en temps réel de la vitesse et du rapport",
              "Intégration d'une bibliothèque de mémoire personnalisée",
              "Configurable via des fichiers INI",
              "Interface graphique conviviale"
          ],
          detailedDescription: `
GearAI est un outil AutoIt sophistiqué conçu pour analyser le changement de vitesse dans Forza Horizon 5, démontrant une compréhension approfondie de l'interaction système de bas niveau, de la manipulation de la mémoire et du traitement des données en temps réel, visant à maîtriser ces concepts.

### Technologies et concepts clés

- **Interaction avec les processus :** Identifie *ForzaHorizon5.exe* et récupère les adresses de base des modules.
- **Lecture et écriture de la mémoire :** Utilise la bibliothèque personnalisée *KDMemory* pour surveiller la vitesse et le rapport.
- **Analyse dynamique :** Points de changement de vitesse configurables via *config.ini* pour l'adaptabilité.
- **Interface graphique :** Fournit un retour d'information en temps réel et une sélection de profil de voiture.
- **Raccourcis clavier :** Les touches *PAUSE* et *HOME* contrôlent le fonctionnement.

### Comment ça marche

- Charge *config.ini*, configure l'interface graphique, surveille le processus, analyse les données et met à jour l'interface utilisateur en temps réel.

### Pourquoi c'est important

- **Rétro-ingénierie :** Identifie les emplacements mémoire pour l'analyse des données.
- **Niveau système :** Interaction directe avec la mémoire et les processus.
- **Pensée algorithmique :** Conçoit la logique de changement de vitesse.
- **Professionnalisme :** Compilé en tant qu'exécutable autonome.

Un exemple solide de principes de programmation de base et d'apprentissage technique appliqué de manière pratique.
  `
      }
  }
};