export default {
  tags: ["Pine Script", "TradingView", "Time Management", "Visualization"], // Tags remain language-agnostic
  content: {
      en: {
          title: "TradingView Market Sessions",
          description: "A Pine Script tool for visualizing trading sessions on TradingView.",
          highlights: [
              "Customizable session boxes",
              "Opening range breakout signals",
              "Fibonacci level visualization",
              "User-defined time zones"
          ],
          detailedDescription: `
This Pine Script tool visualizes trading sessions (London, New York, Tokyo, Sydney) on TradingView with extensive customization, enhancing market activity analysis.

### Features
- **Session Boxes:** Draws customizable session ranges.
- **Opening Range:** Highlights breakouts with alerts.
- **Fibonacci Levels:** Auto-draws support/resistance zones.
- **Customization:** Adjusts times, colors, and historical display.

### Technical Highlights
- Uses draw_market(), draw_op(), and draw_fib() for rendering, with time() for zone handling and alertcondition() for notifications.

### Overall
A practical, flexible tool for traders, demonstrating time manipulation and visualization skills in Pine Script.
  `
      },
      fr: {
          title: "Sessions de Marché TradingView",
          description: "Un outil Pine Script pour visualiser les sessions de trading sur TradingView.",
          highlights: [
              "Boîtes de session personnalisables",
              "Signaux de cassure de la fourchette d'ouverture",
              "Visualisation des niveaux de Fibonacci",
              "Fuseaux horaires définis par l'utilisateur"
          ],
          detailedDescription: `
Cet outil Pine Script visualise les sessions de trading (Londres, New York, Tokyo, Sydney) sur TradingView avec une personnalisation étendue, améliorant l'analyse de l'activité du marché.

### Fonctionnalités
- **Boîtes de session :** Dessine des plages de session personnalisables.
- **Fourchette d'ouverture :** Met en évidence les cassures avec des alertes.
- **Niveaux de Fibonacci :** Dessine automatiquement les zones de support/résistance.
- **Personnalisation :** Ajuste les heures, les couleurs et l'affichage historique.

### Points forts techniques
- Utilise draw_market(), draw_op() et draw_fib() pour le rendu, avec time() pour la gestion des zones et alertcondition() pour les notifications.

### Globalement
Un outil pratique et flexible pour les traders, démontrant des compétences en manipulation du temps et en visualisation dans Pine Script.
  `
      }
  }
};