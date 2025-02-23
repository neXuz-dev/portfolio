export default {
    title: "Rocket League Memory Analyzer",
    description: "C++ tool for analyzing Unreal Engine memory structures in Rocket League.",
    tags: ["C++", "Windows API", "Reverse Engineering", "Memory Analysis"],
    highlights: [
      "Pattern scanning for memory locations",
      "GNames and GObjects address resolution",
      "Robust process module enumeration",
      "Detailed error handling"
    ],
    detailedDescription: `
  This project demonstrates a strong understanding of reverse engineering principles, memory analysis, and low-level system programming in C++. The core objective was to explore the internal workings of Rocket League by interacting directly with its memory space to locate Unreal Engine structures (GNames, GObjects), focusing on learning rather than modification.
  
  ### What it Does
  
  The *main.cpp* application identifies memory addresses for *GNames* and *GObjects*, fundamental Unreal Engine data structures, enabling potential inspection of game objects and properties.
  
  ### Why and How
  
  - **Motivation:** A deep dive into low-level system interactions and complex application internals.
  - **Technique:** Uses pattern scanning (signature scanning) to find unique byte sequences within *RocketLeague.exe*, avoiding hardcoded addresses that change with updates.
  - **find_pattern_in_module():** Enumerates modules with *CreateToolhelp32Snapshot*, isolates *RocketLeague.exe*, and searches for patterns, leveraging *parsePattern* for efficient byte matching.
  - **get_gname_address() and get_gobjects_address():** Encapsulate pattern searches with specific byte patterns, including detailed offset calculations.
  - **Robust Error Handling:** Checks for invalid handles and failed searches with informative messages.
  
  ### Key Skills Demonstrated
  
  - **C++ Proficiency:** Uses standard features (strings, vectors) and pointer management.
  - **Reverse Engineering:** Applies pattern scanning and memory analysis techniques.
  - **Windows API:** Effective module enumeration and process interaction.
  - **Analytical Skills:** Implied ability to analyze disassembled code for pattern derivation.
  
  This project provides evidence of initiative and a technical foundation in systems programming, serving as a starting point for deeper memory-based projects in game development or security research.
    `
  };