import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

const Direction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { dir?: 'ltr' | 'rtl' }
>(({ dir = 'ltr', ...props }, ref) => (
  <div ref={ref} dir={dir} {...props} />
));
Direction.displayName = 'Direction';

export { Direction };
