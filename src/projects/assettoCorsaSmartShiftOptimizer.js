export default {
    title: "Assetto Corsa Smart Shift Optimizer",
    description: "A tool for analyzing and optimizing gear shifting patterns in Assetto Corsa, built to study real-time data processing.",
    tags: ["C#", ".NET", "Windows API", "Memory Manipulation"],
    highlights: [
      "Dynamic memory address resolution for data analysis",
      "Real-time extraction of RPM and gear data",
      "Simulation of optimal shift points for learning purposes",
      "Configurable settings via external INI files"
    ],
    detailedDescription: `
  This project showcases my ability to interact with external processes, perform memory reading/writing, and implement a complex algorithm in C#. The Smart Shift Optimizer for Assetto Corsa dynamically analyzes gear shifting points based on live game data, serving as a platform to master advanced memory manipulation and process interaction techniques in a real-time racing simulator context.
  
  ### Key Technologies & Concepts
  
  - **C# and .NET Framework:** Chosen for robust performance and system API access.
  - **Windows API (Kernel32):** Uses *OpenProcess*, *ReadProcessMemory*, *WriteProcessMemory*, *CreateToolhelp32Snapshot*, *Module32First*, and *Module32Next* for direct memory access and process introspection.
  - **Memory Manipulation:** Locates and interprets specific memory addresses using pointer arithmetic and dynamic memory allocation (DMA).
  - **External Process Control:** Employs *InputSimulatorStandard* for virtual keypress simulation.
  
  ### Functionality
  
  1. **Process Identification & Connection:** Automatically identifies and connects to the Assetto Corsa process.
  2. **Dynamic Address Calculation:** Calculates memory addresses for RPM and gear data using base addresses and offsets.
  3. **Real-time Data Acquisition:** Continuously monitors current RPM and gear values.
  4. **Shift Point Analysis:** Determines optimal shift moments based on pre-calculated points or generic formulas, extracted from game data files.
  5. **Gear Shift Simulation:** Sends shift commands for study purposes.
  6. **Data Persistence:** Persists optimal shift points for each car via file I/O.
  7. **Parameter Optimization:** Analyzes additional parameters like fuel and tire temperatures.
  
  ### Why This Project Matters
  
  It highlights deep skills in:
  - Reverse-engineering complex applications.
  - Working with unmanaged code and Windows API.
  - Solving real-time data challenges.
  - Creating practical, performant tools.
  
  The focus was on mastering these techniques, using the game as a challenging platform to demonstrate technical prowess, with applications in system optimization and real-time data analysis.
    `
  };