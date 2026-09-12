// Finalise le build statique pour GitHub Pages.
//
// TanStack Start (mode `spa.enabled: true`, voir vite.config.ts) génère une
// coquille HTML pré-rendue sous .output/public/_shell.html. Ce script la
// duplique sous les deux noms que GitHub Pages doit trouver :
//   - index.html : servie pour "/"
//   - 404.html   : servie par GitHub Pages pour toute URL inconnue, ce qui
//                   permet au routeur client de prendre le relais (y compris
//                   pour afficher la vraie page "introuvable" de l'app).
// Il ajoute aussi .nojekyll, pour que GitHub Pages ne traite pas le dossier
// avec Jekyll (qui ignore par défaut certains fichiers/dossiers).
import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), ".output", "public");
const shell = join(publicDir, "_shell.html");

if (!existsSync(shell)) {
  console.error(
    `[finalize-static-build] ${shell} introuvable — le build TanStack Start a-t-il bien produit une coquille SPA ?`,
  );
  process.exit(1);
}

await copyFile(shell, join(publicDir, "index.html"));
await copyFile(shell, join(publicDir, "404.html"));
await writeFile(join(publicDir, ".nojekyll"), "");

// Lovable's preview validator expects a conventional `dist/` directory.
// Keep `.output/public/` as the GitHub Pages artifact and mirror the same
// static files into `dist/` so both deployment targets receive the site.
const distDir = join(process.cwd(), "dist");
await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });

console.log(
  "[finalize-static-build] site statique écrit dans .output/public/ et dist/",
);
