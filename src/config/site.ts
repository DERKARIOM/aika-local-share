/**
 * Configuration centrale du site Aika.
 * Modifiez uniquement ce fichier pour mettre à jour les liens, la version
 * et les captures d'écran de l'application.
 */

import mobile1 from "@/assets/screens/mobile-1.jpg.asset.json";
import mobile2 from "@/assets/screens/mobile-2.jpg.asset.json";
import mobile3 from "@/assets/screens/mobile-3.jpg.asset.json";
import mobile4 from "@/assets/screens/mobile-4.jpg.asset.json";
import mobile5 from "@/assets/screens/mobile-5.jpg.asset.json";
import mobile6 from "@/assets/screens/mobile-6.jpg.asset.json";
import mobile7 from "@/assets/screens/mobile-7.jpg.asset.json";
import desktop1 from "@/assets/screens/desktop-1.png.asset.json";
import desktop2 from "@/assets/screens/desktop-2.png.asset.json";
import desktop3 from "@/assets/screens/desktop-3.png.asset.json";

/**
 * Liens de téléchargement.
 * Remplacez les valeurs `null` par les URL officielles.
 * Tant qu'un lien vaut `null`, le bouton correspondant est affiché
 * comme « Bientôt disponible » (aucun faux lien n'est publié).
 */
export const DOWNLOAD_LINKS = {
  PLAY_STORE_URL: null as string | null,
  APP_STORE_URL: null as string | null,
  WINDOWS_DOWNLOAD_URL: null as string | null,
  MACOS_DOWNLOAD_URL: null as string | null,
  LINUX_DOWNLOAD_URL: null as string | null,
};

export const GITHUB_URL: string | null = null; // ex: "https://github.com/…"
export const CONTACT_EMAIL = "contact@aika.app"; // à remplacer
export const APP_VERSION = "1.0.0";

export const site = {
  name: "Aika",
  tagline: "Le partage de fichiers, simplement.",
  author: "Bachir Abdoul Kader",
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
    cta: "Télécharger sur Google Play",
    url: DOWNLOAD_LINKS.PLAY_STORE_URL,
  },
  {
    id: "ios",
    name: "iOS",
    store: "Apple App Store",
    cta: "Télécharger sur l'App Store",
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
    format: ".img",
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
  { src: mobile3.url, alt: "Écran d'accueil / réception d'Aika", label: "Accueil" },
  { src: mobile2.url, alt: "Écran d'envoi de fichiers d'Aika", label: "Envoi" },
  { src: mobile1.url, alt: "Écran de réception d'Aika en mode sombre", label: "Réception" },
  { src: mobile4.url, alt: "Messagerie locale d'Aika", label: "Messagerie locale" },
  { src: mobile7.url, alt: "Liste des conversations locales d'Aika", label: "Conversations" },
  { src: mobile5.url, alt: "Paramètres d'Aika en mode clair", label: "Paramètres" },
  { src: mobile6.url, alt: "Paramètres d'Aika en mode sombre", label: "Mode sombre" },
];

/** Captures ordinateur. */
export const desktopScreenshots: Screenshot[] = [
  { src: desktop1.url, alt: "Aika sur ordinateur", label: "Windows" },
  { src: desktop2.url, alt: "Aika sur ordinateur, sélection des appareils", label: "Linux" },
  { src: desktop3.url, alt: "Messagerie locale d'Aika sur ordinateur", label: "macOS" },
];

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Vision", href: "#vision" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Aperçus", href: "#apercus" },
  { label: "Téléchargements", href: "#telechargements" },
  { label: "À propos", href: "#a-propos" },
];
