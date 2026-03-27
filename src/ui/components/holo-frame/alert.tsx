import * as React from 'react';
import { AlertBase, AlertTitleBase, AlertDescriptionBase, AlertCloseBase, type AlertBaseProps } from '../_base/alert';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { X } from 'lucide-react';

export interface AlertProps extends AlertBaseProps {
  effects?: HoloFrameEffects;
}

const getVariantStyles = (variant: string = 'default', type: string = 'default') => {
  // Base colors for variants
  let colorClass = '';
  switch (variant) {
    case 'destructive': colorClass = 'text-[var(--hf-chromatic-r)] border-[var(--hf-chromatic-r)]'; break;
    case 'warning': colorClass = 'text-yellow-500 border-yellow-500'; break; // Need config for warning? Using tailwind default for now or infer
    case 'success': colorClass = 'text-green-500 border-green-500'; break;
    case 'info': colorClass = 'text-[var(--hf-border-main)] border-[var(--hf-border-main)]'; break;
    default: colorClass = 'text-[var(--hf-text)] border-[var(--hf-border-dim)]'; break;
  }

  // Type modifications
  switch (type) {
    case 'solid':
      if (variant === 'destructive') return 'bg-[var(--hf-chromatic-r)] text-white border-[var(--hf-chromatic-r)]';
      if (variant === 'default') return 'bg-[var(--hf-surface)] text-[var(--hf-text)] border-[var(--hf-border-dim)]';
      return `bg-[var(--hf-surface)] ${colorClass.replace('text-', 'bg-').replace('border-', 'border-')} text-black`; // Rough approx for solid
    case 'outline':
      return `bg-transparent border ${colorClass}`;
    case 'soft':
      return `bg-[var(--hf-surface)] border-none ${colorClass} bg-opacity-10`;
    case 'elevated':
      return `bg-[var(--hf-surface)] border ${colorClass} shadow-lg`;
    case 'tinted':
      return `bg-[var(--hf-surface)]/50 border ${colorClass} bg-opacity-20`;
    default: // default
      return `bg-[var(--hf-surface)] border ${colorClass}`;
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
        className={cn(holoFrameEffectsClass(effects), 
          'relative w-full p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--hf-text)] ',
          getVariantStyles(variant, type),
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <AlertCloseBase className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--hf-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--hf-border-main)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--hf-surface)]">
            <X className="h-4 w-4" />
          </AlertCloseBase>
        )}
      </AlertBase>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 'mb-1 font-sans font-bold leading-none tracking-tight uppercase', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 'text-sm [&_p]:leading-relaxed font-mono', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
