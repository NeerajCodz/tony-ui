'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { SpinnerBase } from '../_base/spinner';
import { getSpinnerVisual, getVersionStyleProfile } from '../_shared/version-styles';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  type?: string;
  variant?: string;
  size?: SpinnerSize;
  colors?: VariantColors;
}

const versionKey = 'tactical-hud';

const shapeClipPaths: Record<string, string | undefined> = {
  hex: 'polygon(25% 8%, 75% 8%, 96% 50%, 75% 92%, 25% 92%, 4% 50%)',
  clipped: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
  bracket: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', colors, type = 'default', version, className = '', style, ...props }, ref) => {
    const profile = getVersionStyleProfile(version ?? versionKey);
    const visual = getSpinnerVisual(type, colors);

    const sizeMap: Record<SpinnerSize, number> = {
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    };

    const pxSize = sizeMap[size] ?? 24;
    const clipPath = shapeClipPaths[profile.shape];

    return (
      <SpinnerBase
        ref={ref}
        size={size}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: pxSize, height: pxSize, color: visual.color, ...style }}
        data-version={profile.version}
        data-type={type}
        {...props}
      >
        <span
          className="absolute inset-0 animate-spin rounded-full border-2 border-transparent"
          style={{
            borderTopColor: visual.color,
            borderRightColor: visual.color,
            clipPath,
            filter: `drop-shadow(0 0 6px ${visual.glow})`,
          }}
        />
        <span
          className="absolute inset-[25%] rounded-full"
          style={{
            backgroundColor: `color-mix(in srgb, ${visual.color} 24%, transparent)`,
          }}
        />
        {(profile.shape === 'hex' || profile.hasHoneycomb) ? (
          <span
            className="absolute inset-[12%] border"
            style={{
              borderColor: visual.color,
              clipPath: shapeClipPaths.hex,
              opacity: 0.7,
            }}
          />
        ) : null}
        {profile.hasTerminalBar ? (
          <span className="absolute -top-1 left-0 right-0 h-[2px] opacity-70" style={{ backgroundColor: visual.color }} />
        ) : null}
      </SpinnerBase>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
