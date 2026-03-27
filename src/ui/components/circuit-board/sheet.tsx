import { cn } from '@/lib/utils';
import { SheetBase, SheetCloseBase, SheetContentBase, SheetDescriptionBase, SheetFooterBase, SheetHeaderBase, SheetOverlayBase, SheetPortalBase, SheetTitleBase, SheetTriggerBase, type SheetContentBaseProps } from '@/ui/components/_base/sheet';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

const Sheet = SheetBase;
const SheetTrigger = SheetTriggerBase;
const SheetClose = SheetCloseBase;
const SheetPortal = SheetPortalBase;

const SheetOverlay = React.forwardRef<React.ComponentRef<typeof SheetOverlayBase>, React.ComponentPropsWithoutRef<typeof SheetOverlayBase>>(
  ({ className, ...props }, ref) => (
    <SheetOverlayBase
      className={cn(
        'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
SheetOverlay.displayName = 'SheetOverlay';

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-[var(--cb-soldermask)] p-6 shadow-[0_0_20px_var(--cb-trace)] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b-2 border-[var(--cb-trace)] data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 border-t-2 border-[var(--cb-trace)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r-2 border-[var(--cb-trace)] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-l-2 border-[var(--cb-trace)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps extends SheetContentBaseProps, VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ComponentRef<typeof SheetContentBase>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetContentBase
        ref={ref}
        side={side}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <SheetClose className="absolute right-4 top-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--cb-trace-lit)] disabled:pointer-events-none data-[state=open]:bg-secondary text-[var(--cb-trace-lit)]">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContentBase>
    </SheetPortal>
  )
);
SheetContent.displayName = 'SheetContent';

const SheetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <SheetHeaderBase
      ref={ref}
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      {...props}
    />
  )
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <SheetFooterBase
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<React.ComponentRef<typeof SheetTitleBase>, React.ComponentPropsWithoutRef<typeof SheetTitleBase>>(
  ({ className, ...props }, ref) => (
    <SheetTitleBase
      ref={ref}
      className={cn('text-xl font-bold font-mono uppercase tracking-widest text-[var(--cb-trace-lit)] drop-shadow-[0_0_5px_var(--cb-trace-lit)]', className)}
      {...props}
    />
  )
);
SheetTitle.displayName = 'SheetTitle';

const SheetDescription = React.forwardRef<React.ComponentRef<typeof SheetDescriptionBase>, React.ComponentPropsWithoutRef<typeof SheetDescriptionBase>>(
  ({ className, ...props }, ref) => (
    <SheetDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--cb-trace-dim)] font-mono uppercase tracking-wide', className)}
      {...props}
    />
  )
);
SheetDescription.displayName = 'SheetDescription';

export {
Sheet,SheetClose,
SheetContent,SheetDescription,SheetFooter,SheetHeader,SheetOverlay,SheetPortal,SheetTitle,SheetTrigger
};
