import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

export const ContextMenuBase = ContextMenuPrimitive.Root;
export const ContextMenuTriggerBase = ContextMenuPrimitive.Trigger;
export const ContextMenuGroupBase = ContextMenuPrimitive.Group;
export const ContextMenuPortalBase = ContextMenuPrimitive.Portal;
export const ContextMenuSubBase = ContextMenuPrimitive.Sub;
export const ContextMenuRadioGroupBase = ContextMenuPrimitive.RadioGroup;

export interface ContextMenuSubTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {}

export const ContextMenuSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerBaseProps
>((props, ref) => <ContextMenuPrimitive.SubTrigger ref={ref} {...props} />);
ContextMenuSubTriggerBase.displayName = 'ContextMenuSubTriggerBase';

export interface ContextMenuSubContentBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {}

export const ContextMenuSubContentBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentBaseProps
>((props, ref) => <ContextMenuPrimitive.SubContent ref={ref} {...props} />);
ContextMenuSubContentBase.displayName = 'ContextMenuSubContentBase';

export interface ContextMenuContentBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {}

export const ContextMenuContentBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentBaseProps
>((props, ref) => <ContextMenuPrimitive.Content ref={ref} {...props} />);
ContextMenuContentBase.displayName = 'ContextMenuContentBase';

export interface ContextMenuItemBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {}

export const ContextMenuItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemBaseProps
>((props, ref) => <ContextMenuPrimitive.Item ref={ref} {...props} />);
ContextMenuItemBase.displayName = 'ContextMenuItemBase';

export interface ContextMenuCheckboxItemBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {}

export const ContextMenuCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemBaseProps
>((props, ref) => <ContextMenuPrimitive.CheckboxItem ref={ref} {...props} />);
ContextMenuCheckboxItemBase.displayName = 'ContextMenuCheckboxItemBase';

export interface ContextMenuRadioItemBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {}

export const ContextMenuRadioItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemBaseProps
>((props, ref) => <ContextMenuPrimitive.RadioItem ref={ref} {...props} />);
ContextMenuRadioItemBase.displayName = 'ContextMenuRadioItemBase';

export interface ContextMenuLabelBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {}

export const ContextMenuLabelBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelBaseProps
>((props, ref) => <ContextMenuPrimitive.Label ref={ref} {...props} />);
ContextMenuLabelBase.displayName = 'ContextMenuLabelBase';

export interface ContextMenuSeparatorBaseProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {}

export const ContextMenuSeparatorBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorBaseProps
>((props, ref) => <ContextMenuPrimitive.Separator ref={ref} {...props} />);
ContextMenuSeparatorBase.displayName = 'ContextMenuSeparatorBase';

export const ContextMenuItemIndicatorBase = ContextMenuPrimitive.ItemIndicator;
