import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';


const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', children, style, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col bg-[var(--th-surface)] text-[var(--th-primary)] outline-none',
        className
      )}
      style={{ 
        ...bracketsStyle, 
        '--corner': '20px', 
        clipPath: 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% 100%, 0% 100%)',
        ...style 
      } as React.CSSProperties}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-[var(--th-primary)]/20" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }) => (
  <div
    className={cn(tacticalHudEffectsClass(effects), 'grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }) => (
  <div
    className={cn(tacticalHudEffectsClass(effects), 'mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'text-lg font-bold leading-none tracking-tight font-sans uppercase text-[var(--th-primary)]',
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'text-sm text-[var(--th-muted)] font-sans', className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
