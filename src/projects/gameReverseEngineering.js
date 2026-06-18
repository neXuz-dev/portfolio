export default {
  tags: ["C++", "C#", "ASM", "Cheat Engine", "Reverse Engineering", "Memory Manipulation"],
  bundledCount: 16,
  content: {
      en: {
          title: "Game Reverse-Engineering & Memory Analysis",
          description: "A collection of 16 tools that reverse-engineer game internals - reading process memory, mapping structures, building overlays, and decoding mechanics across many titles.",
          highlights: [
              "Memory & data readers: Rocket League, Path of Exile, RLTool, Wo Long (AOB scans, pointer chains)",
              "Cheat Engine + assembly mechanics studies: Genshin Impact, Ninja Gaiden 2, Wo Long, generic game mechanics",
              "Racing gear/shift analyzers: Assetto Corsa, Forza Horizon 4 & 5, Test Drive Unlimited (the lineage behind FH6 GearAI)",
              "Real-time data overlays: RzOverlay (DirectX) and a Remnant ESP overlay (SharpDX)",
              "Core techniques: ReadProcessMemory, pointer-chain resolution, AOB signatures, x86/x64 ASM, overlay rendering"
          ],
          detailedDescription: `
A collection of 16 reverse-engineering and memory-analysis tools built across many games - the recurring theme being reading and decoding live game state from process memory.

**Memory & data readers:**

*   **Rocket League Memory Analyzer** (C++/ASM) - reverse-engineered RL's object model.
*   **Path of Exile Data Monitor**, **RLTool Gameplay Analyzer**, **Wo Long Interaction Analyzer** (C#) - live memory reads and input simulation.

**Cheat Engine + assembly studies:**

*   **Genshin Impact Memory Analyzer**, **Ninja Gaiden 2 Mechanics Analyzer**, **Wo Long Cheat Table Analyzer**, **Reverse Engineering Game Mechanics** - cheat-table construction and assembly-level mechanics analysis.

**Racing gear & shift analyzers:**

*   **Assetto Corsa Smart Shift Optimizer**, **Forza Horizon 5 GearAI**, **Forza Horizon 4 Gear Analyzer**, **Test Drive Unlimited Shift Analyzer** - reading live gearing/engine tables to compute optimal shift points. These precursors led to the standalone FH6 GearAI.

**Overlays & misc RE:**

*   **RzOverlay Game Data Visualizer** (DirectX), **Remnant ESP Overlay** (SharpDX), **Construct 3 Game Timer RE**, **Sloop Auto-Sail Mechanics Study** (OCR).

**Technology Stack:** C++, C#, x86/x64 assembly, Cheat Engine, KDMemory, DirectX/SharpDX, Win32.
`
      },
      fr: {
          title: "Rétro-Ingénierie & Analyse Mémoire de Jeux",
          description: "Une collection de 16 outils qui rétro-conçoivent les internes de jeux - lecture de la mémoire processus, cartographie de structures, overlays et décodage de mécaniques sur de nombreux titres.",
          highlights: [
              "Lecteurs mémoire & data : Rocket League, Path of Exile, RLTool, Wo Long (scans AOB, chaînes de pointeurs)",
              "Études Cheat Engine + assembleur : Genshin Impact, Ninja Gaiden 2, Wo Long, mécaniques génériques",
              "Analyseurs de boîte/passage racing : Assetto Corsa, Forza Horizon 4 & 5, Test Drive Unlimited (la lignée derrière FH6 GearAI)",
              "Overlays de données temps réel : RzOverlay (DirectX) et un overlay ESP Remnant (SharpDX)",
              "Techniques clés : ReadProcessMemory, résolution de chaînes de pointeurs, signatures AOB, ASM x86/x64, rendu d'overlay"
          ],
          detailedDescription: `
Une collection de 16 outils de rétro-ingénierie et d'analyse mémoire construits sur de nombreux jeux - le thème récurrent étant la lecture et le décodage de l'état de jeu en direct depuis la mémoire processus.

**Lecteurs mémoire & data :**

*   **Rocket League Memory Analyzer** (C++/ASM) - rétro-ingénierie du modèle d'objets de RL.
*   **Path of Exile Data Monitor**, **RLTool Gameplay Analyzer**, **Wo Long Interaction Analyzer** (C#) - lectures mémoire en direct et simulation d'entrées.

**Études Cheat Engine + assembleur :**

*   **Genshin Impact Memory Analyzer**, **Ninja Gaiden 2 Mechanics Analyzer**, **Wo Long Cheat Table Analyzer**, **Reverse Engineering Game Mechanics** - construction de cheat tables et analyse de mécaniques au niveau assembleur.

**Analyseurs de boîte & passage racing :**

*   **Assetto Corsa Smart Shift Optimizer**, **Forza Horizon 5 GearAI**, **Forza Horizon 4 Gear Analyzer**, **Test Drive Unlimited Shift Analyzer** - lecture des tables de rapports/moteur en direct pour calculer les points de passage optimaux. Ces précurseurs ont mené au FH6 GearAI autonome.

**Overlays & RE divers :**

*   **RzOverlay Game Data Visualizer** (DirectX), **Remnant ESP Overlay** (SharpDX), **Construct 3 Game Timer RE**, **Sloop Auto-Sail Mechanics Study** (OCR).

**Stack technique :** C++, C#, assembleur x86/x64, Cheat Engine, KDMemory, DirectX/SharpDX, Win32.
`
      }
  }
};
