export default {
  tags: ["Python", "Reverse Engineering", "Cryptography", "Binary Exploitation", "Ghidra", "z3"],
  content: {
      en: {
          title: "CTF Challenge Solvers & Research",
          description: "Original solvers, exploits, and writeups for reverse-engineering and cryptography CTF challenges.",
          highlights: [
              "From-scratch AES internals (S-box, GF(2⁸)) for cryptanalysis",
              "SIFA fault-injection attack against AES-128",
              "Binary reverse engineering with Ghidra and objdump",
              "Automated solving with z3 SMT, pycryptodome, raw sockets",
              "Detailed per-challenge research logs and writeups"
          ],
          detailedDescription: `
A personal Capture-the-Flag workspace of original solvers, exploits, and research writeups spanning reverse engineering and cryptography.

**Key Features:**

*   **Cryptanalysis:** From-scratch AES internals (S-box, GF(2⁸) arithmetic) used to mount a SIFA fault-injection attack against AES-128.
*   **Reverse Engineering:** Static and dynamic analysis with Ghidra and objdump — including solving a compiled Go maze binary.
*   **Automated Solving:** z3 SMT solving, pycryptodome, raw sockets, and multiprocessing to drive challenge servers.
*   **Research Logs:** Detailed per-challenge writeups documenting the full attack path.

**Technology Stack:**

*   **Language:** Python 3
*   **Tools:** Ghidra, objdump, z3, pycryptodome, Docker
*   **Domains:** Reverse engineering, fault-injection cryptanalysis, binary exploitation
`
      },
      fr: {
          title: "Solveurs & Recherche CTF",
          description: "Solveurs, exploits et writeups originaux pour des challenges CTF de rétro-ingénierie et de cryptographie.",
          highlights: [
              "Implémentation d'AES from scratch (S-box, GF(2⁸)) pour la cryptanalyse",
              "Attaque par injection de fautes SIFA contre AES-128",
              "Rétro-ingénierie de binaires avec Ghidra et objdump",
              "Résolution automatisée avec solveur z3, pycryptodome, sockets bas-niveau",
              "Notes de recherche et writeups détaillés par challenge"
          ],
          detailedDescription: `
Un espace de travail Capture-the-Flag composé de solveurs, d'exploits et de notes de recherche originaux, couvrant la rétro-ingénierie et la cryptographie.

**Fonctionnalités principales :**

*   **Cryptanalyse :** Implémentation d'AES from scratch (S-box, arithmétique GF(2⁸)) servant à monter une attaque par injection de fautes SIFA contre AES-128.
*   **Rétro-ingénierie :** Analyse statique et dynamique avec Ghidra et objdump — dont la résolution d'un binaire labyrinthe compilé en Go.
*   **Résolution automatisée :** Solveur SMT z3, pycryptodome, sockets bas-niveau et multiprocessing pour piloter les serveurs de challenge.
*   **Notes de recherche :** Writeups détaillés par challenge documentant tout le chemin d'attaque.

**Stack technique :**

*   **Langage :** Python 3
*   **Outils :** Ghidra, objdump, z3, pycryptodome, Docker
*   **Domaines :** Rétro-ingénierie, cryptanalyse par injection de fautes, exploitation de binaires
`
      }
  }
};
