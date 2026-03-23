import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';

export interface AspectRatioProps extends AspectRatioBaseProps {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ clipPath: AC_CLIP_PATH, ...style }}
      className={cn('[--corner:12px] overflow-hidden bg-[var(--ac-surface)] border border-[var(--ac-border)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
