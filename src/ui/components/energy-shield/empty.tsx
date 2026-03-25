import * as React from 'react';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import { PackageOpen } from 'lucide-react';
import type { EmptyBaseProps } from '../_base/empty';

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 
        'flex h-[450px] shrink-0 items-center justify-center rounded border border-[var(--es-hex-line)] border-dashed bg-[var(--es-surface)]',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--es-plasma-1)]/10">
          <PackageOpen className="h-10 w-10 text-[var(--es-plasma-1)]" />
        </div>
        <h3 className="mt-4 text-lg font-bold font-sans uppercase tracking-wider text-[var(--text-primary)]">
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
