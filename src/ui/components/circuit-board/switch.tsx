import { cn } from '@/lib/utils';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '@/ui/components/_base/switch';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center border border-[var(--cb-trace)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-trace-lit)] focus-visible:shadow-[0_0_8px_var(--cb-trace-lit)] disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-4 w-8',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
      visualType: {
        default: 'data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=checked]:shadow-[0_0_8px_var(--cb-trace-lit)] data-[state=unchecked]:bg-[var(--cb-soldermask)]',
        solid: 'data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=unchecked]:bg-[var(--cb-trace-dim)]',
        outline: 'border-[var(--cb-trace-lit)] bg-transparent',
        tinted: 'bg-[var(--cb-trace)]/10 border-[var(--cb-trace)]/30',
        soft: 'bg-[var(--cb-soldermask)]',
        neutral: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace-dim)]',
        unstyled: '',
      }
    },
    defaultVariants: {
      size: 'md',
      visualType: 'default',
    },
  }
);

const thumbVariants = cva('pointer-events-none block bg-[var(--cb-bg)] shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0', {
  variants: {
    size: {
      sm: 'h-3 w-3 data-[state=checked]:translate-x-4',
      md: 'h-4 w-4 data-[state=checked]:translate-x-4',
      lg: 'h-5 w-5 data-[state=checked]:translate-x-5',
    }
  },
  defaultVariants: {
    size: 'md',
  }
});

type SwitchVisualType = Exclude<NonNullable<VariantProps<typeof switchVariants>['visualType']>, null | undefined>;
type SwitchVisualSize = Exclude<NonNullable<VariantProps<typeof switchVariants>['size']>, null | undefined>;

export interface SwitchProps extends Omit<SwitchBaseProps, 'size'> {
  visualType?: SwitchVisualType;
  visualSize?: SwitchVisualSize;
}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchBase>, SwitchProps>(
  ({ className, visualSize, visualType, ...props }, ref) => (
    <SwitchBase
      className={cn(switchVariants({ size: visualSize, visualType, className }))}
      {...props}
      ref={ref}
    >
      <SwitchThumbBase className={cn(thumbVariants({ size: visualSize }))} />
    </SwitchBase>
  )
);
Switch.displayName = 'Switch';

export { Switch };
