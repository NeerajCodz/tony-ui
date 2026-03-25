import * as React from 'react';
import { Slot } from '../_base/direction';
const Direction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ dir = 'ltr', asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={ref} dir={dir} {...props} />;
});
Direction.displayName = 'Direction';

export { Direction };
