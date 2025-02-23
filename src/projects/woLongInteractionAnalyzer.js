export default {
    title: "Wo Long Interaction Analyzer",
    description: "A tool for studying game interactions in Wo Long: Fallen Dynasty via memory analysis.",
    tags: ["C#", "Windows API", "Memory Manipulation", "Reverse Engineering"],
    highlights: [
      "Dynamic memory address resolution",
      "Real-time state detection",
      "Input simulation for analysis",
      "External library integration"
    ],
    detailedDescription: `
  This project showcases proficiency in reverse engineering and low-level system interaction using C#. Designed to study interactions in Wo Long: Fallen Dynasty, it focuses on understanding memory manipulation and process interaction rather than gameplay modification.
  
  ### Functionality
  
  - Identifies the game process with *Process.GetProcessesByName*.
  - Accesses memory via *kernel32.dll* (*OpenProcess*, *ReadProcessMemory*) to detect enemy attack states.
  - Simulates inputs (F key) using *InputSimulatorStandard* to analyze parry timing.
  - Uses static addresses for demonstration, with capability for dynamic resolution via *FindDMAAddy*.
  
  ### Key Technologies and Concepts
  
  - **C# and .NET:** Robust foundation for development.
  - **Windows API:** Direct process and memory interaction.
  - **Memory Management:** Reads and interprets game state data.
  - **Reverse Engineering:** Implies understanding of memory address identification.
  - **Multithreading:** *Thread.Sleep* manages timing.
  - **External Libraries:** Integrates nuget packages for enhanced functionality.
  
  ### Why this Project Matters
  
  It demonstrates going beyond surface-level development, tackling complex systems with fundamental memory and process management skills. Applicable to system utilities, debugging tools, and performance optimization, it reflects efficient teamwork potential with clear, documented code.
    `
  };