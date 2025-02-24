export default {
  tags: ["C#", "Emgu CV", "Image Processing", "File I/O"],  // Tags remain language-agnostic
  content: {
      en: {
          title: "Screen Monitoring and Image Recognition Counter",
          description: "A C# tool for real-time screen monitoring and image detection.",
          highlights: [
              "Efficient screen capture implementation",
              "Template matching with Emgu CV",
              "Delayed counter logic for stability",
              "Robust file handling for persistence"
          ],
          detailedDescription: `
This C# project demonstrates proficiency in image processing and real-time screen monitoring. It captures the screen, searches for a predefined image within the screenshot using Emgu CV (a .NET wrapper for OpenCV), and increments a counter stored in a text file if the image is not detected for a specified duration (five seconds). The project was undertaken to gain practical experience with computer vision concepts, specifically template matching, and showcases a clear understanding of file I/O operations for data persistence.

### How it Works

1. **Initialization:** Loads a template image (*image.png*) and initializes a counter file (*counter.txt*) with robust error handling for missing files.
2. **Screen Capture:** Uses *CaptureScreen()* with .NET graphics libraries for efficient primary display snapshots.
3. **Image Matching:** Employs Emgu CV’s *MatchTemplate* with *CcoeffNormed* for robust template matching, effective even with lighting variations, using a 0.3 threshold.
4. **Counter Logic:** Implements a *while(true)* loop with delayed counter increments to prevent rapid changes from minor screen flickers, showing careful timing consideration.
5. **File Handling:** Manages *counter.txt* with graceful creation and updates for new or missing files.
6. **Resource Management:** Disposes of screenshots promptly and uses *Thread.Sleep()* to minimize CPU usage, reflecting efficiency.

### Why it was Built

The project serves as an effective showcase of implementing real-time image analysis, offering practical insights into computer vision applications like automated testing or monitoring systems, with a focus on resource efficiency and stability.
  `
      },
      fr: {
          title: "Surveillance d'Écran et Compteur de Reconnaissance d'Image",
          description: "Un outil C# pour la surveillance d'écran en temps réel et la détection d'images.",
          highlights: [
              "Implémentation efficace de la capture d'écran",
              "Correspondance de modèle avec Emgu CV",
              "Logique de compteur différée pour la stabilité",
              "Gestion robuste des fichiers pour la persistance"
          ],
          detailedDescription: `
Ce projet C# démontre la maîtrise du traitement d'image et de la surveillance d'écran en temps réel. Il capture l'écran, recherche une image prédéfinie dans la capture d'écran à l'aide d'Emgu CV (un wrapper .NET pour OpenCV) et incrémente un compteur stocké dans un fichier texte si l'image n'est pas détectée pendant une durée spécifiée (cinq secondes). Le projet a été entrepris pour acquérir une expérience pratique des concepts de vision par ordinateur, en particulier la correspondance de modèles, et met en valeur une compréhension claire des opérations d'E/S de fichiers pour la persistance des données.

### Comment ça marche

1. **Initialisation :** Charge une image modèle (*image.png*) et initialise un fichier compteur (*counter.txt*) avec une gestion robuste des erreurs pour les fichiers manquants.
2. **Capture d'écran :** Utilise *CaptureScreen()* avec les bibliothèques graphiques .NET pour des captures d'écran efficaces de l'affichage principal.
3. **Correspondance d'images :** Utilise *MatchTemplate* d'Emgu CV avec *CcoeffNormed* pour une correspondance de modèles robuste, efficace même avec des variations d'éclairage, en utilisant un seuil de 0,3.
4. **Logique du compteur :** Implémente une boucle *while(true)* avec des incrémentations de compteur différées pour éviter les changements rapides dus à des scintillements mineurs de l'écran, montrant une attention particulière au timing.
5. **Gestion des fichiers :** Gère *counter.txt* avec une création et des mises à jour gracieuses pour les fichiers nouveaux ou manquants.
6. **Gestion des ressources :** Supprime rapidement les captures d'écran et utilise *Thread.Sleep()* pour minimiser l'utilisation du processeur, reflétant l'efficacité.

### Pourquoi il a été construit

Le projet sert de vitrine efficace pour la mise en œuvre de l'analyse d'images en temps réel, offrant des aperçus pratiques des applications de vision par ordinateur comme les tests automatisés ou les systèmes de surveillance, en mettant l'accent sur l'efficacité des ressources et la stabilité.
  `
      }
  }
};