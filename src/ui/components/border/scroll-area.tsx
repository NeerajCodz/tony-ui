import * as React from 'react';
import { ScrollAreaBase, ScrollAreaViewportBase, ScrollBarBase, ScrollBarThumbBase, ScrollAreaCornerBase } from '@/ui/components/_base/scroll-area';
import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaBase>, React.ComponentPropsWithoutRef<typeof ScrollAreaBase>>(
  ({ className, children, ...props }, ref) => (
    <ScrollAreaBase
      ref={ref}
      className={cn('relative overflow-hidden border border-[var(--br-border-dim)] rounded-none', className)}
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
          'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className
      )}
      {...props}
    >
      <ScrollBarThumbBase className="relative flex-1 rounded-none bg-border" />
    </ScrollBarBase>
  )
);
ScrollBar.displayName = 'ScrollBar';

export { ScrollArea, ScrollBar };
