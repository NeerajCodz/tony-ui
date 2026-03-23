import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

const Direction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ dir = 'ltr', asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={ref} dir={dir} {...props} />;
});
Direction.displayName = 'Direction';

export { Direction };
