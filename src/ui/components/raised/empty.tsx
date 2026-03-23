import * as React from 'react';
import { cn } from '@/lib/utils';
import { PackageOpen } from 'lucide-react';

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full min-h-[300px] w-full flex-col items-center justify-center rounded-[4px] border-2 border-dashed border-[var(--ra-border)] bg-[var(--ra-surface)]/50 p-8 text-center animate-in fade-in-50 font-mono',
      className
    )}
    {...props}
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-[4px] bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] shadow-[4px_4px_0_var(--ra-shadow)] mb-4">
      <PackageOpen className="h-8 w-8 text-[var(--text-muted)]" />
    </div>
    <h3 className="text-lg font-bold text-[var(--ra-text)] uppercase tracking-wider">No data</h3>
    <p className="mt-1 text-sm text-[var(--text-muted)] max-w-sm mx-auto">
      {children || "There is nothing to show here yet."}
    </p>
  </div>
));
Empty.displayName = 'Empty';

export { Empty };
