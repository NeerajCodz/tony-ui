'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { SpinnerBase } from '../_base/spinner';
import { normalizeColors } from '../_shared/version-styles';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  type?: ComponentType;
  variant?: string;
  size?: SpinnerSize;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

// Angular clipped octagon path for spinner
const ANGULAR_CLIP_PATH = 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)';

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', colors, type = 'default', className = '', style, ...props }, ref) => {
    const palette = normalizeColors(colors);
    
    // Compute spinner color based on type
    const spinnerColor =
      type === 'solid'
        ? palette.base ?? '#fff'
        : type === 'inverse'
          ? palette.base ?? '#000'
          : palette.accentPrimary ?? palette.foreground ?? '#60a5fa';
    
    const glowColor = palette.glow ?? spinnerColor;

    const sizeMap: Record<SpinnerSize, number> = {
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    };

    const pxSize = sizeMap[size] ?? 24;
    const borderWidth = size === 'sm' ? 2 : size === 'xl' ? 4 : 3;

    return (
      <SpinnerBase
        ref={ref}
        size={size}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: pxSize, height: pxSize, color: spinnerColor, ...style }}
        data-version={versionKey}
        data-type={type}
        {...props}
      >
        {/* Outer rotating clipped ring */}
        <span
          className="absolute inset-0 animate-spin"
          style={{
            clipPath: ANGULAR_CLIP_PATH,
            border: `${borderWidth}px solid transparent`,
            borderTopColor: spinnerColor,
            borderRightColor: spinnerColor,
            filter: `drop-shadow(0 0 6px ${glowColor})`,
          }}
        />
        {/* Inner static clipped shape */}
        <span
          className="absolute inset-[20%]"
          style={{
            clipPath: ANGULAR_CLIP_PATH,
            backgroundColor: `color-mix(in srgb, ${spinnerColor} 20%, transparent)`,
            border: `1px solid ${spinnerColor}`,
            opacity: 0.6,
          }}
        />
        {/* Center glow dot */}
        <span
          className="absolute inset-[40%] rounded-full"
          style={{
            backgroundColor: spinnerColor,
            boxShadow: `0 0 8px ${glowColor}`,
            opacity: 0.8,
          }}
        />
      </SpinnerBase>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
