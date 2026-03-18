/**
 * Switch Component
 */
import React, { useState } from 'react';
import type { SwitchProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';
import '../../styles/inputs.css';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(({
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

  const sizeMap: Record<string, { width: number; height: number; thumb: number }> = {
    default: { width: 44, height: 24, thumb: 18 },
    large: { width: 56, height: 30, thumb: 24 },
    compact: { width: 34, height: 18, thumb: 14 },
  };
  const dims = sizeMap[version] || sizeMap.default;

  const handleClick = () => {
    if (disabled) return;
    const newVal = !isChecked;
    setInternalChecked(newVal);
    onChange?.(newVal);
  };

  const trackStyle: React.CSSProperties = {
    position: 'relative',
    width: dims.width,
    height: dims.height,
    borderRadius: dims.height,
    backgroundColor: isChecked ? getColorVar(activeColor, 'base') : getColorVar(activeColor, 'border'),
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    outline: 'none',
    padding: 0,
    flexShrink: 0,
  };

  const thumbStyle: React.CSSProperties = {
    position: 'absolute',
    top: (dims.height - dims.thumb) / 2,
    left: isChecked ? dims.width - dims.thumb - 3 : 3,
    width: dims.thumb,
    height: dims.thumb,
    borderRadius: '50%',
    backgroundColor: isChecked ? getColorVar(activeColor, 'foreground') : getColorVar(activeColor, 'foreground'),
    transition: animated ? 'left 200ms ease-in-out' : 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  };

  return (
    <label
      className={`ui-switch ui-switch-${version} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      data-version={version}
      data-variant={variant}
    >
      <button
        ref={ref}
        id={id}
        role="switch"
        type="button"
        aria-checked={isChecked}
        onClick={handleClick}
        disabled={disabled}
        style={trackStyle}
      >
        <div style={thumbStyle} />
      </button>
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

Switch.displayName = 'Switch';
export { Switch };
export default Switch;
