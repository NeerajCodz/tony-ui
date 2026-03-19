/**
 * Alert Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Alert component
 */
export type AlertVersion = Version;

/**
 * Alert variants (color/semantic layer)
 */
export type AlertVariant = CoreVariant;

/**
 * Alert-specific types (visual treatment)
 */
export type AlertType = 'default' | 'solid' | 'outline' | 'ghost' | 'soft' | 'minimal';

/**
 * Alert component props
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Design system version to use */
  version?: AlertVersion;
  /** Color/semantic variant */
  variant?: AlertVariant;
  /** Visual treatment type */
  type?: AlertType;
  /** Size of the alert */
  size?: Size;
  /** Title of the alert */
  title?: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Whether alert is dismissible */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Child content */
  children?: React.ReactNode;
}

/**
 * Alert title props
 */
export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Alert description props
 */
export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Alert component ref type
 */
export type AlertRef = HTMLDivElement;

/**
 * Alert component type with ref forwarding
 */
export type AlertComponent = React.ForwardRefExoticComponent<
  AlertProps & React.RefAttributes<AlertRef>
>;
