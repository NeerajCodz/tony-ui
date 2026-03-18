/**
 * Input Component
 * Text input with versions: default, underline, filled, ghost
 */
import React, { useState } from 'react';
import type { InputProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType, getTypeStyles } from '../../utils/component-helpers.js';
import '../../styles/inputs.css';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  version = 'default',
  type: inputStyleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  size = 'md',
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  inputType = 'text',
  className = '',
  'aria-label': ariaLabel,
  id,
  name,
}, ref) => {
  const [focused, setFocused] = useState(false);
  const activeColor = resolveColorType(variant, colorType);

  const sizeMap: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 10px', fontSize: '12px', height: '32px' },
    md: { padding: '8px 12px', fontSize: '14px', height: '40px' },
    lg: { padding: '10px 16px', fontSize: '16px', height: '48px' },
  };

  const versionStyles: Record<string, React.CSSProperties> = {
    default: {
      border: `1px solid ${getColorVar(activeColor, focused ? 'ring' : 'border')}`,
      backgroundColor: getColorVar(activeColor, 'background'),
      borderRadius: '6px',
    },
    underline: {
      border: 'none',
      borderBottom: `2px solid ${getColorVar(activeColor, focused ? 'ring' : 'border')}`,
      backgroundColor: 'transparent',
      borderRadius: '0',
    },
    filled: {
      border: `1px solid transparent`,
      backgroundColor: getColorVar(activeColor, 'background'),
      borderRadius: '6px',
    },
    ghost: {
      border: '1px solid transparent',
      backgroundColor: 'transparent',
      borderRadius: '6px',
    },
  };

  const style: React.CSSProperties = {
    ...sizeMap[size],
    ...versionStyles[version],
    color: getColorVar(activeColor, 'foreground'),
    outline: 'none',
    width: '100%',
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };

  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type={inputType}
      className={`ui-input ui-input-${version} ui-input-${size} ${className}`}
      style={style}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={(e) => { setFocused(true); onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); onBlur?.(e); }}
      disabled={disabled}
      readOnly={readOnly}
      aria-label={ariaLabel}
      data-version={version}
      data-type={inputStyleType}
      data-variant={variant}
    />
  );
});

Input.displayName = 'Input';
export { Input };
export default Input;
