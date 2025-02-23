export default {
    title: "DALL-E Mini Discord Bot",
    description: "A bot for generating images from text prompts using DALL-E Mini.",
    tags: ["Python", "Discord.py", "aiohttp", "Image Manipulation"],
    highlights: [
      "Asynchronous API requests",
      "Image collage creation with Pillow",
      "Sharding for scalability",
      "Robust error handling"
    ],
    detailedDescription: `
  This project showcases proficiency in Python, asynchronous programming, and API integration by creating a Discord bot that leverages DALL-E Mini for image generation. Users provide text prompts, receiving unique AI-generated images, demonstrating engaging application development.
  
  ### Key Technologies & Concepts
  
  - **Python 3.10:** Core language for versatility.
  - **discord.py and discord.js:** Event-driven bot framework with sharding for scalability.
  - **aiohttp:** Asynchronous HTTP requests for efficiency.
  - **Asynchronous Programming:** *asyncio* ensures responsiveness.
  - **API Integration:** Connects to Hugging Face’s DALL-E Mini API.
  - **Image Manipulation:** *Pillow* creates labeled collages from base64 images.
  - **Configuration:** *PyYAML* manages settings securely.
  
  ### Functionality
  
  - Validates prompts, sends async API requests, decodes images, creates collages, and cleans up temporary files, with robust exception handling.
  
  ### Why Built
  
  To deepen understanding of asynchronous programming and API integration, delivering a fun, functional tool at the intersection of AI and user interaction, adapting to evolving APIs for valuable problem-solving experience.
    `
  };