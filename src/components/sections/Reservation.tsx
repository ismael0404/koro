import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../Reveal";
import { KoroButton } from "../Button";

const field =
  "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300";

const labelCls =
  "mb-2 block text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground";

export function Reservation() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Demande envoyée", {
        description:
          "Merci ! Notre équipe vous confirme votre table par téléphone.",
      });
    }, 700);
  };

  return (
    <section
      id="reservation"
      className="border-y border-border bg-card py-28 sm:py-40"
    >
      <div
        id="contact"
        className="mx-auto grid max-w-[86rem] gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-24"
      >
        <Reveal>
          <p className="eyebrow">Réservation</p>
          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Réservez votre
            <span className="block italic text-ember">table</span>
          </h2>
          <div className="gold-rule mt-8" />
          <p className="mt-8 text-[0.98rem] leading-relaxed text-muted-foreground">
            Nous confirmons chaque réservation par téléphone. Pour les groupes
            de plus de 10 personnes, contactez-nous directement.
          </p>

          <ul className="mt-12 space-y-7">
            <li className="flex gap-4">
              <MapPin size={18} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="text-sm">Rue des Jardins, Cocody II Plateaux</p>
                <p className="text-sm text-muted-foreground">
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="text-sm">+225 27 22 44 18 90</p>
                <p className="text-sm text-muted-foreground">
                  reservation@koro-abidjan.ci
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock size={18} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="text-sm">Mardi — Dimanche · 12 h — 23 h</p>
                <p className="text-sm text-muted-foreground">Lundi fermé</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="border border-border bg-background p-7 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="nom">
                  Nom
                </label>
                <input id="nom" name="nom" required className={field} placeholder="Votre nom" />
              </div>
              <div>
                <label className={labelCls} htmlFor="tel">
                  Téléphone
                </label>
                <input id="tel" name="tel" type="tel" required className={field} placeholder="+225 ..." />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={field} placeholder="vous@email.com" />
              </div>
              <div>
                <label className={labelCls} htmlFor="date">
                  Date
                </label>
                <input id="date" name="date" type="date" required className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="heure">
                  Heure
                </label>
                <input id="heure" name="heure" type="time" required className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="personnes">
                  Nombre de personnes
                </label>
                <input
                  id="personnes"
                  name="personnes"
                  type="number"
                  min={1}
                  max={30}
                  defaultValue={2}
                  className={field}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="occasion">
                  Occasion spéciale
                </label>
                <select id="occasion" name="occasion" className={field}>
                  <option>Aucune</option>
                  <option>Anniversaire</option>
                  <option>Dîner d'affaires</option>
                  <option>Romantique</option>
                  <option>Célébration familiale</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={field}
                  placeholder="Allergies, placement souhaité…"
                />
              </div>
            </div>

            <KoroButton type="submit" disabled={sending} className="mt-9 w-full">
              {sending ? "Envoi…" : "Réserver ma table"}
            </KoroButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
