/**
 * Drawer Component Type Definitions
 */

import type { Version, CoreVariant } from '../common';
import type React from 'react';

/**
 * All available versions for Drawer component
 */
export type DrawerVersion = Version;

/**
 * Drawer variants (color/semantic layer)
 */
export type DrawerVariant = CoreVariant;

/**
 * Drawer-specific types (visual treatment)
 */
export type DrawerType = 'default' | 'solid' | 'outline' | 'ghost' | 'slide' | 'fullscreen';

/**
 * Drawer component props
 */
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Design system version to use */
  version?: DrawerVersion;
  /** Color/semantic variant */
  variant?: DrawerVariant;
  /** Visual treatment type */
  type?: DrawerType;
  /** Whether drawer is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Title of the drawer */
  title?: string;
  /** Description text */
  description?: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Whether drawer is dismissible */
  dismissible?: boolean;
  /** Snap points for drawer positioning */
  snapPoints?: (string | number)[];
  /** Currently active snap point */
  activeSnapPoint?: string | number;
  /** Callback to set active snap point */
  setActiveSnapPoint?: (point: string | number | null) => void;
  /** Additional CSS classes */
  className?: string;
  /** Child content */
  children?: React.ReactNode;
}

/**
 * Drawer content props
 */
export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DrawerVersion;
  variant?: DrawerVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Drawer header props
 */
export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DrawerVersion;
  variant?: DrawerVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Drawer title props
 */
export interface DrawerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: DrawerVersion;
  variant?: DrawerVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Drawer description props
 */
export interface DrawerDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: DrawerVersion;
  variant?: DrawerVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Drawer footer props
 */
export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DrawerVersion;
  variant?: DrawerVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Drawer component type
 */
export interface DrawerComponent {
  (props: DrawerProps): React.ReactElement | null;
  displayName?: string;
}

/**
 * Version-specific drawer components
 */
export interface VersionDrawerComponents {
  Overlay: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  Content: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
  Header?: React.ForwardRefExoticComponent<DrawerHeaderProps & React.RefAttributes<HTMLDivElement>>;
  Title?: React.ForwardRefExoticComponent<DrawerTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description?: React.ForwardRefExoticComponent<DrawerDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
  Footer?: React.ForwardRefExoticComponent<DrawerFooterProps & React.RefAttributes<HTMLDivElement>>;
}
