import * as React from 'react';
import { SpinnerBase, type SpinnerBaseProps } from '@/ui/components/_base/spinner';
import { cn } from '@/lib/utils';

const Spinner = ({ className, ...props }: SpinnerBaseProps) => {
  return (
    <SpinnerBase
      className={cn('text-primary', className)}
      {...props}
    />
  );
};

export { Spinner };
