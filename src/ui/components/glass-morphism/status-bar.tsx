import * as React from 'react';
import {
  StatusBarBase,
  StatusBarIndicatorBase,
  type StatusBarBaseProps,
  type StatusBarState,
} from '@/ui/components/_base/status-bar';
import { cn } from '@/lib/utils';
import { glassEffectsClass, type GlassEffects } from './_effects';

const statusColors: Record<StatusBarState, string> = {
  ready: 'bg-[var(--df-success)]',
  busy: 'bg-[var(--df-warning)]',
  error: 'bg-[var(--df-error)]',
  offline: 'bg-[var(--df-muted-text)]',
};

export interface StatusBarProps extends Omit<StatusBarBaseProps, 'status'> {
  effects?: GlassEffects;
  status?: StatusBarState;
  label?: string;
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ className, effects = 'on', status = 'ready', label, ...props }, ref) => {
    return (
      <StatusBarBase
        ref={ref}
        status={status}
        className={cn(
          glassEffectsClass(effects),
          'flex h-8 items-center justify-between rounded-md border border-[var(--gl-glass-border)]/30 bg-[var(--gl-glass-bg)]/30 px-3 text-xs backdrop-blur-md',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <StatusBarIndicatorBase
            status={status}
            className={cn('h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]', statusColors[status])}
          />
          <span className="font-sans font-medium text-[var(--df-text)]">{label || status.toUpperCase()}</span>
        </div>

        <div className="flex items-center gap-4 font-sans text-[var(--df-muted-text)]">
          <span>SYSTEM</span>
          <span>ONLINE</span>
        </div>
      </StatusBarBase>
    );
  }
);
StatusBar.displayName = 'StatusBar';

export { StatusBar };
