export default {
  tags: ["Unreal Engine 5", "MCP", "C++", "Editor Tooling", "AI Agents", "Blueprint Automation"],
  content: {
      en: {
          title: "RzMCPInterface",
          description: "The most complete UE5 editor MCP bridge - 604 native tools letting any AI assistant drive the Unreal Engine 5 editor.",
          highlights: [
              "604 MCP tools backed by ~700 reflected C++ functions across 21 editor libraries",
              "~150,000 lines of editor C++ plus a zero-dependency Node.js MCP server",
              "Native C++ execution with race-safe game-thread marshaling (not Python round-trips)",
              "NodeForge: a pseudo-code to Blueprint node-graph compiler with auto-layout, validation, and undo",
              "Covers GAS, World Partition, PCG, Niagara, Sequencer, materials, rendering, Python, PIE, screenshots",
              "LLM-aware result shaping: structural digests + pagination instead of dumping raw JSON"
          ],
          detailedDescription: `
A native-C++ Model Context Protocol bridge that lets any MCP-compatible AI assistant drive the Unreal Engine 5 editor - by tool breadth and engine-system depth, one of the most comprehensive UE5 editor bridges in existence.

**Key Features:**

*   **604 reflection-generated tools:** Every BlueprintCallable static UFUNCTION across 21 editor libraries (~700 functions) is auto-registered as an MCP tool with a JSON schema generated from UPROPERTY reflection - so the tool surface scales automatically.
*   **Native execution:** A dependency-free Node.js MCP server speaks stdio JSON-RPC and forwards calls over TCP to an in-editor subsystem that marshals every request onto the game thread (FTSTicker + FEvent, 120s timeout) - UObject-safe, no Python wrapper, no fallbacks.
*   **NodeForge:** A ~11.5k-line C++ pseudo-code to Blueprint node-graph compiler with type resolution, auto-layout, branch convergence, graph-integrity validation, and a GUID-based undo stack.
*   **Breadth:** GAS, World Partition / data layers, PCG, MetaSounds, Niagara, Sequencer, Pose Search, Control Rig, IK Rig/Retargeter, Chaos cloth, Interchange/Datasmith import, Lumen/Nanite/TSR rendering config, Python exec, console commands, screenshots, and PIE control.
*   **LLM-aware:** Payloads over 200 KB return a structural digest plus pagination guidance instead of dumping raw JSON.

**Technology Stack:**

*   **Languages:** C++ (editor module) + JavaScript (Node.js ESM, stdlib only)
*   **Transport:** stdio JSON-RPC server -> TCP editor subsystem
*   **Scale:** ~152,000 lines across the C++ plugin and MCP server
`
      },
      fr: {
          title: "RzMCPInterface",
          description: "Le bridge MCP le plus complet pour l'éditeur UE5 - 604 outils natifs permettant à toute IA de piloter l'éditeur Unreal Engine 5.",
          highlights: [
              "604 outils MCP adossés à ~700 fonctions C++ réfléchies sur 21 bibliothèques éditeur",
              "~150 000 lignes de C++ éditeur plus un serveur MCP Node.js sans dépendance",
              "Exécution C++ native avec marshaling thread-safe sur le game thread (pas d'aller-retours Python)",
              "NodeForge : un compilateur pseudo-code vers graphe de nœuds Blueprint (auto-layout, validation, undo)",
              "Couvre GAS, World Partition, PCG, Niagara, Sequencer, matériaux, rendu, Python, PIE, captures",
              "Mise en forme adaptée aux LLM : digests structurels + pagination au lieu de JSON brut"
          ],
          detailedDescription: `
Un bridge Model Context Protocol en C++ natif qui permet à toute IA compatible MCP de piloter l'éditeur Unreal Engine 5 - par l'ampleur des outils et la profondeur des systèmes moteur, l'un des bridges éditeur UE5 les plus complets qui existent.

**Fonctionnalités principales :**

*   **604 outils générés par réflexion :** Chaque UFUNCTION static BlueprintCallable sur 21 bibliothèques éditeur (~700 fonctions) est auto-enregistrée comme outil MCP avec un schéma JSON généré par réflexion UPROPERTY - la surface d'outils s'étend automatiquement.
*   **Exécution native :** Un serveur MCP Node.js sans dépendance parle JSON-RPC en stdio et transmet les appels par TCP à un sous-système intra-éditeur qui marshale chaque requête sur le game thread (FTSTicker + FEvent, timeout 120s) - sûr pour les UObject, sans wrapper Python, sans repli.
*   **NodeForge :** Un compilateur C++ pseudo-code vers graphe de nœuds Blueprint (~11,5k lignes) avec résolution de types, auto-layout, convergence de branches, validation d'intégrité et pile d'undo basée GUID.
*   **Ampleur :** GAS, World Partition / data layers, PCG, MetaSounds, Niagara, Sequencer, Pose Search, Control Rig, IK Rig/Retargeter, Chaos cloth, import Interchange/Datasmith, config rendu Lumen/Nanite/TSR, exécution Python, commandes console, captures et contrôle PIE.
*   **Adapté aux LLM :** Les payloads de plus de 200 Ko renvoient un digest structurel et des conseils de pagination au lieu de JSON brut.

**Stack technique :**

*   **Langages :** C++ (module éditeur) + JavaScript (Node.js ESM, stdlib uniquement)
*   **Transport :** serveur JSON-RPC stdio -> sous-système éditeur TCP
*   **Échelle :** ~152 000 lignes entre le plugin C++ et le serveur MCP
`
      }
  }
};
