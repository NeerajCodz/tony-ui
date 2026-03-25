import * as React from 'react';
import { SeparatorPrimitive } from '../_base/separator';
import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { effects?: boolean }
>(({ className, orientation = 'horizontal', decorative = true, effects = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-[var(--ne-primary)]/30',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      getNeonGlow(effects),
      className
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
