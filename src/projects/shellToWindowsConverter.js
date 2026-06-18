export default {
  tags: ["Rust", "egui", "Windows API", "GUI Development"],
  content: {
      en: {
          title: "Shell-to-Windows Converter",
          description: "Native Rust GUI that converts shell scripts into Windows .bat, .cpp, or compiled .exe outputs.",
          highlights: [
              "Native egui/eframe desktop GUI",
              "Converts .sh into .bat, .cpp, .exe, or a WSL wrapper",
              "Embedded C++ to executable compilation",
              "Single standalone Windows binary"
          ],
          detailedDescription: `
A native Windows desktop tool that takes a shell script and emits Windows-native equivalents — from a simple batch file to a fully compiled executable.

**Key Features:**

*   **Multiple Targets:** Converts \`.sh\` scripts into \`.bat\`, \`.cpp\`, \`.exe\`, or a WSL wrapper.
*   **Embedded Compilation:** Generated C++ is auto-compiled into a standalone \`.exe\`.
*   **Native GUI:** A clean egui/eframe desktop interface with native file dialogs.
*   **Self-Contained:** Ships as a single standalone Windows binary.

**Technology Stack:**

*   **Language:** Rust
*   **UI:** egui / eframe
*   **Platform:** Win32 (winapi), rfd file dialogs
`
      },
      fr: {
          title: "Convertisseur Shell vers Windows",
          description: "GUI Rust native qui convertit des scripts shell en sorties Windows .bat, .cpp ou .exe compilées.",
          highlights: [
              "GUI bureau native egui/eframe",
              "Convertit les .sh en .bat, .cpp, .exe ou wrapper WSL",
              "Compilation C++ vers exécutable intégrée",
              "Binaire Windows autonome unique"
          ],
          detailedDescription: `
Un outil bureau Windows natif qui prend un script shell et produit des équivalents natifs Windows — d'un simple fichier batch à un exécutable entièrement compilé.

**Fonctionnalités principales :**

*   **Cibles multiples :** Convertit les scripts \`.sh\` en \`.bat\`, \`.cpp\`, \`.exe\` ou wrapper WSL.
*   **Compilation intégrée :** Le C++ généré est auto-compilé en \`.exe\` autonome.
*   **GUI native :** Une interface bureau egui/eframe propre avec des dialogues de fichiers natifs.
*   **Autonome :** Livré sous forme d'un seul binaire Windows autonome.

**Stack technique :**

*   **Langage :** Rust
*   **Interface :** egui / eframe
*   **Plateforme :** Win32 (winapi), dialogues de fichiers rfd
`
      }
  }
};
