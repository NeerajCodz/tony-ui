/**
 * Select Component Type Definitions
 */

import type { Version, CoreVariant, Size } from '../common';
import type React from 'react';

/**
 * All available versions for Select component
 */
export type SelectVersion = Version;

/**
 * Select variants (color/semantic layer)
 */
export type SelectVariant = CoreVariant;

/**
 * Select-specific types (visual treatment)
 */
export type SelectType = 'default' | 'solid' | 'outline' | 'ghost' | 'filled' | 'underlined';

/**
 * Select option
 */
export interface SelectOption {
  /** Option value */
  value: string | number;
  /** Option label */
  label: string;
  /** Whether option is disabled */
  disabled?: boolean;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Additional data */
  data?: any;
}

/**
 * Select group of options
 */
export interface SelectOptionGroup {
  /** Group label */
  label: string;
  /** Options in the group */
  options: SelectOption[];
}

/**
 * Select component props
 */
export interface SelectProps {
  /** Design system version to use */
  version?: SelectVersion;
  /** Color/semantic variant */
  variant?: SelectVariant;
  /** Visual treatment type */
  type?: SelectType;
  /** Size of the select */
  size?: Size;
  /** Selected value */
  value?: string | number;
  /** Default value */
  defaultValue?: string | number;
  /** Callback when value changes */
  onValueChange?: (value: string | number) => void;
  /** Options to display */
  options?: SelectOption[] | SelectOptionGroup[];
  /** Placeholder text */
  placeholder?: string;
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Whether select is disabled */
  disabled?: boolean;
  /** Whether select is required */
  required?: boolean;
  /** Whether select is searchable */
  searchable?: boolean;
  /** Whether select allows multiple selection */
  multiple?: boolean;
  /** Whether select is clearable */
  clearable?: boolean;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Whether select takes full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Child content */
  children?: React.ReactNode;
  /** Visual effects */
  effects?: string;
}

/**
 * Select trigger props
 */
export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: SelectVersion;
  variant?: SelectVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Select content props
 */
export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SelectVersion;
  variant?: SelectVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Select item props
 */
export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SelectVersion;
  variant?: SelectVariant;
  value: string | number;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Select group props
 */
export interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SelectVersion;
  variant?: SelectVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Select label props
 */
export interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SelectVersion;
  variant?: SelectVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Select component type
 */
export interface SelectComponent {
  (props: SelectProps): React.ReactElement | null;
  displayName?: string;
}

/**
 * Version-specific select components
 */
export interface VersionSelectComponents {
  Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
  Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
  Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
  Group?: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
  Label?: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
}
