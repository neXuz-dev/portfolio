export default {
  tags: ["C#", "Windows API", "Memory Manipulation", "Input Simulation"], // Tags remain language-agnostic
  content: {
      en: {
          title: "RLTool Gameplay Analyzer",
          description: "A C# tool for studying Rocket League gameplay data through memory analysis.",
          highlights: [
              "Real-time roll value monitoring",
              "Dynamic memory address resolution",
              "Input simulation for study",
              "Modular design with ghapi.cs"
          ],
          detailedDescription: `
RLTool is a C# application designed to interact with Rocket League, demonstrating a strong understanding of low-level system programming, memory manipulation, and real-time process interaction, motivated by a desire to learn these concepts.

### Key Features and Technical Highlights

- **Process Interaction:** Reliably locates and interacts with *RocketLeague.exe* using *kernel32.dll* functions (*OpenProcess*, *ReadProcessMemory*).
- **Memory Reading:** Reads the player’s roll value from memory using pointer arithmetic and dynamic address resolution with *FindDMAAddy*, showcasing memory structure mastery.
- **Input Simulation:** Simulates keyboard and mouse inputs based on roll values and user triggers (\\ key) via *InputSimulatorStandard*, useful for technical study.
- **Real-time Response:** Runs in a continuous *while(true)* loop with *Thread.Sleep()* for performance, monitoring and reacting dynamically.
- **Modular Design:** Separates core functionality into *ghapi.cs* for reusability and maintainability.

### Capabilities Demonstrated

- Direct interaction with Windows OS at a low level.
- Understanding and manipulating memory structures.
- Creating responsive, event-driven applications.
- Designing modular, maintainable code.

While focused on Rocket League, the principles are broadly applicable to system utilities, game development tools, and real-time data processing, reflecting a developer capable of tackling complex challenges.
  `
      },
      fr: {
          title: "Analyseur de Gameplay RLTool",
          description: "Un outil C# pour étudier les données de gameplay de Rocket League grâce à l'analyse de la mémoire.",
          highlights: [
              "Surveillance en temps réel de la valeur de roulis",
              "Résolution dynamique des adresses mémoire",
              "Simulation d'entrée pour l'étude",
              "Conception modulaire avec ghapi.cs"
          ],
          detailedDescription: `
RLTool est une application C# conçue pour interagir avec Rocket League, démontrant une solide compréhension de la programmation système de bas niveau, de la manipulation de la mémoire et de l'interaction avec les processus en temps réel, motivée par le désir d'apprendre ces concepts.

### Principales caractéristiques et points forts techniques

- **Interaction avec les processus :** Localise et interagit de manière fiable avec *RocketLeague.exe* en utilisant les fonctions de *kernel32.dll* (*OpenProcess*, *ReadProcessMemory*).
- **Lecture de la mémoire :** Lit la valeur de roulis du joueur à partir de la mémoire en utilisant l'arithmétique des pointeurs et la résolution dynamique des adresses avec *FindDMAAddy*, démontrant la maîtrise de la structure de la mémoire.
- **Simulation d'entrée :** Simule les entrées du clavier et de la souris en fonction des valeurs de roulis et des déclencheurs utilisateur (touche \\) via *InputSimulatorStandard*, utile pour l'étude technique.
- **Réponse en temps réel :** S'exécute dans une boucle continue *while(true)* avec *Thread.Sleep()* pour la performance, surveillant et réagissant dynamiquement.
- **Conception modulaire :** Sépare les fonctionnalités de base dans *ghapi.cs* pour la réutilisation et la maintenabilité.

### Capacités démontrées

- Interaction directe avec le système d'exploitation Windows à un niveau bas.
- Compréhension et manipulation des structures de mémoire.
- Création d'applications réactives et pilotées par les événements.
- Conception de code modulaire et maintenable.

Bien qu'il soit axé sur Rocket League, les principes sont largement applicables aux utilitaires système, aux outils de développement de jeux et au traitement des données en temps réel, reflétant un développeur capable de relever des défis complexes.
  `
      }
  }
};