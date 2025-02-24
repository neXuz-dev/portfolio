export default {
  tags: ["C#", "WPF", "P/Invoke", "Image Processing"], // Tags remain language-agnostic
  content: {
      en: {
          title: "LastWarBot Gameplay Analyzer",
          description: "Pixel analysis system for gameplay data exploration in LastWar.",
          highlights: [
              "Custom pixel analysis with RzPixelAlgorithm.dll",
              "Real-time screen snapshot processing",
              "Asynchronous UI updates with Task.Run",
              "Global keyboard hook implementation"
          ],
          detailedDescription: `
LastWarBot is a sophisticated Windows desktop application built using C# and WPF, demonstrating proficiency in creating robust, event-driven software capable of interacting with other applications at a low level. The core is a custom pixel analysis engine, showcasing expertise in image processing and real-time system interaction. The primary goal was gaining in-depth experience with complex technical challenges rather than gameplay automation itself.

### Key Technologies & Skills Demonstrated

- **C# & .NET Framework:** Foundation for object-oriented and asynchronous programming with *Task* and *async/await*.
- **WPF:** Modern, responsive UI with XAML-based design, data binding, and custom styling.
- **P/Invoke:** Extensive use to bridge managed and unmanaged code (*RzPixelAlgorithm.dll*), handling *DllImport*, *StructLayout*, and data marshalling.
- **Win32 API Interaction:** Direct calls to *user32.dll* and *kernel32.dll* for window manipulation, input handling, and keyboard hooks (*SetWindowsHookEx*).
- **Image Processing:** *RzPixelAlgorithm.dll* offers efficient pixel data analysis (*FFNearestPixel*, *FFBestSpot*), beyond simple comparisons.
- **Asynchronous Programming:** *Task.Run* and *CancellationToken* ensure a responsive UI during long operations.

### Project Breakdown

1. **RzPixelAlgorithm.dll and RzPA:** Core engine for screen snapshotting, pixel searching, and change detection, wrapped in a C#-friendly interface.
2. **MainWindow.xaml.cs:** Manages UI, process interaction (BlueStacks), and an asynchronous image matching loop with logging.
3. **App.xaml.cs:** Handles application initialization and resource management.

### Functionality

- Takes snapshots of the BlueStacks window.
- Analyzes images for matches using RzPA.
- Provides detailed logging and pause/resume via keyboard hooks.

### Why This Project Matters

It demonstrates solving complex problems, integrating technologies, and building complete applications from scratch, with a focus on low-level techniques and custom algorithms, showcasing versatility and resourcefulness.
  `
      },
      fr: {
          title: "Analyseur de Gameplay LastWarBot",
          description: "Système d'analyse de pixels pour l'exploration des données de jeu dans LastWar.",
          highlights: [
              "Analyse de pixels personnalisée avec RzPixelAlgorithm.dll",
              "Traitement des captures d'écran en temps réel",
              "Mises à jour asynchrones de l'interface utilisateur avec Task.Run",
              "Implémentation de hooks de clavier globaux"
          ],
          detailedDescription: `
LastWarBot est une application de bureau Windows sophistiquée construite en C# et WPF, démontrant la maîtrise de la création de logiciels robustes et pilotés par les événements, capables d'interagir avec d'autres applications à un niveau bas. Le cœur est un moteur d'analyse de pixels personnalisé, mettant en valeur l'expertise en traitement d'image et en interaction système en temps réel. L'objectif principal était d'acquérir une expérience approfondie des défis techniques complexes plutôt que l'automatisation du gameplay lui-même.

### Technologies clés et compétences démontrées

- **C# & .NET Framework :** Base pour la programmation orientée objet et asynchrone avec *Task* et *async/await*.
- **WPF :** Interface utilisateur moderne et réactive avec une conception basée sur XAML, la liaison de données et un style personnalisé.
- **P/Invoke :** Utilisation extensive pour relier le code managé et non managé (*RzPixelAlgorithm.dll*), gérant *DllImport*, *StructLayout* et le marshalling des données.
- **Interaction avec l'API Win32 :** Appels directs à *user32.dll* et *kernel32.dll* pour la manipulation des fenêtres, la gestion des entrées et les hooks de clavier (*SetWindowsHookEx*).
- **Traitement d'image :** *RzPixelAlgorithm.dll* offre une analyse efficace des données de pixels (*FFNearestPixel*, *FFBestSpot*), au-delà des simples comparaisons.
- **Programmation asynchrone :** *Task.Run* et *CancellationToken* garantissent une interface utilisateur réactive pendant les opérations longues.

### Décomposition du projet

1. **RzPixelAlgorithm.dll et RzPA :** Moteur principal pour la capture d'écran, la recherche de pixels et la détection de changements, enveloppé dans une interface compatible C#.
2. **MainWindow.xaml.cs :** Gère l'interface utilisateur, l'interaction avec le processus (BlueStacks) et une boucle asynchrone de correspondance d'images avec journalisation.
3. **App.xaml.cs :** Gère l'initialisation de l'application et la gestion des ressources.

### Fonctionnalités

- Prend des captures d'écran de la fenêtre BlueStacks.
- Analyse les images pour trouver des correspondances à l'aide de RzPA.
- Fournit une journalisation détaillée et une pause/reprise via des hooks de clavier.

### Pourquoi ce projet est important

Il démontre la résolution de problèmes complexes, l'intégration de technologies et la construction d'applications complètes à partir de zéro, en mettant l'accent sur les techniques de bas niveau et les algorithmes personnalisés, mettant en valeur la polyvalence et l'ingéniosité.
  `
      },
  },
};