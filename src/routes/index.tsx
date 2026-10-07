import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Histoire } from "@/components/sections/Histoire";
import { MenuSection } from "@/components/sections/MenuSection";
import { Signature } from "@/components/sections/Signature";
import { Chef } from "@/components/sections/Chef";
import { Galerie } from "@/components/sections/Galerie";
import { Experiences } from "@/components/sections/Experiences";
import { Avis } from "@/components/sections/Avis";
import { Reservation } from "@/components/sections/Reservation";
import { Footer } from "@/components/sections/Footer";

const title = "KÔRÔ — Cuisine africaine contemporaine à Abidjan";
const description =
  "KÔRÔ réinvente la cuisine ivoirienne : poulet braisé signature, attiéké royal, capitaine braisé. Réservez votre table à Cocody, Abidjan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <Histoire />
      <MenuSection />
      <Signature />
      <Chef />
      <Galerie />
      <Experiences />
      <Avis />
      <Reservation />
      <Footer />
    </main>
  );
}
