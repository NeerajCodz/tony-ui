import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

export const MenubarBase = MenubarPrimitive.Root;
export const MenubarMenuBase = MenubarPrimitive.Menu;
export const MenubarGroupBase = MenubarPrimitive.Group;
export const MenubarPortalBase = MenubarPrimitive.Portal;
export const MenubarSubBase = MenubarPrimitive.Sub;
export const MenubarRadioGroupBase = MenubarPrimitive.RadioGroup;

export interface MenubarTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> {}

export const MenubarTriggerBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerBaseProps
>((props, ref) => <MenubarPrimitive.Trigger ref={ref} {...props} />);
MenubarTriggerBase.displayName = 'MenubarTriggerBase';

export interface MenubarSubTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> {}

export const MenubarSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerBaseProps
>((props, ref) => <MenubarPrimitive.SubTrigger ref={ref} {...props} />);
MenubarSubTriggerBase.displayName = 'MenubarSubTriggerBase';

export interface MenubarSubContentBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> {}

export const MenubarSubContentBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentBaseProps
>((props, ref) => <MenubarPrimitive.SubContent ref={ref} {...props} />);
MenubarSubContentBase.displayName = 'MenubarSubContentBase';

export interface MenubarContentBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> {}

export const MenubarContentBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentBaseProps
>((props, ref) => <MenubarPrimitive.Content ref={ref} {...props} />);
MenubarContentBase.displayName = 'MenubarContentBase';

export interface MenubarItemBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {}

export const MenubarItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItemBaseProps
>((props, ref) => <MenubarPrimitive.Item ref={ref} {...props} />);
MenubarItemBase.displayName = 'MenubarItemBase';

export interface MenubarCheckboxItemBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> {}

export const MenubarCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemBaseProps
>((props, ref) => <MenubarPrimitive.CheckboxItem ref={ref} {...props} />);
MenubarCheckboxItemBase.displayName = 'MenubarCheckboxItemBase';

export interface MenubarRadioItemBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> {}

export const MenubarRadioItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemBaseProps
>((props, ref) => <MenubarPrimitive.RadioItem ref={ref} {...props} />);
MenubarRadioItemBase.displayName = 'MenubarRadioItemBase';

export interface MenubarLabelBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> {}

export const MenubarLabelBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabelBaseProps
>((props, ref) => <MenubarPrimitive.Label ref={ref} {...props} />);
MenubarLabelBase.displayName = 'MenubarLabelBase';

export interface MenubarSeparatorBaseProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> {}

export const MenubarSeparatorBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorBaseProps
>((props, ref) => <MenubarPrimitive.Separator ref={ref} {...props} />);
MenubarSeparatorBase.displayName = 'MenubarSeparatorBase';

export interface MenubarShortcutBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const MenubarShortcutBase = ({ ...props }: MenubarShortcutBaseProps) => <span {...props} />;
MenubarShortcutBase.displayName = 'MenubarShortcutBase';

export const MenubarItemIndicatorBase = MenubarPrimitive.ItemIndicator;
