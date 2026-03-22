import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';

export interface AspectRatioProps extends AspectRatioBaseProps {}


export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(' overflow-hidden bg-[var(--dp-surface)] border border-[var(--dp-border)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
