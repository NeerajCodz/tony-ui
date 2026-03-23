import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-2 border-[var(--ra-destructive)] text-[var(--ra-destructive)] placeholder:text-[var(--ra-destructive)]/50 focus:shadow-[4px_4px_0_var(--ra-destructive)] bg-[var(--ra-destructive)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] placeholder:text-[var(--text-muted)] focus:border-[var(--ra-accent)] focus:shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ra-accent)] text-[var(--ra-accent)] placeholder:text-[var(--ra-accent)]/50 focus:shadow-[4px_4px_0_var(--ra-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--ra-text)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ra-surface)] focus:border-2 focus:border-[var(--ra-accent)]';
    case 'soft':
      return 'bg-[rgba(64,96,255,0.08)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-secondary)]/50 focus:shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'subtle':
      return 'bg-[var(--ra-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ra-surface)] focus:text-[var(--ra-text)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--ra-text)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ra-surface)]/20';
    case 'neutral':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)] focus:shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'elevated':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)] focus:shadow-[6px_6px_0_var(--ra-shadow)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] placeholder:text-[var(--text-muted)] focus:border-[var(--ra-accent)] focus:shadow-[4px_4px_0_var(--ra-shadow)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs';
    case 'md': return 'h-10 px-4 text-sm';
    case 'lg': return 'h-12 px-6 text-base';
    default: return 'h-10 px-4 text-sm';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, visualType = 'default', inputSize = 'md', invalid = false, ...props }, ref) => {
    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        className={cn(
          'w-full font-mono font-medium rounded-[4px]',
          'transition-all duration-100 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--ra-text)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-0', // Disable ring, use shadow/border
          getVisualTypeStyles(visualType, invalid),
          getSizeStyles(inputSize),
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
