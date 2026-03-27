import { cn } from '@/lib/utils';
import * as React from 'react';
import { ToggleBase, type ToggleBaseProps } from '../_base/toggle';

export const Toggle = React.forwardRef<React.ComponentRef<typeof ToggleBase>, ToggleBaseProps>(
  ({ className, visualType = 'default', size = 'md', ...props }, ref) => (
    <ToggleBase
      ref={ref}
      visualType={visualType}
      size={size}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-[var(--df-muted)]/50 hover:text-[var(--df-muted-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--df-accent)] data-[state=on]:text-[var(--df-accent-foreground)]',
        visualType === 'ghost' && 'bg-transparent',
        visualType === 'outline' && 'border border-[var(--df-border)] bg-transparent',
        size === 'sm' && 'h-9 px-3',
        size === 'md' && 'h-10 px-3',
        size === 'lg' && 'h-11 px-5',
        className
      )}
      {...props}
    />
  )
);
Toggle.displayName = 'Toggle';
