import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "../Reveal";
import heroDish from "@/assets/hero-dish.jpg";
import interior from "@/assets/interior.jpg";
import equipe from "@/assets/gallery-equipe.jpg";
import clients from "@/assets/gallery-clients.jpg";
import cuisine from "@/assets/gallery-cuisine.jpg";
import chocolat from "@/assets/dish-chocolat.jpg";

const photos = [
  { src: heroDish, alt: "Plat signature dressé", span: "sm:col-span-2 sm:row-span-2" },
  { src: interior, alt: "Salle du restaurant", span: "" },
  { src: equipe, alt: "L'équipe de KÔRÔ", span: "" },
  { src: cuisine, alt: "En cuisine pendant le service", span: "sm:col-span-2" },
  { src: clients, alt: "Nos clients à table", span: "" },
  { src: chocolat, alt: "Dessert au cacao ivoirien", span: "" },
];

export function Galerie() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galerie" className="py-28 sm:py-40">
      <div className="mx-auto max-w-[86rem] px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            L'atmosphère <span className="italic text-ember">KÔRÔ</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-4 sm:auto-rows-[200px]">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={i * 70} className={p.span}>
              <button
                onClick={() => setOpen(i)}
                className="group h-full w-full overflow-hidden"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.2s] group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="animate-fade-in fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Fermer"
            className="absolute right-6 top-6 p-2 text-foreground"
            onClick={() => setOpen(null)}
          >
            <X size={26} />
          </button>
          <img
            src={photos[open]!.src}
            alt={photos[open]!.alt}
            className="max-h-[85vh] max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
