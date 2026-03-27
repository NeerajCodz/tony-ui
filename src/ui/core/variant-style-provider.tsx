/**
 * Variant CSS Provider
 * Injects variant colors as CSS custom properties so components can use them
 */

import React, { useEffect, useMemo } from 'react';
import { Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { getVersionCssVariables, getVersionTokenPrefix } from './version-token-loader';

interface VariantStyleProviderProps {
  variant: Variant;
  version?: Version;
  children: React.ReactNode;
}

function hasDarkLuminance(hexColor: string): boolean {
  const hex = hexColor.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    return true;
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.6;
}

export function createVariantCssVariables(variant: Variant, version: Version = 'default'): Record<string, string> {
  const colors = getVariantColors(variant);
  const success = getVariantColors('success');
  const warning = getVariantColors('warning');
  const destructive = getVariantColors('destructive');
  const versionVariables = getVersionCssVariables(version);
  const tokenPrefix = getVersionTokenPrefix(version);
  const prefixed = (name: string) => `--${tokenPrefix}-${name}`;

  const accentPrimary = colors.accent?.primary || colors.base || '#06b6d4';
  const accentForeground = hasDarkLuminance(accentPrimary) ? '#ffffff' : '#0b1020';

  const surface = colors.background || colors.muted || '#1a1d2e';
  const text = colors.foreground || colors.text || '#ffffff';
  const border = colors.border || '#2a2e4d';
  const muted = colors.muted || colors.backgroundHover || '#2a2e4d';

  return {
    ...versionVariables,
    // Core vars
    '--df-accent': accentPrimary,
    '--df-accent-hover': colors.accent?.secondary || colors.borderHover || border,
    '--df-accent-foreground': accentForeground,
    '--df-surface': surface,
    '--df-bg': colors.background || '#0a0b14',
    '--df-background': colors.background || '#0a0b14',
    '--df-text': text,
    '--df-foreground': text,
    '--df-border': border,
    '--df-muted': muted,
    '--df-muted-text': colors.textHover || text,
    '--df-muted-foreground': colors.textHover || text,
    '--df-ring': colors.borderHover || colors.accent?.secondary || border,
    '--df-secondary': muted,
    '--df-glow': colors.glow || colors.accent?.glow || '#22d3ee',

    // Semantic aliases used by many components
    '--df-success': success.accent?.primary || success.base || '#22c55e',
    '--df-warning': warning.accent?.primary || warning.base || '#eab308',
    '--df-destructive': destructive.accent?.primary || destructive.base || '#ef4444',
    '--df-error': destructive.accent?.primary || destructive.base || '#ef4444',

    // Mirror semantic tokens into active version namespace so version-scoped
    // components (`--tp-*`, `--mg-*`, etc.) react to variant changes too.
    [prefixed('accent')]: accentPrimary,
    [prefixed('accent-dim')]: colors.accent?.secondary || colors.borderHover || border,
    [prefixed('text')]: text,
    [prefixed('text-dim')]: colors.textHover || text,
    [prefixed('border')]: border,
    [prefixed('surface')]: surface,
    [prefixed('bg')]: colors.background || '#0a0b14',
    [prefixed('primary')]: accentPrimary,
    [prefixed('secondary')]: muted,
    [prefixed('success')]: success.accent?.primary || success.base || '#22c55e',
    [prefixed('warning')]: warning.accent?.primary || warning.base || '#eab308',
    [prefixed('destructive')]: destructive.accent?.primary || destructive.base || '#ef4444',
    [prefixed('danger')]: destructive.accent?.primary || destructive.base || '#ef4444',
    [prefixed('critical')]: destructive.accent?.primary || destructive.base || '#ef4444',
  };
}

/**
 * Provider that injects variant and version CSS custom properties
 * Maps colors/tokens to the variables that components expect.
 */
export function VariantStyleProvider({ variant, version = 'default', children }: VariantStyleProviderProps) {
  const cssVars = useMemo(() => createVariantCssVariables(variant, version), [variant, version]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    const previous = new Map<string, string>();
    for (const [name, value] of Object.entries(cssVars)) {
      previous.set(name, root.style.getPropertyValue(name));
      root.style.setProperty(name, value);
    }

    return () => {
      for (const [name, value] of previous.entries()) {
        if (value) {
          root.style.setProperty(name, value);
        } else {
          root.style.removeProperty(name);
        }
      }
    };
  }, [cssVars]);

  return (
    <div style={cssVars as React.CSSProperties} className="w-full h-full">
      {children}
    </div>
  );
}
