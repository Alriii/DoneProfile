import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function Card({ children, className, href }: CardProps) {
  const classes = cn(
    "rounded-xl border border-purple/35 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-light hover:shadow-[0_8px_30px_rgba(147,51,234,0.2)]",
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}
