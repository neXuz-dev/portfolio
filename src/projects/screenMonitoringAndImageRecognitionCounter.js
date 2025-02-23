export default {
    title: "Screen Monitoring and Image Recognition Counter",
    description: "A C# tool for real-time screen monitoring and image detection.",
    tags: ["C#", "Emgu CV", "Image Processing", "File I/O"],
    highlights: [
      "Efficient screen capture implementation",
      "Template matching with Emgu CV",
      "Delayed counter logic for stability",
      "Robust file handling for persistence"
    ],
    detailedDescription: `
  This C# project demonstrates proficiency in image processing and real-time screen monitoring. It captures the screen, searches for a predefined image within the screenshot using Emgu CV (a .NET wrapper for OpenCV), and increments a counter stored in a text file if the image is not detected for a specified duration (five seconds). The project was undertaken to gain practical experience with computer vision concepts, specifically template matching, and showcases a clear understanding of file I/O operations for data persistence.
  
  ### How it Works
  
  1. **Initialization:** Loads a template image (*image.png*) and initializes a counter file (*counter.txt*) with robust error handling for missing files.
  2. **Screen Capture:** Uses *CaptureScreen()* with .NET graphics libraries for efficient primary display snapshots.
  3. **Image Matching:** Employs Emgu CV’s *MatchTemplate* with *CcoeffNormed* for robust template matching, effective even with lighting variations, using a 0.3 threshold.
  4. **Counter Logic:** Implements a *while(true)* loop with delayed counter increments to prevent rapid changes from minor screen flickers, showing careful timing consideration.
  5. **File Handling:** Manages *counter.txt* with graceful creation and updates for new or missing files.
  6. **Resource Management:** Disposes of screenshots promptly and uses *Thread.Sleep()* to minimize CPU usage, reflecting efficiency.
  
  ### Why it was Built
  
  The project serves as an effective showcase of implementing real-time image analysis, offering practical insights into computer vision applications like automated testing or monitoring systems, with a focus on resource efficiency and stability.
    `
  };