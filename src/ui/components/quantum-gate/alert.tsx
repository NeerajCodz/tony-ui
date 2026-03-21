'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertBase, AlertTitleBase, AlertDescriptionBase } from '../_base/alert';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const ALERT_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 16px 100%, 0 50%)';

const variantColors: Record<AlertVariant, string> = {
  default: '#8080ff',
  destructive: '#ef4444',
  success: '#22c55e',
  warning: '#f59e0b',
  info: '#3b82f6',
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps & { variant?: AlertVariant }
>(({ className, variant = 'default', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const accentColor = variantColors[variant] || palette.accentPrimary || '#8080ff';

  const backgroundColor =
    resolvedType === 'solid'
      ? accentColor
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? accentColor
      : resolvedType === 'ghost'
        ? 'transparent'
        : accentColor;

  const textColor =
    resolvedType === 'solid'
      ? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

  return (
    <AlertBase
      ref={ref}
      variant={variant}
      className={cn('relative w-full p-4', className)}
      style={{
        clipPath: ALERT_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 12px ' + accentColor + '40',
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : palette.foreground ?? '#e0e0ff';

  return (
    <AlertTitleBase
      ref={ref}
      className={cn('mb-1 font-semibold leading-none tracking-wider', className)}
      style={{
        color: textColor,
        letterSpacing: '0.04em',
        ...style,
      }}
      {...props}
    />
  );
});
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? 'rgba(255,255,255,0.9)'
      : resolvedType === 'inverse'
        ? 'rgba(0,0,0,0.8)'
        : palette.foreground ?? '#c0c0e0';

  return (
    <AlertDescriptionBase
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      style={{
        color: textColor,
        opacity: 0.9,
        ...style,
      }}
      {...props}
    />
  );
});
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
export default Alert;