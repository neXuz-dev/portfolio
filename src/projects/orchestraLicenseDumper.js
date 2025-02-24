export default {
  tags: ["C#", "Windows API", "Memory Analysis", "Reverse Engineering"], // Tags remain language-agnostic
  content: {
      en: {
          title: "Orchestra License Dumper",
          description: "Reverse-engineered tool for license data extraction from Orchestra software.",
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
      },
      fr: {
          title: "Extracteur de Licence Orchestra",
          description: "Outil rétro-conçu pour l'extraction de données de licence du logiciel Orchestra.",
          highlights: [
              "Résolution dynamique d'adresses mémoire",
              "Modélisation de la structure des données de licence",
              "Lecture de la mémoire du processus",
              "Prise en charge de la configuration par fichier INI"
          ],
          detailedDescription: `
Ce projet démontre une solide compréhension des principes de rétro-ingénierie et de l'interaction système de bas niveau en utilisant C#. L'objectif était d'extraire des clés de licence valides à partir d'une instance en cours d'exécution du logiciel de point de vente (POS) Orchestra, impliquant une immersion profonde dans la manipulation de la mémoire et l'introspection des processus.

### Technologies et techniques clés

- **C# :** Langage principal, tirant parti de .NET pour un développement robuste.
- **API Windows :** Utilisation extensive des fonctions de *kernel32.dll* (*OpenProcess*, *ReadProcessMemory*, *WriteProcessMemory*, *CreateToolhelp32Snapshot*) pour la manipulation des processus et l'accès à la mémoire.
- **Analyse de la mémoire :** Cible des adresses mémoire spécifiques avec l'arithmétique des pointeurs et la résolution de l'allocation dynamique de mémoire (DMA) via *FindDMAAddy*, ainsi que l'exploration de l'analyse des tableaux d'octets (AOB).
- **Introspection des processus :** Utilise *Process.GetProcessesByName* et *GetModuleBaseAddress* pour localiser et interagir avec le processus Orchestra.
- **Interprétation de la structure des données :** Définit une classe *Licenses.cs* reflétant la disposition de la mémoire, gérant les chaînes de longueur fixe et les formats binaires hérités.
- **Traitement des fichiers INI :** Fonction personnalisée pour l'analyse de la configuration.

### Pourquoi et comment

L'objectif était de récupérer les informations de licence en :
1. Se connectant au processus Orchestra et en obtenant un handle.
2. Localisant les données de licence via des adresses connues et la navigation par pointeur, probablement identifiées par des outils de débogage.
3. Lisant les octets bruts dans des variables C# structurées pour interprétation.

### Résultat

Récupère avec succès les clés de licence, démontrant une manipulation de la mémoire, une interaction avec les processus et une interprétation de la structure des données sûres, des compétences précieuses pour la recherche en sécurité, l'intégration de logiciels et la maintenance des systèmes hérités.
  `
      }
  }
};