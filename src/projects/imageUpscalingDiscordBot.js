export default {
    title: "Image Upscaling Discord Bot",
    description: "A Python bot for enhancing image resolution using ESRGAN models.",
    tags: ["Python", "Discord.py", "ESRGAN", "Image Processing"],
    highlights: [
      "Multiple ESRGAN model support",
      "Fuzzy string matching for usability",
      "Asynchronous image processing",
      "Robust permission system"
    ],
    detailedDescription: `
  This project demonstrates proficiency in Python, deep learning, and API integration by creating a Discord bot that performs AI-powered image upscaling with ESRGAN models, offering a user-friendly application of complex technologies.
  
  ### Key Features & Technologies
  
  - **Core Functionality:** Uploads images via attachments or URLs, upscales with user-selected ESRGAN models, and returns results.
  - **ESRGAN Integration:** Supports multiple pre-trained models with safe unpickling to prevent code execution risks.
  - **Model Management:** Uses *fuzzywuzzy* for flexible model selection, interpolating and combining models dynamically.
  - **Discord API:** Built with *discord.py* for interactive bot functionality.
  - **Image Processing:** Employs *OpenCV* for resizing, conversions, and montages, with async operations for responsiveness.
  - **Permissions:** Advanced system restricts access with moderator commands.
  
  ### Technical Highlights
  
  - **Fuzzy Selection:** *build_aliases* and *fuzzy_load_model* enhance usability with partial name matching.
  - **Model Interpolation:** *parse_models* and *interpolate_models* combine model weights on-the-fly.
  - **Modular Architecture:** *RzImageProcessing.py* separates commands and handlers for maintainability.
  - **Efficient Upscaling:** Handles transparency and large images with *auto_split_upscale* to manage memory.
  
  ### Overall
  
  Combines multiple technologies into a practical, user-friendly tool, showcasing strong Python skills, deep learning application, and API integration expertise.
    `
  };