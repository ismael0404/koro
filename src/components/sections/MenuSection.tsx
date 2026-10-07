import { useState } from "react";
import { Reveal } from "../Reveal";
import heroDish from "@/assets/hero-dish.jpg";
import signature from "@/assets/signature.jpg";
import attieke from "@/assets/dish-attieke.jpg";
import capitaine from "@/assets/dish-capitaine.jpg";
import aloco from "@/assets/dish-aloco.jpg";
import chocolat from "@/assets/dish-chocolat.jpg";

type Item = {
  name: string;
  price: string;
  desc: string;
  image: string;
};

const menu: Record<string, Item[]> = {
  Entrées: [
    {
      name: "Crevettes grillées",
      price: "8 500 FCFA",
      desc: "Gambas de Grand-Bassam, beurre de karité fumé, pousses locales.",
      image: heroDish,
    },
    {
      name: "Velouté d'arachide",
      price: "6 000 FCFA",
      desc: "Arachide torréfiée, huile de piment vert, croustillant d'igname.",
      image: attieke,
    },
    {
      name: "Tartare de capitaine",
      price: "9 000 FCFA",
      desc: "Citron vert, gingembre, oignon rouge, chips de banane plantain.",
      image: capitaine,
    },
  ],
  Plats: [
    {
      name: "Poulet braisé signature",
      price: "12 000 FCFA",
      desc: "Marinade 24 heures, jus corsé au néré, attiéké fin.",
      image: signature,
    },
    {
      name: "Filet de capitaine braisé",
      price: "15 000 FCFA",
      desc: "Peau croustillante, sauce verte aux herbes du jardin, citron brûlé.",
      image: capitaine,
    },
    {
      name: "Sauce graine du Kôrô",
      price: "11 000 FCFA",
      desc: "Noix de palme, viande fondante, riz parfumé de Korhogo.",
      image: attieke,
    },
  ],
  Grillades: [
    {
      name: "Choukouya d'agneau",
      price: "13 500 FCFA",
      desc: "Agneau mariné au poivre de Guinée, oignons confits.",
      image: signature,
    },
    {
      name: "Brochettes de gambas",
      price: "10 500 FCFA",
      desc: "Flamme vive, beurre d'ail et persil, piment doux.",
      image: heroDish,
    },
  ],
  Accompagnements: [
    {
      name: "Attiéké royal",
      price: "7 500 FCFA",
      desc: "Attiéké fin, tomate, oignon, huile rouge, poisson émietté.",
      image: attieke,
    },
    {
      name: "Aloco caramélisé",
      price: "4 000 FCFA",
      desc: "Plantain mûr caramélisé, sauce piment maison.",
      image: aloco,
    },
  ],
  Desserts: [
    {
      name: "Chocolat noir & cacao ivoirien",
      price: "5 500 FCFA",
      desc: "Ganache 72 %, éclats de fèves, glace au cacao.",
      image: chocolat,
    },
    {
      name: "Ananas rôti de Bonoua",
      price: "4 500 FCFA",
      desc: "Rôti au miel, poivre long, sorbet coco.",
      image: aloco,
    },
  ],
  Boissons: [
    {
      name: "Bissap infusé",
      price: "3 000 FCFA",
      desc: "Hibiscus, menthe fraîche, gingembre.",
      image: chocolat,
    },
    {
      name: "Gnamakoudji signature",
      price: "3 500 FCFA",
      desc: "Gingembre pressé, citron vert, sucre de canne.",
      image: aloco,
    },
  ],
};

const categories = Object.keys(menu);

export function MenuSection() {
  const [active, setActive] = useState<string>(categories[0]!);


  return (
    <section id="menu" className="border-y border-border bg-card py-28 sm:py-40">
      <div className="mx-auto max-w-[86rem] px-6">
        <Reveal className="text-center">
          <p className="eyebrow">La carte</p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Une carte <span className="italic text-ember">vivante</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Composée au rythme des marchés d'Abidjan et des saisons ivoiriennes.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-sm border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                  active === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={active}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {(menu[active] ?? []).map((item: Item, i: number) => (
            <article
              key={item.name}
              className="group overflow-hidden border border-border bg-background"
              style={{
                animation: `fade-in 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms both`,
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <span className="shrink-0 text-[0.72rem] tracking-[0.14em] text-accent">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
