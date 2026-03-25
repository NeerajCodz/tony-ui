import * as React from 'react';
import { Slot } from '../_base/field';
import { cn } from '@/lib/utils';
import { Label } from './label';

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    description?: string;
    error?: string;
    id?: string;
  }
>(({ className, label, description, error, id, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('grid gap-2', className)} {...props}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {description && (
        <p className="text-[0.8rem] text-muted-foreground font-body">{description}</p>
      )}
      {error && (
        <p className="text-[0.8rem] font-medium text-destructive font-body">{error}</p>
      )}
    </div>
  );
});
Field.displayName = 'Field';

export { Field };
