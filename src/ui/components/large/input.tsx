import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-red-500 text-red-500 placeholder:text-red-500/50 focus:border-red-500 focus:ring-red-500/20 bg-red-500/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] placeholder:text-[var(--text-muted)] focus:border-[var(--lg-accent)] focus:ring-2 focus:ring-[var(--lg-accent)]/20';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--lg-accent)] text-[var(--lg-accent)] placeholder:text-[var(--lg-accent)]/50 focus:bg-[var(--lg-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--lg-text)] placeholder:text-[var(--text-muted)] focus:bg-[var(--lg-surface)]';
    case 'soft':
      return 'bg-[var(--lg-accent)]/10 border-none text-[var(--lg-accent)] placeholder:text-[var(--lg-accent)]/50 focus:bg-[var(--lg-accent)]/20';
    case 'subtle':
      return 'bg-[var(--lg-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--lg-surface)] focus:text-[var(--lg-text)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--lg-text)] placeholder:text-[var(--text-muted)] focus:bg-[var(--lg-surface)]/20';
    case 'neutral':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--lg-surface)] border-none text-[var(--lg-text)] shadow-lg focus:shadow-xl';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] placeholder:text-[var(--text-muted)] focus:border-[var(--lg-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-10 px-4 text-sm rounded-xl';
    case 'md': return 'h-14 px-6 text-base rounded-2xl';
    case 'lg': return 'h-16 px-8 text-lg rounded-2xl';
    default: return 'h-14 px-6 text-base rounded-2xl';
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
          'w-full font-sans font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--lg-text)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
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
