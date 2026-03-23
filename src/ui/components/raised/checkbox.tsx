import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] data-[state=checked]:bg-[var(--ra-accent)] data-[state=checked]:text-white data-[state=checked]:border-[var(--ra-accent)] shadow-[2px_2px_0_var(--ra-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_var(--ra-shadow)]';
    case 'solid':
      return 'border-2 border-[var(--ra-accent)] bg-[var(--ra-surface)] data-[state=checked]:bg-[var(--ra-accent)] data-[state=checked]:text-white shadow-[2px_2px_0_var(--ra-shadow-accent)]';
    case 'outline':
      return 'border-2 border-[var(--ra-accent)] bg-transparent data-[state=checked]:bg-[var(--ra-accent)] data-[state=checked]:text-white shadow-[2px_2px_0_var(--ra-accent)]';
    case 'ghost':
      return 'border-none bg-[var(--ra-surface)]/50 data-[state=checked]:bg-[var(--ra-accent)]/20 data-[state=checked]:text-[var(--ra-accent)]';
    case 'soft':
      return 'border-none bg-[var(--ra-accent)]/10 text-[var(--ra-accent)] data-[state=checked]:bg-[var(--ra-accent)]/20';
    case 'subtle':
      return 'border-none bg-[var(--ra-surface)]/50 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--ra-surface)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-white shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'disabled':
      return 'border-2 border-[var(--ra-border)]/50 bg-[var(--ra-bg)] opacity-50 cursor-not-allowed shadow-none';
    case 'unstyled':
      return '';
    default:
      return 'border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] data-[state=checked]:bg-[var(--ra-accent)] data-[state=checked]:text-white shadow-[2px_2px_0_var(--ra-shadow)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-4 rounded-[4px]';
    case 'md': return 'h-5 w-5 rounded-[4px]';
    case 'lg': return 'h-6 w-6 rounded-[4px]';
    default: return 'h-5 w-5 rounded-[4px]';
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
          'peer shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] disabled:cursor-not-allowed disabled:opacity-50',
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
