'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SeparatorBase } from '../_base/separator';
import type { VariantColors } from '../../types/common';
import { normalizeColors } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorBase> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorBase>,
  SeparatorProps
>(({ className, orientation = 'horizontal', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const separatorColor = palette.accentPrimary ?? palette.border ?? '#3a3a5a';

  return (
    <SeparatorBase
      ref={ref}
      orientation={orientation}
      className={cn(
        'shrink-0',
        orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[2px]',
        className
      )}
      style={{
        backgroundColor: separatorColor,
        boxShadow: '0 0 6px ' + separatorColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';

export { Separator };
export default Separator;