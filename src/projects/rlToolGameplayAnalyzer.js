export default {
    title: "RLTool Gameplay Analyzer",
    description: "A C# tool for studying Rocket League gameplay data through memory analysis.",
    tags: ["C#", "Windows API", "Memory Manipulation", "Input Simulation"],
    highlights: [
      "Real-time roll value monitoring",
      "Dynamic memory address resolution",
      "Input simulation for study",
      "Modular design with ghapi.cs"
    ],
    detailedDescription: `
  RLTool is a C# application designed to interact with Rocket League, demonstrating a strong understanding of low-level system programming, memory manipulation, and real-time process interaction, motivated by a desire to learn these concepts.
  
  ### Key Features and Technical Highlights
  
  - **Process Interaction:** Reliably locates and interacts with *RocketLeague.exe* using *kernel32.dll* functions (*OpenProcess*, *ReadProcessMemory*).
  - **Memory Reading:** Reads the player’s roll value from memory using pointer arithmetic and dynamic address resolution with *FindDMAAddy*, showcasing memory structure mastery.
  - **Input Simulation:** Simulates keyboard and mouse inputs based on roll values and user triggers (\\ key) via *InputSimulatorStandard*, useful for technical study.
  - **Real-time Response:** Runs in a continuous *while(true)* loop with *Thread.Sleep()* for performance, monitoring and reacting dynamically.
  - **Modular Design:** Separates core functionality into *ghapi.cs* for reusability and maintainability.
  
  ### Capabilities Demonstrated
  
  - Direct interaction with Windows OS at a low level.
  - Understanding and manipulating memory structures.
  - Creating responsive, event-driven applications.
  - Designing modular, maintainable code.
  
  While focused on Rocket League, the principles are broadly applicable to system utilities, game development tools, and real-time data processing, reflecting a developer capable of tackling complex challenges.
    `
  };