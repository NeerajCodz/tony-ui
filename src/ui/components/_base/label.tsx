import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

export interface LabelBaseProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export const LabelBase = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelBaseProps
>((props, ref) => <LabelPrimitive.Root ref={ref} {...props} />);
LabelBase.displayName = 'LabelBase';
