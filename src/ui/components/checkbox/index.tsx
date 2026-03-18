/**
 * Checkbox Component
 */
import React, { useState } from 'react';
import type { CheckboxProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';
import '../../styles/inputs.css';

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  className = '',
  id,
  name,
}, ref) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  const activeColor = resolveColorType(variant, colorType);

  const handleChange = () => {
    if (disabled) return;
    const newVal = !isChecked;
    setInternalChecked(newVal);
    onChange?.(newVal);
  };

  const boxStyle: React.CSSProperties = {
    width: '18px',
    height: '18px',
    borderRadius: '4px',
    border: `2px solid ${getColorVar(activeColor, isChecked ? 'base' : 'border')}`,
    backgroundColor: isChecked ? getColorVar(activeColor, 'base') : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    flexShrink: 0,
  };

  const checkmark = isChecked ? (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke={getColorVar(activeColor, 'foreground')} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : null;

  return (
    <label
      className={`ui-checkbox ui-checkbox-${version} ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      data-version={version}
      data-variant={variant}
    >
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <div style={boxStyle}>{checkmark}</div>
      {label && (
        <span style={{
          fontSize: '14px',
          color: getColorVar(activeColor, 'foreground'),
          opacity: disabled ? 0.5 : 1,
        }}>
          {label}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
export { Checkbox };
export default Checkbox;
