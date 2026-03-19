/**
 * Sonner Component Type Definitions & Version Declaration
 * Type-first implementation: versions declared before components exist
 * 
 * Sonner is a toast/notification library with 19 different design system versions
 * and 5 distinct toast type styles.
 */

import React from 'react';
import type { ColorType, SemanticColorId } from '../colors.d.js';

/**
 * Sonner Toast Versions - 19 futuristic/themed toast notification styles
 * 
 * Basic Versions (3):
 * - default: Standard system toast
 * - compact: Smaller, minimal toast
 * - floating: Floating action style
 * 
 * Cyber/Futuristic Versions (10):
 * - angular-corner: Beveled corners with tech notches
 * - holo-frame: Octagonal holographic style
 * - data-panel: Asymmetric data display
 * - circuit-board: Circuit trace patterns
 * - quantum-gate: Hexagonal quantum aesthetic
 * - tactical-hud: Military HUD style
 * - energy-shield: Force field effect
 * - terminal-window: Command line aesthetic
 * - matrix-grid: Digital grid pattern
 * - neon-outline: Intense neon glow
 * 
 * Specialized Versions (6):
 * - tech-panel: Modern tech dashboard
 * - glass-morphism: Frosted glass effect
 * - minimalist: Ultra-clean minimal design
 * - gradient-wave: Flowing gradient animation
 * - pixel-art: Retro pixel aesthetic
 * - hologram: 3D holographic projection
 */
export type SonnerVersion =
  | 'default'
  | 'compact'
  | 'floating'
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline'
  | 'tech-panel'
  | 'glass-morphism'
  | 'minimalist'
  | 'gradient-wave'
  | 'pixel-art'
  | 'hologram';

/**
 * Toast Type - How the toast is displayed and animated
 * 
 * Types:
 * - default: Standard toast with background and border
 * - filled: Solid filled background with minimal border
 * - outline: Border-only style with transparent background
 * - minimal: Text-only with no visible border/background
 * - loader: Progress-based toast with duration animation
 */
export type SonnerType = 'default' | 'filled' | 'outline' | 'minimal' | 'loader';

/**
 * Toast Variant - Color and semantic meaning
 */
export type SonnerVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Toast Position on screen
 */
export type SonnerPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Metadata for each Sonner version
 */
export interface SonnerVersionConfig {
  /** Unique version ID */
  version: SonnerVersion;
  
  /** Human-readable name */
  name: string;
  
  /** Whether this version is currently enabled */
  enabled: boolean;
  
  /** CSS class prefix */
  classPrefix: string;
  
  /** Border style */
  border: {
    style: 'none' | 'solid';
    width: 'thin' | 'medium' | 'thick';
  };
  
  /** Border radius */
  borderRadius: 'sharp' | 'rounded' | 'pill';
  
  /** Shadow elevation */
  shadow: 'none' | 'sm' | 'md' | 'lg';
  
  /** Default color type */
  colorType: ColorType;
  
  /** Whether supports variants */
  supportsVariants: boolean;
  
  /** Maximum width of toast */
  maxWidth: 'sm' | 'md' | 'lg';
  
  /** Description */
  description: string;
}

/**
 * All Sonner versions and their configurations
 */
export const SONNER_VERSION_CONFIGS: Record<SonnerVersion, SonnerVersionConfig> = {
  default: {
    version: 'default',
    name: 'Default Toast',
    enabled: true,
    classPrefix: 'toast-default',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'rounded',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Standard toast with medium padding and border',
  },

  compact: {
    version: 'compact',
    name: 'Compact Toast',
    enabled: true,
    classPrefix: 'toast-compact',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'sm',
    description: 'Small compact toast for minimal space',
  },

  floating: {
    version: 'floating',
    name: 'Floating Toast',
    enabled: true,
    classPrefix: 'toast-floating',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'pill',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'sm',
    description: 'Floating action-style toast',
  },

  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'toast-angular-corner',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Beveled corners with tech-notches',
  },

  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'toast-holo-frame',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Octagonal holographic style',
  },

  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'toast-data-panel',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Asymmetric data display design',
  },

  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'toast-circuit-board',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Circuit trace patterns with pulses',
  },

  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'toast-quantum-gate',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Hexagonal quantum-inspired design',
  },

  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'toast-tactical-hud',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Military HUD aesthetic',
  },

  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'toast-energy-shield',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Force field effect with pulsating energy',
  },

  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'toast-terminal-window',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Command line aesthetic with CRT effects',
  },

  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'toast-matrix-grid',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Digital grid pattern with data flow',
  },

  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'toast-neon-outline',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Intense neon glow with thick outer bloom',
  },

  'tech-panel': {
    version: 'tech-panel',
    name: 'Tech Panel',
    enabled: true,
    classPrefix: 'toast-tech-panel',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Modern tech dashboard style',
  },

  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'toast-glass-morphism',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Frosted glass effect',
  },

  minimalist: {
    version: 'minimalist',
    name: 'Minimalist',
    enabled: true,
    classPrefix: 'toast-minimalist',
    border: { style: 'none', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'sm',
    description: 'Ultra-clean minimal design',
  },

  'gradient-wave': {
    version: 'gradient-wave',
    name: 'Gradient Wave',
    enabled: true,
    classPrefix: 'toast-gradient-wave',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: 'Flowing gradient animation',
  },

  'pixel-art': {
    version: 'pixel-art',
    name: 'Pixel Art',
    enabled: true,
    classPrefix: 'toast-pixel-art',
    border: { style: 'solid', width: 'medium' },
    borderRadius: 'sharp',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'sm',
    description: 'Retro pixel aesthetic',
  },

  hologram: {
    version: 'hologram',
    name: 'Hologram',
    enabled: true,
    classPrefix: 'toast-hologram',
    border: { style: 'solid', width: 'thin' },
    borderRadius: 'rounded',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    maxWidth: 'md',
    description: '3D holographic projection style',
  },
};

/**
 * Sonner Component Props
 */
export interface SonnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sonner version */
  version?: SonnerVersion;
  
  /** Toast type (default/filled/outline/minimal/loader) */
  type?: SonnerType;
  
  /** Visual variant */
  variant?: SonnerVariant;
  
  /** Toast position on screen */
  position?: SonnerPosition;
  
  /** Duration in seconds before auto-dismiss */
  duration?: number;
  
  /** Show progress loader animation */
  showLoader?: boolean;
  
  /** Maximum toasts to display */
  max?: number;
  
  /** Base color type */
  colorType?: ColorType;
  
  /** CSS class */
  className?: string;
}
