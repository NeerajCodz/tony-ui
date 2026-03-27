import React from 'react';
import type { VariantColors, Version } from '../../types/common';

export type CoreStyleType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

type VersionShape =
  | 'rounded'
  | 'sharp'
  | 'hex'
  | 'clipped'
  | 'pill'
  | 'bracket'
  | 'tab'
  | 'glass'
  | 'neon'
  | 'terminal'
  | 'industrial'
  | 'grid';

export interface VersionStyleProfile {
  version: Version;
  shape: VersionShape;
  radius: string;
  fontFamily: string;
  letterSpacing?: string;
  casing?: 'none' | 'uppercase';
  borderWidth: number;
  hasScanline?: boolean;
  hasGlow?: boolean;
  hasHoneycomb?: boolean;
  hasGrid?: boolean;
  hasBrackets?: boolean;
  hasHeaderTab?: boolean;
  hasTerminalBar?: boolean;
  hasInsetDepth?: boolean;
}

const fallbackColor = (value: string | undefined, fallback: string) => value ?? fallback;

export function normalizeColors(colors?: VariantColors) {
  const accentPrimary = colors?.accent?.primary;
  const accentSecondary = colors?.accent?.secondary;
  const accentGlow = colors?.accent?.glow;

  const base = colors?.base ?? colors?.background;
  const foreground = colors?.foreground ?? colors?.text;
  const border = colors?.border;
  const glow = colors?.glow ?? accentGlow;

  return {
    base: fallbackColor(base, '#0b1220'),
    foreground: fallbackColor(foreground, '#e2e8f0'),
    border: fallbackColor(border, '#334155'),
    glow: fallbackColor(glow, 'rgba(14,165,233,0.35)'),
    muted: fallbackColor(colors?.muted, '#94a3b8'),
    accentPrimary: fallbackColor(accentPrimary, foreground ?? '#38bdf8'),
    accentSecondary: fallbackColor(accentSecondary, border ?? '#334155'),
    textHover: fallbackColor(colors?.textHover, foreground ?? '#e2e8f0'),
    backgroundHover: fallbackColor(colors?.backgroundHover, base ?? '#0f172a'),
    accentRgb: colors?.accent?.rgb,
  };
}

export const VERSION_STYLE_PROFILES: Record<string, VersionStyleProfile> = {
  'angular-corner': {
    version: 'angular-corner',
    shape: 'clipped',
    radius: '0px',
    fontFamily: '"Rajdhani","Orbitron","Inter",sans-serif',
    letterSpacing: '0.06em',
    casing: 'uppercase',
    borderWidth: 2,
    hasGlow: true,
  },
  border: {
    version: 'border',
    shape: 'sharp',
    radius: '2px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 2,
  },
  'circuit-board': {
    version: 'circuit-board',
    shape: 'clipped',
    radius: '4px',
    fontFamily: '"Space Grotesk","Inter",sans-serif',
    borderWidth: 1,
    hasGlow: true,
  },
  compact: {
    version: 'compact',
    shape: 'rounded',
    radius: '4px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'data-panel': {
    version: 'data-panel',
    shape: 'tab',
    radius: '4px',
    fontFamily: '"JetBrains Mono","Inter",sans-serif',
    letterSpacing: '0.03em',
    borderWidth: 1,
    hasHeaderTab: true,
    hasScanline: true,
  },
  default: {
    version: 'default',
    shape: 'rounded',
    radius: '8px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'energy-shield': {
    version: 'energy-shield',
    shape: 'hex',
    radius: '12px',
    fontFamily: '"Exo 2","Inter",sans-serif',
    borderWidth: 1,
    hasGlow: true,
    hasHoneycomb: true,
  },
  ghost: {
    version: 'ghost',
    shape: 'rounded',
    radius: '4px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'glass-morphism': {
    version: 'glass-morphism',
    shape: 'glass',
    radius: '12px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
    hasGlow: true,
  },
  'holo-frame': {
    version: 'holo-frame',
    shape: 'clipped',
    radius: '8px',
    fontFamily: '"Exo 2","Inter",sans-serif',
    borderWidth: 1,
    hasGlow: true,
  },
  large: {
    version: 'large',
    shape: 'rounded',
    radius: '14px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'matrix-grid': {
    version: 'matrix-grid',
    shape: 'grid',
    radius: '6px',
    fontFamily: '"JetBrains Mono","Inter",sans-serif',
    borderWidth: 1,
    hasGrid: true,
  },
  neon: {
    version: 'neon',
    shape: 'neon',
    radius: '8px',
    fontFamily: '"Orbitron","Inter",sans-serif',
    letterSpacing: '0.04em',
    borderWidth: 2,
    hasGlow: true,
  },
  padding: {
    version: 'padding',
    shape: 'rounded',
    radius: '8px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'quantum-gate': {
    version: 'quantum-gate',
    shape: 'hex',
    radius: '10px',
    fontFamily: '"Sora","Inter",sans-serif',
    letterSpacing: '0.05em',
    borderWidth: 1,
    hasGlow: true,
    hasHoneycomb: true,
  },
  pill: {
    version: 'pill',
    shape: 'pill',
    radius: '999px',
    fontFamily: '"Inter",sans-serif',
    borderWidth: 1,
  },
  'tactical-hud': {
    version: 'tactical-hud',
    shape: 'bracket',
    radius: '0px',
    fontFamily: '"Rajdhani","Inter",sans-serif',
    letterSpacing: '0.08em',
    casing: 'uppercase',
    borderWidth: 1,
    hasBrackets: true,
  },
  'tech-panel': {
    version: 'tech-panel',
    shape: 'industrial',
    radius: '6px',
    fontFamily: '"Roboto Condensed","Inter",sans-serif',
    borderWidth: 1,
    hasInsetDepth: true,
  },
  'terminal-window': {
    version: 'terminal-window',
    shape: 'terminal',
    radius: '2px',
    fontFamily: '"JetBrains Mono","Fira Code",monospace',
    letterSpacing: '0.02em',
    borderWidth: 1,
    hasScanline: true,
    hasTerminalBar: true,
  },
};

export function getVersionStyleProfile(version?: string): VersionStyleProfile {
  return VERSION_STYLE_PROFILES[version ?? 'default'] ?? VERSION_STYLE_PROFILES.default;
}

export function getCoreTypeStyles(type: string, colors?: VariantColors) {
  const c = normalizeColors(colors);

  switch (type as CoreStyleType) {
    case 'solid':
      return {
        backgroundColor: c.accentPrimary,
        color: c.foreground,
        border: `1px solid ${c.border}`,
        boxShadow: `0 0 14px ${c.glow}`,
      } satisfies React.CSSProperties;
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: c.accentPrimary,
        border: `1px solid ${c.accentPrimary}`,
      } satisfies React.CSSProperties;
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: c.textHover,
        border: '1px solid transparent',
      } satisfies React.CSSProperties;
    case 'inverse':
      return {
        backgroundColor: c.foreground,
        color: c.base,
        border: `1px solid ${c.foreground}`,
      } satisfies React.CSSProperties;
    case 'contrast':
      return {
        backgroundColor: c.accentPrimary,
        color: '#020617',
        border: `2px solid ${c.foreground}`,
        fontWeight: 700,
      } satisfies React.CSSProperties;
    case 'soft':
      return {
        backgroundColor: c.accentRgb ? `rgba(${c.accentRgb}, 0.15)` : `color-mix(in srgb, ${c.accentPrimary} 14%, transparent)`,
        color: c.accentPrimary,
        border: `1px solid ${c.accentSecondary}`,
      } satisfies React.CSSProperties;
    case 'default':
    default:
      return {
        backgroundColor: c.base,
        color: c.foreground,
        border: `1px solid ${c.border}`,
      } satisfies React.CSSProperties;
  }
}

export function getVersionButtonClass(profile: VersionStyleProfile) {
  const shared = 'relative inline-flex items-center justify-center overflow-hidden transition-all duration-200';
  const caseClass = profile.casing === 'uppercase' ? 'uppercase' : '';

  switch (profile.shape) {
    case 'clipped':
      return `${shared} clip-path-angular ${caseClass}`.trim();
    case 'hex':
      return `${shared} clip-path-hexagon ${caseClass}`.trim();
    case 'pill':
      return `${shared} rounded-full ${caseClass}`.trim();
    case 'terminal':
      return `${shared} ${caseClass}`.trim();
    case 'bracket':
      return `${shared} ${caseClass}`.trim();
    default:
      return `${shared} ${caseClass}`.trim();
  }
}

export function getVersionButtonDecor(profile: VersionStyleProfile, colors?: VariantColors) {
  const c = normalizeColors(colors);

  if (profile.hasBrackets) {
    return (
      <>
        <span className="pointer-events-none absolute left-1 top-1 h-2 w-2 border-l border-t" style={{ borderColor: c.accentPrimary }} />
        <span className="pointer-events-none absolute bottom-1 right-1 h-2 w-2 border-b border-r" style={{ borderColor: c.accentPrimary }} />
      </>
    );
  }

  if (profile.hasTerminalBar) {
    return (
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-40" style={{ backgroundColor: c.accentPrimary }} />
    );
  }

  if (profile.shape === 'neon') {
    return (
      <span className="pointer-events-none absolute inset-0 opacity-70" style={{ boxShadow: `0 0 20px ${c.glow}` }} />
    );
  }

  if (profile.shape === 'clipped') {
    return (
      <>
        <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t" style={{ borderColor: c.accentSecondary }} />
        <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r" style={{ borderColor: c.accentSecondary }} />
      </>
    );
  }

  return null;
}

export function getVersionCardRootStyles(profile: VersionStyleProfile, type: string, colors?: VariantColors): React.CSSProperties {
  const c = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(type, colors);

  const base: React.CSSProperties = {
    borderRadius: profile.radius,
    borderWidth: profile.borderWidth,
    borderStyle: 'solid',
    borderColor: c.border,
    color: c.foreground,
    fontFamily: profile.fontFamily,
    letterSpacing: profile.letterSpacing,
    position: 'relative',
    overflow: 'hidden',
  };

  if (profile.shape === 'glass') {
    base.backdropFilter = 'blur(10px)';
    base.background = `color-mix(in srgb, ${c.base} 74%, transparent)`;
  }

  if (profile.shape === 'industrial') {
    base.boxShadow = `inset 0 1px 0 ${c.accentSecondary}, inset 0 -3px 0 color-mix(in srgb, ${c.border} 50%, transparent)`;
  }

  if (profile.hasGlow && type !== 'ghost') {
    base.boxShadow = `${base.boxShadow ? `${base.boxShadow}, ` : ''}0 0 18px ${c.glow}`;
  }

  return { ...base, ...typeStyles };
}

export function getVersionCardDecor(profile: VersionStyleProfile, colors?: VariantColors) {
  const c = normalizeColors(colors);

  if (profile.hasHoneycomb) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            `radial-gradient(circle at 10% 10%, ${c.glow} 1px, transparent 1px),` +
            `radial-gradient(circle at 30% 30%, ${c.accentPrimary} 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      />
    );
  }

  if (profile.hasGrid) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            `linear-gradient(to right, ${c.border} 1px, transparent 1px),` +
            `linear-gradient(to bottom, ${c.border} 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
        }}
      />
    );
  }

  if (profile.hasScanline) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 0%, ${c.accentPrimary} 50%, transparent 100%)`,
          backgroundSize: '100% 6px',
        }}
      />
    );
  }

  return null;
}

export function getSpinnerVisual(type: string, colors?: VariantColors) {
  const c = normalizeColors(colors);
  const base = getCoreTypeStyles(type, colors);

  return {
    color: (base.color as string) ?? c.foreground,
    glow: c.glow,
    stroke: (base.border as string) ?? c.border,
  };
}

export function getTypographyTone(type: string, colors?: VariantColors) {
  const c = normalizeColors(colors);

  if (type === 'inverse') {
    return { heading: c.base, body: c.base, border: c.foreground, codeBg: c.foreground, codeText: c.base };
  }
  if (type === 'contrast') {
    return { heading: '#020617', body: '#0f172a', border: '#020617', codeBg: '#0f172a', codeText: '#e2e8f0' };
  }
  if (type === 'soft') {
    return { heading: c.accentPrimary, body: c.muted, border: c.accentSecondary, codeBg: `color-mix(in srgb, ${c.accentPrimary} 12%, transparent)`, codeText: c.accentPrimary };
  }

  return { heading: c.foreground, body: c.foreground, border: c.border, codeBg: `color-mix(in srgb, ${c.base} 70%, #0b1220 30%)`, codeText: c.accentPrimary };
}

