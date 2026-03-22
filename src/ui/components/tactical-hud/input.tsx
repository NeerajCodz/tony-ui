import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: TacticalHudEffects;
}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--th-alert)] text-[var(--th-alert)] placeholder:text-[var(--th-alert)]/50 focus:bg-[var(--th-alert)]/5';
  }

  switch (visualType) {
    case 'default':
      // No border, handled by bracketsStyle
      return 'bg-[var(--th-surface)]/80 text-[var(--th-primary)] placeholder:text-[var(--th-muted)] focus:bg-[var(--th-surface)]';
    case 'outline':
      // No border, handled by bracketsStyle
      return 'bg-transparent text-[var(--th-primary)] placeholder:text-[var(--th-primary)]/50 focus:bg-[var(--th-primary)]/5';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--th-primary)] placeholder:text-[var(--th-muted)] focus:bg-[var(--th-primary)]/5';
    case 'soft':
      return 'bg-[var(--th-primary)]/5 border-none text-[var(--th-primary)] placeholder:text-[var(--th-primary)]/50 focus:bg-[var(--th-primary)]/10';
    case 'subtle':
      return 'bg-[var(--th-surface)]/30 border-none text-[var(--th-muted)] placeholder:text-[var(--th-muted)] focus:bg-[var(--th-surface)]/50 focus:text-[var(--th-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--th-primary)] placeholder:text-[var(--th-muted)] focus:bg-[var(--th-surface)]/20';
    case 'neutral':
      return 'bg-[var(--th-surface)] border border-[var(--th-muted)] text-[var(--th-muted)] placeholder:text-[var(--th-muted)] focus:border-[var(--th-primary)]';
    case 'elevated':
      return 'bg-[var(--th-surface)] border-none text-[var(--th-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--th-surface)]/80 text-[var(--th-primary)] placeholder:text-[var(--th-muted)]';
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
  ({ className, effects = 'on', visualType = 'default', inputSize = 'md', invalid = false, style, ...props }, ref) => {
    // Apply brackets style for default and outline types
    const useBrackets = ['default', 'outline'].includes(visualType || '');
    const componentStyle = (useBrackets && !invalid) ? { ...bracketsStyle, ...style } : style;

    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        style={componentStyle}
        className={cn(tacticalHudEffectsClass(effects), 
          'w-full font-sans font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--th-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-0', // Remove ring, we use brackets/borders
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
