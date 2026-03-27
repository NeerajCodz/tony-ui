import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: EnergyShieldEffects;
}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--es-plasma-3)] text-[var(--es-plasma-3)] placeholder:text-[var(--es-plasma-3)]/50 focus:border-[var(--es-plasma-3)] focus:ring-[var(--es-plasma-3)]/20 bg-[var(--es-plasma-3)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--es-plasma-1)] focus:bg-[var(--es-bg)]';
    case 'outline':
      return 'bg-transparent border border-[var(--es-plasma-1)] text-[var(--es-plasma-1)] placeholder:text-[var(--es-plasma-1)]/50 focus:bg-[var(--es-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--es-surface)] focus:border focus:border-[var(--es-plasma-1)]';
    case 'soft':
      return 'bg-[var(--es-plasma-1)]/10 border-none text-[var(--es-plasma-1)] placeholder:text-[var(--es-plasma-1)]/50 focus:bg-[var(--es-plasma-1)]/20 focus:border focus:border-[var(--es-plasma-1)]';
    case 'subtle':
      return 'bg-[var(--es-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--es-surface)] focus:text-[var(--text-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--es-surface)]/20';
    case 'neutral':
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--es-surface)] border-none text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)] focus:border focus:border-[var(--es-plasma-1)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--es-plasma-1)]';
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
        className={cn(energyShieldEffectsClass(effects), 
          'w-full font-sans font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--text-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--es-bg)] focus:ring-transparent', // Hide default ring, use border
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
