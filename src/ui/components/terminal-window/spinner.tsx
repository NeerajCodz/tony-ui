import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

import type * as __BaseImport_spinner from '../_base/spinner';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg' | 'xl';
  effects?: TerminalWindowEffects;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'default', effects = 'on', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    };

    return (
      <div ref={ref} className={cn(terminalWindowEffectsClass(effects), 'flex items-center justify-center', className)} {...props}>
        <Loader2
          className={cn(
            'animate-spin text-[var(--tm-phosphor)]',
            sizeClasses[size],
            className
          )}
        />
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };
