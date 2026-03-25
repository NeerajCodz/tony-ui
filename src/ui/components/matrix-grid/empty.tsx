import * as React from 'react';
import { cn } from '@/lib/utils';
import { Terminal } from 'lucide-react';
import type { EmptyBaseProps } from '../_base/empty';

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full min-h-[300px] w-full flex-col items-center justify-center border border-dashed border-[var(--mg-border)] bg-[var(--mg-surface)]/20 p-8 text-center animate-in fade-in-50 font-mono',
      className
    )}
    {...props}
  >
    <div className="flex h-16 w-16 items-center justify-center border border-[var(--mg-accent)] bg-[var(--mg-surface)] shadow-[0_0_10px_rgba(0,255,85,0.2)] mb-4">
      <Terminal className="h-8 w-8 text-[var(--mg-accent)]" />
    </div>
    <h3 className="text-lg font-bold text-[var(--mg-text)] uppercase tracking-widest">[ NO DATA ]</h3>
    <p className="mt-2 text-sm text-[var(--mg-text-dim)] max-w-sm mx-auto">
      {children || "System found no records matching query."}
    </p>
  </div>
));
Empty.displayName = 'Empty';

export { Empty };
