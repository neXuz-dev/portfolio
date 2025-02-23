export default {
    title: "Windows System Configuration Tool",
    description: "A utility for configuring and diagnosing Windows systems for Orchestra software.",
    tags: ["C#", ".NET", "Windows API", "System Administration"],
    highlights: [
      "Comprehensive system checks",
      "Performance optimization",
      "SQL Server configuration",
      "User-friendly diagnostics UI"
    ],
    detailedDescription: `
  This C# (.NET Framework) Windows Forms application automates and streamlines the configuration and diagnostic checks of a Windows system for the Orchestra POS software, performing a comprehensive suite of tasks to ensure optimal compatibility and performance.
  
  ### Key Features and Functionality
  
  - **Environment Checks:** Verifies TeamViewer, admin privileges, directory existence, network settings (IP, gateway, DNS), and network category.
  - **System Optimization:** Syncs system clock, initiates Windows Updates, adjusts performance settings, installs C++ Redistributables, enables .NET features, and manages power settings.
  - **Orchestra Configuration:** Ensures installation, version, license, and shortcut settings, plus Ghostscript verification.
  - **Security and Network:** Configures UAC, firewall ports (1433, 1434, 4900), TLS options, and checks antivirus.
  - **SQL Server:** Sets *Felix* service for auto-start and TCP port 1433.
  - **Printer and Device:** Lists printers and prepares *SyncOrch* components.
  - **UI:** Progress bar, rich text feedback, and success icons.
  
  ### Technical Strengths
  
  - **Automation:** Reduces manual steps, enhancing efficiency.
  - **Error Handling:** Uses *try-catch* for robustness.
  - **Registry Manipulation:** Manages UAC and power settings.
  - **Process Management:** Launches external tools and installers.
  - **Networking:** Handles IP, DNS, and firewall configurations.
  - **SQL Interaction:** Configures and queries SQL Server.
  
  ### Overall Impression
  
  Demonstrates deep Windows system administration knowledge, automation expertise, and practical tool development, tailored to a specific business domain (POS systems), with a user-friendly interface for technical and non-technical users.
    `
  };