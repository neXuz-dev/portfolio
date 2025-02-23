export default {
    title: "TradingView Market Sessions",
    description: "A Pine Script tool for visualizing trading sessions on TradingView.",
    tags: ["Pine Script", "TradingView", "Time Management", "Visualization"],
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
  };