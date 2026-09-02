import { ArrowRight, Download } from "lucide-react";
import { PhoneFrame, LaptopFrame } from "./Mockups";
import { desktopScreenshots } from "@/config/site";
import heroMobileSrc from "@/assets/aika-hero-mobile.jpg";
import logoSrc from "@/assets/aika-logo.png";

/** Animation légère : paquets de données circulant entre le mobile et l'ordinateur. */
function TransferLink() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 60"
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-24 w-56 -translate-x-1/2 -translate-y-1/2 lg:block"
    >
      <path
        d="M10 30 C 60 0, 140 60, 190 30"
        fill="none"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        style={{ animation: "aika-dash 3s linear infinite" }}
      />
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="var(--color-primary)">
          <animateMotion
            dur="2.6s"
            begin={`${i * 0.85}s`}
            repeatCount="indefinite"
            path="M10 30 C 60 0, 140 60, 190 30"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.6s"
            begin={`${i * 0.85}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export function Hero() {
  const laptop = desktopScreenshots[0];

  if (!laptop) return null;

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt=""
              width={40}
              height={40}
              className="size-8 object-contain sm:size-9"
            />
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <span className="size-1.5 rounded-full bg-primary" />
              Le partage de fichiers, simplement.
            </p>
          </div>
          <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[1.02]">
            Transférez. <span className="text-gradient">Partagez.</span> Connectez.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Aika vous permet de partager vos fichiers rapidement entre vos appareils, directement
            sur votre réseau local, sans Internet.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#telechargements"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              <Download className="size-4" /> Télécharger Aika
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold transition-colors hover:bg-secondary"
            >
              Découvrir Aika <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <TransferLink />
          <div className="relative mx-auto max-w-xl">
            <LaptopFrame src={laptop.src} alt={laptop.alt} priority className="ml-auto w-[88%]" />
            <PhoneFrame
              src={heroMobileSrc}
              alt="Interface de réception Aika sur Android"
              priority
              className="animate-float absolute -bottom-10 left-0 w-[38%] max-w-[190px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
