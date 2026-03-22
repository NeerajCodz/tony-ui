import * as React from 'react';
import { KbdBase } from '@/ui/components/_base/kbd';
import { cn } from '@/lib/utils';

const Kbd = React.forwardRef<HTMLElement, React.ComponentProps<typeof KbdBase>>(
  ({ className, ...props }, ref) => (
    <KbdBase
      ref={ref}
      className={cn('rounded-none border border-b-2 bg-muted px-1 font-mono font-medium text-muted-foreground', className)}
      {...props}
    />
  )
);
Kbd.displayName = 'Kbd';
export { Kbd };
