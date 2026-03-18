
/**
 * Button Component Type Definitions & Version Declaration
 * Type-first implementation: versions declared before components exist
 * 
 * Buttons include:
 * 1. Regular buttons (no icons)
 * 2. Icon buttons (icons only)
 * 
 * Source: Same pattern as cards with theme, type, variant, version
 */

import React from 'react';
import type { ColorType, SemanticColorId } from '../colors.d.js';

/**
 * Button Versions - When you add a version here, you can create its .tsx file
 * 
 * Versions:
 * - default: Standard button with medium padding
 * - compact: Reduced padding for tight spaces
 * - large: Larger padding for more prominence
 * - pill: Fully rounded/pill-shaped button
 * - ghost: Invisible background until hover
 * - raised: Elevated shadow effect
 */
export type ButtonVersion = 'default' | 'compact' | 'large' | 'pill' | 'ghost' | 'raised';

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
export interface ButtonProps {
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
  
  /** Button content */
  children?: React.ReactNode;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Form type */
  htmlType?: 'button' | 'submit' | 'reset';
  
  /** CSS class */
  className?: string;
  
  /** Aria label */
  ['aria-label']?: string;
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
