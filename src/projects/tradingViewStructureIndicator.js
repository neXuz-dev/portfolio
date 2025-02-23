export default {
    title: "TradingView Structure Indicator",
    description: "A Pine Script tool for analyzing market structures on TradingView.",
    tags: ["Pine Script", "TradingView", "Technical Analysis", "Data Visualization"],
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
  };