import { cn } from '@/lib/utils';
import { Check, Minus } from 'lucide-react';
import * as React from 'react';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';

export interface CheckboxProps extends CheckboxBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-red-500/50 text-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white focus:ring-red-500/20';
  }

  switch (visualType) {
    case 'default':
    case 'solid':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] data-[state=checked]:bg-[var(--df-accent)] data-[state=checked]:border-[var(--df-accent)] data-[state=checked]:text-white hover:border-[var(--df-accent)]/50';
    case 'outline':
      return 'bg-transparent border border-[var(--df-border)] text-[var(--df-text)] data-[state=checked]:border-[var(--df-accent)] data-[state=checked]:text-[var(--df-accent)]';
    case 'tinted':
        return 'bg-[var(--df-accent)]/10 border-none text-[var(--df-accent)] data-[state=checked]:bg-[var(--df-accent)] data-[state=checked]:text-white';
    case 'soft':
        return 'bg-[var(--df-surface)] border-none text-[var(--df-muted)] data-[state=checked]:bg-[var(--df-accent)]/20 data-[state=checked]:text-[var(--df-accent)]';
    case 'neutral':
        return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] data-[state=checked]:bg-[var(--df-text)] data-[state=checked]:border-[var(--df-text)] data-[state=checked]:text-[var(--df-bg)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] data-[state=checked]:bg-[var(--df-accent)] data-[state=checked]:border-[var(--df-accent)] data-[state=checked]:text-white';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-3.5 w-3.5 rounded';
    case 'md': return 'h-4 w-4 rounded';
    case 'lg': return 'h-5 w-5 rounded-md';
    default: return 'h-4 w-4 rounded';
  }
};

const getIconSize = (size: string = 'md') => {
    switch (size) {
        case 'sm': return 'h-2.5 w-2.5';
        case 'md': return 'h-3 w-3';
        case 'lg': return 'h-3.5 w-3.5';
        default: return 'h-3 w-3';
    }
}

export const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxBase>, CheckboxProps>(
  ({ className, visualType = 'default', size = 'md', invalid = false, children, ...props }, ref) => {
    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        invalid={invalid}
        className={cn(
          'peer shrink-0 ring-offset-[var(--df-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150',
          getVisualTypeStyles(visualType, invalid),
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <CheckboxIndicatorBase className={cn("flex items-center justify-center text-current")}>
            {/* Show Check for checked, Minus for mixed/indeterminate */}
            <Check className={cn(getIconSize(size), "hidden data-[state=checked]:block")} />
            <Minus className={cn(getIconSize(size), "hidden data-[state=indeterminate]:block")} />
        </CheckboxIndicatorBase>
      </CheckboxBase>
    );
  }
);
Checkbox.displayName = 'Checkbox';
