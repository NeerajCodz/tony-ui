/**
 * Card Component Type Definitions & Version Declaration
 * This file is TYPE-FIRST: versions are declared here BEFORE components exist
 * Only versions declared here should have corresponding .tsx files
 * 
 * Version Activation Pattern:
 * 1. Declare version in this CardVersion type union
 * 2. Add metadata in CardVersionConfig
 * 3. Create corresponding card-{version}.tsx file
 * 4. Export from index.ts
 * 
 * Source: dynamic_theme.md - Type-first component versioning
 */

import React from 'react';
import type { ColorType, SemanticColorId } from '../colors.d.js';

/**
 * All Card Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic card design style
 * 
 * Versions:
 * - angular-corner: Beveled corners with glowing borders
 * - holo-frame: Holographic iridescent borders
 * - data-panel: Side technical panel with status indicators
 * - circuit-board: Circuit trace patterns with pulses
 * - quantum-gate: Quantum particles and wave visualization
 * - tactical-hud: Military HUD with radar sweep
 * - energy-shield: Hexagonal shield with energy waves
 * - terminal-window: Command prompt aesthetic
 * - matrix-grid: Animated grid with digital rain
 * - glass-morphism: Frosted glass with blur backdrop
 * - tech-panel: Industrial panel with warning stripes
 * - neon-outline: High-contrast neon glow
 */
export type CardVersion = 
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
  | 'neon-outline'
  | 'padding'
  | 'quantum-gate' 
  | 'raised'
  | 'tactical-hud' 
  | 'tech-panel' 
  | 'terminal-window';

/**
 * Card Type - Border and fill style (default, outline, solid)
 * Determines how the card border and background are rendered
 */
export type CardType = 'default' | 'outline' | 'solid';

/**
 * Card Variant - Built-in style variants for any version
 * These don't require new components, they use props/classes
 */
export type CardVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Metadata for each card version
 * This describes how each version should be rendered
 */
export interface CardVersionConfig {
  /** Unique version ID */
  version: CardVersion;
  
  /** Human-readable name */
  name: string;
  
  /** Whether this version is currently enabled */
  enabled: boolean;
  
  /** CSS class prefix for this version */
  classPrefix: string;
  
  /** Default padding/spacing */
  spacing: 'compact' | 'normal' | 'expanded';
  
  /** Border style */
  border: {
    style: 'none' | 'solid' | 'dashed';
    width: 'thin' | 'medium' | 'thick';
  };
  
  /** Background fill type */
  background: 'transparent' | 'subtle' | 'solid';
  
  /** Shadow elevation */
  shadow: 'none' | 'sm' | 'md' | 'lg';
  
  /** Default color type */
  colorType: ColorType;
  
  /** Whether variant supports semantic colors */
  supportsVariants: boolean;
  
  /** Description for documentation */
  description: string;
  
  /** Tags for categorization (optional) */
  tags?: string[];
}

/**
 * All card versions and their configurations
 * Cyber HUD/FUI card system with 12 futuristic designs
 */
export const CARD_VERSION_CONFIGS: Record<CardVersion, CardVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'card-angular-corner',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Beveled corners (45-degree cuts) with glowing borders'
  },
  
  'border': {
    version: 'border',
    name: 'Border',
    enabled: true,
    classPrefix: 'card-border',
    spacing: 'normal',
    border: { style: 'solid', width: 'thick' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Sharp rectangle with heavy, double-line structural borders'
  },

  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'card-circuit-board',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Tech rectangle with external circuit traces and connection nodes'
  },

  'compact': {
    version: 'compact',
    name: 'Compact',
    enabled: true,
    classPrefix: 'card-compact',
    spacing: 'compact',
    border: { style: 'solid', width: 'thin' },
    background: 'solid',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Tight, high-density sharp block for data grids'
  },
  
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'card-data-panel',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Asymmetric trapezium with top-right cut corner (folder tab style)'
  },

  'default': {
    version: 'default',
    name: 'Default',
    enabled: true,
    classPrefix: 'card-default',
    spacing: 'normal',
    border: { style: 'solid', width: 'thin' },
    background: 'solid',
    shadow: 'sm',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Standard block with minimal styling'
  },
  
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'card-energy-shield',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Curved stadium/pill shape with soft force-field edges'
  },

  'ghost': {
    version: 'ghost',
    name: 'Ghost',
    enabled: true,
    classPrefix: 'card-ghost',
    spacing: 'normal',
    border: { style: 'none', width: 'thin' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Invisible container that reveals sharp edges on hover'
  },
  
  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'card-glass-morphism',
    spacing: 'normal',
    border: { style: 'solid', width: 'thin' },
    background: 'transparent',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Frosted glass panel with semi-transparent backdrop'
  },
  
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'card-holo-frame',
    spacing: 'normal',
    border: { style: 'solid', width: 'thin' },
    background: 'subtle',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Floating disconnected corners creating an open frame'
  },

  'large': {
    version: 'large',
    name: 'Large',
    enabled: true,
    classPrefix: 'card-large',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'solid',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Oversized block for hero sections'
  },
  
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'card-matrix-grid',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Sharp rectangle aligned to a strict digital background grid'
  },
  
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'card-neon-outline',
    spacing: 'normal',
    border: { style: 'solid', width: 'thick' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'High-contrast sharp box with intense outer glow'
  },

  'padding': {
    version: 'padding',
    name: 'Padding',
    enabled: true,
    classPrefix: 'card-padding',
    spacing: 'expanded',
    border: { style: 'none', width: 'thin' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: false,
    description: 'Invisible layout spacer'
  },
  
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'card-quantum-gate',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Hexagonal aperture shape'
  },

  'raised': {
    version: 'raised',
    name: 'Raised',
    enabled: true,
    classPrefix: 'card-raised',
    spacing: 'normal',
    border: { style: 'solid', width: 'thin' },
    background: 'solid',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Extruded 3D block with hard shadow'
  },
  
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'card-tactical-hud',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Bracketed corners [ ] enclosing the content'
  },
  
  'tech-panel': {
    version: 'tech-panel',
    name: 'Tech Panel',
    enabled: true,
    classPrefix: 'card-tech-panel',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Industrial panel with 45-degree chamfered bottom-right corner'
  },
  
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'card-terminal-window',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'solid',
    shadow: 'md',
    colorType: 'surface',
    supportsVariants: true,
    description: 'Sharp retro window with distinct top title bar'
  }
};

/**
 * Card Component Props Interface
 * All card versions accept these props
 */
export interface CardProps {
  /** Card version to render */
  version?: CardVersion;
  
  /** Visual variant for color messaging */
  variant?: CardVariant;
  
  /** Card type - border and fill style (default, outline, solid) */
  type?: CardType;
  
  /** Base color type override */
  colorType?: ColorType;
  
  /** Enable or disable hover animations */
  animated?: boolean;
  
  /** CSS class name */
  className?: string;
  
  /** Card children */
  children?: React.ReactNode;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Additional aria attributes */
  ['aria-label']?: string;
  ['aria-describedby']?: string;
}

/**
 * Card Header Props
 */
export interface CardHeaderProps {
  /** Header content */
  children?: React.ReactNode;
  
  /** CSS class */
  className?: string;
  
  /** Header title for accessibility */
  title?: string;
}

/**
 * Card Content Props
 */
export interface CardContentProps {
  /** Content children */
  children?: React.ReactNode;
  
  /** CSS class */
  className?: string;
}

/**
 * Card Footer Props
 */
export interface CardFooterProps {
  /** Footer actions */
  children?: React.ReactNode;
  
  /** CSS class */
  className?: string;
  
  /** Flex direction for buttons */
  direction?: 'row' | 'column';
}

/**
 * Complete Card Component Type
 */
export interface CardComponent {
  (props: CardProps): React.ReactElement;
  Header: (props: CardHeaderProps) => React.ReactElement;
  Title: (props: { children?: React.ReactNode; className?: string }) => React.ReactElement;
  Description: (props: { children?: React.ReactNode; className?: string }) => React.ReactElement;
  Content: (props: CardContentProps) => React.ReactElement;
  Footer: (props: CardFooterProps) => React.ReactElement;
}
