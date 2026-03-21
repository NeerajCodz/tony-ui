import React from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/ui/types/components/button';
import {
  getCoreTypeStyles,
  getVersionButtonClass,
  getVersionButtonDecor,
  getVersionStyleProfile,
  normalizeColors,
} from '../_shared/version-styles';

const versionKey = 'angular-corner';

export default function Button({
  className,
  variant = 'default',
  type = 'default',
  version,
  colors,
  children,
  style,
  htmlType = 'button',
  uiType,
  ...props
}: ButtonProps & { uiType?: string }) {
  const profile = getVersionStyleProfile(version ?? versionKey);
  const normalized = normalizeColors(colors);
  const resolvedType = (uiType ?? type ?? 'default') as string;
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const baseBackground =
    resolvedType === 'soft' && normalized.accentRgb
      ? `rgba(${normalized.accentRgb}, 0.14)`
      : (typeStyles.backgroundColor as string | undefined) ?? normalized.base;

  const buttonStyles: React.CSSProperties = {
    ...typeStyles,
    backgroundColor: baseBackground,
    borderRadius: profile.radius,
    borderWidth: profile.borderWidth,
    borderStyle: 'solid',
    borderColor:
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? normalized.accentPrimary
        : resolvedType === 'ghost'
          ? 'transparent'
          : normalized.border,
    color: (typeStyles.color as string | undefined) ?? normalized.foreground,
    fontFamily: profile.fontFamily,
    letterSpacing: profile.letterSpacing,
    ...(profile.hasGlow && resolvedType !== 'ghost' ? { boxShadow: `${typeStyles.boxShadow ?? ''}${typeStyles.boxShadow ? ', ' : ''}0 0 12px ${normalized.glow}` } : {}),
    ...(resolvedType === 'ghost'
      ? { boxShadow: 'none' }
      : {}),
    ...style,
  };

  return (
    <button
      className={cn(getVersionButtonClass(profile), 'px-6 py-2 text-sm', className)}
      style={buttonStyles}
      data-variant={variant}
      data-version={profile.version}
      data-type={resolvedType}
      type={htmlType}
      {...props}
    >
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
      {getVersionButtonDecor(profile, colors)}
    </button>
  );
}
