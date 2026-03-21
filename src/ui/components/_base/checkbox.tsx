import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxBaseProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export const CheckboxBase = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxBaseProps
>((props, ref) => <CheckboxPrimitive.Root ref={ref} {...props} />);
CheckboxBase.displayName = 'CheckboxBase';

export const CheckboxIndicatorBase = CheckboxPrimitive.Indicator;
