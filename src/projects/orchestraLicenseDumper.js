export default {
    title: "Orchestra License Dumper",
    description: "Reverse-engineered tool for license data extraction from Orchestra software.",
    tags: ["C#", "Windows API", "Memory Analysis", "Reverse Engineering"],
    highlights: [
      "Dynamic memory address resolution",
      "License data structure modeling",
      "Process memory reading",
      "INI file configuration support"
    ],
    detailedDescription: `
  This project demonstrates a strong understanding of reverse engineering principles and low-level system interaction using C#. The goal was to extract valid license keys from a running instance of the Orchestra point-of-sale (POS) software, involving a deep dive into memory manipulation and process introspection.
  
  ### Key Technologies and Techniques
  
  - **C#:** Primary language, leveraging .NET for robust development.
  - **Windows APIs:** Extensive use of *kernel32.dll* functions (*OpenProcess*, *ReadProcessMemory*, *WriteProcessMemory*, *CreateToolhelp32Snapshot*) for process manipulation and memory access.
  - **Memory Analysis:** Targets specific memory addresses with pointer arithmetic and dynamic memory allocation (DMA) resolution via *FindDMAAddy*, plus exploration of Array of Bytes (AOB) scanning.
  - **Process Introspection:** Uses *Process.GetProcessesByName* and *GetModuleBaseAddress* to locate and interact with the Orchestra process.
  - **Data Structure Interpretation:** Defines a *Licenses.cs* class mirroring memory layout, handling fixed-length strings and legacy binary formats.
  - **INI File Processing:** Custom function for configuration parsing.
  
  ### Why and How
  
  The objective was to retrieve license information by:
  1. Attaching to the Orchestra process and obtaining a handle.
  2. Locating license data via known addresses and pointer navigation, likely identified through debugging tools.
  3. Reading raw bytes into structured C# variables for interpretation.
  
  ### Outcome
  
  Successfully retrieves license keys, showcasing confident memory manipulation, process interaction, and data structure interpretation—valuable skills for security research, software integration, and legacy system maintenance.
    `
  };