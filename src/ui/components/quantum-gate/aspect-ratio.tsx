import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: QuantumGateEffects;
}


export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(quantumGateEffectsClass(effects), ' overflow-hidden bg-[var(--qg-surface)] border border-[var(--qg-border)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
