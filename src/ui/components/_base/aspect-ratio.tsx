import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

export interface AspectRatioBaseProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

export const AspectRatioBase = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioBaseProps
>((props, ref) => <AspectRatioPrimitive.Root ref={ref} {...props} />);
AspectRatioBase.displayName = 'AspectRatioBase';
