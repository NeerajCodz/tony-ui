import * as React from 'react';
import { AlertBase, AlertTitleBase, AlertDescriptionBase, AlertCloseBase, type AlertBaseProps } from '../_base/alert';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { X } from 'lucide-react';

export interface AlertProps extends AlertBaseProps {
  effects?: TacticalHudEffects;
}

const getVariantStyles = (variant: string = 'default') => {
  // Styles for different variants
  const isDestructive = variant === 'destructive';
  const isWarning = variant === 'warning';
  const isSuccess = variant === 'success';

  if (isDestructive) {
    return 'bg-[var(--th-alert)]/10 text-[var(--th-alert)] [&>svg]:text-[var(--th-alert)]';
  }
  if (isWarning) {
    return 'bg-yellow-500/10 text-yellow-500 [&>svg]:text-yellow-500';
  }
  if (isSuccess) {
    return 'bg-green-500/10 text-green-500 [&>svg]:text-green-500';
  }

  // Default
  return 'bg-[var(--th-surface)]/80 text-[var(--th-primary)] [&>svg]:text-[var(--th-primary)]';
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, effects = 'on', variant = 'default', type = 'default', dismissible, style, children, ...props }, ref) => {
    // Apply brackets style for all alerts
    // But modify brackets color based on variant? 
    // bracketsStyle uses --th-bracket and --th-pip.
    // If destructive, we might want red brackets.
    // We can override --th-bracket in style.
    
    let bracketColor = {};
    if (variant === 'destructive') bracketColor = { '--th-bracket': 'var(--th-alert)', '--th-pip': 'var(--th-alert)' };
    else if (variant === 'warning') bracketColor = { '--th-bracket': '#eab308', '--th-pip': '#eab308' }; // yellow-500
    else if (variant === 'success') bracketColor = { '--th-bracket': '#22c55e', '--th-pip': '#22c55e' }; // green-500

    const componentStyle = { ...bracketsStyle, ...bracketColor, ...style };

    return (
      <AlertBase
        ref={ref}
        variant={variant}
        type={type}
        dismissible={dismissible}
        style={componentStyle}
        className={cn(tacticalHudEffectsClass(effects), 
          'relative w-full p-4 pl-12 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
          getVariantStyles(variant),
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <AlertCloseBase className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--th-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--th-primary)] focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
          </AlertCloseBase>
        )}
      </AlertBase>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 'mb-1 font-sans font-bold leading-none tracking-tight uppercase', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 'text-sm [&_p]:leading-relaxed font-sans', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
