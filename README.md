# Aika — Site web

Site vitrine officiel de **Aika**, une application de transfert et de partage
de fichiers entre appareils proches, directement sur le réseau local, sans
Internet.

Le site est déployé en tant que site 100 % statique sur **GitHub Pages**, sur
le domaine [naniger.com](https://naniger.com).

## Stack technique

- [TanStack Start](https://tanstack.com/start) (React 19) + [TanStack Router](https://tanstack.com/router) — routage basé sur les fichiers
- [Vite](https://vitejs.dev) 8 — build, avec [Nitro](https://nitro.build) (preset `node-server`) pour générer une coquille statique pré-rendue
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (style « new-york ») + [Radix UI](https://www.radix-ui.com)
- Aucune donnée dynamique : pas d'appel API, pas de fonction serveur, pas de
  variable d'environnement — tout le contenu est statique et centralisé dans
  [`src/config/site.ts`](./src/config/site.ts)

Le projet a été initialement généré avec [Lovable](https://lovable.dev), puis
rendu totalement indépendant : plus aucune dépendance à Lovable (build,
hébergement, assets ou branding) n'est nécessaire pour cloner, développer ou
déployer ce site.

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Le site est servi sur [http://localhost:8080](http://localhost:8080).

## Build de production

```bash
npm run build
```

Génère un site 100 % statique dans `.output/public/` :

- `index.html` — servie pour `/`
- `404.html` — servie par GitHub Pages pour toute URL inconnue, ce qui permet
  au routeur client de prendre le relais
- `.nojekyll` — empêche GitHub Pages de traiter le dossier avec Jekyll
- `sitemap.xml`, `robots.txt`, `manifest.json`, `og-image.png`, `favicon.png`
  — copiés depuis `public/`
- `CNAME` — contient `naniger.com`, requis par GitHub Pages pour le domaine personnalisé

Pour prévisualiser le build localement :

```bash
npx vite preview
```

## Qualité du code

```bash
npm run lint      # ESLint (+ règles Prettier)
npx tsc --noEmit  # vérification des types
npm audit         # vulnérabilités des dépendances
```

## Déploiement — GitHub Pages

Le déploiement est automatisé par GitHub Actions
([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)) : à chaque
push sur `main`, le workflow installe les dépendances, exécute le lint, vérifie
les types, construit le site, puis publie `.output/public/` sur GitHub Pages.

Configuration nécessaire côté GitHub (une seule fois, manuellement) :

1. **Settings → Pages → Source** : sélectionner **GitHub Actions** (pas
   « Deploy from a branch »).
2. **Settings → Pages → Custom domain** : renseigner `naniger.com`, puis
   cocher **Enforce HTTPS** une fois le certificat émis par GitHub (peut
   prendre jusqu'à 24 h après la configuration DNS).

Le fichier `public/CNAME` (copié tel quel dans le build) précise déjà le
domaine à GitHub Pages ; le champ « Custom domain » ci-dessus doit simplement
correspondre à la même valeur.

## Configuration du domaine (naniger.com)

Les enregistrements DNS à créer chez le fournisseur (LWS) sont documentés
séparément — voir `DNS.md` — et n'ont **pas** été appliqués automatiquement :
la configuration DNS reste une action manuelle, à effectuer et vérifier par
vous-même chez votre fournisseur.

## Variables d'environnement

Aucune. Le site est entièrement statique et ne lit aucune variable
d'environnement ni clé API.

## Structure du projet

```
src/
  assets/           images du site (logo, captures d'écran)
  components/
    aika/           sections de la page d'accueil (Hero, Vision, Footer, …)
    ui/             composants shadcn/ui génériques
  config/site.ts     configuration centrale (liens de téléchargement, contact, version, captures d'écran)
  routes/            routes TanStack Router (basées sur les fichiers)
  styles.css         styles globaux Tailwind
  start.ts           configuration serveur TanStack Start (middleware CSRF + gestion d'erreurs)
public/              fichiers statiques copiés tels quels (favicon, robots.txt, sitemap.xml, manifest.json, og-image.png, CNAME)
scripts/
  finalize-static-build.mjs   finalise le build pour GitHub Pages (index.html / 404.html / .nojekyll)
.github/workflows/deploy.yml  build + déploiement automatique sur GitHub Pages
```

## Modifier le contenu du site

La quasi-totalité des informations modifiables (liens de téléchargement,
e-mail de contact, version affichée, captures d'écran) est centralisée dans
[`src/config/site.ts`](./src/config/site.ts). Pour le reste, chaque section
de la page d'accueil est un composant dédié dans
[`src/components/aika/Sections.tsx`](./src/components/aika/Sections.tsx) (et
[`Hero.tsx`](./src/components/aika/Hero.tsx),
[`Header.tsx`](./src/components/aika/Header.tsx)).
