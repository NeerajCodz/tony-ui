import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import { PackageOpen } from 'lucide-react';

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'flex h-[450px] shrink-0 items-center justify-center rounded border border-[var(--th-hex-line)] border-dashed bg-[var(--th-surface)]',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--th-plasma-1)]/10">
          <PackageOpen className="h-10 w-10 text-[var(--th-plasma-1)]" />
        </div>
        <h3 className="mt-4 text-lg font-bold font-sans uppercase tracking-wider text-[var(--text-primary)]">
            No data found
        </h3>
        <p className="mb-4 mt-2 text-sm text-[var(--text-muted)] font-sans">
            There is no data to display at this time.
        </p>
        {children}
      </div>
    </div>
  );
});
EmptyState.displayName = 'EmptyState';

export { EmptyState };
