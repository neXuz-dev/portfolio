export default {
    title: "Rz Asset Control Center",
    description: "A robust web application for cryptocurrency asset management and automated trading.",
    tags: ["ASP.NET Core", "Entity Framework", "KuCoin API", "WebSocket", "PostgreSQL"],
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
  };