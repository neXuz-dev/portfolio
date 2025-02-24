export default {
  tags: ["Pine Script", "TradingView", "Technical Analysis", "Data Visualization"], // Tags remain language-agnostic
  content: {
      en: {
          title: "TradingView Structure Indicator",
          description: "A Pine Script tool for analyzing market structures on TradingView.",
          highlights: [
              "Automated BOS and OB detection",
              "Zigzag visualization for trends",
              "Configurable Fibonacci factors",
              "Alert system integration"
          ],
          detailedDescription: `
This Pine Script project creates a 'Structures - BOS & OB Rz' indicator for TradingView, automatically identifying market structure elements like Break of Structure (BOS) and Order Blocks (OB), valuable for price action traders.

### Features
- **Automated Detection:** Marks bullish/bearish BOS and OB with visual cues.
- **Zigzag:** Filters noise for trend clarity.
- **Configurability:** Adjusts zigzag length, Fibonacci factors, and colors.
- **Alerts:** Notifies on BOS events.

### Technical Details
- Uses ta.highest/lowest for swings, arrays for data, and box.new/label.new for visuals.

### Value
Automates chart analysis, enhancing decision-making with a modular, user-friendly design, reflecting financial analysis expertise.
  `
      },
      fr: {
          title: "Indicateur de Structure TradingView",
          description: "Un outil Pine Script pour analyser les structures de marché sur TradingView.",
          highlights: [
              "Détection automatisée des BOS et OB",
              "Visualisation en zigzag pour les tendances",
              "Facteurs de Fibonacci configurables",
              "Intégration du système d'alerte"
          ],
          detailedDescription: `
Ce projet Pine Script crée un indicateur 'Structures - BOS & OB Rz' pour TradingView, identifiant automatiquement les éléments de structure du marché comme les ruptures de structure (BOS) et les blocs d'ordres (OB), précieux pour les traders d'action de prix.

### Fonctionnalités
- **Détection automatisée :** Marque les BOS et OB haussiers/baissiers avec des indices visuels.
- **Zigzag :** Filtre le bruit pour la clarté de la tendance.
- **Configurabilité :** Ajuste la longueur du zigzag, les facteurs de Fibonacci et les couleurs.
- **Alertes :** Notifie les événements BOS.

### Détails Techniques
- Utilise ta.highest/lowest pour les oscillations, les tableaux pour les données, et box.new/label.new pour les visuels.

### Valeur
Automatise l'analyse des graphiques, améliorant la prise de décision avec une conception modulaire et conviviale, reflétant l'expertise en analyse financière.
  `
      }
  }
};