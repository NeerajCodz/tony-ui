import * as React from 'react';
import { DrawerPrimitive } from '../_base/drawer';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';


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
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 'fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border border-(--qg-border) bg-(--qg-surface) text-(--text-primary) shadow-2xl',
        className
      )}
      style={{ clipPath: 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% 100%, 0% 100%)', '--corner': '20px' } as React.CSSProperties}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-(--qg-border) opacity-50" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }) => (
  <div
    className={cn(quantumGateEffectsClass(effects), 'grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }) => (
  <div
    className={cn(quantumGateEffectsClass(effects), 'mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'text-lg font-bold leading-none tracking-tight font-sans uppercase text-(--qg-iris-1)',
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 'text-sm text-(--text-muted) font-sans', className)}
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

