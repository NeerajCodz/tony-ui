'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SeparatorBase } from '../_base/separator';
import type { VariantColors } from '../../types/common';
import { normalizeColors } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface SeparatorProps extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
}

const versionKey = 'angular-corner';

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorBase>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const separatorColor =
      resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.foreground
        : resolvedType === 'soft' && palette.accentRgb
          ? 'rgba(' + palette.accentRgb + ', 0.3)'
          : palette.border ?? '#333';

    return (
      <SeparatorBase
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0',
          orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[2px]',
          className
        )}
        style={{
          backgroundColor: separatorColor,
          boxShadow: '0 0 4px ' + (palette.glow ?? 'transparent'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;