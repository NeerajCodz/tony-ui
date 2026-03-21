import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export interface RadioGroupBaseProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroupBase = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupBaseProps
>((props, ref) => <RadioGroupPrimitive.Root ref={ref} {...props} />);
RadioGroupBase.displayName = 'RadioGroupBase';

export interface RadioGroupItemBaseProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

export const RadioGroupItemBase = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemBaseProps
>((props, ref) => <RadioGroupPrimitive.Item ref={ref} {...props} />);
RadioGroupItemBase.displayName = 'RadioGroupItemBase';

export const RadioGroupIndicatorBase = RadioGroupPrimitive.Indicator;
