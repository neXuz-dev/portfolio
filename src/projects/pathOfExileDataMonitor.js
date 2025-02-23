export default {
    title: "Path of Exile Data Monitor",
    description: "A utility for monitoring in-game data in Path of Exile to study memory structures.",
    tags: ["C#", "Windows API", "Input Simulation", "Memory Analysis"],
    highlights: [
      "Dynamic memory address tracking",
      "Real-time health value monitoring",
      "Experimental input simulation",
      "TCP connection analysis"
    ],
    detailedDescription: `
  This project demonstrates proficiency in C# and Windows Forms development, focusing on process interaction and data analysis within Path of Exile. The POE Tool v2 monitors game data to study memory structures and system behavior, emphasizing technical exploration over automation.
  
  ### Key Features and Technologies
  
  - **Windows Forms UI:** Features a simple UI with a *CheckedListBox* for configuration profiles (e.g., Cyclone Slayer) and a *Debug* textbox for real-time feedback.
  - **Process Interaction (ghapi.cs):** Custom API wrapper using *kernel32.dll* for process opening, memory reading/writing, module enumeration, and dynamic address resolution with *FindDMAAddy*—reusable and robust.
  - **Game Data Logic (Program.cs):** Identifies the game process, monitors health via a continuous loop, triggers experimental actions based on conditions, and uses *InputSimulatorStandard* for input simulation with *Stopwatch* timers for cooldowns.
  
  ### Overall Impression
  
  This project showcases low-level system programming, memory management, and event-driven design. The use of a separate *ghapi.cs* wrapper promotes modularity, while continuous monitoring and conditional logic reflect careful design. It highlights practical C# skills applicable to various software development roles, focusing on technical insight rather than gameplay modification.
    `
  };