/**
 * Configuration centrale du site Aika.
 * Modifiez uniquement ce fichier pour mettre à jour les liens, la version
 * et les captures d'écran de l'application.
 */

import mobile1 from "@/assets/screens/mobile-1.jpg";
import mobile2 from "@/assets/screens/mobile-2.jpg";
import mobile4 from "@/assets/screens/mobile-4.jpg";
import mobile5 from "@/assets/screens/mobile-5.jpg";
import mobile6 from "@/assets/screens/mobile-6.jpg";
import mobile7 from "@/assets/screens/mobile-7.jpg";
import desktop1 from "@/assets/screens/desktop-1.png";
import desktop2 from "@/assets/screens/desktop-2.png";
import desktop3 from "@/assets/screens/desktop-3.png";
import authorPhoto from "@/assets/author-bachir.webp";

/**
 * Liens de téléchargement.
 * Remplacez les valeurs `null` par les URL officielles.
 * Tant qu'un lien vaut `null`, le bouton correspondant est affiché
 * comme « Bientôt disponible » (aucun faux lien n'est publié).
 */
export const DOWNLOAD_LINKS = {
  PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.naniger.aika" as string | null,
  APP_STORE_URL: null as string | null,
  WINDOWS_DOWNLOAD_URL: "/downloads/Aika-v1.3.6-windows-x64-setup.exe" as string | null,
  MACOS_DOWNLOAD_URL: "/downloads/Aika-v1.3.6-macos-universal.dmg" as string | null,
  LINUX_DOWNLOAD_URL: "/downloads/Aika-v1.3.6-linux-x86-64.deb" as string | null,
};

/**
 * Empreintes SHA-256 des fichiers de téléchargement direct, pour vérifier
 * qu'un fichier n'a pas été altéré. À régénérer à chaque nouvelle version
 * (`sha256sum Aika-v* > SHA256SUMS.txt` dans public/downloads).
 * `null` masque le lien.
 */
export const CHECKSUMS_URL: string | null = "/downloads/SHA256SUMS.txt";

export const GITHUB_URL: string | null = null; // ex: "https://github.com/…"

/**
 * Identifiant de mesure Google Analytics 4 (format « G-XXXXXXXXXX »),
 * visible dans GA4 : Administration → Flux de données → Web.
 * Public par nature (il figure dans le code de chaque page). Tant qu'il vaut
 * `null`, aucune mesure d'audience n'est chargée. Seul endroit où le
 * renseigner : voir src/lib/analytics.ts.
 */
export const GA_MEASUREMENT_ID: string | null = "G-Y70R7PYZJ8";
export const CONTACT_EMAIL = "contact@naniger.com";
export const APP_VERSION = "1.3.6";

export const site = {
  name: "Aika",
  tagline: "Le partage de fichiers, simplement.",
  author: "Bachir Abdoul Kader",
  /** Photo affichée dans la section « À propos ». */
  authorPhoto,
  version: APP_VERSION,
  contactEmail: CONTACT_EMAIL,
  githubUrl: GITHUB_URL,
};

export type Platform = {
  id: string;
  name: string;
  store: string;
  format?: string;
  cta: string;
  url: string | null;
};

export const platforms: Platform[] = [
  {
    id: "android",
    name: "Android",
    store: "Google Play Store",
    cta: "Disponible sur Google Play",
    url: DOWNLOAD_LINKS.PLAY_STORE_URL,
  },
  {
    id: "ios",
    name: "iOS",
    store: "Apple App Store",
    cta: "Télécharger dans l'App Store",
    url: DOWNLOAD_LINKS.APP_STORE_URL,
  },
  {
    id: "windows",
    name: "Windows",
    store: "Téléchargement direct",
    format: ".exe",
    cta: "Télécharger pour Windows",
    url: DOWNLOAD_LINKS.WINDOWS_DOWNLOAD_URL,
  },
  {
    id: "macos",
    name: "macOS",
    store: "Téléchargement direct",
    format: ".dmg",
    cta: "Télécharger pour macOS",
    url: DOWNLOAD_LINKS.MACOS_DOWNLOAD_URL,
  },
  {
    id: "linux",
    name: "Linux",
    store: "Téléchargement direct",
    format: ".deb",
    cta: "Télécharger pour Linux",
    url: DOWNLOAD_LINKS.LINUX_DOWNLOAD_URL,
  },
];

export type Screenshot = { src: string; alt: string; label: string };

/** Captures mobiles — remplacez simplement les pointeurs d'assets. */
export const mobileScreenshots: Screenshot[] = [
  {
    src: mobile1,
    alt: "Écran Recevoir d'Aika avec le code QR de connexion",
    label: "Réception",
  },
  { src: mobile2, alt: "Écran d'envoi de fichiers d'Aika", label: "Envoi" },
  { src: mobile4, alt: "Messagerie locale d'Aika", label: "Messagerie locale" },
  { src: mobile7, alt: "Liste des conversations locales d'Aika", label: "Conversations" },
  { src: mobile5, alt: "Paramètres d'Aika en mode clair", label: "Paramètres" },
  { src: mobile6, alt: "Paramètres d'Aika en mode sombre", label: "Mode sombre" },
];

/** Captures ordinateur. */
export const desktopScreenshots: Screenshot[] = [
  { src: desktop1, alt: "Aika sur ordinateur", label: "Windows" },
  { src: desktop2, alt: "Aika sur ordinateur, sélection des appareils", label: "Linux" },
  { src: desktop3, alt: "Messagerie locale d'Aika sur ordinateur", label: "macOS" },
];

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Vision", href: "#vision" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Aperçus", href: "#apercus" },
  { label: "Téléchargements", href: "#telechargements" },
  { label: "À propos", href: "#a-propos" },
];
