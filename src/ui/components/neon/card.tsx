import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-[var(--ne-bg)] text-[var(--ne-text)] border-2 border-[var(--ne-primary)] shadow-[0_0_15px_var(--ne-primary),inset_0_0_20px_rgba(0,245,255,0.1)] rounded-none relative overflow-hidden',
      className
    )}
    {...props}
  >
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
    <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
    {props.children}
  </div>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6 border-b border-[var(--ne-primary)]/30', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-bold leading-none tracking-widest text-[var(--ne-primary)] font-display uppercase drop-shadow-[0_0_5px_var(--ne-primary)]',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-[var(--ne-text)]/80 font-body', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 relative z-10', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0 border-t border-[var(--ne-primary)]/30 bg-[var(--ne-primary)]/5 mt-auto', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
