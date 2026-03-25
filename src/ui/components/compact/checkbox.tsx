import * as React from 'react';
import { CheckboxPrimitive } from '../_base/checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border border-[var(--cp-border)] bg-[var(--cp-bg)] data-[state=checked]:bg-[var(--cp-accent)] data-[state=checked]:text-[var(--cp-bg)] data-[state=checked]:border-[var(--cp-accent)]';
    case 'solid':
      return 'border border-[var(--cp-accent)] bg-[var(--cp-bg)] data-[state=checked]:bg-[var(--cp-accent)] data-[state=checked]:text-[var(--cp-bg)]';
    case 'outline':
      return 'border border-[var(--cp-accent)] bg-transparent data-[state=checked]:bg-[var(--cp-accent)] data-[state=checked]:text-[var(--cp-bg)]';
    case 'ghost':
      return 'border-none bg-[var(--cp-bg)]/50 data-[state=checked]:bg-[var(--cp-accent)]/20 data-[state=checked]:text-[var(--cp-accent)]';
    case 'soft':
      return 'border-none bg-[var(--cp-accent)]/10 text-[var(--cp-accent)] data-[state=checked]:bg-[var(--cp-accent)]/20';
    case 'subtle':
      return 'border-none bg-[var(--cp-bg)]/50 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--cp-bg)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border border-[var(--cp-border)] bg-[var(--cp-bg)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-[var(--cp-bg)]';
    case 'disabled':
      return 'border border-[var(--cp-border)]/50 bg-[var(--cp-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border border-[var(--cp-border)] bg-[var(--cp-bg)] data-[state=checked]:bg-[var(--cp-accent)] data-[state=checked]:text-[var(--cp-bg)]';
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

export const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, visualType = 'default', size = 'md', style, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled
    

    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cp-accent)] disabled:cursor-not-allowed disabled:opacity-50',
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
