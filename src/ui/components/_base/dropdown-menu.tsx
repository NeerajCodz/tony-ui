import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export const DropdownMenuBase = DropdownMenuPrimitive.Root;
export const DropdownMenuTriggerBase = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroupBase = DropdownMenuPrimitive.Group;
export const DropdownMenuPortalBase = DropdownMenuPrimitive.Portal;
export const DropdownMenuSubBase = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroupBase = DropdownMenuPrimitive.RadioGroup;

export interface DropdownMenuSubTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {}

export const DropdownMenuSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerBaseProps
>((props, ref) => <DropdownMenuPrimitive.SubTrigger ref={ref} {...props} />);
DropdownMenuSubTriggerBase.displayName = 'DropdownMenuSubTriggerBase';

export interface DropdownMenuSubContentBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

export const DropdownMenuSubContentBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentBaseProps
>((props, ref) => <DropdownMenuPrimitive.SubContent ref={ref} {...props} />);
DropdownMenuSubContentBase.displayName = 'DropdownMenuSubContentBase';

export interface DropdownMenuContentBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {}

export const DropdownMenuContentBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentBaseProps
>((props, ref) => <DropdownMenuPrimitive.Content ref={ref} {...props} />);
DropdownMenuContentBase.displayName = 'DropdownMenuContentBase';

export interface DropdownMenuItemBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {}

export const DropdownMenuItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemBaseProps
>((props, ref) => <DropdownMenuPrimitive.Item ref={ref} {...props} />);
DropdownMenuItemBase.displayName = 'DropdownMenuItemBase';

export interface DropdownMenuCheckboxItemBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {}

export const DropdownMenuCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemBaseProps
>((props, ref) => <DropdownMenuPrimitive.CheckboxItem ref={ref} {...props} />);
DropdownMenuCheckboxItemBase.displayName = 'DropdownMenuCheckboxItemBase';

export interface DropdownMenuRadioItemBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}

export const DropdownMenuRadioItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemBaseProps
>((props, ref) => <DropdownMenuPrimitive.RadioItem ref={ref} {...props} />);
DropdownMenuRadioItemBase.displayName = 'DropdownMenuRadioItemBase';

export interface DropdownMenuLabelBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {}

export const DropdownMenuLabelBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelBaseProps
>((props, ref) => <DropdownMenuPrimitive.Label ref={ref} {...props} />);
DropdownMenuLabelBase.displayName = 'DropdownMenuLabelBase';

export interface DropdownMenuSeparatorBaseProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

export const DropdownMenuSeparatorBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorBaseProps
>((props, ref) => <DropdownMenuPrimitive.Separator ref={ref} {...props} />);
DropdownMenuSeparatorBase.displayName = 'DropdownMenuSeparatorBase';

export interface DropdownMenuShortcutBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const DropdownMenuShortcutBase = ({ ...props }: DropdownMenuShortcutBaseProps) => <span {...props} />;
DropdownMenuShortcutBase.displayName = 'DropdownMenuShortcutBase';

export const DropdownMenuItemIndicatorBase = DropdownMenuPrimitive.ItemIndicator;
