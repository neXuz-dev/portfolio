export default {
  tags: ["Python", "Discord.py", "aiohttp", "Image Manipulation"], // Tags remain language-agnostic
  content: {
      en: {
          title: "DALL-E Mini Discord Bot",
          description: "A bot for generating images from text prompts using DALL-E Mini.",
          highlights: [
              "Asynchronous API requests",
              "Image collage creation with Pillow",
              "Sharding for scalability",
              "Robust error handling"
          ],
          detailedDescription: `
This project showcases proficiency in Python, asynchronous programming, and API integration by creating a Discord bot that leverages DALL-E Mini for image generation. Users provide text prompts, receiving unique AI-generated images, demonstrating engaging application development.

### Key Technologies & Concepts

- **Python 3.10:** Core language for versatility.
- **discord.py and discord.js:** Event-driven bot framework with sharding for scalability.
- **aiohttp:** Asynchronous HTTP requests for efficiency.
- **Asynchronous Programming:** *asyncio* ensures responsiveness.
- **API Integration:** Connects to Hugging Face’s DALL-E Mini API.
- **Image Manipulation:** *Pillow* creates labeled collages from base64 images.
- **Configuration:** *PyYAML* manages settings securely.

### Functionality

- Validates prompts, sends async API requests, decodes images, creates collages, and cleans up temporary files, with robust exception handling.

### Why Built

To deepen understanding of asynchronous programming and API integration, delivering a fun, functional tool at the intersection of AI and user interaction, adapting to evolving APIs for valuable problem-solving experience.
  `
      },
      fr: {
          title: "Bot Discord DALL-E Mini",
          description: "Un bot pour générer des images à partir d'invites textuelles en utilisant DALL-E Mini.",
          highlights: [
              "Requêtes API asynchrones",
              "Création de collages d'images avec Pillow",
              "Sharding pour l'évolutivité",
              "Gestion robuste des erreurs"
          ],
          detailedDescription: `
Ce projet met en valeur la maîtrise de Python, de la programmation asynchrone et de l'intégration d'API en créant un bot Discord qui tire parti de DALL-E Mini pour la génération d'images. Les utilisateurs fournissent des invites textuelles, recevant des images uniques générées par l'IA, démontrant un développement d'application engageant.

### Technologies et concepts clés

- **Python 3.10 :** Langage principal pour la polyvalence.
- **discord.py et discord.js :** Framework de bot piloté par les événements avec sharding pour l'évolutivité.
- **aiohttp :** Requêtes HTTP asynchrones pour l'efficacité.
- **Programmation asynchrone :** *asyncio* assure la réactivité.
- **Intégration API :** Se connecte à l'API DALL-E Mini de Hugging Face.
- **Manipulation d'images :** *Pillow* crée des collages étiquetés à partir d'images base64.
- **Configuration :** *PyYAML* gère les paramètres en toute sécurité.

### Fonctionnalités

- Valide les invites, envoie des requêtes API asynchrones, décode les images, crée des collages et nettoie les fichiers temporaires, avec une gestion robuste des exceptions.

### Pourquoi construit

Pour approfondir la compréhension de la programmation asynchrone et de l'intégration d'API, en fournissant un outil amusant et fonctionnel à l'intersection de l'IA et de l'interaction utilisateur, en s'adaptant aux API en évolution pour une expérience précieuse de résolution de problèmes.
  `
      }
  }
};