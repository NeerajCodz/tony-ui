import * as React from 'react';
import { AlertBase, AlertTitleBase, AlertDescriptionBase, type AlertBaseProps } from '../_base/alert';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface AlertProps extends AlertBaseProps {
  effects?: TerminalWindowEffects;
}

const getVariantStyles = (variant: string = 'default') => {
  switch (variant) {
    case 'destructive': return 'border-red-900 text-red-500 [&>svg]:text-red-500 bg-red-950/20 [text-shadow:0_0_5px_red]';
    case 'warning': return 'border-yellow-900 text-yellow-500 [&>svg]:text-yellow-500 bg-yellow-950/20 [text-shadow:0_0_5px_yellow]';
    case 'success': return 'border-[var(--tm-phosphor)] text-[var(--tm-phosphor)] [&>svg]:text-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10 [text-shadow:0_0_5px_var(--tm-phosphor)]';
    case 'info': return 'border-blue-900 text-blue-500 [&>svg]:text-blue-500 bg-blue-950/20 [text-shadow:0_0_5px_blue]';
    default: return 'border-[var(--tm-phosphor)] text-[var(--tm-phosphor)] [&>svg]:text-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/5';
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, effects = 'on', variant = 'default', ...props }, ref) => {
    return (
      <AlertBase
        ref={ref}
        variant={variant}
        className={cn(terminalWindowEffectsClass(effects), 
          'relative w-full rounded-none border-l-4 p-4 pl-12 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5 font-mono',
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'mb-1 font-bold leading-none tracking-wider uppercase', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: TerminalWindowEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'text-sm [&_p]:leading-relaxed opacity-90', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
