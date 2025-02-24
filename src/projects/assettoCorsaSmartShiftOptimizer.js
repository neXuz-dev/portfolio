export default {
  tags: ["C#", ".NET", "Windows API", "Memory Manipulation"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Assetto Corsa Smart Shift Optimizer",
          description: "A tool for analyzing and optimizing gear shifting patterns in Assetto Corsa, built to study real-time data processing.",
          highlights: [
            "Dynamic memory address resolution for data analysis",
            "Real-time extraction of RPM and gear data",
            "Simulation of optimal shift points for learning purposes",
            "Configurable settings via external INI files"
          ],
          detailedDescription: `
This project showcases my ability to interact with external processes, perform memory reading/writing, and implement a complex algorithm in C#. The Smart Shift Optimizer for Assetto Corsa dynamically analyzes gear shifting points based on live game data, serving as a platform to master advanced memory manipulation and process interaction techniques in a real-time racing simulator context.

### Key Technologies & Concepts

- **C# and .NET Framework:** Chosen for robust performance and system API access.
- **Windows API (Kernel32):** Uses *OpenProcess*, *ReadProcessMemory*, *WriteProcessMemory*, *CreateToolhelp32Snapshot*, *Module32First*, and *Module32Next* for direct memory access and process introspection.
- **Memory Manipulation:** Locates and interprets specific memory addresses using pointer arithmetic and dynamic memory allocation (DMA).
- **External Process Control:** Employs *InputSimulatorStandard* for virtual keypress simulation.

### Functionality

1. **Process Identification & Connection:** Automatically identifies and connects to the Assetto Corsa process.
2. **Dynamic Address Calculation:** Calculates memory addresses for RPM and gear data using base addresses and offsets.
3. **Real-time Data Acquisition:** Continuously monitors current RPM and gear values.
4. **Shift Point Analysis:** Determines optimal shift moments based on pre-calculated points or generic formulas, extracted from game data files.
5. **Gear Shift Simulation:** Sends shift commands for study purposes.
6. **Data Persistence:** Persists optimal shift points for each car via file I/O.
7. **Parameter Optimization:** Analyzes additional parameters like fuel and tire temperatures.

### Why This Project Matters

It highlights deep skills in:
- Reverse-engineering complex applications.
- Working with unmanaged code and Windows API.
- Solving real-time data challenges.
- Creating practical, performant tools.

The focus was on mastering these techniques, using the game as a challenging platform to demonstrate technical prowess, with applications in system optimization and real-time data analysis.
  `
      },
      fr: {
          title: "Optimiseur de Changement de Vitesse Intelligent pour Assetto Corsa",
          description: "Un outil pour analyser et optimiser les schémas de changement de vitesse dans Assetto Corsa, construit pour étudier le traitement de données en temps réel.",
          highlights: [
              "Résolution dynamique des adresses mémoire pour l'analyse des données",
              "Extraction en temps réel des données de RPM et de rapport",
              "Simulation des points de changement de vitesse optimaux à des fins d'apprentissage",
              "Paramètres configurables via des fichiers INI externes"
          ],
          detailedDescription: `
Ce projet met en valeur ma capacité à interagir avec des processus externes, à effectuer des lectures/écritures de mémoire et à mettre en œuvre un algorithme complexe en C#. L'optimiseur de changement de vitesse intelligent pour Assetto Corsa analyse dynamiquement les points de changement de vitesse en fonction des données de jeu en direct, servant de plateforme pour maîtriser les techniques avancées de manipulation de la mémoire et d'interaction des processus dans un contexte de simulateur de course en temps réel.

### Technologies et concepts clés

- **C# et .NET Framework :** Choisis pour des performances robustes et l'accès à l'API système.
- **API Windows (Kernel32) :** Utilise *OpenProcess*, *ReadProcessMemory*, *WriteProcessMemory*, *CreateToolhelp32Snapshot*, *Module32First* et *Module32Next* pour l'accès direct à la mémoire et l'introspection des processus.
- **Manipulation de la mémoire :** Localise et interprète des adresses mémoire spécifiques en utilisant l'arithmétique des pointeurs et l'allocation dynamique de mémoire (DMA).
- **Contrôle des processus externes :** Utilise *InputSimulatorStandard* pour la simulation de touches virtuelles.

### Fonctionnalités

1. **Identification et connexion du processus :** Identifie et se connecte automatiquement au processus Assetto Corsa.
2. **Calcul dynamique des adresses :** Calcule les adresses mémoire pour les données de RPM et de rapport en utilisant des adresses de base et des décalages.
3. **Acquisition de données en temps réel :** Surveille en continu les valeurs actuelles de RPM et de rapport.
4. **Analyse des points de changement de vitesse :** Détermine les moments de changement de vitesse optimaux en fonction de points précalculés ou de formules génériques, extraits des fichiers de données du jeu.
5. **Simulation du changement de vitesse :** Envoie des commandes de changement de vitesse à des fins d'étude.
6. **Persistance des données :** Conserve les points de changement de vitesse optimaux pour chaque voiture via des E/S de fichiers.
7. **Optimisation des paramètres :** Analyse des paramètres supplémentaires comme le carburant et la température des pneus.

### Pourquoi ce projet est important

Il met en évidence des compétences approfondies en :
- Rétro-ingénierie d'applications complexes.
- Travail avec du code non managé et l'API Windows.
- Résolution des problèmes de données en temps réel.
- Création d'outils pratiques et performants.

L'accent a été mis sur la maîtrise de ces techniques, en utilisant le jeu comme une plateforme stimulante pour démontrer les prouesses techniques, avec des applications dans l'optimisation des systèmes et l'analyse des données en temps réel.
  `
      }
  }
};