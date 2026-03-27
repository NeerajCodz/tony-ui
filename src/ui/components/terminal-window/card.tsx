import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase } from '../_base/card';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface CardProps extends React.ComponentPropsWithoutRef<typeof CardBase> {
  effects?: TerminalWindowEffects;
  variant?: 'default' | 'solid' | 'outline' | 'ghost' | 'inverse';
}

const getVariantStyles = (variant: string = 'default') => {
  switch (variant) {
    case 'solid':
      return 'bg-[var(--tm-phosphor)]/10 border-[var(--tm-phosphor)] text-[var(--tm-phosphor)]';
    case 'outline':
      return 'bg-transparent border-[var(--tm-phosphor)] text-[var(--tm-phosphor)] border-dashed';
    case 'ghost':
      return 'bg-transparent border-transparent text-[var(--tm-phosphor)]';
    case 'inverse':
      return 'bg-[var(--tm-phosphor)] text-[var(--tm-bg)] border-[var(--tm-phosphor)]';
    default:
      return 'bg-[var(--tm-bg)] border-[var(--tm-phosphor)] text-[var(--tm-phosphor)]';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, effects = 'on', variant = 'default', ...props }, ref) => (
    <CardBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 
        'rounded-none border-2 shadow-[0_0_10px_rgba(0,0,0,0.5)]',
        getVariantStyles(variant),
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'flex flex-col space-y-1.5 p-6 border-b border-[var(--tm-phosphor)]/30 bg-[var(--tm-phosphor)]/5', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'font-mono text-2xl font-bold leading-none tracking-tight uppercase [text-shadow:0_0_5px_var(--tm-phosphor)]', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'text-sm text-[var(--tm-phosphor-dim)] font-mono', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(terminalWindowEffectsClass(effects), 'p-6 pt-6 font-mono', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'flex items-center p-6 pt-0 border-t border-[var(--tm-phosphor)]/30 mt-auto bg-[var(--tm-phosphor)]/5', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
