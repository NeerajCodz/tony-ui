import { cn } from '@/lib/utils';
import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';

export interface ButtonProps extends ButtonBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] hover:border-[#2a2e4d] active:bg-[#0f111a]';
    case 'solid':
      return 'bg-[var(--df-accent)] border-none text-white hover:opacity-90 active:brightness-90';
    case 'outline':
      return 'bg-transparent border border-[var(--df-accent)] text-[var(--df-accent)] hover:bg-[var(--df-accent)]/10 active:bg-[var(--df-accent)]/20';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--df-text)] hover:bg-[var(--df-surface)] active:bg-[var(--df-surface)]/80';
    case 'inverse':
      return 'bg-[var(--df-text)] border-none text-[var(--df-bg)] hover:opacity-90 active:opacity-80';
    case 'contrast':
      return 'bg-white border-none text-black hover:bg-gray-100 active:bg-gray-200';
    case 'soft':
      return 'bg-[rgba(91,109,255,0.1)] border-none text-[var(--df-text)] hover:bg-[rgba(91,109,255,0.15)] active:bg-[rgba(91,109,255,0.2)]';
    case 'subtle':
        return 'bg-[var(--df-surface)]/50 border-none text-[var(--df-text)] hover:bg-[var(--df-surface)]';
    case 'link':
        return 'bg-transparent border-none text-[var(--df-accent)] hover:underline p-0 h-auto';
    case 'unstyled':
        return '';
    // Fallback for others
    default:
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-5 px-2 text-[10px]';
    case 'sm': return 'h-7 px-3 text-xs';
    case 'md': return 'h-9 px-4 text-sm';
    case 'lg': return 'h-11 px-5 text-base';
    case 'xl': return 'h-[52px] px-6 text-lg';
    default: return 'h-9 px-4 text-sm';
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, visualType = 'default', size = 'md', ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(
          'font-medium transition-all duration-150 ease-in-out rounded-md inline-flex items-center justify-center whitespace-nowrap',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--df-bg)]',
          'disabled:opacity-50 disabled:pointer-events-none',
          getVisualTypeStyles(visualType),
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
