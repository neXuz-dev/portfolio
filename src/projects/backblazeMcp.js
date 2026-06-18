export default {
  tags: ["TypeScript", "MCP", "Reverse Engineering", "API Integration", "Backup"],
  content: {
      en: {
          title: "Backblaze Backup MCP Server",
          description: "MCP server that drives Backblaze Computer Backup from AI assistants - built on a reverse-engineered, undocumented API.",
          highlights: [
              "Reverse-engineered Backblaze Computer Backup's undocumented API",
              "Model Context Protocol (MCP) server implementation",
              "AI-driven backup browsing, search, and restore",
              "Built with TypeScript"
          ],
          detailedDescription: `
An MCP (Model Context Protocol) server that integrates Backblaze's personal backup service with AI assistants like Claude - built on top of an API that had to be reverse-engineered, since Backblaze Computer Backup ships no public API.

**Key Features:**

*   **Reverse Engineering:** Substantial reverse engineering of Backblaze Computer Backup's private/undocumented endpoints and auth flow to make programmatic access possible at all.
*   **MCP Protocol:** Implements the Model Context Protocol for seamless AI assistant integration.
*   **AI-Driven Workflows:** Backup browsing, file search, and restore operations through natural-language conversation.

**Technology Stack:**

*   **Language:** TypeScript
*   **Protocol:** MCP (Model Context Protocol)
*   **Integration:** Reverse-engineered Backblaze backup API
`
      },
      fr: {
          title: "Backblaze Backup MCP Server",
          description: "Serveur MCP pilotant Backblaze Computer Backup depuis les assistants IA - bâti sur une API non documentée rétro-conçue.",
          highlights: [
              "Rétro-ingénierie de l'API non documentée de Backblaze Computer Backup",
              "Implémentation de serveur Model Context Protocol (MCP)",
              "Navigation, recherche et restauration de sauvegardes pilotées par IA",
              "Construit en TypeScript"
          ],
          detailedDescription: `
Un serveur MCP (Model Context Protocol) qui intègre le service de sauvegarde personnel de Backblaze avec les assistants IA comme Claude - bâti sur une API qu'il a fallu rétro-concevoir, puisque Backblaze Computer Backup ne fournit aucune API publique.

**Fonctionnalités principales :**

*   **Rétro-ingénierie :** Rétro-ingénierie substantielle des endpoints privés/non documentés et du flux d'authentification de Backblaze Computer Backup pour rendre l'accès programmatique simplement possible.
*   **Protocole MCP :** Implémente le Model Context Protocol pour une intégration transparente avec les assistants IA.
*   **Workflows pilotés par IA :** Navigation de sauvegardes, recherche de fichiers et opérations de restauration via une conversation en langage naturel.

**Stack technique :**

*   **Langage :** TypeScript
*   **Protocole :** MCP (Model Context Protocol)
*   **Intégration :** API de sauvegarde Backblaze rétro-conçue
`
      }
  }
};
