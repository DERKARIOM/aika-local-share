# Aika — site web

Site vitrine officiel du projet Aika (TanStack Start + Tailwind CSS v4),
déployé en tant que site 100 % statique sur GitHub Pages, domaine
`naniger.com`.

## Notes pour un futur agent / contributeur

- Le routage est basé sur les fichiers (TanStack Router) : voir
  `src/routes/README.md` pour les conventions.
- Toutes les informations modifiables (liens de téléchargement, contact,
  version, screenshots) sont centralisées dans `src/config/site.ts` —
  modifiez uniquement ce fichier plutôt que de chercher les valeurs dans les
  composants.
- `npm run build` produit un site 100 % statique dans `.output/public/`
  (voir `scripts/finalize-static-build.mjs`) : aucun serveur n'est requis en
  production.
