import { Users, Sun, Wine } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  {
    icon: Users,
    title: "Dîner privé",
    desc: "Salon fermé de 12 couverts, menu composé avec le chef, service dédié.",
    meta: "À partir de 45 000 FCFA / personne",
  },
  {
    icon: Sun,
    title: "Brunch du dimanche",
    desc: "Buffet ivoirien contemporain, jus pressés, live kora de 11 h à 16 h.",
    meta: "18 000 FCFA / personne",
  },
  {
    icon: Wine,
    title: "Soirée dégustation",
    desc: "Sept services, accords vins et infusions locales, un vendredi par mois.",
    meta: "55 000 FCFA / personne",
  },
];

export function Experiences() {
  return (
    <section
      id="evenements"
      className="border-y border-border bg-card py-28 sm:py-40"
    >
      <div className="mx-auto max-w-[86rem] px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Événements</p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Trois façons de <span className="italic text-ember">célébrer</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <article className="group h-full border border-border bg-background p-9 transition-colors duration-700 hover:border-accent">
                <it.icon
                  size={26}
                  className="text-accent transition-transform duration-700 group-hover:-translate-y-1"
                />
                <h3 className="mt-7 font-display text-3xl">{it.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
                <p className="mt-8 text-[0.66rem] uppercase tracking-[0.2em] text-accent">
                  {it.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
