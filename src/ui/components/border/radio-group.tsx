import { cn } from '@/lib/utils';
import { RadioGroupBase, RadioGroupIndicatorBase, RadioGroupItemBase, type RadioGroupBaseProps, type RadioGroupItemBaseProps } from '@/ui/components/_base/radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import * as React from 'react';

const RadioGroup = React.forwardRef<React.ComponentRef<typeof RadioGroupBase>, RadioGroupBaseProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupBase className={cn('grid gap-2', className)} {...props} ref={ref} />;
  }
);
RadioGroup.displayName = 'RadioGroup';

const radioItemVariants = cva(
  'aspect-square h-4 w-4 rounded-full border border-[var(--br-border-dim)] text-[var(--br-accent)] shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--br-accent)] disabled:cursor-not-allowed disabled:opacity-50 hover:border-[var(--br-accent)]',
  {
    variants: {
      type: {
        default: 'bg-[var(--br-bg)]',
        solid: 'bg-[var(--br-surface)] border-transparent data-[state=checked]:bg-[var(--br-accent)] data-[state=checked]:text-[var(--br-bg)]',
        outline: 'bg-transparent',
        tinted: 'bg-[var(--br-accent)]/10 border-[var(--br-accent)]/20',
        soft: 'bg-[var(--br-surface)] border-transparent',
        neutral: 'bg-[var(--br-surface)] border-[var(--br-border-dim)] text-[var(--text-primary)]',
        unstyled: '',
      },
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      }
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
  }
);

type RadioVisualType = Exclude<NonNullable<VariantProps<typeof radioItemVariants>['type']>, null | undefined>;
type RadioVisualSize = Exclude<NonNullable<VariantProps<typeof radioItemVariants>['size']>, null | undefined>;

export interface RadioGroupItemProps extends RadioGroupItemBaseProps {
  visualType?: RadioVisualType;
  visualSize?: RadioVisualSize;
}

const RadioGroupItem = React.forwardRef<React.ComponentRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, visualType, visualSize, ...props }, ref) => {
    return (
      <RadioGroupItemBase
        ref={ref}
        className={cn(radioItemVariants({ type: visualType, size: visualSize, className }))}
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

export { RadioGroup,RadioGroupItem };
