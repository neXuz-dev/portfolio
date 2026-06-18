export default {
  tags: ["Unreal Engine 5", "C++", "Bug Reporting", "HTTP", "Offline-First", "Multiplayer Tooling"],
  content: {
      en: {
          title: "QReport",
          description: "An offline-first in-game bug-reporting system for UE5 multiplayer games - captures a screenshot, log, and metadata and reliably uploads them.",
          highlights: [
              "Disk-persisted durable delivery queue with triple-trigger retry and 7-day auto-pruning",
              "Correct end-of-frame screenshot via the engine pipeline (FScreenshotRequest, opaque alpha)",
              "Multipart HTTP upload with shared-secret header and body-content delivery confirmation",
              "Server-aware routing that honors a replicated server tag over Steam Sockets",
              "Clean Blueprint API with a 60s per-player anti-spam cooldown surviving level loads"
          ],
          detailedDescription: `
An offline-first in-game bug-reporting system for Unreal Engine 5 multiplayer games. A player triggers a report and the plugin captures a true end-of-frame screenshot, the full client log, and session metadata, then reliably uploads them as a multipart bundle.

**Key Features:**

*   **Durable delivery:** Reports are written to disk as a bundle (report.json + client.log + screenshot.png) and delivered via a triple-trigger retry (in-session ticker, engine init, every map load) with 7-day auto-pruning - surviving crashes and offline play.
*   **Correct screenshots:** Uses the engine screenshot pipeline (FScreenshotRequest, not raw ReadPixels), defers the form one tick so the shot shows actual game state, and forces opaque alpha before PNG encoding.
*   **Robust HTTP:** Multipart/form-data with a shared-secret header, body-content delivery confirmation that defeats captive-portal false 200s, and permanent-vs-transient error classification.
*   **Server-aware:** Resolves net mode and honors a replicated server tag (e.g. EU1) so the backend attaches the correct dedicated-server log even when only a SteamID is visible.

**Technology Stack:**

*   **Language:** C++ (UE5, single runtime module, Win64 + Linux)
*   **Tech:** HTTP, Json, ImageWrapper, RenderCore, DeveloperSettings
*   **Scale:** ~930 lines
`
      },
      fr: {
          title: "QReport",
          description: "Un système de rapport de bug en jeu offline-first pour les jeux multijoueur UE5 - capture une capture d'écran, un log et des métadonnées et les envoie de façon fiable.",
          highlights: [
              "File de livraison durable persistée sur disque avec retry à triple déclencheur et purge auto à 7 jours",
              "Capture d'écran de fin de frame correcte via le pipeline moteur (FScreenshotRequest, alpha opaque)",
              "Upload HTTP multipart avec en-tête secret partagé et confirmation de livraison par contenu de réponse",
              "Routage conscient du serveur honorant un tag serveur répliqué via Steam Sockets",
              "API Blueprint propre avec cooldown anti-spam de 60s par joueur survivant aux chargements de niveau"
          ],
          detailedDescription: `
Un système de rapport de bug en jeu offline-first pour les jeux multijoueur Unreal Engine 5. Un joueur déclenche un rapport et le plugin capture une vraie capture de fin de frame, le log client complet et des métadonnées de session, puis les envoie de façon fiable en bundle multipart.

**Fonctionnalités principales :**

*   **Livraison durable :** Les rapports sont écrits sur disque en bundle (report.json + client.log + screenshot.png) et livrés via un retry à triple déclencheur (ticker en session, init moteur, chaque chargement de map) avec purge auto à 7 jours - survivant aux crashes et au jeu hors-ligne.
*   **Captures correctes :** Utilise le pipeline de capture moteur (FScreenshotRequest, pas ReadPixels brut), diffère le formulaire d'un tick pour que la capture montre le vrai état du jeu, et force l'alpha opaque avant l'encodage PNG.
*   **HTTP robuste :** Multipart/form-data avec en-tête secret partagé, confirmation de livraison par contenu de réponse qui déjoue les faux 200 des portails captifs, et classification d'erreurs permanentes vs transitoires.
*   **Conscient du serveur :** Résout le net mode et honore un tag serveur répliqué (ex. EU1) pour que le backend attache le bon log de serveur dédié même quand seul un SteamID est visible.

**Stack technique :**

*   **Langage :** C++ (UE5, un module runtime, Win64 + Linux)
*   **Tech :** HTTP, Json, ImageWrapper, RenderCore, DeveloperSettings
*   **Échelle :** ~930 lignes
`
      }
  }
};
