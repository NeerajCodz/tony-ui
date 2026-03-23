import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full rounded-none',
  {
    variants: {
      variant: {
        default: 'bg-[var(--tp-panel)] border-[var(--tp-border-outer)] text-[var(--text-primary)]',
        destructive:
          'destructive group border-[var(--df-destructive)] bg-[var(--df-destructive)] text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & { effects?: TechPanelEffects }, 'type'> & {
    type?: 'foreground' | 'background' | string;
  } & VariantProps<typeof toastVariants>
>(({ className, effects = 'on', variant, type, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      type={(type as 'foreground' | 'background') || 'foreground'}
      className={cn(techPanelEffectsClass(effects), toastVariants({ variant }), className)}
      style={{ } as React.CSSProperties}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'inline-flex h-8 shrink-0 items-center justify-center border border-[var(--tp-border-inner)] bg-transparent px-3 text-sm font-medium transition-colors hover:bg-[var(--tp-accent)] hover:text-[var(--tp-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)] disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-white/40 group-[.destructive]:hover:border-white/30 group-[.destructive]:hover:bg-white group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-white font-mono uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'absolute right-2 top-2 p-1 text-[var(--text-muted)] opacity-0 transition-opacity hover:text-[var(--text-primary)] focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-white group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    toast-close=''
    {...props}
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 'text-sm font-bold font-display uppercase', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 'text-sm opacity-90 font-mono', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast> & { effects?: TechPanelEffects };
type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  type ToastProps,
  type ToastActionElement,
};
