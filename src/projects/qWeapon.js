export default {
  tags: ["Unreal Engine 5", "C++", "Animation Programming", "Server-Authoritative Networking", "Hitscan Combat", "Performance"],
  content: {
      en: {
          title: "QWeapon",
          description: "A UE5 weapon plugin pairing a multithreaded procedural weapon-handling AnimNode with a server-authoritative hitscan firing subsystem.",
          highlights: [
              "Custom FAnimNode_Base running all bone math off the game thread via a thread-safe proxy",
              "Hand-rolled two-bone IK and FABRIK for aim/ready/point/reload pose blending",
              "Lag-free first-person ADS via component-space control-rotation anchoring",
              "Server-authoritative hitscan that resolves damage and headshots on meshless dedicated servers",
              "Zero-allocation tracer pool + ~20 console-variable governors tuned for 100-300-AI firefights"
          ],
          detailedDescription: `
A two-module UE5 plugin covering procedural weapon-handling animation and networked hitscan combat for an FPS/TPS built on the ALS skeleton.

**Key Features:**

*   **Procedural animation node:** A custom FAnimNode_Base runs on the animation worker thread, snapshotting ~70 values through a thread-safe proxy, then blending aiming/ready/pointing component-space poses and layering hand-rolled two-bone IK and FABRIK for the left hand.
*   **Lag-free ADS:** The weapon and sight are anchored to the control rotation in component space to eliminate mesh/yaw latency, with explicit large-world/planetary-gravity correctness.
*   **Server-authoritative firing:** A tickable world subsystem does ECC_Pawn capsule hitscan and ApplyDamage that works on meshless dedicated servers, with per-bone headshot traces and reflection-read friendly-fire suppression.
*   **Crowd-scale FX:** A reusable, zero-allocation tracer rig pool (emissive mesh + light, no per-shot allocation) governed by ~20 console variables (spawn budgets, distance/view-cone culls, lite-vs-full AI FX) for 100-300-AI firefights; cosmetics skip dedicated servers.

**Technology Stack:**

*   **Language:** C++ (UE ~5.5-5.7)
*   **Tech:** AnimGraphRuntime/AnimationCore (custom AnimNode + editor AnimGraph node), networking, Niagara
*   **Scale:** ~5,100 lines
`
      },
      fr: {
          title: "QWeapon",
          description: "Un plugin d'armes UE5 associant un AnimNode procédural multithread de maniement d'arme à un subsystem de tir hitscan serveur-autoritaire.",
          highlights: [
              "FAnimNode_Base custom exécutant tout le calcul d'os hors du game thread via un proxy thread-safe",
              "IK deux-os et FABRIK faits main pour le blend des poses visée/prêt/pointage/rechargement",
              "ADS première personne sans latence par ancrage à la rotation de contrôle en espace composant",
              "Hitscan serveur-autoritaire résolvant dégâts et headshots sur serveurs dédiés sans mesh",
              "Pool de traceurs zéro-allocation + ~20 console variables réglées pour des fusillades à 100-300 IA"
          ],
          detailedDescription: `
Un plugin UE5 à deux modules couvrant l'animation procédurale de maniement d'arme et le combat hitscan en réseau, pour un FPS/TPS bâti sur le squelette ALS.

**Fonctionnalités principales :**

*   **Nœud d'animation procédural :** Un FAnimNode_Base custom s'exécute sur le thread worker d'animation, capture ~70 valeurs via un proxy thread-safe, puis blende les poses visée/prêt/pointage en espace composant et superpose un IK deux-os et FABRIK faits main pour la main gauche.
*   **ADS sans latence :** L'arme et le viseur sont ancrés à la rotation de contrôle en espace composant pour éliminer la latence mesh/yaw, avec une correction explicite large-world/gravité planétaire.
*   **Tir serveur-autoritaire :** Un world subsystem tickable fait du hitscan capsule ECC_Pawn et ApplyDamage fonctionnant sur serveurs dédiés sans mesh, avec traces de headshot par os et suppression du friendly-fire lue par réflexion.
*   **VFX à l'échelle de foules :** Un pool de traceurs réutilisable et zéro-allocation (mesh émissif + lumière, aucune allocation par tir) gouverné par ~20 console variables (budgets de spawn, culls distance/view-cone, VFX IA lite-vs-full) pour des fusillades à 100-300 IA ; les cosmétiques sautent les serveurs dédiés.

**Stack technique :**

*   **Langage :** C++ (UE ~5.5-5.7)
*   **Tech :** AnimGraphRuntime/AnimationCore (AnimNode custom + nœud AnimGraph éditeur), réseau, Niagara
*   **Échelle :** ~5 100 lignes
`
      }
  }
};
