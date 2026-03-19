
/**
 * Button Component Type Definitions & Version Declaration
 * Type-first implementation: versions declared before components exist
 * 
 * Buttons include:
 * 1. Regular buttons (no icons)
 * 2. Icon buttons (icons only)
 * 3. Cyber/Futuristic button versions (10 unique shapes)
 * 
 * Source: Same pattern as cards with theme, type, variant, version
 */

import React from 'react';
import type { ColorType, SemanticColorId } from '../colors.d.js';

/**
 * Basic Button Versions - Simple utility buttons
 */
export type BasicButtonVersion = 'default' | 'compact' | 'large' | 'pill' | 'ghost' | 'raised';

/**
 * Cyber Button Versions - Futuristic HUD-style buttons with unique shapes
 * 
 * Versions:
 * - angular-corner: Beveled corners with clip-path
 * - holo-frame: Octagonal with shimmer effect
 * - data-panel: Asymmetric cut design
 * - circuit-board: Circuit traces overlay
 * - quantum-gate: Hexagonal shape
 * - tactical-hud: Military HUD style
 * - energy-shield: Force field effect
 * - terminal-window: Command line aesthetic
 * - matrix-grid: Digital grid pattern
 * - neon-outline: Intense glow effect
 */
export type CyberButtonVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate' 
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon-outline';

/**
 * Combined Button Version type
 */
export type ButtonVersion = BasicButtonVersion | CyberButtonVersion;

/**
 * Button Type - Border and fill style
 * 
 * Types:
 * - default: Filled background with border
 * - outline: Border only with transparent background
 * - solid: Solid fill with no border
 */
export type ButtonType = 'default' | 'outline' | 'solid';

/**
 * Button Variant - Color messaging
 */
export type ButtonVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Button Size
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Icon Button Versions
 */
export type IconButtonVersion = 'default' | 'compact' | 'circle' | 'ghost' | 'floating';

/**
 * Metadata for each button version
 */
export interface ButtonVersionConfig {
  /** Unique version ID */
  version: ButtonVersion;
  
  /** Human-readable name */
  name: string;
  
  /** Whether this version is currently enabled */
  enabled: boolean;
  
  /** CSS class prefix */
  classPrefix: string;
  
  /** Default padding */
  padding: {
    x: 'compact' | 'normal' | 'large';
    y: 'compact' | 'normal' | 'large';
  };
  
  /** Border style */
  border: {
    style: 'none' | 'solid';
    width: 'thin' | 'medium';
  };
  
  /** Border radius */
  borderRadius: 'sharp' | 'rounded' | 'pill';
  
  /** Shadow elevation */
  shadow: 'none' | 'sm' | 'md';
  
  /** Default color type */
  colorType: ColorType;
  
  /** Whether supports variants */
  supportsVariants: boolean;
  
  /** Description */
  description: string;
}

/**
 * All button versions and their configurations
 */
export const BUTTON_VERSION_CONFIGS: Record<ButtonVersion, ButtonVersionConfig> = {
  default: {
    version: 'default',
    name: 'Default Button',
    enabled: true,
    classPrefix: 'btn-default',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'rounded',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Standard button with medium padding and border',
  },

  compact: {
    version: 'compact',
    name: 'Compact Button',
    enabled: true,
    classPrefix: 'btn-compact',
    padding: { x: 'compact', y: 'compact' },
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Small compact button for tight spaces',
  },

  large: {
    version: 'large',
    name: 'Large Button',
    enabled: true,
    classPrefix: 'btn-large',
    padding: { x: 'large', y: 'large' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'rounded',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Large button for prominent actions',
  },

  pill: {
    version: 'pill',
    name: 'Pill Button',
    enabled: true,
    classPrefix: 'btn-pill',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'pill',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Fully rounded pill-shaped button',
  },

  ghost: {
    version: 'ghost',
    name: 'Ghost Button',
    enabled: true,
    classPrefix: 'btn-ghost',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Invisible until hover',
  },

  raised: {
    version: 'raised',
    name: 'Raised Button',
    enabled: true,
    classPrefix: 'btn-raised',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'none', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Elevated button with shadow effect',
  },

  // Cyber Button Versions
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'btn-angular-corner',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Beveled corners with glowing borders and tech-notches',
  },

  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'btn-holo-frame',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Octagonal with shimmer and iridescent border',
  },

  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'btn-data-panel',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Asymmetric cut design with status indicators',
  },

  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'btn-circuit-board',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Circuit trace patterns with electrical pulses',
  },

  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'btn-quantum-gate',
    padding: { x: 'large', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Hexagonal shape with quantum-inspired design',
  },

  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'btn-tactical-hud',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Military HUD aesthetic with targeting elements',
  },

  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'btn-energy-shield',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Force field effect with pulsating energy',
  },

  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'btn-terminal-window',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Command line aesthetic with CRT effects',
  },

  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'btn-matrix-grid',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Digital grid pattern with data flow',
  },

  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'btn-neon-outline',
    padding: { x: 'normal', y: 'normal' },
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Intense neon glow with thick outer bloom',
  },
};

/**
 * Icon Button Version Configs
 */
export interface IconButtonVersionConfig {
  version: IconButtonVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  size: 'sm' | 'md' | 'lg';
  borderRadius: 'sharp' | 'rounded' | 'circle';
  shadow: 'none' | 'sm' | 'md';
  description: string;
}

export const ICON_BUTTON_VERSION_CONFIGS: Record<IconButtonVersion, IconButtonVersionConfig> = {
  default: {
    version: 'default',
    name: 'Default Icon Button',
    enabled: true,
    classPrefix: 'icon-btn-default',
    size: 'md',
    borderRadius: 'rounded',
    shadow: 'sm',
    description: 'Standard square icon button with rounded corners',
  },

  compact: {
    version: 'compact',
    name: 'Compact Icon Button',
    enabled: true,
    classPrefix: 'icon-btn-compact',
    size: 'sm',
    borderRadius: 'rounded',
    shadow: 'none',
    description: 'Small compact icon button',
  },

  circle: {
    version: 'circle',
    name: 'Circle Icon Button',
    enabled: true,
    classPrefix: 'icon-btn-circle',
    size: 'md',
    borderRadius: 'circle',
    shadow: 'sm',
    description: 'Circular icon button',
  },

  ghost: {
    version: 'ghost',
    name: 'Ghost Icon Button',
    enabled: true,
    classPrefix: 'icon-btn-ghost',
    size: 'md',
    borderRadius: 'rounded',
    shadow: 'none',
    description: 'Invisible background with border on hover',
  },

  floating: {
    version: 'floating',
    name: 'Floating Icon Button',
    enabled: true,
    classPrefix: 'icon-btn-floating',
    size: 'lg',
    borderRadius: 'circle',
    shadow: 'md',
    description: 'Floating action button with large shadow',
  },
};

/**
 * Button Component Props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button version */
  version?: ButtonVersion;
  
  /** Button type (default/outline/solid) */
  type?: ButtonType;
  
  /** Visual variant */
  variant?: ButtonVariant;
  
  /** Button size */
  size?: ButtonSize;
  
  /** Base color type */
  colorType?: ColorType;
  
  /** Enable animations */
  animated?: boolean;
  
  /** Loading state */
  loading?: boolean;
  
  /** Icon element */
  icon?: React.ReactNode;
  
  /** Icon position */
  iconPosition?: 'left' | 'right';
  
  /** Button content */
  children?: React.ReactNode;
  
  /** CSS class */
  className?: string;
}

/**
 * Icon Button Props
 */
export interface IconButtonProps {
  /** Icon button version */
  version?: IconButtonVersion;
  
  /** Button type */
  type?: ButtonType;
  
  /** Visual variant */
  variant?: ButtonVariant;
  
  /** Base color type */
  colorType?: ColorType;
  
  /** Icon element (React.ReactNode) */
  icon: React.ReactNode;
  
  /** Enable animations */
  animated?: boolean;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** HTML button type */
  htmlType?: 'button' | 'submit' | 'reset';
  
  /** Tooltip or aria-label */
  label?: string;
  
  /** CSS class */
  className?: string;
}
