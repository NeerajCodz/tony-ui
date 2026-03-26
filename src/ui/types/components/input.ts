/**
 * Input Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Input component
 */
export type InputVersion = Version;

/**
 * Input variants (color/semantic layer)
 */
export type InputVariant = CoreVariant;

/**
 * Input-specific types (visual treatment)
 */
export type InputType = 'default' | 'solid' | 'outline' | 'ghost' | 'filled' | 'underlined';

/**
 * HTML input types
 */
export type HTMLInputType = 
  | 'text' 
  | 'password' 
  | 'email' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'search' 
  | 'date' 
  | 'time' 
  | 'datetime-local' 
  | 'month' 
  | 'week' 
  | 'color' 
  | 'file' 
  | 'range' 
  | 'hidden';

/**
 * Input component props
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Design system version to use */
  version?: InputVersion;
  /** Color/semantic variant */
  variant?: InputVariant;
  /** Visual treatment type */
  type?: InputType;
  /** HTML input type */
  htmlType?: HTMLInputType;
  /** Size of the input */
  size?: Size;
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Icon to display before input */
  iconBefore?: React.ReactNode;
  /** Icon to display after input */
  iconAfter?: React.ReactNode;
  /** Whether input takes full width */
  fullWidth?: boolean;
  /** Whether input is clearable */
  clearable?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Visual effects */
  effects?: string;
}

/**
 * Input group props (for grouped inputs with addons)
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: InputVersion;
  variant?: InputVariant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Input addon props
 */
export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: InputVersion;
  variant?: InputVariant;
  position?: 'before' | 'after';
  className?: string;
  children?: React.ReactNode;
}

/**
 * Input component ref type
 */
export type InputRef = HTMLInputElement;

/**
 * Input component type with ref forwarding
 */
export type InputComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<InputRef>
>;
