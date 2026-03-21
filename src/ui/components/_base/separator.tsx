import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export interface SeparatorBaseProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

export const SeparatorBase = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorBaseProps
>(({ orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root ref={ref} orientation={orientation} decorative={decorative} {...props} />
));
SeparatorBase.displayName = 'SeparatorBase';
