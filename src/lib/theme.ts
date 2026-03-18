/**
 * Theme System - Dynamic color and variant configuration
 * Follows Radix UI / shadcn pattern with cyberpunk aesthetic
 */

// Color variants available
export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'destructive' 
  | 'success' 
  | 'warning' 
  | 'muted';

// Card versions / layouts
export type CardVersion = 
  | 'default'
  | 'minimal'
  | 'compact'
  | 'expanded';

// SVG border styles (will reference card SVGs)
export type BorderStyle = 
  | 'sharp'      // v1-style angular cuts
  | 'curved'     // v2-style rounded
  | 'asymmetric' // v3-style asymmetric
  | 'minimal'    // Minimal border
  | 'none'       // No border
  | number;      // Specific SVG vector number

export interface ThemeColor {
  base: string;
  light: string;
  dark: string;
  muted: string;
  complement?: string;
}

export interface CardTheme {
  colors: Record<ColorVariant, ThemeColor>;
  gaps: Record<CardVersion, { padding: string; gap: string }>;
  borders: Record<string, string>;
}

// Color theme configuration
export const THEME_COLORS: Record<ColorVariant, ThemeColor> = {
  primary: {
    base: 'var(--primary)',
    light: 'rgba(0, 150, 255, 0.1)',
    dark: '#005faa',
    muted: 'var(--primary-muted)',
    complement: '#ff8800',
  },
  secondary: {
    base: 'var(--secondary)',
    light: 'rgba(26, 37, 53, 0.1)',
    dark: '#0f1a28',
    muted: 'var(--secondary-muted)',
  },
  accent: {
    base: 'var(--accent)',
    light: 'rgba(0, 217, 255, 0.1)',
    dark: '#0099bb',
    muted: 'var(--accent-muted)',
    complement: '#ff00ff',
  },
  destructive: {
    base: 'var(--destructive)',
    light: 'rgba(255, 68, 68, 0.1)',
    dark: '#cc0000',
    muted: 'rgba(255, 68, 68, 0.2)',
  },
  success: {
    base: 'var(--success)',
    light: 'rgba(68, 255, 68, 0.1)',
    dark: '#00aa00',
    muted: 'rgba(68, 255, 68, 0.2)',
  },
  warning: {
    base: 'var(--warning)',
    light: 'rgba(255, 170, 0, 0.1)',
    dark: '#cc8800',
    muted: 'rgba(255, 170, 0, 0.2)',
  },
  muted: {
    base: 'var(--muted)',
    light: 'rgba(42, 79, 127, 0.1)',
    dark: '#1a2f47',
    muted: 'rgba(42, 79, 127, 0.3)',
  },
};

// Card version spacing and layout
export const CARD_VERSIONS: Record<CardVersion, { padding: string; gap: string }> = {
  default: {
    padding: 'p-6',
    gap: 'gap-4',
  },
  minimal: {
    padding: 'p-3',
    gap: 'gap-2',
  },
  compact: {
    padding: 'p-4',
    gap: 'gap-3',
  },
  expanded: {
    padding: 'p-8',
    gap: 'gap-6',
  },
};

// Border style mapping to SVG references or CSS classes
export const BORDER_STYLES: Record<string, { svg?: number; className?: string }> = {
  sharp: { svg: 1 },
  curved: { svg: 50 },
  asymmetric: { svg: 100 },
  minimal: { className: 'border border-border' },
  none: { className: '' },
};

// Preset card styles (combinations of version + border + color)
export interface CardPreset {
  name: string;
  description: string;
  version: CardVersion;
  border: BorderStyle;
  color: ColorVariant;
  glowing?: boolean;
}

export const CARD_PRESETS: CardPreset[] = [
  {
    name: 'Classic Cyber',
    description: 'Sharp angular borders with primary cyan',
    version: 'default',
    border: 'sharp',
    color: 'primary',
    glowing: true,
  },
  {
    name: 'Elegant',
    description: 'Curved borders with muted secondary',
    version: 'default',
    border: 'curved',
    color: 'secondary',
  },
  {
    name: 'Asymmetric',
    description: 'Asymmetric design with accent colors',
    version: 'default',
    border: 'asymmetric',
    color: 'accent',
    glowing: true,
  },
  {
    name: 'Minimal',
    description: 'Simple thin line borders',
    version: 'minimal',
    border: 'minimal',
    color: 'primary',
  },
  {
    name: 'Compact',
    description: 'Dense information card',
    version: 'compact',
    border: 'sharp',
    color: 'secondary',
  },
  {
    name: 'Alert',
    description: 'Destructive action card',
    version: 'default',
    border: 'sharp',
    color: 'destructive',
  },
  {
    name: 'Success',
    description: 'Success/confirmation card',
    version: 'default',
    border: 'curved',
    color: 'success',
  },
  {
    name: 'Warning',
    description: 'Warning notification card',
    version: 'default',
    border: 'curved',
    color: 'warning',
  },
  {
    name: 'Expanded',
    description: 'Large spacious card',
    version: 'expanded',
    border: 'asymmetric',
    color: 'primary',
    glowing: true,
  },
];

// Export all constants
export const THEME = {
  colors: THEME_COLORS,
  versions: CARD_VERSIONS,
  borders: BORDER_STYLES,
  presets: CARD_PRESETS,
} as const;
