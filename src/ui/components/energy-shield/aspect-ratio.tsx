import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: EnergyShieldEffects;
}


export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(energyShieldEffectsClass(effects), ' overflow-hidden bg-[var(--es-surface)] border border-[var(--es-hex-line)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
