export default {
    title: "NanoTrigger Input Analyzer",
    description: "A C++ tool for low-level input analysis using the Windows Raw Input API.",
    tags: ["C++", "Windows API", "Raw Input", "Device Handling"],
    highlights: [
      "Raw Input API integration",
      "Device enumeration and identification",
      "Gamepad data parsing (DualShock 4)",
      "Message-only window implementation"
    ],
    detailedDescription: `
  NanoTrigger is a robust C++ application demonstrating advanced input handling using the Windows Raw Input API. This project showcases a deep understanding of low-level system programming, interfacing directly with hardware beyond standard libraries, focusing on meticulous capture and analysis of raw input data from devices like keyboards, mice, and the PlayStation 4 DualShock 4 controller.
  
  ### Motivation and Purpose
  
  The goal was to gain practical, in-depth experience with the Raw Input API, decoding raw byte streams from input devices, particularly the DualShock 4, to understand button presses, joystick movements, and touchpad interactions at the lowest level, providing insights valuable for custom input devices or precise input control applications.
  
  ### Key Features and Technical Highlights
  
  - **Raw Input API Mastery:** Utilizes *RegisterRawInputDevices*, *GetRawInputDeviceList*, and *GetRawInputData* for direct hardware interaction.
  - **Device Enumeration:** Lists connected devices with Vendor/Product IDs and names, showing device management expertise.
  - **Gamepad Focus:** Parses DualShock 4 HID data, identifying control-specific bytes through testing sequences.
  - **Input State Tracking:** Monitors changes in raw data to map inputs accurately.
  - **Message-Only Window:** Implements a hidden window for background processing, demonstrating Windows message handling.
  - **Error Handling:** Robust checks for API calls ensure reliability.
  - **C++ Best Practices:** Uses *std::vector*, avoids manual memory management, and handles wide strings properly.
  
  ### Why This Matters
  
  NanoTrigger exemplifies a commitment to understanding computer interaction fundamentals, going beyond basic usage to how inputs work at a low level. The skills—low-level programming, API interaction, data parsing—are highly transferable to game development, custom hardware integration, and system utilities.
    `
  };