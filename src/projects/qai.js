export default {
  tags: ["Unreal Engine 5", "C++", "Data-Oriented Design", "Multithreaded AI", "Flow-Field Pathfinding", "Game AI"],
  content: {
      en: {
          title: "QAI",
          description: "A ~47k-line data-oriented UE5 AI runtime driving hundreds of agents - police, creatures, and ships - through a multithreaded processor pipeline.",
          highlights: [
              "Structure-of-Arrays agent registry with 64-byte cache-aligned hot data and a sparse-set handle system",
              "Fused tri-phase ParallelFor collapsing State -> Movement -> Combat into a single thread barrier",
              "Dijkstra flow-field navigation (no NavMesh), with goal relocation and atomic field swaps",
              "Two-axis temporal LOD (brain stride + move interval) with index-phased frame spreading",
              "VAT/ISM impostor crowd tier - 300 impostors from 24.5ms to 13.4ms per frame",
              "14 archetype behaviors behind one interface, plus an 8-faction hostility matrix"
          ],
          detailedDescription: `
A custom, data-oriented AI runtime for Unreal Engine 5 - a from-scratch replacement for stock Behavior Trees and NavMesh AI, built to drive hundreds of agents in a sci-fi open world.

**Key Features:**

*   **Data-oriented core:** A Structure-of-Arrays agent registry with a 64-byte cache-line-aligned hot-data struct, a custom SIMD-aligned allocator, and a generation-counter sparse-set for O(1) handle lookup.
*   **Multithreaded pipeline:** A WorldSubsystem runs State -> Movement -> Combat batch processors each tick via ParallelFor; the standout fuses all three into a single ParallelFor (collapsing three thread barriers into one), net-mode-gated for correctness.
*   **Flow-field navigation:** Dijkstra wavefront over an 80x80 grid built from async sphere-sweep walkability passes - with connected-component goal relocation, wall-avoidance cost surcharge, and atomic field swaps so workers never read a half-built field. No NavMesh.
*   **Crowd scaling:** Distance-banded temporal LOD (brain stride {1,2,4,8}, move interval {0,0.05,0.1,0.25}s) plus a VAT/ISM impostor tier and master-pose animation sharing (~100 agents -> ~3 anim evaluations).
*   **Behavior + factions:** 14 archetype behavior strategies behind one interface, an 8-faction hostility matrix, and round-robin drone attack-token coordination.

**Technology Stack:**

*   **Language:** C++ (UE 5.7)
*   **Tech:** SoA/DOD, ParallelFor, spatial hash grid, AnimToTexture (VAT), GameplayAbilities
*   **Scale:** ~47,000 lines; benchmark-driven (e.g. 50 ships 33 -> 70 fps)
`
      },
      fr: {
          title: "QAI",
          description: "Un runtime d'IA orienté données de ~47k lignes pour UE5, pilotant des centaines d'agents - police, créatures, vaisseaux - via un pipeline multithread.",
          highlights: [
              "Registre d'agents Structure-of-Arrays avec hot data aligné 64 octets et système de handles sparse-set",
              "ParallelFor tri-phase fusionné réduisant State -> Movement -> Combat à une seule barrière de thread",
              "Navigation par flow-field Dijkstra (sans NavMesh), avec relocalisation d'objectif et échange atomique",
              "LOD temporel à deux axes (cadence de décision + intervalle de déplacement) avec étalement par index",
              "Tier d'impostors VAT/ISM - 300 impostors de 24,5ms à 13,4ms par frame",
              "14 comportements d'archétype derrière une interface, plus une matrice d'hostilité à 8 factions"
          ],
          detailedDescription: `
Un runtime d'IA orienté données custom pour Unreal Engine 5 - un remplaçant from-scratch des Behavior Trees et de l'IA NavMesh, conçu pour piloter des centaines d'agents dans un monde ouvert SF.

**Fonctionnalités principales :**

*   **Cœur orienté données :** Un registre d'agents Structure-of-Arrays avec hot data aligné sur ligne de cache (64 octets), un allocateur aligné SIMD custom, et un sparse-set à compteur de génération pour un lookup O(1).
*   **Pipeline multithread :** Un WorldSubsystem exécute des processeurs State -> Movement -> Combat chaque tick via ParallelFor ; le point fort fusionne les trois en un seul ParallelFor (trois barrières de thread réduites à une), conditionné au net-mode pour la justesse.
*   **Navigation flow-field :** Front d'onde Dijkstra sur une grille 80x80 construite par sweeps de sphère async - avec relocalisation d'objectif par composante connexe, surcoût d'évitement des murs et échange atomique du champ. Sans NavMesh.
*   **Mise à l'échelle des foules :** LOD temporel par bandes de distance (cadence {1,2,4,8}, intervalle {0,0.05,0.1,0.25}s) plus un tier d'impostors VAT/ISM et un partage d'animation master-pose (~100 agents -> ~3 évaluations).
*   **Comportements + factions :** 14 stratégies d'archétype derrière une interface, une matrice d'hostilité à 8 factions, et une coordination de jetons d'attaque de drones en round-robin.

**Stack technique :**

*   **Langage :** C++ (UE 5.7)
*   **Tech :** SoA/DOD, ParallelFor, grille de hachage spatial, AnimToTexture (VAT), GameplayAbilities
*   **Échelle :** ~47 000 lignes ; piloté par benchmarks (ex. 50 vaisseaux 33 -> 70 fps)
`
      }
  }
};
