import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

// Config propre au projet Aika, sans dépendance à un paquet tiers.
// Reproduit fidèlement ce que faisait @lovable.dev/vite-tanstack-config pour
// ce projet (plugins TanStack Start / Tailwind v4 / alias "@" / React), en
// ciblant explicitly une sortie 100% statique pour GitHub Pages au lieu du
// preset Cloudflare par défaut de Lovable.
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    // Résout l'alias "@/*" -> "./src/*" défini dans tsconfig.json.
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Le site est un simple SPA (aucune donnée chargée côté serveur) :
      // on demande à TanStack Start de pré-rendre lui-même la coquille HTML
      // au moment du build, pour produire un site 100% statique.
      spa: { enabled: true },
      // Empêche d'importer par erreur du code réservé au serveur
      // (fichiers sous **/server/**, ou marqués "server-only") dans le
      // bundle client.
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    // Preset "node-server" (serveur Node classique) : c'est celui-ci — et
    // non le préset "static"/"github-pages" intégré à Nitro — qui produit un
    // build correct avec cette combinaison de versions (le crawler de
    // pré-rendu des présets statiques de Nitro renvoie des 404 sur ce
    // projet). Le serveur Node généré n'est jamais exécuté en production :
    // seul .output/public/ (complété par scripts/finalize-static-build.mjs
    // avec index.html, 404.html et .nojekyll) est déployé sur GitHub Pages.
    nitro({ preset: "node-server" }),
    viteReact(),
  ],
});
