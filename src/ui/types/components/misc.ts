/**
 * Misc Component Type Definitions
 * Toggle, ToggleGroup, ButtonGroup, Kbd, Typography, Item
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type MiscType = 'default' | 'outline' | 'solid';
export type MiscVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Toggle Props
 */
export interface ToggleProps {
  version?: 'default' | 'outlined' | 'filled';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Toggle Group Props
 */
export interface ToggleGroupItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ToggleGroupProps {
  version?: 'default' | 'outlined' | 'filled';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: ToggleGroupItem[];
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Button Group Props
 */
export interface ButtonGroupProps {
  version?: 'default' | 'attached';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Kbd Props
 */
export interface KbdProps {
  version?: 'default' | 'ghost' | 'outlined';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography Props
 */
export interface TypographyProps {
  version?: 'default';
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'code' | 'pre';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  muted?: boolean;
  lead?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Item Props
 */
export interface ItemProps {
  version?: 'default' | 'compact' | 'card';
  type?: MiscType;
  variant?: MiscVariant;
  colorType?: ColorType;
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
