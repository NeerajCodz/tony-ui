import * as React from 'react';
import { cn } from '@/lib/utils';
import { PackageOpen } from 'lucide-react';
import type { EmptyBaseProps } from '../_base/empty';

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-[450px] shrink-0 items-center justify-center rounded-none border border-[var(--dp-border)] border-dashed bg-[var(--dp-surface)]',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--dp-accent)]/10">
          <PackageOpen className="h-10 w-10 text-[var(--dp-accent)]" />
        </div>
        <h3 className="mt-4 text-lg font-bold font-mono uppercase tracking-wider text-[var(--text-primary)]">
            No data found
        </h3>
        <p className="mb-4 mt-2 text-sm text-[var(--text-muted)] font-mono">
            There is no data to display at this time.
        </p>
        {children}
      </div>
    </div>
  );
});
EmptyState.displayName = 'EmptyState';

export { EmptyState };
