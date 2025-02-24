export default {
  tags: ["C#", "Windows API", "Input Simulation", "Memory Analysis"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Path of Exile Data Monitor",
          description: "A utility for monitoring in-game data in Path of Exile to study memory structures.",
          highlights: [
              "Dynamic memory address tracking",
              "Real-time health value monitoring",
              "Experimental input simulation",
              "TCP connection analysis"
          ],
          detailedDescription: `
This project demonstrates proficiency in C# and Windows Forms development, focusing on process interaction and data analysis within Path of Exile. The POE Tool v2 monitors game data to study memory structures and system behavior, emphasizing technical exploration over automation.

### Key Features and Technologies

- **Windows Forms UI:** Features a simple UI with a *CheckedListBox* for configuration profiles (e.g., Cyclone Slayer) and a *Debug* textbox for real-time feedback.
- **Process Interaction (ghapi.cs):** Custom API wrapper using *kernel32.dll* for process opening, memory reading/writing, module enumeration, and dynamic address resolution with *FindDMAAddy*—reusable and robust.
- **Game Data Logic (Program.cs):** Identifies the game process, monitors health via a continuous loop, triggers experimental actions based on conditions, and uses *InputSimulatorStandard* for input simulation with *Stopwatch* timers for cooldowns.

### Overall Impression

This project showcases low-level system programming, memory management, and event-driven design. The use of a separate *ghapi.cs* wrapper promotes modularity, while continuous monitoring and conditional logic reflect careful design. It highlights practical C# skills applicable to various software development roles, focusing on technical insight rather than gameplay modification.
  `
      },
      fr: {
          title: "Moniteur de Données Path of Exile",
          description: "Un utilitaire pour surveiller les données en jeu dans Path of Exile afin d'étudier les structures de mémoire.",
          highlights: [
              "Suivi dynamique des adresses mémoire",
              "Surveillance en temps réel de la valeur de la santé",
              "Simulation d'entrée expérimentale",
              "Analyse de la connexion TCP"
          ],
          detailedDescription: `
Ce projet démontre la maîtrise du développement C# et Windows Forms, en se concentrant sur l'interaction des processus et l'analyse des données dans Path of Exile. L'outil POE v2 surveille les données du jeu pour étudier les structures de mémoire et le comportement du système, en mettant l'accent sur l'exploration technique plutôt que sur l'automatisation.

### Principales caractéristiques et technologies

- **Interface utilisateur Windows Forms :** Comprend une interface utilisateur simple avec une *CheckedListBox* pour les profils de configuration (par exemple, Cyclone Slayer) et une zone de texte *Debug* pour un retour d'information en temps réel.
- **Interaction avec les processus (ghapi.cs) :** Wrapper d'API personnalisé utilisant *kernel32.dll* pour l'ouverture des processus, la lecture/écriture de la mémoire, l'énumération des modules et la résolution dynamique des adresses avec *FindDMAAddy*, réutilisable et robuste.
- **Logique des données de jeu (Program.cs) :** Identifie le processus du jeu, surveille la santé via une boucle continue, déclenche des actions expérimentales en fonction des conditions et utilise *InputSimulatorStandard* pour la simulation d'entrée avec des minuteurs *Stopwatch* pour les temps de recharge.

### Impression générale

Ce projet met en valeur la programmation système de bas niveau, la gestion de la mémoire et la conception pilotée par les événements. L'utilisation d'un wrapper *ghapi.cs* séparé favorise la modularité, tandis que la surveillance continue et la logique conditionnelle reflètent une conception soignée. Il met en évidence des compétences pratiques en C# applicables à divers rôles de développement de logiciels, en se concentrant sur les connaissances techniques plutôt que sur la modification du gameplay.
  `
      }
  }
};