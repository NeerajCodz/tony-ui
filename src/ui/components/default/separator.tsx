import { cn } from '@/lib/utils';
import * as React from 'react';
import { SeparatorBase, type SeparatorBaseProps } from '../_base/separator';

const Separator = React.forwardRef<React.ComponentRef<typeof SeparatorBase>, SeparatorBaseProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorBase
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-[var(--df-border)]',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = 'Separator';

export { Separator };
