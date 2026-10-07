import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { KoroLink } from "./Button";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#chef", label: "Le Chef" },
  { href: "#evenements", label: "Événements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border bg-background/90 py-3 backdrop-blur-xl"
          : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[86rem] items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-display text-2xl tracking-[0.3em] text-foreground"
        >
          KÔRÔ
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <KoroLink href="#reservation" className="hidden md:inline-flex">
            Réserver une table
          </KoroLink>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-foreground lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/98 px-6 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <KoroLink
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-7 w-full"
          >
            Réserver une table
          </KoroLink>
        </div>
      )}
    </header>
  );
}
