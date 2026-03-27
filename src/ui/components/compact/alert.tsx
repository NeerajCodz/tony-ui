import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import * as React from 'react';
import { AlertBase, AlertCloseBase, AlertDescriptionBase, AlertTitleBase, type AlertBaseProps } from '../_base/alert';

export interface AlertProps extends AlertBaseProps {}

const getVariantStyles = (variant: string = 'default', type: string = 'default') => {
  // Base colors for variants
  let colorClass = '';
  switch (variant) {
    case 'destructive': colorClass = 'text-[var(--cp-accent)] border-[var(--cp-accent)]'; break;
    case 'warning': colorClass = 'text-yellow-500 border-yellow-500'; break; // Need config for warning? Using tailwind default for now or infer
    case 'success': colorClass = 'text-green-500 border-green-500'; break;
    case 'info': colorClass = 'text-[var(--cp-accent)] border-[var(--cp-accent)]'; break;
    default: colorClass = 'text-[var(--text-primary)] border-[var(--cp-border)]'; break;
  }

  // Type modifications
  switch (type) {
    case 'solid':
      if (variant === 'destructive') return 'bg-[var(--cp-accent)] text-white border-[var(--cp-accent)]';
      if (variant === 'default') return 'bg-[var(--cp-bg)] text-[var(--text-primary)] border-[var(--cp-border)]';
      return `bg-[var(--cp-bg)] ${colorClass.replace('text-', 'bg-').replace('border-', 'border-')} text-black`; // Rough approx for solid
    case 'outline':
      return `bg-transparent border ${colorClass}`;
    case 'soft':
      return `bg-[var(--cp-bg)] border-none ${colorClass} bg-opacity-10`;
    case 'elevated':
      return `bg-[var(--cp-bg)] border ${colorClass} shadow-lg`;
    case 'tinted':
      return `bg-[var(--cp-bg)]/50 border ${colorClass} bg-opacity-20`;
    default: // default
      return `bg-[var(--cp-bg)] border ${colorClass}`;
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', type = 'default', dismissible, style, children, ...props }, ref) => {
    return (
      <AlertBase
        ref={ref}
        variant={variant}
        type={type}
        dismissible={dismissible}
        style={{ borderRadius: '2px', ...style }}
        className={cn(
          'relative w-full p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--text-primary)] ',
          getVariantStyles(variant, type),
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <AlertCloseBase className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--cp-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--cp-accent)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--cp-bg)]">
            <X className="h-4 w-4" />
          </AlertCloseBase>
        )}
      </AlertBase>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn('mb-1 font-mono font-bold leading-none tracking-tight ', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed font-mono', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert,AlertDescription,AlertTitle };
