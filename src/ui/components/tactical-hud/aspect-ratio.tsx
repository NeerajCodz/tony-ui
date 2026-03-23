import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: TacticalHudEffects;
}


export const AspectRatio = React.forwardRef<React.ComponentRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(tacticalHudEffectsClass(effects), ' overflow-hidden bg-[var(--th-surface)] border border-[var(--th-hex-line)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
