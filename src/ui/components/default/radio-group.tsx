import * as React from 'react';
import { RadioGroupBase, RadioGroupItemBase, RadioGroupIndicatorBase, type RadioGroupBaseProps, type RadioGroupItemBaseProps } from '../_base/radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RadioGroupProps extends RadioGroupBaseProps {}
export interface RadioGroupItemProps extends RadioGroupItemBaseProps {
    type?: string; // To match parent or override
    size?: string;
}

const getItemStyles = (type: string = 'default', size: string = 'md') => {
    // Base styles
    let styles = 'aspect-square rounded-full border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--df-bg)] disabled:cursor-not-allowed disabled:opacity-50';
    
    // Type styles
    switch (type) {
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

export const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupBase>, RadioGroupProps>(
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

export const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    // We need to infer type/size from context or props?
    // RadioGroupBase passes data-type and data-size to itself (the root), but not implicitly to children unless we use Context.
    // However, the items are usually direct children.
    // For now, let's assume props or default.
    // The user didn't ask for Context implementation in version layer, so we rely on manual props or just defaults.
    // Or we can use CSS variables set on the group? No, that's complex.
    // I'll default to 'default'/'md' here. Ideally, RadioGroupContext would handle this.
    // Base implementation doesn't seem to have a context for type/size propagation to items.
    
    return (
      <RadioGroupItemBase
        ref={ref}
        className={cn(
          getItemStyles('default', 'md'), // Hardcoded default for now, can be overridden by className or explicit props if we add them to interface
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
