import * as React from 'react';
import { AlertBase, AlertTitleBase, AlertDescriptionBase, AlertCloseBase, type AlertBaseProps } from '../_base/alert';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { X } from 'lucide-react';

export interface AlertProps extends AlertBaseProps {
  effects?: TechPanelEffects;
}

const getVariantStyles = (variant: string = 'default', type: string = 'default') => {
  // Base colors for variants
  let colorClass = '';
  switch (variant) {
    case 'destructive': colorClass = 'text-[var(--df-destructive)] border-[var(--df-destructive)]'; break;
    case 'warning': colorClass = 'text-[var(--tp-power-3)] border-[var(--tp-power-3)]'; break;
    case 'success': colorClass = 'text-[var(--tp-power-1)] border-[var(--tp-power-1)]'; break;
    case 'info': colorClass = 'text-[var(--tp-accent)] border-[var(--tp-accent)]'; break;
    default: colorClass = 'text-[var(--text-primary)] border-[var(--tp-border-outer)]'; break;
  }

  // Type modifications
  switch (type) {
    case 'solid':
      if (variant === 'destructive') return 'bg-[var(--df-destructive)] text-white border-[var(--df-destructive)]';
      if (variant === 'default') return 'bg-[var(--tp-inset)] text-[var(--text-primary)] border-[var(--tp-border-inner)]';
      return `bg-[var(--tp-inset)] ${colorClass.replace('text-', 'bg-').replace('border-', 'border-')} text-[var(--tp-bg)]`;
    case 'outline':
      return `bg-transparent border ${colorClass}`;
    case 'soft':
      return `bg-[var(--tp-border-inner)]/30 border-none ${colorClass}`;
    case 'elevated':
      return `bg-[var(--tp-panel)] border ${colorClass} shadow-lg`;
    case 'tinted':
      return `bg-[var(--tp-accent)]/10 border ${colorClass}`;
    default: // default
      return `bg-[var(--tp-panel)] border ${colorClass}`;
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, effects = 'on', variant = 'default', type = 'default', dismissible, style, children, ...props }, ref) => {
    return (
      <AlertBase
        ref={ref}
        variant={variant}
        type={type}
        dismissible={dismissible}
        style={{ ...style }}
        className={cn(
          techPanelEffectsClass(effects),
          'relative w-full p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--text-primary)] rounded-none',
          getVariantStyles(variant, type),
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <AlertCloseBase className="absolute right-4 top-4 rounded-none opacity-70 ring-offset-[var(--tp-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)] disabled:pointer-events-none data-[state=open]:bg-[var(--tp-panel)]">
            <X className="h-4 w-4" />
          </AlertCloseBase>
        )}
      </AlertBase>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: TechPanelEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 'mb-1 font-display font-bold leading-none tracking-tight uppercase', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: TechPanelEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 'text-sm [&_p]:leading-relaxed font-mono', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
