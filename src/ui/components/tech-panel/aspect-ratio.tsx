import * as React from 'react';
import { AspectRatioBase, type AspectRatioBaseProps } from '../_base/aspect-ratio';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface AspectRatioProps extends AspectRatioBaseProps {
  effects?: TechPanelEffects;
}

export const AspectRatio = React.forwardRef<React.ComponentRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      style={{ ...style }}
      className={cn(techPanelEffectsClass(effects), ' overflow-hidden bg-[var(--tp-panel)] border border-[var(--tp-border-outer)]', className)}
      {...props}
    />
  )
);
AspectRatio.displayName = 'AspectRatio';
