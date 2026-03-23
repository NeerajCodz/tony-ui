import * as React from 'react';
import { SeparatorBase, type SeparatorBaseProps } from '@/ui/components/_base/separator';
import { cn } from '@/lib/utils';

const Separator = React.forwardRef<React.ComponentRef<typeof SeparatorBase>, SeparatorBaseProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorBase
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'shrink-0 bg-[var(--cb-trace)] shadow-[0_0_2px_var(--cb-trace)] transition-colors',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = 'Separator';

export { Separator };
