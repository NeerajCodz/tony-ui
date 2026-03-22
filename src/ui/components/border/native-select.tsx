import * as React from 'react';
import { NativeSelectBase } from '@/ui/components/_base/native-select';
import { cn } from '@/lib/utils';

const NativeSelect = React.forwardRef<HTMLSelectElement, React.ComponentProps<typeof NativeSelectBase>>(
  ({ className, ...props }, ref) => (
    <NativeSelectBase
      ref={ref}
      className={cn('rounded-none border-2 border-[var(--br-border-dim)] font-mono', className)}
      {...props}
    />
  )
);
NativeSelect.displayName = 'NativeSelect';
export { NativeSelect };
