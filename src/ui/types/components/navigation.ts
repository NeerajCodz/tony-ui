/**
 * Navigation Component Type Definitions
 * Breadcrumb, Tabs, Menubar, NavigationMenu, Pagination, Sidebar, Command
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type NavType = 'default' | 'outline' | 'solid';
export type NavVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// ============================================================================
// BREADCRUMB COMPONENT - Cyber HUD/FUI Breadcrumb System
// ============================================================================

/**
 * All Breadcrumb Versions - Cyber HUD/FUI Designs
 */
export type BreadcrumbVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

/**
 * Breadcrumb Type - Visual style
 */
export type BreadcrumbType = 'default' | 'outline' | 'solid';

/**
 * Breadcrumb Variant - Color variants
 */
export type BreadcrumbVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each breadcrumb version
 */
export interface BreadcrumbVersionConfig {
  version: BreadcrumbVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  separator: string;
  tags?: string[];
}

/**
 * All breadcrumb versions and their configurations
 */
export const BREADCRUMB_VERSION_CONFIGS: Record<BreadcrumbVersion, BreadcrumbVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'breadcrumb-angular-corner',
    description: 'Beveled crumbs with glowing borders and chevron separators',
    features: ['corner-accents', 'glow-border', 'chevron-separator'],
    separator: '›'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'breadcrumb-holo-frame',
    description: 'Iridescent holographic crumbs with shimmer effect',
    features: ['holo-gradient', 'shimmer-effect', 'arrow-separator'],
    separator: '→'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'breadcrumb-data-panel',
    description: 'Technical data panel style with status indicators',
    features: ['status-leds', 'data-readout', 'slash-separator'],
    separator: '/'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'breadcrumb-circuit-board',
    description: 'Circuit trace patterns connecting breadcrumbs',
    features: ['circuit-traces', 'pulse-animation', 'node-separator'],
    separator: '●'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'breadcrumb-quantum-gate',
    description: 'Quantum-inspired with particle separators',
    features: ['particle-effects', 'wave-function', 'quantum-separator'],
    separator: '◆'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'breadcrumb-tactical-hud',
    description: 'Military HUD with bracket markers',
    features: ['bracket-markers', 'radar-sweep', 'tactical-separator'],
    separator: '»'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'breadcrumb-energy-shield',
    description: 'Hexagonal energy shield pattern breadcrumbs',
    features: ['hex-pattern', 'energy-pulse', 'hex-separator'],
    separator: '⬡'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'breadcrumb-terminal-window',
    description: 'Command prompt terminal aesthetic',
    features: ['terminal-header', 'monospace-font', 'path-separator'],
    separator: '>'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'breadcrumb-matrix-grid',
    description: 'Digital matrix grid with code rain',
    features: ['grid-overlay', 'digital-rain', 'glitch-separator'],
    separator: '::'
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'breadcrumb-neon-outline',
    description: 'High-contrast neon glow effect',
    features: ['neon-glow', 'pulse-brightness', 'glow-separator'],
    separator: '⟫'
  }
};

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemData {
  label: string;
  href?: string;
  onClick?: () => void;
}

/**
 * Breadcrumb Component Props Interface
 */
export interface BreadcrumbProps {
  version?: BreadcrumbVersion;
  type?: BreadcrumbType;
  variant?: BreadcrumbVariant;
  colorType?: ColorType;
  animated?: boolean;
  separator?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

/**
 * BreadcrumbList Props
 */
export interface BreadcrumbListProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * BreadcrumbItem Props
 */
export interface BreadcrumbItemProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * BreadcrumbLink Props
 */
export interface BreadcrumbLinkProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

/**
 * BreadcrumbSeparator Props
 */
export interface BreadcrumbSeparatorProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * BreadcrumbPage Props (current page, non-link)
 */
export interface BreadcrumbPageProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Complete Breadcrumb Component Type
 */
export interface BreadcrumbComponent extends React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>> {
  List: React.ForwardRefExoticComponent<BreadcrumbListProps & React.RefAttributes<HTMLOListElement>>;
  Item: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
  Link: React.ForwardRefExoticComponent<BreadcrumbLinkProps & React.RefAttributes<HTMLAnchorElement>>;
  Separator: React.ForwardRefExoticComponent<BreadcrumbSeparatorProps & React.RefAttributes<HTMLSpanElement>>;
  Page: React.ForwardRefExoticComponent<BreadcrumbPageProps & React.RefAttributes<HTMLSpanElement>>;
}

// ============================================================================
// PAGINATION COMPONENT - Cyber HUD/FUI Pagination System
// ============================================================================

/**
 * All Pagination Versions - Cyber HUD/FUI Designs
 */
export type PaginationVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

/**
 * Pagination Type - Visual style
 */
export type PaginationType = 'default' | 'outline' | 'solid';

/**
 * Pagination Variant - Color variants
 */
export type PaginationVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each pagination version
 */
export interface PaginationVersionConfig {
  version: PaginationVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All pagination versions and their configurations
 */
export const PAGINATION_VERSION_CONFIGS: Record<PaginationVersion, PaginationVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'pagination-angular-corner',
    description: 'Beveled page buttons with glowing borders',
    features: ['corner-accents', 'glow-border', 'active-highlight']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'pagination-holo-frame',
    description: 'Iridescent holographic page buttons with shimmer',
    features: ['holo-gradient', 'shimmer-effect', 'glass-reflection']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'pagination-data-panel',
    description: 'Technical panel style with page indicators',
    features: ['status-leds', 'data-readout', 'scan-line']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'pagination-circuit-board',
    description: 'Circuit trace patterns connecting pages',
    features: ['circuit-traces', 'pulse-animation', 'node-markers']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'pagination-quantum-gate',
    description: 'Quantum-inspired page buttons',
    features: ['particle-effects', 'wave-function', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'pagination-tactical-hud',
    description: 'Military HUD targeting aesthetics',
    features: ['bracket-markers', 'radar-sweep', 'tactical-grid']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'pagination-energy-shield',
    description: 'Hexagonal energy shield page buttons',
    features: ['hex-pattern', 'energy-pulse', 'shield-glow']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'pagination-terminal-window',
    description: 'Command prompt terminal aesthetic',
    features: ['terminal-header', 'monospace-font', 'cursor-blink']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'pagination-matrix-grid',
    description: 'Digital matrix grid page buttons',
    features: ['grid-overlay', 'digital-rain', 'glitch-effect']
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'pagination-neon-outline',
    description: 'High-contrast neon glow effect',
    features: ['neon-glow', 'pulse-brightness', 'outer-bloom']
  }
};

/**
 * Pagination Component Props Interface
 */
export interface PaginationProps {
  version?: PaginationVersion;
  type?: PaginationType;
  variant?: PaginationVariant;
  colorType?: ColorType;
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationContent Props
 */
export interface PaginationContentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationItem Props
 */
export interface PaginationItemProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationLink Props
 */
export interface PaginationLinkProps {
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationPrevious Props
 */
export interface PaginationPreviousProps {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationNext Props
 */
export interface PaginationNextProps {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * PaginationEllipsis Props
 */
export interface PaginationEllipsisProps {
  className?: string;
}

/**
 * Complete Pagination Component Type
 */
export interface PaginationComponent extends React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>> {
  Content: React.ForwardRefExoticComponent<PaginationContentProps & React.RefAttributes<HTMLUListElement>>;
  Item: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLLIElement>>;
  Link: React.ForwardRefExoticComponent<PaginationLinkProps & React.RefAttributes<HTMLAnchorElement>>;
  Previous: React.ForwardRefExoticComponent<PaginationPreviousProps & React.RefAttributes<HTMLAnchorElement>>;
  Next: React.ForwardRefExoticComponent<PaginationNextProps & React.RefAttributes<HTMLAnchorElement>>;
  Ellipsis: React.ForwardRefExoticComponent<PaginationEllipsisProps & React.RefAttributes<HTMLSpanElement>>;
}

// ============================================================================
// TABS COMPONENT - Cyber HUD/FUI Tab System
// ============================================================================

/**
 * All Tabs Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic tab design style
 */
export type TabsVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

/**
 * Tabs Type - Border and fill style
 */
export type TabsType = 'default' | 'outline' | 'solid';

/**
 * Tabs Variant - Color variants
 */
export type TabsVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each tabs version
 */
export interface TabsVersionConfig {
  version: TabsVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All tabs versions and their configurations
 */
export const TABS_VERSION_CONFIGS: Record<TabsVersion, TabsVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'tabs-angular-corner',
    description: 'Beveled corners with glowing borders and tech-notches',
    features: ['corner-accents', 'glow-border', 'active-highlight']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'tabs-holo-frame',
    description: 'Iridescent holographic tabs with animated gradient',
    features: ['holo-gradient', 'shimmer-effect', 'glass-reflection']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'tabs-data-panel',
    description: 'Technical data panel with status indicators',
    features: ['status-leds', 'data-readout', 'scan-line']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'tabs-circuit-board',
    description: 'Circuit trace patterns with electrical pulses',
    features: ['circuit-traces', 'pulse-animation', 'node-markers']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'tabs-quantum-gate',
    description: 'Quantum-inspired with particle effects',
    features: ['particle-effects', 'wave-function', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'tabs-tactical-hud',
    description: 'Military HUD with targeting aesthetics',
    features: ['bracket-markers', 'radar-sweep', 'tactical-grid']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'tabs-energy-shield',
    description: 'Hexagonal energy shield pattern',
    features: ['hex-pattern', 'energy-pulse', 'shield-glow']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'tabs-terminal-window',
    description: 'Command prompt terminal aesthetic',
    features: ['terminal-header', 'monospace-font', 'cursor-blink']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'tabs-matrix-grid',
    description: 'Digital matrix grid with code rain',
    features: ['grid-overlay', 'digital-rain', 'glitch-effect']
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'tabs-neon-outline',
    description: 'High-contrast neon glow effect',
    features: ['neon-glow', 'pulse-brightness', 'outer-bloom']
  }
};

/**
 * Tabs Component Props Interface
 */
export interface TabsProps {
  version?: TabsVersion;
  type?: TabsType;
  variant?: TabsVariant;
  colorType?: ColorType;
  animated?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children?: React.ReactNode;
}

/**
 * TabsList Props
 */
export interface TabsListProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TabsTrigger Props
 */
export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * TabsContent Props
 */
export interface TabsContentProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
  forceMount?: boolean;
}

/**
 * Complete Tabs Component Type
 */
export interface TabsComponent extends React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>> {
  List: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
  Trigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
  Content: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
}

/**
 * Legacy TabItem interface for compatibility
 */
export interface TabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
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
