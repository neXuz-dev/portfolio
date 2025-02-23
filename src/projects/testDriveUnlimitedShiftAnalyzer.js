export default {
    title: "Test Drive Unlimited Shift Analyzer",
    description: "A tool for studying gear shifting in Test Drive Unlimited: Solar Crown.",
    tags: ["C#", "Windows API", "Memory Analysis", "Real-time Data"],
    highlights: [
      "Dynamic memory address tracking",
      "Real-time speed and gear monitoring",
      "Configurable via INI files",
      "Multi-threaded design"
    ],
    detailedDescription: `
  This project showcases my ability to interact with external processes, perform memory analysis, and implement real-time data processing in C#. The Smart Shift Optimizer for Test Drive Unlimited: Solar Crown studies gear shifting dynamics, focusing on technical mastery rather than gameplay enhancement.
  
  ### Functionality
  
  - Monitors car speed and gear via memory reads.
  - Analyzes optimal shift points from *Gears.ini* or approximations.
  - Simulates gear changes for study, with real-time console feedback.
  - Adjusts additional parameters (fuel, tires) for comprehensive analysis.
  
  ### Key Features and Technical Details
  
  - **External Process Interaction:** Uses *ghapi.cs* with *kernel32.dll* for memory access.
  - **Dynamic Memory Resolution:** *FindDMAAddy* handles shifting memory locations.
  - **Real-time Processing:** *RunShiftLogic* loop monitors and analyzes data.
  - **Configuration:** Loads settings from *Gears.ini* for adaptability.
  - **Error Handling:** Retries on memory read failures, ensuring stability.
  - **Multi-Threading:** *shiftThread* ensures efficient processing.
  - **User Interface:** Console displays status and allows car profile switching.
  
  ### Why this Approach?
  
  Direct memory manipulation offers the fastest data access, chosen over slower alternatives like keyboard simulation, demonstrating trade-off awareness and technical depth in Windows memory management.
  
  ### Overall Proficiency
  
  - Low-level system programming.
  - Real-time data analysis.
  - Robust error handling.
  - Configurable application design.
  
  A testament to tackling complex challenges with best practices, applicable beyond gaming to system utilities and real-time analysis tools.
    `
  };