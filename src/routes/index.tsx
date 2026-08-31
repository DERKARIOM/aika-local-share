import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/aika/Header";
import { Hero } from "@/components/aika/Hero";
import {
  Vision,
  HowItWorks,
  Features,
  Showcase,
  DownloadSection,
  WhyAika,
  UseCases,
  Offline,
  Research,
  Footer,
} from "@/components/aika/Sections";

const title = "Aika — Partagez vos fichiers entre appareils, sans Internet";
const description =
  "Aika transfère vos fichiers entre appareils proches, directement sur votre réseau local, sans Internet. Rapide, sécurisé, multiplateforme.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Aika",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Android, iOS, Windows, macOS, Linux",
          description,
          author: { "@type": "Person", name: "Bachir Abdoul Kader" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <HowItWorks />
        <Features />
        <Showcase />
        <DownloadSection />
        <WhyAika />
        <UseCases />
        <Offline />
        <Research />
      </main>
      <Footer />
    </>
  );
}
