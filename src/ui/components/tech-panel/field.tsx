import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Label } from './label';

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
  effects?: TechPanelEffects;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, effects = 'on', label, error, description, required, children, ...props }, ref) => {
    const id = React.useId();
    
    // Clone child to add id if it's a valid element
    const child = React.isValidElement(children) 
      ? React.cloneElement(children as React.ReactElement<any>, { id })
      : children;

    return (
      <div ref={ref} className={cn(techPanelEffectsClass(effects), 'flex flex-col gap-1.5', className)} {...props}>
        {label && (
          <Label htmlFor={id} className={cn(error && 'text-[var(--df-destructive)]', 'flex items-center gap-1')}>
            {label}
            {required && <span className='text-[var(--tp-accent)]'>*</span>}
          </Label>
        )}
        {child}
        {description && !error && (
          <p className='text-[0.8rem] text-[var(--text-muted)] font-mono'>{description}</p>
        )}
        {error && (
          <p className='text-[0.8rem] font-medium text-[var(--df-destructive)] font-mono'>{error}</p>
        )}
      </div>
    );
  }
);
Field.displayName = 'Field';

export { Field };
