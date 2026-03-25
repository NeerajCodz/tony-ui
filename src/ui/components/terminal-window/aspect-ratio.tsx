import * as React from 'react';
import { AspectRatioPrimitive } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const AspectRatio = React.forwardRef<
  React.ComponentRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'border border-[var(--tm-phosphor)] bg-[var(--tm-bg)]', className)}
    {...props}
  />
));
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };
