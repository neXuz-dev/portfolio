export default {
    title: "Aimlab Performance Analyzer",
    description: "Tool for studying aim training performance with pixel detection in Aimlab.",
    tags: ["AutoIt", "Pixel Detection", "FastFind.dll", "Performance Optimization"],
    highlights: [
      "High-speed screen capture with FastFind64.dll",
      "Precise pixel color detection for targeting",
      "Low-level mouse control via user32.dll",
      "Dynamic configuration through INI files"
    ],
    detailedDescription: `
  This project showcases my proficiency in automation and low-level system interaction, demonstrating an ability to create efficient and precise software tools. It was primarily a learning exercise to explore advanced techniques in image recognition and process control within the Aimlab aim training software, with core technologies applicable beyond gaming.
  
  ### What it Does
  
  The "Pix_FF.au3" script analyzes performance in Aimlab by:
  
  1. **Rapid Screen Capture and Analysis:** Leveraging FastFind64.dll for extremely fast screen captures of defined regions, significantly outperforming standard methods in speed and resource efficiency, highlighting performance optimization skills.
  2. **Pixel-Perfect Color Detection:** Identifying specific target colors (e.g., center dot) with tolerance for shade variations, showing advanced visual data handling relevant to real-world applications.
  3. **Precise Mouse Control:** Simulating mouse movements and clicks using low-level *mouse_event* calls (user32.dll) for maximum speed and accuracy, bypassing slower alternatives.
  4. **Dynamic Configuration:** Managing settings like target colors and regions via *config.ini*, separating configuration from logic for adaptability.
  5. **Debug UI:** Featuring a simple GUI for control and real-time debugging information.
  
  ### Why it’s Valuable (Beyond Gaming)
  
  The principles demonstrated are transferable to:
  
  - **Robotic Process Automation (RPA):** Visual cue-based interaction with legacy systems or applications without APIs.
  - **Quality Assurance/Testing:** Automated UI verification for rendering accuracy.
  - **Image Processing:** Basic techniques like snapshotting and color filtering.
  - **Accessibility Software:** Precise control and visual analysis for assistive tools.
  
  ### How it’s Built
  
  - **Language:** AutoIt with a custom C/C++ DLL (FastFind64.dll) for performance-critical tasks, chosen for ease of Windows API interaction and rapid prototyping.
  - **Key Libraries/APIs:**
    - *FastFind64.dll*: Core efficiency for screen capture and pixel search.
    - *User32.dll*: Low-level mouse control.
    - AutoIt’s built-in functions for INI handling and GUI creation.
  
  ### Key Takeaways
  
  - **Performance Focus:** Prioritizing efficiency with custom DLLs and low-level calls.
  - **System-Level Understanding:** Comfort with Windows API and system operations.
  - **Problem-Solving:** Breaking down complex visual tasks into components.
  - **Adaptability:** Configurable design for maintainability.
  
  This project exemplifies my ability to combine automation with system-level programming, offering insights into versatile software development challenges.
    `
  };