/**
 * Misc Component Type Definitions
 * Toggle, ToggleGroup, ButtonGroup, Kbd, Typography, Item
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type MiscType = 'default' | 'outline' | 'solid';
export type MiscVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// ============================================================================
// TOGGLE COMPONENT - Cyber HUD/FUI Toggle System
// ============================================================================

/**
 * All Toggle Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic toggle design style
 */
export type ToggleVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon';

/**
 * Toggle Type - Border and fill style
 */
export type ToggleType = 'default' | 'outline' | 'solid';

/**
 * Toggle Variant - Color variants
 */
export type ToggleVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each toggle version
 */
export interface ToggleVersionConfig {
  version: ToggleVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All toggle versions and their configurations
 */
export const TOGGLE_VERSION_CONFIGS: Record<ToggleVersion, ToggleVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'toggle-angular-corner',
    description: 'Beveled toggle with angular accents and glow effect',
    features: ['corner-accents', 'glow-border', 'pressed-pulse']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'toggle-holo-frame',
    description: 'Iridescent holographic toggle with shimmer',
    features: ['holo-gradient', 'shimmer-effect', 'pressed-bloom']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'toggle-data-panel',
    description: 'Technical toggle with status LEDs',
    features: ['status-leds', 'data-readout', 'toggle-animation']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'toggle-circuit-board',
    description: 'Circuit trace toggle with electrical pulse',
    features: ['circuit-traces', 'pulse-animation', 'node-glow']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'toggle-quantum-gate',
    description: 'Quantum-state toggle with wave visualization',
    features: ['particle-effects', 'state-change', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'toggle-tactical-hud',
    description: 'Military toggle with targeting aesthetics',
    features: ['bracket-markers', 'lock-animation', 'tactical-grid']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'toggle-energy-shield',
    description: 'Hexagonal energy toggle with power pulse',
    features: ['hex-pattern', 'energy-pulse', 'shield-activate']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'toggle-terminal-window',
    description: 'Command prompt toggle with cursor blink',
    features: ['terminal-style', 'monospace-font', 'cmd-toggle']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'toggle-matrix-grid',
    description: 'Digital matrix toggle with code effect',
    features: ['grid-overlay', 'digital-pulse', 'glitch-effect']
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'toggle-neon',
    description: 'High-contrast neon toggle with bloom',
    features: ['neon-glow', 'press-pulse', 'outer-bloom']
  }
};

/**
 * Toggle Props
 */
export interface ToggleProps {
  version?: ToggleVersion;
  type?: ToggleType;
  variant?: ToggleVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// ============ TOGGLE GROUP TYPES ============

/**
 * Toggle Group Version - 10 Cyber/Futuristic Designs
 */
export type ToggleGroupVersion = 
  | 'angular-corner' 
  | 'neon' 
  | 'glass-morphism' 
  | 'circuit-board' 
  | 'holo-frame'
  | 'data-panel'
  | 'energy-shield'
  | 'matrix-grid'
  | 'tactical-hud'
  | 'quantum-gate';

export type ToggleGroupType = 'default' | 'outline' | 'solid';
export type ToggleGroupVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Toggle Group Item Props
 */
export interface ToggleGroupItemProps {
  value: string;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Toggle Group Props
 */
export interface ToggleGroupProps {
  version?: ToggleGroupVersion;
  type?: ToggleGroupType;
  variant?: ToggleGroupVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  items?: ToggleGroupItemProps[];
  children?: React.ReactNode;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  selectionType?: 'single' | 'multiple';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Toggle Group Version Config
 */
export interface ToggleGroupVersionConfig {
  version: ToggleGroupVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

/**
 * All Toggle Group Version Configs
 */
export const TOGGLE_GROUP_VERSION_CONFIGS: Record<ToggleGroupVersion, ToggleGroupVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'toggle-group-angular-corner',
    description: 'Beveled corners with glowing borders and connected items',
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'toggle-group-neon',
    description: 'High-contrast neon glow with pulsing active states',
  },
  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'toggle-group-glass-morphism',
    description: 'Frosted glass effect with smooth transitions',
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'toggle-group-circuit-board',
    description: 'Circuit trace patterns with electrical pulse animations',
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'toggle-group-holo-frame',
    description: 'Iridescent holographic borders with rainbow gradient',
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'toggle-group-data-panel',
    description: 'Technical panel style with status indicators',
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'toggle-group-energy-shield',
    description: 'Hexagonal shield pattern with energy waves',
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'toggle-group-matrix-grid',
    description: 'Digital matrix grid with cascading effects',
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'toggle-group-tactical-hud',
    description: 'Military HUD aesthetic with targeting elements',
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'toggle-group-quantum-gate',
    description: 'Quantum-inspired with particle visualization',
  },
};

// ============ BUTTON GROUP TYPES ============

/**
 * Button Group Version - 10 Cyber/Futuristic Designs
 */
export type ButtonGroupVersion = 
  | 'angular-corner' 
  | 'neon' 
  | 'glass-morphism' 
  | 'circuit-board' 
  | 'holo-frame'
  | 'data-panel'
  | 'energy-shield'
  | 'matrix-grid'
  | 'tactical-hud'
  | 'quantum-gate';

export type ButtonGroupType = 'default' | 'outline' | 'solid';
export type ButtonGroupVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Button Group Props
 */
export interface ButtonGroupProps {
  version?: ButtonGroupVersion;
  type?: ButtonGroupType;
  variant?: ButtonGroupVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Button Group Version Config
 */
export interface ButtonGroupVersionConfig {
  version: ButtonGroupVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

/**
 * All Button Group Version Configs
 */
export const BUTTON_GROUP_VERSION_CONFIGS: Record<ButtonGroupVersion, ButtonGroupVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'button-group-angular-corner',
    description: 'Beveled corners with connected button segments',
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'button-group-neon',
    description: 'High-contrast neon glow with seamless connections',
  },
  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'button-group-glass-morphism',
    description: 'Frosted glass segments with blur backdrop',
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'button-group-circuit-board',
    description: 'Circuit trace patterns connecting buttons',
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'button-group-holo-frame',
    description: 'Iridescent holographic border segments',
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'button-group-data-panel',
    description: 'Technical panel with dividers and indicators',
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'button-group-energy-shield',
    description: 'Energy shield segments with power flow',
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'button-group-matrix-grid',
    description: 'Digital matrix cells with grid overlay',
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'button-group-tactical-hud',
    description: 'Military HUD with targeting brackets',
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'button-group-quantum-gate',
    description: 'Quantum nodes with entanglement visuals',
  },
};

/**
 * Kbd Props
 */
export interface KbdProps {
  version?: 'default' | 'ghost' | 'outlined';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography Props
 */
export interface TypographyProps {
  version?: 'default';
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'code' | 'pre';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  muted?: boolean;
  lead?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Item Props
 */
export interface ItemProps {
  version?: 'default' | 'compact' | 'card';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  effects?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
