import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export const SelectBase = SelectPrimitive.Root;
export const SelectGroupBase = SelectPrimitive.Group;
export const SelectValueBase = SelectPrimitive.Value;

export interface SelectTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}

export const SelectTriggerBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerBaseProps
>((props, ref) => <SelectPrimitive.Trigger ref={ref} {...props} />);
SelectTriggerBase.displayName = 'SelectTriggerBase';

export interface SelectScrollUpButtonBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {}

export const SelectScrollUpButtonBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonBaseProps
>((props, ref) => <SelectPrimitive.ScrollUpButton ref={ref} {...props} />);
SelectScrollUpButtonBase.displayName = 'SelectScrollUpButtonBase';

export interface SelectScrollDownButtonBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {}

export const SelectScrollDownButtonBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownButtonBaseProps
>((props, ref) => <SelectPrimitive.ScrollDownButton ref={ref} {...props} />);
SelectScrollDownButtonBase.displayName = 'SelectScrollDownButtonBase';

export interface SelectContentBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}

export const SelectContentBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentBaseProps
>((props, ref) => <SelectPrimitive.Content ref={ref} {...props} />);
SelectContentBase.displayName = 'SelectContentBase';

export interface SelectLabelBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

export const SelectLabelBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelBaseProps
>((props, ref) => <SelectPrimitive.Label ref={ref} {...props} />);
SelectLabelBase.displayName = 'SelectLabelBase';

export interface SelectItemBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

export const SelectItemBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemBaseProps
>((props, ref) => <SelectPrimitive.Item ref={ref} {...props} />);
SelectItemBase.displayName = 'SelectItemBase';

export interface SelectSeparatorBaseProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

export const SelectSeparatorBase = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorBaseProps
>((props, ref) => <SelectPrimitive.Separator ref={ref} {...props} />);
SelectSeparatorBase.displayName = 'SelectSeparatorBase';

export const SelectItemTextBase = SelectPrimitive.ItemText;
export const SelectItemIndicatorBase = SelectPrimitive.ItemIndicator;
export const SelectPortalBase = SelectPrimitive.Portal;
export const SelectViewportBase = SelectPrimitive.Viewport;
