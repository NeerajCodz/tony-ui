'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { SpinnerBase } from '../_base/spinner';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  size?: SpinnerSize;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const HEX_CLIP_PATH = 'polygon(25% 6%, 75% 6%, 98% 50%, 75% 94%, 25% 94%, 2% 50%)';

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', colors, type, uiType, className = '', style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const sizeMap: Record<SpinnerSize, number> = {
      sm: 20,
      md: 32,
      lg: 48,
      xl: 64,
    };

    const pxSize = sizeMap[size] ?? 32;

    const spinnerColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.accentPrimary ?? '#8080ff';

    const glowColor = palette.glow ?? 'rgba(100,100,255,0.6)';

    return (
      <SpinnerBase
        ref={ref}
        size={size}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: pxSize, height: pxSize, ...style }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <span
          className="absolute inset-0 animate-spin"
          style={{
            clipPath: HEX_CLIP_PATH,
            border: '3px solid transparent',
            borderTopColor: spinnerColor,
            borderRightColor: spinnerColor,
            filter: 'drop-shadow(0 0 8px ' + glowColor + ')',
          }}
        />
        <span
          className="absolute inset-[15%]"
          style={{
            clipPath: HEX_CLIP_PATH,
            border: '2px solid ' + spinnerColor,
            opacity: 0.4,
            animation: 'spin 2s linear infinite reverse',
          }}
        />
        <span
          className="absolute inset-[35%]"
          style={{
            clipPath: HEX_CLIP_PATH,
            backgroundColor: spinnerColor,
            opacity: 0.8,
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </SpinnerBase>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;