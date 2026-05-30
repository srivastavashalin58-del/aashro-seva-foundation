import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "orange"
  | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary hover:bg-primary/10",
  orange: "bg-accent text-accent-foreground hover:opacity-90 shadow-warm",
  white:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-lg font-semibold",
  lg: "px-8 py-3.5 text-base rounded-xl font-semibold",
};

export function AppButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  href,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-smooth font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${
    variantClasses[variant]
  } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
