export default {
  tags: ["C#", "Windows API", "Memory Manipulation", "Reverse Engineering"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Wo Long Interaction Analyzer",
          description: "A tool for studying game interactions in Wo Long: Fallen Dynasty via memory analysis.",
          highlights: [
              "Dynamic memory address resolution",
              "Real-time state detection",
              "Input simulation for analysis",
              "External library integration"
          ],
          detailedDescription: `
This project showcases proficiency in reverse engineering and low-level system interaction using C#. Designed to study interactions in Wo Long: Fallen Dynasty, it focuses on understanding memory manipulation and process interaction rather than gameplay modification.

### Functionality

- Identifies the game process with *Process.GetProcessesByName*.
- Accesses memory via *kernel32.dll* (*OpenProcess*, *ReadProcessMemory*) to detect enemy attack states.
- Simulates inputs (F key) using *InputSimulatorStandard* to analyze parry timing.
- Uses static addresses for demonstration, with capability for dynamic resolution via *FindDMAAddy*.

### Key Technologies and Concepts

- **C# and .NET:** Robust foundation for development.
- **Windows API:** Direct process and memory interaction.
- **Memory Management:** Reads and interprets game state data.
- **Reverse Engineering:** Implies understanding of memory address identification.
- **Multithreading:** *Thread.Sleep* manages timing.
- **External Libraries:** Integrates nuget packages for enhanced functionality.

### Why this Project Matters

It demonstrates going beyond surface-level development, tackling complex systems with fundamental memory and process management skills. Applicable to system utilities, debugging tools, and performance optimization, it reflects efficient teamwork potential with clear, documented code.
          `
      },
      fr: {
          title: "Analyseur d'Interaction Wo Long",
          description: "Un outil pour étudier les interactions de jeu dans Wo Long: Fallen Dynasty via l'analyse de la mémoire.",
          highlights: [
              "Résolution dynamique des adresses mémoire",
              "Détection d'état en temps réel",
              "Simulation d'entrée pour l'analyse",
              "Intégration de bibliothèques externes"
          ],
          detailedDescription: `
Ce projet met en valeur la maîtrise de la rétro-ingénierie et de l'interaction système de bas niveau en utilisant C#. Conçu pour étudier les interactions dans Wo Long: Fallen Dynasty, il se concentre sur la compréhension de la manipulation de la mémoire et de l'interaction des processus plutôt que sur la modification du gameplay.

### Fonctionnalités

- Identifie le processus du jeu avec *Process.GetProcessesByName*.
- Accède à la mémoire via *kernel32.dll* (*OpenProcess*, *ReadProcessMemory*) pour détecter les états d'attaque des ennemis.
- Simule les entrées (touche F) en utilisant *InputSimulatorStandard* pour analyser le timing de la parade.
- Utilise des adresses statiques pour la démonstration, avec la possibilité d'une résolution dynamique via *FindDMAAddy*.

### Technologies et concepts clés

- **C# et .NET :** Base solide pour le développement.
- **API Windows :** Interaction directe avec les processus et la mémoire.
- **Gestion de la mémoire :** Lit et interprète les données d'état du jeu.
- **Rétro-ingénierie :** Implique la compréhension de l'identification des adresses mémoire.
- **Multithreading :** *Thread.Sleep* gère le timing.
- **Bibliothèques externes :** Intègre des packages nuget pour des fonctionnalités améliorées.

### Pourquoi ce projet est important

Il démontre qu'il va au-delà du développement de surface, en s'attaquant à des systèmes complexes avec des compétences fondamentales en gestion de la mémoire et des processus. Applicable aux utilitaires système, aux outils de débogage et à l'optimisation des performances, il reflète un potentiel de travail d'équipe efficace avec un code clair et documenté.
          `
      }
  }
};