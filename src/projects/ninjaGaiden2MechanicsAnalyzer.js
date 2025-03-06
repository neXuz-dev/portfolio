export default {
  tags: ["Cheat Engine", "ASM", "Reverse Engineering", "Memory Manipulation"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Ninja Gaiden 2 Mechanics Analyzer",
          description: "A tool for studying Ninja Gaiden 2 Black mechanics via memory analysis.",
          highlights: [
              "AOB scanning for mechanics",
              "Custom assembly modifications",
              "Conditional logic for toggling",
              "Detailed code injection"
          ],
          detailedDescription: `
This Cheat Engine project reverse-engineers Ninja Gaiden 2 Black on PC to analyze game mechanics like health and combos, using assembly for modifications.

### Capabilities

- Implements auto guard, infinite HP, massive damage, and shop mods via AOB scanning and code injection.

### Technical Details

- Uses assembly (*jmp*, *nop*) and conditional jumps (*jne*, *je*) for dynamic changes.
- Organized with enable/disable blocks and symbol management.

### Outcomes

Enhances reverse engineering and assembly skills, applicable to game development and security, with a focus on deconstructing complex systems.
  `
      },
      fr: {
          title: "Analyseur de Mécaniques de Ninja Gaiden 2",
          description: "Un outil pour étudier les mécaniques de Ninja Gaiden 2 Black via l'analyse de la mémoire.",
          highlights: [
              "Scan AOB pour les mécaniques",
              "Modifications d'assemblage personnalisées",
              "Logique conditionnelle pour l'activation/désactivation",
              "Injection de code détaillée"
          ],
          detailedDescription: `
Ce projet Cheat Engine fait de la rétro-ingénierie sur Ninja Gaiden 2 Black sur PC pour analyser les mécaniques de jeu comme la santé et les combos, en utilisant l'assembleur pour les modifications.

### Capacités

- Implémente la garde automatique, les PV infinis, les dégâts massifs et les modifications de boutique via le scan AOB et l'injection de code.

### Détails Techniques

- Utilise l'assembleur (*jmp*, *nop*) et les sauts conditionnels (*jne*, *je*) pour les changements dynamiques.
- Organisé avec des blocs d'activation/désactivation et la gestion des symboles.

### Résultats

Améliore les compétences en rétro-ingénierie et en assembleur, applicables au développement de jeux et à la sécurité, en mettant l'accent sur la déconstruction de systèmes complexes.
  `
      }
  }
};