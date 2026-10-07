import heroDish from "@/assets/hero-dish.jpg";
import { KoroLink } from "../Button";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroDish}
        alt="Plat gastronomique africain servi au restaurant KÔRÔ"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[86rem] flex-col justify-center px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in">Abidjan · Côte d'Ivoire</p>
          <h1
            className="mt-6 text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-8xl"
            style={{ animation: "fade-in 1.2s ease-out both" }}
          >
            Les saveurs de l'Afrique,
            <span className="block italic text-ember">réinventées.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une cuisine authentique, contemporaine et généreuse au cœur
            d'Abidjan.
          </p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <KoroLink href="#menu">Découvrir le menu</KoroLink>
            <KoroLink href="#reservation" variant="outline">
              Réserver une table
            </KoroLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
          Défiler
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
