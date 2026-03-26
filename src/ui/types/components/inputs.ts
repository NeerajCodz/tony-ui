/**
 * Input Component Type Definitions & Version Declaration
 * This file is TYPE-FIRST: versions are declared here BEFORE components exist
 * Only versions declared here should have corresponding .tsx files
 * 
 * Version Activation Pattern:
 * 1. Declare version in this InputVersion type union
 * 2. Add metadata in InputVersionConfig
 * 3. Create corresponding input-{version}.tsx file
 * 4. Export from index.ts
 * 
 * Source: dynamic_theme.md - Type-first component versioning
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

/**
 * All Input Versions - Cyber HUD/FUI Designs
 * Each version represents a unique futuristic input design style
 * 
 * Versions:
 * - angular-corner: Beveled corners with glowing borders
 * - holo-frame: Holographic iridescent borders
 * - data-panel: Side technical panel with status indicators
 * - circuit-board: Circuit trace patterns with pulses
 * - quantum-gate: Quantum particles and wave visualization
 * - tactical-hud: Military HUD with targeting elements
 * - energy-shield: Hexagonal shield with energy waves
 * - terminal-window: Command prompt aesthetic
 * - matrix-grid: Animated grid with digital rain
 * - neon: High-contrast neon glow
 */
export type InputVersion = 'angular-corner' | 'holo-frame' | 'data-panel' | 'circuit-board' | 'quantum-gate' | 'tactical-hud' | 'energy-shield' | 'terminal-window' | 'matrix-grid' | 'neon';

/**
 * Input Type - Border and fill style (default, outline, solid)
 * Determines how the input border and background are rendered
 */
export type InputType = 'default' | 'outline' | 'solid' | 'inverse' | 'contrast' | 'soft';

/**
 * Input Variant - Built-in style variants for any version
 * These don't require new components, they use props/classes
 */
export type InputVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Metadata for each input version
 * This describes how each version should be rendered
 */
export interface InputVersionConfig {
  /** Unique version ID */
  version: InputVersion;
  
  /** Human-readable name */
  name: string;
  
  /** Whether this version is currently enabled */
  enabled: boolean;
  
  /** CSS class prefix for this version */
  classPrefix: string;
  
  /** Clip path for unique shape */
  clipPath?: string;
  
  /** Default color type */
  colorType: ColorType;
  
  /** Whether variant supports semantic colors */
  supportsVariants: boolean;
  
  /** Description for documentation */
  description: string;
  
  /** Features list */
  features?: string[];

  /** Visual effects (e.g., glitch, neon-pulse) */
  effects?: string;
}

/**
 * All input versions and their configurations
 * Cyber HUD/FUI input system with 10 futuristic designs
 */
export const INPUT_VERSION_CONFIGS: Record<InputVersion, InputVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    classPrefix: 'input-angular-corner',
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Beveled corners with glowing cyan borders and tech-notches',
    features: ['corner-accents', 'scan-line', 'glow-border']
  },
  
  'holo-frame': {
    version: 'holo-frame',
    name: 'Holographic Frame',
    enabled: true,
    classPrefix: 'input-holo-frame',
    clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Iridescent holographic border with animated rainbow gradient',
    features: ['corner-brackets', 'particle-effects', 'iridescent-border']
  },
  
  'data-panel': {
    version: 'data-panel',
    name: 'Data Panel',
    enabled: true,
    classPrefix: 'input-data-panel',
    clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Side technical panel with status indicators and readouts',
    features: ['side-panel', 'status-leds', 'data-readout']
  },
  
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    classPrefix: 'input-circuit-board',
    clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Circuit trace patterns with animated electrical pulses',
    features: ['circuit-pattern', 'animated-traces', 'corner-nodes']
  },
  
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    classPrefix: 'input-quantum-gate',
    clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Quantum-inspired with particle effects and wave visualization',
    features: ['quantum-particles', 'wave-function', 'state-indicators']
  },
  
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    classPrefix: 'input-tactical-hud',
    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Military HUD aesthetic with targeting reticle and radar sweep',
    features: ['radar-sweep', 'targeting-reticle', 'stealth-indicators']
  },
  
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    classPrefix: 'input-energy-shield',
    clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Hexagonal shield pattern with pulsating energy waves',
    features: ['hexagon-pattern', 'energy-waves', 'shield-status']
  },
  
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    classPrefix: 'input-terminal-window',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Terminal-style with command prompt aesthetic and CRT effects',
    features: ['terminal-header', 'status-buttons', 'crt-flicker']
  },
  
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    classPrefix: 'input-matrix-grid',
    clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'Animated grid overlay with digital rain effect',
    features: ['animated-grid', 'digital-rain', 'corner-nodes']
  },
  
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    classPrefix: 'input-neon',
    clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
    colorType: 'primary',
    supportsVariants: true,
    description: 'High-contrast neon glow with thick outer bloom',
    features: ['thick-glow', 'corner-leds', 'pulsing-brightness']
  }
};

/**
 * Input Component Props Interface
 * All input versions accept these props
 */
export interface InputProps {
  /** Input version to render */
  version?: InputVersion;
  
  /** Visual variant for color messaging */
  variant?: InputVariant;
  
  /** Input type - border and fill style (default, outline, solid) */
  type?: InputType;
  
  /** Base color type override */
  colorType?: ColorType;
  
  /** Enable or disable animations */
  animated?: boolean;
  
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Controlled value */
  value?: string;
  
  /** Default value for uncontrolled mode */
  defaultValue?: string;
  
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Read-only state */
  readOnly?: boolean;
  
  /** HTML input type (text, password, email, etc.) */
  inputType?: string;
  
  /** CSS class name */
  className?: string;
  
  /** Aria label */
  'aria-label'?: string;
  
  /** Input id */
  id?: string;
  
  /** Input name */
  name?: string;
}

/**
 * Textarea Props
 */
export interface TextareaProps {
  version?: InputVersion;
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  className?: string;
  'aria-label'?: string;
  id?: string;
  name?: string;
}

// ========== CHECKBOX SYSTEM ==========

/**
 * Checkbox Version - Cyber HUD/FUI Designs
 * 10 unique futuristic checkbox styles
 */
export type CheckboxVersion = 
  | 'angular-corner'    // Beveled square with tech notches
  | 'hexagonal'         // Hex-shaped checkbox
  | 'diamond'           // Rotated square diamond shape
  | 'circuit-node'      // Circuit board node style
  | 'quantum-bit'       // Quantum computing inspired
  | 'holo-scan'         // Holographic scan effect
  | 'energy-core'       // Pulsing energy core
  | 'tactical-marker'   // Military targeting style
  | 'matrix-cell'       // Digital matrix cell
  | 'neon-pulse';       // Neon glow pulse

export type CheckboxType = 'default' | 'outline' | 'solid' | 'inverse' | 'contrast' | 'soft';
export type CheckboxVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Checkbox Version Config
 */
export interface CheckboxVersionConfig {
  version: CheckboxVersion;
  name: string;
  enabled: boolean;
  description: string;
  shape: 'square' | 'hexagon' | 'diamond' | 'circle';
  checkStyle: 'checkmark' | 'fill' | 'glow' | 'icon';
}

/**
 * All checkbox versions and their configurations
 */
export const CHECKBOX_VERSION_CONFIGS: Record<CheckboxVersion, CheckboxVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    description: 'Beveled square with tech notches and cyber checkmark',
    shape: 'square',
    checkStyle: 'checkmark'
  },
  'hexagonal': {
    version: 'hexagonal',
    name: 'Hexagonal',
    enabled: true,
    description: 'Hex-shaped checkbox with honeycomb aesthetic',
    shape: 'hexagon',
    checkStyle: 'fill'
  },
  'diamond': {
    version: 'diamond',
    name: 'Diamond',
    enabled: true,
    description: 'Rotated square diamond with sharp edges',
    shape: 'diamond',
    checkStyle: 'glow'
  },
  'circuit-node': {
    version: 'circuit-node',
    name: 'Circuit Node',
    enabled: true,
    description: 'Circuit board node with trace connections',
    shape: 'circle',
    checkStyle: 'fill'
  },
  'quantum-bit': {
    version: 'quantum-bit',
    name: 'Quantum Bit',
    enabled: true,
    description: 'Quantum computing qubit visualization',
    shape: 'circle',
    checkStyle: 'glow'
  },
  'holo-scan': {
    version: 'holo-scan',
    name: 'Holo Scan',
    enabled: true,
    description: 'Holographic scanning effect checkbox',
    shape: 'square',
    checkStyle: 'glow'
  },
  'energy-core': {
    version: 'energy-core',
    name: 'Energy Core',
    enabled: true,
    description: 'Pulsing energy core with particle effects',
    shape: 'hexagon',
    checkStyle: 'glow'
  },
  'tactical-marker': {
    version: 'tactical-marker',
    name: 'Tactical Marker',
    enabled: true,
    description: 'Military HUD targeting marker style',
    shape: 'square',
    checkStyle: 'icon'
  },
  'matrix-cell': {
    version: 'matrix-cell',
    name: 'Matrix Cell',
    enabled: true,
    description: 'Digital matrix grid cell with data effect',
    shape: 'square',
    checkStyle: 'fill'
  },
  'neon-pulse': {
    version: 'neon-pulse',
    name: 'Neon Pulse',
    enabled: true,
    description: 'High-contrast neon with pulsing glow',
    shape: 'square',
    checkStyle: 'glow'
  }
};

/**
 * Checkbox Props
 */
export interface CheckboxProps {
  version?: CheckboxVersion;
  type?: CheckboxType;
  variant?: CheckboxVariant;
  colorType?: ColorType;
  animated?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

// ========== SWITCH SYSTEM ==========

/**
 * Switch Version - Cyber HUD/FUI Designs
 * 10 unique futuristic switch/toggle styles
 */
export type SwitchVersion = 
  | 'angular-slide'     // Angular track with beveled thumb
  | 'hexagonal-cell'    // Hex-shaped track and thumb
  | 'energy-bar'        // Energy fill bar effect
  | 'circuit-path'      // Circuit trace path style
  | 'quantum-tunnel'    // Quantum tunneling effect
  | 'holo-flip'         // Holographic flip switch
  | 'power-cell'        // Power cell charge indicator
  | 'tactical-toggle'   // Military toggle style
  | 'matrix-switch'     // Digital matrix toggle
  | 'neon-slide';       // Neon glow slider

export type SwitchType = 'default' | 'outline' | 'solid';
export type SwitchVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive';

/**
 * Switch Version Config
 */
export interface SwitchVersionConfig {
  version: SwitchVersion;
  name: string;
  enabled: boolean;
  description: string;
  trackStyle: 'rounded' | 'angular' | 'hexagonal';
  thumbStyle: 'circle' | 'square' | 'hexagon';
}

/**
 * All switch versions and their configurations
 */
export const SWITCH_VERSION_CONFIGS: Record<SwitchVersion, SwitchVersionConfig> = {
  'angular-slide': {
    version: 'angular-slide',
    name: 'Angular Slide',
    enabled: true,
    description: 'Angular track with beveled thumb and tech edges',
    trackStyle: 'angular',
    thumbStyle: 'square'
  },
  'hexagonal-cell': {
    version: 'hexagonal-cell',
    name: 'Hexagonal Cell',
    enabled: true,
    description: 'Hex-shaped track with honeycomb thumb',
    trackStyle: 'hexagonal',
    thumbStyle: 'hexagon'
  },
  'energy-bar': {
    version: 'energy-bar',
    name: 'Energy Bar',
    enabled: true,
    description: 'Energy fill bar with charging animation',
    trackStyle: 'angular',
    thumbStyle: 'square'
  },
  'circuit-path': {
    version: 'circuit-path',
    name: 'Circuit Path',
    enabled: true,
    description: 'Circuit trace path with node thumb',
    trackStyle: 'rounded',
    thumbStyle: 'circle'
  },
  'quantum-tunnel': {
    version: 'quantum-tunnel',
    name: 'Quantum Tunnel',
    enabled: true,
    description: 'Quantum tunneling effect with particle trail',
    trackStyle: 'rounded',
    thumbStyle: 'circle'
  },
  'holo-flip': {
    version: 'holo-flip',
    name: 'Holo Flip',
    enabled: true,
    description: 'Holographic flip switch with iridescent effect',
    trackStyle: 'rounded',
    thumbStyle: 'circle'
  },
  'power-cell': {
    version: 'power-cell',
    name: 'Power Cell',
    enabled: true,
    description: 'Power cell with charge level indicator',
    trackStyle: 'angular',
    thumbStyle: 'square'
  },
  'tactical-toggle': {
    version: 'tactical-toggle',
    name: 'Tactical Toggle',
    enabled: true,
    description: 'Military HUD toggle with status indicators',
    trackStyle: 'angular',
    thumbStyle: 'square'
  },
  'matrix-switch': {
    version: 'matrix-switch',
    name: 'Matrix Switch',
    enabled: true,
    description: 'Digital matrix toggle with data flow effect',
    trackStyle: 'angular',
    thumbStyle: 'square'
  },
  'neon-slide': {
    version: 'neon-slide',
    name: 'Neon Slide',
    enabled: true,
    description: 'High-contrast neon slider with glow trail',
    trackStyle: 'rounded',
    thumbStyle: 'circle'
  }
};

/**
 * Switch Props
 */
export interface SwitchProps {
  version?: SwitchVersion;
  type?: SwitchType;
  variant?: SwitchVariant;
  colorType?: ColorType;
  animated?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Radio Group Props
 */
export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  version?: 'default' | 'card' | 'button';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  name?: string;
}

/**
 * Select Props
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  version?: 'default' | 'ghost' | 'underline';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
}

/**
 * Slider Props
 */
export interface SliderProps {
  version?: 'default' | 'range' | 'stepped';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  showValue?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

// ========== FIELD SYSTEM ==========

/**
 * Field Version - Cyber HUD/FUI Designs
 * 10 unique futuristic field wrapper styles
 */
export type FieldVersion = 
  | 'angular-corner'    // Beveled corners with tech notches
  | 'holo-frame'        // Holographic iridescent frame
  | 'data-panel'        // Technical data panel style
  | 'circuit-board'     // Circuit trace borders
  | 'quantum-gate'      // Quantum-inspired frame
  | 'tactical-hud'      // Military HUD targeting style
  | 'energy-shield'     // Hexagonal shield pattern
  | 'terminal-window'   // Command terminal style
  | 'matrix-grid'       // Digital matrix grid
  | 'neon';     // Intense neon glow

export type FieldType = 'default' | 'outline' | 'solid';

/**
 * Field Version Config
 */
export interface FieldVersionConfig {
  version: FieldVersion;
  name: string;
  enabled: boolean;
  description: string;
  features: string[];
}

/**
 * All field versions and their configurations
 */
export const FIELD_VERSION_CONFIGS: Record<FieldVersion, FieldVersionConfig> = {
  'angular-corner': {
    version: 'angular-corner',
    name: 'Angular Corner',
    enabled: true,
    description: 'Beveled corners with glowing borders and tech notches',
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
    description: 'Side technical panel with status indicators',
    features: ['side-panel', 'status-leds', 'data-readout']
  },
  'circuit-board': {
    version: 'circuit-board',
    name: 'Circuit Board',
    enabled: true,
    description: 'Circuit trace patterns with animated pulses',
    features: ['circuit-pattern', 'animated-traces', 'corner-nodes']
  },
  'quantum-gate': {
    version: 'quantum-gate',
    name: 'Quantum Gate',
    enabled: true,
    description: 'Quantum-inspired with particle effects',
    features: ['quantum-particles', 'wave-function', 'state-indicators']
  },
  'tactical-hud': {
    version: 'tactical-hud',
    name: 'Tactical HUD',
    enabled: true,
    description: 'Military HUD aesthetic with targeting elements',
    features: ['radar-sweep', 'targeting-reticle', 'stealth-indicators']
  },
  'energy-shield': {
    version: 'energy-shield',
    name: 'Energy Shield',
    enabled: true,
    description: 'Hexagonal shield pattern with energy waves',
    features: ['hexagon-pattern', 'energy-waves', 'shield-status']
  },
  'terminal-window': {
    version: 'terminal-window',
    name: 'Terminal Window',
    enabled: true,
    description: 'Terminal-style with command prompt aesthetic',
    features: ['terminal-header', 'status-buttons', 'crt-flicker']
  },
  'matrix-grid': {
    version: 'matrix-grid',
    name: 'Matrix Grid',
    enabled: true,
    description: 'Animated grid overlay with digital rain effect',
    features: ['animated-grid', 'digital-rain', 'corner-nodes']
  },
  'neon': {
    version: 'neon',
    name: 'Neon Outline',
    enabled: true,
    description: 'High-contrast neon glow with thick outer bloom',
    features: ['thick-glow', 'corner-leds', 'pulsing-brightness']
  }
};

/**
 * Field Props
 */
export interface FieldProps {
  version?: FieldVersion;
  type?: FieldType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

/**
 * Label Props
 */
export interface LabelProps {
  version?: 'default' | 'accent';
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

/**
 * Input Group Props
 */
export interface InputGroupProps {
  version?: 'default' | 'attached';
  variant?: InputVariant;
  colorType?: ColorType;
  children: React.ReactNode;
  className?: string;
}

/**
 * Combobox Props
 */
export interface ComboboxProps {
  version?: 'default' | 'searchable';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

/**
 * Input OTP Props
 */
export interface InputOTPProps {
  version?: 'default' | 'separated';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Native Select Props
 */
export interface NativeSelectProps {
  version?: 'default' | 'ghost';
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}
