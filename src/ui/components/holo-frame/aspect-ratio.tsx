import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: HoloFrameEffects;
}

export const AspectRatio = React.forwardRef<React.ComponentRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(holoFrameEffectsClass(effects), ' overflow-hidden bg-[var(--hf-surface)] border border-[var(--hf-border-dim)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
