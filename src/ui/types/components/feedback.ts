/**
 * Feedback Component Type Definitions
 * Alert, Badge, Toast, Progress, Spinner, Skeleton, Empty
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type FeedbackType = 'default' | 'outline' | 'solid';
export type FeedbackVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// ============ ALERT TYPES ============

/**
 * Alert Version - 10 unique cyber/futuristic designs
 */
export type AlertVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate'
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon';

export type AlertType = 'default' | 'outline' | 'solid';
export type AlertVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Alert Version Configuration
 */
export interface AlertVersionConfig {
  version: AlertVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

export const ALERT_VERSION_CONFIGS: Record<AlertVersion, AlertVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'alert-angular-corner',
    description: 'Beveled corners with glowing borders and tech-notches'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'alert-holo-frame',
    description: 'Iridescent holographic border with animated gradient'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'alert-data-panel',
    description: 'Side technical panel with status indicators'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'alert-circuit-board',
    description: 'Circuit trace patterns with animated pulses'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'alert-quantum-gate',
    description: 'Quantum-inspired with particle effects'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'alert-tactical-hud',
    description: 'Military HUD aesthetic with targeting elements'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'alert-energy-shield',
    description: 'Hexagonal shield pattern with energy waves'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'alert-terminal-window',
    description: 'Terminal-style with command prompt aesthetic'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'alert-matrix-grid',
    description: 'Animated grid overlay with digital effect'
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'alert-neon',
    description: 'High-contrast neon glow with thick outer bloom'
  }
};

/**
 * Alert Props
 */
export interface AlertProps {
  version?: AlertVersion;
  type?: AlertType;
  variant?: AlertVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

// ============ BADGE TYPES ============

/**
 * Badge Version - 10 unique cyber/futuristic designs
 */
export type BadgeVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate'
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon';

export type BadgeType = 'default' | 'outline' | 'solid';
export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Badge Version Configuration
 */
export interface BadgeVersionConfig {
  version: BadgeVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

export const BADGE_VERSION_CONFIGS: Record<BadgeVersion, BadgeVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'badge-angular-corner',
    description: 'Compact beveled corners with tech accents'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'badge-holo-frame',
    description: 'Iridescent holographic micro-badge'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'badge-data-panel',
    description: 'Mini data readout badge'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'badge-circuit-board',
    description: 'Compact circuit trace pattern'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'badge-quantum-gate',
    description: 'Quantum-inspired micro element'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'badge-tactical-hud',
    description: 'Military HUD micro element'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'badge-energy-shield',
    description: 'Compact energy indicator'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'badge-terminal-window',
    description: 'Terminal-style micro tag'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'badge-matrix-grid',
    description: 'Compact grid-style badge'
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'badge-neon',
    description: 'High-contrast neon micro glow'
  }
};

/**
 * Badge Props
 */
export interface BadgeProps {
  version?: BadgeVersion;
  type?: BadgeType;
  variant?: BadgeVariant;
  colorType?: ColorType;
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
}

// ============ TOAST TYPES ============

/**
 * Toast Version - 10 unique cyber/futuristic designs
 */
export type ToastVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate'
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon';

export type ToastType = 'default' | 'outline' | 'solid';
export type ToastVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Toast Version Configuration
 */
export interface ToastVersionConfig {
  version: ToastVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

export const TOAST_VERSION_CONFIGS: Record<ToastVersion, ToastVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'toast-angular-corner',
    description: 'Beveled corners with glowing borders and tech-notches'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'toast-holo-frame',
    description: 'Iridescent holographic border with animated gradient'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'toast-data-panel',
    description: 'Side technical panel with status indicators'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'toast-circuit-board',
    description: 'Circuit trace patterns with animated pulses'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'toast-quantum-gate',
    description: 'Quantum-inspired with particle effects'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'toast-tactical-hud',
    description: 'Military HUD aesthetic with targeting elements'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'toast-energy-shield',
    description: 'Hexagonal shield pattern with energy waves'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'toast-terminal-window',
    description: 'Terminal-style with command prompt aesthetic'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'toast-matrix-grid',
    description: 'Animated grid overlay with digital effect'
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'toast-neon',
    description: 'High-contrast neon glow with thick outer bloom'
  }
};

/**
 * Toast Props
 */
export interface ToastProps {
  version?: ToastVersion;
  type?: ToastType;
  variant?: ToastVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  duration?: number;
  className?: string;
  action?: React.ReactNode;
  id?: string;
  isExiting?: boolean;
}

/**
 * Toast Component Type with compound components
 */
export interface ToastComponent {
  (props: ToastProps & React.RefAttributes<HTMLDivElement>): React.ReactElement | null;
  displayName?: string;
}

// ============ PROGRESS TYPES ============

/**
 * All Progress Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic progress bar design
 */
export type ProgressVersion = 
  | 'segmented-bar' 
  | 'hexagonal' 
  | 'circuit-trace' 
  | 'energy-bar' 
  | 'terminal-ascii'
  | 'quantum-stream'
  | 'holographic'
  | 'plasma-core'
  | 'data-stream'
  | 'power-grid';

export type ProgressType = 'default' | 'outline' | 'solid';
export type ProgressVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Progress Version Config Metadata
 */
export interface ProgressVersionConfig {
  version: ProgressVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  animations: {
    fill?: string;
    glow?: string;
    continuous?: string;
  };
}

/**
 * All progress versions and their configurations
 */
export const PROGRESS_VERSION_CONFIGS: Record<ProgressVersion, ProgressVersionConfig> = {
  'segmented-bar': {
    version: 'segmented-bar',
    name: 'Segmented Bar',
    enabled: true,
    classPrefix: 'progress-segmented-bar',
    description: 'Segmented bars with gaps and animated glow on filled segments',
    features: ['segment-gaps', 'glow-segments', 'pulse-animation'],
    animations: { fill: 'segment-fill', glow: 'segment-glow', continuous: 'pulse-active' }
  },
  'hexagonal': {
    version: 'hexagonal',
    name: 'Hexagonal',
    enabled: true,
    classPrefix: 'progress-hexagonal',
    description: 'Hexagonal cells that fill progressively with energy glow',
    features: ['hex-cells', 'energy-fill', 'cascade-animation'],
    animations: { fill: 'hex-fill', glow: 'hex-glow', continuous: 'hex-pulse' }
  },
  'circuit-trace': {
    version: 'circuit-trace',
    name: 'Circuit Trace',
    enabled: true,
    classPrefix: 'progress-circuit-trace',
    description: 'Circuit board trace with animated nodes showing progress',
    features: ['trace-path', 'node-markers', 'pulse-flow'],
    animations: { fill: 'trace-draw', glow: 'node-pulse', continuous: 'flow-animation' }
  },
  'energy-bar': {
    version: 'energy-bar',
    name: 'Energy Bar',
    enabled: true,
    classPrefix: 'progress-energy-bar',
    description: 'Intense energy bar with plasma glow and wave effects',
    features: ['plasma-glow', 'wave-animation', 'energy-particles'],
    animations: { fill: 'energy-fill', glow: 'plasma-pulse', continuous: 'wave-flow' }
  },
  'terminal-ascii': {
    version: 'terminal-ascii',
    name: 'Terminal ASCII',
    enabled: true,
    classPrefix: 'progress-terminal-ascii',
    description: 'Terminal-style ASCII progress with character blocks',
    features: ['ascii-blocks', 'cursor-blink', 'monospace-display'],
    animations: { fill: 'type-fill', glow: 'crt-glow', continuous: 'cursor-blink' }
  },
  'quantum-stream': {
    version: 'quantum-stream',
    name: 'Quantum Stream',
    enabled: true,
    classPrefix: 'progress-quantum-stream',
    description: 'Quantum particle stream with probability wave visualization',
    features: ['particle-stream', 'wave-function', 'quantum-uncertainty'],
    animations: { fill: 'stream-flow', glow: 'quantum-glow', continuous: 'particle-drift' }
  },
  'holographic': {
    version: 'holographic',
    name: 'Holographic',
    enabled: true,
    classPrefix: 'progress-holographic',
    description: 'Holographic scan-line progress with iridescent effects',
    features: ['scan-lines', 'holo-shimmer', 'rainbow-gradient'],
    animations: { fill: 'holo-fill', glow: 'iridescent-pulse', continuous: 'scan-sweep' }
  },
  'plasma-core': {
    version: 'plasma-core',
    name: 'Plasma Core',
    enabled: true,
    classPrefix: 'progress-plasma-core',
    description: 'Plasma reactor core with energy containment visualization',
    features: ['plasma-core', 'containment-ring', 'energy-surge'],
    animations: { fill: 'plasma-fill', glow: 'core-pulse', continuous: 'energy-churn' }
  },
  'data-stream': {
    version: 'data-stream',
    name: 'Data Stream',
    enabled: true,
    classPrefix: 'progress-data-stream',
    description: 'Binary data stream visualization with flowing numbers',
    features: ['binary-flow', 'data-cascade', 'stream-buffer'],
    animations: { fill: 'data-fill', glow: 'stream-glow', continuous: 'binary-rain' }
  },
  'power-grid': {
    version: 'power-grid',
    name: 'Power Grid',
    enabled: true,
    classPrefix: 'progress-power-grid',
    description: 'Power grid cells with sequential activation',
    features: ['grid-cells', 'power-flow', 'sequential-activation'],
    animations: { fill: 'grid-fill', glow: 'power-surge', continuous: 'grid-pulse' }
  }
};

/**
 * Progress Props
 */
export interface ProgressProps {
  version?: ProgressVersion;
  type?: ProgressType;
  variant?: ProgressVariant;
  colorType?: ColorType;
  animated?: boolean;
  value?: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// ============ SPINNER TYPES ============

/**
 * All Spinner Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic loading spinner
 */
export type SpinnerVersion = 
  | 'rotating-hexagon' 
  | 'circuit-trace' 
  | 'radar-sweep' 
  | 'quantum-particles' 
  | 'terminal-cursor'
  | 'energy-ring'
  | 'matrix-code'
  | 'plasma-orb'
  | 'data-burst'
  | 'holographic-ring';

export type SpinnerVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Spinner Version Config Metadata
 */
export interface SpinnerVersionConfig {
  version: SpinnerVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  animation: {
    primary: string;
    duration: string;
    easing: string;
  };
}

/**
 * All spinner versions and their configurations
 */
export const SPINNER_VERSION_CONFIGS: Record<SpinnerVersion, SpinnerVersionConfig> = {
  'rotating-hexagon': {
    version: 'rotating-hexagon',
    name: 'Rotating Hexagon',
    enabled: true,
    classPrefix: 'spinner-rotating-hexagon',
    description: 'Rotating hexagon with glowing edges and trail effect',
    features: ['hexagon-shape', 'glow-trail', 'rotation'],
    animation: { primary: 'hexSpin', duration: '2s', easing: 'linear' }
  },
  'circuit-trace': {
    version: 'circuit-trace',
    name: 'Circuit Trace',
    enabled: true,
    classPrefix: 'spinner-circuit-trace',
    description: 'Circuit trace animation flowing around the perimeter',
    features: ['circuit-path', 'pulse-dot', 'trace-glow'],
    animation: { primary: 'traceFlow', duration: '1.5s', easing: 'linear' }
  },
  'radar-sweep': {
    version: 'radar-sweep',
    name: 'Radar Sweep',
    enabled: true,
    classPrefix: 'spinner-radar-sweep',
    description: 'Radar sweep with ping and grid overlay',
    features: ['sweep-arm', 'ping-dots', 'grid-lines'],
    animation: { primary: 'radarSweep', duration: '2s', easing: 'linear' }
  },
  'quantum-particles': {
    version: 'quantum-particles',
    name: 'Quantum Particles',
    enabled: true,
    classPrefix: 'spinner-quantum-particles',
    description: 'Orbiting quantum particles with uncertainty blur',
    features: ['particle-orbits', 'blur-effect', 'multi-ring'],
    animation: { primary: 'quantumOrbit', duration: '3s', easing: 'ease-in-out' }
  },
  'terminal-cursor': {
    version: 'terminal-cursor',
    name: 'Terminal Cursor',
    enabled: true,
    classPrefix: 'spinner-terminal-cursor',
    description: 'Blinking terminal cursor with loading text',
    features: ['cursor-blink', 'text-cycle', 'crt-effect'],
    animation: { primary: 'cursorBlink', duration: '1s', easing: 'steps(2)' }
  },
  'energy-ring': {
    version: 'energy-ring',
    name: 'Energy Ring',
    enabled: true,
    classPrefix: 'spinner-energy-ring',
    description: 'Pulsing energy ring with orbiting particles',
    features: ['ring-pulse', 'particle-orbit', 'energy-glow'],
    animation: { primary: 'ringPulse', duration: '1.5s', easing: 'ease-in-out' }
  },
  'matrix-code': {
    version: 'matrix-code',
    name: 'Matrix Code',
    enabled: true,
    classPrefix: 'spinner-matrix-code',
    description: 'Falling matrix-style characters with glow',
    features: ['code-rain', 'character-glow', 'fade-trail'],
    animation: { primary: 'matrixFall', duration: '2s', easing: 'linear' }
  },
  'plasma-orb': {
    version: 'plasma-orb',
    name: 'Plasma Orb',
    enabled: true,
    classPrefix: 'spinner-plasma-orb',
    description: 'Swirling plasma orb with energy tendrils',
    features: ['plasma-swirl', 'energy-tendrils', 'core-glow'],
    animation: { primary: 'plasmaSwirl', duration: '2.5s', easing: 'ease-in-out' }
  },
  'data-burst': {
    version: 'data-burst',
    name: 'Data Burst',
    enabled: true,
    classPrefix: 'spinner-data-burst',
    description: 'Data transmission burst with radiating signals',
    features: ['burst-waves', 'signal-dots', 'transmission-ring'],
    animation: { primary: 'dataBurst', duration: '1.8s', easing: 'ease-out' }
  },
  'holographic-ring': {
    version: 'holographic-ring',
    name: 'Holographic Ring',
    enabled: true,
    classPrefix: 'spinner-holographic-ring',
    description: 'Holographic rotating ring with iridescent colors',
    features: ['holo-ring', 'iridescent-gradient', '3d-rotation'],
    animation: { primary: 'holoSpin', duration: '3s', easing: 'linear' }
  }
};

/**
 * Spinner Props
 */
export interface SpinnerProps {
  version?: SpinnerVersion;
  variant?: SpinnerVariant;
  colorType?: ColorType;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

// ============ SKELETON TYPES ============

/**
 * Skeleton Version - 10 unique cyber/futuristic designs
 */
export type SkeletonVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate'
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon';

export type SkeletonType = 'default' | 'outline' | 'solid';
export type SkeletonVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Skeleton Version Configuration
 */
export interface SkeletonVersionConfig {
  version: SkeletonVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

export const SKELETON_VERSION_CONFIGS: Record<SkeletonVersion, SkeletonVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'skeleton-angular-corner',
    description: 'Beveled skeleton with angular cuts and scan line shimmer'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'skeleton-holo-frame',
    description: 'Iridescent holographic shimmer with rainbow gradient'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'skeleton-data-panel',
    description: 'Panel-style skeleton with data readout indicators'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'skeleton-circuit-board',
    description: 'Circuit trace pattern with animated electrical pulses'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'skeleton-quantum-gate',
    description: 'Quantum-inspired with particle wave shimmer'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'skeleton-tactical-hud',
    description: 'Military HUD skeleton with radar sweep shimmer'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'skeleton-energy-shield',
    description: 'Hexagonal pattern with energy wave pulse'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'skeleton-terminal-window',
    description: 'Terminal-style with cursor blink and CRT effect'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'skeleton-matrix-grid',
    description: 'Animated grid with digital rain shimmer'
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'skeleton-neon',
    description: 'High-contrast neon glow with pulsing shimmer'
  }
};

/**
 * Skeleton Props
 */
export interface SkeletonProps {
  version?: SkeletonVersion;
  type?: SkeletonType;
  variant?: SkeletonVariant;
  colorType?: ColorType;
  animated?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

// ============ EMPTY TYPES ============

/**
 * Empty Version - 10 unique cyber/futuristic designs
 */
export type EmptyVersion = 
  | 'angular-corner' 
  | 'holo-frame' 
  | 'data-panel' 
  | 'circuit-board' 
  | 'quantum-gate'
  | 'tactical-hud' 
  | 'energy-shield' 
  | 'terminal-window' 
  | 'matrix-grid' 
  | 'neon';

export type EmptyType = 'default' | 'outline' | 'solid';
export type EmptyVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Empty Version Configuration
 */
export interface EmptyVersionConfig {
  version: EmptyVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
}

export const EMPTY_VERSION_CONFIGS: Record<EmptyVersion, EmptyVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'empty-angular-corner',
    description: 'Angular beveled empty state with tech accents'
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'empty-holo-frame',
    description: 'Iridescent holographic empty container'
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'empty-data-panel',
    description: 'Panel-style empty state with status indicators'
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'empty-circuit-board',
    description: 'Circuit trace empty state with animated traces'
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'empty-quantum-gate',
    description: 'Quantum-inspired empty with particle effects'
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'empty-tactical-hud',
    description: 'Military HUD empty state with targeting reticle'
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'empty-energy-shield',
    description: 'Hexagonal shield empty state with energy waves'
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'empty-terminal-window',
    description: 'Terminal-style empty with command prompt'
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'empty-matrix-grid',
    description: 'Grid overlay empty state with digital effect'
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'empty-neon',
    description: 'High-contrast neon glow empty container'
  }
};

/**
 * Empty Props
 */
export interface EmptyProps {
  version?: EmptyVersion;
  type?: EmptyType;
  variant?: EmptyVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}
