export default {
  tags: ["Cheat Engine", "Reverse Engineering", "Memory Manipulation", "Assembly"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Reverse Engineering Game Mechanics",
          description: "Exploration of game mechanics through memory analysis using Cheat Engine.",
          highlights: [
              "Modification of player movement speed",
              "Adjustment of visual effects",
              "Unlimited stamina implementation",
              "Inventory slot manipulation"
          ],
          detailedDescription: `
This project demonstrates reverse engineering skills by analyzing and modifying in-game mechanics using Cheat Engine, focusing on understanding game internals without source code access.

### Key Features
- **Player Movement**: Altered 'LocomotionController' for speed adjustments.
- **Visual Effects**: Modified 'PlatformLight' brightness.
- **Stamina**: Set 'HasStamina' to enable unlimited stamina.
- **Inventory**: Explored and modified item slots in memory.

### Approach
Using Cheat Engine, I scanned memory to identify variables tied to game actions, applying changes via assembly code snippets to test hypotheses about game functionality.

### Skills
- Memory analysis and manipulation.
- Reverse engineering of compiled code.
- Low-level debugging and assembly programming.

This project reflects a methodical approach to dissecting software systems, valuable for debugging and optimization tasks.
  `
      },
      fr: {
          title: "Rétro-ingénierie des Mécaniques de Jeu",
          description: "Exploration des mécaniques de jeu par l'analyse de la mémoire à l'aide de Cheat Engine.",
          highlights: [
              "Modification de la vitesse de déplacement du joueur",
              "Ajustement des effets visuels",
              "Implémentation de l'endurance illimitée",
              "Manipulation des emplacements d'inventaire"
          ],
          detailedDescription: `
Ce projet démontre des compétences en rétro-ingénierie en analysant et en modifiant les mécaniques de jeu à l'aide de Cheat Engine, en se concentrant sur la compréhension des mécanismes internes du jeu sans accès au code source.

### Principales caractéristiques
- **Mouvement du joueur :** Modification de 'LocomotionController' pour les ajustements de vitesse.
- **Effets visuels :** Modification de la luminosité de 'PlatformLight'.
- **Endurance :** Définition de 'HasStamina' pour activer l'endurance illimitée.
- **Inventaire :** Exploration et modification des emplacements d'objets en mémoire.

### Approche
En utilisant Cheat Engine, j'ai analysé la mémoire pour identifier les variables liées aux actions du jeu, en appliquant des modifications via des extraits de code assembleur pour tester des hypothèses sur les fonctionnalités du jeu.

### Compétences
- Analyse et manipulation de la mémoire.
- Rétro-ingénierie de code compilé.
- Débogage de bas niveau et programmation en assembleur.

Ce projet reflète une approche méthodique pour disséquer les systèmes logiciels, ce qui est précieux pour les tâches de débogage et d'optimisation.
  `
      }
  }
};