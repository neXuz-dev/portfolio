export default {
  tags: ["C++", "DirectX", "Windows API", "Reverse Engineering"], // Tags remain language-agnostic
  content: {
      en: {
          title: "RzOverlay Game Data Visualizer",
          description: "A C++ overlay for visualizing game data in Halo: MCC.",
          highlights: [
              "DirectX 9 rendering",
              "Transparent layered overlay",
              "Memory data extraction",
              "Entity structure modeling"
          ],
          detailedDescription: `
RzOverlay is a C++ project demonstrating proficiency in DirectX rendering, Windows API interaction, and reverse engineering concepts. It creates a transparent, layered overlay window rendering on top of Halo: The Master Chief Collection, driven by a desire to deepen knowledge of OS and graphical API interactions.

### Key Technologies & Concepts

- **DirectX (D3D9):** Initializes Direct3D devices, manages scenes, and renders with *ID3DXFont*.
- **Windows API:** Uses *FindWindowA*, *GetWindowRect*, *CreateWindowExW*, and *SetLayeredWindowAttributes* for overlay management.
- **Reverse Engineering:** Extracts *Entity* data from memory (*Entity.h*, *loadEntities()*), modeling game structures with padding awareness.
- **C++ Fundamentals:** Structured with classes (*Paint*, *Entity*) and standard libraries.

### Code Structure and Functionality

- **Paint Class:** Encapsulates DirectX rendering logic.
- **Entity Class:** Models extracted game data.
- **RzOverlay.cpp:** Manages window creation, message loop, and overlay logic.

### Learning Outcomes

- Mastered DirectX rendering and overlay creation.
- Gained deep Windows API interaction experience.
- Explored memory analysis basics.

Highly transferable skills to game tools, graphics, and system utilities, focusing on core technical competencies.
  `
      },
      fr: {
          title: "Visualiseur de Données de Jeu RzOverlay",
          description: "Un overlay C++ pour visualiser les données de jeu dans Halo: MCC.",
          highlights: [
              "Rendu DirectX 9",
              "Overlay transparent en couches",
              "Extraction de données de la mémoire",
              "Modélisation de la structure des entités"
          ],
          detailedDescription: `
RzOverlay est un projet C++ démontrant la maîtrise du rendu DirectX, de l'interaction avec l'API Windows et des concepts de rétro-ingénierie. Il crée une fenêtre d'overlay transparente et en couches qui s'affiche par-dessus Halo: The Master Chief Collection, motivée par le désir d'approfondir les connaissances sur les interactions avec le système d'exploitation et les API graphiques.

### Technologies et concepts clés

- **DirectX (D3D9) :** Initialise les périphériques Direct3D, gère les scènes et effectue le rendu avec *ID3DXFont*.
- **API Windows :** Utilise *FindWindowA*, *GetWindowRect*, *CreateWindowExW* et *SetLayeredWindowAttributes* pour la gestion de l'overlay.
- **Rétro-ingénierie :** Extrait les données *Entity* de la mémoire (*Entity.h*, *loadEntities()*), modélisant les structures du jeu en tenant compte du padding.
- **Fondamentaux de C++ :** Structuré avec des classes (*Paint*, *Entity*) et des bibliothèques standard.

### Structure du code et fonctionnalités

- **Classe Paint :** Encapsule la logique de rendu DirectX.
- **Classe Entity :** Modélise les données de jeu extraites.
- **RzOverlay.cpp :** Gère la création de la fenêtre, la boucle de messages et la logique de l'overlay.

### Résultats d'apprentissage

- Maîtrise du rendu DirectX et de la création d'overlays.
- Acquisition d'une expérience approfondie de l'interaction avec l'API Windows.
- Exploration des bases de l'analyse de la mémoire.

Compétences hautement transférables aux outils de jeu, aux graphiques et aux utilitaires système, en se concentrant sur les compétences techniques de base.
  `
      }
  }
};