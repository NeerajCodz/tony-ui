import { cn } from '@/lib/utils';
import { ToggleBase, type ToggleBaseProps, type ToggleSize, type ToggleType } from '@/ui/components/_base/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-none font-mono text-sm font-medium ring-offset-background transition-colors hover:bg-[var(--br-surface)] hover:text-[var(--br-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--br-accent)] data-[state=on]:text-[var(--br-bg)]',
  {
    variants: {
      visualType: {
        default: 'bg-transparent border border-transparent',
        outline: 'border border-[var(--br-border-dim)] bg-transparent hover:bg-[var(--br-surface)] hover:text-[var(--br-accent)]',
      },
      size: {
        default: 'h-10 px-3 min-w-10',
        sm: 'h-9 px-2.5 min-w-9',
        lg: 'h-11 px-5 min-w-11',
      }
    },
    defaultVariants: {
      visualType: 'default',
      size: 'default',
    },
  }
);

type ToggleVisualType = Exclude<NonNullable<VariantProps<typeof toggleVariants>['visualType']>, null | undefined>;
type ToggleVisualSize = Exclude<NonNullable<VariantProps<typeof toggleVariants>['size']>, null | undefined>;

const toToggleVisualType = (visualType?: ToggleType): ToggleVisualType | undefined =>
  visualType === 'outline' ? 'outline' : 'default';

const toToggleVisualSize = (size?: ToggleSize): ToggleVisualSize | undefined => {
  if (!size || size === 'md' || size === 'xs') return 'default';
  return size === 'sm' ? 'sm' : 'lg';
};

export interface ToggleProps extends ToggleBaseProps {}

const Toggle = React.forwardRef<React.ComponentRef<typeof ToggleBase>, ToggleProps>(
  ({ className, visualType, size, ...props }, ref) => (
    <ToggleBase
      ref={ref}
      className={cn(toggleVariants({ visualType: toToggleVisualType(visualType), size: toToggleVisualSize(size), className }))}
      {...props}
    />
  )
);
Toggle.displayName = 'Toggle';

export { Toggle,toggleVariants };
