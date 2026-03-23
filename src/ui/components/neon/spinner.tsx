import * as React from 'react';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

const Spinner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-center text-[var(--ne-primary)] drop-shadow-[0_0_5px_var(--ne-primary)]',
      className
    )}
    {...props}
  >
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
));
Spinner.displayName = 'Spinner';

export { Spinner };
