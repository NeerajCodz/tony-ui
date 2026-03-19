/**
 * Dialog Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Dialog component
 */
export type DialogVersion = Version;

/**
 * Dialog variants (color/semantic layer)
 */
export type DialogVariant = CoreVariant;

/**
 * Dialog-specific types (visual treatment)
 */
export type DialogType = 'default' | 'solid' | 'outline' | 'ghost' | 'modal' | 'fullscreen';

/**
 * Dialog component props
 */
export interface DialogProps {
  /** Design system version to use */
  version?: DialogVersion;
  /** Color/semantic variant */
  variant?: DialogVariant;
  /** Visual treatment type */
  type?: DialogType;
  /** Size of the dialog */
  size?: Size;
  /** Whether dialog is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Title of the dialog */
  title?: string;
  /** Description text */
  description?: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Whether dialog is dismissible */
  dismissible?: boolean;
  /** Whether to show close button */
  showClose?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Child content */
  children?: React.ReactNode;
}

/**
 * Dialog overlay props
 */
export interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
}

/**
 * Dialog content props
 */
export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog header props
 */
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog title props
 */
export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog description props
 */
export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog footer props
 */
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog close button props
 */
export interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: DialogVersion;
  variant?: DialogVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dialog component type
 */
export interface DialogComponent {
  (props: DialogProps): React.ReactElement | null;
  displayName?: string;
}

/**
 * Version-specific dialog components
 */
export interface VersionDialogComponents {
  Overlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
  Content: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
  Header?: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
  Title?: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description?: React.ForwardRefExoticComponent<DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
  Footer?: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
  Close?: React.ForwardRefExoticComponent<DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
}
