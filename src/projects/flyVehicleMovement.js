export default {
  tags: ["Unreal Engine 5", "C++", "Chaos Physics", "Vehicle Movement", "Niagara", "Performance"],
  content: {
      en: {
          title: "FlyVehicleMovement",
          description: "A force-driven hovering-vehicle movement component for UE5, simulating multi-thruster ground effect and arcade handling on a Chaos rigid body.",
          highlights: [
              "Pure force-based control over a Chaos body (AddForce/AddTorque, never transform hacking)",
              "Multi-thruster ground-effect hover plus a 4-wheel arcade model (boost, drift, handbrake, banking)",
              "Round-robin trace scheduling and a temporal-coherence collision cache with hit-ratio metrics",
              "Distance-LOD tick suppression and idle auto-freeze - settled vehicles become zero-cost obstacles",
              "~60-parameter data-driven tuning with curve assets and low-FPS protection"
          ],
          detailedDescription: `
A force-driven flying/hovering vehicle movement component for Unreal Engine 5, built to run many vehicles at once.

**Key Features:**

*   **Physics-correct control:** Extends UPawnMovementComponent and drives a Chaos rigid body purely via AddForce/AddTorque/AddForceAtLocation - never transform manipulation.
*   **Two hover models:** An array of line-traced ground-effect thrusters plus a 4-corner arcade hover model with boost, drift, handbrake, banking, and slope anti-sliding.
*   **Scale engineering:** Round-robin thruster trace scheduling, a temporal-coherence collision cache with hit/miss metrics, distance-based LOD tick suppression, and idle auto-freeze that disables physics on settled vehicles.
*   **Data-driven:** ~60 tuning parameters plus CurveFloat/CurveVector assets for acceleration, steering, braking, and altitude, with delta-time clamping for low-FPS protection.

**Technology Stack:**

*   **Language:** C++ (UE5, Chaos physics)
*   **Tech:** UPawnMovementComponent, Niagara VFX, Slate/UMG debug HUD, Blueprint function library
*   **Scale:** ~9,800 lines
`
      },
      fr: {
          title: "FlyVehicleMovement",
          description: "Un composant de déplacement de véhicule à coussin d'air pour UE5, simulant l'effet de sol multi-propulseurs et un pilotage arcade sur un corps Chaos.",
          highlights: [
              "Contrôle par forces pur sur un corps Chaos (AddForce/AddTorque, jamais de manipulation de transform)",
              "Hover à effet de sol multi-propulseurs plus un modèle arcade 4 roues (boost, drift, frein à main, inclinaison)",
              "Ordonnancement de traces en round-robin et cache de collision à cohérence temporelle avec métriques",
              "Suppression de tick par LOD de distance et auto-gel à l'arrêt - les véhicules posés deviennent gratuits",
              "Réglage data-driven à ~60 paramètres avec assets de courbes et protection bas-FPS"
          ],
          detailedDescription: `
Un composant de déplacement de véhicule volant/à coussin d'air pour Unreal Engine 5, conçu pour faire tourner de nombreux véhicules en même temps.

**Fonctionnalités principales :**

*   **Contrôle physiquement correct :** Étend UPawnMovementComponent et pilote un corps rigide Chaos uniquement via AddForce/AddTorque/AddForceAtLocation - jamais par manipulation de transform.
*   **Deux modèles de hover :** Un tableau de propulseurs à effet de sol (line-trace) plus un modèle arcade 4 coins avec boost, drift, frein à main, inclinaison et anti-glissement en pente.
*   **Ingénierie d'échelle :** Ordonnancement des traces de propulseurs en round-robin, cache de collision à cohérence temporelle avec métriques hit/miss, suppression de tick par LOD de distance, et auto-gel désactivant la physique des véhicules posés.
*   **Data-driven :** ~60 paramètres de réglage plus des assets CurveFloat/CurveVector pour l'accélération, la direction, le freinage et l'altitude, avec clamping du delta-time pour la protection bas-FPS.

**Stack technique :**

*   **Langage :** C++ (UE5, physique Chaos)
*   **Tech :** UPawnMovementComponent, VFX Niagara, HUD de debug Slate/UMG, function library Blueprint
*   **Échelle :** ~9 800 lignes
`
      }
  }
};
