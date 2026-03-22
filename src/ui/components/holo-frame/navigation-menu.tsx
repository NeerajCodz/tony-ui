import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium font-sans uppercase tracking-wider transition-colors hover:bg-[var(--hf-border-main)] hover:text-[var(--hf-bg)] focus:bg-[var(--hf-border-main)] focus:text-[var(--hf-bg)] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[var(--hf-border-main)] data-[active]:text-[var(--hf-bg)] data-[state=open]:bg-[var(--hf-border-main)] data-[state=open]:text-[var(--hf-bg)] ',
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), navigationMenuTriggerStyle(), 'group', className)}
    style={{ } as React.CSSProperties}
    {...props}
  >
    {children}
    {' '}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-400 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className={cn(holoFrameEffectsClass(effects), 'absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(holoFrameEffectsClass(effects), 
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] text-[var(--hf-text)] shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] ',
        className
      )}
      ref={ref}
      style={{ } as React.CSSProperties}
      {...props}
    />
  </div>
));
NavigationViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-[var(--hf-border-dim)] shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationViewport,
};
