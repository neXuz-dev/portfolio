export default {
  tags: ["Unreal Engine 5", "C++", "Gameplay Systems", "Multiplayer", "Serialization", "Procedural Generation"],
  content: {
      en: {
          title: "Dynamic Quest System",
          description: "A ~115k-line modular, server-authoritative quest framework for Unreal Engine 5 - from a custom visual editor to runtime procedural generation.",
          highlights: [
              "~115,000 lines of C++ across 5 modules (477 BlueprintCallable functions)",
              "Custom UEdGraph visual quest editor with bezier wiring and a multi-tab Slate authoring window",
              "11 objective types and 15 action types with nested AND/OR condition slots",
              "Server-authoritative multiplayer: 11 server + 8 client RPCs, TTL-cached network relevancy",
              "Custom versioned binary save system with async I/O, backups, and legacy migration",
              "Runtime procedural and multi-stage quest generation driven by world points-of-interest"
          ],
          detailedDescription: `
A production-scale, modular quest framework for Unreal Engine 5 that spans the full lifecycle - authoring, runtime, persistence, presentation, and networked multiplayer.

**Key Features:**

*   **Visual authoring:** A bespoke UEdGraph-based "Quest Flow" node editor (custom node/pin/schema/connection-drawing classes with bezier wire pathfinding) inside a ~6,500-line multi-tab Slate window. Quests are diff-friendly per-quest JSON, baked to a versioned binary for runtime.
*   **Composable model:** Three instanced UObject bases (objectives, conditions, actions) - 11 objective types, 15 action types, 3 condition types - with nested activation/skip/failure condition slots.
*   **Multiplayer:** Server-authoritative with 11 server + 8 client RPCs, explicit dedicated-server handling, and a TTL-cached relevancy resolver that replaces naive multicast.
*   **Persistence:** A custom FArchive binary save system (format v4) - not USaveGame - with async save/load, per-quest files, backups, a 50 MB blob cap, and instanced-UObject reconstruction on load.
*   **Procedural generation:** Runtime generators build full quests from world points-of-interest (10 archetypes, 14 stage types) with difficulty-scaled rewards and per-player cooldowns.

**Technology Stack:**

*   **Language:** C++ (5 modules, 262 files)
*   **Tech:** Slate/UEdGraph editor tooling, GameplayTags, OnlineSubsystem replication, JSON + binary serialization
*   **Scale:** ~115,000 lines; available in the store
`
      },
      fr: {
          title: "Dynamic Quest System",
          description: "Un framework de quêtes modulaire et serveur-autoritaire de ~115k lignes pour Unreal Engine 5 - de l'éditeur visuel custom à la génération procédurale runtime.",
          highlights: [
              "~115 000 lignes de C++ sur 5 modules (477 fonctions BlueprintCallable)",
              "Éditeur de quêtes visuel UEdGraph custom (câblage bézier) dans une fenêtre Slate multi-onglets",
              "11 types d'objectifs et 15 types d'actions avec slots de conditions imbriqués ET/OU",
              "Multijoueur serveur-autoritaire : 11 RPC serveur + 8 client, pertinence réseau en cache TTL",
              "Système de sauvegarde binaire versionné custom avec I/O async, backups et migration legacy",
              "Génération de quêtes procédurale et multi-étapes pilotée par les points d'intérêt du monde"
          ],
          detailedDescription: `
Un framework de quêtes modulaire de qualité production pour Unreal Engine 5, couvrant tout le cycle de vie - création, runtime, persistance, présentation et multijoueur en réseau.

**Fonctionnalités principales :**

*   **Création visuelle :** Un éditeur de nœuds "Quest Flow" basé sur UEdGraph (classes node/pin/schema/connection-drawing custom avec câblage bézier) dans une fenêtre Slate multi-onglets de ~6 500 lignes. Les quêtes sont du JSON par quête lisible, compilé en binaire versionné pour le runtime.
*   **Modèle composable :** Trois bases UObject instanciées (objectifs, conditions, actions) - 11 types d'objectifs, 15 types d'actions, 3 types de conditions - avec slots de conditions activation/skip/échec imbriqués.
*   **Multijoueur :** Serveur-autoritaire avec 11 RPC serveur + 8 client, gestion explicite du serveur dédié, et un résolveur de pertinence en cache TTL remplaçant le multicast naïf.
*   **Persistance :** Un système de sauvegarde binaire FArchive custom (format v4) - pas USaveGame - avec save/load async, fichiers par quête, backups, cap de 50 Mo et reconstruction des UObject instanciés au chargement.
*   **Génération procédurale :** Des générateurs runtime construisent des quêtes complètes à partir des points d'intérêt du monde (10 archétypes, 14 types d'étapes) avec récompenses échelonnées et cooldowns par joueur.

**Stack technique :**

*   **Langage :** C++ (5 modules, 262 fichiers)
*   **Tech :** outillage éditeur Slate/UEdGraph, GameplayTags, réplication OnlineSubsystem, sérialisation JSON + binaire
*   **Échelle :** ~115 000 lignes ; disponible dans la boutique
`
      }
  }
};
