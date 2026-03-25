import * as React from 'react';
import { cn } from '@/lib/utils';
import { PackageOpen } from 'lucide-react';
import type { EmptyBaseProps } from '../_base/empty';

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full min-h-[300px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--lg-border)] bg-[var(--lg-surface)]/50 p-8 text-center animate-in fade-in-50',
      className
    )}
    {...props}
  >
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--lg-surface)] shadow-sm mb-4">
      <PackageOpen className="h-10 w-10 text-[var(--text-muted)]" />
    </div>
    <h3 className="text-xl font-semibold text-[var(--lg-text)]">No data</h3>
    <p className="mt-2 text-base text-[var(--text-muted)] max-w-sm mx-auto">
      {children || "There is nothing to show here yet."}
    </p>
  </div>
));
Empty.displayName = 'Empty';

export { Empty };
