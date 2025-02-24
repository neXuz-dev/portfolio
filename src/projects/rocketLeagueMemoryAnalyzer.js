export default {
  tags: ["C++", "Windows API", "Reverse Engineering", "Memory Analysis", "ASM"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Rocket League Memory Analyzer",
          description: "C++ tool for analyzing Unreal Engine memory structures in Rocket League.",
          highlights: [
              "Pattern scanning for memory locations",
              "GNames and GObjects address resolution",
              "Robust process module enumeration",
              "Detailed error handling"
          ],
          detailedDescription: `
This project demonstrates a strong understanding of reverse engineering principles, memory analysis, and low-level system programming in C++. The core objective was to explore the internal workings of Rocket League by interacting directly with its memory space to locate Unreal Engine structures (GNames, GObjects), focusing on learning rather than modification.

### What it Does

The *main.cpp* application identifies memory addresses for *GNames* and *GObjects*, fundamental Unreal Engine data structures, enabling potential inspection of game objects and properties.

### Why and How

- **Motivation:** A deep dive into low-level system interactions and complex application internals.
- **Technique:** Uses pattern scanning (signature scanning) to find unique byte sequences within *RocketLeague.exe*, avoiding hardcoded addresses that change with updates.
- **find_pattern_in_module():** Enumerates modules with *CreateToolhelp32Snapshot*, isolates *RocketLeague.exe*, and searches for patterns, leveraging *parsePattern* for efficient byte matching.
- **get_gname_address() and get_gobjects_address():** Encapsulate pattern searches with specific byte patterns, including detailed offset calculations.
- **Robust Error Handling:** Checks for invalid handles and failed searches with informative messages.

### Key Skills Demonstrated

- **C++ Proficiency:** Uses standard features (strings, vectors) and pointer management.
- **Reverse Engineering:** Applies pattern scanning and memory analysis techniques.
- **Windows API:** Effective module enumeration and process interaction.
- **Analytical Skills:** Implied ability to analyze disassembled code for pattern derivation.

This project provides evidence of initiative and a technical foundation in systems programming, serving as a starting point for deeper memory-based projects in game development or security research.
  `
      },
      fr: {
          title: "Analyseur de Mémoire Rocket League",
          description: "Outil C++ pour analyser les structures de mémoire d'Unreal Engine dans Rocket League.",
          highlights: [
              "Balayage de motifs pour les emplacements mémoire",
              "Résolution des adresses GNames et GObjects",
              "Énumération robuste des modules de processus",
              "Gestion détaillée des erreurs"
          ],
          detailedDescription: `
Ce projet démontre une solide compréhension des principes de rétro-ingénierie, de l'analyse de la mémoire et de la programmation système de bas niveau en C++. L'objectif principal était d'explorer le fonctionnement interne de Rocket League en interagissant directement avec son espace mémoire pour localiser les structures Unreal Engine (GNames, GObjects), en se concentrant sur l'apprentissage plutôt que sur la modification.

### Ce qu'il fait

L'application *main.cpp* identifie les adresses mémoire pour *GNames* et *GObjects*, des structures de données fondamentales d'Unreal Engine, permettant une inspection potentielle des objets et des propriétés du jeu.

### Pourquoi et comment

- **Motivation :** Une immersion profonde dans les interactions système de bas niveau et les mécanismes internes des applications complexes.
- **Technique :** Utilise le balayage de motifs (balayage de signature) pour trouver des séquences d'octets uniques dans *RocketLeague.exe*, en évitant les adresses codées en dur qui changent avec les mises à jour.
- **find_pattern_in_module() :** Énumère les modules avec *CreateToolhelp32Snapshot*, isole *RocketLeague.exe* et recherche des motifs, en utilisant *parsePattern* pour une correspondance efficace des octets.
- **get_gname_address() et get_gobjects_address() :** Encapsulent les recherches de motifs avec des motifs d'octets spécifiques, y compris des calculs d'offset détaillés.
- **Gestion robuste des erreurs :** Vérifie les handles invalides et les recherches infructueuses avec des messages informatifs.

### Compétences clés démontrées

- **Maîtrise de C++ :** Utilise des fonctionnalités standard (chaînes, vecteurs) et la gestion des pointeurs.
- **Rétro-ingénierie :** Applique des techniques de balayage de motifs et d'analyse de la mémoire.
- **API Windows :** Énumération efficace des modules et interaction avec les processus.
- **Compétences analytiques :** Capacité implicite à analyser le code désassemblé pour la dérivation de motifs.

Ce projet témoigne d'une initiative et d'une base technique en programmation système, servant de point de départ pour des projets plus approfondis basés sur la mémoire dans le développement de jeux ou la recherche en sécurité.
  `
      }
  }
};