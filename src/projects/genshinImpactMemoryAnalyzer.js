export default {
  tags: ["Assembly", "Cheat Engine", "Reverse Engineering", "Memory Manipulation", "ASM"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Genshin Impact Memory Analyzer",
          description: "A tool for studying game mechanics in Genshin Impact via memory manipulation.",
          highlights: [
              "Array of Bytes (AOB) scanning",
              "Custom code injection",
              "Register manipulation",
              "Conditional logic implementation"
          ],
          detailedDescription: `
This project applies reverse engineering to Genshin Impact using Cheat Engine and assembly, focusing on understanding memory manipulation and game mechanics at a low level for learning purposes.

### Key Skills

- **Reverse Engineering:** Uses AOB scanning and code injection for memory modifications.
- **Assembly:** Manipulates registers (*rcx*, *rdx*, *r8*) and uses instructions (*mov*, *jmp*, *cmp*) for logic.
- **Features:** Explores infinite stamina, no cooldowns, speed hacks, and godmode through memory edits.

### Project Structure

- Modular cheat blocks with enable/disable functionality.
- Symbol management with *registersymbol*/*unregistersymbol*.

### Outcome

Improves reverse engineering and assembly skills, applicable to security, game development, and system optimization, with a methodical approach to complex systems.
  `
      },
      fr: {
          title: "Analyseur de Mémoire Genshin Impact",
          description: "Un outil pour étudier les mécaniques de jeu dans Genshin Impact via la manipulation de la mémoire.",
          highlights: [
              "Balayage de tableaux d'octets (AOB)",
              "Injection de code personnalisé",
              "Manipulation des registres",
              "Implémentation de la logique conditionnelle"
          ],
          detailedDescription: `
Ce projet applique la rétro-ingénierie à Genshin Impact en utilisant Cheat Engine et l'assembleur, en se concentrant sur la compréhension de la manipulation de la mémoire et des mécaniques de jeu à un niveau bas à des fins d'apprentissage.

### Compétences clés

- **Rétro-ingénierie :** Utilise le balayage AOB et l'injection de code pour les modifications de la mémoire.
- **Assembleur :** Manipule les registres (*rcx*, *rdx*, *r8*) et utilise des instructions (*mov*, *jmp*, *cmp*) pour la logique.
- **Fonctionnalités :** Explore l'endurance infinie, l'absence de temps de recharge, les hacks de vitesse et le godmode grâce à des modifications de la mémoire.

### Structure du projet

- Blocs de triche modulaires avec fonctionnalité d'activation/désactivation.
- Gestion des symboles avec *registersymbol*/*unregistersymbol*.

### Résultat

Améliore les compétences en rétro-ingénierie et en assembleur, applicables à la sécurité, au développement de jeux et à l'optimisation des systèmes, avec une approche méthodique des systèmes complexes.
  `
      }
  }
};