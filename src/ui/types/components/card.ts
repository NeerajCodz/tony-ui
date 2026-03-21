/**
 * Card Component Type Definitions
 */

import { type Version, type Variant, type VariantColors, type Size, VERSIONS } from '../common';
import type React from 'react';

/**
 * All available versions for Card component (all 19 version names)
 */
export type CardVersion = Version;

/**
 * Card variants (color/semantic layer)
 */
export type CardVariant = Variant;

/**
 * Card-specific types (visual treatment)
 */
export type CardType = 'default' | 'solid' | 'outline' | 'ghost' | 'elevated' | 'flat' | 'inverse' | 'contrast' | 'soft';



/**
 * Card component props
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Design system version to use */
  version?: CardVersion;
  /** Color/semantic variant */
  variant?: CardVariant;
  /** Visual treatment type */
  type?: CardType;
  /** Variant color tokens injected by handlers */
  colors?: VariantColors;
  /** Size of the card */
  size?: Size;
  /** Whether card is hoverable */
  hoverable?: boolean;
  /** Whether card is clickable */
  clickable?: boolean;
  /** Whether card has padding */
  padded?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Child content */
  children?: React.ReactNode;
}

/**
 * Card header props
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CardVersion;
  variant?: CardVariant;
  type?: CardType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card content props
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CardVersion;
  variant?: CardVariant;
  type?: CardType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card footer props
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CardVersion;
  variant?: CardVariant;
  type?: CardType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card title props
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: CardVersion;
  variant?: CardVariant;
  type?: CardType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card description props
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: CardVersion;
  variant?: CardVariant;
  type?: CardType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card component ref type
 */
export type CardRef = HTMLDivElement;

/**
 * Card component type with ref forwarding
 */
export interface CardVersionConfig {
  version: CardVersion;
  name: string;
  enabled: boolean;
  description: string;
  features: string[];
}

export const CARD_VERSION_CONFIGS: Record<CardVersion, CardVersionConfig> = {} as any;

VERSIONS.forEach(v => {
  CARD_VERSION_CONFIGS[v] = {
    version: v,
    name: v.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    enabled: true,
    description: `${v} style card`,
    features: ['responsive', 'thematic']
  };
});

