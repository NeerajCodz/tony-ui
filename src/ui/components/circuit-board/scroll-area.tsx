import * as React from 'react';
import { ScrollAreaBase, ScrollAreaViewportBase, ScrollBarBase, ScrollBarThumbBase, ScrollAreaCornerBase } from '@/ui/components/_base/scroll-area';
import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaBase>, React.ComponentPropsWithoutRef<typeof ScrollAreaBase>>(
  ({ className, children, ...props }, ref) => (
    <ScrollAreaBase
      ref={ref}
      className={cn('relative overflow-hidden border border-[var(--cb-trace)] rounded-none bg-[var(--cb-soldermask)]', className)}
      {...props}
    >
      <ScrollAreaViewportBase className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaViewportBase>
      <ScrollBar />
      <ScrollAreaCornerBase />
    </ScrollAreaBase>
  )
);
ScrollArea.displayName = 'ScrollArea';

const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollBarBase>, React.ComponentPropsWithoutRef<typeof ScrollBarBase>>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollBarBase
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-[var(--cb-trace)] p-[1px]',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-[var(--cb-trace)] p-[1px]',
        className
      )}
      {...props}
    >
      <ScrollBarThumbBase className="relative flex-1 rounded-none bg-[var(--cb-trace-lit)] shadow-[0_0_5px_var(--cb-trace-lit)]" />
    </ScrollBarBase>
  )
);
ScrollBar.displayName = 'ScrollBar';

export { ScrollArea, ScrollBar };
