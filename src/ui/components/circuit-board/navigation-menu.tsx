import * as React from 'react';
import { NavigationMenuBase, NavigationMenuListBase, NavigationMenuItemBase, NavigationMenuContentBase, NavigationMenuTriggerBase, NavigationMenuLinkBase, NavigationMenuIndicatorBase, NavigationMenuViewportBase } from '@/ui/components/_base/navigation-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const navigationMenuTriggerStyle = () =>
  'inline-flex h-10 w-max items-center justify-center rounded-none px-4 py-2 text-sm font-medium transition-colors';

const NavigationMenu = React.forwardRef<React.ElementRef<typeof NavigationMenuBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuBase>>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuBase
      ref={ref}
      className={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center font-mono uppercase tracking-widest',
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuBase>
  )
);
NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuList = React.forwardRef<React.ElementRef<typeof NavigationMenuListBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuListBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuListBase
      ref={ref}
      className={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className
      )}
      {...props}
    />
  )
);
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = NavigationMenuItemBase;

const NavigationMenuTrigger = React.forwardRef<React.ElementRef<typeof NavigationMenuTriggerBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuTriggerBase>>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuTriggerBase
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group h-10 w-max items-center justify-center rounded-none bg-[var(--cb-soldermask)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--cb-trace-dim)]/20 hover:text-[var(--cb-trace-lit)] focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[var(--cb-trace-dim)]/20 data-[state=open]:bg-[var(--cb-trace-dim)]/20 text-[var(--cb-trace-dim)]', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuTriggerBase>
  )
);
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

const NavigationMenuContent = React.forwardRef<React.ElementRef<typeof NavigationMenuContentBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuContentBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuContentBase
      ref={ref}
      className={cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] shadow-[0_0_15px_var(--cb-trace)]',
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = 'NavigationMenuContent';

const NavigationMenuLink = NavigationMenuLinkBase;

const NavigationMenuViewport = React.forwardRef<React.ElementRef<typeof NavigationMenuViewportBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuViewportBase>>(
  ({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
      <NavigationMenuViewportBase
        className={cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
);
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

const NavigationMenuIndicator = React.forwardRef<React.ElementRef<typeof NavigationMenuIndicatorBase>, React.ComponentPropsWithoutRef<typeof NavigationMenuIndicatorBase>>(
  ({ className, ...props }, ref) => (
    <NavigationMenuIndicatorBase
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-[var(--cb-trace)] shadow-md" />
    </NavigationMenuIndicatorBase>
  )
);
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator';

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
