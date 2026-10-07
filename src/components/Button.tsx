import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  outline:
    "border border-border text-foreground hover:border-accent hover:text-accent",
  ghost: "text-accent hover:text-foreground",
};

export function KoroLink({
  variant = "solid",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function KoroButton({
  variant = "solid",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
