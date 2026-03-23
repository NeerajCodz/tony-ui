import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Direction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean; dir?: 'ltr' | 'rtl'; effects?: TerminalWindowEffects }
>(({ className, asChild = false, dir = 'ltr', effects = 'on', ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      ref={ref}
      dir={dir}
      className={cn(terminalWindowEffectsClass(effects), className)}
      {...props}
    />
  );
});
Direction.displayName = 'Direction';

export { Direction };
