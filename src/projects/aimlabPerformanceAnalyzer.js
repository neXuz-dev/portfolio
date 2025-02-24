export default {
  tags: ["AutoIt", "Pixel Detection", "FastFind.dll", "Performance Optimization"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Aimlab Performance Analyzer",
          description: "Tool for studying aim training performance with pixel detection in Aimlab.",
          highlights: [
            "High-speed screen capture with FastFind64.dll",
            "Precise pixel color detection for targeting",
            "Low-level mouse control via user32.dll",
            "Dynamic configuration through INI files"
          ],
          detailedDescription: `
This project showcases my proficiency in automation and low-level system interaction, demonstrating an ability to create efficient and precise software tools. It was primarily a learning exercise to explore advanced techniques in image recognition and process control within the Aimlab aim training software, with core technologies applicable beyond gaming.

### What it Does

The "Pix_FF.au3" script analyzes performance in Aimlab by:

1. **Rapid Screen Capture and Analysis:** Leveraging FastFind64.dll for extremely fast screen captures of defined regions, significantly outperforming standard methods in speed and resource efficiency, highlighting performance optimization skills.
2. **Pixel-Perfect Color Detection:** Identifying specific target colors (e.g., center dot) with tolerance for shade variations, showing advanced visual data handling relevant to real-world applications.
3. **Precise Mouse Control:** Simulating mouse movements and clicks using low-level *mouse_event* calls (user32.dll) for maximum speed and accuracy, bypassing slower alternatives.
4. **Dynamic Configuration:** Managing settings like target colors and regions via *config.ini*, separating configuration from logic for adaptability.
5. **Debug UI:** Featuring a simple GUI for control and real-time debugging information.

### Why it’s Valuable (Beyond Gaming)

The principles demonstrated are transferable to:

- **Robotic Process Automation (RPA):** Visual cue-based interaction with legacy systems or applications without APIs.
- **Quality Assurance/Testing:** Automated UI verification for rendering accuracy.
- **Image Processing:** Basic techniques like snapshotting and color filtering.
- **Accessibility Software:** Precise control and visual analysis for assistive tools.

### How it’s Built

- **Language:** AutoIt with a custom C/C++ DLL (FastFind64.dll) for performance-critical tasks, chosen for ease of Windows API interaction and rapid prototyping.
- **Key Libraries/APIs:**
  - *FastFind64.dll*: Core efficiency for screen capture and pixel search.
  - *User32.dll*: Low-level mouse control.
  - AutoIt’s built-in functions for INI handling and GUI creation.

### Key Takeaways

- **Performance Focus:** Prioritizing efficiency with custom DLLs and low-level calls.
- **System-Level Understanding:** Comfort with Windows API and system operations.
- **Problem-Solving:** Breaking down complex visual tasks into components.
- **Adaptability:** Configurable design for maintainability.

This project exemplifies my ability to combine automation with system-level programming, offering insights into versatile software development challenges.
  `
      },
      fr: {
          title: "Analyseur de Performance Aimlab",
          description: "Outil pour étudier les performances d'entraînement à la visée avec détection de pixels dans Aimlab.",
          highlights: [
              "Capture d'écran haute vitesse avec FastFind64.dll",
              "Détection précise de la couleur des pixels pour le ciblage",
              "Contrôle de la souris de bas niveau via user32.dll",
              "Configuration dynamique via des fichiers INI"
          ],
          detailedDescription: `
Ce projet met en valeur ma maîtrise de l'automatisation et de l'interaction système de bas niveau, démontrant une capacité à créer des outils logiciels efficaces et précis. Il s'agissait principalement d'un exercice d'apprentissage pour explorer des techniques avancées de reconnaissance d'image et de contrôle de processus dans le logiciel d'entraînement à la visée Aimlab, avec des technologies de base applicables au-delà du jeu.

### Ce qu'il fait

Le script "Pix_FF.au3" analyse les performances dans Aimlab en :

1. **Capture et analyse d'écran rapides :** Tirant parti de FastFind64.dll pour des captures d'écran extrêmement rapides de régions définies, surpassant considérablement les méthodes standard en termes de vitesse et d'efficacité des ressources, mettant en évidence les compétences en optimisation des performances.
2. **Détection de couleur parfaite au pixel près :** Identifiant des couleurs cibles spécifiques (par exemple, le point central) avec une tolérance pour les variations de teinte, montrant une gestion avancée des données visuelles pertinente pour les applications du monde réel.
3. **Contrôle précis de la souris :** Simulant les mouvements et les clics de la souris à l'aide d'appels *mouse_event* de bas niveau (user32.dll) pour une vitesse et une précision maximales, contournant les alternatives plus lentes.
4. **Configuration dynamique :** Gérant les paramètres tels que les couleurs cibles et les régions via *config.ini*, séparant la configuration de la logique pour l'adaptabilité.
5. **Interface utilisateur de débogage :** Comportant une interface graphique simple pour le contrôle et les informations de débogage en temps réel.

### Pourquoi c'est utile (au-delà du jeu)

Les principes démontrés sont transférables à :

- **Automatisation des processus robotisés (RPA) :** Interaction basée sur des indices visuels avec des systèmes existants ou des applications sans API.
- **Assurance qualité/Tests :** Vérification automatisée de l'interface utilisateur pour la précision du rendu.
- **Traitement d'image :** Techniques de base comme la capture d'écran et le filtrage des couleurs.
- **Logiciels d'accessibilité :** Contrôle précis et analyse visuelle pour les outils d'assistance.

### Comment il est construit

- **Langage :** AutoIt avec une DLL C/C++ personnalisée (FastFind64.dll) pour les tâches critiques en termes de performances, choisie pour la facilité d'interaction avec l'API Windows et le prototypage rapide.
- **Bibliothèques/API clés :**
  - *FastFind64.dll* : Efficacité de base pour la capture d'écran et la recherche de pixels.
  - *User32.dll* : Contrôle de la souris de bas niveau.
  - Fonctions intégrées d'AutoIt pour la gestion des INI et la création d'interface graphique.

### Principaux enseignements

- **Accent sur la performance :** Priorité à l'efficacité avec des DLL personnalisées et des appels de bas niveau.
- **Compréhension au niveau du système :** Maîtrise de l'API Windows et des opérations système.
- **Résolution de problèmes :** Décomposition de tâches visuelles complexes en composants.
- **Adaptabilité :** Conception configurable pour la maintenabilité.

Ce projet illustre ma capacité à combiner l'automatisation avec la programmation au niveau du système, offrant un aperçu des défis polyvalents du développement de logiciels.
  `
      }
  }
};