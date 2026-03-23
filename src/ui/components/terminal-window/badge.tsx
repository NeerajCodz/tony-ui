import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface BadgeProps extends BadgeBaseProps {
  effects?: TerminalWindowEffects;
}

const getVariantStyles = (variant: string = 'default') => {
  switch (variant) {
    case 'secondary':
      return 'border-[var(--tm-phosphor-dim)] bg-[var(--tm-phosphor-dim)]/10 text-[var(--tm-phosphor-dim)] hover:bg-[var(--tm-phosphor-dim)]/20';
    case 'destructive':
      return 'border-red-900 bg-red-950 text-red-500 hover:bg-red-900/50 [text-shadow:0_0_5px_red]';
    case 'outline':
      return 'text-[var(--tm-phosphor)] border-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/10';
    default:
      return 'border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10 text-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/20 [text-shadow:0_0_5px_var(--tm-phosphor)]';
  }
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', effects = 'on', ...props }, ref) => {
    return (
      <BadgeBase
        ref={ref}
        variant={variant}
        className={cn(terminalWindowEffectsClass(effects), 
          'rounded-none border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--tm-phosphor)] focus:ring-offset-2',
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
