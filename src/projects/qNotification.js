export default {
  tags: ["Unreal Engine 5", "C++", "UMG/Slate", "Game UI", "Blueprint API", "Media Playback"],
  content: {
      en: {
          title: "QNotification",
          description: "A runtime in-game notification/HUD framework for UE5 - toasts, warnings, progress, and communication routed through a priority-managed singleton.",
          highlights: [
              "Four BlueprintCallable entry points routed into on-screen zones with priority interruption and queueing",
              "Audio-synchronized typewriter with punctuation-weighted CPS and adaptive catch-up",
              "Real Slate text-layout dialogue pagination (FSlateTextLayout) for long NPC dialogue",
              "Embedded toast video player (UMediaPlayer/UMediaTexture) with looping and fallback image",
              "Global Slate input processor for Escape/gamepad dismissal"
          ],
          detailedDescription: `
A runtime in-game notification and HUD framework for Unreal Engine 5. Gameplay code calls ShowToast / ShowWarning / ShowProgress / ShowCommunication and a singleton manager routes each into the right on-screen zone.

**Key Features:**

*   **Priority routing:** Notifications go into per-zone slots with priority interruption, capacity limits, queueing, and auto-hide timers; a custom Slate IInputProcessor handles global Escape/gamepad dismissal.
*   **Audio-synced typewriter:** Computes a punctuation-weighted characters-per-second rate from dialogue audio duration, then smoothly closes the gap between audio progress and revealed text with a clamped adaptive multiplier.
*   **Dialogue pagination:** Uses FSlateTextLayout to measure wrapped lines and split long NPC dialogue into pages.
*   **Embedded video:** A full UMediaPlayer/UMediaTexture pipeline for toast video, with looping, a progress bar, and a fallback image on failure.

**Technology Stack:**

*   **Language:** C++ (UE5, single runtime module)
*   **Tech:** UMG/Slate, MediaAssets, a custom input processor, Blueprint-facing API
*   **Scale:** ~6,000 lines
`
      },
      fr: {
          title: "QNotification",
          description: "Un framework de notifications/HUD en jeu pour UE5 - toasts, avertissements, progression et communication routés par un singleton à gestion de priorité.",
          highlights: [
              "Quatre points d'entrée BlueprintCallable routés dans des zones écran avec interruption par priorité et file",
              "Machine à écrire synchronisée à l'audio avec CPS pondéré par la ponctuation et rattrapage adaptatif",
              "Pagination de dialogue par vrai layout de texte Slate (FSlateTextLayout) pour les longs dialogues PNJ",
              "Lecteur vidéo de toast intégré (UMediaPlayer/UMediaTexture) avec boucle et image de repli",
              "Processeur d'entrée Slate global pour le rejet Échap/manette"
          ],
          detailedDescription: `
Un framework de notifications et HUD en jeu pour Unreal Engine 5. Le code gameplay appelle ShowToast / ShowWarning / ShowProgress / ShowCommunication et un manager singleton route chacun dans la bonne zone écran.

**Fonctionnalités principales :**

*   **Routage par priorité :** Les notifications vont dans des slots par zone avec interruption par priorité, limites de capacité, file d'attente et timers d'auto-masquage ; un IInputProcessor Slate custom gère le rejet global Échap/manette.
*   **Machine à écrire synchro audio :** Calcule un débit caractères/seconde pondéré par la ponctuation à partir de la durée audio du dialogue, puis comble en douceur l'écart entre la progression audio et le texte révélé via un multiplicateur adaptatif borné.
*   **Pagination de dialogue :** Utilise FSlateTextLayout pour mesurer les lignes enroulées et découper les longs dialogues PNJ en pages.
*   **Vidéo intégrée :** Un pipeline UMediaPlayer/UMediaTexture complet pour la vidéo de toast, avec boucle, barre de progression et image de repli en cas d'échec.

**Stack technique :**

*   **Langage :** C++ (UE5, un module runtime)
*   **Tech :** UMG/Slate, MediaAssets, processeur d'entrée custom, API Blueprint
*   **Échelle :** ~6 000 lignes
`
      }
  }
};
