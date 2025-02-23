export default {
    title: "System Tray Icon Manager",
    description: "AutoIt scripts for managing Windows system tray icons.",
    tags: ["AutoIt", "Windows API", "UI Automation", "Event Handling"],
    highlights: [
      "Dynamic icon monitoring",
      "Event hook implementation",
      "Precise toolbar manipulation",
      "Robust error handling"
    ],
    detailedDescription: `
  This project demonstrates proficiency in low-level Windows API interaction and process management through AutoIt scripts, selectively hiding specific application icons from the Windows system tray to enhance user experience and system control.
  
  ### Key Features and Technical Highlights
  
  - **Targeted Icon Removal:** Identifies and hides icons by process name (e.g., *NHQM.exe*) or explorer UID with precision.
  - **Dynamic Monitoring:** Uses *_WinAPI_SetWinEventHook* for continuous monitoring of tray icon creation and changes.
  - **Windows API Mastery:** Employs *_WinAPI_OpenProcess*, *_WinAPI_ReadProcessMemory*, *_GUICtrlToolbar* functions, and *_WinAPI_ShellNotifyIcon* for toolbar manipulation.
  - **Robust Error Handling:** Ensures stability with comprehensive checks.
  - **AutoIt Expertise:** Leverages DLL structures, callbacks, and UI automation.
  
  ### Why This Matters
  
  It delves into Windows internals, showcasing process management, API interaction, and event handling skills transferable to system-level programming, automation, and application integration, with a focus on technical development over aesthetics.
    `
  };