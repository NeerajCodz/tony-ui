import * as React from 'react';
import { 
    DialogBase, 
    DialogPortalBase, 
    DialogOverlayBase, 
    DialogContentBase, 
    DialogHeaderBase, 
    DialogFooterBase, 
    DialogTitleBase, 
    DialogDescriptionBase, 
    DialogCloseBase, 
    DialogTriggerBase 
} from '../_base/dialog';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export const Dialog = DialogBase;
export const DialogTrigger = DialogTriggerBase;
export const DialogPortal = DialogPortalBase;
export const DialogClose = DialogCloseBase;

export const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogOverlayBase>, React.ComponentPropsWithoutRef<typeof DialogOverlayBase>>(
  ({ className, ...props }, ref) => (
    <DialogOverlayBase
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
);
DialogOverlay.displayName = 'DialogOverlay';

export const DialogContent = React.forwardRef<React.ElementRef<typeof DialogContentBase>, React.ComponentPropsWithoutRef<typeof DialogContentBase>>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogContentBase
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--df-border)] bg-[var(--df-surface)] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          className
        )}
        {...props}
      >
        {children}
        <DialogCloseBase className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--df-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--df-text)]/10 data-[state=open]:text-[var(--df-muted)]">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogCloseBase>
      </DialogContentBase>
    </DialogPortal>
  )
);
DialogContent.displayName = 'DialogContent';

export const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DialogHeaderBase
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
      {...props}
    />
  )
);
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DialogFooterBase
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogTitleBase>, React.ComponentPropsWithoutRef<typeof DialogTitleBase>>(
  ({ className, ...props }, ref) => (
    <DialogTitleBase
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight text-[var(--df-text)]', className)}
      {...props}
    />
  )
);
DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogDescriptionBase>, React.ComponentPropsWithoutRef<typeof DialogDescriptionBase>>(
  ({ className, ...props }, ref) => (
    <DialogDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--df-muted)]', className)}
      {...props}
    />
  )
);
DialogDescription.displayName = 'DialogDescription';
