import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(terminalWindowEffectsClass(effects), 
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = ({ side }: { side: 'top' | 'bottom' | 'left' | 'right' }) =>
  cn(
    'fixed z-50 gap-4 bg-[var(--tm-bg)] p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 border-[var(--tm-phosphor)] text-[var(--tm-phosphor)]',
    {
      'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm': side === 'right',
      'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm': side === 'left',
      'inset-x-0 top-0 h-auto border-b': side === 'top',
      'inset-x-0 bottom-0 h-auto border-t': side === 'bottom',
    }
  );

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: 'top' | 'bottom' | 'left' | 'right';
  effects?: TerminalWindowEffects;
}

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, effects = 'on', ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay effects={effects} />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[var(--tm-bg)] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--tm-phosphor)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--tm-phosphor)]/20 text-[var(--tm-phosphor)]'>
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </SheetPrimitive.Close>
      <div className='font-mono h-full'>{children}</div>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }) => (
  <div
    className={cn(terminalWindowEffectsClass(effects), 'flex flex-col space-y-2 text-center sm:text-left font-mono uppercase', className)}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }) => (
  <div
    className={cn(terminalWindowEffectsClass(effects), 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'text-lg font-semibold text-[var(--tm-phosphor)]', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'text-sm text-[var(--tm-phosphor-dim)]', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
