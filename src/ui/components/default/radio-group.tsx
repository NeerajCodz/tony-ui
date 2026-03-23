import * as React from 'react';
import { RadioGroupBase, RadioGroupItemBase, RadioGroupIndicatorBase, type RadioGroupBaseProps, type RadioGroupItemBaseProps } from '../_base/radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RadioGroupProps extends RadioGroupBaseProps {}
export interface RadioGroupItemProps extends RadioGroupItemBaseProps {}

const getItemStyles = (visualType: string = 'default', size: string = 'md') => {
    // Base styles
    let styles = 'aspect-square rounded-full border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--df-bg)] disabled:cursor-not-allowed disabled:opacity-50';
    
    // Type styles
    switch (visualType) {
        case 'default':
        case 'solid':
            styles += ' border-[var(--df-border)] bg-[var(--df-surface)] text-[var(--df-accent)] data-[state=checked]:border-[var(--df-accent)] data-[state=checked]:text-[var(--df-accent)]';
            break;
        case 'outline':
            styles += ' border-[var(--df-border)] bg-transparent text-[var(--df-accent)] data-[state=checked]:border-[var(--df-accent)]';
            break;
        case 'tinted':
            styles += ' border-none bg-[var(--df-accent)]/10 text-[var(--df-accent)] data-[state=checked]:bg-[var(--df-accent)]/20';
            break;
        case 'soft':
            styles += ' border-none bg-[var(--df-surface)] text-[var(--df-muted)] data-[state=checked]:bg-[var(--df-surface)] data-[state=checked]:text-[var(--df-accent)]';
            break;
        case 'neutral':
            styles += ' border-[var(--df-border)] bg-[var(--df-surface)] text-[var(--df-text)] data-[state=checked]:border-[var(--df-text)] data-[state=checked]:text-[var(--df-text)]';
            break;
    }

    // Size styles
    switch (size) {
        case 'sm': styles += ' h-3.5 w-3.5'; break;
        case 'md': styles += ' h-4 w-4'; break;
        case 'lg': styles += ' h-5 w-5'; break;
        default: styles += ' h-4 w-4'; break;
    }

    return styles;
}

export const RadioGroup = React.forwardRef<React.ComponentRef<typeof RadioGroupBase>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupBase
        ref={ref}
        className={cn('grid gap-2', className)}
        {...props}
      />
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

export const RadioGroupItem = React.forwardRef<React.ComponentRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
        <RadioGroupItemBase
          ref={ref}
          className={cn(
            getItemStyles('default', 'md'),
            className
        )}
        {...props}
      >
        <RadioGroupIndicatorBase className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupIndicatorBase>
      </RadioGroupItemBase>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';
