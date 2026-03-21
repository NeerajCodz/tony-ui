import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

export type ToggleGroupBaseProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;

export const ToggleGroupBase = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupBaseProps
>((props, ref) => <ToggleGroupPrimitive.Root ref={ref} {...props} />);
ToggleGroupBase.displayName = 'ToggleGroupBase';

export type ToggleGroupItemBaseProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;

export const ToggleGroupItemBase = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemBaseProps
>((props, ref) => <ToggleGroupPrimitive.Item ref={ref} {...props} />);
ToggleGroupItemBase.displayName = 'ToggleGroupItemBase';
