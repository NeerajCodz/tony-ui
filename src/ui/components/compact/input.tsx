import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';

export interface InputProps extends InputBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--cp-accent)] text-[var(--cp-accent)] placeholder:text-[var(--cp-accent)]/50 focus:border-[var(--cp-accent)] focus:ring-[var(--cp-accent)]/20 bg-[var(--cp-accent)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--cp-accent)] focus:bg-[var(--cp-bg)]';
    case 'outline':
      return 'bg-transparent border border-[var(--cp-accent)] text-[var(--cp-accent)] placeholder:text-[var(--cp-accent)]/50 focus:bg-[var(--cp-bg)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--cp-bg)] focus:border focus:border-[var(--cp-accent)]';
    case 'soft':
      return 'bg-[var(--cp-accent)]/10 border-none text-[var(--cp-accent)] placeholder:text-[var(--cp-accent)]/50 focus:bg-[var(--cp-accent)]/20 focus:border focus:border-[var(--cp-accent)]';
    case 'subtle':
      return 'bg-[var(--cp-bg)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--cp-bg)] focus:text-[var(--text-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--cp-bg)]/20';
    case 'neutral':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--cp-bg)] border-none text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)] focus:border focus:border-[var(--cp-accent)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--cp-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-6 px-2 py-1 text-[11px]';
    case 'md': return 'h-7 px-3 py-1 text-xs';
    case 'lg': return 'h-8 px-4 py-2 text-xs';
    default: return 'h-7 px-3 py-1 text-xs';
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
          'w-full font-mono font-medium rounded-sm',
          'transition-all duration-75 outline-none file:bg-transparent file:text-xs file:font-medium file:text-[var(--text-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-1 focus:ring-offset-1 focus:ring-offset-[var(--cp-bg)] focus:ring-[var(--cp-accent)]',
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
