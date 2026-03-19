/**
 * Common Type Definitions for UI System
 * Central source of truth for versions, variants, and component types
 */

// ============================================================================
// VERSIONS - Design System Layers (Shape + Animation + Layout)
// ============================================================================

/**
 * All available UI versions (design system layers)
 * Total: 19 versions
 */
export type Version =
  | 'angular-corner'
  | 'border'
  | 'circuit-board'
  | 'compact'
  | 'data-panel'
  | 'default'
  | 'energy-shield'
  | 'ghost'
  | 'glass-morphism'
  | 'holo-frame'
  | 'large'
  | 'matrix-grid'
  | 'neon'
  | 'padding'
  | 'quantum-gate'
  | 'raised'
  | 'tactical-hud'
  | 'tech-panel'
  | 'terminal-window';

/**
 * Cyber-futuristic versions (primary design system)
 */
export type CyberVersion =
  | 'angular-corner'
  | 'circuit-board'
  | 'data-panel'
  | 'energy-shield'
  | 'holo-frame'
  | 'matrix-grid'
  | 'neon'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'tech-panel'
  | 'terminal-window';

// ============================================================================
// VARIANTS - Color + Semantic Layer
// ============================================================================

export type Variant =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'inverse'
  | 'danger-soft'
  | 'warning-soft'
  | 'success-soft';

export type CoreVariant = 'default' | 'info' | 'success' | 'warning' | 'destructive' | 'neutral' | 'inverse';

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export type CoreComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'soft' | 'disabled';
export type ButtonComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'link' | 'icon';
export type OverlayComponentType = 'modal' | 'non-modal' | 'fullscreen' | 'side-panel' | 'floating';
export type FeedbackComponentType = 'default' | 'filled' | 'outline' | 'minimal' | 'loader';
export type InputComponentType = 'default' | 'filled' | 'outline' | 'underlined' | 'ghost';

// ============================================================================
// SIZES
// ============================================================================

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// ============================================================================
// CONFIG INTERFACES
// ============================================================================

export interface VariantColors {
  base: string;
  foreground: string;
  border: string;
  glow: string;
  accent?: string;
  muted?: string;
}

export interface VariantConfig {
  name: string;
  colors: VariantColors;
}

export interface ComponentConfig<TTypes extends string = string> {
  base: React.CSSProperties;
  sizes?: Record<string, React.CSSProperties>;
  types?: Record<TTypes, (colors: VariantColors) => React.CSSProperties>;
  animations?: {
    hover?: React.CSSProperties;
    active?: React.CSSProperties;
    focus?: React.CSSProperties;
  };
}

// ============================================================================
// BASE PROPS
// ============================================================================

export interface BaseUIProps {
  version?: Version;
  variant?: Variant;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const VERSIONS: readonly Version[] = [
  'angular-corner', 'border', 'circuit-board', 'compact', 'data-panel',
  'default', 'energy-shield', 'ghost', 'glass-morphism', 'holo-frame',
  'large', 'matrix-grid', 'neon', 'padding',
  'quantum-gate', 'raised', 'tactical-hud', 'tech-panel', 'terminal-window',
] as const;

export const CYBER_VERSIONS: readonly CyberVersion[] = [
  'angular-corner', 'circuit-board', 'data-panel', 'energy-shield',
  'holo-frame', 'matrix-grid', 'neon', 'quantum-gate',
  'tactical-hud', 'tech-panel', 'terminal-window',
] as const;

export const VARIANTS: readonly Variant[] = [
  'default', 'info', 'success', 'warning', 'destructive',
  'primary', 'secondary', 'accent', 'neutral', 'inverse',
  'danger-soft', 'warning-soft', 'success-soft',
] as const;

export const SIZES: readonly Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
