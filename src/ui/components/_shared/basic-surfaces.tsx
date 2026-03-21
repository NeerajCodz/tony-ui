'use client';

import * as React from 'react';
import type { VariantColors } from '../../types/common';
import { getCoreTypeStyles, getVersionStyleProfile, normalizeColors } from './version-styles';

export type VisualType = string | undefined;

export interface StyledProps {
  version?: string;
  variant?: string;
  type?: VisualType;
  uiType?: VisualType;
  colors?: VariantColors;
  className?: string;
  style?: React.CSSProperties;
}

interface SurfaceStyleOptions {
  borderless?: boolean;
  rounded?: boolean;
  disableClip?: boolean;
  disableGlow?: boolean;
}

const shapeClipPaths: Record<string, string | undefined> = {
  clipped: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
  hex: 'polygon(25% 8%, 75% 8%, 96% 50%, 75% 92%, 25% 92%, 4% 50%)',
  bracket: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
  tab: 'polygon(0 8px, 8px 0, 100% 0, 100% 100%, 0 100%)',
};

export function cx(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(' ');
}

export function resolveVisualType(type?: VisualType, uiType?: VisualType) {
  return uiType ?? type ?? 'default';
}

export function getPalette(colors?: VariantColors) {
  return normalizeColors(colors);
}

export function getSurfaceStyle(
  version: string | undefined,
  type: VisualType,
  uiType: VisualType,
  colors?: VariantColors,
  style?: React.CSSProperties,
  options?: SurfaceStyleOptions
): React.CSSProperties {
  const profile = getVersionStyleProfile(version ?? 'default');
  const palette = normalizeColors(colors);
  const visualType = resolveVisualType(type, uiType);
  const core = getCoreTypeStyles(visualType, colors);
  const existingShadow = typeof core.boxShadow === 'string' ? core.boxShadow : undefined;
  const glowShadow =
    !options?.disableGlow && profile.hasGlow && visualType !== 'ghost' ? `0 0 12px ${palette.glow}` : undefined;
  const boxShadow = [existingShadow, glowShadow].filter(Boolean).join(', ') || undefined;

  return {
    ...core,
    color: (core.color as string | undefined) ?? palette.foreground,
    borderColor: options?.borderless ? 'transparent' : palette.border,
    borderStyle: options?.borderless ? 'none' : 'solid',
    borderWidth: options?.borderless ? 0 : profile.borderWidth,
    borderRadius: options?.rounded === false ? '0px' : profile.radius,
    fontFamily: profile.fontFamily,
    letterSpacing: profile.letterSpacing,
    textTransform: profile.casing === 'uppercase' ? 'uppercase' : undefined,
    clipPath: options?.disableClip ? undefined : shapeClipPaths[profile.shape],
    boxShadow,
    ...style,
  };
}

