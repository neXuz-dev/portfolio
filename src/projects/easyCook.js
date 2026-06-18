export default {
  tags: ["Unreal Engine 5", "C++", "Editor Tooling", "Cooking Pipeline", "Asset Registry", "Build Tooling"],
  content: {
      en: {
          title: "EasyCook",
          description: "A UE5 editor plugin that eliminates 'asset missing from packaged build' cook failures by finding hidden references and force-injecting them into the cook.",
          highlights: [
              "Cook-time ModifyCook injection with a natural-closure filter - a measured 51 GB to 40 GB cook reduction",
              "Five reference scanners: C++ regex, Blueprint graph walk, CDO reflection, data strings, AR closure BFS",
              "In-place binary .uasset patching of editor-only-import flags without loading the UObject",
              "Crash-resilient out-of-process scanner that checkpoints and auto-relaunches past fatal assets",
              "Niagara parent-emitter inlining so VFX survive packaging"
          ],
          detailedDescription: `
A UE5 editor build-tooling plugin that fixes the silent "asset missing from the packaged build" class of failures - UE only cooks assets it can statically trace, so anything referenced by a runtime string path or data-table string gets dropped.

**Key Features:**

*   **Cook-time injection:** A natural-closure ModifyCook delegate force-includes the full dependency closure of hidden references while skipping orphans and World-Partition map trees - a measured 51 GB to 40 GB cook reduction.
*   **Five scanners:** Regex over C++ source, Blueprint graph walks, CDO reflection over nested containers and components, data-content string harvesting, and an asset-registry dependency-closure BFS.
*   **Binary patching:** Parses FPackageFileSummary and flips exact bytes of editor-only-import flags in place - engineered around a SavePackage crash at scale.
*   **Crash resilience:** Spawns an isolated -nullrhi child commandlet, checkpoints each asset index, and auto-relaunches past any asset that fatally crashes the loader, with flat-file IPC.

**Technology Stack:**

*   **Language:** C++ (UE 5.7, 2 modules)
*   **Tech:** AssetRegistry/FPackageReader, UnrealEd, Slate/Blutility editor UI, Niagara
*   **Scale:** ~4,100 lines
`
      },
      fr: {
          title: "EasyCook",
          description: "Un plugin éditeur UE5 qui élimine les échecs de cook 'asset manquant du build packagé' en trouvant les références cachées et en les injectant dans le cook.",
          highlights: [
              "Injection ModifyCook au cook avec filtre de fermeture naturelle - réduction mesurée de 51 Go à 40 Go",
              "Cinq scanners de références : regex C++, parcours de graphe Blueprint, réflexion CDO, chaînes data, BFS AR",
              "Patch binaire in-place des flags d'import éditeur-only dans le .uasset sans charger l'UObject",
              "Scanner hors-processus résilient aux crashes qui checkpoint et relance après les assets fatals",
              "Inlining des émetteurs parents Niagara pour que les VFX survivent au packaging"
          ],
          detailedDescription: `
Un plugin d'outillage de build éditeur UE5 qui corrige la classe d'échecs silencieux "asset manquant du build packagé" - UE ne cook que les assets qu'il peut tracer statiquement, donc tout ce qui est référencé par un chemin string runtime ou une string de data-table est perdu.

**Fonctionnalités principales :**

*   **Injection au cook :** Un délégué ModifyCook à fermeture naturelle force l'inclusion de la fermeture de dépendances complète des références cachées tout en sautant les orphelins et les arbres de map World-Partition - réduction mesurée de 51 Go à 40 Go.
*   **Cinq scanners :** Regex sur source C++, parcours de graphes Blueprint, réflexion CDO sur conteneurs et composants imbriqués, collecte de chaînes data, et un BFS de fermeture de dépendances de l'asset registry.
*   **Patch binaire :** Parse le FPackageFileSummary et inverse les octets exacts des flags d'import éditeur-only in-place - conçu autour d'un crash de SavePackage à grande échelle.
*   **Résilience aux crashes :** Lance un commandlet enfant isolé -nullrhi, checkpoint chaque index d'asset, et relance après tout asset qui fait planter le loader, avec IPC sur fichier plat.

**Stack technique :**

*   **Langage :** C++ (UE 5.7, 2 modules)
*   **Tech :** AssetRegistry/FPackageReader, UnrealEd, UI éditeur Slate/Blutility, Niagara
*   **Échelle :** ~4 100 lignes
`
      }
  }
};
