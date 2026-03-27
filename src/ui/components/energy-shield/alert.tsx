import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import * as React from 'react';
import { AlertBase, AlertCloseBase, AlertDescriptionBase, AlertTitleBase, type AlertBaseProps } from '../_base/alert';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface AlertProps extends AlertBaseProps {
  effects?: EnergyShieldEffects;
}

const getVariantStyles = (variant: string = 'default', type: string = 'default') => {
  // Base colors for variants
  let colorClass = '';
  switch (variant) {
    case 'destructive': colorClass = 'text-[var(--es-plasma-3)] border-[var(--es-plasma-3)]'; break;
    case 'warning': colorClass = 'text-yellow-500 border-yellow-500'; break; // Need config for warning? Using tailwind default for now or infer
    case 'success': colorClass = 'text-green-500 border-green-500'; break;
    case 'info': colorClass = 'text-[var(--es-plasma-1)] border-[var(--es-plasma-1)]'; break;
    default: colorClass = 'text-[var(--text-primary)] border-[var(--es-hex-line)]'; break;
  }

  // Type modifications
  switch (type) {
    case 'solid':
      if (variant === 'destructive') return 'bg-[var(--es-plasma-3)] text-white border-[var(--es-plasma-3)]';
      if (variant === 'default') return 'bg-[var(--es-surface)] text-[var(--text-primary)] border-[var(--es-hex-line)]';
      return `bg-[var(--es-surface)] ${colorClass.replace('text-', 'bg-').replace('border-', 'border-')} text-black`; // Rough approx for solid
    case 'outline':
      return `bg-transparent border ${colorClass}`;
    case 'soft':
      return `bg-[var(--es-surface)] border-none ${colorClass} bg-opacity-10`;
    case 'elevated':
      return `bg-[var(--es-surface)] border ${colorClass} shadow-lg`;
    case 'tinted':
      return `bg-[var(--es-surface)]/50 border ${colorClass} bg-opacity-20`;
    default: // default
      return `bg-[var(--es-surface)] border ${colorClass}`;
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
        className={cn(energyShieldEffectsClass(effects), 
          'relative w-full p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--text-primary)] ',
          getVariantStyles(variant, type),
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <AlertCloseBase className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--es-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--es-plasma-1)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--es-surface)]">
            <X className="h-4 w-4" />
          </AlertCloseBase>
        )}
      </AlertBase>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'mb-1 font-sans font-bold leading-none tracking-tight uppercase', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'text-sm [&_p]:leading-relaxed font-mono', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert,AlertDescription,AlertTitle };
