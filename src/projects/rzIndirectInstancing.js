export default {
  tags: ["Unreal Engine 5", "C++", "HLSL", "GPU Indirect Instancing", "Custom Vertex Factory", "Runtime Nanite"],
  content: {
      en: {
          title: "RzIndirectInstancing",
          description: "A UE5 GPU-driven indirect instancing pipeline - a custom GPU-Scene vertex factory plus a from-scratch runtime Nanite builder.",
          highlights: [
              "Custom GPU-Scene-aware FVertexFactory (PrimitiveId stream, manual vertex fetch, LWC transforms)",
              "RDG compute pipeline that generates, frustum-culls, and stream-compacts instances on the GPU",
              "Fully indirect DrawIndexedIndirect - the CPU never knows the instance count",
              "GPU-generated instances cast real shadows and support ray tracing and full PBR materials",
              "From-scratch runtime Nanite: QEM simplification, DAG cluster-LOD, live Nanite::FResources",
              "Cube-sphere quadtree planet with screen-space-error LOD and memory-budget streaming"
          ],
          detailedDescription: `
A UE5 rendering plugin implementing a GPU-driven indirect instancing pipeline integrated into the engine's real mesh-drawing path - rare, deep renderer work that keeps full materials, shadows, and ray tracing.

**Key Features:**

*   **Custom vertex factory:** A GPU-Scene-compatible FVertexFactory with the PrimitiveId vertex stream, manual SRV vertex fetch, and LWC double-precision world transforms - compiled for main, depth/shadow, and ray-hit-group permutations.
*   **GPU instance pipeline:** RDG compute shaders generate instances (3D grid, InterlockedAdd), perform per-view 5-plane frustum culling, and stream-compact survivors directly into the draw buffer.
*   **Indirect draw:** The instance count is produced by the GPU into a draw-indirect args buffer and issued via DrawIndexedIndirect - the CPU does zero per-instance work.
*   **Shadows the hard way:** The same compute culling runs per shadow-depth view (with pre-shadow-translation plane fix-up), so GPU-generated instances cast correct shadows.
*   **Runtime Nanite:** A from-scratch builder - Garland-Heckbert QEM edge-collapse simplification, DAG cluster-LOD reduction, engine-exact GPU page bit-packing - generates live Nanite::FResources on background threads (stock UE5 only builds Nanite offline at cook time). It powers a cube-sphere quadtree planet.

**Technology Stack:**

*   **Languages:** C++ (~15k lines) + HLSL (.usf/.ush)
*   **Tech:** RHI/RDG, GPU Scene, compute culling, custom FVertexFactory, runtime Nanite
*   **Target:** UE 5.5/5.6-era source build; SM5+ with a ray-tracing permutation; available in the store
`
      },
      fr: {
          title: "RzIndirectInstancing",
          description: "Un pipeline d'instanciation indirecte GPU-driven pour UE5 - un vertex factory GPU-Scene custom plus un builder Nanite runtime from-scratch.",
          highlights: [
              "FVertexFactory custom compatible GPU-Scene (flux PrimitiveId, fetch manuel, transforms LWC)",
              "Pipeline compute RDG qui génère, frustum-cull et compacte les instances sur le GPU",
              "DrawIndexedIndirect totalement indirect - le CPU ne connaît jamais le nombre d'instances",
              "Les instances générées par GPU projettent de vraies ombres et supportent ray tracing et PBR",
              "Nanite runtime from-scratch : simplification QEM, cluster-LOD DAG, Nanite::FResources live",
              "Planète quadtree cube-sphere avec LOD par erreur écran et streaming à budget mémoire"
          ],
          detailedDescription: `
Un plugin de rendu UE5 implémentant un pipeline d'instanciation indirecte GPU-driven intégré au vrai chemin de dessin du moteur - du travail renderer rare et profond qui conserve matériaux, ombres et ray tracing complets.

**Fonctionnalités principales :**

*   **Vertex factory custom :** Un FVertexFactory compatible GPU-Scene avec le flux PrimitiveId, fetch SRV manuel et transforms monde double-précision LWC - compilé pour les permutations main, depth/shadow et ray-hit-group.
*   **Pipeline d'instances GPU :** Des compute shaders RDG génèrent les instances (grille 3D, InterlockedAdd), effectuent un frustum-culling 5 plans par vue, et compactent les survivants directement dans le buffer de dessin.
*   **Dessin indirect :** Le nombre d'instances est produit par le GPU dans un buffer draw-indirect et émis via DrawIndexedIndirect - le CPU ne fait aucun travail par instance.
*   **Les ombres, le cas difficile :** Le même culling compute s'exécute par vue de shadow-depth (avec correction de plan pre-shadow-translation), donc les instances GPU projettent des ombres correctes.
*   **Nanite runtime :** Un builder from-scratch - simplification QEM par edge-collapse Garland-Heckbert, réduction cluster-LOD DAG, bit-packing de pages GPU exact-moteur - génère des Nanite::FResources live sur threads de fond (UE5 stock ne construit Nanite qu'offline au cook). Il alimente une planète quadtree cube-sphere.

**Stack technique :**

*   **Langages :** C++ (~15k lignes) + HLSL (.usf/.ush)
*   **Tech :** RHI/RDG, GPU Scene, culling compute, FVertexFactory custom, Nanite runtime
*   **Cible :** build source ère UE 5.5/5.6 ; SM5+ avec permutation ray-tracing ; disponible dans la boutique
`
      }
  }
};
