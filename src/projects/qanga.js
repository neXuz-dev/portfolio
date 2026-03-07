export default {
  tags: ["C++", "Unreal Engine 5", "Dedicated Servers", "Steam SDK", "Rust", "Networking"],
  content: {
      en: {
          title: "Qanga",
          description: "Open-world multiplayer game on a custom Unreal Engine 5 fork with dedicated servers.",
          highlights: [
              "Took over 99% of development in 2025 — learned UE5 C++ from scratch",
              "2,400+ commits and 1.4 GB codebase in under a year",
              "Built 15+ custom C++ plugins totaling 300,000+ lines of code",
              "Custom UE5 engine fork with rendering pipeline modifications",
              "QPolice (61K LOC), Dynamic Quest System (52K LOC), MCP Interface (46K LOC), QAI (41K LOC)",
              "Dedicated Linux servers with custom Rust management GUI",
              "Custom HLSL/SM6 shader development and GPU instancing (20K LOC)",
              "Steam SDK integration with automated build deployment"
          ],
          detailedDescription: `
Qanga is an open-world multiplayer game built on Unreal Engine 5, originally created by IolaCorp around 2021. In April 2025, I took over 99% of the development — my first serious UE5 C++ project. Starting from zero engine experience, I ramped up to custom engine forks, vertex factory systems, and shader development in under a year.

**Scale & Scope:**

*   **2,400+ commits** across the game project alone
*   **1.4 GB** codebase with **15+ custom C++ plugins I authored**
*   **300,000+ lines** of original C++ code across my plugins
*   **3 custom engine forks** (UE 5.3, 5.7.1, 5.7.3) totaling 11 GB of modified engine source
*   **Dedicated Linux servers** with custom Rust management GUI

---

### Plugins I Built (each individually larger than most standalone projects)

**QPolice — Law Enforcement & NPC System** — 61,000 LOC | 179 commits
Comprehensive law enforcement and NPC behavior system with AI-driven patrol, pursuit, and interaction mechanics.

**Dynamic Quest System** — 52,000 LOC | 589 commits
Production-quality quest framework with modular condition/objective architecture. Async operations, thread-safe design, binary serialization, support for 100+ concurrent quests per player, visual editor, event-driven progression, and Blueprint integration.

**RzMCPInterface — Editor Automation** — 46,000 LOC | 61 commits
Editor automation and Python scripting interface providing programmatic access to Unreal Editor operations. Actor manipulation, blueprint editing, animation blueprint operations, material editing, widget blueprint manipulation, mesh operations, sequencer control, and JSON-based communication for external tools.

**QAI — AI System** — 41,000 LOC | 141 commits
AI behavior and decision-making framework. Perception, pathfinding integration, behavior trees, and intelligent NPC systems.

**QNotification — Notification System** — 34,000 LOC | 45 commits
In-game notification and UI communication framework with event-driven messaging, widget management, and cross-system alerts.

**QTriggerZone — Spatial Triggers** — 21,000 LOC | 9 commits
Spatial trigger and interaction zone system with shape-based detection, event dispatching, and gameplay integration.

**RzIndirectInstancing — GPU Rendering** — 20,000 LOC | 44 commits
Custom vertex factory and GPU instancing system for efficient rendering of high-count instances. RHI-level optimizations, shader parameters, LOD support, GPU scene mesh integration. Optimized for UE 5.7.

**QVehicles — Vehicle Systems** — 12,000 LOC | 29 commits
Vehicle systems with replicated siren components, multiple siren states, material-based light effects, MetaSound audio, and gesture recognition with networked state sync.

**QCableConnector** — 8,400 LOC | 39 commits
Cable and connection system for linking gameplay objects with physical cable simulation.

**QWeapon — Weapon System** — 5,100 LOC | 73 commits
Weapon system with animation blueprint integration, AnimGraph evaluation nodes, and animation-driven weapon mechanics.

---

**Engine Modifications:**

Working directly in UE5 engine source across multiple versions:
*   Vertex factory system extensions for custom instancing
*   Cook pipeline stabilization and performance optimization
*   Shader compiler fixes and SM6 compatibility patches
*   Double-float type migration (FDFVector3, FDFMatrix) across rendering code

**Tooling Built Around Qanga:**

*   **Qanga Server Manager** (Rust/egui, 2,800 LOC) — GUI for managing dedicated servers via SSH, multi-region support, real-time log monitoring
*   **QangaSteamUploader** (Rust) — automated Steam build deployment
*   **backblaze-backup-mcp** (TypeScript) — MCP server for backup integration
*   **TraceFrameExporter** — custom Unreal Insights trace analyzer for performance profiling
`
      },
      fr: {
          title: "Qanga",
          description: "Jeu multijoueur en monde ouvert sur un fork custom d'Unreal Engine 5 avec serveurs dédiés.",
          highlights: [
              "Reprise de 99% du développement en 2025 — apprentissage UE5 C++ depuis zéro",
              "2 400+ commits et 1,4 Go de code en moins d'un an",
              "15+ plugins C++ custom totalisant 300 000+ lignes de code",
              "Fork custom du moteur UE5 avec modifications du pipeline de rendu",
              "QPolice (61K LOC), Quest System (52K LOC), MCP Interface (46K LOC), QAI (41K LOC)",
              "Serveurs Linux dédiés avec GUI de gestion en Rust",
              "Développement de shaders HLSL/SM6 et instanciation GPU (20K LOC)",
              "Intégration Steam SDK avec déploiement automatisé"
          ],
          detailedDescription: `
Qanga est un jeu multijoueur en monde ouvert construit sur Unreal Engine 5, créé à l'origine par IolaCorp vers 2021. En avril 2025, j'ai repris 99% du développement — mon premier projet sérieux en C++ UE5. Partant de zéro en expérience moteur, j'ai progressé jusqu'aux forks de moteur custom, systèmes de vertex factory et développement de shaders en moins d'un an.

**Envergure :**

*   **2 400+ commits** sur le projet de jeu seul
*   **1,4 Go** de code avec **15+ plugins C++ custom que j'ai écrits**
*   **300 000+ lignes** de code C++ original dans mes plugins
*   **3 forks de moteur** (UE 5.3, 5.7.1, 5.7.3) totalisant 11 Go de source moteur modifié
*   **Serveurs Linux dédiés** avec GUI de gestion custom en Rust

---

### Plugins que j'ai développés (chacun individuellement plus grand que la plupart des projets standalone)

**QPolice — Système Forces de l'Ordre & PNJ** — 61 000 LOC | 179 commits
Système complet de forces de l'ordre et comportement PNJ avec patrouille IA, poursuite et mécaniques d'interaction.

**Dynamic Quest System** — 52 000 LOC | 589 commits
Framework de quêtes avec architecture modulaire condition/objectif. Opérations asynchrones, design thread-safe, sérialisation binaire, support 100+ quêtes concurrentes par joueur, éditeur visuel et intégration Blueprint.

**RzMCPInterface — Automatisation Éditeur** — 46 000 LOC | 61 commits
Interface d'automatisation éditeur et scripting Python. Manipulation d'acteurs, édition de blueprints, opérations animation/matériaux/widgets et communication JSON pour outils externes.

**QAI — Système IA** — 41 000 LOC | 141 commits
Framework de comportement et décision IA. Perception, intégration pathfinding, arbres de comportement et systèmes PNJ intelligents.

**QNotification — Système de Notifications** — 34 000 LOC | 45 commits
Framework de notifications et communication UI avec messagerie événementielle, gestion de widgets et alertes inter-systèmes.

**QTriggerZone — Déclencheurs Spatiaux** — 21 000 LOC | 9 commits
Système de déclencheurs et zones d'interaction spatiales avec détection par formes, dispatch d'événements et intégration gameplay.

**RzIndirectInstancing — Rendu GPU** — 20 000 LOC | 44 commits
Vertex factory et système d'instanciation GPU pour le rendu efficace de grandes quantités d'instances. Optimisations RHI, paramètres de shaders, support LOD. Optimisé pour UE 5.7.

**QVehicles — Systèmes Véhicules** — 12 000 LOC | 29 commits
Systèmes véhicules avec composants sirène répliqués, effets lumineux, audio MetaSound et reconnaissance de gestes avec synchronisation réseau.

**QCableConnector** — 8 400 LOC | 39 commits
Système de câbles et connexions pour relier les objets de gameplay avec simulation physique de câbles.

**QWeapon — Système d'Armes** — 5 100 LOC | 73 commits
Système d'armes avec intégration animation blueprint, nœuds d'évaluation AnimGraph et mécaniques d'armes pilotées par animation.

---

**Modifications Moteur :**

Travail direct dans le code source UE5 sur plusieurs versions :
*   Extensions du système de vertex factory pour l'instanciation personnalisée
*   Stabilisation et optimisation du pipeline de cook
*   Corrections du compilateur de shaders et patchs de compatibilité SM6
*   Migration des types double-float (FDFVector3, FDFMatrix) dans le code de rendu

**Outils développés autour de Qanga :**

*   **Qanga Server Manager** (Rust/egui, 2 800 LOC) — GUI de gestion des serveurs dédiés via SSH, support multi-région, monitoring de logs en temps réel
*   **QangaSteamUploader** (Rust) — déploiement automatisé vers Steam
*   **backblaze-backup-mcp** (TypeScript) — serveur MCP pour l'intégration backup
*   **TraceFrameExporter** — analyseur de traces Unreal Insights pour le profilage
`
      }
  }
};
