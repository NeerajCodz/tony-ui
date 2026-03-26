/**
 * Overlay Component Type Definitions
 * Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard, ContextMenu, DropdownMenu
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';
import type { VariantColors } from '../common';

export type OverlayType = 'default' | 'outline' | 'solid' | 'glass' | 'inverse' | 'contrast' | 'soft';
export type OverlayVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// ============ TOOLTIP VERSION SYSTEM ============

/**
 * All Tooltip Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic tooltip design
 */
export type TooltipVersion = 
  | 'angular-corner'
  | 'neon-glow'
  | 'holographic'
  | 'data-chip'
  | 'circuit-trace'
  | 'plasma-edge'
  | 'terminal'
  | 'scanner'
  | 'quantum-tip'
  | 'hud-marker';

/**
 * Tooltip Type - appearance style
 */
export type TooltipType = 'default' | 'outline' | 'solid' | 'glass';

/**
 * Tooltip Variant - semantic color
 */
export type TooltipVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each tooltip version
 */
export interface TooltipVersionConfig {
  version: TooltipVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  hasArrow: boolean;
  clipPath?: string;
  features: string[];
  effects?: string;
  animations: {
    entrance?: string;
    exit?: string;
    continuous?: string;
  };
}

/**
 * All tooltip versions and their configurations
 */
export const TOOLTIP_VERSION_CONFIGS: Record<TooltipVersion, TooltipVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'tooltip-angular-corner',
    description: 'Sharp beveled corners with tech accents',
    hasArrow: true,
    features: ['corner-cuts', 'glow-border', 'scan-line'],
    animations: { entrance: 'popup-scale', continuous: 'border-pulse' }
  },
  'neon-glow': {
    version: 'neon-glow',
    name: 'Neon Glow',
    enabled: true,
    classPrefix: 'tooltip-neon-glow',
    description: 'Intense neon glow with bloom effect',
    hasArrow: true,
    features: ['outer-glow', 'inner-highlight', 'pulsing-brightness'],
    animations: { entrance: 'neon-flicker', continuous: 'neon-pulse' }
  },
  'holographic': {
    version: 'holographic',
    name: 'Holographic',
    enabled: true,
    classPrefix: 'tooltip-holographic',
    description: 'Iridescent rainbow shimmer effect',
    hasArrow: true,
    features: ['rainbow-gradient', 'shimmer', 'glass-refraction'],
    animations: { entrance: 'holo-fade', continuous: 'holo-rotate' }
  },
  'data-chip': {
    version: 'data-chip',
    name: 'Data Chip',
    enabled: true,
    classPrefix: 'tooltip-data-chip',
    description: 'Compact chip with data indicators',
    hasArrow: false,
    features: ['status-led', 'data-bars', 'chip-notch'],
    animations: { entrance: 'slide-reveal' }
  },
  'circuit-trace': {
    version: 'circuit-trace',
    name: 'Circuit Trace',
    enabled: true,
    classPrefix: 'tooltip-circuit-trace',
    description: 'Circuit board pattern with electric pulses',
    hasArrow: true,
    features: ['circuit-pattern', 'animated-traces', 'corner-nodes'],
    animations: { entrance: 'glitch-in', continuous: 'pulse-traces' }
  },
  'plasma-edge': {
    version: 'plasma-edge',
    name: 'Plasma Edge',
    enabled: true,
    classPrefix: 'tooltip-plasma-edge',
    description: 'Plasma energy border with wave effects',
    hasArrow: true,
    features: ['plasma-border', 'energy-waves', 'gradient-fill'],
    animations: { entrance: 'energy-burst', continuous: 'plasma-flow' }
  },
  'terminal': {
    version: 'terminal',
    name: 'Terminal',
    enabled: true,
    classPrefix: 'tooltip-terminal',
    description: 'Command line terminal aesthetic',
    hasArrow: false,
    features: ['terminal-header', 'monospace-text', 'cursor-blink'],
    animations: { entrance: 'terminal-type', continuous: 'scanline' }
  },
  'scanner': {
    version: 'scanner',
    name: 'Scanner',
    enabled: true,
    classPrefix: 'tooltip-scanner',
    description: 'Scanner readout with targeting elements',
    hasArrow: true,
    features: ['scan-lines', 'targeting-brackets', 'data-readout'],
    animations: { entrance: 'scan-reveal', continuous: 'scan-sweep' }
  },
  'quantum-tip': {
    version: 'quantum-tip',
    name: 'Quantum Tip',
    enabled: true,
    classPrefix: 'tooltip-quantum-tip',
    description: 'Quantum particle effects with wave function',
    hasArrow: true,
    features: ['particle-effects', 'wave-function', 'quantum-blur'],
    animations: { entrance: 'quantum-fade', continuous: 'quantum-pulse' }
  },
  'hud-marker': {
    version: 'hud-marker',
    name: 'HUD Marker',
    enabled: true,
    classPrefix: 'tooltip-hud-marker',
    description: 'Military HUD targeting marker',
    hasArrow: true,
    features: ['target-brackets', 'coordinate-display', 'status-indicators'],
    animations: { entrance: 'hud-lock', continuous: 'hud-track' }
  }
};

// ============ POPOVER VERSION SYSTEM ============

/**
 * All Popover Versions - Cyber HUD/FUI Designs
 */
export type PopoverVersion = 
  | 'angular-panel'
  | 'neon-frame'
  | 'holo-display'
  | 'data-terminal'
  | 'circuit-panel'
  | 'plasma-container'
  | 'command-console'
  | 'scanner-readout'
  | 'quantum-window'
  | 'tactical-overlay';

/**
 * Popover Type - appearance style
 */
export type PopoverType = 'default' | 'outline' | 'solid' | 'glass';

/**
 * Popover Variant - semantic color
 */
export type PopoverVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each popover version
 */
export interface PopoverVersionConfig {
  version: PopoverVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  effects?: string;
  clipPath?: string;
  features: string[];
  animations: {
    entrance?: string;
    exit?: string;
    continuous?: string;
  };
}

/**
 * All popover versions and their configurations
 */
export const POPOVER_VERSION_CONFIGS: Record<PopoverVersion, PopoverVersionConfig> = {
  'angular-panel': {
    version: 'angular-panel',
    name: 'Angular Panel',
    enabled: true,
    classPrefix: 'popover-angular-panel',
    description: 'Sharp angular panel with beveled corners',
    features: ['corner-cuts', 'header-bar', 'glow-border'],
    animations: { entrance: 'popup-scale', continuous: 'border-pulse' }
  },
  'neon-frame': {
    version: 'neon-frame',
    name: 'Neon Frame',
    enabled: true,
    classPrefix: 'popover-neon-frame',
    description: 'Intense neon border with bloom effect',
    features: ['thick-glow', 'corner-leds', 'inner-highlight'],
    animations: { entrance: 'neon-flicker', continuous: 'neon-pulse' }
  },
  'holo-display': {
    version: 'holo-display',
    name: 'Holo Display',
    enabled: true,
    classPrefix: 'popover-holo-display',
    description: 'Holographic display with transparency',
    features: ['rainbow-border', 'glass-effect', 'scan-lines'],
    animations: { entrance: 'holo-fade', continuous: 'holo-shimmer' }
  },
  'data-terminal': {
    version: 'data-terminal',
    name: 'Data Terminal',
    enabled: true,
    classPrefix: 'popover-data-terminal',
    description: 'Data panel with status indicators',
    features: ['terminal-header', 'status-leds', 'data-grid'],
    animations: { entrance: 'terminal-boot' }
  },
  'circuit-panel': {
    version: 'circuit-panel',
    name: 'Circuit Panel',
    enabled: true,
    classPrefix: 'popover-circuit-panel',
    description: 'Circuit board aesthetic with trace patterns',
    features: ['circuit-traces', 'node-connectors', 'pulse-animation'],
    animations: { entrance: 'glitch-in', continuous: 'trace-pulse' }
  },
  'plasma-container': {
    version: 'plasma-container',
    name: 'Plasma Container',
    enabled: true,
    classPrefix: 'popover-plasma-container',
    description: 'Energy containment field aesthetic',
    features: ['plasma-border', 'energy-gradient', 'field-distortion'],
    animations: { entrance: 'energy-burst', continuous: 'plasma-flow' }
  },
  'command-console': {
    version: 'command-console',
    name: 'Command Console',
    enabled: true,
    classPrefix: 'popover-command-console',
    description: 'Command line console with CRT effects',
    features: ['console-header', 'crt-overlay', 'cursor-blink'],
    animations: { entrance: 'console-type', continuous: 'scanline' }
  },
  'scanner-readout': {
    version: 'scanner-readout',
    name: 'Scanner Readout',
    enabled: true,
    classPrefix: 'popover-scanner-readout',
    description: 'Scanner display with targeting elements',
    features: ['scan-grid', 'targeting-corners', 'data-columns'],
    animations: { entrance: 'scan-reveal', continuous: 'scan-sweep' }
  },
  'quantum-window': {
    version: 'quantum-window',
    name: 'Quantum Window',
    enabled: true,
    classPrefix: 'popover-quantum-window',
    description: 'Quantum-inspired floating window',
    features: ['particle-border', 'quantum-blur', 'wave-function'],
    animations: { entrance: 'quantum-fade', continuous: 'quantum-pulse' }
  },
  'tactical-overlay': {
    version: 'tactical-overlay',
    name: 'Tactical Overlay',
    enabled: true,
    classPrefix: 'popover-tactical-overlay',
    description: 'Military tactical display',
    features: ['hud-corners', 'coordinate-grid', 'status-panel'],
    animations: { entrance: 'hud-lock', continuous: 'radar-sweep' }
  }
};

// ============ DIALOG SYSTEM ============

/**
 * Dialog Versions - Cyber HUD/FUI Modal Designs
 * Each version has unique clip-path and visual treatment
 */
export type DialogVersion = 
  | 'angular-corner'    // Beveled corners with tech accents
  | 'holo-frame'        // Holographic iridescent border
  | 'data-panel'        // Side tech panel with readouts
  | 'circuit-board'     // Circuit trace patterns
  | 'quantum-gate'      // Hexagonal quantum design
  | 'tactical-hud'      // Military HUD aesthetic
  | 'energy-shield'     // Hexagonal shield pattern
  | 'terminal-window'   // Command prompt style
  | 'matrix-grid'       // Digital grid overlay
  | 'glass-morphism';   // Frosted glass effect

/**
 * Dialog Type - Border and fill style
 */
export type DialogType = 'default' | 'outline' | 'solid';

/**
 * Dialog Variant - Color variants
 */
export type DialogVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Dialog Version Configuration
 */
export interface DialogVersionConfig {
  version: DialogVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  clipPath?: string;
  description: string;
  features: string[];
  animations: {
    entrance: string;
    exit?: string;
  };
}

/**
 * All Dialog version configurations
 */
export const DIALOG_VERSION_CONFIGS: Record<DialogVersion, DialogVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'dialog-angular-corner',
    clipPath: 'polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)',
    description: 'Beveled corners with glowing borders and tech-notches',
    features: ['corner-accents', 'scan-line', 'glow-border'],
    animations: { entrance: 'dialogScaleIn', exit: 'dialogScaleOut' }
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'dialog-holo-frame',
    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
    description: 'Iridescent holographic border with shimmer effect',
    features: ['corner-brackets', 'shimmer-overlay', 'iridescent-border'],
    animations: { entrance: 'holoFadeIn', exit: 'holoFadeOut' }
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'dialog-data-panel',
    clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))',
    description: 'Technical panel with side status readouts',
    features: ['side-panel', 'status-leds', 'data-readout'],
    animations: { entrance: 'slideReveal', exit: 'slideOut' }
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'dialog-circuit-board',
    description: 'Circuit trace patterns with animated pulses',
    features: ['circuit-pattern', 'animated-traces', 'corner-nodes'],
    animations: { entrance: 'glitchIn', exit: 'glitchOut' }
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'dialog-quantum-gate',
    clipPath: 'polygon(40px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px), 0 40px)',
    description: 'Quantum computing inspired with wave patterns',
    features: ['quantum-particles', 'wave-function', 'state-indicators'],
    animations: { entrance: 'quantumFade', exit: 'quantumCollapse' }
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'dialog-tactical-hud',
    clipPath: 'polygon(0 16px, 16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px))',
    description: 'Military HUD with targeting elements',
    features: ['radar-sweep', 'targeting-reticle', 'status-bars'],
    animations: { entrance: 'tacticalSlide', exit: 'tacticalSlideOut' }
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'dialog-energy-shield',
    description: 'Hexagonal shield pattern with energy pulses',
    features: ['hexagon-pattern', 'energy-waves', 'shield-status'],
    animations: { entrance: 'energyBurst', exit: 'energyCollapse' }
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'dialog-terminal-window',
    description: 'Command prompt with CRT effects',
    features: ['terminal-header', 'status-buttons', 'crt-flicker'],
    animations: { entrance: 'terminalBoot', exit: 'terminalShutdown' }
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'dialog-matrix-grid',
    clipPath: 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
    description: 'Animated grid with digital rain effect',
    features: ['animated-grid', 'digital-rain', 'corner-nodes'],
    animations: { entrance: 'matrixLoad', exit: 'matrixUnload' }
  },
  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'dialog-glass-morphism',
    description: 'Frosted glass with blur backdrop',
    features: ['frosted-glass', 'blur-backdrop', 'gradient-border'],
    animations: { entrance: 'glassFadeIn', exit: 'glassFadeOut' }
  }
};

/**
 * Dialog Props
 */
export interface DialogProps {
  version?: DialogVersion;
  type?: DialogType;
  variant?: DialogVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  showClose?: boolean;
  overlayClassName?: string;
}

/**
 * Dialog Header Props
 */
export interface DialogHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Dialog Title Props
 */
export interface DialogTitleProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Dialog Description Props
 */
export interface DialogDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Dialog Content Props
 */
export interface DialogContentProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Dialog Footer Props
 */
export interface DialogFooterProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Dialog Component Type with compound components
 */
export interface DialogComponent {
  (props: DialogProps): React.ReactElement | null;
  Header: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
  Title: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description: React.ForwardRefExoticComponent<DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
  Content: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
  Footer: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
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
  children?: React.ReactNode;
}

interface AlertDialogStyledProps {
  version?: string;
  variant?: OverlayVariant | string;
  uiType?: OverlayType;
  colors?: VariantColors;
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogTriggerProps
  extends React.ComponentPropsWithoutRef<'button'>,
    Pick<AlertDialogStyledProps, 'className' | 'children'> {
  asChild?: boolean;
}

export interface AlertDialogContentProps
  extends React.ComponentPropsWithoutRef<'div'>,
    AlertDialogStyledProps {}

export interface AlertDialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertDialogStyledProps {}

export interface AlertDialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertDialogStyledProps {}

export interface AlertDialogTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    AlertDialogStyledProps {}

export interface AlertDialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    AlertDialogStyledProps {}

export interface AlertDialogActionProps
  extends React.ComponentPropsWithoutRef<'button'>,
    AlertDialogStyledProps {}

export interface AlertDialogCancelProps
  extends React.ComponentPropsWithoutRef<'button'>,
    AlertDialogStyledProps {}

// ============ SHEET SYSTEM ============

/**
 * Sheet Versions - Cyber HUD/FUI Slide-in Panel Designs
 * Each version has unique edge styling and visual treatment
 */
export type SheetVersion = 
  | 'angular-corner'    // Beveled corners with tech accents
  | 'holo-frame'        // Holographic iridescent border
  | 'data-panel'        // Technical panel with readouts
  | 'circuit-board'     // Circuit trace patterns
  | 'quantum-gate'      // Quantum wave design
  | 'tactical-hud'      // Military HUD aesthetic
  | 'energy-shield'     // Hexagonal shield pattern
  | 'terminal-window'   // Command prompt style
  | 'matrix-grid'       // Digital grid overlay
  | 'glass-morphism';   // Frosted glass effect

/**
 * Sheet Type - Border and fill style
 */
export type SheetType = 'default' | 'outline' | 'solid';

/**
 * Sheet Variant - Color variants
 */
export type SheetVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Sheet Side - Which edge the sheet slides from
 */
export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Sheet Version Configuration
 */
export interface SheetVersionConfig {
  version: SheetVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  animations: {
    slideIn: string;
    slideOut?: string;
  };
}

/**
 * All Sheet version configurations
 */
export const SHEET_VERSION_CONFIGS: Record<SheetVersion, SheetVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'sheet-angular-corner',
    description: 'Beveled corners with glowing edge accents',
    features: ['corner-accents', 'edge-glow', 'tech-notches'],
    animations: { slideIn: 'sheetSlideIn', slideOut: 'sheetSlideOut' }
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'sheet-holo-frame',
    description: 'Iridescent holographic edge with shimmer',
    features: ['shimmer-edge', 'corner-brackets', 'rainbow-glow'],
    animations: { slideIn: 'holoSlideIn', slideOut: 'holoSlideOut' }
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'sheet-data-panel',
    description: 'Technical readout strip along visible edge',
    features: ['status-bar', 'data-readout', 'scan-line'],
    animations: { slideIn: 'dataSlideIn', slideOut: 'dataSlideOut' }
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'sheet-circuit-board',
    description: 'Circuit trace patterns on edge',
    features: ['circuit-edge', 'pulse-traces', 'node-points'],
    animations: { slideIn: 'circuitSlideIn', slideOut: 'circuitSlideOut' }
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'sheet-quantum-gate',
    description: 'Quantum wave pattern on visible edge',
    features: ['wave-edge', 'quantum-dots', 'state-display'],
    animations: { slideIn: 'quantumSlideIn', slideOut: 'quantumSlideOut' }
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'sheet-tactical-hud',
    description: 'Military HUD edge with targeting marks',
    features: ['targeting-edge', 'status-indicators', 'grid-marks'],
    animations: { slideIn: 'tacticalSlideIn', slideOut: 'tacticalSlideOut' }
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'sheet-energy-shield',
    description: 'Hexagonal energy pattern on edge',
    features: ['hex-edge', 'energy-pulse', 'shield-glow'],
    animations: { slideIn: 'energySlideIn', slideOut: 'energySlideOut' }
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'sheet-terminal-window',
    description: 'Terminal header bar with controls',
    features: ['header-bar', 'status-dots', 'scanline'],
    animations: { slideIn: 'terminalSlideIn', slideOut: 'terminalSlideOut' }
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'sheet-matrix-grid',
    description: 'Digital grid overlay with rain effect',
    features: ['grid-edge', 'digital-rain', 'corner-nodes'],
    animations: { slideIn: 'matrixSlideIn', slideOut: 'matrixSlideOut' }
  },
  'glass-morphism': {
    version: 'glass-morphism',
    name: 'Glass Morphism',
    enabled: true,
    classPrefix: 'sheet-glass-morphism',
    description: 'Frosted glass with soft edge glow',
    features: ['frosted-glass', 'edge-gradient', 'blur-backdrop'],
    animations: { slideIn: 'glassSlideIn', slideOut: 'glassSlideOut' }
  }
};

/**
 * Sheet Props
 */
export interface SheetProps {
  version?: SheetVersion;
  type?: SheetType;
  variant?: SheetVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
  side?: SheetSide;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  showClose?: boolean;
  overlayClassName?: string;
}

/**
 * Sheet Header Props
 */
export interface SheetHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Sheet Title Props
 */
export interface SheetTitleProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Sheet Description Props
 */
export interface SheetDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Sheet Content Props
 */
export interface SheetContentProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Sheet Footer Props
 */
export interface SheetFooterProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Sheet Component Type with compound components
 */
export interface SheetComponent {
  (props: SheetProps): React.ReactElement | null;
  Header: React.ForwardRefExoticComponent<SheetHeaderProps & React.RefAttributes<HTMLDivElement>>;
  Title: React.ForwardRefExoticComponent<SheetTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description: React.ForwardRefExoticComponent<SheetDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
  Content: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
  Footer: React.ForwardRefExoticComponent<SheetFooterProps & React.RefAttributes<HTMLDivElement>>;
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
