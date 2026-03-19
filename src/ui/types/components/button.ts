/**
 * Button Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Button component (all 19 version names)
 */
export type ButtonVersion = Version;

/**
 * Button variants (color/semantic layer)
 */
export type ButtonVariant = CoreVariant;

/**
 * Button-specific types (visual treatment)
 */
export type ButtonType = 'default' | 'solid' | 'outline' | 'ghost' | 'link' | 'disabled';



/**
 * Button component props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Design system version to use */
  version?: ButtonVersion;
  /** Color/semantic variant */
  variant?: ButtonVariant;
  /** Visual treatment type */
  type?: ButtonType;
  /** Size of the button */
  size?: Size;
  /** Whether button is in loading state */
  loading?: boolean;
  /** Icon to display before text */
  iconBefore?: React.ReactNode;
  /** Icon to display after text */
  iconAfter?: React.ReactNode;
  /** Whether button should take full width of container */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Child content */
  children?: React.ReactNode;
}

/**
 * Button component ref type
 */
export type ButtonRef = HTMLButtonElement;

/**
 * Button component type with ref forwarding
 */
export type ButtonComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<ButtonRef>
>;
