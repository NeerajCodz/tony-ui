import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, orientation = 'horizontal', decorator = true, effects = 'on', ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorator}
    orientation={orientation}
    className={cn(terminalWindowEffectsClass(effects), 
      'shrink-0 bg-[var(--tm-phosphor)]/20',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
