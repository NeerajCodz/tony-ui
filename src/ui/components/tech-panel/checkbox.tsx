import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {
  effects?: TechPanelEffects;
}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border border-[var(--tp-border-outer)] bg-[var(--tp-inset)] data-[state=checked]:bg-[var(--tp-accent)] data-[state=checked]:text-[var(--tp-bg)] data-[state=checked]:border-[var(--tp-accent)]';
    case 'solid':
      return 'border border-[var(--tp-accent)] bg-[var(--tp-inset)] data-[state=checked]:bg-[var(--tp-accent)] data-[state=checked]:text-[var(--tp-bg)]';
    case 'outline':
      return 'border border-[var(--tp-accent)] bg-transparent data-[state=checked]:bg-[var(--tp-accent)] data-[state=checked]:text-[var(--tp-bg)]';
    case 'ghost':
      return 'border-none bg-[var(--tp-border-inner)]/50 data-[state=checked]:bg-[var(--tp-accent)]/20 data-[state=checked]:text-[var(--tp-accent)]';
    case 'soft':
      return 'border-none bg-[var(--tp-border-inner)]/20 text-[var(--tp-accent)] data-[state=checked]:bg-[var(--tp-accent)]/20';
    case 'subtle':
      return 'border-none bg-[var(--tp-border-inner)]/30 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--tp-border-inner)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-[var(--tp-bg)]';
    case 'disabled':
      return 'border border-[var(--tp-border-inner)]/50 bg-[var(--tp-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border border-[var(--tp-border-outer)] bg-[var(--tp-inset)] data-[state=checked]:bg-[var(--tp-accent)] data-[state=checked]:text-[var(--tp-bg)] data-[state=checked]:border-[var(--tp-accent)]';
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
        className={cn(techPanelEffectsClass(effects), 
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50',
          'flex items-center justify-center font-bold rounded-none',
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
