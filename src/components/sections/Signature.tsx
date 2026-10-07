import signature from "@/assets/signature.jpg";
import { Reveal } from "../Reveal";
import { KoroLink } from "../Button";

export function Signature() {
  return (
    <section className="grain relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto grid max-w-[86rem] items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={signature}
              alt="Poulet braisé signature du restaurant KÔRÔ"
              loading="lazy"
              width={1408}
              height={1408}
              className="relative w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Notre signature</p>
          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Poulet braisé
            <span className="block italic text-ember">24 heures</span>
          </h2>
          <div className="gold-rule mt-8" />
          <p className="mt-8 text-[0.98rem] leading-relaxed text-muted-foreground">
            Une volaille fermière marinée une journée entière dans le gingembre,
            l'ail et le néré, puis braisée lentement sur le feu de bois jusqu'à
            l'obtention d'une laque profonde. Servie avec un attiéké fin et une
            sauce piment fumée.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["24 h", "Marinade"],
              ["3 h", "Braisage"],
              ["12 000", "FCFA"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-accent">{v}</dt>
                <dd className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
          <KoroLink href="#reservation" className="mt-10">
            Goûter ce plat
          </KoroLink>
        </Reveal>
      </div>
    </section>
  );
}
