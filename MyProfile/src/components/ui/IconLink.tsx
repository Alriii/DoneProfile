import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function IconLink({ href, label, children, className }: IconLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "flex size-11 items-center justify-center rounded-lg border border-white/35 bg-black/40 text-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple hover:bg-purple",
        className,
      )}
    >
      {children}
    </a>
  );
}
