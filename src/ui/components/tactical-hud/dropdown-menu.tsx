'use client';

import * as React from 'react';
import { Check, ChevronRight, Circle } from 'lucide-react';
import {
  DropdownMenuBase,
  DropdownMenuCheckboxItemBase,
  DropdownMenuContentBase,
  DropdownMenuGroupBase,
  DropdownMenuItemBase,
  DropdownMenuItemIndicatorBase,
  DropdownMenuLabelBase,
  DropdownMenuPortalBase,
  DropdownMenuRadioGroupBase,
  DropdownMenuRadioItemBase,
  DropdownMenuSeparatorBase,
  DropdownMenuShortcutBase,
  DropdownMenuSubBase,
  DropdownMenuSubContentBase,
  DropdownMenuSubTriggerBase,
  DropdownMenuTriggerBase,
} from '../_base/dropdown-menu';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

const contentClassName =
  'z-50 min-w-[8rem] overflow-hidden rounded p-1 text-sm data-[state=open]:animate-in data-[state=closed]:animate-out';
const itemClassName =
  'relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none';

export type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenuBase>;
export type DropdownMenuContentProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuContentBase>, 'type'> & StyledProps;
export type DropdownMenuItemProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuItemBase>, 'type'> &
  StyledProps & {
    inset?: boolean;
  };
export type DropdownMenuSubTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerBase>, 'type'> &
  StyledProps & {
    inset?: boolean;
  };
export type DropdownMenuSubContentProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuSubContentBase>, 'type'> & StyledProps;
export type DropdownMenuCheckboxItemProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemBase>, 'type'> & StyledProps;
export type DropdownMenuRadioItemProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuRadioItemBase>, 'type'> & StyledProps;
export type DropdownMenuLabelProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuLabelBase>, 'type'> &
  StyledProps & {
    inset?: boolean;
  };
export type DropdownMenuSeparatorProps = Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuSeparatorBase>, 'type'> & StyledProps;

export const DropdownMenuTrigger = DropdownMenuTriggerBase;
export const DropdownMenuGroup = DropdownMenuGroupBase;
export const DropdownMenuPortal = DropdownMenuPortalBase;
export const DropdownMenuSub = DropdownMenuSubBase;
export const DropdownMenuRadioGroup = DropdownMenuRadioGroupBase;

export const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownMenuContentBase>, DropdownMenuContentProps>(
  ({ className, sideOffset = 4, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuPortal>
      <DropdownMenuContentBase
        ref={ref}
        sideOffset={sideOffset}
        className={cx(contentClassName, className)}
        style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style)}
        {...props}
      />
    </DropdownMenuPortal>
  )
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuSubTrigger = React.forwardRef<React.ElementRef<typeof DropdownMenuSubTriggerBase>, DropdownMenuSubTriggerProps>(
  ({ className, inset, children, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuSubTriggerBase
      ref={ref}
      className={cx(itemClassName, inset && 'pl-8', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuSubTriggerBase>
  )
);
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof DropdownMenuSubContentBase>, DropdownMenuSubContentProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuSubContentBase
      ref={ref}
      className={cx(contentClassName, className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style)}
      {...props}
    />
  )
);
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

export const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuItemBase>, DropdownMenuItemProps>(
  ({ className, inset, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuItemBase
      ref={ref}
      className={cx(itemClassName, inset && 'pl-8', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownMenuCheckboxItemBase>, DropdownMenuCheckboxItemProps>(
  ({ className, children, checked, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuCheckboxItemBase
      ref={ref}
      className={cx(itemClassName, 'pl-8', className)}
      checked={checked}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuItemIndicatorBase>
          <Check className="h-4 w-4" />
        </DropdownMenuItemIndicatorBase>
      </span>
      {children}
    </DropdownMenuCheckboxItemBase>
  )
);
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuRadioItem = React.forwardRef<React.ElementRef<typeof DropdownMenuRadioItemBase>, DropdownMenuRadioItemProps>(
  ({ className, children, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuRadioItemBase
      ref={ref}
      className={cx(itemClassName, 'pl-8', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuItemIndicatorBase>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuItemIndicatorBase>
      </span>
      {children}
    </DropdownMenuRadioItemBase>
  )
);
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export const DropdownMenuLabel = React.forwardRef<React.ElementRef<typeof DropdownMenuLabelBase>, DropdownMenuLabelProps>(
  ({ className, inset, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuLabelBase
      ref={ref}
      className={cx('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof DropdownMenuSeparatorBase>, DropdownMenuSeparatorProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <DropdownMenuSeparatorBase
      ref={ref}
      className={cx('-mx-1 my-1 h-px', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuShortcut = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuShortcutBase>) => (
  <DropdownMenuShortcutBase className={cx('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
);
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

const DropdownMenuRoot = DropdownMenuBase;

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
  RadioGroup: DropdownMenuRadioGroup,
});

export default DropdownMenu;
