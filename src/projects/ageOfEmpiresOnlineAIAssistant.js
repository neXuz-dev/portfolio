export default {
  tags: ["AutoIt", "Memory Manipulation", "FastFind.dll", "System Interaction"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Age of Empires Online AI Assistant",
          description: "A tool providing real-time alerts for resource management and villager activity in Age of Empires Online.",
          highlights: [
              "Custom memory interaction library (KDMemory.au3)",
              "Pixel detection for on-screen element monitoring",
              "Alerts for resource levels and villager status",
              "Event-driven system with hotkey support"
          ],
          detailedDescription: `
This project showcases my proficiency in automation, memory manipulation, and external library integration, using AutoIt. Developed as a learning exercise, the "AOE AI Assistant" monitors several in-game elements for the real-time strategy game, Age of Empires Online. While inspired by a game, the project's primary value is in demonstrating core programming principles applicable to a wide range of applications.

### Functionality

The script interacts directly with the game's running process. Key features include:

- **Resource Monitoring:** Reads in-game resource values (Food, Wood, Gold, Stone) directly from the game's memory using FLOAT data types. This demonstrates an understanding of memory addresses and data types.
- **Unit Selection:** Identifies the number of currently selected units through complex memory location reads.
- **Villager Alerts:** Provides notifications about idle villagers and resource availability, using keyboard shortcuts and pixel detection for on-screen cues.
- **Pause Toggle:** Implements a feature to pause and resume execution via hotkeys.

### Technical Highlights

- **Memory Interaction (KDMemory.au3):** Leverages a custom library to open the game process, obtain module base addresses, and read values at specific offsets using pointers, illustrating powerful process data extraction techniques.
- **External DLL Integration (FastFind.dll):** Integrates a third-party DLL for optimized pixel searching and color detection, extending functionality beyond AutoIt’s native capabilities, applicable to GUI automation and image processing.
- **AutoIt3Wrapper Directives:** Includes directives for compiling scripts into standalone executables, setting metadata (version, copyright), and embedding resources (e.g., icons), reflecting best practices.
- **Hotkeys and Event-Driven Programming:** Uses hotkeys for pause/resume, showcasing event-driven principles.
- **INI Configuration:** Employs an INI file for settings, enhancing adaptability.

### Why this Approach?

This project demonstrates low-level process interaction in a game context, but the techniques—memory reading, DLL integration, pixel detection—are broadly applicable. The choice of AutoIt highlights rapid prototyping skills, while external libraries show adaptability. The clean, well-commented, modular code emphasizes maintainability and software design principles, making it a strong example of technical capability.
  `
      },
      fr: {
          title: "Assistant IA Age of Empires Online",
          description: "Un outil fournissant des alertes en temps réel pour la gestion des ressources et l'activité des villageois dans Age of Empires Online.",
          highlights: [
              "Bibliothèque d'interaction mémoire personnalisée (KDMemory.au3)",
              "Détection de pixels pour la surveillance des éléments à l'écran",
              "Alertes pour les niveaux de ressources et l'état des villageois",
              "Système piloté par les événements avec prise en charge des raccourcis clavier"
          ],
          detailedDescription: `
Ce projet met en valeur ma maîtrise de l'automatisation, de la manipulation de la mémoire et de l'intégration de bibliothèques externes, en utilisant AutoIt. Développé comme un exercice d'apprentissage, l'"Assistant IA AOE" surveille plusieurs éléments en jeu pour le jeu de stratégie en temps réel, Age of Empires Online. Bien qu'inspiré par un jeu, la valeur principale du projet réside dans la démonstration des principes de programmation de base applicables à un large éventail d'applications.

### Fonctionnalités

Le script interagit directement avec le processus en cours d'exécution du jeu. Les principales caractéristiques comprennent :

- **Surveillance des ressources :** Lit les valeurs des ressources en jeu (Nourriture, Bois, Or, Pierre) directement à partir de la mémoire du jeu en utilisant des types de données FLOAT. Cela démontre une compréhension des adresses mémoire et des types de données.
- **Sélection d'unités :** Identifie le nombre d'unités actuellement sélectionnées grâce à des lectures complexes d'emplacements mémoire.
- **Alertes villageois :** Fournit des notifications sur les villageois inactifs et la disponibilité des ressources, en utilisant des raccourcis clavier et la détection de pixels pour les indices à l'écran.
- **Activation/désactivation de la pause :** Implémente une fonctionnalité pour mettre en pause et reprendre l'exécution via des raccourcis clavier.

### Points forts techniques

- **Interaction mémoire (KDMemory.au3) :** Tire parti d'une bibliothèque personnalisée pour ouvrir le processus du jeu, obtenir les adresses de base des modules et lire les valeurs à des décalages spécifiques à l'aide de pointeurs, illustrant de puissantes techniques d'extraction de données de processus.
- **Intégration de DLL externes (FastFind.dll) :** Intègre une DLL tierce pour la recherche optimisée de pixels et la détection des couleurs, étendant les fonctionnalités au-delà des capacités natives d'AutoIt, applicables à l'automatisation de l'interface graphique et au traitement d'image.
- **Directives AutoIt3Wrapper :** Inclut des directives pour compiler les scripts en exécutables autonomes, définir des métadonnées (version, copyright) et intégrer des ressources (par exemple, des icônes), reflétant les meilleures pratiques.
- **Raccourcis clavier et programmation pilotée par les événements :** Utilise des raccourcis clavier pour la pause/reprise, mettant en valeur les principes de la programmation pilotée par les événements.
- **Configuration INI :** Utilise un fichier INI pour les paramètres, améliorant l'adaptabilité.

### Pourquoi cette approche ?

Ce projet démontre l'interaction avec les processus de bas niveau dans un contexte de jeu, mais les techniques (lecture de la mémoire, intégration de DLL, détection de pixels) sont largement applicables. Le choix d'AutoIt met en évidence les compétences de prototypage rapide, tandis que les bibliothèques externes montrent l'adaptabilité. Le code propre, bien commenté et modulaire met l'accent sur la maintenabilité et les principes de conception logicielle, ce qui en fait un exemple solide de capacité technique.
  `
      }
  }
};