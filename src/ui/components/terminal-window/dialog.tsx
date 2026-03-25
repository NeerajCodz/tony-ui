import * as React from 'react';
import { DialogPrimitive } from '../_base/dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'fixed inset-0 z-50 bg-[var(--tm-bg)]/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-none',
        className
      )}
      {...props}
    >
      <div className='flex items-center justify-between border-b border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10 px-4 py-2'>
        <div className='flex gap-1'>
           <div className='h-2 w-2 bg-[var(--tm-phosphor)]/50' />
           <div className='h-2 w-2 bg-[var(--tm-phosphor)]/50' />
           <div className='h-2 w-2 bg-[var(--tm-phosphor)]/50' />
        </div>
        <DialogPrimitive.Close className='opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--tm-phosphor)] disabled:pointer-events-none data-[state=open]:bg-[var(--tm-phosphor)]/20 data-[state=open]:text-muted-foreground'>
          <X className='h-4 w-4 text-[var(--tm-phosphor)]' />
          <span className='sr-only'>Close</span>
        </DialogPrimitive.Close>
      </div>
      <div className='p-6'>
        {children}
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'text-lg font-semibold leading-none tracking-tight font-mono uppercase text-[var(--tm-phosphor)]', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'text-sm text-[var(--tm-phosphor-dim)] font-mono', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
