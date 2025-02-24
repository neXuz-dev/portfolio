export default {
  tags: ["Python", "Discord.py", "ESRGAN", "Image Processing"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Image Upscaling Discord Bot",
          description: "A Python bot for enhancing image resolution using ESRGAN models.",
          highlights: [
              "Multiple ESRGAN model support",
              "Fuzzy string matching for usability",
              "Asynchronous image processing",
              "Robust permission system"
          ],
          detailedDescription: `
This project demonstrates proficiency in Python, deep learning, and API integration by creating a Discord bot that performs AI-powered image upscaling with ESRGAN models, offering a user-friendly application of complex technologies.

### Key Features & Technologies

- **Core Functionality:** Uploads images via attachments or URLs, upscales with user-selected ESRGAN models, and returns results.
- **ESRGAN Integration:** Supports multiple pre-trained models with safe unpickling to prevent code execution risks.
- **Model Management:** Uses *fuzzywuzzy* for flexible model selection, interpolating and combining models dynamically.
- **Discord API:** Built with *discord.py* for interactive bot functionality.
- **Image Processing:** Employs *OpenCV* for resizing, conversions, and montages, with async operations for responsiveness.
- **Permissions:** Advanced system restricts access with moderator commands.

### Technical Highlights

- **Fuzzy Selection:** *build_aliases* and *fuzzy_load_model* enhance usability with partial name matching.
- **Model Interpolation:** *parse_models* and *interpolate_models* combine model weights on-the-fly.
- **Modular Architecture:** *RzImageProcessing.py* separates commands and handlers for maintainability.
- **Efficient Upscaling:** Handles transparency and large images with *auto_split_upscale* to manage memory.

### Overall

Combines multiple technologies into a practical, user-friendly tool, showcasing strong Python skills, deep learning application, and API integration expertise.
  `
      },
      fr: {
          title: "Bot Discord d'Amélioration d'Image",
          description: "Un bot Python pour améliorer la résolution d'image en utilisant des modèles ESRGAN.",
          highlights: [
              "Prise en charge de plusieurs modèles ESRGAN",
              "Correspondance de chaînes floue pour la convivialité",
              "Traitement d'image asynchrone",
              "Système de permissions robuste"
          ],
          detailedDescription: `
Ce projet démontre la maîtrise de Python, de l'apprentissage profond et de l'intégration d'API en créant un bot Discord qui effectue une amélioration d'image alimentée par l'IA avec des modèles ESRGAN, offrant une application conviviale de technologies complexes.

### Principales caractéristiques et technologies

- **Fonctionnalité principale :** Télécharge des images via des pièces jointes ou des URL, améliore la résolution avec des modèles ESRGAN sélectionnés par l'utilisateur et renvoie les résultats.
- **Intégration ESRGAN :** Prend en charge plusieurs modèles pré-entraînés avec une désérialisation sécurisée pour éviter les risques d'exécution de code.
- **Gestion des modèles :** Utilise *fuzzywuzzy* pour une sélection flexible des modèles, interpolant et combinant les modèles dynamiquement.
- **API Discord :** Construit avec *discord.py* pour une fonctionnalité de bot interactive.
- **Traitement d'image :** Utilise *OpenCV* pour le redimensionnement, les conversions et les montages, avec des opérations asynchrones pour la réactivité.
- **Permissions :** Un système avancé restreint l'accès avec des commandes de modérateur.

### Points forts techniques

- **Sélection floue :** *build_aliases* et *fuzzy_load_model* améliorent la convivialité avec la correspondance partielle des noms.
- **Interpolation de modèles :** *parse_models* et *interpolate_models* combinent les poids des modèles à la volée.
- **Architecture modulaire :** *RzImageProcessing.py* sépare les commandes et les gestionnaires pour la maintenabilité.
- **Mise à l'échelle efficace :** Gère la transparence et les grandes images avec *auto_split_upscale* pour gérer la mémoire.

### Globalement

Combine plusieurs technologies dans un outil pratique et convivial, mettant en valeur de solides compétences en Python, l'application de l'apprentissage profond et l'expertise en intégration d'API.
  `
      }
  }
};