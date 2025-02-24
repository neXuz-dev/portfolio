export default {
  tags: ["Pine Script", "TradingView", "Technical Analysis", "Strategy Development"], // Tags remain language-agnostic
  content: {
    en: {
      title: "Advanced Trading Strategy",
      description: "A Pine Script trading strategy with customizable trend analysis.",
      highlights: [
        "Multiple moving average options",
        "ATR-based sensitivity adjustment",
        "Multi-timeframe analysis",
        "Stop-loss and take-profit features",
      ],
      detailedDescription: `
This Pine Script project implements a sophisticated, adaptable trading strategy on TradingView, using moving averages and ATR for trend analysis and risk management.

### Features
- **Customizable MAs:** Supports SMA, EMA, DEMA, etc., for trend detection.
- **ATR Sensitivity:** Adjusts entry/exit based on volatility.
- **MTF Analysis:** Incorporates higher timeframe trends.
- **Risk Management:** Includes stop-loss, take-profit, and trailing stops.
- **Visualization:** Features a screener with sortable labels.

### Technical Details
- Uses security() to prevent repainting, with custom functions for logic and alertcondition() for notifications.

### Why Matters
Demonstrates deep financial market understanding and coding skill, creating a robust, professional-grade trading tool with practical application.
      `,
    },
    fr: {
      title: "Stratégie de Trading Avancée",
      description: "Une stratégie de trading en Pine Script avec une analyse de tendance personnalisable.",
      highlights: [
        "Options multiples de moyennes mobiles",
        "Ajustement de sensibilité basé sur l'ATR",
        "Analyse multi-échelles temporelles",
        "Fonctionnalités de stop-loss et take-profit",
      ],
      detailedDescription: `
Ce projet en Pine Script implémente une stratégie de trading sophistiquée et adaptable sur TradingView, utilisant des moyennes mobiles et l'ATR pour l'analyse des tendances et la gestion des risques.

### Fonctionnalités
- **MAs Personnalisables :** Prend en charge SMA, EMA, DEMA, etc., pour la détection des tendances.
- **Sensibilité ATR :** Ajuste les entrées/sorties en fonction de la volatilité.
- **Analyse MTF :** Intègre les tendances des échelles temporelles supérieures.
- **Gestion des Risques :** Inclut stop-loss, take-profit et stops suiveurs.
- **Visualisation :** Dispose d'un screener avec des étiquettes triables.

### Détails Techniques
- Utilise security() pour éviter le repaint, avec des fonctions personnalisées pour la logique et alertcondition() pour les notifications.

### Importance
Démontre une compréhension approfondie des marchés financiers et des compétences en programmation, créant un outil de trading robuste et professionnel avec une application pratique.
      `,
    },
  },
};