export default {
    title: "LastWarBot Gameplay Analyzer",
    description: "Pixel analysis system for gameplay data exploration in LastWar.",
    tags: ["C#", "WPF", "P/Invoke", "Image Processing"],
    highlights: [
      "Custom pixel analysis with RzPixelAlgorithm.dll",
      "Real-time screen snapshot processing",
      "Asynchronous UI updates with Task.Run",
      "Global keyboard hook implementation"
    ],
    detailedDescription: `
  LastWarBot is a sophisticated Windows desktop application built using C# and WPF, demonstrating proficiency in creating robust, event-driven software capable of interacting with other applications at a low level. The core is a custom pixel analysis engine, showcasing expertise in image processing and real-time system interaction. The primary goal was gaining in-depth experience with complex technical challenges rather than gameplay automation itself.
  
  ### Key Technologies & Skills Demonstrated
  
  - **C# & .NET Framework:** Foundation for object-oriented and asynchronous programming with *Task* and *async/await*.
  - **WPF:** Modern, responsive UI with XAML-based design, data binding, and custom styling.
  - **P/Invoke:** Extensive use to bridge managed and unmanaged code (*RzPixelAlgorithm.dll*), handling *DllImport*, *StructLayout*, and data marshalling.
  - **Win32 API Interaction:** Direct calls to *user32.dll* and *kernel32.dll* for window manipulation, input handling, and keyboard hooks (*SetWindowsHookEx*).
  - **Image Processing:** *RzPixelAlgorithm.dll* offers efficient pixel data analysis (*FFNearestPixel*, *FFBestSpot*), beyond simple comparisons.
  - **Asynchronous Programming:** *Task.Run* and *CancellationToken* ensure a responsive UI during long operations.
  
  ### Project Breakdown
  
  1. **RzPixelAlgorithm.dll and RzPA:** Core engine for screen snapshotting, pixel searching, and change detection, wrapped in a C#-friendly interface.
  2. **MainWindow.xaml.cs:** Manages UI, process interaction (BlueStacks), and an asynchronous image matching loop with logging.
  3. **App.xaml.cs:** Handles application initialization and resource management.
  
  ### Functionality
  
  - Takes snapshots of the BlueStacks window.
  - Analyzes images for matches using RzPA.
  - Provides detailed logging and pause/resume via keyboard hooks.
  
  ### Why This Project Matters
  
  It demonstrates solving complex problems, integrating technologies, and building complete applications from scratch, with a focus on low-level techniques and custom algorithms, showcasing versatility and resourcefulness.
    `
  };