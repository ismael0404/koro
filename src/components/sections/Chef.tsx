import chef from "@/assets/chef.jpg";
import { Reveal } from "../Reveal";

export function Chef() {
  return (
    <section
      id="chef"
      className="border-y border-border bg-card py-28 sm:py-40"
    >
      <div className="mx-auto grid max-w-[86rem] items-center gap-16 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <Reveal>
          <img
            src={chef}
            alt="Portrait du Chef Amadou Koné"
            loading="lazy"
            width={1104}
            height={1408}
            className="w-full object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Le Chef</p>
          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Chef <span className="italic text-ember">Amadou Koné</span>
          </h2>
          <div className="gold-rule mt-8" />
          <div className="mt-8 space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              Né à Korhogo, formé à Abidjan puis à Lyon, Amadou Koné est revenu
              au pays avec une conviction simple : la cuisine ivoirienne n'a
              rien à prouver, seulement à être servie avec exigence.
            </p>
            <p>
              Il travaille les produits du terroir — igname, attiéké, néré,
              cacao — avec les techniques les plus précises, sans jamais trahir
              le goût d'origine.
            </p>
          </div>
          <blockquote className="mt-10 border-l border-accent pl-7 font-display text-2xl italic leading-relaxed sm:text-3xl">
            « On ne modernise pas une recette. On lui rend sa dignité. »
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
