export default {
    tags: ["React", "Tailwind CSS", "Next.js", "JavaScript", "Web Development", "UI/UX", "State Management", "Event Handling", "Web Audio API"],
    content: {
      en: {
        title: "Number Recognition Game",
        description: "An interactive web game built with React, Next.js and TailwindCSS, designed to help toddlers practice number recognition while showcasing front-end development skills.",
        highlights: [
          "Dynamic UI built with React and TailwindCSS",
          "Effective state management using React Hooks",
          "Responsive design for various screen sizes",
          "Integration of sound effects using the Web Audio API",
          "Multiple game modes with progressive difficulty",
          "Drag-and-drop interaction",
          "Basic test implementation"
        ],
        detailedDescription: `
  This project demonstrates proficiency in front-end development using React.js and TailwindCSS.  It's presented as a number recognition game, but its core purpose is to showcase my ability to build dynamic, responsive, and interactive web applications. The game was created as a practical exercise to deepen my understanding of React's core concepts and modern front-end styling techniques.
  
  ### Core Features & Technical Implementation
  
  - **React.js Fundamentals:** The game's logic is built entirely with React, leveraging functional components and hooks (useState, useEffect, useRef) for managing game state, handling user interactions, and controlling audio.  This highlights my ability to structure and organize a React application effectively.
  - **Dynamic UI with TailwindCSS:** The game's user interface is built using TailwindCSS, demonstrating the ability to rapidly create a clean and modern design using a utility-first CSS framework.  This showcases my understanding of current front-end styling best practices.
  - **State Management:** The game manages various states (level, score, lives, game over/won, sound on/off) to create a smooth and interactive user experience. This shows a clear understanding of how to handle application state within React.
  - **Event Handling:** The application responds to user input (button clicks, drag and drop events) to process answers, update the game state, and provide real-time feedback.
  - **Audio Integration:** Sound effects are used throughout the game, enhancing engagement and providing feedback.  This demonstrates my ability to work with multimedia elements in a web application and manage sound playback, including handling an audio queue and addressing potential browser compatibility issues with the Web Audio API.
  - **Multiple Game Modes:** The application features different game modes (dice-to-number, objects-to-dice, number-to-dice, and a column matching challenge), providing variety and showcasing different interaction patterns.
  - **Drag and Drop:** The "match-columns" game mode utilizes drag-and-drop functionality, illustrating my ability to implement more complex user interactions.
  - **Progressive Difficulty:** The game increases in difficulty as the player progresses, demonstrating my ability to implement game logic and progression.
  - **Basic Testing:** Includes basic testing implementation, showcasing good development practices.
  
  ### Architecture & Design
  
  - **Component-Based Architecture:** The application is structured using reusable React components, promoting code maintainability and organization.
  - **DiceGame.js:**  This component contains the core game logic, state management, rendering, and event handling.
  - **App.js:** Serves as the main entry point, rendering the DiceGame component.
  - **Standard React Project Structure:**  Utilizes the create-react-app structure for easy setup and maintainability.
  
  ### Technical Significance
  
  This project showcases my ability to build interactive web applications using modern front-end technologies. The game, while simple in concept, demonstrates a solid understanding of React.js, TailwindCSS, state management, event handling, and multimedia integration. The challenges encountered and overcome, especially concerning audio synchronization and cross-browser compatibility, provided valuable learning experiences and further solidified my front-end development skills.
  `
      },
      fr: {
        title: "Jeu de Reconnaissance des Nombres",
        description: "Un jeu web interactif construit avec React.js et TailwindCSS, conçu pour aider les enfants à pratiquer la reconnaissance des nombres tout en démontrant des compétences en développement front-end.",
        highlights: [
          "Interface utilisateur dynamique construite avec React et TailwindCSS",
          "Gestion efficace de l'état avec les Hooks React",
          "Conception réactive pour différentes tailles d'écran",
          "Intégration d'effets sonores avec l'API Web Audio",
          "Plusieurs modes de jeu avec difficulté progressive",
          "Interaction glisser-déposer",
          "Implémentation de tests basiques"
        ],
        detailedDescription: `
  Ce projet démontre ma maîtrise du développement front-end en utilisant React, Next.js et TailwindCSS.  Il est présenté comme un jeu de reconnaissance des nombres, mais son objectif principal est de mettre en valeur ma capacité à construire des applications web dynamiques, réactives et interactives. Le jeu a été créé comme un exercice pratique pour approfondir ma compréhension des concepts fondamentaux de React et des techniques modernes de stylisation front-end.
  
  ### Principales caractéristiques et mise en œuvre technique
  
  - **Fondamentaux de React.js :** La logique du jeu est entièrement construite avec React, en utilisant des composants fonctionnels et des hooks (useState, useEffect, useRef) pour gérer l'état du jeu, gérer les interactions de l'utilisateur et contrôler l'audio.  Cela souligne ma capacité à structurer et organiser efficacement une application React.
  - **Interface utilisateur dynamique avec TailwindCSS :** L'interface utilisateur du jeu est construite avec TailwindCSS, démontrant la capacité à créer rapidement un design propre et moderne en utilisant un framework CSS basé sur les utilitaires.  Cela met en valeur ma compréhension des meilleures pratiques actuelles en matière de stylisation front-end.
  - **Gestion de l'état :** Le jeu gère différents états (niveau, score, vies, jeu terminé/gagné, son activé/désactivé) pour créer une expérience utilisateur fluide et interactive.  Cela montre une compréhension claire de la manière de gérer l'état de l'application dans React.
  - **Gestion des événements :** L'application réagit aux entrées de l'utilisateur (clics de bouton, événements de glisser-déposer) pour traiter les réponses, mettre à jour l'état du jeu et fournir des commentaires en temps réel.
  - **Intégration audio :** Des effets sonores sont utilisés tout au long du jeu, améliorant l'engagement et fournissant des commentaires.  Cela démontre ma capacité à travailler avec des éléments multimédias dans une application web et à gérer la lecture du son, y compris la gestion d'une file d'attente audio et la résolution des problèmes potentiels de compatibilité des navigateurs avec l'API Web Audio.
  - **Modes de jeu multiples :** L'application propose différents modes de jeu (dé-vers-nombre, objets-vers-dé, nombre-vers-dé et un défi de correspondance de colonnes), offrant une variété et présentant différents modèles d'interaction.
  - **Glisser-déposer :** Le mode de jeu "match-columns" utilise la fonctionnalité de glisser-déposer, illustrant ma capacité à mettre en œuvre des interactions utilisateur plus complexes.
  - **Difficulté progressive :** La difficulté du jeu augmente au fur et à mesure que le joueur progresse, démontrant ma capacité à mettre en œuvre une logique de jeu et une progression.
  - **Tests de base :** Comprend une implémentation de tests basiques, démontrant de bonnes pratiques de développement.
  
  ### Architecture et conception
  
  - **Architecture basée sur les composants :** L'application est structurée à l'aide de composants React réutilisables, favorisant la maintenabilité et l'organisation du code.
  - **DiceGame.js :** Ce composant contient la logique de jeu principale, la gestion de l'état, le rendu et la gestion des événements.
  - **App.js :** Sert de point d'entrée principal, rendant le composant DiceGame.
  - **Structure de projet React standard :** Utilise la structure create-react-app pour une configuration et une maintenabilité faciles.
  
  ### Importance technique
  
  Ce projet met en valeur ma capacité à construire des applications web interactives en utilisant des technologies front-end modernes. Le jeu, bien que simple dans son concept, démontre une solide compréhension de React.js, TailwindCSS, la gestion de l'état, la gestion des événements et l'intégration multimédia. Les défis rencontrés et surmontés, en particulier en ce qui concerne la synchronisation audio et la compatibilité entre navigateurs, ont fourni des expériences d'apprentissage précieuses et ont renforcé mes compétences en développement front-end.
  `
      }
    }
  };