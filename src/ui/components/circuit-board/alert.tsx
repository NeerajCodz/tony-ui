import { cn } from '@/lib/utils';
import { AlertBase, AlertDescriptionBase, AlertTitleBase } from '@/ui/components/_base/alert';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const alertVariants = cva(
  'relative w-full rounded-none border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--cb-trace-lit)] [&>svg~*]:pl-7 font-mono uppercase tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] border-[var(--cb-trace)] shadow-[0_0_10px_var(--cb-trace)]',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive shadow-[0_0_10px_red]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <AlertBase
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <AlertTitleBase
    ref={ref}
    className={cn('mb-1 font-bold leading-none tracking-widest drop-shadow-[0_0_2px_currentColor]', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <AlertDescriptionBase
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed text-[var(--cb-trace-dim)]', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert,AlertDescription,AlertTitle };
