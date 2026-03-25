import * as React from 'react';
import { CheckboxPrimitive } from '../_base/checkbox';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends CheckboxBaseProps {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'border-2 border-[var(--ac-border)] bg-[var(--ac-surface)] data-[state=checked]:bg-[var(--ac-accent)] data-[state=checked]:text-[var(--ac-bg)] data-[state=checked]:border-[var(--ac-accent)]';
    case 'solid':
      return 'border-2 border-[var(--ac-accent)] bg-[var(--ac-surface)] data-[state=checked]:bg-[var(--ac-accent)] data-[state=checked]:text-[var(--ac-bg)]';
    case 'outline':
      return 'border-2 border-[var(--ac-accent)] bg-transparent data-[state=checked]:bg-[var(--ac-accent)] data-[state=checked]:text-[var(--ac-bg)]';
    case 'ghost':
      return 'border-none bg-[var(--ac-surface)]/50 data-[state=checked]:bg-[var(--ac-accent)]/20 data-[state=checked]:text-[var(--ac-accent)]';
    case 'soft':
      return 'border-none bg-[var(--ac-accent)]/10 text-[var(--ac-accent)] data-[state=checked]:bg-[var(--ac-accent)]/20';
    case 'subtle':
      return 'border-none bg-[var(--ac-surface)]/50 text-[var(--text-secondary)] data-[state=checked]:bg-[var(--ac-surface)] data-[state=checked]:text-[var(--text-primary)]';
    case 'neutral':
      return 'border-2 border-[var(--ac-border)] bg-[var(--ac-surface)] data-[state=checked]:bg-[var(--text-secondary)] data-[state=checked]:text-[var(--ac-bg)]';
    case 'disabled':
      return 'border-2 border-[var(--ac-border)]/50 bg-[var(--ac-bg)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'border-2 border-[var(--ac-border)] bg-[var(--ac-surface)] data-[state=checked]:bg-[var(--ac-accent)] data-[state=checked]:text-[var(--ac-bg)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-4 [--corner:3px]';
    case 'md': return 'h-5 w-5 [--corner:4px]';
    case 'lg': return 'h-6 w-6 [--corner:5px]';
    default: return 'h-5 w-5 [--corner:4px]';
  }
};

export const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, visualType = 'default', size = 'md', style, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style, clipPath: AC_CLIP_PATH } 
      : style;

    return (
      <CheckboxBase
        ref={ref}
        visualType={visualType}
        size={size}
        style={componentStyle}
        className={cn(
          'peer shrink-0 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] disabled:cursor-not-allowed disabled:opacity-50',
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
