'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SliderBase, SliderRangeBase, SliderThumbBase, SliderTrackBase } from '../_base/slider';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderBase> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  variant?: string;
}

const versionKey = 'angular-corner';

const TRACK_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)';
const THUMB_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)';

const Slider = React.forwardRef<React.ElementRef<typeof SliderBase>, SliderProps>(
  ({ type, uiType, colors, className, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const trackBg =
      resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.2)'
        : palette.base ?? '#1f1f1f';

    const rangeColor =
      resolvedType === 'solid' || resolvedType === 'default'
        ? palette.accentPrimary ?? palette.foreground
        : resolvedType === 'inverse'
          ? palette.base
          : (typeStyles.backgroundColor as string | undefined) ?? palette.accentPrimary;

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border;

    const thumbBg =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : palette.foreground ?? '#fff';

    return (
      <SliderBase
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        style={style}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <SliderTrackBase
          className="relative h-3 w-full grow overflow-hidden"
          style={{
            clipPath: TRACK_CLIP_PATH,
            backgroundColor: trackBg,
            border: '2px solid ' + borderColor,
          }}
        >
          <SliderRangeBase
            className="absolute h-full"
            style={{
              backgroundColor: rangeColor,
              boxShadow: '0 0 6px ' + (palette.glow ?? rangeColor),
            }}
          />
        </SliderTrackBase>
        <SliderThumbBase
          className="block h-5 w-5 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          style={{
            clipPath: THUMB_CLIP_PATH,
            backgroundColor: thumbBg,
            border: '2px solid ' + (palette.accentPrimary ?? borderColor),
            boxShadow: '0 0 8px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
          }}
        />
      </SliderBase>
    );
  }
);
Slider.displayName = 'Slider';

export { Slider };
export default Slider;