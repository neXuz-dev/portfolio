export default {
    title: "RzOverlay Game Data Visualizer",
    description: "A C++ overlay for visualizing game data in Halo: MCC.",
    tags: ["C++", "DirectX", "Windows API", "Reverse Engineering"],
    highlights: [
      "DirectX 9 rendering",
      "Transparent layered overlay",
      "Memory data extraction",
      "Entity structure modeling"
    ],
    detailedDescription: `
  RzOverlay is a C++ project demonstrating proficiency in DirectX rendering, Windows API interaction, and reverse engineering concepts. It creates a transparent, layered overlay window rendering on top of Halo: The Master Chief Collection, driven by a desire to deepen knowledge of OS and graphical API interactions.
  
  ### Key Technologies & Concepts
  
  - **DirectX (D3D9):** Initializes Direct3D devices, manages scenes, and renders with *ID3DXFont*.
  - **Windows API:** Uses *FindWindowA*, *GetWindowRect*, *CreateWindowExW*, and *SetLayeredWindowAttributes* for overlay management.
  - **Reverse Engineering:** Extracts *Entity* data from memory (*Entity.h*, *loadEntities()*), modeling game structures with padding awareness.
  - **C++ Fundamentals:** Structured with classes (*Paint*, *Entity*) and standard libraries.
  
  ### Code Structure and Functionality
  
  - **Paint Class:** Encapsulates DirectX rendering logic.
  - **Entity Class:** Models extracted game data.
  - **RzOverlay.cpp:** Manages window creation, message loop, and overlay logic.
  
  ### Learning Outcomes
  
  - Mastered DirectX rendering and overlay creation.
  - Gained deep Windows API interaction experience.
  - Explored memory analysis basics.
  
  Highly transferable skills to game tools, graphics, and system utilities, focusing on core technical competencies.
    `
  };