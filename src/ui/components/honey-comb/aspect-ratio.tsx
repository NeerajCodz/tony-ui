import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: HoneyCombEffects;
}


export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(honeyCombEffectsClass(effects), ' overflow-hidden bg-[var(--hc-surface)] border border-[var(--hc-hex-line)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
