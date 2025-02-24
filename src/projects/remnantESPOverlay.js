export default {
  tags: ["C#", "SharpDX", "Unreal Engine", "3D Math"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Remnant ESP Overlay",
          description: "A real-time overlay for studying Remnant: From the Ashes game data.",
          highlights: [
              "DirectX-based overlay rendering",
              "Memory analysis of Unreal Engine",
              "3D to 2D coordinate projection",
              "Interactive menu system"
          ],
          detailedDescription: `
This C# project creates a real-time ESP overlay for Remnant: From the Ashes using SharpDX, analyzing Unreal Engine memory to visualize game data, focusing on technical exploration.

### Key Features
- **DirectX Rendering:** Transparent overlay with bounding boxes and arrows.
- **Memory Analysis:** Extracts GWorld, GNames, GObjects data.
- **3D Math:** WorldToScreen converts coordinates for display.
- **UI:** Toggleable menu with FPS display.

### Skills
- Graphics programming, reverse engineering, and 3D math, applicable to game tools and system programming, with a passion for understanding complex systems.
  `
      },
      fr: {
          title: "Overlay ESP Remnant",
          description: "Un overlay en temps réel pour étudier les données du jeu Remnant: From the Ashes.",
          highlights: [
              "Rendu d'overlay basé sur DirectX",
              "Analyse de la mémoire d'Unreal Engine",
              "Projection de coordonnées 3D en 2D",
              "Système de menu interactif"
          ],
          detailedDescription: `
Ce projet C# crée un overlay ESP en temps réel pour Remnant: From the Ashes en utilisant SharpDX, analysant la mémoire d'Unreal Engine pour visualiser les données du jeu, en se concentrant sur l'exploration technique.

### Principales caractéristiques
- **Rendu DirectX :** Overlay transparent avec des boîtes englobantes et des flèches.
- **Analyse de la mémoire :** Extrait les données GWorld, GNames, GObjects.
- **Mathématiques 3D :** WorldToScreen convertit les coordonnées pour l'affichage.
- **Interface utilisateur :** Menu activable/désactivable avec affichage FPS.

### Compétences
Programmation graphique, rétro-ingénierie et mathématiques 3D, applicables aux outils de jeu et à la programmation système, avec une passion pour la compréhension des systèmes complexes.
  `
      }
  }
};