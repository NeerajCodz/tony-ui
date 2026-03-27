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
  'aspect-square h-4 w-4 rounded-full border border-[var(--cb-trace)] text-[var(--cb-trace-lit)] shadow-[0_0_5px_rgba(0,0,0,0)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cb-trace-lit)] disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-[0_0_8px_var(--cb-trace-lit)] transition-all',
  {
    variants: {
      type: {
        default: 'bg-[var(--cb-soldermask)]',
        solid: 'bg-[var(--cb-trace-dim)] border-transparent data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=checked]:text-[var(--cb-bg)]',
        outline: 'bg-transparent border-[var(--cb-trace-lit)]',
        tinted: 'bg-[var(--cb-trace)]/10 border-[var(--cb-trace)]/30',
        soft: 'bg-[var(--cb-soldermask)] border-transparent',
        neutral: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace-dim)] text-[var(--cb-trace-dim)]',
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
          <Circle className="h-2.5 w-2.5 fill-current text-current drop-shadow-[0_0_2px_currentColor]" />
        </RadioGroupIndicatorBase>
      </RadioGroupItemBase>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup,RadioGroupItem };
