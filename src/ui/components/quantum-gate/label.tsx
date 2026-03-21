'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { LabelBase } from '../_base/label';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.foreground ?? '#c0c0e0';

    return (
      <LabelBase
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none tracking-wide peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        style={{
          color: textColor,
          letterSpacing: '0.04em',
          textShadow: '0 0 4px ' + (palette.glow ?? 'rgba(100,100,255,0.3)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export { Label };
export default Label;