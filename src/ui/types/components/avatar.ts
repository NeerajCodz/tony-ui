
/**
 * Avatar Versions - From standard to cyber-themed
 */
export type AvatarVersion = 
  // Cyber versions
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate' 
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon'
  // Standard versions
  | 'default' 
  | 'compact' 
  | 'large' 
  | 'circle' 
  | 'rounded' 
  | 'minimal'
  // Special effects
  | 'glitch' 
  | 'digital-rain' 
  | 'cyber-grid';

/**
 * Avatar Variant - Color messaging
 */
export type AvatarVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';

/**
 * Avatar Type - Border and fill style
 */
export type AvatarType = 'default' | 'solid' | 'outline' | 'ghost';

/**
 * Avatar Size
 */
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Avatar Status
 */
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none';

/**
 * Avatar Props
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar version */
  version?: AvatarVersion;
  
  /** Visual variant */
  variant?: AvatarVariant;
  
  /** Avatar type */
  type?: AvatarType;
  
  /** Avatar size */
  size?: AvatarSize;
  
  /** Image source URL */
  src?: string;
  
  /** Alt text (fallback initials) */
  alt?: string;
  
  /** Fallback text if image fails */
  fallback?: string;
  
  /** Status indicator */
  status?: AvatarStatus;
  
  /** Enable animations */
  animated?: boolean;
  
  /** Additional CSS class */
  className?: string;
  /** Visual effects */
  effects?: string;
}

/**
 * Metadata for each avatar version
 */
export interface AvatarVersionConfig {
  version: AvatarVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  supportsStatus: boolean;
  defaultSize: AvatarSize;
}

/**
 * All avatar versions and their configurations
 */
export const AVATAR_VERSION_CONFIGS: Record<AvatarVersion, AvatarVersionConfig> = {
  // Cyber versions
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'avatar-angular-corner',
    description: 'Beveled corners with symmetric cuts',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'avatar-holo-frame',
    description: 'Octagonal with shimmer effect',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'avatar-data-panel',
    description: 'Asymmetric cut design',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'avatar-circuit-board',
    description: 'Circuit trace patterns overlay',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'avatar-quantum-gate',
    description: 'Hexagonal shape',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'avatar-tactical-hud',
    description: 'Military HUD style with markers',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'avatar-energy-shield',
    description: 'Force field effect',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'avatar-terminal-window',
    description: 'Command line aesthetic',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'avatar-matrix-grid',
    description: 'Digital grid pattern',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'avatar-neon',
    description: 'Intense neon glow',
    supportsStatus: true,
    defaultSize: 'md',
  },
  
  // Standard versions
  default: {
    version: 'default',
    name: 'Default Avatar',
    enabled: true,
    classPrefix: 'avatar-default',
    description: 'Standard rounded avatar',
    supportsStatus: true,
    defaultSize: 'md',
  },
  compact: {
    version: 'compact',
    name: 'Compact Avatar',
    enabled: true,
    classPrefix: 'avatar-compact',
    description: 'Small avatar for tight spaces',
    supportsStatus: true,
    defaultSize: 'sm',
  },
  large: {
    version: 'large',
    name: 'Large Avatar',
    enabled: true,
    classPrefix: 'avatar-large',
    description: 'Large avatar for profiles',
    supportsStatus: true,
    defaultSize: 'lg',
  },
  circle: {
    version: 'circle',
    name: 'Circle Avatar',
    enabled: true,
    classPrefix: 'avatar-circle',
    description: 'Perfectly circular avatar',
    supportsStatus: true,
    defaultSize: 'md',
  },
  rounded: {
    version: 'rounded',
    name: 'Rounded Avatar',
    enabled: true,
    classPrefix: 'avatar-rounded',
    description: 'Square with rounded corners',
    supportsStatus: true,
    defaultSize: 'md',
  },
  minimal: {
    version: 'minimal',
    name: 'Minimal Avatar',
    enabled: true,
    classPrefix: 'avatar-minimal',
    description: 'No border, simple layout',
    supportsStatus: true,
    defaultSize: 'md',
  },
  
  // Special effects
  glitch: {
    version: 'glitch',
    name: 'Glitch Effect',
    enabled: true,
    classPrefix: 'avatar-glitch',
    description: 'Distorted digital artifact effect',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'digital-rain': {
    version: 'digital-rain',
    name: 'Digital Rain',
    enabled: true,
    classPrefix: 'avatar-digital-rain',
    description: 'Cascading code characters',
    supportsStatus: true,
    defaultSize: 'md',
  },
  'cyber-grid': {
    version: 'cyber-grid',
    name: 'Cyber Grid',
    enabled: true,
    classPrefix: 'avatar-cyber-grid',
    description: 'Wireframe grid overlay',
    supportsStatus: true,
    defaultSize: 'md',
  },
};
