/**
 * Layout Component Type Definitions
 * Accordion, Collapsible, Separator, Resizable, ScrollArea, Direction
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type LayoutType = 'default' | 'outline' | 'solid';
export type LayoutVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

// ============================================================================
// ACCORDION COMPONENT - Cyber HUD/FUI Accordion System
// ============================================================================

/**
 * All Accordion Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic accordion design style
 */
export type AccordionVersion = 
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
 * Accordion Type - Border and fill style
 */
export type AccordionType = 'default' | 'outline' | 'solid';

/**
 * Accordion Variant - Color variants
 */
export type AccordionVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each accordion version
 */
export interface AccordionVersionConfig {
  version: AccordionVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All accordion versions and their configurations
 */
export const ACCORDION_VERSION_CONFIGS: Record<AccordionVersion, AccordionVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'accordion-angular-corner',
    description: 'Beveled corners with glowing borders and tech-notches',
    features: ['corner-accents', 'glow-border', 'chevron-indicator']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'accordion-holo-frame',
    description: 'Iridescent holographic panels with shimmer effect',
    features: ['holo-gradient', 'shimmer-effect', 'glass-reflection']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'accordion-data-panel',
    description: 'Technical data panel with status indicators',
    features: ['status-leds', 'data-readout', 'expand-animation']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'accordion-circuit-board',
    description: 'Circuit trace patterns with electrical connections',
    features: ['circuit-traces', 'pulse-animation', 'node-markers']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'accordion-quantum-gate',
    description: 'Quantum-inspired with wave collapse animation',
    features: ['particle-effects', 'wave-collapse', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'accordion-tactical-hud',
    description: 'Military HUD with targeting aesthetics',
    features: ['bracket-markers', 'expand-sweep', 'tactical-grid']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'accordion-energy-shield',
    description: 'Hexagonal energy shield with power indicators',
    features: ['hex-pattern', 'energy-pulse', 'shield-expand']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'accordion-terminal-window',
    description: 'Command prompt terminal with collapsible sections',
    features: ['terminal-header', 'monospace-font', 'cmd-expand']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'accordion-matrix-grid',
    description: 'Digital matrix grid with code reveal',
    features: ['grid-overlay', 'digital-reveal', 'glitch-effect']
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'accordion-neon-outline',
    description: 'High-contrast neon glow with expand animation',
    features: ['neon-glow', 'pulse-expand', 'outer-bloom']
  }
};

/**
 * Accordion Component Props Interface
 */
export interface AccordionProps {
  version?: AccordionVersion;
  type?: AccordionType;
  variant?: AccordionVariant;
  colorType?: ColorType;
  animated?: boolean;
  /** 'single' allows one item open, 'multiple' allows many */
  collapsible?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * AccordionItem Props
 */
export interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * AccordionTrigger Props
 */
export interface AccordionTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * AccordionContent Props
 */
export interface AccordionContentProps {
  className?: string;
  children?: React.ReactNode;
  forceMount?: boolean;
}

/**
 * Complete Accordion Component Type
 */
export interface AccordionComponent extends React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>> {
  Item: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
  Trigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
  Content: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
}

/**
 * Legacy AccordionItem interface for compatibility
 */
export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

// ============================================================================
// COLLAPSIBLE COMPONENT - Cyber HUD/FUI Collapsible System
// ============================================================================

/**
 * All Collapsible Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic collapsible design style
 */
export type CollapsibleVersion = 
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
 * Collapsible Type - Border and fill style
 */
export type CollapsibleType = 'default' | 'outline' | 'solid';

/**
 * Collapsible Variant - Color variants
 */
export type CollapsibleVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each collapsible version
 */
export interface CollapsibleVersionConfig {
  version: CollapsibleVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All collapsible versions and their configurations
 */
export const COLLAPSIBLE_VERSION_CONFIGS: Record<CollapsibleVersion, CollapsibleVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'collapsible-angular-corner',
    description: 'Beveled corners with glowing borders and tech-notches',
    features: ['corner-accents', 'glow-border', 'chevron-indicator']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'collapsible-holo-frame',
    description: 'Iridescent holographic panels with shimmer effect',
    features: ['holo-gradient', 'shimmer-effect', 'glass-reflection']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'collapsible-data-panel',
    description: 'Technical data panel with status indicators',
    features: ['status-leds', 'data-readout', 'expand-animation']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'collapsible-circuit-board',
    description: 'Circuit trace patterns with electrical connections',
    features: ['circuit-traces', 'pulse-animation', 'node-markers']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'collapsible-quantum-gate',
    description: 'Quantum-inspired with wave collapse animation',
    features: ['particle-effects', 'wave-collapse', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'collapsible-tactical-hud',
    description: 'Military HUD with targeting aesthetics',
    features: ['bracket-markers', 'expand-sweep', 'tactical-grid']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'collapsible-energy-shield',
    description: 'Hexagonal energy shield with power indicators',
    features: ['hex-pattern', 'energy-pulse', 'shield-expand']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'collapsible-terminal-window',
    description: 'Command prompt terminal with collapsible sections',
    features: ['terminal-header', 'monospace-font', 'cmd-expand']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'collapsible-matrix-grid',
    description: 'Digital matrix grid with code reveal',
    features: ['grid-overlay', 'digital-reveal', 'glitch-effect']
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'collapsible-neon-outline',
    description: 'High-contrast neon glow with expand animation',
    features: ['neon-glow', 'pulse-expand', 'outer-bloom']
  }
};

/**
 * Collapsible Props
 */
export interface CollapsibleProps {
  version?: CollapsibleVersion;
  type?: CollapsibleType;
  variant?: CollapsibleVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

/**
 * CollapsibleTrigger Props
 */
export interface CollapsibleTriggerProps {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

/**
 * CollapsibleContent Props
 */
export interface CollapsibleContentProps {
  className?: string;
  children?: React.ReactNode;
  forceMount?: boolean;
}

/**
 * Complete Collapsible Component Type
 */
export interface CollapsibleComponent extends React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDivElement>> {
  Trigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>>;
  Content: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<HTMLDivElement>>;
}

// ============================================================================
// SEPARATOR COMPONENT - Cyber HUD/FUI Separator System
// ============================================================================

/**
 * All Separator Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic separator design style
 */
export type SeparatorVersion = 
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
 * Separator Type - Border and fill style
 */
export type SeparatorType = 'default' | 'outline' | 'solid';

/**
 * Separator Variant - Color variants
 */
export type SeparatorVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Metadata for each separator version
 */
export interface SeparatorVersionConfig {
  version: SeparatorVersion;
  name: string;
  enabled: boolean;
  classPrefix: string;
  description: string;
  features: string[];
  tags?: string[];
}

/**
 * All separator versions and their configurations
 */
export const SEPARATOR_VERSION_CONFIGS: Record<SeparatorVersion, SeparatorVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'separator-angular-corner',
    description: 'Beveled edges with angular end caps and tech notches',
    features: ['angular-caps', 'tech-notches', 'glow-line']
  },
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'separator-holo-frame',
    description: 'Iridescent holographic line with rainbow shimmer',
    features: ['holo-gradient', 'shimmer-effect', 'rainbow-glow']
  },
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'separator-data-panel',
    description: 'Technical separator with data flow indicators',
    features: ['data-dots', 'flow-animation', 'status-markers']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'separator-circuit-board',
    description: 'Circuit trace with node markers and electrical pulses',
    features: ['circuit-nodes', 'pulse-animation', 'trace-pattern']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'separator-quantum-gate',
    description: 'Quantum-inspired with wave particles and energy fields',
    features: ['particle-flow', 'wave-effect', 'quantum-glow']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'separator-tactical-hud',
    description: 'Military HUD separator with tactical markers',
    features: ['bracket-ends', 'scan-line', 'targeting-marks']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'separator-energy-shield',
    description: 'Energy barrier with hexagonal pattern and pulse waves',
    features: ['hex-pattern', 'energy-pulse', 'shield-glow']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'separator-terminal-window',
    description: 'Command line separator with dashes and cursor',
    features: ['dash-pattern', 'cursor-blink', 'terminal-marks']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'separator-matrix-grid',
    description: 'Digital matrix grid with code rain effect',
    features: ['grid-dots', 'digital-rain', 'glitch-effect']
  },
  'neon-outline': {
    version: 'neon-outline',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'separator-neon-outline',
    description: 'High-contrast neon glow with intense outer bloom',
    features: ['neon-glow', 'pulse-brightness', 'outer-bloom']
  }
};

/**
 * Separator Props
 */
export interface SeparatorProps {
  version?: SeparatorVersion;
  type?: SeparatorType;
  variant?: SeparatorVariant;
  colorType?: ColorType;
  animated?: boolean;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
  className?: string;
  label?: string;
}

/**
 * Resizable Props
 */
export interface ResizablePanelDef {
  id: string;
  content: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export interface ResizableProps {
  version?: 'default' | 'bordered';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  panels: ResizablePanelDef[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Scroll Area Props
 */
export interface ScrollAreaProps {
  version?: 'default' | 'thin' | 'hidden';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  maxHeight?: string | number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Direction Props
 */
export interface DirectionProps {
  version?: 'default';
  dir?: 'ltr' | 'rtl';
  children: React.ReactNode;
  className?: string;
}
