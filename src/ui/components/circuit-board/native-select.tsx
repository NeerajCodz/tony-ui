import { cn } from '@/lib/utils';
import { NativeSelectBase } from '@/ui/components/_base/native-select';
import * as React from 'react';

const NativeSelect = React.forwardRef<HTMLSelectElement, React.ComponentProps<typeof NativeSelectBase>>(
  ({ className, ...props }, ref) => (
    <NativeSelectBase
      ref={ref}
      className={cn('rounded-none border-2 border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] font-mono uppercase tracking-widest', className)}
      {...props}
    />
  )
);
NativeSelect.displayName = 'NativeSelect';
export { NativeSelect };
