import * as React from 'react';
import { CheckboxPrimitive } from '../_base/checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border border-[var(--lg-border)] bg-[var(--lg-surface)] data-[state=checked]:bg-[var(--lg-accent)] data-[state=checked]:text-white data-[state=checked]:border-[var(--lg-accent)]';
    case 'solid':
      return 'border border-[var(--lg-accent)] bg-[var(--lg-surface)] data-[state=checked]:bg-[var(--lg-accent)] data-[state=checked]:text-white';
    case 'outline':
      return 'border border-[var(--lg-accent)] bg-transparent data-[state=checked]:bg-[var(--lg-accent)] data-[state=checked]:text-white';
    case 'ghost':
      return 'border-none bg-[var(--lg-surface)]/50 data-[state=checked]:bg-[var(--lg-accent)]/20 data-[state=checked]:text-[var(--lg-accent)]';
    case 'soft':
      return 'border-none bg-[var(--lg-accent)]/10 text-[var(--lg-accent)] data-[state=checked]:bg-[var(--lg-accent)]/20';
    case 'subtle':
      return 'border-none bg-[var(--lg-surface)]/50 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--lg-surface)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border border-[var(--lg-border)] bg-[var(--lg-surface)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-white';
    case 'disabled':
      return 'border border-[var(--lg-border)]/50 bg-[var(--lg-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border border-[var(--lg-border)] bg-[var(--lg-surface)] data-[state=checked]:bg-[var(--lg-accent)] data-[state=checked]:text-white';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-5 w-5 rounded-md';
    case 'md': return 'h-6 w-6 rounded-lg';
    case 'lg': return 'h-8 w-8 rounded-xl';
    default: return 'h-6 w-6 rounded-lg';
  }
};

export const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, visualType = 'default', size = 'md', ...props }, ref) => {
    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lg-accent)] disabled:cursor-not-allowed disabled:opacity-50',
          'flex items-center justify-center font-bold',
          getVisualTypeStyles(visualType),
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <CheckboxIndicatorBase className="flex items-center justify-center text-current">
          <Check className={cn(
            size === 'sm' ? "h-3 w-3" : size === 'lg' ? "h-5 w-5" : "h-4 w-4",
            "stroke-[3px]"
          )} />
        </CheckboxIndicatorBase>
      </CheckboxBase>
    );
  }
);
Checkbox.displayName = 'Checkbox';
