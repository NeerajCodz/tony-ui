'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';

import { NavigationMenuBase, NavigationMenuContentBase, NavigationMenuIndicatorBase, NavigationMenuItemBase, NavigationMenuLinkBase, NavigationMenuListBase, NavigationMenuTriggerBase, NavigationMenuViewportBase } from '../_base/navigation-menu';

const getStyles = (type?: string, colors?: VariantColors) => {
  if (!type || !colors) return {};
  
  switch (type) {
    case 'inverse':
      return {
        backgroundColor: colors.text,
        color: colors.background,
        border: `1px solid ${colors.text}`
      };
    case 'contrast':
      return {
        backgroundColor: colors.accent?.primary || colors.text,
        color: '#000000',
        fontWeight: 'bold',
        border: `1px solid ${colors.text}`
      };
    case 'soft':
      return {
        backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
        color: colors.accent?.primary || colors.text,
        border: 'none'
      };
    default:
      return {};
  }
};


const NavigationMenuRoot = forwardRef<React.ElementRef<typeof NavigationMenuBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuBase> & { version?: string, variant?: string, type?: string, colors?: VariantColors }>(
  ({ className, children, version, variant, type, colors, ...props }, ref) => (
    <NavigationMenuBase
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props} style={{ ...getStyles(type, colors), ...(props.style as any) }}
    >
      {children}
      <NavigationMenuViewportBase/>
    </NavigationMenuBase>
  )
);
NavigationMenuRoot.displayName = NavigationMenuBase.displayName;

const NavigationMenuList = forwardRef<React.ElementRef<typeof NavigationMenuListBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuListBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuListBase
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuList.displayName = NavigationMenuListBase.displayName;

const NavigationMenuItem = NavigationMenuItemBase;

const NavigationMenuTrigger = forwardRef<React.ElementRef<typeof NavigationMenuTriggerBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuTriggerBase>>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuTriggerBase
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        className
      )}
      {...props}
    >
      {children}
      <span className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true">▼</span>
    </NavigationMenuTriggerBase>
  )
);
NavigationMenuTrigger.displayName = NavigationMenuTriggerBase.displayName;

const NavigationMenuContent = forwardRef<React.ElementRef<typeof NavigationMenuContentBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuContentBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuContentBase
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = NavigationMenuContentBase.displayName;

const NavigationMenuLink = NavigationMenuLinkBase;

const NavigationMenuViewport = forwardRef<React.ElementRef<typeof NavigationMenuViewportBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuViewportBase>>(
  ({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuViewportBase
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
);
NavigationMenuViewport.displayName = NavigationMenuViewportBase.displayName;

const NavigationMenuIndicator = forwardRef<React.ElementRef<typeof NavigationMenuIndicatorBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuIndicatorBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuIndicatorBase
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuIndicatorBase>
  )
);
NavigationMenuIndicator.displayName = NavigationMenuIndicatorBase.displayName;

export {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

