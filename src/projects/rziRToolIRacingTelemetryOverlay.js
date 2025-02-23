export default {
    title: "RziRTool - iRacing Telemetry Overlay",
    description: "A real-time telemetry visualization tool for iRacing using advanced graphics rendering.",
    tags: ["C#", "ImGui.NET", "Veldrid", "MVVM", "Async Programming"],
    highlights: [
      "Customizable real-time displays",
      "Advanced DirectX rendering",
      "MVVM architecture",
      "Hotkey-toggleable overlay"
    ],
    detailedDescription: `
  RziRTool is a sophisticated, real-time telemetry overlay application for iRacing, built with C#, .NET, ImGui.NET, and Veldrid. It extracts, processes, and visualizes live telemetry data, providing drivers with crucial insights during gameplay, demonstrating advanced asynchronous programming, UI/UX design, and iRacing SDK integration.
  
  ### Key Features & Capabilities
  
  - **Real-time Visualization:** Includes RPM bar with shift indicators, tire temperature readouts, input trace graphs, ABS status, and car info, all customizable.
  - **Configurability:** Modular window design with toggleable elements, persistent JSON settings, and in-app adjustments (e.g., shift RPMs).
  - **Technical Design:** Uses MVVM architecture, *async*/*await* for responsiveness, and layered window rendering with offscreen texture updates via GDI+.
  - **Robustness:** Auto-connects to iRacing, handles disconnections, and logs errors with *Microsoft.Extensions.Logging*.
  
  ### Code Structure Highlights
  
  - **Program.cs:** Manages main loop, ImGui initialization, and rendering with helper functions (*DrawRpmBar*, *DrawTireWithTemps*).
  - **TelemetryViewModel.cs:** Processes telemetry data, exposes it via *INotifyPropertyChanged*, and handles settings.
  - **ImGuiController.cs:** Wraps ImGui.NET for rendering and input processing.
  
  ### Overall Impression
  
  A feature-rich project with maintainable, extensible code, showcasing high technical proficiency in graphics, real-time data, and UI design, delivering a polished user experience for iRacing analysis.
    `
  };