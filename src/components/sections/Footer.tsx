import { Instagram, Facebook, Music2 } from "lucide-react";
import { Reveal } from "../Reveal";
import { KoroLink } from "../Button";

export function Footer() {
  return (
    <>
      <section className="grain relative py-28 text-center sm:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl leading-tight sm:text-6xl lg:text-7xl">
              Une table vous <span className="italic text-ember">attend.</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <KoroLink href="#reservation">Réserver maintenant</KoroLink>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border bg-card py-16">
        <div className="mx-auto grid max-w-[86rem] gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl tracking-[0.3em]">KÔRÔ</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cuisine africaine contemporaine au cœur d'Abidjan.
            </p>
          </div>
          <div>
            <p className="eyebrow">Adresse</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rue des Jardins
              <br />
              Cocody II Plateaux
              <br />
              Abidjan, Côte d'Ivoire
            </p>
          </div>
          <div>
            <p className="eyebrow">Horaires</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mardi — Jeudi · 12 h — 22 h
              <br />
              Vendredi — Dimanche · 12 h — 23 h
              <br />
              Lundi fermé
            </p>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              +225 27 22 44 18 90
              <br />
              reservation@koro-abidjan.ci
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-accent">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-accent">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="TikTok" className="transition-colors hover:text-accent">
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-[86rem] flex-col gap-3 border-t border-border px-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} KÔRÔ — Tous droits réservés
          </p>
          <p className="text-[0.66rem] tracking-[0.12em] text-muted-foreground">
            Made by Naon Ismael
          </p>
        </div>
      </footer>
    </>
  );
}
