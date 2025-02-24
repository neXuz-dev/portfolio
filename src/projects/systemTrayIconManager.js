export default {
  tags: ["AutoIt", "Windows API", "UI Automation", "Event Handling"], // Tags remain language-agnostic
  content: {
      en: {
          title: "System Tray Icon Manager",
          description: "AutoIt scripts for managing Windows system tray icons.",
          highlights: [
              "Dynamic icon monitoring",
              "Event hook implementation",
              "Precise toolbar manipulation",
              "Robust error handling"
          ],
          detailedDescription: `
This project demonstrates proficiency in low-level Windows API interaction and process management through AutoIt scripts, selectively hiding specific application icons from the Windows system tray to enhance user experience and system control.

### Key Features and Technical Highlights

- **Targeted Icon Removal:** Identifies and hides icons by process name (e.g., *NHQM.exe*) or explorer UID with precision.
- **Dynamic Monitoring:** Uses *_WinAPI_SetWinEventHook* for continuous monitoring of tray icon creation and changes.
- **Windows API Mastery:** Employs *_WinAPI_OpenProcess*, *_WinAPI_ReadProcessMemory*, *_GUICtrlToolbar* functions, and *_WinAPI_ShellNotifyIcon* for toolbar manipulation.
- **Robust Error Handling:** Ensures stability with comprehensive checks.
- **AutoIt Expertise:** Leverages DLL structures, callbacks, and UI automation.

### Why This Matters

It delves into Windows internals, showcasing process management, API interaction, and event handling skills transferable to system-level programming, automation, and application integration, with a focus on technical development over aesthetics.
  `
      },
      fr: {
          title: "Gestionnaire d'Icônes de la Barre Système",
          description: "Scripts AutoIt pour gérer les icônes de la barre d'état système de Windows.",
          highlights: [
              "Surveillance dynamique des icônes",
              "Implémentation de hooks d'événements",
              "Manipulation précise de la barre d'outils",
              "Gestion robuste des erreurs"
          ],
          detailedDescription: `
Ce projet démontre la maîtrise de l'interaction avec l'API Windows de bas niveau et de la gestion des processus grâce à des scripts AutoIt, masquant sélectivement des icônes d'application spécifiques de la barre d'état système de Windows afin d'améliorer l'expérience utilisateur et le contrôle du système.

### Principales caractéristiques et points forts techniques

- **Suppression ciblée des icônes :** Identifie et masque les icônes par nom de processus (par exemple, *NHQM.exe*) ou UID de l'explorateur avec précision.
- **Surveillance dynamique :** Utilise *_WinAPI_SetWinEventHook* pour une surveillance continue de la création et des modifications des icônes de la barre d'état.
- **Maîtrise de l'API Windows :** Utilise les fonctions *_WinAPI_OpenProcess*, *_WinAPI_ReadProcessMemory*, *_GUICtrlToolbar* et *_WinAPI_ShellNotifyIcon* pour la manipulation de la barre d'outils.
- **Gestion robuste des erreurs :** Assure la stabilité grâce à des vérifications complètes.
- **Expertise AutoIt :** Tire parti des structures DLL, des rappels et de l'automatisation de l'interface utilisateur.

### Pourquoi c'est important

Il plonge dans les mécanismes internes de Windows, mettant en valeur les compétences en matière de gestion des processus, d'interaction avec l'API et de gestion des événements, transférables à la programmation au niveau du système, à l'automatisation et à l'intégration d'applications, en mettant l'accent sur le développement technique plutôt que sur l'esthétique.
  `
      }
  }
};