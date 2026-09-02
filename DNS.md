# Configuration DNS — naniger.com (GitHub Pages)

Ce document liste les enregistrements DNS à créer **manuellement** chez votre
fournisseur (LWS) pour connecter `naniger.com` au site hébergé sur GitHub
Pages. Aucun enregistrement n'a été modifié automatiquement.

## 1. Enregistrements à créer chez LWS

Dans le panneau de gestion DNS de `naniger.com` chez LWS, créez les
enregistrements suivants (en plus des enregistrements déjà présents pour la
messagerie, s'il y en a — ne les supprimez pas).

### Domaine apex (`naniger.com`)

Créez 4 enregistrements **A** pointant vers les adresses IP de GitHub Pages :

| Type | Nom / Hôte | Valeur           |
| ---- | ---------- | ----------------- |
| A    | @          | 185.199.108.153    |
| A    | @          | 185.199.109.153    |
| A    | @          | 185.199.110.153    |
| A    | @          | 185.199.111.153    |

(`@` désigne le domaine racine `naniger.com`. Selon l'interface LWS, il peut
être noté `@`, laissé vide, ou correspondre au nom du domaine lui-même.)

### Sous-domaine www (`www.naniger.com`)

Créez un enregistrement **CNAME** :

| Type  | Nom / Hôte | Valeur                    |
| ----- | ---------- | -------------------------- |
| CNAME | www        | derkariom.github.io.       |

(Remplacez `derkariom` uniquement si le compte/organisation GitHub qui héberge
le dépôt `aika-local-share` change — sinon utilisez cette valeur telle quelle,
point final inclus si votre interface l'exige.)

## 2. Domaine principal choisi

Le fichier `public/CNAME` du projet contient `naniger.com` (domaine apex) : la
version canonique du site est `https://naniger.com`. GitHub Pages redirige
automatiquement `www.naniger.com` vers `naniger.com` une fois les deux
enregistrements ci-dessus en place et le domaine personnalisé configuré côté
GitHub (voir README.md, section « Déploiement »).

## 3. HTTPS

GitHub Pages émet automatiquement un certificat HTTPS (Let's Encrypt) pour un
domaine personnalisé, une fois :

1. les enregistrements DNS ci-dessus propagés (peut prendre de quelques
   minutes à 24-48 h selon LWS et le TTL existant) ;
2. le domaine `naniger.com` renseigné dans **Settings → Pages → Custom
   domain** du dépôt GitHub.

La case **Enforce HTTPS** doit ensuite être cochée manuellement dans les mêmes
réglages, une fois le certificat émis (GitHub l'affiche automatiquement quand
c'est prêt).

## 4. Vérification

Une fois les enregistrements créés, vous pouvez vérifier la propagation avec :

```bash
dig naniger.com A
dig www.naniger.com CNAME
```

Les 4 adresses IP GitHub Pages doivent apparaître pour `naniger.com`, et
`derkariom.github.io` pour `www.naniger.com`.
