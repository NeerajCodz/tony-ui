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
 * All Card Versions - When you add a version here, you can create its .tsx file
 * 
 * Versions:
 * - default: Standard card with primary theme, used as fallback
 * - minimal: Minimal styling with just border and padding
 * - compact: Reduced padding/spacing for dense layouts
 * - expanded: Extra padding and spacing for breathing room
 * - elevated: Floating effect with shadow
 * - filled: Solid background fill
 * - outlined: Prominent border, transparent background
 * - tonal: Tinted background using semantic colors
 */
export type CardVersion = 'default' | 'minimal' | 'compact' | 'expanded' | 'elevated' | 'filled' | 'outlined' | 'tonal';

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
}

/**
 * All card versions and their configurations
 * Add new entries when declaring new versions
 */
export const CARD_VERSION_CONFIGS: Record<CardVersion, CardVersionConfig> = {
  default: {
    version: 'default',
    name: 'Default Card',
    enabled: true,
    classPrefix: 'card-default',
    spacing: 'normal',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'md',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Standard card with border, subtle background, and default spacing'
  },
  
  minimal: {
    version: 'minimal',
    name: 'Minimal Card',
    enabled: true,
    classPrefix: 'card-minimal',
    spacing: 'compact',
    border: { style: 'solid', width: 'thin' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Minimal styling with subtle border and no shadow'
  },
  
  compact: {
    version: 'compact',
    name: 'Compact Card',
    enabled: true,
    classPrefix: 'card-compact',
    spacing: 'compact',
    border: { style: 'solid', width: 'thin' },
    background: 'subtle',
    shadow: 'sm',
    colorType: 'secondary',
    supportsVariants: true,
    description: 'Reduced padding for dense layouts and tight spacing'
  },
  
  expanded: {
    version: 'expanded',
    name: 'Expanded Card',
    enabled: true,
    classPrefix: 'card-expanded',
    spacing: 'expanded',
    border: { style: 'solid', width: 'medium' },
    background: 'subtle',
    shadow: 'lg',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Extra padding and spacing with larger shadow for prominence'
  },
  
  elevated: {
    version: 'elevated',
    name: 'Elevated Card',
    enabled: true,
    classPrefix: 'card-elevated',
    spacing: 'normal',
    border: { style: 'none', width: 'thin' },
    background: 'solid',
    shadow: 'lg',
    colorType: 'surface',
    supportsVariants: true,
    description: 'Floating effect with prominent shadow and solid background'
  },
  
  filled: {
    version: 'filled',
    name: 'Filled Card',
    enabled: true,
    classPrefix: 'card-filled',
    spacing: 'normal',
    border: { style: 'none', width: 'thin' },
    background: 'solid',
    shadow: 'sm',
    colorType: 'container',
    supportsVariants: true,
    description: 'Solid background fill without border'
  },
  
  outlined: {
    version: 'outlined',
    name: 'Outlined Card',
    enabled: true,
    classPrefix: 'card-outlined',
    spacing: 'normal',
    border: { style: 'solid', width: 'thick' },
    background: 'transparent',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Prominent border with transparent background and no shadow'
  },
  
  tonal: {
    version: 'tonal',
    name: 'Tonal Card',
    enabled: true,
    classPrefix: 'card-tonal',
    spacing: 'normal',
    border: { style: 'solid', width: 'thin' },
    background: 'subtle',
    shadow: 'none',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Tinted background using semantic colors for messaging'
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
  Content: (props: CardContentProps) => React.ReactElement;
  Footer: (props: CardFooterProps) => React.ReactElement;
}
