/**
 * Component Base Templates
 * Provides base implementations that version-specific components extend
 * Each version applies its unique styling via config
 */

import React, { useEffect, useState } from 'react';
import type { Version, Variant, Size, VariantColors } from '../types/common';
import { loadConfig, loadVariant, resolveStyles } from './create-handler';

// ============================================================================
// BASE PROPS INTERFACE
// ============================================================================

export interface BaseComponentProps {
  version?: Version;
  variant?: Variant;
  type?: string;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  animated?: boolean;
}

// ============================================================================
// HOOK: useComponentStyles
// ============================================================================

/**
 * Hook to load and resolve component styles
 * Handles async loading of config and variant
 */
export function useComponentStyles(
  componentName: string,
  version: Version,
  variant: Variant,
  type: string,
  size: Size,
  userStyle?: React.CSSProperties
) {
  const [styles, setStyles] = useState<React.CSSProperties>({});
  const [loading, setLoading] = useState(true);
  const [variantColors, setVariantColors] = useState<VariantColors | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadStyles() {
      try {
        const [config, colors] = await Promise.all([
          loadConfig(version, componentName),
          loadVariant(variant)
        ]);

        if (mounted) {
          const resolved = resolveStyles(config, colors, type, size, userStyle);
          setStyles(resolved);
          setVariantColors(colors);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadStyles();

    return () => { mounted = false; };
  }, [componentName, version, variant, type, size, userStyle]);

  return { styles, loading, variantColors };
}

// ============================================================================
// VERSION-SPECIFIC CLIP PATHS
// ============================================================================

export const CLIP_PATHS: Record<string, string> = {
  'angular-corner': 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
  'border': 'none',
  'circuit-board': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  'compact': 'none',
  'data-panel': 'polygon(0 5px, 5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px))',
  'default': 'none',
  'energy-shield': 'polygon(15px 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0 50%)',
  'ghost': 'none',
  'glass-morphism': 'none',
  'holo-frame': 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
  'large': 'none',
  'matrix-grid': 'none',
  'neon': 'none',
  'padding': 'none',
  'pill': 'none',
  'quantum-gate': 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
  'raised': 'none',
  'tactical-hud': 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
  'tech-panel': 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
  'terminal-window': 'none',
};

// ============================================================================
// VERSION-SPECIFIC BORDER STYLES
// ============================================================================

export function getVersionBorderStyle(version: Version, colors: VariantColors): React.CSSProperties {
  const base = colors.base || '#06b6d4';
  const glow = colors.glow || '#22d3ee';
  
  switch (version) {
    case 'angular-corner':
      return { border: `2px solid ${base}`, boxShadow: `0 0 10px ${glow}40` };
    case 'neon':
      return { border: `2px solid ${base}`, boxShadow: `0 0 15px ${glow}, inset 0 0 10px ${glow}20` };
    case 'holo-frame':
      return { border: `1px solid ${base}80`, boxShadow: `0 0 20px ${glow}30, inset 0 0 15px ${glow}10` };
    case 'energy-shield':
      return { border: `2px solid ${base}`, boxShadow: `0 0 20px ${glow}, 0 0 40px ${glow}40` };
    case 'circuit-board':
      return { border: `1px solid ${base}60`, boxShadow: `0 0 5px ${glow}30` };
    case 'data-panel':
      return { border: `1px solid ${base}`, boxShadow: `inset 0 0 10px ${glow}20` };
    case 'matrix-grid':
      return { border: `1px solid ${base}40`, boxShadow: `0 0 10px ${glow}20` };
    case 'quantum-gate':
      return { border: `2px solid ${base}`, boxShadow: `0 0 15px ${glow}60` };
    case 'tactical-hud':
      return { border: `2px solid ${base}80`, boxShadow: `0 0 8px ${glow}40` };
    case 'tech-panel':
      return { border: `1px solid ${base}70`, boxShadow: `0 0 12px ${glow}30` };
    case 'terminal-window':
      return { border: `1px solid ${base}50`, boxShadow: `0 0 5px ${glow}20` };
    case 'glass-morphism':
      return { border: `1px solid ${base}30`, backdropFilter: 'blur(10px)' };
    case 'ghost':
      return { border: 'none', background: 'transparent' };
    default:
      return { border: `1px solid ${base}40` };
  }
}

// ============================================================================
// VERSION-SPECIFIC BACKGROUNDS
// ============================================================================

export function getVersionBackground(version: Version, colors: VariantColors): React.CSSProperties {
  const base = colors.base || '#06b6d4';
  
  switch (version) {
    case 'angular-corner':
    case 'circuit-board':
    case 'data-panel':
    case 'quantum-gate':
    case 'tactical-hud':
    case 'tech-panel':
      return { background: `linear-gradient(135deg, ${base}15 0%, ${base}05 100%)` };
    case 'neon':
      return { background: `radial-gradient(ellipse at center, ${base}10 0%, transparent 70%)` };
    case 'holo-frame':
      return { background: `linear-gradient(180deg, ${base}10 0%, transparent 50%, ${base}05 100%)` };
    case 'energy-shield':
      return { background: `radial-gradient(ellipse at center, ${base}20 0%, ${base}05 100%)` };
    case 'matrix-grid':
      return { 
        background: `
          linear-gradient(${base}05 1px, transparent 1px),
          linear-gradient(90deg, ${base}05 1px, transparent 1px),
          ${base}08
        `,
        backgroundSize: '20px 20px'
      };
    case 'terminal-window':
      return { background: `linear-gradient(180deg, ${base}15 0%, #000 100%)` };
    case 'glass-morphism':
      return { background: `${base}10`, backdropFilter: 'blur(10px)' };
    case 'ghost':
      return { background: 'transparent' };
    default:
      return { background: `${base}10` };
  }
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

export const HOVER_ANIMATIONS: Record<string, React.CSSProperties> = {
  'angular-corner': { filter: 'brightness(1.1)', transform: 'translateY(-1px)' },
  'neon': { filter: 'brightness(1.3) drop-shadow(0 0 10px currentColor)' },
  'holo-frame': { filter: 'brightness(1.15)', transform: 'scale(1.01)' },
  'energy-shield': { filter: 'brightness(1.2)', transform: 'scale(1.02)' },
  'circuit-board': { filter: 'brightness(1.05)' },
  'data-panel': { filter: 'brightness(1.1)' },
  'default': { filter: 'brightness(1.05)' },
};

export const ACTIVE_ANIMATIONS: Record<string, React.CSSProperties> = {
  'angular-corner': { transform: 'scale(0.98)' },
  'neon': { transform: 'scale(0.97)', filter: 'brightness(0.9)' },
  'holo-frame': { transform: 'scale(0.99)' },
  'energy-shield': { transform: 'scale(0.97)' },
  'default': { transform: 'scale(0.98)' },
};
