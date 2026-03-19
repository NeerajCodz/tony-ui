/**
 * Data Display Component Type Definitions
 * Table, DataTable, Avatar, Calendar, DatePicker, Chart, Carousel, AspectRatio
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type DataType = 'default' | 'outline' | 'solid';
export type DataVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// =============================================================================
// AVATAR COMPONENT
// =============================================================================

/**
 * Avatar Version - Cyber HUD/FUI Avatar Designs
 * Each version has a unique clip-path shape (hexagons, octagons, diamonds, etc.)
 */
export type AvatarVersion = 
  | 'angular-corner'
  | 'hexagon'
  | 'octagon'
  | 'diamond'
  | 'circuit-node'
  | 'holo-ring'
  | 'tactical-badge'
  | 'energy-core'
  | 'quantum-state'
  | 'neon-frame';

/**
 * Avatar Type - Border and fill style
 */
export type AvatarType = 'default' | 'outline' | 'solid';

/**
 * Avatar Variant - Color variants
 */
export type AvatarVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Avatar Size - Predefined sizes
 */
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Avatar Status - Online/offline indicator
 */
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none';

/**
 * Avatar Version Configuration
 */
export interface AvatarVersionConfig {
  version: AvatarVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  clipPath: string;
  description: string;
  features: string[];
}

/**
 * All avatar version configurations
 */
export const AVATAR_VERSION_CONFIGS: Record<AvatarVersion, AvatarVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'avatar-angular-corner',
    clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
    description: 'Beveled corners with tech aesthetic',
    features: ['corner-accents', 'glow-border', 'scan-effect']
  },
  'hexagon': {
    version: 'hexagon',
    name: 'Hexagon',
    enabled: true,
    classPrefix: 'avatar-hexagon',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    description: 'Hexagonal shape with sci-fi aesthetic',
    features: ['hex-border', 'glow-effect', 'pulse-animation']
  },
  'octagon': {
    version: 'octagon',
    name: 'Octagon',
    enabled: true,
    classPrefix: 'avatar-octagon',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    description: 'Octagonal military badge style',
    features: ['oct-border', 'corner-dots', 'tactical-glow']
  },
  'diamond': {
    version: 'diamond',
    name: 'Diamond',
    enabled: true,
    classPrefix: 'avatar-diamond',
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    description: 'Diamond shape with energy core effect',
    features: ['diamond-glow', 'rotation-effect', 'energy-pulse']
  },
  'circuit-node': {
    version: 'circuit-node',
    name: 'Circuit Node',
    enabled: true,
    classPrefix: 'avatar-circuit-node',
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
    description: 'Circuit board node with trace lines',
    features: ['circuit-traces', 'node-glow', 'data-pulse']
  },
  'holo-ring': {
    version: 'holo-ring',
    name: 'Holo Ring',
    enabled: true,
    classPrefix: 'avatar-holo-ring',
    clipPath: 'circle(50% at 50% 50%)',
    description: 'Circular with holographic ring effect',
    features: ['holo-border', 'shimmer-effect', 'ring-animation']
  },
  'tactical-badge': {
    version: 'tactical-badge',
    name: 'Tactical Badge',
    enabled: true,
    classPrefix: 'avatar-tactical-badge',
    clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
    description: 'Military badge shape with HUD elements',
    features: ['badge-frame', 'rank-indicator', 'status-leds']
  },
  'energy-core': {
    version: 'energy-core',
    name: 'Energy Core',
    enabled: true,
    classPrefix: 'avatar-energy-core',
    clipPath: 'polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%)',
    description: 'Energy reactor core with pulsing waves',
    features: ['core-glow', 'energy-waves', 'power-indicator']
  },
  'quantum-state': {
    version: 'quantum-state',
    name: 'Quantum State',
    enabled: true,
    classPrefix: 'avatar-quantum-state',
    clipPath: 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)',
    description: 'Quantum-inspired octagram shape',
    features: ['quantum-blur', 'state-indicator', 'particle-effect']
  },
  'neon-frame': {
    version: 'neon-frame',
    name: 'Neon Frame',
    enabled: true,
    classPrefix: 'avatar-neon-frame',
    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
    description: 'High-contrast neon glow frame',
    features: ['neon-glow', 'thick-border', 'flicker-effect']
  }
};

/**
 * Avatar Props Interface
 */
export interface AvatarProps {
  /** Avatar version to render */
  version?: AvatarVersion;
  
  /** Visual type for border/fill style */
  type?: AvatarType;
  
  /** Color variant */
  variant?: AvatarVariant;
  
  /** Base color type override */
  colorType?: ColorType;
  
  /** Enable animations */
  animated?: boolean;
  
  /** Image source URL */
  src?: string;
  
  /** Alt text for image */
  alt?: string;
  
  /** Fallback text (initials) when no image */
  fallback?: string;
  
  /** Avatar size */
  size?: AvatarSize;
  
  /** Status indicator */
  status?: AvatarStatus;
  
  /** CSS class name */
  className?: string;
  
  /** Click handler */
  onClick?: () => void;
}

// =============================================================================
// TABLE COMPONENT
// =============================================================================

/**
 * Table Version - Cyber HUD/FUI Table Designs
 */
export type TableVersion = 
  | 'angular-corner'
  | 'data-grid'
  | 'holo-display'
  | 'circuit-matrix'
  | 'tactical-readout'
  | 'terminal-log'
  | 'quantum-table'
  | 'energy-panel'
  | 'matrix-feed'
  | 'neon-grid';

/**
 * Table Type - Border and fill style
 */
export type TableType = 'default' | 'outline' | 'solid';

/**
 * Table Variant - Color variants
 */
export type TableVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Table Version Configuration
 */
export interface TableVersionConfig {
  version: TableVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  striped: boolean;
}

/**
 * All table version configurations
 */
export const TABLE_VERSION_CONFIGS: Record<TableVersion, TableVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'table-angular-corner',
    description: 'Beveled corners with tech styling',
    features: ['corner-clips', 'glow-headers', 'hover-highlight'],
    striped: false
  },
  'data-grid': {
    version: 'data-grid',
    name: 'Data Grid',
    enabled: true,
    classPrefix: 'table-data-grid',
    description: 'Data panel with status indicators',
    features: ['grid-lines', 'status-column', 'scan-effect'],
    striped: true
  },
  'holo-display': {
    version: 'holo-display',
    name: 'Holo Display',
    enabled: true,
    classPrefix: 'table-holo-display',
    description: 'Holographic display with shimmer',
    features: ['holo-header', 'shimmer-rows', 'bracket-corners'],
    striped: false
  },
  'circuit-matrix': {
    version: 'circuit-matrix',
    name: 'Circuit Matrix',
    enabled: true,
    classPrefix: 'table-circuit-matrix',
    description: 'Circuit board with trace patterns',
    features: ['circuit-lines', 'node-corners', 'pulse-animation'],
    striped: true
  },
  'tactical-readout': {
    version: 'tactical-readout',
    name: 'Tactical Readout',
    enabled: true,
    classPrefix: 'table-tactical-readout',
    description: 'Military HUD tactical display',
    features: ['header-badge', 'row-numbers', 'status-indicators'],
    striped: false
  },
  'terminal-log': {
    version: 'terminal-log',
    name: 'Terminal Log',
    enabled: true,
    classPrefix: 'table-terminal-log',
    description: 'Terminal console log style',
    features: ['mono-font', 'line-numbers', 'crt-effect'],
    striped: true
  },
  'quantum-table': {
    version: 'quantum-table',
    name: 'Quantum Table',
    enabled: true,
    classPrefix: 'table-quantum-table',
    description: 'Quantum-inspired data visualization',
    features: ['wave-borders', 'state-cells', 'blur-effect'],
    striped: false
  },
  'energy-panel': {
    version: 'energy-panel',
    name: 'Energy Panel',
    enabled: true,
    classPrefix: 'table-energy-panel',
    description: 'Energy reactor panel display',
    features: ['energy-header', 'pulse-rows', 'power-glow'],
    striped: true
  },
  'matrix-feed': {
    version: 'matrix-feed',
    name: 'Matrix Feed',
    enabled: true,
    classPrefix: 'table-matrix-feed',
    description: 'Matrix-style data feed',
    features: ['digital-rain', 'code-font', 'green-glow'],
    striped: false
  },
  'neon-grid': {
    version: 'neon-grid',
    name: 'Neon Grid',
    enabled: true,
    classPrefix: 'table-neon-grid',
    description: 'High-contrast neon grid lines',
    features: ['neon-borders', 'glow-cells', 'thick-lines'],
    striped: true
  }
};

/**
 * Table Column Definition
 */
export interface TableColumn<T = any> {
  /** Column key/accessor */
  key: string;
  
  /** Header text */
  header: string;
  
  /** Custom cell renderer */
  render?: (value: any, row: T) => React.ReactNode;
  
  /** Column width */
  width?: string;
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

/**
 * Table Props Interface
 */
export interface TableProps<T = any> {
  /** Table version to render */
  version?: TableVersion;
  
  /** Visual type for border/fill style */
  type?: TableType;
  
  /** Color variant */
  variant?: TableVariant;
  
  /** Base color type override */
  colorType?: ColorType;
  
  /** Enable animations */
  animated?: boolean;
  
  /** Column definitions */
  columns?: TableColumn<T>[];
  
  /** Table data */
  data?: T[];
  
  /** CSS class name */
  className?: string;
  
  /** Header CSS class */
  headerClassName?: string;
  
  /** Row CSS class or function */
  rowClassName?: string | ((row: T, index: number) => string);
  
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  
  /** Children for compound component API */
  children?: React.ReactNode;
}

/**
 * Table Header Props
 */
export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Table Body Props
 */
export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Table Row Props
 */
export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  highlighted?: boolean;
}

/**
 * Table Head (th) Props
 */
export interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

/**
 * Table Cell (td) Props
 */
export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  colSpan?: number;
}

/**
 * Complete Table Component Type
 */
export interface TableComponent {
  (props: TableProps): React.ReactElement;
  Header: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
  Body: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
  Row: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
  Head: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
  Cell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
}

/**
 * Calendar Props
 */
export interface CalendarProps {
  version?: 'default' | 'compact';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

/**
 * Carousel Props
 */
export interface CarouselProps {
  version?: 'default' | 'fade' | 'coverflow';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

/**
 * All AspectRatio Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic aspect ratio container style
 * 
 * Versions:
 * - angular-corner: Beveled corners with glowing borders
 * - holo-frame: Holographic iridescent borders
 * - data-panel: Side technical panel with status indicators
 * - circuit-board: Circuit trace patterns with pulses
 * - neon-outline: High-contrast neon glow
 */
export type AspectRatioVersion = 'angular-corner' | 'holo-frame' | 'data-panel' | 'circuit-board' | 'neon-outline';

/**
 * AspectRatio Type - Border and fill style (default, outline, solid)
 * Determines how the aspect ratio border and background are rendered
 */
export type AspectRatioType = 'default' | 'outline' | 'solid';

/**
 * AspectRatio Variant - Built-in style variants for any version
 * These don't require new components, they use props/classes
 */
export type AspectRatioVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each aspect ratio version
 * This describes how each version should be rendered
 */
export interface AspectRatioVersionConfig {
  /** Unique version ID */
  version: AspectRatioVersion;
  
  /** Human-readable name */
  name: string;
  
  /** Whether this version is currently enabled */
  enabled: boolean;
  
  /** Description for documentation */
  description: string;
  
  /** Features of this version */
  features: string[];
}

/**
 * All aspect ratio versions and their configurations
 * Cyber HUD/FUI aspect ratio system with 5 futuristic designs
 */
export const ASPECT_RATIO_VERSION_CONFIGS: Record<AspectRatioVersion, AspectRatioVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    description: 'Beveled corners with glowing borders and tech-notches',
    features: ['corner-accents', 'scan-line', 'glow-border']
  },
  
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    description: 'Iridescent holographic border with animated shimmer',
    features: ['corner-brackets', 'shimmer-effect', 'iridescent-border']
  },
  
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    description: 'Side technical panel with status indicators and readouts',
    features: ['side-panel', 'status-leds', 'data-readout']
  },
  
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    description: 'Circuit trace patterns with animated electrical pulses',
    features: ['circuit-pattern', 'animated-traces', 'corner-nodes']
  },
  
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    description: 'High-contrast neon glow with intense outer bloom',
    features: ['thick-glow', 'corner-leds', 'pulsing-brightness']
  }
};

/**
 * Aspect Ratio Props
 */
export interface AspectRatioProps {
  /** AspectRatio version to render */
  version?: AspectRatioVersion;
  
  /** Visual variant for color messaging */
  variant?: AspectRatioVariant;
  
  /** AspectRatio type - border and fill style (default, outline, solid) */
  type?: AspectRatioType;
  
  /** Aspect ratio value (e.g., 16/9, 4/3, 1) */
  ratio?: number;
  
  /** Enable or disable hover animations */
  animated?: boolean;
  
  /** Optional overlay effect */
  overlay?: boolean;
  
  /** AspectRatio children */
  children: React.ReactNode;
  
  /** CSS class name */
  className?: string;
}
