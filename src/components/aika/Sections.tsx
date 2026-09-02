import {
  Zap,
  WifiOff,
  Smartphone,
  Link2,
  QrCode,
  ShieldCheck,
  FolderOpen,
  MessageSquare,
  Users,
  RefreshCw,
  Globe,
  Lock,
  Check,
  GraduationCap,
  Building2,
  School,
  Code2,
  Home,
  Laptop,
  Mail,
  Github,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { PhoneFrame, LaptopFrame } from "./Mockups";
import {
  mobileScreenshots,
  desktopScreenshots,
  platforms,
  site,
  navLinks,
} from "@/config/site";
import logoAsset from "@/assets/aika-logo.png.asset.json";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ------------------------------- VISION ------------------------------- */

const visionPoints = [
  { icon: Globe, title: "Sans Internet", text: "Fonctionne sur votre réseau local." },
  { icon: Zap, title: "Rapide", text: "Transferts directs entre appareils." },
  { icon: Lock, title: "Sécurisé", text: "Vos fichiers restent entre vos appareils." },
  { icon: Smartphone, title: "Multiplateforme", text: "Mobile et ordinateur." },
];

export function Vision() {
  return (
    <section id="vision" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Notre vision"
            title="Le partage ne devrait pas dépendre d'Internet"
            subtitle="Nous croyons que le partage de fichiers ne devrait pas dépendre d'une connexion Internet. Aika a pour ambition de rendre le transfert de données simple, rapide et accessible, même dans les environnements où la connectivité est limitée."
          />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visionPoints.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------- COMMENT ÇA MARCHE ---------------------------- */

const steps = [
  {
    n: "01",
    title: "Connectez vos appareils",
    text: "Les appareils présents sur le même réseau local sont automatiquement détectés.",
  },
  {
    n: "02",
    title: "Sélectionnez vos fichiers",
    text: "Choisissez les photos, vidéos, documents ou autres fichiers à envoyer.",
  },
  {
    n: "03",
    title: "Transférez",
    text: "Envoyez vos fichiers rapidement et directement entre vos appareils.",
  },
];

export function HowItWorks() {
  const qrShot = mobileScreenshots[1]!;

  return (
    <section id="fonctionnement" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle eyebrow="Fonctionnement" title="Comment ça marche ?" />
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 100}>
              <div className="surface-card h-full p-8">
                <span className="font-display text-4xl font-bold text-gradient">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="surface-card mt-8 grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground">
                <QrCode className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">
                Connectez-vous instantanément grâce au QR Code.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Scannez le QR Code affiché par un appareil pour appairer deux appareils en une
                seconde, sans saisir d'adresse ni de code manuellement.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[220px]">
              <PhoneFrame src={qrShot.src} alt={qrShot.alt} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- FONCTIONNALITÉS ---------------------------- */

const features = [
  { icon: Zap, title: "Transfert rapide", text: "Transférez vos fichiers directement entre appareils sur votre réseau local." },
  { icon: WifiOff, title: "Fonctionnement hors ligne", text: "Aika peut fonctionner sans connexion Internet." },
  { icon: Smartphone, title: "Multiplateforme", text: "Android, iOS, Windows, macOS et Linux." },
  { icon: Link2, title: "Connexion intelligente", text: "Découvrez facilement les appareils disponibles." },
  { icon: QrCode, title: "QR Code intelligent", text: "Connectez rapidement deux appareils grâce au scan d'un QR Code." },
  { icon: ShieldCheck, title: "Sécurité", text: "Les transferts restent directement entre les appareils concernés." },
  { icon: FolderOpen, title: "Partage de fichiers", text: "Photos, vidéos, documents, dossiers et autres fichiers." },
  { icon: MessageSquare, title: "Messagerie locale", text: "Communiquez avec les appareils du même réseau local, sans Internet." },
  { icon: Users, title: "Groupes", text: "Partagez et communiquez avec plusieurs appareils." },
  { icon: RefreshCw, title: "Reprise des transferts", text: "Reprenez un transfert interrompu lorsque cela est supporté." },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Tout ce dont vous avez besoin pour partager"
          />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 80}>
              <div className="surface-card group h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- APERÇUS ------------------------------- */

export function Showcase() {
  return (
    <section id="apercus" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Aperçus"
            title="Découvrez Aika"
            subtitle="Une interface claire, cohérente sur mobile et sur ordinateur, en mode clair comme en mode sombre."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mobileScreenshots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 4) * 90}>
              <figure>
                <PhoneFrame src={s.src} alt={s.alt} />
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {desktopScreenshots.map((s, i) => (
            <Reveal key={s.src} delay={i * 100}>
              <figure>
                <LaptopFrame src={s.src} alt={s.alt} />
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TÉLÉCHARGEMENT ----------------------------- */

const platformIcon: Record<string, typeof Smartphone> = {
  android: Smartphone,
  ios: Smartphone,
  windows: Laptop,
  macos: Laptop,
  linux: Laptop,
};

export function DownloadSection() {
  return (
    <section id="telechargements" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Téléchargements"
            title="Disponible partout"
            subtitle="Aika est disponible sur vos appareils préférés."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => {
            const Icon = platformIcon[p.id] ?? Laptop;
            return (
              <Reveal as="li" key={p.id} delay={(i % 3) * 80}>
                <div className="surface-card flex h-full flex-col p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.store}
                    {p.format ? ` · ${p.format}` : ""}
                  </p>
                  <div className="mt-6 pt-1">
                    {p.url ? (
                      <a
                        href={p.url}
                        className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                      >
                        {p.cta}
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        title="Lien à configurer dans src/config/site.ts"
                        className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-border bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground"
                      >
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Version actuelle {site.version}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ POURQUOI AIKA ------------------------------ */

const reasons = [
  "Pas besoin d'Internet",
  "Pas besoin de câble",
  "Pas besoin de compte",
  "Transfert direct",
  "Multiplateforme",
  "Interface simple",
  "Respect de la confidentialité",
];

export function WhyAika() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionTitle
            align="left"
            eyebrow="Différence"
            title="Pourquoi utiliser Aika ?"
            subtitle="Un transfert direct d'appareil à appareil, sans intermédiaire, sans inscription et sans dépendance au cloud."
          />
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="surface-card flex items-center gap-3 px-5 py-4">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <span className="font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- CAS D'UTILISATION ----------------------------- */

const useCases = [
  { icon: GraduationCap, title: "Étudiants", text: "Partager des cours, PDF, projets et supports pédagogiques." },
  { icon: Building2, title: "Entreprises", text: "Partager rapidement des documents entre collaborateurs sur un réseau interne." },
  { icon: School, title: "Établissements", text: "Faciliter les échanges de fichiers dans les environnements à connectivité limitée." },
  { icon: Code2, title: "Développeurs", text: "Transférer rapidement des fichiers entre ordinateurs et smartphones." },
  { icon: Home, title: "Usage personnel", text: "Partager photos, vidéos et documents entre ses appareils." },
];

export function UseCases() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle eyebrow="Usages" title="Pensé pour votre quotidien" />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <Reveal as="li" key={u.title} delay={(i % 3) * 80}>
              <div className="surface-card h-full p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <u.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{u.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{u.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- HORS LIGNE -------------------------------- */

export function Offline() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Hors ligne
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-bold">Même sans Internet.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-foreground/70">
            Aika est conçu pour fonctionner là où Internet n'est pas toujours disponible.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-16 h-64 max-w-3xl">
            <svg viewBox="0 0 600 240" className="size-full" aria-hidden="true">
              <defs>
                <linearGradient id="aika-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-teal)" />
                </linearGradient>
              </defs>
              {[
                "M120 60 L300 130",
                "M480 60 L300 130",
                "M120 60 L480 60",
                "M300 130 L300 200",
              ].map((d, i) => (
                <g key={d}>
                  <path d={d} stroke="url(#aika-line)" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
                  <circle r="4" fill="url(#aika-line)">
                    <animateMotion dur="3.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              ))}
              {[
                { cx: 120, cy: 60 },
                { cx: 480, cy: 60 },
                { cx: 300, cy: 130 },
                { cx: 300, cy: 200 },
              ].map(({ cx, cy }) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="16" fill="var(--color-primary)" fillOpacity="0.16" />
                  <circle cx={cx} cy={cy} r="7" fill="var(--color-primary)" />
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- RECHERCHE ------------------------------- */

export function Research() {
  return (
    <section id="a-propos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="surface-card mx-auto max-w-4xl p-9 sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              À propos du projet
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.7rem)] font-bold">
              Un projet technologique et académique
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Aika est développé dans le cadre d'un travail de recherche en Informatique
              Fondamentale et Appliquée, avec pour objectif d'étudier et d'améliorer les mécanismes
              de transfert de données entre appareils sur des réseaux locaux.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-primary-foreground">
                BA
              </span>
              <div>
                <p className="font-semibold">{site.author}</p>
                <p className="text-sm text-muted-foreground">
                  Projet réalisé dans le cadre de son mémoire de Master en Informatique Fondamentale
                  et Appliquée.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="size-8 object-contain"
              />
              <span className="font-display text-lg font-bold">Aika</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.tagline} Transférez vos fichiers entre appareils proches, sur votre réseau
              local, sans Internet.
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            {site.githubUrl ? (
              <a
                href={site.githubUrl}
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" /> GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-muted-foreground/60">
                <Github className="size-4" /> GitHub
              </span>
            )}
            <a
              href={`mailto:${site.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aika. Tous droits réservés.</p>
          <p>Projet académique — Master Informatique Fondamentale et Appliquée</p>
        </div>
      </div>
    </footer>
  );
}
