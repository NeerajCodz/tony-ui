import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ToggleBase, type ToggleBaseProps, type ToggleType, type ToggleSize } from '@/ui/components/_base/toggle';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-none font-mono text-sm font-medium transition-all hover:bg-[var(--cb-trace-dim)]/10 hover:text-[var(--cb-trace-lit)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-trace-lit)] disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--cb-trace-lit)] data-[state=on]:text-[var(--cb-bg)] data-[state=on]:shadow-[0_0_8px_var(--cb-trace-lit)] uppercase tracking-wider',
  {
    variants: {
      visualType: {
        default: 'bg-transparent border border-transparent',
        outline: 'border border-[var(--cb-trace-lit)] bg-transparent hover:bg-[var(--cb-trace-lit)] hover:text-[var(--cb-bg)]',
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

const Toggle = React.forwardRef<React.ElementRef<typeof ToggleBase>, ToggleProps>(
  ({ className, visualType, size, ...props }, ref) => (
    <ToggleBase
      ref={ref}
      className={cn(toggleVariants({ visualType: toToggleVisualType(visualType), size: toToggleVisualSize(size), className }))}
      {...props}
    />
  )
);
Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants };
