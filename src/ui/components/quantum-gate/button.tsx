'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/ui/types/components/button';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

const versionKey = 'quantum-gate';

const HEX_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)';

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
  const resolvedType = (uiType ?? type ?? 'default') as string;
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : resolvedType === 'ghost'
            ? 'transparent'
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border ?? '#3a3a5a';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

  const glowColor = palette.glow ?? 'rgba(100,100,255,0.4)';

  const buttonStyles: React.CSSProperties = {
    clipPath: HEX_CLIP_PATH,
    backgroundColor,
    border: '2px solid ' + borderColor,
    color: textColor,
    fontFamily: 'system-ui, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    boxShadow: resolvedType !== 'ghost' ? '0 0 16px ' + glowColor + ', inset 0 0 20px rgba(100,100,255,0.1)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...style,
  };

  return (
    <button
      className={cn(
        'relative px-8 py-2.5 text-sm overflow-hidden',
        'hover:scale-105 active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      style={buttonStyles}
      data-variant={variant}
      data-version={versionKey}
      data-type={resolvedType}
      type={htmlType}
      {...props}
    >
      <span
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, ' + (palette.accentPrimary ?? '#6060ff') + ' 50%, transparent 60%)',
          animation: 'quantum-shift 3s ease-in-out infinite',
        }}
      />
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </button>
  );
}