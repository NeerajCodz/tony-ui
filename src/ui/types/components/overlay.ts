/**
 * Overlay Component Type Definitions
 * Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard, ContextMenu, DropdownMenu
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type OverlayType = 'default' | 'outline' | 'solid';
export type OverlayVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Dialog Props
 */
export interface DialogProps {
  version?: 'default' | 'centered' | 'fullscreen';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  showClose?: boolean;
  overlayClassName?: string;
}

/**
 * Alert Dialog Props
 */
export interface AlertDialogProps {
  version?: 'default' | 'destructive';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
}

/**
 * Sheet Props
 */
export interface SheetProps {
  version?: 'default' | 'padded';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Drawer Props
 */
export interface DrawerProps {
  version?: 'default' | 'minimal';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'left' | 'right' | 'bottom';
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Popover Props
 */
export interface PopoverProps {
  version?: 'default' | 'compact';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

/**
 * Tooltip Props
 */
export interface TooltipProps {
  version?: 'default' | 'arrow';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  className?: string;
}

/**
 * Hover Card Props
 */
export interface HoverCardProps {
  version?: 'default' | 'rich';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  trigger: React.ReactNode;
  children?: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
}

/**
 * Context Menu Props
 */
export interface ContextMenuItemDef {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
  shortcut?: string;
}

export interface ContextMenuProps {
  version?: 'default' | 'compact';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: ContextMenuItemDef[];
  children: React.ReactNode;
  className?: string;
}

/**
 * Dropdown Menu Props
 */
export interface DropdownMenuProps {
  version?: 'default' | 'compact';
  type?: OverlayType;
  variant?: OverlayVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: ContextMenuItemDef[];
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}
