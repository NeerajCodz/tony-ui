import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressBaseProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {}

export const ProgressBase = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressBaseProps
>((props, ref) => <ProgressPrimitive.Root ref={ref} {...props} />);
ProgressBase.displayName = 'ProgressBase';

export const ProgressIndicatorBase = ProgressPrimitive.Indicator;
