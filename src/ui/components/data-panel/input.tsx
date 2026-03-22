import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputBaseProps {}


const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--dp-critical)] text-[var(--dp-critical)] placeholder:text-[var(--dp-critical)]/50 focus:border-[var(--dp-critical)] focus:ring-[var(--dp-critical)]/20 bg-[var(--dp-critical)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--dp-accent)] focus:bg-[var(--dp-bg)]';
    case 'outline':
      return 'bg-transparent border border-[var(--dp-accent)] text-[var(--dp-accent)] placeholder:text-[var(--dp-accent)]/50 focus:bg-[var(--dp-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--dp-surface)] focus:border focus:border-[var(--dp-accent)]';
    case 'soft':
      return 'bg-[var(--dp-accent)]/10 border-none text-[var(--dp-accent)] placeholder:text-[var(--dp-accent)]/50 focus:bg-[var(--dp-accent)]/20 focus:border focus:border-[var(--dp-accent)]';
    case 'subtle':
      return 'bg-[var(--dp-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--dp-surface)] focus:text-[var(--text-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--dp-surface)]/20';
    case 'neutral':
      return 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--dp-surface)] border-none text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)] focus:border focus:border-[var(--dp-accent)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--dp-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs ';
    case 'md': return 'h-10 px-4 text-sm ';
    case 'lg': return 'h-12 px-6 text-base ';
    default: return 'h-10 px-4 text-sm ';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, visualType = 'default', inputSize = 'md', invalid = false, style, ...props }, ref) => {
    // Merge custom style with clip-path, unless it's unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style } 
      : style;

    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        style={componentStyle}
        className={cn(
          'w-full font-mono font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--text-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-1 focus:ring-offset-2 focus:ring-offset-[var(--dp-bg)] focus:ring-transparent', // Hide default ring, use border
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
