import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputBaseProps {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--ac-danger)] text-[var(--ac-danger)] placeholder:text-[var(--ac-danger)]/50 focus:border-[var(--ac-danger)] focus:ring-[var(--ac-danger)]/20 bg-[var(--ac-danger)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--ac-accent)] focus:bg-[var(--ac-bg)]';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ac-accent)] text-[var(--ac-accent)] placeholder:text-[var(--ac-accent)]/50 focus:bg-[var(--ac-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ac-surface)] focus:border-2 focus:border-[var(--ac-accent)]';
    case 'soft':
      return 'bg-[var(--ac-accent)]/10 border-none text-[var(--ac-accent)] placeholder:text-[var(--ac-accent)]/50 focus:bg-[var(--ac-accent)]/20 focus:border-2 focus:border-[var(--ac-accent)]';
    case 'subtle':
      return 'bg-[var(--ac-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ac-surface)] focus:text-[var(--text-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--ac-surface)]/20';
    case 'neutral':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--ac-surface)] border-none text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)] focus:border-2 focus:border-[var(--ac-accent)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--ac-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs [--corner:6px]';
    case 'md': return 'h-10 px-4 text-sm [--corner:8px]';
    case 'lg': return 'h-12 px-6 text-base [--corner:10px]';
    default: return 'h-10 px-4 text-sm [--corner:8px]';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, visualType = 'default', inputSize = 'md', invalid = false, style, ...props }, ref) => {
    // Merge custom style with clip-path, unless it's unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style, clipPath: AC_CLIP_PATH } 
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
          'focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--ac-bg)] focus:ring-transparent', // Hide default ring, use border
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
