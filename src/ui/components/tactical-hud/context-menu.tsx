import React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  colors?: VariantColors;
  variant?: string;
  version?: string;
}

const getTypeStyles = (type: ComponentType, colors?: VariantColors): React.CSSProperties => {
  if (!colors) return {};

  const base = colors.base;
  const foreground = colors.foreground;
  const border = colors.border;
  const glow = colors.glow;
  const accent = colors.accent?.primary ?? colors.base;
  const muted = colors.muted ?? colors.border;

  switch (type) {
    case 'solid':
      return {
        backgroundColor: accent,
        color: foreground,
        border: border ? `1px solid ${border}` : undefined,
        boxShadow: glow ? `0 0 12px ${glow}` : undefined,
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: accent ?? foreground,
        border: border ? `1px solid ${border}` : (accent ? `1px solid ${accent}` : undefined),
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: foreground,
        border: 'none',
      };
    case 'inverse':
      return {
        backgroundColor: foreground,
        color: base ?? accent,
        border: foreground ? `1px solid ${foreground}` : undefined,
      };
    case 'contrast':
      return {
        backgroundColor: border ?? accent,
        color: foreground,
        border: accent ? `2px solid ${accent}` : undefined,
        fontWeight: 700,
      };
    case 'soft':
      return {
        backgroundColor: base ? `color-mix(in srgb, ${base} 12%, transparent)` : undefined,
        color: foreground,
        border: muted ? `1px solid ${muted}` : undefined,
      };
    case 'default':
    default:
      return {
        backgroundColor: base,
        color: foreground,
        border: border ? `1px solid ${border}` : undefined,
      };
  }
};

import {
  ContextMenuBase,
  ContextMenuTriggerBase,
  ContextMenuGroupBase,
  ContextMenuPortalBase,
  ContextMenuSubBase,
  ContextMenuRadioGroupBase,
  ContextMenuSubTriggerBase,
  ContextMenuSubContentBase,
  ContextMenuContentBase,
  ContextMenuItemBase,
  ContextMenuCheckboxItemBase,
  ContextMenuRadioItemBase,
  ContextMenuLabelBase,
  ContextMenuSeparatorBase,
  ContextMenuItemIndicatorBase,
} from '../_base/context-menu';

export interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuContentBase>, StyledProps {}
export interface ContextMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuSubContentBase>, StyledProps {}
export interface ContextMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof ContextMenuSubTriggerBase>, StyledProps {}
export interface ContextMenuItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuItemBase>, StyledProps {}
export interface ContextMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuCheckboxItemBase>, StyledProps {}
export interface ContextMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuRadioItemBase>, StyledProps {}
export interface ContextMenuLabelProps extends React.ComponentPropsWithoutRef<typeof ContextMenuLabelBase>, StyledProps {}
export interface ContextMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof ContextMenuSeparatorBase>, StyledProps {}

const versionIdentityClass = 'context-menu-tactical-hud';

const ContextMenuContent = React.forwardRef<React.ElementRef<typeof ContextMenuContentBase>, ContextMenuContentProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuContentBase
      ref={ref}
      className={cn('context-menu-content', versionIdentityClass, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuContent.displayName = 'ContextMenuContent';

const ContextMenuSubContent = React.forwardRef<React.ElementRef<typeof ContextMenuSubContentBase>, ContextMenuSubContentProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuSubContentBase
      ref={ref}
      className={cn('context-menu-sub-content', `${versionIdentityClass}__sub-content`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

const ContextMenuSubTrigger = React.forwardRef<React.ElementRef<typeof ContextMenuSubTriggerBase>, ContextMenuSubTriggerProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuSubTriggerBase
      ref={ref}
      className={cn('context-menu-sub-trigger', `${versionIdentityClass}__sub-trigger`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

const ContextMenuItem = React.forwardRef<React.ElementRef<typeof ContextMenuItemBase>, ContextMenuItemProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuItemBase
      ref={ref}
      className={cn('context-menu-item', `${versionIdentityClass}__item`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuItem.displayName = 'ContextMenuItem';

const ContextMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof ContextMenuCheckboxItemBase>, ContextMenuCheckboxItemProps>(
  ({ className, type = 'default', colors, style, children, ...props }, ref) => (
    <ContextMenuCheckboxItemBase
      ref={ref}
      className={cn('context-menu-checkbox-item', `${versionIdentityClass}__checkbox-item`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    >
      <span className={cn('context-menu-item-indicator', `${versionIdentityClass}__item-indicator`)}>
        <ContextMenuItemIndicatorBase />
      </span>
      {children}
    </ContextMenuCheckboxItemBase>
  )
);
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

const ContextMenuRadioItem = React.forwardRef<React.ElementRef<typeof ContextMenuRadioItemBase>, ContextMenuRadioItemProps>(
  ({ className, type = 'default', colors, style, children, ...props }, ref) => (
    <ContextMenuRadioItemBase
      ref={ref}
      className={cn('context-menu-radio-item', `${versionIdentityClass}__radio-item`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    >
      <span className={cn('context-menu-item-indicator', `${versionIdentityClass}__item-indicator`)}>
        <ContextMenuItemIndicatorBase />
      </span>
      {children}
    </ContextMenuRadioItemBase>
  )
);
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

const ContextMenuLabel = React.forwardRef<React.ElementRef<typeof ContextMenuLabelBase>, ContextMenuLabelProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuLabelBase
      ref={ref}
      className={cn('context-menu-label', `${versionIdentityClass}__label`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuLabel.displayName = 'ContextMenuLabel';

const ContextMenuSeparator = React.forwardRef<React.ElementRef<typeof ContextMenuSeparatorBase>, ContextMenuSeparatorProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ContextMenuSeparatorBase
      ref={ref}
      className={cn('context-menu-separator', `${versionIdentityClass}__separator`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

const ContextMenuTrigger = ContextMenuTriggerBase;
const ContextMenuGroup = ContextMenuGroupBase;
const ContextMenuPortal = ContextMenuPortalBase;
const ContextMenuSub = ContextMenuSubBase;
const ContextMenuRadioGroup = ContextMenuRadioGroupBase;

export const ContextMenu = ContextMenuBase;

export {
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

function ContextMenuShortcut(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('context-menu-shortcut', `${versionIdentityClass}__shortcut`, props.className)} {...props} />;
}

export default ContextMenu;
