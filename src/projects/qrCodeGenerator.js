export default {
  tags: ["AutoIt", "QRCreator", "Image Processing", "GUI Development"], // Tags remain language-agnostic
  content: {
      en: {
          title: "QRCode Generator",
          description: "A desktop tool for generating QR codes with customization options.",
          highlights: [
              "Customizable QR code generation",
              "Clipboard integration",
              "Image resizing functionality",
              "User-friendly GUI"
          ],
          detailedDescription: `
This AutoIt project develops a QRCode generator with a user-friendly GUI, showcasing GUI development, image manipulation, and system interaction skills.

### Features
- Generates QR codes in PNG/BMP with customizable settings (error correction, margins).
- Includes clipboard support, resizing, and robust error handling via @error.

### Technical Details
- Uses QRCreator.au3 and external DLLs for performance, with #RequireAdmin for system access.

### Motivation
Explores GUI and image processing in AutoIt, delivering a practical tool with production-quality code.
  `
      },
      fr: {
          title: "Générateur de QR Code",
          description: "Un outil de bureau pour générer des QR codes avec des options de personnalisation.",
          highlights: [
              "Génération de QR codes personnalisable",
              "Intégration du presse-papiers",
              "Fonctionnalité de redimensionnement d'image",
              "Interface graphique conviviale"
          ],
          detailedDescription: `
Ce projet AutoIt développe un générateur de QR codes avec une interface graphique conviviale, mettant en valeur les compétences en développement d'interface graphique, en manipulation d'images et en interaction système.

### Fonctionnalités
- Génère des QR codes en PNG/BMP avec des paramètres personnalisables (correction d'erreur, marges).
- Inclut la prise en charge du presse-papiers, le redimensionnement et une gestion des erreurs robuste via @error.

### Détails Techniques
- Utilise QRCreator.au3 et des DLL externes pour la performance, avec #RequireAdmin pour l'accès système.

### Motivation
Explore l'interface graphique et le traitement d'image dans AutoIt, offrant un outil pratique avec un code de qualité production.
  `
      }
  }
};