"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Download } from 'lucide-react';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null); // For highlights
  const [expandedDetails, setExpandedDetails] = useState(null); // For full details

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
    if (expandedDetails === index) setExpandedDetails(null); // Collapse full details if closing highlights
  };

  const toggleDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  const projects = [
    {
      title: "Age of Empires Online AI Assistant",
      description: "A tool providing real-time alerts for resource management and villager activity in Age of Empires Online.",
      tags: ["AutoIt", "Memory Manipulation", "FastFind.dll", "System Interaction"],
      highlights: [
        "Custom memory interaction library (KDMemory.au3)",
        "Pixel detection for on-screen element monitoring",
        "Alerts for resource levels and villager status",
        "Event-driven system with hotkey support"
      ],
      detailedDescription: `This project showcases my proficiency in automation, memory manipulation, and external library integration, using AutoIt. Developed as a learning exercise, the "AOE AI Assistant" monitors several in-game elements for the real-time strategy game, Age of Empires Online. While inspired by a game, the project's primary value is in demonstrating core programming principles applicable to a wide range of applications.

**Functionality:**

The script interacts directly with the game's running process. Key features include:
- **Resource Monitoring:** Reads in-game resource values (Food, Wood, Gold, Stone) directly from the game's memory using FLOAT data types. This demonstrates an understanding of memory addresses and data types.
- **Unit Selection:** Identifies the number of currently selected units through complex memory location reads.
- **Villager Alerts:** Provides notifications about idle villagers and resource availability, using keyboard shortcuts and pixel detection for on-screen cues.
- **Pause Toggle:** Implements a feature to pause and resume execution via hotkeys.

**Technical Highlights:**
- **Memory Interaction (KDMemory.au3):** Leverages a custom library to open the game process, obtain module base addresses, and read values at specific offsets using pointers, illustrating powerful process data extraction techniques.
- **External DLL Integration (FastFind.dll):** Integrates a third-party DLL for optimized pixel searching and color detection, extending functionality beyond AutoIt’s native capabilities, applicable to GUI automation and image processing.
- **AutoIt3Wrapper Directives:** Includes directives for compiling scripts into standalone executables, setting metadata (version, copyright), and embedding resources (e.g., icons), reflecting best practices.
- **Hotkeys and Event-Driven Programming:** Uses hotkeys for pause/resume, showcasing event-driven principles.
- **INI Configuration:** Employs an INI file for settings, enhancing adaptability.

**Why this Approach?**

This project demonstrates low-level process interaction in a game context, but the techniques—memory reading, DLL integration, pixel detection—are broadly applicable. The choice of AutoIt highlights rapid prototyping skills, while external libraries show adaptability. The clean, well-commented, modular code emphasizes maintainability and software design principles, making it a strong example of technical capability.`
    },
    {
      title: "Aimlab Performance Analyzer",
      description: "Tool for studying aim training performance with pixel detection in Aimlab.",
      tags: ["AutoIt", "Pixel Detection", "FastFind.dll", "Performance Optimization"],
      highlights: [
        "High-speed screen capture with FastFind64.dll",
        "Precise pixel color detection for targeting",
        "Low-level mouse control via user32.dll",
        "Dynamic configuration through INI files"
      ],
      detailedDescription: `This project showcases my proficiency in automation and low-level system interaction, demonstrating an ability to create efficient and precise software tools. It was primarily a learning exercise to explore advanced techniques in image recognition and process control within the Aimlab aim training software, with core technologies applicable beyond gaming.

**What it Does:**

The "Pix_FF.au3" script analyzes performance in Aimlab by:
1. **Rapid Screen Capture and Analysis:** Leveraging FastFind64.dll for extremely fast screen captures of defined regions, significantly outperforming standard methods in speed and resource efficiency, highlighting performance optimization skills.
2. **Pixel-Perfect Color Detection:** Identifying specific target colors (e.g., center dot) with tolerance for shade variations, showing advanced visual data handling relevant to real-world applications.
3. **Precise Mouse Control:** Simulating mouse movements and clicks using low-level mouse_event calls (user32.dll) for maximum speed and accuracy, bypassing slower alternatives.
4. **Dynamic Configuration:** Managing settings like target colors and regions via config.ini, separating configuration from logic for adaptability.
5. **Debug UI:** Featuring a simple GUI for control and real-time debugging information.

**Why it’s Valuable (Beyond Gaming):**

The principles demonstrated are transferable to:
- **Robotic Process Automation (RPA):** Visual cue-based interaction with legacy systems or applications without APIs.
- **Quality Assurance/Testing:** Automated UI verification for rendering accuracy.
- **Image Processing:** Basic techniques like snapshotting and color filtering.
- **Accessibility Software:** Precise control and visual analysis for assistive tools.

**How it’s Built:**
- **Language:** AutoIt with a custom C/C++ DLL (FastFind64.dll) for performance-critical tasks, chosen for ease of Windows API interaction and rapid prototyping.
- **Key Libraries/APIs:** FastFind64.dll for core efficiency, user32.dll for low-level control, AutoIt functions for INI handling and GUI creation.

**Key Takeaways:**
- **Performance Focus:** Prioritizing efficiency with custom DLLs and low-level calls.
- **System-Level Understanding:** Comfort with Windows API and system operations.
- **Problem-Solving:** Breaking down complex visual tasks into components.
- **Adaptability:** Configurable design for maintainability.

This project exemplifies my ability to combine automation with system-level programming, offering insights into versatile software development challenges.`
    },
    {
      title: "Assetto Corsa Smart Shift Optimizer",
      description: "A tool for analyzing and optimizing gear shifting patterns in Assetto Corsa, built to study real-time data processing.",
      tags: ["C#", ".NET", "Windows API", "Memory Manipulation"],
      highlights: [
        "Dynamic memory address resolution for data analysis",
        "Real-time extraction of RPM and gear data",
        "Simulation of optimal shift points for learning purposes",
        "Configurable settings via external INI files"
      ],
      detailedDescription: `This project showcases my ability to interact with external processes, perform memory reading/writing, and implement a complex algorithm in C#. The Smart Shift Optimizer for Assetto Corsa dynamically analyzes gear shifting points based on live game data, serving as a platform to master advanced memory manipulation and process interaction techniques in a real-time racing simulator context.

**Key Technologies & Concepts:**
- **C# and .NET Framework:** Chosen for robust performance and system API access.
- **Windows API (Kernel32):** Uses OpenProcess, ReadProcessMemory, WriteProcessMemory, CreateToolhelp32Snapshot, Module32First, and Module32Next for direct memory access and process introspection.
- **Memory Manipulation:** Locates and interprets specific memory addresses using pointer arithmetic and dynamic memory allocation (DMA).
- **External Process Control:** Employs InputSimulatorStandard for virtual keypress simulation.

**Functionality:**
1. **Process Identification & Connection:** Automatically identifies and connects to the Assetto Corsa process.
2. **Dynamic Address Calculation:** Calculates memory addresses for RPM and gear data using base addresses and offsets.
3. **Real-time Data Acquisition:** Continuously monitors current RPM and gear values.
4. **Shift Point Analysis:** Determines optimal shift moments based on pre-calculated points or generic formulas, extracted from game data files.
5. **Gear Shift Simulation:** Sends shift commands for study purposes.
6. **Data Persistence:** Persists optimal shift points for each car via file I/O.
7. **Parameter Optimization:** Analyzes additional parameters like fuel and tire temperatures.

**Why This Project Matters:**
It highlights deep skills in:
- Reverse-engineering complex applications.
- Working with unmanaged code and Windows API.
- Solving real-time data challenges.
- Creating practical, performant tools.

The focus was on mastering these techniques, using the game as a challenging platform to demonstrate technical prowess, with applications in system optimization and real-time data analysis.`
    },
    {
      title: "Screen Monitoring and Image Recognition Counter",
      description: "A C# tool for real-time screen monitoring and image detection.",
      tags: ["C#", "Emgu CV", "Image Processing", "File I/O"],
      highlights: [
        "Efficient screen capture implementation",
        "Template matching with Emgu CV",
        "Delayed counter logic for stability",
        "Robust file handling for persistence"
      ],
      detailedDescription: `This C# project demonstrates proficiency in image processing and real-time screen monitoring. It captures the screen, searches for a predefined image within the screenshot using Emgu CV (a .NET wrapper for OpenCV), and increments a counter stored in a text file if the image is not detected for a specified duration (five seconds). The project was undertaken to gain practical experience with computer vision concepts, specifically template matching, and showcases a clear understanding of file I/O operations for data persistence.

**How it Works:**
1. **Initialization:** Loads a template image (image.png) and initializes a counter file (counter.txt) with robust error handling for missing files.
2. **Screen Capture:** Uses CaptureScreen() with .NET graphics libraries for efficient primary display snapshots.
3. **Image Matching:** Employs Emgu CV’s MatchTemplate with CcoeffNormed for robust template matching, effective even with lighting variations, using a 0.3 threshold.
4. **Counter Logic:** Implements a while(true) loop with delayed counter increments to prevent rapid changes from minor screen flickers, showing careful timing consideration.
5. **File Handling:** Manages counter.txt with graceful creation and updates for new or missing files.
6. **Resource Management:** Disposes of screenshots promptly and uses Thread.Sleep() to minimize CPU usage, reflecting efficiency.

**Why it was Built:**
The project serves as an effective showcase of implementing real-time image analysis, offering practical insights into computer vision applications like automated testing or monitoring systems, with a focus on resource efficiency and stability.`
    },
    {
      title: "LastWarBot Gameplay Analyzer",
      description: "Pixel analysis system for gameplay data exploration in LastWar.",
      tags: ["C#", "WPF", "P/Invoke", "Image Processing"],
      highlights: [
        "Custom pixel analysis with RzPixelAlgorithm.dll",
        "Real-time screen snapshot processing",
        "Asynchronous UI updates with Task.Run",
        "Global keyboard hook implementation"
      ],
      detailedDescription: `LastWarBot is a sophisticated Windows desktop application built using C# and WPF, demonstrating proficiency in creating robust, event-driven software capable of interacting with other applications at a low level. The core is a custom pixel analysis engine, showcasing expertise in image processing and real-time system interaction. The primary goal was gaining in-depth experience with complex technical challenges rather than gameplay automation itself.

**Key Technologies & Skills Demonstrated:**
- **C# & .NET Framework:** Foundation for object-oriented and asynchronous programming with Task and async/await.
- **WPF:** Modern, responsive UI with XAML-based design, data binding, and custom styling.
- **P/Invoke:** Extensive use to bridge managed and unmanaged code (RzPixelAlgorithm.dll), handling DllImport, StructLayout, and data marshalling.
- **Win32 API Interaction:** Direct calls to user32.dll and kernel32.dll for window manipulation, input handling, and keyboard hooks (SetWindowsHookEx).
- **Image Processing:** RzPixelAlgorithm.dll offers efficient pixel data analysis (FFNearestPixel, FFBestSpot), beyond simple comparisons.
- **Asynchronous Programming:** Task.Run and CancellationToken ensure a responsive UI during long operations.

**Project Breakdown:**
1. **RzPixelAlgorithm.dll and RzPA:** Core engine for screen snapshotting, pixel searching, and change detection, wrapped in a C#-friendly interface.
2. **MainWindow.xaml.cs:** Manages UI, process interaction (BlueStacks), and an asynchronous image matching loop with logging.
3. **App.xaml.cs:** Handles application initialization and resource management.

**Functionality:**
- Takes snapshots of the BlueStacks window.
- Analyzes images for matches using RzPA.
- Provides detailed logging and pause/resume via keyboard hooks.

**Why This Project Matters:**
It demonstrates solving complex problems, integrating technologies, and building complete applications from scratch, with a focus on low-level techniques and custom algorithms, showcasing versatility and resourcefulness.`
    },
    {
      title: "NanoTrigger Input Analyzer",
      description: "A C++ tool for low-level input analysis using the Windows Raw Input API.",
      tags: ["C++", "Windows API", "Raw Input", "Device Handling"],
      highlights: [
        "Raw Input API integration",
        "Device enumeration and identification",
        "Gamepad data parsing (DualShock 4)",
        "Message-only window implementation"
      ],
      detailedDescription: `NanoTrigger is a robust C++ application demonstrating advanced input handling using the Windows Raw Input API. This project showcases a deep understanding of low-level system programming, interfacing directly with hardware beyond standard libraries, focusing on meticulous capture and analysis of raw input data from devices like keyboards, mice, and the PlayStation 4 DualShock 4 controller.

**Motivation and Purpose:**
The goal was to gain practical, in-depth experience with the Raw Input API, decoding raw byte streams from input devices, particularly the DualShock 4, to understand button presses, joystick movements, and touchpad interactions at the lowest level, providing insights valuable for custom input devices or precise input control applications.

**Key Features and Technical Highlights:**
- **Raw Input API Mastery:** Utilizes RegisterRawInputDevices, GetRawInputDeviceList, and GetRawInputData for direct hardware interaction.
- **Device Enumeration:** Lists connected devices with Vendor/Product IDs and names, showing device management expertise.
- **Gamepad Focus:** Parses DualShock 4 HID data, identifying control-specific bytes through testing sequences.
- **Input State Tracking:** Monitors changes in raw data to map inputs accurately.
- **Message-Only Window:** Implements a hidden window for background processing, demonstrating Windows message handling.
- **Error Handling:** Robust checks for API calls ensure reliability.
- **C++ Best Practices:** Uses std::vector, avoids manual memory management, and handles wide strings properly.

**Why This Matters:**
NanoTrigger exemplifies a commitment to understanding computer interaction fundamentals, going beyond basic usage to how inputs work at a low level. The skills—low-level programming, API interaction, data parsing—are highly transferable to game development, custom hardware integration, and system utilities.`
    },
    {
      title: "Orchestra License Dumper",
      description: "Reverse-engineered tool for license data extraction from Orchestra software.",
      tags: ["C#", "Windows API", "Memory Analysis", "Reverse Engineering"],
      highlights: [
        "Dynamic memory address resolution",
        "License data structure modeling",
        "Process memory reading",
        "INI file configuration support"
      ],
      detailedDescription: `This project demonstrates a strong understanding of reverse engineering principles and low-level system interaction using C#. The goal was to extract valid license keys from a running instance of the Orchestra point-of-sale (POS) software, involving a deep dive into memory manipulation and process introspection.

**Key Technologies and Techniques:**
- **C#:** Primary language, leveraging .NET for robust development.
- **Windows APIs:** Extensive use of kernel32.dll functions (OpenProcess, ReadProcessMemory, WriteProcessMemory, CreateToolhelp32Snapshot) for process manipulation and memory access.
- **Memory Analysis:** Targets specific memory addresses with pointer arithmetic and dynamic memory allocation (DMA) resolution via FindDMAAddy, plus exploration of Array of Bytes (AOB) scanning.
- **Process Introspection:** Uses Process.GetProcessesByName and GetModuleBaseAddress to locate and interact with the Orchestra process.
- **Data Structure Interpretation:** Defines a Licenses.cs class mirroring memory layout, handling fixed-length strings and legacy binary formats.
- **INI File Processing:** Custom function for configuration parsing.

**Why and How:**
The objective was to retrieve license information by:
1. Attaching to the Orchestra process and obtaining a handle.
2. Locating license data via known addresses and pointer navigation, likely identified through debugging tools.
3. Reading raw bytes into structured C# variables for interpretation.

**Outcome:**
Successfully retrieves license keys, showcasing confident memory manipulation, process interaction, and data structure interpretation—valuable skills for security research, software integration, and legacy system maintenance.`
    },
    {
      title: "Path of Exile Data Monitor",
      description: "A utility for monitoring in-game data in Path of Exile to study memory structures.",
      tags: ["C#", "Windows API", "Input Simulation", "Memory Analysis"],
      highlights: [
        "Dynamic memory address tracking",
        "Real-time health value monitoring",
        "Experimental input simulation",
        "TCP connection analysis"
      ],
      detailedDescription: `This project demonstrates proficiency in C# and Windows Forms development, focusing on process interaction and data analysis within Path of Exile. The POE Tool v2 monitors game data to study memory structures and system behavior, emphasizing technical exploration over automation.

**Key Features and Technologies:**
- **Windows Forms UI:** Features a simple UI with a CheckedListBox for configuration profiles (e.g., Cyclone Slayer) and a Debug textbox for real-time feedback.
- **Process Interaction (ghapi.cs):** Custom API wrapper using kernel32.dll for process opening, memory reading/writing, module enumeration, and dynamic address resolution with FindDMAAddy—reusable and robust.
- **Game Data Logic (Program.cs):** Identifies the game process, monitors health via a continuous loop, triggers experimental actions based on conditions, and uses InputSimulatorStandard for input simulation with Stopwatch timers for cooldowns.

**Overall Impression:**
This project showcases low-level system programming, memory management, and event-driven design. The use of a separate ghapi.cs wrapper promotes modularity, while continuous monitoring and conditional logic reflect careful design. It highlights practical C# skills applicable to various software development roles, focusing on technical insight rather than gameplay modification.`
    },
    {
      title: "Rocket League Memory Analyzer",
      description: "C++ tool for analyzing Unreal Engine memory structures in Rocket League.",
      tags: ["C++", "Windows API", "Reverse Engineering", "Memory Analysis"],
      highlights: [
        "Pattern scanning for memory locations",
        "GNames and GObjects address resolution",
        "Robust process module enumeration",
        "Detailed error handling"
      ],
      detailedDescription: `This project demonstrates a strong understanding of reverse engineering principles, memory analysis, and low-level system programming in C++. The core objective was to explore the internal workings of Rocket League by interacting directly with its memory space to locate Unreal Engine structures (GNames, GObjects), focusing on learning rather than modification.

**What it Does:**
The main.cpp application identifies memory addresses for GNames and GObjects, fundamental Unreal Engine data structures, enabling potential inspection of game objects and properties.

**Why and How:**
- **Motivation:** A deep dive into low-level system interactions and complex application internals.
- **Technique:** Uses pattern scanning (signature scanning) to find unique byte sequences within RocketLeague.exe, avoiding hardcoded addresses that change with updates.
- **find_pattern_in_module():** Enumerates modules with CreateToolhelp32Snapshot, isolates RocketLeague.exe, and searches for patterns, leveraging parsePattern for efficient byte matching.
- **get_gname_address() and get_gobjects_address():** Encapsulate pattern searches with specific byte patterns, including detailed offset calculations.
- **Robust Error Handling:** Checks for invalid handles and failed searches with informative messages.

**Key Skills Demonstrated:**
- **C++ Proficiency:** Uses standard features (strings, vectors) and pointer management.
- **Reverse Engineering:** Applies pattern scanning and memory analysis techniques.
- **Windows API:** Effective module enumeration and process interaction.
- **Analytical Skills:** Implied ability to analyze disassembled code for pattern derivation.

This project provides evidence of initiative and a technical foundation in systems programming, serving as a starting point for deeper memory-based projects in game development or security research.`
    },
    {
      title: "RLTool Gameplay Analyzer",
      description: "A C# tool for studying Rocket League gameplay data through memory analysis.",
      tags: ["C#", "Windows API", "Memory Manipulation", "Input Simulation"],
      highlights: [
        "Real-time roll value monitoring",
        "Dynamic memory address resolution",
        "Input simulation for study",
        "Modular design with ghapi.cs"
      ],
      detailedDescription: `RLTool is a C# application designed to interact with Rocket League, demonstrating a strong understanding of low-level system programming, memory manipulation, and real-time process interaction, motivated by a desire to learn these concepts.

**Key Features and Technical Highlights:**
- **Process Interaction:** Reliably locates and interacts with RocketLeague.exe using kernel32.dll functions (OpenProcess, ReadProcessMemory).
- **Memory Reading:** Reads the player’s roll value from memory using pointer arithmetic and dynamic address resolution with FindDMAAddy, showcasing memory structure mastery.
- **Input Simulation:** Simulates keyboard and mouse inputs based on roll values and user triggers (\\ key) via InputSimulatorStandard, useful for technical study.
- **Real-time Response:** Runs in a continuous while(true) loop with Thread.Sleep() for performance, monitoring and reacting dynamically.
- **Modular Design:** Separates core functionality into ghapi.cs for reusability and maintainability.

**Capabilities Demonstrated:**
- Direct interaction with Windows OS at a low level.
- Understanding and manipulating memory structures.
- Creating responsive, event-driven applications.
- Designing modular, maintainable code.

While focused on Rocket League, the principles are broadly applicable to system utilities, game development tools, and real-time data processing, reflecting a developer capable of tackling complex challenges.`
    },
    {
      title: "Rz Asset Control Center",
      description: "A robust web application for cryptocurrency asset management and automated trading.",
      tags: ["ASP.NET Core", "Entity Framework", "KuCoin API", "WebSocket", "PostgreSQL"],
      highlights: [
        "Secure authentication with 2FA",
        "Real-time WebSocket data handling",
        "Automated DCA trading bot",
        "PostgreSQL database integration"
      ],
      detailedDescription: `This project showcases my ability to develop a sophisticated, secure, and scalable web application for managing cryptocurrency assets and automating trading strategies using ASP.NET Core. Rz Asset Control Center integrates with the KuCoin exchange, offering user authentication, real-time data monitoring, and automated trading bot management, highlighting strong backend development capabilities.

**Key Technologies & Concepts Demonstrated:**
- **ASP.NET Core:** Foundation for modern web app development.
- **Entity Framework Core:** ORM for PostgreSQL database interactions, showcasing database design and persistence skills.
- **KuCoin API Integration:** Uses Kucoin.Net SDK for REST and WebSocket APIs to fetch account info, place orders, and subscribe to real-time streams.
- **Authentication and Authorization:** Implements ASP.NET Identity with password hashing (BCrypt) and two-factor authentication (2FA).
- **Real-time Data Handling:** WebSocketClient.cs manages balance and order updates in real time.
- **Asynchronous Programming:** Extensive use of async/await for scalability.
- **Dependency Injection:** Startup.cs showcases modularity and testability.
- **Logging:** Serilog integration for monitoring and debugging.
- **Background Services:** BotBackgroundService.cs handles continuous bot operations.

**Project Functionality Overview:**
1. **User Authentication:** Login with 2FA and session management via cookies.
2. **Asset Management:** Displays holdings and USD value from KuCoin.
3. **Order Management:** Retrieves and manages open orders.
4. **Automated Trading Bot (DCA):** Configurable bot for base orders, safety orders, and take-profit, running in the background.
5. **UI:** Dynamic, responsive interface with homemade HTML generation.
6. **Time Synchronization:** Ensures accurate trading with NTP server sync.

**File Analysis Summary:**
- Includes Startup.cs, Program.cs, BotLogic.cs, and more, forming a comprehensive full-stack solution.

**Overall Impression:**
A substantial project demonstrating full-stack web development, API integration, and secure design, with a focus on complex financial algorithms and real-time systems, reflecting a proactive approach to impactful solutions.`
    },
    {
      title: "RziRTool - iRacing Telemetry Overlay",
      description: "A real-time telemetry visualization tool for iRacing using advanced graphics rendering.",
      tags: ["C#", "ImGui.NET", "Veldrid", "MVVM", "Async Programming"],
      highlights: [
        "Customizable real-time displays",
        "Advanced DirectX rendering",
        "MVVM architecture",
        "Hotkey-toggleable overlay"
      ],
      detailedDescription: `RziRTool is a sophisticated, real-time telemetry overlay application for iRacing, built with C#, .NET, ImGui.NET, and Veldrid. It extracts, processes, and visualizes live telemetry data, providing drivers with crucial insights during gameplay, demonstrating advanced asynchronous programming, UI/UX design, and iRacing SDK integration.

**Key Features & Capabilities:**
- **Real-time Visualization:** Includes RPM bar with shift indicators, tire temperature readouts, input trace graphs, ABS status, and car info, all customizable.
- **Configurability:** Modular window design with toggleable elements, persistent JSON settings, and in-app adjustments (e.g., shift RPMs).
- **Technical Design:** Uses MVVM architecture, async/await for responsiveness, and layered window rendering with offscreen texture updates via GDI+.
- **Robustness:** Auto-connects to iRacing, handles disconnections, and logs errors with Microsoft.Extensions.Logging.

**Code Structure Highlights:**
- **Program.cs:** Manages main loop, ImGui initialization, and rendering with helper functions (DrawRpmBar, DrawTireWithTemps).
- **TelemetryViewModel.cs:** Processes telemetry data, exposes it via INotifyPropertyChanged, and handles settings.
- **ImGuiController.cs:** Wraps ImGui.NET for rendering and input processing.

**Overall Impression:**
A feature-rich project with maintainable, extensible code, showcasing high technical proficiency in graphics, real-time data, and UI design, delivering a polished user experience for iRacing analysis.`
    },
    {
      title: "Sloop Auto-Sail Mechanics Study",
      description: "OCR-based tool for studying sailing mechanics in Sea of Thieves.",
      tags: ["C++", "Windows API", "Tesseract OCR", "System Interaction"],
      highlights: [
        "Precise screen region capture",
        "OCR for heading detection",
        "Hotkey activation system",
        "Background process execution"
      ],
      detailedDescription: `This project demonstrates proficiency in C++, Windows API programming, and Optical Character Recognition (OCR) by creating a utility to analyze a specific in-game task within Sea of Thieves. The "Sloop Auto-Sail" tool studies ship heading maintenance, focusing on technical experience rather than gameplay alteration.

**Functionality:**
- **Screen Capture:** Captures a predefined compass region.
- **OCR Processing:** Uses Tesseract OCR to extract numerical heading values.
- **Input Simulation:** Simulates ‘Q’ or ‘D’ key presses to study heading adjustments.
- **Hotkey Activation:** Toggleable with Ctrl + Alt + J for usability.
- **Invisible UI:** Runs as a background process.

**Key Technologies & Skills:**
- **C++:** Core language for robust implementation.
- **Windows API:** Handles keybd_event, RegisterHotKey, and screen capture.
- **Tesseract OCR:** Integrates open-source OCR for data extraction.
- **Image Processing:** Manages bitmap data for OCR input.

**Why This Project Matters:**
It showcases a strong foundation in C++ and Windows API, with practical application of Tesseract OCR to solve real-world problems. The design emphasizes precision and technical skill, applicable to broader software development roles beyond gaming contexts.`
    },
    {
      title: "Perflib Key Identifier",
      description: "A concise C# tool to identify Perflib key identifiers for performance analysis.",
      tags: ["C#", ".NET", "System Interop", "Performance Analysis"],
      highlights: [
        "CultureInfo-based LCID retrieval",
        "Hexadecimal formatting",
        "Efficient system interaction",
        "Concise code design"
      ],
      detailedDescription: `This concise C# console application efficiently determines and displays the valid Perflib (Performance Library) key identifier for the system’s installed UI culture, addressing a specific need in systems monitoring and performance analysis with a proactive problem-solving approach.

**Purpose and Impact:**
The tool retrieves the hexadecimal Language Code Identifier (LCID) for performance counter interactions, streamlining troubleshooting and configuration for developers and administrators.

**Technical Highlights:**
- **C# Proficiency:** Utilizes core C# for console I/O and string formatting.
- **System Interop:** Interacts with CultureInfo for system-level data retrieval.
- **Hexadecimal Formatting:** Formats LCID with padding for clarity.
- **Conciseness:** Delivers functionality with minimal, efficient code.

**Key Takeaways:**
A practical demonstration of C# development and system interaction, reflecting an ability to quickly create useful tools with a focus on efficiency and results, applicable to system administration and performance optimization tasks.`
    },
    {
      title: "Soleo Tech Manager",
      description: "A desktop app for internal management with Google API integration.",
      tags: ["C#", "Windows Forms", "Google API", "Data Management"],
      highlights: [
        "Google Calendar and Sheets integration",
        "Event scheduling and visualization",
        "Registry manipulation for UAC",
        "Backup functionality"
      ],
      detailedDescription: `This project showcases my ability to develop robust desktop applications using C#.NET and integrate with external APIs, specifically Google Calendar and Google Sheets. The Soleo Tech Manager is a Windows Forms application designed to streamline internal operations, highlighting practical application skills.

**Key Features & Technologies:**
- **Google API Integration:** Handles authentication and data exchange with Google services using client_secret.json and credential storage.
- **Data Management:** Reads and displays data from multiple Google Sheets (TeamViewer lists, contacts, pricing, benchmarks) in DataGridView controls.
- **Event Scheduling:** Views and creates Google Calendar events with detailed settings (times, recurrence, reminders).
- **Windows Registry:** Checks and modifies UAC settings, showing system-level expertise.
- **UI/UX:** Organized layout with Windows Forms controls and event handling for usability.
- **Data Backup:** Copies database files for backup, ensuring data safety.

**Project Breakdown:**
- **Form1.cs:** Core logic for UAC, Google API interactions, and backup.
- **Form1.Designer.cs:** Auto-generated UI layout.
- **Program.cs:** Application entry point.

**Overall Impression:**
Concrete evidence of C# desktop development, API integration, and system programming skills, addressing real-world needs with a practical, results-oriented approach.`
    },
    {
      title: "Windows System Configuration Tool",
      description: "A utility for configuring and diagnosing Windows systems for Orchestra software.",
      tags: ["C#", ".NET", "Windows API", "System Administration"],
      highlights: [
        "Comprehensive system checks",
        "Performance optimization",
        "SQL Server configuration",
        "User-friendly diagnostics UI"
      ],
      detailedDescription: `This C# (.NET Framework) Windows Forms application automates and streamlines the configuration and diagnostic checks of a Windows system for the Orchestra POS software, performing a comprehensive suite of tasks to ensure optimal compatibility and performance.

**Key Features and Functionality:**
- **Environment Checks:** Verifies TeamViewer, admin privileges, directory existence, network settings (IP, gateway, DNS), and network category.
- **System Optimization:** Syncs system clock, initiates Windows Updates, adjusts performance settings, installs C++ Redistributables, enables .NET features, and manages power settings.
- **Orchestra Configuration:** Ensures installation, version, license, and shortcut settings, plus Ghostscript verification.
- **Security and Network:** Configures UAC, firewall ports (1433, 1434, 4900), TLS options, and checks antivirus.
- **SQL Server:** Sets Felix service for auto-start and TCP port 1433.
- **Printer and Device:** Lists printers and prepares SyncOrch components.
- **UI:** Progress bar, rich text feedback, and success icons.

**Technical Strengths:**
- **Automation:** Reduces manual steps, enhancing efficiency.
- **Error Handling:** Uses try-catch for robustness.
- **Registry Manipulation:** Manages UAC and power settings.
- **Process Management:** Launches external tools and installers.
- **Networking:** Handles IP, DNS, and firewall configurations.
- **SQL Interaction:** Configures and queries SQL Server.

**Overall Impression:**
Demonstrates deep Windows system administration knowledge, automation expertise, and practical tool development, tailored to a specific business domain (POS systems), with a user-friendly interface for technical and non-technical users.`
    },
    {
      title: "Test Drive Unlimited Shift Analyzer",
      description: "A tool for studying gear shifting in Test Drive Unlimited: Solar Crown.",
      tags: ["C#", "Windows API", "Memory Analysis", "Real-time Data"],
      highlights: [
        "Dynamic memory address tracking",
        "Real-time speed and gear monitoring",
        "Configurable via INI files",
        "Multi-threaded design"
      ],
      detailedDescription: `This project showcases my ability to interact with external processes, perform memory analysis, and implement real-time data processing in C#. The Smart Shift Optimizer for Test Drive Unlimited: Solar Crown studies gear shifting dynamics, focusing on technical mastery rather than gameplay enhancement.

**Functionality:**
- Monitors car speed and gear via memory reads.
- Analyzes optimal shift points from Gears.ini or approximations.
- Simulates gear changes for study, with real-time console feedback.
- Adjusts additional parameters (fuel, tires) for comprehensive analysis.

**Key Features and Technical Details:**
- **External Process Interaction:** Uses ghapi.cs with kernel32.dll for memory access.
- **Dynamic Memory Resolution:** FindDMAAddy handles shifting memory locations.
- **Real-time Processing:** RunShiftLogic loop monitors and analyzes data.
- **Configuration:** Loads settings from Gears.ini for adaptability.
- **Error Handling:** Retries on memory read failures, ensuring stability.
- **Multi-Threading:** shiftThread ensures efficient processing.
- **User Interface:** Console displays status and allows car profile switching.

**Why this Approach?**
Direct memory manipulation offers the fastest data access, chosen over slower alternatives like keyboard simulation, demonstrating trade-off awareness and technical depth in Windows memory management.

**Overall Proficiency:**
- Low-level system programming.
- Real-time data analysis.
- Robust error handling.
- Configurable application design.

A testament to tackling complex challenges with best practices, applicable beyond gaming to system utilities and real-time analysis tools.`
    },
    {
      title: "Wo Long Interaction Analyzer",
      description: "A tool for studying game interactions in Wo Long: Fallen Dynasty via memory analysis.",
      tags: ["C#", "Windows API", "Memory Manipulation", "Reverse Engineering"],
      highlights: [
        "Dynamic memory address resolution",
        "Real-time state detection",
        "Input simulation for analysis",
        "External library integration"
      ],
      detailedDescription: `This project showcases proficiency in reverse engineering and low-level system interaction using C#. Designed to study interactions in Wo Long: Fallen Dynasty, it focuses on understanding memory manipulation and process interaction rather than gameplay modification.

**Functionality:**
- Identifies the game process with Process.GetProcessesByName.
- Accesses memory via kernel32.dll (OpenProcess, ReadProcessMemory) to detect enemy attack states.
- Simulates inputs (F key) using InputSimulatorStandard to analyze parry timing.
- Uses static addresses for demonstration, with capability for dynamic resolution via FindDMAAddy.

**Key Technologies and Concepts:**
- **C# and .NET:** Robust foundation for development.
- **Windows API:** Direct process and memory interaction.
- **Memory Management:** Reads and interprets game state data.
- **Reverse Engineering:** Implies understanding of memory address identification.
- **Multithreading:** Thread.Sleep manages timing.
- **External Libraries:** Integrates nuget packages for enhanced functionality.

**Why this Project Matters:**
It demonstrates going beyond surface-level development, tackling complex systems with fundamental memory and process management skills. Applicable to system utilities, debugging tools, and performance optimization, it reflects efficient teamwork potential with clear, documented code.`
    },
    {
      title: "System Tray Icon Manager",
      description: "AutoIt scripts for managing Windows system tray icons.",
      tags: ["AutoIt", "Windows API", "UI Automation", "Event Handling"],
      highlights: [
        "Dynamic icon monitoring",
        "Event hook implementation",
        "Precise toolbar manipulation",
        "Robust error handling"
      ],
      detailedDescription: `This project demonstrates proficiency in low-level Windows API interaction and process management through AutoIt scripts, selectively hiding specific application icons from the Windows system tray to enhance user experience and system control.

**Key Features and Technical Highlights:**
- **Targeted Icon Removal:** Identifies and hides icons by process name (e.g., NHQM.exe) or explorer UID with precision.
- **Dynamic Monitoring:** Uses _WinAPI_SetWinEventHook for continuous monitoring of tray icon creation and changes.
- **Windows API Mastery:** Employs _WinAPI_OpenProcess, _WinAPI_ReadProcessMemory, _GUICtrlToolbar functions, and _WinAPI_ShellNotifyIcon for toolbar manipulation.
- **Robust Error Handling:** Ensures stability with comprehensive checks.
- **AutoIt Expertise:** Leverages DLL structures, callbacks, and UI automation.

**Why This Matters:**
It delves into Windows internals, showcasing process management, API interaction, and event handling skills transferable to system-level programming, automation, and application integration, with a focus on technical development over aesthetics.`
    },
    {
      title: "Image Upscaling Discord Bot",
      description: "A Python bot for enhancing image resolution using ESRGAN models.",
      tags: ["Python", "Discord.py", "ESRGAN", "Image Processing"],
      highlights: [
        "Multiple ESRGAN model support",
        "Fuzzy string matching for usability",
        "Asynchronous image processing",
        "Robust permission system"
      ],
      detailedDescription: `This project demonstrates proficiency in Python, deep learning, and API integration by creating a Discord bot that performs AI-powered image upscaling with ESRGAN models, offering a user-friendly application of complex technologies.

**Key Features & Technologies:**
- **Core Functionality:** Uploads images via attachments or URLs, upscales with user-selected ESRGAN models, and returns results.
- **ESRGAN Integration:** Supports multiple pre-trained models with safe unpickling to prevent code execution risks.
- **Model Management:** Uses fuzzywuzzy for flexible model selection, interpolating and combining models dynamically.
- **Discord API:** Built with discord.py for interactive bot functionality.
- **Image Processing:** Employs OpenCV for resizing, conversions, and montages, with async operations for responsiveness.
- **Permissions:** Advanced system restricts access with moderator commands.

**Technical Highlights:**
- **Fuzzy Selection:** build_aliases and fuzzy_load_model enhance usability with partial name matching.
- **Model Interpolation:** parse_models and interpolate_models combine model weights on-the-fly.
- **Modular Architecture:** RzImageProcessing.py separates commands and handlers for maintainability.
- **Efficient Upscaling:** Handles transparency and large images with auto_split_upscale to manage memory.

**Overall:**
Combines multiple technologies into a practical, user-friendly tool, showcasing strong Python skills, deep learning application, and API integration expertise.`
    },
    {
      title: "DALL-E Mini Discord Bot",
      description: "A bot for generating images from text prompts using DALL-E Mini.",
      tags: ["Python", "Discord.py", "aiohttp", "Image Manipulation"],
      highlights: [
        "Asynchronous API requests",
        "Image collage creation with Pillow",
        "Sharding for scalability",
        "Robust error handling"
      ],
      detailedDescription: `This project showcases proficiency in Python, asynchronous programming, and API integration by creating a Discord bot that leverages DALL-E Mini for image generation. Users provide text prompts, receiving unique AI-generated images, demonstrating engaging application development.

**Key Technologies & Concepts:**
- **Python 3.10:** Core language for versatility.
- **discord.py and discord.js:** Event-driven bot framework with sharding for scalability.
- **aiohttp:** Asynchronous HTTP requests for efficiency.
- **Asynchronous Programming:** asyncio ensures responsiveness.
- **API Integration:** Connects to Hugging Face’s DALL-E Mini API.
- **Image Manipulation:** Pillow creates labeled collages from base64 images.
- **Configuration:** PyYAML manages settings securely.

**Functionality:**
- Validates prompts, sends async API requests, decodes images, creates collages, and cleans up temporary files, with robust exception handling.

**Why Built:**
To deepen understanding of asynchronous programming and API integration, delivering a fun, functional tool at the intersection of AI and user interaction, adapting to evolving APIs for valuable problem-solving experience.`
    },
    {
      title: "RzOverlay Game Data Visualizer",
      description: "A C++ overlay for visualizing game data in Halo: MCC.",
      tags: ["C++", "DirectX", "Windows API", "Reverse Engineering"],
      highlights: [
        "DirectX 9 rendering",
        "Transparent layered overlay",
        "Memory data extraction",
        "Entity structure modeling"
      ],
      detailedDescription: `RzOverlay is a C++ project demonstrating proficiency in DirectX rendering, Windows API interaction, and reverse engineering concepts. It creates a transparent, layered overlay window rendering on top of Halo: The Master Chief Collection, driven by a desire to deepen knowledge of OS and graphical API interactions.

**Key Technologies & Concepts:**
- **DirectX (D3D9):** Initializes Direct3D devices, manages scenes, and renders with ID3DXFont.
- **Windows API:** Uses FindWindowA, GetWindowRect, CreateWindowExW, and SetLayeredWindowAttributes for overlay management.
- **Reverse Engineering:** Extracts Entity data from memory (Entity.h, loadEntities()), modeling game structures with padding awareness.
- **C++ Fundamentals:** Structured with classes (Paint, Entity) and standard libraries.

**Code Structure and Functionality:**
- **Paint Class:** Encapsulates DirectX rendering logic.
- **Entity Class:** Models extracted game data.
- **RzOverlay.cpp:** Manages window creation, message loop, and overlay logic.

**Learning Outcomes:**
- Mastered DirectX rendering and overlay creation.
- Gained deep Windows API interaction experience.
- Explored memory analysis basics.

Highly transferable skills to game tools, graphics, and system utilities, focusing on core technical competencies.`
    },
    {
      title: "GearAI (Forza Horizon 5) Analyzer",
      description: "A tool for analyzing gear shifting in Forza Horizon 5.",
      tags: ["AutoIt", "KDMemory", "Windows API", "Real-time Data"],
      highlights: [
        "Real-time speed and gear monitoring",
        "Custom memory library integration",
        "Configurable via INI files",
        "User-friendly GUI"
      ],
      detailedDescription: `GearAI is a sophisticated AutoIt tool designed to analyze gear shifting in Forza Horizon 5, demonstrating deep understanding of low-level system interaction, memory manipulation, and real-time data processing, aimed at mastering these concepts.

**Key Technologies & Concepts:**
- **Process Interaction:** Identifies ForzaHorizon5.exe and retrieves module base addresses.
- **Memory Reading & Writing:** Uses custom KDMemory library to monitor speed and gear.
- **Dynamic Analysis:** Configurable shift points via config.ini for adaptability.
- **GUI:** Provides real-time feedback and car profile selection.
- **Hotkeys:** PAUSE and HOME keys control operation.

**How It Works:**
- Loads config.ini, sets up GUI, monitors process, analyzes data, and updates UI in real-time.

**Why This Matters:**
- **Reverse Engineering:** Identifies memory locations for data analysis.
- **System-Level:** Direct memory and process interaction.
- **Algorithmic Thinking:** Designs gear shift logic.
- **Professionalism:** Compiled as a standalone executable.

A strong example of core programming principles and technical learning applied practically.`
    },
    {
      title: "For Honor Combat Analyzer",
      description: "Image recognition tool for studying combat patterns in For Honor.",
      tags: ["AutoIt", "FastFind.dll", "Image Processing", "System Interaction"],
      highlights: [
        "Custom image recognition with FastFind64.dll",
        "Real-time attack detection",
        "Configurable via INI files",
        "Character-specific logic"
      ],
      detailedDescription: `This project creates a smart AutoIt tool to analyze combat patterns in For Honor using image recognition, focusing on technical skills like image processing and real-time system interaction for learning purposes.

**Key Features & Skills:**
- **Image Recognition:** Uses FastFind64.dll for robust attack detection.
- **Real-time Response:** Monitors screen and reacts with precise timing (15ms delays).
- **Modular Design:** Configurable via INI files for character-specific settings.
- **Complex Logic:** Tracks combat states (CurrentGuardSide, EnemyIsAttacking) for pattern analysis.
- **Resource Management:** Manages external DLL and icon resources with error handling.

**Summary:**
Demonstrates image processing, real-time interaction, and modular design, applicable to broader automation and analysis tasks, with a focus on technical development.`
    },
    {
      title: "Forza Horizon 4 Gear Analyzer",
      description: "A multi-component system for studying gear shifting in Forza Horizon 4.",
      tags: ["AutoIt", "AutoHotkey", "KDMemory", "Controller Input"],
      highlights: [
        "Memory-based gear analysis",
        "Joystick input processing",
        "Multi-script architecture",
        "Configurable settings"
      ],
      detailedDescription: `This sophisticated multi-component system automates gear shifting analysis in Forza Horizon 4 using AutoIt and AutoHotkey, demonstrating low-level programming, memory manipulation, and input processing skills for technical mastery.

**System Architecture:**
- **GearAI_v7_clutch.au3:** Core script for memory-based gear analysis with GUI.
- **KDMemory.au3:** Custom library for memory operations.
- **RzPadder.au3:** Processes joystick inputs into keyboard presses.
- **_IsPressed360.au3:** Reads Xbox 360 controller data.
- **DragAI_v2.ahk & SkillsFarm_v1.ahk:** Supplementary automation scripts.

**Key Features:**
- Real-time gear analysis with memory reads.
- Gradient-based joystick control.
- Modular, configurable design with INI files.

**Why Impressive:**
A real-time system interacting at the memory level, showcasing mastery of low-level concepts, system architecture, and hardware integration, with broad applicability to automation and technical analysis.`
    },
    {
      title: "Genshin Impact Memory Analyzer",
      description: "A tool for studying game mechanics in Genshin Impact via memory manipulation.",
      tags: ["Assembly", "Cheat Engine", "Reverse Engineering", "Memory Manipulation"],
      highlights: [
        "Array of Bytes (AOB) scanning",
        "Custom code injection",
        "Register manipulation",
        "Conditional logic implementation"
      ],
      detailedDescription: `This project applies reverse engineering to Genshin Impact using Cheat Engine and assembly, focusing on understanding memory manipulation and game mechanics at a low level for learning purposes.

**Key Skills:**
- **Reverse Engineering:** Uses AOB scanning and code injection for memory modifications.
- **Assembly:** Manipulates registers (rcx, rdx, r8) and uses instructions (mov, jmp, cmp) for logic.
- **Features:** Explores infinite stamina, no cooldowns, speed hacks, and godmode through memory edits.

**Project Structure:**
- Modular cheat blocks with enable/disable functionality.
- Symbol management with registersymbol/unregistersymbol.

**Outcome:**
Improves reverse engineering and assembly skills, applicable to security, game development, and system optimization, with a methodical approach to complex systems.`
    },
    {
      title: "Halo MCC Gameplay Analyzer",
      description: "A tool for studying gameplay in Halo: MCC using image processing.",
      tags: ["AutoIt", "FastFind.dll", "Image Processing", "Input Simulation"],
      highlights: [
        "Real-time target detection",
        "Optimized pixel searching",
        "Smooth mouse control simulation",
        "Configurable via INI files"
      ],
      detailedDescription: `This AutoIt tool analyzes Halo: MCC gameplay using image processing with FastFind64.dll, focusing on technical skills for real-time data exploration.

**How it Works:**
- Captures screen regions, detects targets via pixel colors, and simulates mouse actions in a continuous loop.

**Key Technologies:**
- **AutoIt:** Drives automation and UI.
- **FastFind64.dll:** Enhances pixel searching efficiency.
- **Image Processing:** Identifies gameplay elements.
- **Input Simulation:** Uses mouse_event for control.

**Why Matters:**
Practical demonstration of automation, image processing, and system interaction, transferable to various development roles, with a focus on technical learning.`
    },
    {
      title: "Lost Ark Helper",
      description: "A utility for studying Lost Ark mechanics with pixel recognition.",
      tags: ["AutoIt", "RzPixelAlgorithm.dll", "Pixel Recognition", "UI Automation"],
      highlights: [
        "Custom pixel recognition library",
        "Real-time mechanic monitoring",
        "User-friendly GUI with hotkeys",
        "Configurable settings"
      ],
      detailedDescription: `RzHelper.au3 is an AutoIt utility for analyzing Lost Ark mechanics using pixel recognition, focusing on functionality and technical exploration.

**Functionality:**
- Monitors quests, sailing, fishing, and potions via RzPixelAlgorithm.dll.
- Features a GUI with toggles and hotkeys, configurable via config.ini.

**Technical Highlights:**
- **Pixel Recognition:** Custom DLL for efficient analysis.
- **Window Interaction:** Targets Lost Ark window specifically.
- **Timer Management:** Handles cooldowns with TimerInit.

**Bonus:**
Includes a file crypter with encryption options, adding security exploration.

**Impression:**
Demonstrates automation, system interaction, and UI design, with practical applications and a focus on learning technical skills.`
    },
    {
      title: "Ninja Gaiden 2 Mechanics Analyzer",
      description: "A tool for studying Ninja Gaiden 2 Black mechanics via memory analysis.",
      tags: ["Cheat Engine", "Assembly", "Reverse Engineering", "Memory Manipulation"],
      highlights: [
        "AOB scanning for mechanics",
        "Custom assembly modifications",
        "Conditional logic for toggling",
        "Detailed code injection"
      ],
      detailedDescription: `This Cheat Engine project reverse-engineers Ninja Gaiden 2 Black on PC to analyze game mechanics like health and combos, using assembly for modifications.

**Capabilities:**
- Implements auto guard, infinite HP, massive damage, and shop mods via AOB scanning and code injection.

**Technical Details:**
- Uses assembly (jmp, nop) and conditional jumps (jne, je) for dynamic changes.
- Organized with enable/disable blocks and symbol management.

**Outcomes:**
Enhances reverse engineering and assembly skills, applicable to game development and security, with a focus on deconstructing complex systems.`
    },
    {
      title: "Remnant ESP Overlay",
      description: "A real-time overlay for studying Remnant: From the Ashes game data.",
      tags: ["C#", "SharpDX", "Unreal Engine", "3D Math"],
      highlights: [
        "DirectX-based overlay rendering",
        "Memory analysis of Unreal Engine",
        "3D to 2D coordinate projection",
        "Interactive menu system"
      ],
      detailedDescription: `This C# project creates a real-time ESP overlay for Remnant: From the Ashes using SharpDX, analyzing Unreal Engine memory to visualize game data, focusing on technical exploration.

**Key Features:**
- **DirectX Rendering:** Transparent overlay with bounding boxes and arrows.
- **Memory Analysis:** Extracts GWorld, GNames, GObjects data.
- **3D Math:** WorldToScreen converts coordinates for display.
- **UI:** Toggleable menu with FPS display.

**Skills:**
- Graphics programming, reverse engineering, and 3D math, applicable to game tools and system programming, with a passion for understanding complex systems.`
    },
    {
      title: "WinHTTP CRM Enhancer",
      description: "An AutoIt library and script for enhancing CRM interactions via WinHTTP.",
      tags: ["AutoIt", "WinHTTP", "Network Programming", "Automation"],
      highlights: [
        "Comprehensive WinHTTP wrapper",
        "Secure HTTP request handling",
        "Form automation capabilities",
        "Robust error handling"
      ],
      detailedDescription: `This AutoIt project enhances CRM interactions with a comprehensive WinHTTP.au3 library and a SoleoTechManagerCRM.au3 script, demonstrating network programming and automation skills.

**Key Features:**
- **WinHttp.au3:** Supports GET/POST, cookies, timeouts, redirects, authentication, and form filling with robust error handling.
- **SoleoTechManagerCRM.au3:** Automates CRM login with POST requests.

**Impression:**
Shows ability to work with low-level APIs, create reusable components, and solve practical problems with clean, documented code, reflecting a proactive learning approach.`
    },
    {
      title: "QRCode Generator",
      description: "A desktop tool for generating QR codes with customization options.",
      tags: ["AutoIt", "QRCreator", "Image Processing", "GUI Development"],
      highlights: [
        "Customizable QR code generation",
        "Clipboard integration",
        "Image resizing functionality",
        "User-friendly GUI"
      ],
      detailedDescription: `This AutoIt project develops a QRCode generator with a user-friendly GUI, showcasing GUI development, image manipulation, and system interaction skills.

**Features:**
- Generates QR codes in PNG/BMP with customizable settings (error correction, margins).
- Includes clipboard support, resizing, and robust error handling via @error.

**Technical Details:**
- Uses QRCreator.au3 and external DLLs for performance, with #RequireAdmin for system access.

**Motivation:**
Explores GUI and image processing in AutoIt, delivering a practical tool with production-quality code.`
    },
    {
      title: "TradingView Structure Indicator",
      description: "A Pine Script tool for analyzing market structures on TradingView.",
      tags: ["Pine Script", "TradingView", "Technical Analysis", "Data Visualization"],
      highlights: [
        "Automated BOS and OB detection",
        "Zigzag visualization for trends",
        "Configurable Fibonacci factors",
        "Alert system integration"
      ],
      detailedDescription: `This Pine Script project creates a "Structures - BOS & OB Rz" indicator for TradingView, automatically identifying market structure elements like Break of Structure (BOS) and Order Blocks (OB), valuable for price action traders.

**Features:**
- **Automated Detection:** Marks bullish/bearish BOS and OB with visual cues.
- **Zigzag:** Filters noise for trend clarity.
- **Configurability:** Adjusts zigzag length, Fibonacci factors, and colors.
- **Alerts:** Notifies on BOS events.

**Technical Details:**
- Uses ta.highest/lowest for swings, arrays for data, and box.new/label.new for visuals.

**Value:**
Automates chart analysis, enhancing decision-making with a modular, user-friendly design, reflecting financial analysis expertise.`
    },
    {
      title: "TradingView Market Sessions",
      description: "A Pine Script tool for visualizing trading sessions on TradingView.",
      tags: ["Pine Script", "TradingView", "Time Management", "Visualization"],
      highlights: [
        "Customizable session boxes",
        "Opening range breakout signals",
        "Fibonacci level visualization",
        "User-defined time zones"
      ],
      detailedDescription: `This Pine Script tool visualizes trading sessions (London, New York, Tokyo, Sydney) on TradingView, enhancing market activity analysis with extensive customization.

**Features:**
- **Session Boxes:** Draws customizable session ranges.
- **Opening Range:** Highlights breakouts with alerts.
- **Fibonacci Levels:** Auto-draws support/resistance zones.
- **Customization:** Adjusts times, colors, and historical display.

**Technical Highlights:**
- Uses draw_market(), draw_op(), and draw_fib() for rendering, with time() for zone handling and alertcondition() for notifications.

**Overall:**
A practical, flexible tool for traders, demonstrating time manipulation and visualization skills in Pine Script.`
    },
    {
      title: "Advanced Trading Strategy",
      description: "A Pine Script trading strategy with customizable trend analysis.",
      tags: ["Pine Script", "TradingView", "Technical Analysis", "Strategy Development"],
      highlights: [
        "Multiple moving average options",
        "ATR-based sensitivity adjustment",
        "Multi-timeframe analysis",
        "Stop-loss and take-profit features"
      ],
      detailedDescription: `This Pine Script project implements a sophisticated, adaptable trading strategy on TradingView, using moving averages and ATR for trend analysis and risk management.

**Features:**
- **Customizable MAs:** Supports SMA, EMA, DEMA, etc., for trend detection.
- **ATR Sensitivity:** Adjusts entry/exit based on volatility.
- **MTF Analysis:** Incorporates higher timeframe trends.
- **Risk Management:** Includes stop-loss, take-profit, and trailing stops.
- **Visualization:** Features a screener with sortable labels.

**Technical Details:**
- Uses security() to prevent repainting, with custom functions for logic and alertcondition() for notifications.

**Why Matters:**
Demonstrates deep financial market understanding and coding skill, creating a robust, professional-grade trading tool with practical application.`
    },
    {
      title: "Corpus Puzzle Solver Study",
      description: "A tool for studying puzzle mechanics in Warframe using pixel analysis.",
      tags: ["AutoIt", "Pixel Analysis", "Logic Solving", "System Interaction"],
      highlights: [
        "Pixel color-based state detection",
        "Optimal click sequence calculation",
        "Hotkey-driven operation",
        "External data file integration"
      ],
      detailedDescription: `This AutoIt script studies Corpus puzzles in Warframe by analyzing pixel colors to determine states and calculate solutions, showcasing automation and problem-solving skills.

**How it Works:**
- Uses PixelGetColor to detect puzzle states from test.txt coordinates, solving with minimal clicks via logic comparisons.

**Key Skills:**
- **Automation:** Streamlines repetitive task analysis.
- **Problem Solving:** Translates logic into code.
- **Pixel Analysis:** Detects states with precision.
- **System Interaction:** Integrates external data and hotkeys.

A solid example of logical coding and system interaction for technical exploration.`
    },
    {
      title: "Wo Long Cheat Table Analyzer",
      description: "A tool for studying Wo Long: Fallen Dynasty mechanics via memory analysis.",
      tags: ["Cheat Engine", "Assembly", "Reverse Engineering", "Lua Scripting"],
      highlights: [
        "AOB scanning for mechanics",
        "Custom assembly scripts",
        "Lua-enhanced UI",
        "Detailed memory analysis"
      ],
      detailedDescription: `This Cheat Engine project analyzes Wo Long: Fallen Dynasty mechanics with assembly and Lua, focusing on low-level programming and game internals exploration.

**Skills:**
- **Reverse Engineering:** Disassembles WoLong.exe to identify mechanics.
- **Assembly:** Uses x86-64 instructions for modifications.
- **Cheat Engine:** Leverages scripting and hotkeys.
- **Lua:** Enhances UI and functionality.

**Features:**
- Analyzes HP, spirit, and camera controls with detailed scripts.

**Value:**
Improves reverse engineering and assembly skills, applicable to game development and systems programming, with a focus on technical depth.`
    },
    {
      title: "Data Extraction for POS Systems",
      description: "A UiPath solution for extracting and transforming POS system data.",
      tags: ["UiPath", "Data Manipulation", "Regex", "Database Integration"],
      highlights: [
        "UI automation for data extraction",
        "Regex-based data cleaning",
        "Database insertion with SQL",
        "Robust error handling"
      ],
      detailedDescription: `This UiPath project streamlines data migration between POS systems, extracting, transforming, and loading data with automation and precision.

**Achievements:**
- **Extraction:** Uses UI automation (WDMap, Notepad++) and INI parsing.
- **Transformation:** Cleans data with regex and restructures for target schema.
- **Automation:** Multi-stage workflow with user input, file handling, and database insertion.

**Breakdown:**
- **Main.xaml:** Extracts and cleans data.
- **Main2.xaml:** Converts and organizes into Excel.
- **Main3.xaml:** Loads into SQL Server with lookups.

A complete solution showcasing UI automation, data handling, and database skills for real-world applications.`
    },
    {
      title: "Dolibarr ERP Customization",
      description: "Customized Dolibarr ERP/CRM for specific business needs.",
      tags: ["PHP", "Composer", "ERP/CRM", "UI Customization"],
      highlights: [
        "Custom dashboard widgets",
        "Theme and UI adaptations",
        "Dependency management with Composer",
        "Workflow optimization"
      ],
      detailedDescription: `This project customizes Dolibarr ERP/CRM with PHP, tailoring it to a company’s needs with custom widgets and UI adaptations.

**Key Skills:**
- **PHP:** Extends core functionality.
- **Composer:** Manages dependencies (tcpdf, phpoffice).
- **UI/UX:** Customizes dashboard and theme.
- **ERP:** Optimizes workflows.

Demonstrates open-source adaptation, PHP proficiency, and practical business solutions.`
    },
    {
      title: "Unreal Engine 5 Bag End",
      description: "A detailed recreation of Bag End in Unreal Engine 5.",
      tags: ["Unreal Engine 5", "Blender", "Substance Painter", "Environment Design"],
      highlights: [
        "High-quality asset creation",
        "Realistic material texturing",
        "Plugin integration (e.g., Water)",
        "Collaborative workflow support"
      ],
      detailedDescription: `This Unreal Engine 5 project recreates Bag End from The Lord of the Rings as an explorable environment, mastering the full pipeline of asset creation and environment design.

**Technologies:**
- **UE5:** Lighting, materials, and level design.
- **Blender & 3DS Max:** High/low-poly modeling.
- **Substance Painter:** PBR texturing.
- **Plugins:** Water, Landmass, MultiUserClient for enhanced functionality.

Focuses on 3D modeling, texturing, and game engine skills, delivering an immersive experience with collaborative potential.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors">
            Rémi Job-Dorge
          </a>
          <div className="flex gap-6">
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-gray-100">Rémi Job-Dorge</h1>
          <p className="text-xl text-gray-300 mt-2">Expert Software Developer & Technical Analyst</p>
          
          <div className="mt-4 flex gap-4 flex-wrap">
            <a href="mailto:jobdorge@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              jobdorge@gmail.com
            </a>
            <a href="https://github.com/neXuz-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/r%C3%A9mi-j-977b33213/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://raw.githubusercontent.com/neXuz-dev/portfolio/main/public/CV_Job-Dorge_2024.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          <div className="mt-6">
            <p className="text-gray-300">
              Expert in software development with a focus on automation, reverse engineering, and system optimization. 
              Based in Villeneuve-Loubet, France, with over 6 years of professional experience in technical solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="skills">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Core Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Low-level System Programming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Memory Manipulation & Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Reverse Engineering
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Process Automation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  C++, C#, AutoIt, Python
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  .NET Framework & Core
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Windows API Programming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Assembly Language
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="projects">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors">
                <div className="flex justify-between items-center">
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => toggleProject(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                  </div>
                  <button onClick={() => toggleProject(index)}>
                    {expandedProject === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-300 mt-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-900/30 text-blue-300 text-sm px-2 py-1 rounded border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedProject === index && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-800">
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li 
                          key={highlightIndex}
                          className="text-gray-300 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => toggleDetails(index)}
                      className="mt-4 px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg hover:bg-blue-900/70 transition-colors flex items-center gap-2"
                    >
                      {expandedDetails === index ? "Hide Full Details" : "Show Full Details"}
                    </button>
                  </div>
                )}

                {expandedDetails === index && (
                  <div className="mt-6 p-6 bg-gray-700 rounded-lg border border-gray-600">
                    <p className="text-gray-200 whitespace-pre-wrap">{project.detailedDescription}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4 scroll-mt-12" id="about">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About Me</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              Based in Villeneuve-Loubet, France, I bring over 6 years of experience as a Technician 
              at SARL Soleo Tech (2017-2023), where I developed expertise in software development, 
              system optimization, and technical support.
            </p>
            <p>
              My passion for technology stems from a background in competitive gaming, where I 
              achieved multiple world records in simulation racing since 2015. This drive for 
              excellence translates into my work, focusing on automation, reverse engineering, 
              and creating efficient solutions.
            </p>
            <p>
              Outside of coding, I enjoy astronomy, music, and exploring mythology—interests that 
              fuel my curiosity and problem-solving skills. I’m an autodidact committed to 
              continuous learning and delivering impactful technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 px-4 py-6 text-center text-gray-400">
        <p>© Rémi Job-Dorge, February 23, 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;