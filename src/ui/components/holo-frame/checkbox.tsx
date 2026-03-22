import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {
  effects?: HoloFrameEffects;
}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] data-[state=checked]:bg-[var(--hf-border-main)] data-[state=checked]:text-[var(--hf-bg)] data-[state=checked]:border-[var(--hf-border-main)]';
    case 'solid':
      return 'border border-[var(--hf-border-main)] bg-[var(--hf-surface)] data-[state=checked]:bg-[var(--hf-border-main)] data-[state=checked]:text-[var(--hf-bg)]';
    case 'outline':
      return 'border border-[var(--hf-border-main)] bg-transparent data-[state=checked]:bg-[var(--hf-border-main)] data-[state=checked]:text-[var(--hf-bg)]';
    case 'ghost':
      return 'border-none bg-[var(--hf-surface)]/50 data-[state=checked]:bg-[var(--hf-border-main)]/20 data-[state=checked]:text-[var(--hf-border-main)]';
    case 'soft':
      return 'border-none bg-[var(--hf-border-main)]/10 text-[var(--hf-border-main)] data-[state=checked]:bg-[var(--hf-border-main)]/20';
    case 'subtle':
      return 'border-none bg-[var(--hf-surface)]/50 text-[var(--hf-text)] data-[state=checked]:bg-[var(--hf-surface)] data-[state=checked]:text-[var(--hf-text)]';
    case 'neutral':
      return 'border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] data-[state=checked]:bg-[var(--hf-text)] data-[state=checked]:text-[var(--hf-bg)]';
    case 'disabled':
      return 'border border-[var(--hf-border-dim)]/50 bg-[var(--hf-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] data-[state=checked]:bg-[var(--hf-border-main)] data-[state=checked]:text-[var(--hf-bg)]';
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

    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        style={style}
        className={cn(holoFrameEffectsClass(effects), 
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] disabled:cursor-not-allowed disabled:opacity-50',
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
