import { ReactNode } from 'react';
import { cn, variantStyles, sizeStyles } from '../../../lib/cn';
import { Variant, Size } from '../../../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  version?: string | number;
}

export function Button({
  variant = 'default',
  size = 'md',
  className,
  children,
  version,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded transition-all duration-200 active:scale-95';
  const variantStylesClass = variantStyles[variant];
  const sizeStylesClass = sizeStyles[size];

  return (
    <button
      className={cn(baseStyles, variantStylesClass, sizeStylesClass, className)}
      {...props}
    >
      {children}
      {version && <span className="ml-2 text-xs opacity-50">(v{version})</span>}
    </button>
  );
}
