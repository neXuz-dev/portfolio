export default {
  tags: ["C#", "ASP.NET Core", "Entity Framework", "KuCoin API", "WebSocket", "PostgreSQL"],  // Tags remain language-agnostic
  content: {
      en: {
          title: "Rz Asset Control Center",
          description: "A robust web application for cryptocurrency asset management and automated trading.",
          highlights: [
              "Secure authentication with 2FA",
              "Real-time WebSocket data handling",
              "Automated DCA trading bot",
              "PostgreSQL database integration"
          ],
          detailedDescription: `
This project showcases my ability to develop a sophisticated, secure, and scalable web application for managing cryptocurrency assets and automating trading strategies using ASP.NET Core. Rz Asset Control Center integrates with the KuCoin exchange, offering user authentication, real-time data monitoring, and automated trading bot management, highlighting strong backend development capabilities.

### Key Technologies & Concepts Demonstrated

- **ASP.NET Core:** Foundation for modern web app development.
- **Entity Framework Core:** ORM for PostgreSQL database interactions, showcasing database design and persistence skills.
- **KuCoin API Integration:** Uses *Kucoin.Net* SDK for REST and WebSocket APIs to fetch account info, place orders, and subscribe to real-time streams.
- **Authentication and Authorization:** Implements ASP.NET Identity with password hashing (*BCrypt*) and two-factor authentication (2FA).
- **Real-time Data Handling:** *WebSocketClient.cs* manages balance and order updates in real time.
- **Asynchronous Programming:** Extensive use of *async*/*await* for scalability.
- **Dependency Injection:** *Startup.cs* showcases modularity and testability.
- **Logging:** Serilog integration for monitoring and debugging.
- **Background Services:** *BotBackgroundService.cs* handles continuous bot operations.

### Project Functionality Overview

1. **User Authentication:** Login with 2FA and session management via cookies.
2. **Asset Management:** Displays holdings and USD value from KuCoin.
3. **Order Management:** Retrieves and manages open orders.
4. **Automated Trading Bot (DCA):** Configurable bot for base orders, safety orders, and take-profit, running in the background.
5. **UI:** Dynamic, responsive interface with homemade HTML generation.
6. **Time Synchronization:** Ensures accurate trading with NTP server sync.

### File Analysis Summary

- Includes *Startup.cs*, *Program.cs*, *BotLogic.cs*, and more, forming a comprehensive full-stack solution.

### Overall Impression

A substantial project demonstrating full-stack web development, API integration, and secure design, with a focus on complex financial algorithms and real-time systems, reflecting a proactive approach to impactful solutions.
  `
      },
      fr: {
          title: "Rz Asset Control Center",
          description: "Une application web robuste pour la gestion d'actifs de cryptomonnaies et le trading automatisé.",
          highlights: [
              "Authentification sécurisée avec 2FA",
              "Gestion des données WebSocket en temps réel",
              "Bot de trading DCA automatisé",
              "Intégration de la base de données PostgreSQL"
          ],
          detailedDescription: `
Ce projet met en valeur ma capacité à développer une application web sophistiquée, sécurisée et évolutive pour la gestion des actifs de cryptomonnaies et l'automatisation des stratégies de trading en utilisant ASP.NET Core. Rz Asset Control Center s'intègre à l'échange KuCoin, offrant une authentification utilisateur, une surveillance des données en temps réel et une gestion automatisée des bots de trading, soulignant de solides capacités de développement backend.

### Technologies et concepts clés démontrés

- **ASP.NET Core :** Base pour le développement d'applications web modernes.
- **Entity Framework Core :** ORM pour les interactions avec la base de données PostgreSQL, mettant en valeur les compétences en conception de bases de données et en persistance.
- **Intégration de l'API KuCoin :** Utilise le SDK *Kucoin.Net* pour les API REST et WebSocket afin de récupérer les informations de compte, de passer des ordres et de s'abonner aux flux en temps réel.
- **Authentification et autorisation :** Implémente ASP.NET Identity avec hachage de mot de passe (*BCrypt*) et authentification à deux facteurs (2FA).
- **Gestion des données en temps réel :** *WebSocketClient.cs* gère les mises à jour du solde et des ordres en temps réel.
- **Programmation asynchrone :** Utilisation extensive de *async*/*await* pour l'évolutivité.
- **Injection de dépendances :** *Startup.cs* met en valeur la modularité et la testabilité.
- **Journalisation :** Intégration de Serilog pour la surveillance et le débogage.
- **Services d'arrière-plan :** *BotBackgroundService.cs* gère les opérations continues du bot.

### Aperçu des fonctionnalités du projet

1. **Authentification de l'utilisateur :** Connexion avec 2FA et gestion de session via cookies.
2. **Gestion des actifs :** Affiche les avoirs et la valeur en USD à partir de KuCoin.
3. **Gestion des ordres :** Récupère et gère les ordres ouverts.
4. **Bot de trading automatisé (DCA) :** Bot configurable pour les ordres de base, les ordres de sécurité et la prise de profit, s'exécutant en arrière-plan.
5. **Interface utilisateur :** Interface dynamique et réactive avec génération HTML maison.
6. **Synchronisation de l'heure :** Assure un trading précis avec la synchronisation du serveur NTP.

### Résumé de l'analyse des fichiers

- Comprend *Startup.cs*, *Program.cs*, *BotLogic.cs*, et plus encore, formant une solution complète full-stack.

### Impression générale

Un projet substantiel démontrant le développement web full-stack, l'intégration d'API et une conception sécurisée, avec un accent sur les algorithmes financiers complexes et les systèmes en temps réel, reflétant une approche proactive des solutions percutantes.
  `
      }
  }
};