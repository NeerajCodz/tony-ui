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
  | 'pill'
  | 'tactical-hud'
  | 'tech-panel'
  | 'terminal-window'
  | (string & {});

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
  | 'success-soft'
  | (string & {});

export type CoreVariant = 'default' | 'info' | 'success' | 'warning' | 'destructive' | 'neutral' | 'inverse';

export interface VariantAccent {
  primary?: string;
  secondary?: string;
  glow?: string;
  rgb?: string;
}

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export type StyleComponentType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'inverse'
  | 'contrast'
  | 'soft'
  | (string & {});
export type CoreComponentType = StyleComponentType | 'disabled';
export type ButtonComponentType = StyleComponentType | 'link' | 'icon';
export type OverlayComponentType = 'modal' | 'non-modal' | 'fullscreen' | 'side-panel' | 'floating';
export type FeedbackComponentType = 'default' | 'filled' | 'outline' | 'minimal' | 'loader';
export type InputComponentType = 'default' | 'filled' | 'outline' | 'underlined' | 'ghost';

// ============================================================================
// SIZES
// ============================================================================

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {});

// ============================================================================
// CONFIG INTERFACES
// ============================================================================

export interface VariantColors {
  base?: string;
  foreground?: string;
  border?: string;
  glow?: string;
  accent?: VariantAccent;
  muted?: string;
  background?: string;
  backgroundHover?: string;
  borderHover?: string;
  text?: string;
  textHover?: string;
  icon?: {
    color?: string;
    colorHover?: string;
  };
}

export interface VariantConfig {
  name?: string;
  colors: VariantColors;
  icon?: {
    color?: string;
    colorHover?: string;
  };
  accent?: {
    primary?: string;
    secondary?: string;
    glow?: string;
    rgb?: string;
  };
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
  'quantum-gate', 'pill', 'tactical-hud', 'tech-panel', 'terminal-window',
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
