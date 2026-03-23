import * as React from 'react';
import { DrawerBase, DrawerTriggerBase, DrawerContentBase, DrawerHeaderBase, DrawerFooterBase, DrawerTitleBase, DrawerDescriptionBase, DrawerPortalBase, DrawerOverlayBase, type DrawerContentBaseProps } from '@/ui/components/_base/drawer';
import { cn } from '@/lib/utils';

const Drawer = DrawerBase;
const DrawerTrigger = DrawerTriggerBase;
const DrawerPortal = DrawerPortalBase;
const DrawerClose = DrawerBase; // DrawerBase doesn't export Close separately? DrawerCloseBase is exported.
import { DrawerCloseBase } from '@/ui/components/_base/drawer';

const DrawerOverlay = React.forwardRef<React.ComponentRef<typeof DrawerOverlayBase>, React.ComponentPropsWithoutRef<typeof DrawerOverlayBase>>(
  ({ className, ...props }, ref) => (
    <DrawerOverlayBase
      ref={ref}
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      {...props}
    />
  )
);
DrawerOverlay.displayName = 'DrawerOverlay';

const DrawerContent = React.forwardRef<React.ComponentRef<typeof DrawerContentBase>, DrawerContentBaseProps>(
  ({ className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContentBase
        ref={ref}
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-none border border-[var(--br-border-dim)] bg-[var(--br-bg)]',
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-[var(--br-border-dim)]" />
        {children}
      </DrawerContentBase>
    </DrawerPortal>
  )
);
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DrawerHeaderBase
      ref={ref}
      className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
      {...props}
    />
  )
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <DrawerFooterBase
      ref={ref}
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<React.ComponentRef<typeof DrawerTitleBase>, React.ComponentPropsWithoutRef<typeof DrawerTitleBase>>(
  ({ className, ...props }, ref) => (
    <DrawerTitleBase
      ref={ref}
      className={cn('text-lg font-semibold font-mono uppercase tracking-tight', className)}
      {...props}
    />
  )
);
DrawerTitle.displayName = 'DrawerTitle';

const DrawerDescription = React.forwardRef<React.ComponentRef<typeof DrawerDescriptionBase>, React.ComponentPropsWithoutRef<typeof DrawerDescriptionBase>>(
  ({ className, ...props }, ref) => (
    <DrawerDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--text-muted)] font-mono', className)}
      {...props}
    />
  )
);
DrawerDescription.displayName = 'DrawerDescription';

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerCloseBase as DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
