import { Star } from "lucide-react";
import { Reveal } from "../Reveal";

const avis = [
  {
    text: "Le poulet braisé signature est la meilleure chose que j'ai mangée à Abidjan. Le service est d'une élégance rare.",
    name: "Aïcha Traoré",
    role: "Abidjan",
  },
  {
    text: "Une salle magnifique, une lumière chaude, et une carte qui raconte vraiment la Côte d'Ivoire. On y retourne chaque mois.",
    name: "Serge Kouamé",
    role: "Cocody",
  },
  {
    text: "Nous avons privatisé le salon pour un anniversaire : menu sur mesure, équipe attentive, soirée inoubliable.",
    name: "Fatou Bamba",
    role: "Plateau",
  },
  {
    text: "Le dessert au cacao ivoirien vaut à lui seul le déplacement. Une adresse que je recommande à tous mes visiteurs.",
    name: "Jean-Marc Dosso",
    role: "Marcory",
  },
];

export function Avis() {
  return (
    <section className="py-28 sm:py-40">
      <div className="mx-auto max-w-[86rem] px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Ils sont venus</p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Ce qu'ils en <span className="italic text-ember">disent</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={i * 100}>
              <figure className="h-full border border-border bg-card p-9">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl italic leading-relaxed sm:text-2xl">
                  « {a.text} »
                </blockquote>
                <figcaption className="mt-7 text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {a.name} — {a.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
