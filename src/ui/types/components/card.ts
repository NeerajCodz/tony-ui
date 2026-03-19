/**
 * Card Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Card component (all 19 version names)
 */
export type CardVersion = Version;

/**
 * Card variants (color/semantic layer)
 */
export type CardVariant = CoreVariant;

/**
 * Card-specific types (visual treatment)
 */
export type CardType = 'default' | 'solid' | 'outline' | 'ghost' | 'elevated' | 'flat';



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
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card content props
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CardVersion;
  variant?: CardVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card footer props
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CardVersion;
  variant?: CardVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card title props
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: CardVersion;
  variant?: CardVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card description props
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: CardVersion;
  variant?: CardVariant;
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
export type CardComponent = React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<CardRef>
>;
