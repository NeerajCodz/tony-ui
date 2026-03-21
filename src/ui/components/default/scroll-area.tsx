import * as React from 'react';
import { 
    ScrollAreaBase, 
    ScrollAreaViewportBase, 
    ScrollAreaScrollbarBase, 
    ScrollAreaThumbBase, 
    ScrollAreaCornerBase,
    type ScrollAreaBaseProps
} from '../_base/scroll-area';
import { cn } from '@/lib/utils';

export interface ScrollAreaProps extends ScrollAreaBaseProps {}

export const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaBase>, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <ScrollAreaBase
      ref={ref}
      className={cn('relative overflow-hidden', className)}
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

export const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaScrollbarBase>, React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbarBase>>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaScrollbarBase
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 border-t border-t-transparent p-[1px]',
        className
      )}
      {...props}
    >
      <ScrollAreaThumbBase className="relative flex-1 rounded-full bg-[var(--df-border)]" />
    </ScrollAreaScrollbarBase>
  )
);
ScrollBar.displayName = 'ScrollBar';
