'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { LabelBase } from '../_base/label';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface LabelProps extends Omit<React.ComponentPropsWithoutRef<typeof LabelBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  required?: boolean;
  error?: boolean;
}

const versionKey = 'angular-corner';

export const Label = React.forwardRef<React.ElementRef<typeof LabelBase>, LabelProps>(
  ({ className, type, uiType, colors, style, required, error, children, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const textColor = error
      ? '#ef4444'
      : resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <LabelBase
        ref={ref}
        className={cn(
          'text-sm font-bold uppercase tracking-wider leading-none',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        style={{
          color: textColor,
          letterSpacing: '0.08em',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-400">*</span>}
      </LabelBase>
    );
  }
);

Label.displayName = 'Label';

export default Label;