import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  to?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-2 border-purple bg-purple text-white hover:border-purple-dark hover:bg-purple-dark",
  secondary:
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-bg",
  ghost:
    "border border-white bg-transparent text-white hover:bg-white hover:text-bg",
};

export function Button({
  children,
  variant = "primary",
  className,
  to,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5",
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
