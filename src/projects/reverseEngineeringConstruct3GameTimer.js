export default {
    title: "Reverse Engineering Construct 3 Game Timer",
    description: "Modified the countdown timer of a Construct 3 web game using browser tools.",
    tags: ["JavaScript", "Reverse Engineering", "Chrome DevTools", "Web Development"],
    highlights: [
      "Analysis of minified code",
      "Runtime manipulation via DevTools",
      "Asynchronous timing adjustments",
      "Function hooking"
    ],
    detailedDescription: `
  This project involved reverse engineering a Construct 3 game's timer in 'Labyrinthe de l'Explorateur' using Chrome DevTools, without source code access.
  
  ### Approach
  - Analyzed minified JavaScript in c3runtime.js.
  - Identified _OnRAFCallback to hook runtime updates.
  - Overrode function to set defaultTotalTime to 9999, freezing the timer.
  
  ### Skills
  - JavaScript runtime manipulation.
  - Reverse engineering obfuscated code.
  - Debugging with browser tools.
  - Understanding game engine internals.
  
  Demonstrates problem-solving and adaptability in web-based systems.
    `
  };