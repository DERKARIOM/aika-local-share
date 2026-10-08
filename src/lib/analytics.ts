/**
 * Mesure d'audience du site (Google Analytics 4).
 *
 * Seul point de contact avec Google Analytics : les composants appellent
 * `trackEvent` / `trackPageView`, jamais `gtag` directement.
 *
 * - Inactif tant que GA_MEASUREMENT_ID (src/config/site.ts) vaut null,
 *   en dehors du navigateur, en local (localhost) et lorsque le visiteur a
 *   activé « Do Not Track » ou Global Privacy Control.
 * - Le script Google est chargé en asynchrone, une fois la page affichée :
 *   il ne retarde pas le rendu.
 * - Aucune donnée personnelle n'est envoyée : uniquement des noms
 *   d'événements et des paramètres techniques (plateforme, emplacement du
 *   bouton). Les signaux Google et la personnalisation publicitaire sont
 *   désactivés.
 * - Ne lève jamais d'exception : si Analytics est bloqué ou indisponible,
 *   les appels sont simplement ignorés et le site fonctionne normalement.
 */

import { GA_MEASUREMENT_ID } from "@/config/site";

/** Événements personnalisés du site. Ajoutez-en ici, pas ailleurs. */
export type AnalyticsEvent =
  /** Bouton « Télécharger Aika » (en-tête, accueil) : intention de télécharger. */
  | "download_aika"
  /** Bouton de téléchargement d'une plateforme (Android, Windows, macOS, Linux…). */
  | "download_platform"
  /** Bouton Google Play : téléchargement Android. */
  | "download_android"
  /** Bouton « Découvrir Aika ». */
  | "discover_aika"
  /** Liens de contact / réseaux (GitHub, e-mail) du pied de page. */
  | "social_click";

/** Paramètres autorisés : valeurs simples, jamais de donnée personnelle. */
export type AnalyticsParams = Record<string, string | number | boolean>;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]{4,}$/;
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

let enabled = false;
let lastPagePath: string | null = null;

function privacySignalEnabled(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  const win = window as Window & { doNotTrack?: string };
  return (
    nav.globalPrivacyControl === true || navigator.doNotTrack === "1" || win.doNotTrack === "1"
  );
}

function canRun(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (!GA_MEASUREMENT_ID || !MEASUREMENT_ID_PATTERN.test(GA_MEASUREMENT_ID)) return false;
  if (LOCAL_HOSTS.has(window.location.hostname)) return false;
  return !privacySignalEnabled();
}

function gtag(...args: unknown[]): void {
  try {
    window.gtag?.(...args);
  } catch {
    // Analytics ne doit jamais casser le site.
  }
}

function loadScript(id: string): void {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  // Script bloqué (bloqueur de publicité, réseau) : rien à faire, les
  // événements restent simplement en file dans dataLayer.
  script.onerror = () => {};
  document.head.appendChild(script);
}

/**
 * Prépare Google Analytics. Idempotent ; à appeler une fois au démarrage,
 * côté client. Le script est chargé quand le navigateur est inactif, pour
 * ne pas concurrencer l'affichage de la page.
 */
export function initAnalytics(): void {
  if (enabled) return;
  try {
    if (!canRun() || !GA_MEASUREMENT_ID) return;
    const id = GA_MEASUREMENT_ID;

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtagShim() {
      // gtag.js attend l'objet `arguments` lui-même, pas un tableau.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    enabled = true;

    gtag("js", new Date());
    gtag("config", id, {
      // Les pages vues sont envoyées par trackPageView, une seule fois par
      // page (le site est une SPA : voir src/routes/__root.tsx).
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const load = () => loadScript(id);
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(load, { timeout: 3000 });
    } else {
      setTimeout(load, 1500);
    }
  } catch {
    enabled = false;
  }
}

/**
 * Page vue, une seule fois par changement de page : les ancres internes
 * (#…) ne sont pas comptées comme de nouvelles pages. Les paramètres d'URL
 * sont conservés pour que GA4 attribue la provenance des campagnes
 * (utm_source, utm_medium…).
 */
export function trackPageView(pathname: string): void {
  if (!enabled || pathname === lastPagePath) return;
  lastPagePath = pathname;
  try {
    gtag("event", "page_view", {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}${window.location.search}`,
      page_title: document.title,
    });
  } catch {
    // ignoré
  }
}

/** Événement personnalisé, par ex. trackEvent("download_platform", { platform: "android" }). */
export function trackEvent(name: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (!enabled) return;
  gtag("event", name, params);
}
