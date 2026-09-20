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
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Routes qui doivent répondre avec un vrai HTTP 200 sur GitHub Pages, et pas
// seulement fonctionner via le filet de secours 404.html -> routeur client.
// Nécessaire pour toute URL qu'un vérificateur externe (Google Play Console,
// robots d'indexation, aperçus de liens...) va requêter sans exécuter de
// JavaScript : ceux-ci voient le vrai code HTTP renvoyé par le serveur, pas
// ce que le SPA affiche une fois démarré. Le contenu servi est identique
// (la même coquille SPA), seul le code HTTP change (200 au lieu de 404).
const STATIC_ROUTES = ["privacy"];

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

for (const route of STATIC_ROUTES) {
  const routeDir = join(publicDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(shell, join(routeDir, "index.html"));
}

console.log(
  `[finalize-static-build] index.html, 404.html, .nojekyll et ${STATIC_ROUTES.length} route(s) statique(s) (${STATIC_ROUTES.join(", ")}) écrits dans .output/public/`,
);
