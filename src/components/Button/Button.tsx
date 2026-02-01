import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  target?: '_blank' | '_self';
  children: ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  href, 
  onClick, 
  target,
  children,
  className = ''
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        className={buttonClass}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
