export default {
  tags: ["C++", "Windows API", "Tesseract OCR", "System Interaction"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Sloop Auto-Sail Mechanics Study",
          description: "OCR-based tool for studying sailing mechanics in Sea of Thieves.",
          highlights: [
              "Precise screen region capture",
              "OCR for heading detection",
              "Hotkey activation system",
              "Background process execution"
          ],
          detailedDescription: `
This project demonstrates proficiency in C++, Windows API programming, and Optical Character Recognition (OCR) by creating a utility to analyze a specific in-game task within Sea of Thieves. The "Sloop Auto-Sail" tool studies ship heading maintenance, focusing on technical experience rather than gameplay alteration.

### Functionality

- **Screen Capture:** Captures a predefined compass region.
- **OCR Processing:** Uses Tesseract OCR to extract numerical heading values.
- **Input Simulation:** Simulates ‘Q’ or ‘D’ key presses to study heading adjustments.
- **Hotkey Activation:** Toggleable with *Ctrl + Alt + J* for usability.
- **Invisible UI:** Runs as a background process.

### Key Technologies & Skills

- **C++:** Core language for robust implementation.
- **Windows API:** Handles *keybd_event*, *RegisterHotKey*, and screen capture.
- **Tesseract OCR:** Integrates open-source OCR for data extraction.
- **Image Processing:** Manages bitmap data for OCR input.

### Why This Project Matters

It showcases a strong foundation in C++ and Windows API, with practical application of Tesseract OCR to solve real-world problems. The design emphasizes precision and technical skill, applicable to broader software development roles beyond gaming contexts.
  `
      },
      fr: {
          title: "Étude des Mécaniques de Navigation Automatique du Sloop",
          description: "Outil basé sur l'OCR pour étudier les mécaniques de navigation dans Sea of Thieves.",
          highlights: [
              "Capture précise de la région de l'écran",
              "OCR pour la détection du cap",
              "Système d'activation par raccourci clavier",
              "Exécution du processus en arrière-plan"
          ],
          detailedDescription: `
Ce projet démontre la maîtrise de la programmation C++, de l'API Windows et de la reconnaissance optique de caractères (OCR) en créant un utilitaire pour analyser une tâche spécifique en jeu dans Sea of Thieves. L'outil "Sloop Auto-Sail" étudie le maintien du cap du navire, en se concentrant sur l'expérience technique plutôt que sur la modification du gameplay.

### Fonctionnalités

- **Capture d'écran :** Capture une région de boussole prédéfinie.
- **Traitement OCR :** Utilise Tesseract OCR pour extraire les valeurs numériques du cap.
- **Simulation d'entrée :** Simule les pressions sur les touches 'Q' ou 'D' pour étudier les ajustements de cap.
- **Activation par raccourci clavier :** Activable/désactivable avec *Ctrl + Alt + J* pour la facilité d'utilisation.
- **Interface utilisateur invisible :** S'exécute en tant que processus en arrière-plan.

### Technologies et compétences clés

- **C++ :** Langage principal pour une implémentation robuste.
- **API Windows :** Gère *keybd_event*, *RegisterHotKey* et la capture d'écran.
- **Tesseract OCR :** Intègre l'OCR open-source pour l'extraction de données.
- **Traitement d'image :** Gère les données bitmap pour l'entrée OCR.

### Pourquoi ce projet est important

Il met en valeur une base solide en C++ et en API Windows, avec une application pratique de Tesseract OCR pour résoudre des problèmes du monde réel. La conception met l'accent sur la précision et les compétences techniques, applicables à des rôles de développement de logiciels plus larges au-delà des contextes de jeu.
  `
      }
  }
};