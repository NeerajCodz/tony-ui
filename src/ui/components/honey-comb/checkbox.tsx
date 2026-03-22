import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {
  effects?: HoneyCombEffects;
}


const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] data-[state=checked]:bg-[var(--hc-plasma-1)] data-[state=checked]:text-[var(--hc-bg)] data-[state=checked]:border-[var(--hc-plasma-1)]';
    case 'solid':
      return 'border border-[var(--hc-plasma-1)] bg-[var(--hc-surface)] data-[state=checked]:bg-[var(--hc-plasma-1)] data-[state=checked]:text-[var(--hc-bg)]';
    case 'outline':
      return 'border border-[var(--hc-plasma-1)] bg-transparent data-[state=checked]:bg-[var(--hc-plasma-1)] data-[state=checked]:text-[var(--hc-bg)]';
    case 'ghost':
      return 'border-none bg-[var(--hc-surface)]/50 data-[state=checked]:bg-[var(--hc-plasma-1)]/20 data-[state=checked]:text-[var(--hc-plasma-1)]';
    case 'soft':
      return 'border-none bg-[var(--hc-plasma-1)]/10 text-[var(--hc-plasma-1)] data-[state=checked]:bg-[var(--hc-plasma-1)]/20';
    case 'subtle':
      return 'border-none bg-[var(--hc-surface)]/50 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--hc-surface)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-[var(--hc-bg)]';
    case 'disabled':
      return 'border border-[var(--hc-hex-line)]/50 bg-[var(--hc-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] data-[state=checked]:bg-[var(--hc-plasma-1)] data-[state=checked]:text-[var(--hc-bg)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-4 ';
    case 'md': return 'h-5 w-5 ';
    case 'lg': return 'h-6 w-6 ';
    default: return 'h-5 w-5 ';
  }
};

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, effects = 'on', visualType = 'default', size = 'md', style, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style } 
      : style;

    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        style={componentStyle}
        className={cn(honeyCombEffectsClass(effects), 
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] disabled:cursor-not-allowed disabled:opacity-50',
          'flex items-center justify-center font-bold',
          getVisualTypeStyles(visualType),
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <CheckboxIndicatorBase className="flex items-center justify-center text-current">
          <Check className="h-4 w-4 stroke-[3px]" />
        </CheckboxIndicatorBase>
      </CheckboxBase>
    );
  }
);
Checkbox.displayName = 'Checkbox';
