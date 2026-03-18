/**
 * Navigation Component Type Definitions
 * Breadcrumb, Tabs, Menubar, NavigationMenu, Pagination, Sidebar, Command
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type NavType = 'default' | 'outline' | 'solid';
export type NavVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Breadcrumb Props
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbProps {
  version?: 'default' | 'arrow' | 'dot';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

/**
 * Tabs Props
 */
export interface TabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  version?: 'default' | 'pills' | 'underline' | 'enclosed';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Menubar Props
 */
export interface MenubarItem {
  label: string;
  items?: { label: string; onClick?: () => void; shortcut?: string; disabled?: boolean; separator?: boolean }[];
}

export interface MenubarProps {
  version?: 'default' | 'compact';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: MenubarItem[];
  className?: string;
}

/**
 * Navigation Menu Props
 */
export interface NavMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  children?: NavMenuItem[];
  description?: string;
}

export interface NavigationMenuProps {
  version?: 'default' | 'vertical';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: NavMenuItem[];
  className?: string;
}

/**
 * Pagination Props
 */
export interface PaginationProps {
  version?: 'default' | 'compact' | 'simple';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

/**
 * Sidebar Props
 */
export interface SidebarItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
  children?: SidebarItem[];
}

export interface SidebarProps {
  version?: 'default' | 'compact' | 'floating';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
  title?: string;
}

/**
 * Command Props
 */
export interface CommandItem {
  label: string;
  value: string;
  group?: string;
  shortcut?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandProps {
  version?: 'default' | 'dialog';
  type?: NavType;
  variant?: NavVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: CommandItem[];
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}
