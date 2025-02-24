export default {
  tags: ["C#", "ImGui.NET", "Veldrid", "MVVM", "Async Programming"], // Tags remain language-agnostic
  content: {
      en: {
          title: "RziRTool - iRacing Telemetry Overlay",
          description: "A real-time telemetry visualization tool for iRacing using advanced graphics rendering.",
          highlights: [
              "Customizable real-time displays",
              "Advanced DirectX rendering",
              "MVVM architecture",
              "Hotkey-toggleable overlay"
          ],
          detailedDescription: `
RziRTool is a sophisticated, real-time telemetry overlay application for iRacing, built with C#, .NET, ImGui.NET, and Veldrid. It extracts, processes, and visualizes live telemetry data, providing drivers with crucial insights during gameplay, demonstrating advanced asynchronous programming, UI/UX design, and iRacing SDK integration.

### Key Features & Capabilities

- **Real-time Visualization:** Includes RPM bar with shift indicators, tire temperature readouts, input trace graphs, ABS status, and car info, all customizable.
- **Configurability:** Modular window design with toggleable elements, persistent JSON settings, and in-app adjustments (e.g., shift RPMs).
- **Technical Design:** Uses MVVM architecture, *async*/*await* for responsiveness, and layered window rendering with offscreen texture updates via GDI+.
- **Robustness:** Auto-connects to iRacing, handles disconnections, and logs errors with *Microsoft.Extensions.Logging*.

### Code Structure Highlights

- **Program.cs:** Manages main loop, ImGui initialization, and rendering with helper functions (*DrawRpmBar*, *DrawTireWithTemps*).
- **TelemetryViewModel.cs:** Processes telemetry data, exposes it via *INotifyPropertyChanged*, and handles settings.
- **ImGuiController.cs:** Wraps ImGui.NET for rendering and input processing.

### Overall Impression

A feature-rich project with maintainable, extensible code, showcasing high technical proficiency in graphics, real-time data, and UI design, delivering a polished user experience for iRacing analysis.
  `
      },
      fr: {
          title: "RziRTool - Overlay de Télémétrie iRacing",
          description: "Un outil de visualisation de télémétrie en temps réel pour iRacing utilisant un rendu graphique avancé.",
          highlights: [
              "Affichages personnalisables en temps réel",
              "Rendu DirectX avancé",
              "Architecture MVVM",
              "Overlay activable/désactivable par raccourci clavier"
          ],
          detailedDescription: `
RziRTool est une application d'overlay de télémétrie sophistiquée et en temps réel pour iRacing, construite avec C#, .NET, ImGui.NET et Veldrid. Elle extrait, traite et visualise les données de télémétrie en direct, fournissant aux pilotes des informations cruciales pendant le jeu, démontrant une programmation asynchrone avancée, une conception UI/UX et une intégration du SDK iRacing.

### Principales caractéristiques et capacités

- **Visualisation en temps réel :** Comprend une barre de RPM avec des indicateurs de changement de vitesse, des lectures de température des pneus, des graphiques de trace d'entrée, l'état de l'ABS et des informations sur la voiture, tous personnalisables.
- **Configurabilité :** Conception de fenêtre modulaire avec des éléments activables/désactivables, des paramètres JSON persistants et des ajustements dans l'application (par exemple, les RPM de changement de vitesse).
- **Conception technique :** Utilise l'architecture MVVM, *async*/*await* pour la réactivité et le rendu de fenêtre en couches avec des mises à jour de texture hors écran via GDI+.
- **Robustesse :** Se connecte automatiquement à iRacing, gère les déconnexions et consigne les erreurs avec *Microsoft.Extensions.Logging*.

### Points forts de la structure du code

- **Program.cs :** Gère la boucle principale, l'initialisation d'ImGui et le rendu avec des fonctions d'assistance (*DrawRpmBar*, *DrawTireWithTemps*).
- **TelemetryViewModel.cs :** Traite les données de télémétrie, les expose via *INotifyPropertyChanged* et gère les paramètres.
- **ImGuiController.cs :** Encapsule ImGui.NET pour le rendu et le traitement des entrées.

### Impression générale

Un projet riche en fonctionnalités avec un code maintenable et extensible, mettant en valeur une grande compétence technique en matière de graphisme, de données en temps réel et de conception d'interface utilisateur, offrant une expérience utilisateur soignée pour l'analyse iRacing.
  `
      }
  }
};