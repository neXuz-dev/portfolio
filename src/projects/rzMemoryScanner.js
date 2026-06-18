export default {
  tags: ["C#", ".NET 9", "Reverse Engineering", "Memory Manipulation", "Windows API", "AOB Scanning"],
  content: {
      en: {
          title: "RzMemoryScanner",
          description: "Standalone Windows memory scanner with exact, fuzzy, and wildcard AOB scans across any attachable process.",
          highlights: [
              "Cross-process scan/refine workflow: first scan + iterative next scan, 9 comparison modes, 11 value types",
              "Wildcard AOB signature scanning with a longest-concrete-run anchor optimizer",
              "Isolated out-of-process scan workers that stream results via a compact binary format",
              "PSS VA-clone snapshot scanning for consistent, low-impact reads of fragile targets",
              "Zero-copy span-based engine with chunk-boundary overlap and least-privilege handles",
              "Pure Win32 P/Invoke — no third-party dependencies"
          ],
          detailedDescription: `
A standalone Windows memory scanner, reader, and writer — a Cheat-Engine-style tool for live process analysis, built from scratch in C#/.NET 9 with only direct Win32 P/Invoke (no third-party libraries).

**Key Features:**

*   **Scan workflow:** Attach to any process, then first-scan and iterative next-scan with 9 comparison modes (exact, between, changed/unchanged, increased/decreased) across 11 value types — plus wildcard array-of-bytes patterns.
*   **AOB optimizer:** Picks and weights the longest concrete (non-wildcard) byte run as a search anchor, jumping through buffers with Span.IndexOf and only doing full masked comparison at anchor hits.
*   **Out-of-process workers:** Heavy first scans run in a re-spawned worker process (via a CLI flag), streaming candidates back through a versioned compact binary format — isolating risky scans from the UI.
*   **PSS snapshot scanning:** Reads a copy-on-write VA clone of the target (PssCaptureSnapshot/PssQuerySnapshot) for consistent, low-impact scanning of fragile or protected processes.

**Technology Stack:**

*   **Language:** C# (.NET 9, WinForms)
*   **Platform:** Win32 P/Invoke (OpenProcess, ReadProcessMemory, VirtualQueryEx, PSS API)
*   **Scale:** ~2,900 lines, zero third-party dependencies
`
      },
      fr: {
          title: "RzMemoryScanner",
          description: "Scanner mémoire Windows autonome avec scans exacts, flous et AOB à wildcards sur n'importe quel processus attachable.",
          highlights: [
              "Flux scan/affinage inter-processus : premier scan + next scan itératif, 9 modes de comparaison, 11 types",
              "Scan de signatures AOB à wildcards avec optimiseur d'ancrage sur le plus long segment concret",
              "Workers de scan isolés en processus séparé, résultats streamés via un format binaire compact",
              "Scan sur clone VA PSS pour des lectures cohérentes et à faible impact des cibles fragiles",
              "Moteur span zéro-copie avec recouvrement aux frontières de blocs et handles à moindre privilège",
              "P/Invoke Win32 pur — aucune dépendance tierce"
          ],
          detailedDescription: `
Un scanner, lecteur et écrivain de mémoire Windows autonome — un outil d'analyse de processus en direct de style Cheat Engine, conçu de zéro en C#/.NET 9 avec uniquement du P/Invoke Win32 direct (aucune bibliothèque tierce).

**Fonctionnalités principales :**

*   **Flux de scan :** S'attache à n'importe quel processus, puis premier scan et next scan itératif avec 9 modes de comparaison (exact, entre, changé/inchangé, augmenté/diminué) sur 11 types de valeurs — plus les motifs array-of-bytes à wildcards.
*   **Optimiseur AOB :** Sélectionne et pondère le plus long segment d'octets concret (non-wildcard) comme ancre, parcourt les buffers via Span.IndexOf et ne fait la comparaison masquée complète qu'aux correspondances d'ancre.
*   **Workers hors-processus :** Les premiers scans lourds s'exécutent dans un processus worker re-lancé (via un flag CLI), streamant les candidats via un format binaire compact versionné — isolant les scans risqués de l'UI.
*   **Scan par snapshot PSS :** Lit un clone VA copy-on-write de la cible (PssCaptureSnapshot/PssQuerySnapshot) pour un scan cohérent et à faible impact des processus fragiles ou protégés.

**Stack technique :**

*   **Langage :** C# (.NET 9, WinForms)
*   **Plateforme :** P/Invoke Win32 (OpenProcess, ReadProcessMemory, VirtualQueryEx, API PSS)
*   **Échelle :** ~2 900 lignes, zéro dépendance tierce
`
      }
  }
};
