export default {
    title: "Age of Empires Online AI Assistant",
    description: "A tool providing real-time alerts for resource management and villager activity in Age of Empires Online.",
    tags: ["AutoIt", "Memory Manipulation", "FastFind.dll", "System Interaction"],
    highlights: [
      "Custom memory interaction library (KDMemory.au3)",
      "Pixel detection for on-screen element monitoring",
      "Alerts for resource levels and villager status",
      "Event-driven system with hotkey support"
    ],
    detailedDescription: `
  This project showcases my proficiency in automation, memory manipulation, and external library integration, using AutoIt. Developed as a learning exercise, the "AOE AI Assistant" monitors several in-game elements for the real-time strategy game, Age of Empires Online. While inspired by a game, the project's primary value is in demonstrating core programming principles applicable to a wide range of applications.
  
  ### Functionality
  
  The script interacts directly with the game's running process. Key features include:
  
  - **Resource Monitoring:** Reads in-game resource values (Food, Wood, Gold, Stone) directly from the game's memory using FLOAT data types. This demonstrates an understanding of memory addresses and data types.
  - **Unit Selection:** Identifies the number of currently selected units through complex memory location reads.
  - **Villager Alerts:** Provides notifications about idle villagers and resource availability, using keyboard shortcuts and pixel detection for on-screen cues.
  - **Pause Toggle:** Implements a feature to pause and resume execution via hotkeys.
  
  ### Technical Highlights
  
  - **Memory Interaction (KDMemory.au3):** Leverages a custom library to open the game process, obtain module base addresses, and read values at specific offsets using pointers, illustrating powerful process data extraction techniques.
  - **External DLL Integration (FastFind.dll):** Integrates a third-party DLL for optimized pixel searching and color detection, extending functionality beyond AutoIt’s native capabilities, applicable to GUI automation and image processing.
  - **AutoIt3Wrapper Directives:** Includes directives for compiling scripts into standalone executables, setting metadata (version, copyright), and embedding resources (e.g., icons), reflecting best practices.
  - **Hotkeys and Event-Driven Programming:** Uses hotkeys for pause/resume, showcasing event-driven principles.
  - **INI Configuration:** Employs an INI file for settings, enhancing adaptability.
  
  ### Why this Approach?
  
  This project demonstrates low-level process interaction in a game context, but the techniques—memory reading, DLL integration, pixel detection—are broadly applicable. The choice of AutoIt highlights rapid prototyping skills, while external libraries show adaptability. The clean, well-commented, modular code emphasizes maintainability and software design principles, making it a strong example of technical capability.
    `
  };