export default {
  tags: ["C#", ".NET 9", "Reverse Engineering", "Memory Manipulation", "ASM", "Anti-Tamper", "Ghidra"],
  content: {
      en: {
          title: "FH6 GearAI",
          description: "Real-time driving-assist suite for Forza Horizon 6, built by reverse-engineering the game's live memory, physics engine, and anti-tamper protection.",
          highlights: [
              "AOB-scanned pointer chains resolve the live player vehicle, disambiguated from the AI grid",
              "Mapped the full vehicle control block: gearing tables, torque curve, final drive, per-wheel blocks",
              "Reverse-engineered the physics LCP constraint solver to locate per-wheel brake authority",
              "Hand-assembled an x64 code cave (emitted from C#) that runs every physics substep for in-engine ABS",
              "Defeated the anti-tamper stack — 7 integrity checks + self-terminate guard — via signature byte patches",
              "Kernel-level write tracing via a custom pre-OS UEFI DBVM bootloader (AMD SVM/NPT)",
              "PSS VA-clone safe-scan layer (atop a Cheat Engine fork) to mass-read anti-tamper memory without crashing the game"
          ],
          detailedDescription: `
A real-time driving-assist suite for Forza Horizon 6, built by reverse-engineering the game's live process — memory layout, physics engine, and anti-tamper protection. It is the next iteration of the FH4/FH5 GearAI lineage, but a major step up: from reading memory to injecting custom machine code into the game's physics solver.

**Reverse Engineering:**

*   **Player-vehicle resolver:** Three code signatures (array-of-bytes) plus RIP-relative resolution walk a dynamic pointer chain to the live player vehicle, disambiguating the human driver from the AI race grid with a physics fingerprint, SQLite ordinal match, and chassis-velocity liveness scoring.
*   **Control-block mapping:** The full vehicle struct mapped offset by offset — per-gear ratio/shift tables, engine torque curve, final-drive variants, throttle/brake/steer inputs, four wheel angular-velocity blocks, and tire radii.
*   **Physics solver:** Reverse-engineered the LCP (linear-complementarity) constraint solver and identified per-wheel brake authority as the longitudinal impulse bound consumed inside the per-wheel substep loop.
*   **Anti-tamper:** Located and neutralized the game's protection stack — a CRC pointer table, a value-encryption routine, seven integrity checks, and a self-terminate guard — with signature-matched byte patches.
*   **Safe-scan tooling:** A PSS VA-clone snapshot scanner — an original subsystem built atop a Cheat Engine fork — reads the game's memory in bulk without tripping its anti-tamper, surfacing the offsets the suite depends on.

**Advanced Logic:**

*   **In-engine ABS:** A hand-assembled x64 code cave, emitted byte-by-byte from C#, runs every physics substep to hold each wheel at peak-grip slip (release-before-lock) — validated at a ~2.3 s tarmac 0-200-0 stop with zero wheel lock.
*   **Optimal shift AI:** Exact upshift/downshift speeds derived from rotational dynamics off the live gearing and engine tables, with edge cases for rotaries, engine swaps, and microcars.
*   **Anti-tamper heartbeat:** A jittered state machine cycles patches in and out under full thread suspension and reconstructs original bytes from the on-disk PE image — deferred while braking so the resident ABS hook is never dropped.
*   **Kernel tracing:** When user-mode debugging crashed the game, built an AMD SVM/NPT write-tracer and a custom pre-OS UEFI DBVM bootloader.

**Technology Stack:**

*   **Language:** C# (.NET 9, WinForms) with runtime-generated x64 machine code
*   **Tools:** Ghidra (headless), Cheat Engine, DBVM, custom memory scanners
*   **Scale:** ~28,000 lines of C# plus a ~300 KB reverse-engineering lab notebook
`
      },
      fr: {
          title: "FH6 GearAI",
          description: "Suite d'aides à la conduite temps réel pour Forza Horizon 6, bâtie en rétro-concevant la mémoire, le moteur physique et la protection anti-altération du jeu.",
          highlights: [
              "Chaînes de pointeurs scannées par AOB résolvant le véhicule joueur, distingué de la grille d'IA",
              "Cartographie complète du bloc de contrôle : boîtes de vitesses, courbe de couple, pont, blocs par roue",
              "Rétro-ingénierie du solveur de contraintes LCP pour localiser l'autorité de freinage par roue",
              "Code cave x64 assemblé à la main (émis depuis C#) exécuté à chaque sous-pas physique pour un ABS in-engine",
              "Contournement de l'anti-altération — 7 contrôles d'intégrité + garde d'auto-terminaison — par patches de signature",
              "Traçage des écritures au niveau noyau via un bootloader UEFI DBVM pré-OS sur mesure (AMD SVM/NPT)",
              "Couche de safe-scan par clone VA PSS (sur un fork de Cheat Engine) pour lire en masse la mémoire anti-altération sans crash"
          ],
          detailedDescription: `
Une suite d'aides à la conduite temps réel pour Forza Horizon 6, bâtie en rétro-concevant le processus vivant du jeu — disposition mémoire, moteur physique et protection anti-altération. C'est l'itération suivante de la lignée GearAI FH4/FH5, mais un saut majeur : passer de la lecture de la mémoire à l'injection de code machine dans le solveur physique du jeu.

**Rétro-ingénierie :**

*   **Résolveur de véhicule joueur :** Trois signatures de code (array-of-bytes) plus une résolution RIP-relative parcourent une chaîne de pointeurs dynamique jusqu'au véhicule joueur, le distinguant de la grille d'IA via une empreinte physique, une correspondance ordinale SQLite et un scoring de vivacité par vélocité du châssis.
*   **Cartographie du bloc de contrôle :** La structure complète du véhicule cartographiée offset par offset — tables de rapports/passages par vitesse, courbe de couple moteur, variantes de pont, entrées accélérateur/frein/direction, quatre blocs de vitesse angulaire des roues et rayons de pneus.
*   **Solveur physique :** Rétro-ingénierie du solveur de contraintes LCP (linear-complementarity) et identification de l'autorité de freinage par roue comme la borne d'impulsion longitudinale consommée dans la boucle de sous-pas par roue.
*   **Anti-altération :** Localisation et neutralisation de la pile de protection du jeu — table de pointeurs CRC, routine de chiffrement de valeurs, sept contrôles d'intégrité et garde d'auto-terminaison — par patches d'octets de signature.
*   **Outillage safe-scan :** Un scanner par snapshot clone VA PSS — un sous-système original bâti sur un fork de Cheat Engine — lit la mémoire du jeu en masse sans déclencher son anti-altération, révélant les offsets dont dépend la suite.

**Logique avancée :**

*   **ABS in-engine :** Un code cave x64 assemblé à la main, émis octet par octet depuis C#, s'exécute à chaque sous-pas physique pour maintenir chaque roue au glissement de grip maximal (release-before-lock) — validé sur un arrêt 0-200-0 sur asphalte en ~2,3 s sans aucun blocage.
*   **IA de passage optimal :** Vitesses exactes de montée/descente de rapport dérivées de la dynamique rotationnelle à partir des tables vivantes, avec gestion des cas limites (rotatifs, swaps moteur, micro-voitures).
*   **Heartbeat anti-altération :** Une machine à états jittée cycle les patches sous suspension complète des threads et reconstruit les octets originaux depuis l'image PE sur disque — différé pendant le freinage pour que le hook ABS résident ne soit jamais retiré.
*   **Traçage noyau :** Lorsque le débogage user-mode faisait planter le jeu, construction d'un traceur d'écritures AMD SVM/NPT et d'un bootloader UEFI DBVM pré-OS sur mesure.

**Stack technique :**

*   **Langage :** C# (.NET 9, WinForms) avec code machine x64 généré à l'exécution
*   **Outils :** Ghidra (headless), Cheat Engine, DBVM, scanners mémoire maison
*   **Échelle :** ~28 000 lignes de C# plus un carnet de laboratoire de rétro-ingénierie de ~300 Ko
`
      }
  }
};
