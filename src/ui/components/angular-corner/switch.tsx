'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SwitchBase, SwitchThumbBase } from '../_base/switch';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<typeof SwitchBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
}

const versionKey = 'angular-corner';

const SWITCH_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';
const THUMB_CLIP_PATH = 'polygon(3px 0, calc(100% - 3px) 0, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 3px), 0 3px)';

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchBase>, SwitchProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const trackBgOff =
      resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.2)'
        : palette.base ?? '#1f1f1f';

    const trackBgOn =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.foreground
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.accentPrimary ?? palette.foreground;

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border;

    const thumbColor =
      resolvedType === 'solid' || resolvedType === 'inverse'
        ? palette.base ?? '#fff'
        : palette.foreground ?? '#fff';

    return (
      <SwitchBase
        ref={ref}
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
          'transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        style={{
          clipPath: SWITCH_CLIP_PATH,
          backgroundColor: trackBgOff,
          border: '2px solid ' + borderColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <SwitchThumbBase
          className={cn(
            'pointer-events-none block h-4 w-4 shadow-lg transition-transform',
            'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
          )}
          style={{
            clipPath: THUMB_CLIP_PATH,
            backgroundColor: thumbColor,
            boxShadow: '0 0 6px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
          }}
        />
      </SwitchBase>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;