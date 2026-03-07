export default {
  tags: ["Rust", "egui", "SSH", "Server Management"],
  content: {
      en: {
          title: "Qanga Server Manager",
          description: "Rust/egui GUI application for managing dedicated game servers via SSH.",
          highlights: [
              "Native Rust GUI with egui for server management",
              "Multi-region server support (France, US)",
              "Real-time log monitoring and server control",
              "Secure SSH key management with encrypted storage",
              "2,800+ lines of Rust"
          ],
          detailedDescription: `
A full-featured Rust GUI application for managing Qanga's dedicated Linux game servers remotely via SSH.

**Key Features:**

*   **Multi-Region Support:** Manages servers across France and US regions with independent control.
*   **SSH Integration:** Secure remote server management with encrypted key storage, leveraging Windows credential protection (icacls).
*   **Real-Time Log Monitoring:** Live log streaming from remote servers with visual feedback.
*   **Server Lifecycle Control:** Start, stop, restart, and monitor multiple server instances.
*   **Audio Alerts:** Sound notifications via rodio for server events.
*   **Obfuscated Credentials:** Uses obfstr for compile-time string obfuscation of sensitive data.

**Technology Stack:**

*   **Language:** Rust (2,800+ LOC)
*   **GUI:** egui / eframe
*   **Networking:** tokio async runtime, SSH
*   **Security:** Encrypted key storage, obfstr, icacls
*   **Audio:** rodio
`
      },
      fr: {
          title: "Qanga Server Manager",
          description: "Application Rust/egui pour la gestion des serveurs de jeu dédiés via SSH.",
          highlights: [
              "GUI Rust native avec egui pour la gestion de serveurs",
              "Support multi-régions (France, US)",
              "Monitoring de logs en temps réel et contrôle serveur",
              "Gestion sécurisée des clés SSH avec stockage chiffré",
              "2 800+ lignes de Rust"
          ],
          detailedDescription: `
Application Rust complète pour gérer les serveurs Linux dédiés de Qanga à distance via SSH.

**Fonctionnalités principales :**

*   **Support multi-régions :** Gestion de serveurs France et US avec contrôle indépendant.
*   **Intégration SSH :** Gestion sécurisée des serveurs avec stockage de clés chiffré et protection Windows (icacls).
*   **Monitoring de logs temps réel :** Streaming de logs en direct depuis les serveurs avec retour visuel.
*   **Contrôle du cycle de vie :** Démarrage, arrêt, redémarrage et monitoring de multiples instances serveur.
*   **Alertes audio :** Notifications sonores via rodio pour les événements serveur.
*   **Données obfusquées :** Utilisation d'obfstr pour l'obfuscation des chaînes sensibles à la compilation.

**Stack technique :**

*   **Langage :** Rust (2 800+ LOC)
*   **GUI :** egui / eframe
*   **Réseau :** runtime asynchrone tokio, SSH
*   **Sécurité :** Stockage de clés chiffré, obfstr, icacls
*   **Audio :** rodio
`
      }
  }
};
