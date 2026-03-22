import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const toggleVariants = cva(
  'inline-flex items-center justify-center text-sm font-sans font-medium uppercase tracking-wider transition-colors hover:bg-[var(--hf-surface)] hover:text-[var(--hf-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--hf-border-main)] data-[state=on]:text-[var(--hf-bg)] border border-[var(--hf-border-dim)] ring-offset-[var(--hf-bg)] ',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'bg-transparent hover:bg-[var(--hf-surface)] hover:text-[var(--hf-text)]',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & { effects?: HoloFrameEffects } &
    VariantProps<typeof toggleVariants>
>(({ className, effects = 'on', variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), toggleVariants({ variant, size, className }))}
    style={{ } as React.CSSProperties}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
