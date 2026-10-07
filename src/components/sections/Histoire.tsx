import interior from "@/assets/interior.jpg";
import { Reveal } from "../Reveal";

export function Histoire() {
  return (
    <section id="histoire" className="grain relative py-28 sm:py-40">
      <div className="mx-auto grid max-w-[86rem] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative">
            <img
              src={interior}
              alt="Salle du restaurant KÔRÔ à Abidjan"
              loading="lazy"
              width={1600}
              height={1104}
              className="w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden bg-card px-8 py-7 sm:block">
              <p className="font-display text-4xl text-accent">2014</p>
              <p className="mt-1 text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
                Première table
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Notre histoire</p>
          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Plus qu'un restaurant.
            <span className="block italic text-ember">Une histoire.</span>
          </h2>
          <div className="gold-rule mt-8" />
          <div className="mt-8 space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              KÔRÔ est né d'un souvenir : celui d'une cour de Treichville, d'un
              feu de bois et d'une grand-mère qui remuait lentement une sauce
              graine en racontant le pays. « Kôrô » veut dire l'aîné, celui qui
              transmet.
            </p>
            <p>
              Nous avons voulu offrir à cette mémoire une table à sa hauteur :
              des produits ivoiriens choisis chaque matin au marché de Cocody,
              des cuissons précises, un service qui prend le temps.
            </p>
            <p>
              Ici, l'attiéké côtoie le dressage contemporain, le poisson braisé
              rencontre la sauce montée au beurre de karité. Rien ne se perd,
              tout se réinvente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
