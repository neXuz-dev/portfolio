export default {
  tags: ["C#", ".NET 9", "Rust", "Reverse Engineering", "MCP", "Text-to-Speech", "Game Automation"],
  content: {
      en: {
          title: "RzAudioBuilds",
          description: "Polyglot (C#/Rust/Python) reverse-engineering and automation platform for Age of Empires IV, fronted by a neural-TTS build-order coach.",
          highlights: [
              "~29k lines across 4 languages (C#, Rust, Python/Jython, Lua) in a 4-layer architecture",
              "In-process Rust instrumentation DLL (~13k LOC) with heap-only hooking and anti-tamper handling",
              "Hand-rolled named-pipe cross-process RPC (~75 commands) bridging .NET to a server inside the game",
              "MCP server giving an LLM live control of the running game via its SCAR Lua VM",
              "Offline neural TTS (sherpa-onnx / Piper) syncing spoken cues to the match clock read from memory",
              "End-to-end RE toolchain: live-decrypts the game's .text, then Ghidra + Capstone map it"
          ],
          detailedDescription: `
What looks like an audio "build-order coach" is the front door to a multi-language Age of Empires IV reverse-engineering and automation platform spanning C#, Rust, Python/Jython, and Lua - a shipped TTS app, a custom in-process instrumentation DLL, a hand-rolled cross-process RPC, an LLM-facing MCP server, and a full Ghidra/Capstone reverse-engineering pipeline.

**The Platform (4-layer architecture):**

*   **TTS Coach (C# / WPF):** Converts an AoE4 build order into timed spoken cues that auto-fire in sync with the live match clock - read straight out of the game process via SIMD-accelerated AOB scanning, no API or overlay.
*   **SDK (C# / .NET 9):** The external client - DLL injector, cross-process memory reader, and named-pipe RPC client, with the wire protocol and SIMD scanning hand-rolled (zero NuGet dependencies).
*   **Rust bridge (~13k LOC):** A cdylib injected into the game that hosts the RPC server, does heap-only hooking, walks the VEH handler list and neutralizes integrity hooks, and clones/relocates functions to survive commercial anti-tamper.
*   **SCAR control:** Re-enters the engine's SCAR Lua VM safely on the sim thread (WndProc subclassing / vtable-clone hook) to read game state and drive the engine through Lua.

**Notable Engineering:**

*   **MCP server (RzScarMcp):** A from-scratch JSON-RPC server exposing ~10 tools so an LLM can inject SCAR Lua, query live game state, and inspect memory.
*   **Neural TTS pipeline:** sherpa-onnx running Piper VITS models via ONNX Runtime (3 bundled offline voices) plus Windows SAPI as a selectable engine; cues batch-synthesized and mixed via NAudio.
*   **RE toolchain:** Live-decrypts the game's runtime-only-decrypted .text section to disk, then Ghidra-headless + Capstone map functions, vtables, and the cost-charge gate - feeding version-resilient AOB signatures back into the SDK.

**Technology Stack:**

*   **Languages:** C# (.NET 9), Rust, Python 3, Jython, Lua
*   **Key tech:** WPF, NAudio, sherpa-onnx / Piper, Win32 P/Invoke, named-pipe RPC, MCP, Ghidra, Capstone
*   **Scale:** ~29,000 lines of hand-written source across ~109 files
`
      },
      fr: {
          title: "RzAudioBuilds",
          description: "Plateforme polyglotte (C#/Rust/Python) de rétro-ingénierie et d'automatisation pour Age of Empires IV, avec en façade un coach de build orders à synthèse vocale neuronale.",
          highlights: [
              "~29k lignes sur 4 langages (C#, Rust, Python/Jython, Lua) dans une architecture à 4 couches",
              "DLL d'instrumentation Rust in-process (~13k LOC) avec hooking heap-only et gestion anti-altération",
              "RPC inter-processus sur named pipe fait main (~75 commandes) reliant .NET à un serveur dans le jeu",
              "Serveur MCP donnant à un LLM le contrôle du jeu en cours via sa VM Lua SCAR",
              "TTS neuronal hors ligne (sherpa-onnx / Piper) synchronisant les repères au chrono lu en mémoire",
              "Chaîne RE complète : déchiffre le .text du jeu à chaud, puis le cartographie via Ghidra + Capstone"
          ],
          detailedDescription: `
Ce qui ressemble à un « coach » audio de build orders est en réalité la façade d'une plateforme multi-langages de rétro-ingénierie et d'automatisation pour Age of Empires IV, couvrant C#, Rust, Python/Jython et Lua - une app TTS livrée, une DLL d'instrumentation in-process, un RPC inter-processus fait main, un serveur MCP exposé aux LLM, et un pipeline complet de rétro-ingénierie Ghidra/Capstone.

**La plateforme (architecture à 4 couches) :**

*   **Coach TTS (C# / WPF) :** Transforme un build order AoE4 en repères vocaux minutés qui se déclenchent en synchro avec le chrono du match - lu directement dans le processus du jeu via un scan AOB accéléré SIMD, sans API ni overlay.
*   **SDK (C# / .NET 9) :** Le client externe - injecteur de DLL, lecteur mémoire inter-processus et client RPC named-pipe, avec protocole filaire et scan SIMD faits main (zéro dépendance NuGet).
*   **Pont Rust (~13k LOC) :** Un cdylib injecté dans le jeu qui héberge le serveur RPC, fait du hooking heap-only, parcourt la liste des handlers VEH et neutralise les hooks d'intégrité, et clone/relocalise des fonctions pour survivre à l'anti-altération commercial.
*   **Contrôle SCAR :** Réentre la VM Lua SCAR du moteur en sécurité sur le thread de simulation (subclassing WndProc / hook par clone de vtable) pour lire l'état du jeu et le piloter via Lua.

**Ingénierie notable :**

*   **Serveur MCP (RzScarMcp) :** Un serveur JSON-RPC fait de zéro exposant ~10 outils pour qu'un LLM puisse injecter du Lua SCAR, interroger l'état du jeu et inspecter la mémoire.
*   **Pipeline TTS neuronal :** sherpa-onnx exécutant des modèles Piper VITS via ONNX Runtime (3 voix hors ligne intégrées) plus Windows SAPI comme moteur sélectionnable ; repères synthétisés par lots et mixés via NAudio.
*   **Chaîne RE :** Déchiffre à chaud la section .text du jeu (déchiffrée uniquement à l'exécution) sur disque, puis Ghidra-headless + Capstone cartographient fonctions, vtables et le gate de débit de coût - réinjectant des signatures AOB résilientes aux patches dans le SDK.

**Stack technique :**

*   **Langages :** C# (.NET 9), Rust, Python 3, Jython, Lua
*   **Tech clés :** WPF, NAudio, sherpa-onnx / Piper, P/Invoke Win32, RPC named-pipe, MCP, Ghidra, Capstone
*   **Échelle :** ~29 000 lignes de source écrites à la main sur ~109 fichiers
`
      }
  }
};
