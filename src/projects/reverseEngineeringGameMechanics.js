export default {
    title: "Reverse Engineering Game Mechanics",
    description: "Exploration of game mechanics through memory analysis using Cheat Engine.",
    tags: ["Cheat Engine", "Reverse Engineering", "Memory Manipulation", "Assembly"],
    highlights: [
      "Modification of player movement speed",
      "Adjustment of visual effects",
      "Unlimited stamina implementation",
      "Inventory slot manipulation"
    ],
    detailedDescription: `
  This project demonstrates reverse engineering skills by analyzing and modifying in-game mechanics using Cheat Engine, focusing on understanding game internals without source code access.
  
  ### Key Features
  - **Player Movement**: Altered 'LocomotionController' for speed adjustments.
  - **Visual Effects**: Modified 'PlatformLight' brightness.
  - **Stamina**: Set 'HasStamina' to enable unlimited stamina.
  - **Inventory**: Explored and modified item slots in memory.
  
  ### Approach
  Using Cheat Engine, I scanned memory to identify variables tied to game actions, applying changes via assembly code snippets to test hypotheses about game functionality.
  
  ### Skills
  - Memory analysis and manipulation.
  - Reverse engineering of compiled code.
  - Low-level debugging and assembly programming.
  
  This project reflects a methodical approach to dissecting software systems, valuable for debugging and optimization tasks.
    `
  };