export default {
  tags: ["Rust", "Windows API", "Raw Input", "egui", "Real-time Systems"],
  content: {
      en: {
          title: "RzRemap",
          description: "Ground-up Rust input remapper focused on deterministic timing and a clean layered architecture.",
          highlights: [
              "Four-crate workspace: domain / runtime / platform-win32 / app",
              "Deterministic QPC-based scheduler for high-resolution timing",
              "Typed, validated remap definitions",
              "Direct Win32 Raw Input and XInput integration via the windows crate",
              "Explicit no-fallback design philosophy"
          ],
          detailedDescription: `
RzRemap is a from-scratch Rust replacement for UCR-style input remappers, built around deterministic timing, typed configuration, and direct Win32 integration.

**Key Features:**

*   **Layered Architecture:** A clean four-crate workspace separating domain, runtime, Win32 platform, and the desktop app.
*   **Deterministic Timing:** A QPC-based scheduler with a high-resolution timing bootstrap for precise, repeatable input.
*   **Typed Remaps:** Remap definitions are strongly typed and validated rather than free-form config.
*   **Direct Win32 Integration:** Raw Input, QPC, and XInput accessed directly through the \`windows\` crate - no abstraction layers hiding the platform.

**Technology Stack:**

*   **Language:** Rust (2024 edition)
*   **UI:** egui
*   **Platform:** Win32 (Raw Input, QPC, XInput) via the \`windows\` crate
`
      },
      fr: {
          title: "RzRemap",
          description: "Remappeur d'entrées en Rust conçu de zéro, axé sur un timing déterministe et une architecture en couches propre.",
          highlights: [
              "Workspace à quatre crates : domain / runtime / platform-win32 / app",
              "Ordonnanceur basé sur QPC pour un timing haute résolution déterministe",
              "Définitions de remap typées et validées",
              "Intégration directe Win32 Raw Input et XInput via la crate windows",
              "Philosophie de conception sans repli explicite"
          ],
          detailedDescription: `
RzRemap est un remplaçant des remappeurs d'entrées de type UCR, conçu de zéro en Rust autour d'un timing déterministe, d'une configuration typée et d'une intégration Win32 directe.

**Fonctionnalités principales :**

*   **Architecture en couches :** Un workspace propre à quatre crates séparant le domaine, le runtime, la plateforme Win32 et l'application bureau.
*   **Timing déterministe :** Un ordonnanceur basé sur QPC avec amorçage de timing haute résolution pour des entrées précises et reproductibles.
*   **Remaps typés :** Les définitions de remap sont fortement typées et validées plutôt qu'une configuration libre.
*   **Intégration Win32 directe :** Raw Input, QPC et XInput accédés directement via la crate \`windows\` - aucune couche d'abstraction ne masque la plateforme.

**Stack technique :**

*   **Langage :** Rust (édition 2024)
*   **Interface :** egui
*   **Plateforme :** Win32 (Raw Input, QPC, XInput) via la crate \`windows\`
`
      }
  }
};
