import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/aika/Header";
import { Footer } from "@/components/aika/Sections";
import { site } from "@/config/site";

const title = "Politique de confidentialité — Aika";
const description =
  "Comment Aika traite vos données : aucun compte requis, aucun serveur dans le transfert de fichiers, aucun suivi publicitaire.";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://naniger.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://naniger.com/privacy" }],
  }),
});

function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Confidentialité</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour : 2 septembre 2026
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/90">
          <section>
            <p>
              Cette politique explique ce qu'Aika fait — et surtout ce qu'elle ne fait pas — avec
              vos données. En résumé : Aika transfère vos fichiers directement entre vos appareils,
              sur votre réseau local, sans passer par un serveur, et sans vous demander de créer de
              compte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Aucun compte, aucun serveur</h2>
            <p className="mt-3">
              Aika ne demande ni inscription ni identifiant. Les transferts de fichiers et les
              messages se font directement d'appareil à appareil, sur votre réseau local (Wi-Fi ou
              point d'accès), sans jamais transiter par un serveur que nous exploitons. Nous n'avons
              donc, à aucun moment, accès aux fichiers ou messages que vous échangez.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">
              Données stockées sur votre appareil
            </h2>
            <p className="mt-3">
              L'historique de vos conversations (messages, liste de blocage, envois en attente) est
              enregistré uniquement dans une base de données locale, sur votre appareil. Il n'est
              jamais envoyé ailleurs. Désinstaller l'application supprime ces données.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Aucun suivi, aucune publicité</h2>
            <p className="mt-3">
              Aika n'intègre aucun outil d'analyse d'audience, de suivi publicitaire ni de rapport
              d'erreurs envoyé à un tiers. Nous ne savons pas qui utilise l'application, ni comment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">
              Autorisations demandées et pourquoi
            </h2>
            <p className="mt-3">
              L'application peut demander les autorisations suivantes, uniquement pour fonctionner :
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-medium text-foreground">Réseau local / Wi-Fi</span> — pour
                découvrir et se connecter aux appareils à proximité, et transférer les fichiers.
              </li>
              <li>
                <span className="font-medium text-foreground">Position (Android/iOS)</span> — exigée
                par le système pour accéder aux informations du réseau Wi-Fi local ; Aika n'accède
                pas à votre position GPS et ne la collecte ni ne la transmet.
              </li>
              <li>
                <span className="font-medium text-foreground">Caméra</span> — uniquement pour
                scanner un QR Code afin de connecter deux appareils.
              </li>
              <li>
                <span className="font-medium text-foreground">Stockage / Photos</span> — pour
                choisir les fichiers que vous envoyez et enregistrer ceux que vous recevez.
              </li>
              <li>
                <span className="font-medium text-foreground">Notifications</span> — pour vous
                signaler un nouveau message ou transfert.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">
              Achats intégrés (soutien du projet)
            </h2>
            <p className="mt-3">
              Si vous choisissez de soutenir Aika via un achat intégré, ce paiement est traité
              directement par l'App Store d'Apple ou le Google Play Store. Nous ne voyons et ne
              stockons jamais vos coordonnées bancaires.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Modifications de cette politique</h2>
            <p className="mt-3">
              Cette politique peut être mise à jour si l'application évolue. La date de dernière
              mise à jour en haut de cette page reflète toujours la version en vigueur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Nous contacter</h2>
            <p className="mt-3">
              Pour toute question sur cette politique, écrivez-nous à{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-brand underline underline-offset-4"
              >
                {site.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
