import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: HoloFrameEffects;
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, effects = 'on', children, ...props }, ref) => {
    return (
      <NativeSelectBase
        className={cn(holoFrameEffectsClass(effects), 
          'flex h-10 w-full items-center justify-between border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] px-3 py-2 text-sm placeholder:text-[var(--hf-text)] focus:outline-none focus:ring-1 focus:ring-[var(--hf-border-main)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--hf-text)] appearance-none',
          className
        )}
        style={{ '--corner': '6px' } as React.CSSProperties}
        ref={ref}
        {...props}
      >
        {children}
      </NativeSelectBase>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
