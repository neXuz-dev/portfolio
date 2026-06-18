export default {
  tags: ["TypeScript", "JavaScript", "MCP", "API Integration", "Automation"],
  content: {
      en: {
          title: "Local Agent MCP Toolkit",
          description: "A suite of original Model Context Protocol servers that give AI assistants local tooling.",
          highlights: [
              "Discord: read-only REST v10 access to servers, channels, members, messages",
              "PowerShell: hardened PowerShell and CMD execution with timeouts",
              "Utilities: glob/grep code search and background-process manager",
              "Web search: SearXNG meta-search with readable-content extraction",
              "Filesystem: sandboxed file operations restricted to allowed roots"
          ],
          detailedDescription: `
A toolkit of original MCP (Model Context Protocol) servers that extend AI assistants with local, sandboxed capabilities - search the web, run shell commands, read Discord, and operate on the filesystem.

**The Servers:**

*   **Discord:** Read-only access to servers, channels, members, and messages via the Discord REST v10 API, with attachment inlining.
*   **PowerShell:** Hardened PowerShell and CMD execution with timeouts and guardrails.
*   **Utilities:** Glob/grep code search plus a background-process manager.
*   **Web Search:** SearXNG meta-search with readable-content extraction (cheerio), user-agent rotation, and instance failover.
*   **Filesystem:** Windows filesystem operations sandboxed to an allow-list of roots.

**Technology Stack:**

*   **Languages:** TypeScript / JavaScript (ESM)
*   **Protocol:** @modelcontextprotocol/sdk
*   **Integrations:** Discord REST, SearXNG, PowerShell/CMD, filesystem
`
      },
      fr: {
          title: "Boîte à Outils MCP pour Agents Locaux",
          description: "Une suite de serveurs Model Context Protocol originaux qui dotent les assistants IA d'outils locaux.",
          highlights: [
              "Discord : accès REST v10 en lecture seule aux serveurs, salons, membres, messages",
              "PowerShell : exécution PowerShell et CMD durcie avec délais d'expiration",
              "Utilities : recherche de code glob/grep et gestionnaire de processus en arrière-plan",
              "Recherche web : méta-recherche SearXNG avec extraction de contenu lisible",
              "Système de fichiers : opérations sandboxées limitées à des racines autorisées"
          ],
          detailedDescription: `
Une boîte à outils de serveurs MCP (Model Context Protocol) originaux qui étendent les assistants IA avec des capacités locales et sandboxées - recherche web, exécution de commandes shell, lecture Discord et opérations sur le système de fichiers.

**Les serveurs :**

*   **Discord :** Accès en lecture seule aux serveurs, salons, membres et messages via l'API REST v10 de Discord, avec inlining des pièces jointes.
*   **PowerShell :** Exécution PowerShell et CMD durcie avec délais d'expiration et garde-fous.
*   **Utilities :** Recherche de code glob/grep plus un gestionnaire de processus en arrière-plan.
*   **Recherche web :** Méta-recherche SearXNG avec extraction de contenu lisible (cheerio), rotation de user-agent et bascule entre instances.
*   **Système de fichiers :** Opérations sur le système de fichiers Windows sandboxées à une liste blanche de racines.

**Stack technique :**

*   **Langages :** TypeScript / JavaScript (ESM)
*   **Protocole :** @modelcontextprotocol/sdk
*   **Intégrations :** Discord REST, SearXNG, PowerShell/CMD, système de fichiers
`
      }
  }
};
