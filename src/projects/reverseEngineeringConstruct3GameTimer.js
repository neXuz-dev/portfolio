export default {
  tags: ["JavaScript", "Reverse Engineering", "Chrome DevTools", "Web Development"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Reverse Engineering Construct 3 Game Timer",
          description: "Modified the countdown timer of a Construct 3 web game using browser tools.",
          highlights: [
              "Analysis of minified code",
              "Runtime manipulation via DevTools",
              "Asynchronous timing adjustments",
              "Function hooking"
          ],
          detailedDescription: `
This project involved reverse engineering a Construct 3 game's timer in 'Labyrinthe de l'Explorateur' using Chrome DevTools, without source code access.

### Approach
- Analyzed minified JavaScript in c3runtime.js.
- Identified _OnRAFCallback to hook runtime updates.
- Overrode function to set defaultTotalTime to 9999, freezing the timer.

### Skills
- JavaScript runtime manipulation.
- Reverse engineering obfuscated code.
- Debugging with browser tools.
- Understanding game engine internals.

Demonstrates problem-solving and adaptability in web-based systems.
  `
      },
      fr: {
          title: "Rétro-ingénierie du Timer d'un Jeu Construct 3",
          description: "Modification du compte à rebours d'un jeu web Construct 3 à l'aide des outils de navigateur.",
          highlights: [
              "Analyse de code minifié",
              "Manipulation du runtime via les DevTools",
              "Ajustements de synchronisation asynchrones",
              "Hook de fonction"
          ],
          detailedDescription: `
Ce projet impliquait la rétro-ingénierie du timer d'un jeu Construct 3 dans 'Labyrinthe de l'Explorateur' en utilisant les Chrome DevTools, sans accès au code source.

### Approche
- Analyse du JavaScript minifié dans c3runtime.js.
- Identification de _OnRAFCallback pour accrocher les mises à jour du runtime.
- Surcharge de la fonction pour définir defaultTotalTime à 9999, gelant le timer.

### Compétences
- Manipulation du runtime JavaScript.
- Rétro-ingénierie de code obfusqué.
- Débogage avec des outils de navigateur.
- Compréhension des mécanismes internes du moteur de jeu.

Démontre la résolution de problèmes et l'adaptabilité dans les systèmes web.
  `
      }
  }
};