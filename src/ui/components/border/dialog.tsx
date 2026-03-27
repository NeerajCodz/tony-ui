import { cn } from '@/lib/utils';
import { DialogBase, DialogCloseBase, DialogContentBase, DialogDescriptionBase, DialogFooterBase, DialogHeaderBase, DialogOverlayBase, DialogPortalBase, DialogTitleBase, DialogTriggerBase, type DialogContentBaseProps } from '@/ui/components/_base/dialog';
import { X } from 'lucide-react';
import * as React from 'react';

const Dialog = DialogBase;
const DialogTrigger = DialogTriggerBase;
const DialogPortal = DialogPortalBase;
const DialogClose = DialogCloseBase;

const DialogOverlay = React.forwardRef<React.ComponentRef<typeof DialogOverlayBase>, React.ComponentPropsWithoutRef<typeof DialogOverlayBase>>(
  ({ className, ...props }, ref) => (
    <DialogOverlayBase
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
);
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef<React.ComponentRef<typeof DialogContentBase>, DialogContentBaseProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogContentBase
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--br-border-dim)] bg-[var(--br-bg)] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-none',
          className
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContentBase>
    </DialogPortal>
  )
);
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DialogHeaderBase
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
      {...props}
    />
  )
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DialogFooterBase
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<React.ComponentRef<typeof DialogTitleBase>, React.ComponentPropsWithoutRef<typeof DialogTitleBase>>(
  ({ className, ...props }, ref) => (
    <DialogTitleBase
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight font-mono uppercase', className)}
      {...props}
    />
  )
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<React.ComponentRef<typeof DialogDescriptionBase>, React.ComponentPropsWithoutRef<typeof DialogDescriptionBase>>(
  ({ className, ...props }, ref) => (
    <DialogDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--text-muted)] font-mono', className)}
      {...props}
    />
  )
);
DialogDescription.displayName = 'DialogDescription';

export {
Dialog,DialogClose,
DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger
};
