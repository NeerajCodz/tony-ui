import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';

export interface AspectRatioProps extends AspectRatioBaseProps {}

export const AspectRatio = React.forwardRef<React.ComponentRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      className={cn('relative', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
