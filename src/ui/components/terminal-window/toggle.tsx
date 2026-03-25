import * as React from 'react';
import { TogglePrimitive } from '../_base/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors hover:bg-[var(--tm-phosphor)]/10 hover:text-[var(--tm-phosphor)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--tm-phosphor)]/20 data-[state=on]:text-[var(--tm-phosphor)] font-mono uppercase tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-[var(--tm-phosphor)] bg-transparent hover:bg-[var(--tm-phosphor)]/10 hover:text-[var(--tm-phosphor)]',
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-8 px-2',
        lg: 'h-10 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants> & { effects?: TerminalWindowEffects }
>(({ className, variant, size, effects = 'on', ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), toggleVariants({ variant, size, className }))}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
