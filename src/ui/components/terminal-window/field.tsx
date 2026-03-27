import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/ui/components/terminal-window/label';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';


export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  description?: string;
  effects?: TerminalWindowEffects;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, error, description, children, effects = 'on', ...props }, ref) => {
    return (
      <div ref={ref} className={cn(terminalWindowEffectsClass(effects), 'w-full space-y-2', className)} {...props}>
        {label && <Label>{label}</Label>}
        {children}
        {description && (
          <p className='text-sm text-[var(--tm-phosphor-dim)] font-mono'>{description}</p>
        )}
        {error && <p className='text-sm font-medium text-[var(--tm-red)] font-mono'>{error}</p>}
      </div>
    );
  }
);
Field.displayName = 'Field';

export { Field };
