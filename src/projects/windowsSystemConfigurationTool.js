export default {
  tags: ["C#", ".NET", "Windows API", "System Administration"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Windows System Configuration Tool",
          description: "A utility for configuring and diagnosing Windows systems for Orchestra software.",
          highlights: [
              "Comprehensive system checks",
              "Performance optimization",
              "SQL Server configuration",
              "User-friendly diagnostics UI"
          ],
          detailedDescription: `
This C# (.NET Framework) Windows Forms application automates and streamlines the configuration and diagnostic checks of a Windows system for the Orchestra POS software, performing a comprehensive suite of tasks to ensure optimal compatibility and performance.

### Key Features and Functionality

- **Environment Checks:** Verifies TeamViewer, admin privileges, directory existence, network settings (IP, gateway, DNS), and network category.
- **System Optimization:** Syncs system clock, initiates Windows Updates, adjusts performance settings, installs C++ Redistributables, enables .NET features, and manages power settings.
- **Orchestra Configuration:** Ensures installation, version, license, and shortcut settings, plus Ghostscript verification.
- **Security and Network:** Configures UAC, firewall ports (1433, 1434, 4900), TLS options, and checks antivirus.
- **SQL Server:** Sets *Felix* service for auto-start and TCP port 1433.
- **Printer and Device:** Lists printers and prepares *SyncOrch* components.
- **UI:** Progress bar, rich text feedback, and success icons.

### Technical Strengths

- **Automation:** Reduces manual steps, enhancing efficiency.
- **Error Handling:** Uses *try-catch* for robustness.
- **Registry Manipulation:** Manages UAC and power settings.
- **Process Management:** Launches external tools and installers.
- **Networking:** Handles IP, DNS, and firewall configurations.
- **SQL Interaction:** Configures and queries SQL Server.

### Overall Impression

Demonstrates deep Windows system administration knowledge, automation expertise, and practical tool development, tailored to a specific business domain (POS systems), with a user-friendly interface for technical and non-technical users.
  `
      },
      fr: {
          title: "Outil de Configuration Système Windows",
          description: "Un utilitaire pour configurer et diagnostiquer les systèmes Windows pour le logiciel Orchestra.",
          highlights: [
              "Vérifications complètes du système",
              "Optimisation des performances",
              "Configuration de SQL Server",
              "Interface utilisateur de diagnostic conviviale"
          ],
          detailedDescription: `
Cette application Windows Forms C# (.NET Framework) automatise et rationalise la configuration et les vérifications de diagnostic d'un système Windows pour le logiciel de point de vente Orchestra, effectuant une suite complète de tâches pour garantir une compatibilité et des performances optimales.

### Principales caractéristiques et fonctionnalités

- **Vérifications de l'environnement :** Vérifie TeamViewer, les privilèges d'administrateur, l'existence des répertoires, les paramètres réseau (IP, passerelle, DNS) et la catégorie de réseau.
- **Optimisation du système :** Synchronise l'horloge système, lance les mises à jour Windows, ajuste les paramètres de performance, installe les redistribuables C++, active les fonctionnalités .NET et gère les paramètres d'alimentation.
- **Configuration d'Orchestra :** Assure l'installation, la version, la licence et les paramètres de raccourci, ainsi que la vérification de Ghostscript.
- **Sécurité et réseau :** Configure l'UAC, les ports du pare-feu (1433, 1434, 4900), les options TLS et vérifie l'antivirus.
- **SQL Server :** Configure le service *Felix* pour le démarrage automatique et le port TCP 1433.
- **Imprimante et périphérique :** Répertorie les imprimantes et prépare les composants *SyncOrch*.
- **Interface utilisateur :** Barre de progression, retour d'information en texte enrichi et icônes de succès.

### Points forts techniques

- **Automatisation :** Réduit les étapes manuelles, améliorant l'efficacité.
- **Gestion des erreurs :** Utilise *try-catch* pour la robustesse.
- **Manipulation du registre :** Gère l'UAC et les paramètres d'alimentation.
- **Gestion des processus :** Lance des outils et des installateurs externes.
- **Mise en réseau :** Gère les configurations IP, DNS et pare-feu.
- **Interaction SQL :** Configure et interroge SQL Server.

### Impression générale

Démontre une connaissance approfondie de l'administration système Windows, une expertise en automatisation et un développement d'outils pratiques, adaptés à un domaine d'activité spécifique (systèmes de point de vente), avec une interface utilisateur conviviale pour les utilisateurs techniques et non techniques.
  `
      }
  }
};