export default {
  tags: ["C#", "ASP.NET Core", "Entity Framework Core", "KuCoin API", "WebSockets", "PostgreSQL", ".NET", "JavaScript", "HTML"],
  screenshots: [
    "/screenshots/rzAssetControlCenter/rzassetcontrolcenter1.jpg",
    "/screenshots/rzAssetControlCenter/rzassetcontrolcenter2.jpg",
    "/screenshots/rzAssetControlCenter/rzassetcontrolcenter3.jpg",
    "/screenshots/rzAssetControlCenter/rzassetcontrolcenter4.jpg",
    "/screenshots/rzAssetControlCenter/rzassetcontrolcenter5.jpg"
  ],
  content: {
      en: {
          title: "Rz Asset Control Center",
          description: "Cryptocurrency Trading Automation Platform (KuCoin)",
          highlights: [
              "Automated Dollar-Cost Averaging (DCA) trading bots.",
              "Secure user authentication with Two-Factor Authentication (2FA).",
              "Real-time price data and order updates via WebSockets.",
              "KuCoin exchange integration for trading and portfolio management.",
              "Persistent data storage using PostgreSQL and Entity Framework Core.",
              "Responsive UI with dynamic data visualizations.",
              "Robust error handling and API retry mechanisms.",
              "Intelligent caching for optimized performance."
          ],
          detailedDescription: `
RzAssetControlCenter is a robust and secure cryptocurrency trading automation platform, empowering users to implement Dollar-Cost Averaging (DCA) strategies on the KuCoin exchange. Built with a modern .NET stack, this project showcases my ability to develop complex, real-world applications that integrate with external APIs, handle sensitive data, and provide a seamless user experience.

**Key Features & Capabilities:**

*   **Automated DCA Trading:** Users can create and manage custom DCA bots, defining parameters like trading pairs, investment amounts, safety order configurations, and target profit percentages. The system intelligently executes trades based on these settings, minimizing manual intervention.
*   **KuCoin Exchange Integration:** Seamlessly connects to the KuCoin API using the KuCoin.Net library, enabling real-time price data, order placement/cancellation, and balance retrieval. I've implemented robust error handling and retry mechanisms to ensure reliable API communication, including specific handling for KuCoin's IP whitelisting requirements.
*   **Real-Time Data & Updates:** Leverages WebSockets to provide users with live price feeds and order status updates, ensuring they have the most current information at their fingertips. This demonstrates my proficiency in working with real-time data streams.
*   **Portfolio Management & Performance Tracking:** Users can monitor their portfolio's performance, view asset distribution, and track historical data through interactive charts and visualizations (powered by Chart.js). This feature showcases my ability to present complex data in a user-friendly manner.
*   **Secure Authentication & Authorization:** Implements a custom identity system with robust security measures, including BCrypt password hashing and optional Two-Factor Authentication (2FA) via authenticator apps. API keys are stored securely, safeguarding user credentials.
*   **Order Management:** Provides a comprehensive interface for managing orders, including features to add funds, close positions at market price, and edit existing orders.
*   **Intelligent Caching:** Employs a custom caching strategy to minimize API calls and improve application performance. The system caches market data and user portfolio information, intelligently invalidating the cache when necessary.
*   **Responsive and Intuitive UI:** The user interface, built with server-rendered HTML and enhanced with JavaScript for interactivity, is designed to be responsive and user-friendly across different devices.

**Technology Stack:**

*   **Backend:** ASP.NET Core 9.0, C# (demonstrates proficiency in modern .NET development)
*   **Database:** PostgreSQL with Entity Framework Core (showcases experience with relational databases and ORMs)
*   **API Integration:** KuCoin.Net library (highlights ability to integrate with third-party APIs)
*   **Frontend:** Server-rendered HTML, JavaScript, Chart.js (demonstrates skills in building interactive web interfaces)
*   **Real-time Communication:** WebSockets (indicates experience with real-time data handling)
*   **Security:** BCrypt, Custom Identity Implementation, 2FA (showcases a commitment to secure coding practices)
* **Background Services:** The system uses background workers that run continuously to keep track of enabled bots.

**Project Structure & Code Quality:**

The project follows a well-defined architecture with a clear separation of concerns, demonstrating my ability to write maintainable and scalable code.  Key patterns and practices employed include:

*   **Service-Oriented Architecture:** Business logic is encapsulated within dedicated service classes (e.g., \`BotLogic\`, \`SpotService\`, \`DashboardCachingService\`).
*   **Dependency Injection:** Used extensively to promote loose coupling and testability.
*   **Repository Pattern:** Data access is abstracted through Entity Framework Core's DbContext.
*   **Background Services:** Long-running tasks, such as bot monitoring and cache maintenance, are handled by background services, ensuring responsiveness of the main application.
*   **Exception Handling:** Comprehensive error handling and logging are implemented throughout the application, enhancing reliability and facilitating debugging.
*   **Asynchronous Programming:** Extensively utilizes \`async/await\` for non-blocking operations, maximizing performance and scalability.
`
      },
      fr: {
          title: "Rz Asset Control Center",
          description: "Plateforme d'automatisation de trading de cryptomonnaies (KuCoin)",
          highlights: [
              "Bots de trading automatisés pour la stratégie d'investissement programmé (DCA).",
              "Authentification utilisateur sécurisée avec authentification à deux facteurs (2FA).",
              "Données de prix et mises à jour des ordres en temps réel via WebSockets.",
              "Intégration de l'échange KuCoin pour le trading et la gestion de portefeuille.",
              "Stockage persistant des données avec PostgreSQL et Entity Framework Core.",
              "Interface utilisateur réactive avec visualisations de données dynamiques.",
              "Gestion robuste des erreurs et mécanismes de réessai de l'API.",
              "Mise en cache intelligente pour des performances optimisées."
          ],
          detailedDescription: `
RzAssetControlCenter est une plateforme d'automatisation de trading de cryptomonnaies robuste et sécurisée, permettant aux utilisateurs de mettre en œuvre des stratégies d'investissement programmé (DCA) sur l'échange KuCoin. Construit avec une pile .NET moderne, ce projet met en valeur ma capacité à développer des applications complexes et réelles qui s'intègrent à des API externes, gèrent des données sensibles et offrent une expérience utilisateur transparente.

**Fonctionnalités et capacités clés :**

*   **Trading DCA automatisé :** Les utilisateurs peuvent créer et gérer des bots DCA personnalisés, en définissant des paramètres tels que les paires de trading, les montants d'investissement, les configurations d'ordres de sécurité et les pourcentages de profit cible. Le système exécute intelligemment les transactions en fonction de ces paramètres, minimisant ainsi l'intervention manuelle.
*   **Intégration de l'échange KuCoin :** Se connecte de manière transparente à l'API KuCoin à l'aide de la bibliothèque KuCoin.Net, permettant d'obtenir des données de prix en temps réel, de placer/annuler des ordres et de récupérer le solde. J'ai mis en œuvre une gestion robuste des erreurs et des mécanismes de réessai pour assurer une communication API fiable, y compris une gestion spécifique des exigences de liste blanche IP de KuCoin.
*   **Données et mises à jour en temps réel :** Exploite les WebSockets pour fournir aux utilisateurs des flux de prix en direct et des mises à jour de l'état des ordres, garantissant ainsi qu'ils disposent des informations les plus récentes. Cela démontre ma maîtrise du travail avec les flux de données en temps réel.
*   **Gestion de portefeuille et suivi des performances :** Les utilisateurs peuvent surveiller les performances de leur portefeuille, visualiser la répartition des actifs et suivre les données historiques grâce à des graphiques et des visualisations interactifs (alimentés par Chart.js). Cette fonctionnalité met en valeur ma capacité à présenter des données complexes de manière conviviale.
*   **Authentification et autorisation sécurisées :** Met en œuvre un système d'identité personnalisé avec des mesures de sécurité robustes, notamment le hachage de mot de passe BCrypt et l'authentification à deux facteurs (2FA) facultative via des applications d'authentification. Les clés API sont stockées en toute sécurité, protégeant ainsi les informations d'identification de l'utilisateur.
*  **Gestion des ordres:** Fournit une interface complète pour la gestion des ordres, y compris des fonctions permettant d'ajouter des fonds, de clôturer des positions au prix du marché et de modifier des ordres existants.
*   **Mise en cache intelligente :** Utilise une stratégie de mise en cache personnalisée pour minimiser les appels API et améliorer les performances de l'application. Le système met en cache les données du marché et les informations du portefeuille de l'utilisateur, invalidant intelligemment le cache lorsque cela est nécessaire.
*   **Interface utilisateur réactive et intuitive :** L'interface utilisateur, construite avec du HTML rendu côté serveur et améliorée avec JavaScript pour l'interactivité, est conçue pour être réactive et conviviale sur différents appareils.

**Pile technologique :**

*   **Backend :** ASP.NET Core 9.0, C# (démontre la maîtrise du développement .NET moderne)
*   **Base de données :** PostgreSQL avec Entity Framework Core (met en valeur l'expérience avec les bases de données relationnelles et les ORM)
*   **Intégration API :** Bibliothèque KuCoin.Net (met en évidence la capacité à s'intégrer à des API tierces)
*   **Frontend :** HTML rendu côté serveur, JavaScript, Chart.js (démontre les compétences en matière de création d'interfaces web interactives)
*   **Communication en temps réel :** WebSockets (indique l'expérience en matière de traitement des données en temps réel)
*   **Sécurité :** BCrypt, implémentation d'identité personnalisée, 2FA (témoigne d'un engagement envers les pratiques de codage sécurisées)
*   **Services d'arrière-plan :** Le système utilise des workers en arrière-plan qui fonctionnent en continu pour suivre les bots activés.

**Structure du projet et qualité du code :**

Le projet suit une architecture bien définie avec une séparation claire des préoccupations, démontrant ma capacité à écrire du code maintenable et évolutif. Les principaux modèles et pratiques employés comprennent :

*   **Architecture orientée services :** La logique métier est encapsulée dans des classes de service dédiées (par exemple, \`BotLogic\`, \`SpotService\`, \`DashboardCachingService\`).
*   **Injection de dépendances :** Largement utilisée pour promouvoir le couplage faible et la testabilité.
*   **Modèle de référentiel :** L'accès aux données est abstrait via le DbContext d'Entity Framework Core.
*   **Services d'arrière-plan :** Les tâches de longue durée, telles que la surveillance des bots et la maintenance du cache, sont gérées par des services d'arrière-plan, garantissant la réactivité de l'application principale.
*   **Gestion des exceptions :** Une gestion complète des erreurs et une journalisation sont mises en œuvre dans toute l'application, améliorant la fiabilité et facilitant le débogage.
*   **Programmation asynchrone :** Utilise largement \`async/await\` pour les opérations non bloquantes, maximisant les performances et l'évolutivité.
`
      }
  }
};