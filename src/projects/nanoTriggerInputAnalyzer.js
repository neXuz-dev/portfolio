export default {
  tags: ["C++", "Windows API", "Raw Input", "Device Handling"],  // Tags remain language-agnostic
  content: {
      en: {
          title: "NanoTrigger Input Analyzer",
          description: "A C++ tool for low-level input analysis using the Windows Raw Input API.",
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
      },
      fr: {
          title: "Analyseur d'Entrée NanoTrigger",
          description: "Un outil C++ pour l'analyse d'entrée de bas niveau utilisant l'API Raw Input de Windows.",
          highlights: [
              "Intégration de l'API Raw Input",
              "Énumération et identification des périphériques",
              "Analyse des données de la manette (DualShock 4)",
              "Implémentation d'une fenêtre de messages uniquement"
          ],
          detailedDescription: `
NanoTrigger est une application C++ robuste démontrant une gestion avancée des entrées à l'aide de l'API Raw Input de Windows. Ce projet met en valeur une compréhension approfondie de la programmation système de bas niveau, en s'interfaçant directement avec le matériel au-delà des bibliothèques standard, en se concentrant sur la capture et l'analyse méticuleuses des données d'entrée brutes provenant de périphériques tels que les claviers, les souris et la manette PlayStation 4 DualShock 4.

### Motivation et objectif

L'objectif était d'acquérir une expérience pratique et approfondie de l'API Raw Input, en décodant les flux d'octets bruts des périphériques d'entrée, en particulier la DualShock 4, afin de comprendre les pressions sur les boutons, les mouvements du joystick et les interactions du pavé tactile au niveau le plus bas, fournissant des informations précieuses pour les périphériques d'entrée personnalisés ou les applications de contrôle d'entrée précises.

### Principales caractéristiques et points forts techniques

- **Maîtrise de l'API Raw Input :** Utilise *RegisterRawInputDevices*, *GetRawInputDeviceList* et *GetRawInputData* pour une interaction matérielle directe.
- **Énumération des périphériques :** Répertorie les périphériques connectés avec les ID de fournisseur/produit et les noms, démontrant une expertise en gestion des périphériques.
- **Focus sur la manette :** Analyse les données HID de la DualShock 4, identifiant les octets spécifiques aux commandes grâce à des séquences de test.
- **Suivi de l'état des entrées :** Surveille les changements dans les données brutes pour mapper les entrées avec précision.
- **Fenêtre de messages uniquement :** Implémente une fenêtre cachée pour le traitement en arrière-plan, démontrant la gestion des messages Windows.
- **Gestion des erreurs :** Des vérifications robustes des appels d'API garantissent la fiabilité.
- **Bonnes pratiques C++ :** Utilise *std::vector*, évite la gestion manuelle de la mémoire et gère correctement les chaînes larges.

### Pourquoi c'est important

NanoTrigger illustre un engagement à comprendre les fondamentaux de l'interaction informatique, allant au-delà de l'utilisation de base pour comprendre le fonctionnement des entrées à un niveau bas. Les compétences (programmation de bas niveau, interaction avec l'API, analyse des données) sont hautement transférables au développement de jeux, à l'intégration de matériel personnalisé et aux utilitaires système.
  `
      }
  }
};