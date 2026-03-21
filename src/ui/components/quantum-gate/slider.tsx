'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SliderBase } from '../_base/slider';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface SliderProps extends Omit<React.ComponentPropsWithoutRef<typeof SliderBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const TRACK_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0 50%)';
const THUMB_CLIP_PATH = 'polygon(25% 6%, 75% 6%, 98% 50%, 75% 94%, 25% 94%, 2% 50%)';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderBase>,
  SliderProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const trackColor = 'rgba(' + (palette.accentRgb ?? '100,100,255') + ', 0.2)';
  const rangeColor = palette.accentPrimary ?? '#8080ff';
  const thumbColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : palette.accentPrimary ?? '#8080ff';

  return (
    <SliderBase
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      style={style}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <span
        className="relative h-2 w-full grow overflow-hidden"
        style={{
          clipPath: TRACK_CLIP_PATH,
          backgroundColor: trackColor,
        }}
      >
        <span
          className="absolute h-full"
          style={{
            backgroundColor: rangeColor,
            boxShadow: '0 0 8px ' + rangeColor,
          }}
        />
      </span>
      <span
        className="block h-5 w-5 transition-transform focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        style={{
          clipPath: THUMB_CLIP_PATH,
          backgroundColor: thumbColor,
          border: '2px solid ' + (palette.border ?? '#3a3a5a'),
          boxShadow: '0 0 10px ' + (palette.glow ?? 'rgba(100,100,255,0.5)'),
        }}
      />
    </SliderBase>
  );
});

Slider.displayName = 'Slider';

export { Slider };
export default Slider;