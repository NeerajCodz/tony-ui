/**
 * Input Component Type Definitions
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type InputVersion = 'default' | 'underline' | 'filled' | 'ghost';
export type InputType = 'default' | 'outline' | 'solid';
export type InputVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

export interface InputProps {
  version?: InputVersion;
  type?: InputType;
  variant?: InputVariant;
  colorType?: ColorType;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  inputType?: string;
  className?: string;
  'aria-label'?: string;
  id?: string;
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

/**
 * Checkbox Props
 */
export interface CheckboxProps {
  version?: 'default' | 'card' | 'switch';
  type?: InputType;
  variant?: InputVariant;
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
}

/**
 * Switch Props
 */
export interface SwitchProps {
  version?: 'default' | 'large' | 'compact';
  type?: InputType;
  variant?: InputVariant;
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

/**
 * Field Props
 */
export interface FieldProps {
  version?: 'default' | 'horizontal' | 'floating';
  variant?: InputVariant;
  label?: string;
  description?: string;
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
