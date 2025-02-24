export default {
  tags: ["C#", "Windows API", "Memory Analysis", "Real-time Data"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Test Drive Unlimited Shift Analyzer",
          description: "A tool for studying gear shifting in Test Drive Unlimited: Solar Crown.",
          highlights: [
              "Dynamic memory address tracking",
              "Real-time speed and gear monitoring",
              "Configurable via INI files",
              "Multi-threaded design"
          ],
          detailedDescription: `
This project showcases my ability to interact with external processes, perform memory analysis, and implement real-time data processing in C#. The Smart Shift Optimizer for Test Drive Unlimited: Solar Crown studies gear shifting dynamics, focusing on technical mastery rather than gameplay enhancement.

### Functionality

- Monitors car speed and gear via memory reads.
- Analyzes optimal shift points from *Gears.ini* or approximations.
- Simulates gear changes for study, with real-time console feedback.
- Adjusts additional parameters (fuel, tires) for comprehensive analysis.

### Key Features and Technical Details

- **External Process Interaction:** Uses *ghapi.cs* with *kernel32.dll* for memory access.
- **Dynamic Memory Resolution:** *FindDMAAddy* handles shifting memory locations.
- **Real-time Processing:** *RunShiftLogic* loop monitors and analyzes data.
- **Configuration:** Loads settings from *Gears.ini* for adaptability.
- **Error Handling:** Retries on memory read failures, ensuring stability.
- **Multi-Threading:** *shiftThread* ensures efficient processing.
- **User Interface:** Console displays status and allows car profile switching.

### Why this Approach?

Direct memory manipulation offers the fastest data access, chosen over slower alternatives like keyboard simulation, demonstrating trade-off awareness and technical depth in Windows memory management.

### Overall Proficiency

- Low-level system programming.
- Real-time data analysis.
- Robust error handling.
- Configurable application design.

A testament to tackling complex challenges with best practices, applicable beyond gaming to system utilities and real-time analysis tools.
  `
      },
      fr: {
          title: "Analyseur de Changement de Vitesse Test Drive Unlimited",
          description: "Un outil pour étudier le changement de vitesse dans Test Drive Unlimited: Solar Crown.",
          highlights: [
              "Suivi dynamique des adresses mémoire",
              "Surveillance en temps réel de la vitesse et du rapport",
              "Configurable via des fichiers INI",
              "Conception multi-thread"
          ],
          detailedDescription: `
Ce projet met en valeur ma capacité à interagir avec des processus externes, à effectuer des analyses de mémoire et à mettre en œuvre un traitement de données en temps réel en C#. L'optimiseur de changement de vitesse intelligent pour Test Drive Unlimited: Solar Crown étudie la dynamique du changement de vitesse, en se concentrant sur la maîtrise technique plutôt que sur l'amélioration du gameplay.

### Fonctionnalités

- Surveille la vitesse et le rapport de la voiture via des lectures de mémoire.
- Analyse les points de changement de vitesse optimaux à partir de *Gears.ini* ou d'approximations.
- Simule les changements de vitesse pour l'étude, avec un retour d'information en temps réel sur la console.
- Ajuste des paramètres supplémentaires (carburant, pneus) pour une analyse complète.

### Principales caractéristiques et détails techniques

- **Interaction avec les processus externes :** Utilise *ghapi.cs* avec *kernel32.dll* pour l'accès à la mémoire.
- **Résolution dynamique de la mémoire :** *FindDMAAddy* gère les emplacements mémoire changeants.
- **Traitement en temps réel :** La boucle *RunShiftLogic* surveille et analyse les données.
- **Configuration :** Charge les paramètres à partir de *Gears.ini* pour l'adaptabilité.
- **Gestion des erreurs :** Réessaye en cas d'échec de lecture de la mémoire, garantissant la stabilité.
- **Multi-threading :** *shiftThread* assure un traitement efficace.
- **Interface utilisateur :** La console affiche l'état et permet de changer de profil de voiture.

### Pourquoi cette approche ?

La manipulation directe de la mémoire offre l'accès aux données le plus rapide, choisi par rapport à des alternatives plus lentes comme la simulation du clavier, démontrant une conscience des compromis et une profondeur technique dans la gestion de la mémoire Windows.

### Maîtrise générale

- Programmation système de bas niveau.
- Analyse de données en temps réel.
- Gestion robuste des erreurs.
- Conception d'application configurable.

Un témoignage de la résolution de défis complexes avec les meilleures pratiques, applicable au-delà du jeu aux utilitaires système et aux outils d'analyse en temps réel.
  `
      }
  }
};