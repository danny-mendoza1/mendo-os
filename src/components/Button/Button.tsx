import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  target,
  children,
  className = "",
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();

  // Handle conflicting props - warn developer if both href and onClick provided
  if (href && onClick && import.meta.env.DEV) {
    console.warn(
      "Button: Both href and onClick provided. The link (href) will take precedence. Consider using only one."
    );
  }

  if (href) {
    return (
      <a href={href} target={target} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} type="button">
      {children}
    </button>
  );
}
