import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '@/ui/components/_base/switch';
import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center border border-[var(--br-border-dim)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-4 w-8',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
      visualType: {
        default: 'data-[state=checked]:bg-[var(--br-accent)] data-[state=unchecked]:bg-[var(--br-surface)]',
        solid: 'data-[state=checked]:bg-[var(--br-accent)] data-[state=unchecked]:bg-[var(--br-border-dim)]',
        outline: 'border-[var(--br-accent)] bg-transparent',
        tinted: 'bg-[var(--br-accent)]/10 border-[var(--br-accent)]/20',
        soft: 'bg-[var(--br-surface)]',
        neutral: 'bg-[var(--br-surface)] border-[var(--br-border-dim)]',
        unstyled: '',
      }
    },
    defaultVariants: {
      size: 'md',
      visualType: 'default',
    },
  }
);

const thumbVariants = cva('pointer-events-none block bg-[var(--br-bg)] shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0', {
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
