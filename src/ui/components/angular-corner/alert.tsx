'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertBase, AlertDescriptionBase, AlertTitleBase } from '../_base/alert';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface AlertProps extends Omit<React.ComponentPropsWithoutRef<typeof AlertBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
}

export interface AlertTitleProps extends React.ComponentPropsWithoutRef<typeof AlertTitleBase> {
  type?: ComponentType;
  colors?: VariantColors;
}

export interface AlertDescriptionProps extends React.ComponentPropsWithoutRef<typeof AlertDescriptionBase> {
  type?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

// Angular clipped corners for alert container
const ALERT_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const Alert = React.forwardRef<React.ElementRef<typeof AlertBase>, AlertProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    // Compute background based on type
    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? `rgba(${palette.accentRgb}, 0.12)`
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

    // Compute border based on type
    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border;

    // Compute text color based on type
    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <AlertBase
        ref={ref}
        className={cn('relative w-full p-4 text-sm', className)}
        style={{
          clipPath: ALERT_CLIP_PATH,
          backgroundColor,
          border: `2px solid ${borderColor}`,
          color: textColor,
          boxShadow:
            resolvedType === 'ghost' ? 'none' : `0 0 12px ${palette.glow ?? 'rgba(0,0,0,0.2)'}`,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<React.ElementRef<typeof AlertTitleBase>, AlertTitleProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => {
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(type, colors);

    const textColor =
      type === 'solid'
        ? palette.base ?? '#fff'
        : type === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <AlertTitleBase
        ref={ref}
        className={cn('mb-1 font-bold uppercase leading-none tracking-wider', className)}
        style={{
          color: textColor,
          letterSpacing: '0.08em',
          ...style,
        }}
        {...props}
      />
    );
  }
);
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<React.ElementRef<typeof AlertDescriptionBase>, AlertDescriptionProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => {
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(type, colors);

    const textColor =
      type === 'solid'
        ? palette.base ?? '#fff'
        : type === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <AlertDescriptionBase
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        style={{
          color: textColor,
          opacity: 0.85,
          ...style,
        }}
        {...props}
      />
    );
  }
);
AlertDescription.displayName = 'AlertDescription';

export default Alert;
