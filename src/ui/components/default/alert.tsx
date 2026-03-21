import * as React from 'react';
import { 
    AlertBase, 
    AlertTitleBase, 
    AlertDescriptionBase, 
    AlertIconBase, 
    type AlertBaseProps 
} from '../_base/alert';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';

export interface AlertProps extends AlertBaseProps {}

const getVariantStyles = (variant: string = 'default') => {
    switch (variant) {
        case 'destructive':
            return 'border-red-500/50 text-red-500 [&>svg]:text-red-500';
        case 'success':
            return 'border-green-500/50 text-green-500 [&>svg]:text-green-500';
        case 'warning':
            return 'border-yellow-500/50 text-yellow-500 [&>svg]:text-yellow-500';
        case 'info':
            return 'border-blue-500/50 text-blue-500 [&>svg]:text-blue-500';
        default:
            return 'bg-[var(--df-surface)] text-[var(--df-text)]';
    }
}

const getTypeStyles = (type: string = 'default', variant: string = 'default') => {
    // Combine with variant if needed
    if (type === 'solid') {
         // Solid overrides variant text colors usually
         return 'bg-[var(--df-accent)] text-white border-transparent [&>svg]:text-white';
    }
    if (type === 'outline') {
        return 'bg-transparent border border-[var(--df-border)]';
    }
    if (type === 'soft') {
        return 'bg-[var(--df-accent)]/10 border-none';
    }
    // Default
    return 'bg-[var(--df-surface)] border border-[var(--df-border)]';
}

const getCombinedStyles = (type: string = 'default', variant: string = 'default') => {
    // This is getting complex, let's simplify based on common usage
    let base = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";
    
    if (variant === 'destructive') {
        base += " border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500";
        if (type === 'solid') base = "relative w-full rounded-lg border border-red-500 bg-red-500 text-white p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-white";
        else if (type === 'soft') base += " bg-red-500/10 border-none";
    } else if (variant === 'success') {
         base += " border-green-500/50 text-green-500 [&>svg]:text-green-500";
         if (type === 'solid') base = "relative w-full rounded-lg border border-green-500 bg-green-500 text-white p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-white";
         else if (type === 'soft') base += " bg-green-500/10 border-none";
    } else {
        // Default variant
        if (type === 'default') base += " bg-[var(--df-surface)] text-[var(--df-text)] border-[var(--df-border)]";
        if (type === 'soft') base += " bg-[var(--df-accent)]/10 text-[var(--df-accent)] border-none [&>svg]:text-[var(--df-accent)]";
    }
    return base;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', type = 'default', ...props }, ref) => {
    return (
      <AlertBase
        ref={ref}
        role="alert"
        variant={variant}
        type={type}
        className={cn(
          getCombinedStyles(type, variant),
          className
        )}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <AlertTitleBase
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <AlertDescriptionBase
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

export const AlertIcon = AlertIconBase;
