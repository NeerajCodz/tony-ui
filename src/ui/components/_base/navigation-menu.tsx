import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export const NavigationMenuBase = NavigationMenuPrimitive.Root;

export interface NavigationMenuListBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> {}

export const NavigationMenuListBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListBaseProps
>((props, ref) => <NavigationMenuPrimitive.List ref={ref} {...props} />);
NavigationMenuListBase.displayName = 'NavigationMenuListBase';

export const NavigationMenuItemBase = NavigationMenuPrimitive.Item;

export interface NavigationMenuTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> {}

export const NavigationMenuTriggerBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerBaseProps
>((props, ref) => <NavigationMenuPrimitive.Trigger ref={ref} {...props} />);
NavigationMenuTriggerBase.displayName = 'NavigationMenuTriggerBase';

export interface NavigationMenuContentBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {}

export const NavigationMenuContentBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentBaseProps
>((props, ref) => <NavigationMenuPrimitive.Content ref={ref} {...props} />);
NavigationMenuContentBase.displayName = 'NavigationMenuContentBase';

export interface NavigationMenuLinkBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> {}

export const NavigationMenuLinkBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkBaseProps
>((props, ref) => <NavigationMenuPrimitive.Link ref={ref} {...props} />);
NavigationMenuLinkBase.displayName = 'NavigationMenuLinkBase';

export interface NavigationMenuViewportBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> {}

export const NavigationMenuViewportBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportBaseProps
>((props, ref) => <NavigationMenuPrimitive.Viewport ref={ref} {...props} />);
NavigationMenuViewportBase.displayName = 'NavigationMenuViewportBase';

export interface NavigationMenuIndicatorBaseProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> {}

export const NavigationMenuIndicatorBase = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorBaseProps
>((props, ref) => <NavigationMenuPrimitive.Indicator ref={ref} {...props} />);
NavigationMenuIndicatorBase.displayName = 'NavigationMenuIndicatorBase';
