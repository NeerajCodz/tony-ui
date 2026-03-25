import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { PackageOpen } from 'lucide-react';
import type { EmptyBaseProps } from '../_base/empty';

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 
        'flex h-[450px] shrink-0 items-center justify-center rounded border border-[var(--hf-border-dim)] border-dashed bg-[var(--hf-surface)]',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--hf-border-main)]/10">
          <PackageOpen className="h-10 w-10 text-[var(--hf-border-main)]" />
        </div>
        <h3 className="mt-4 text-lg font-bold font-sans uppercase tracking-wider text-[var(--hf-text)]">
            No data found
        </h3>
        <p className="mb-4 mt-2 text-sm text-[var(--hf-text)] font-mono">
            There is no data to display at this time.
        </p>
        {children}
      </div>
    </div>
  );
});
EmptyState.displayName = 'EmptyState';

export { EmptyState };
