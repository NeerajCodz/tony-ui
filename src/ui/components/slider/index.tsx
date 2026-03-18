/**
 * Slider Component
 */
import React, { useState, useRef, useCallback } from 'react';
import type { SliderProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = 50,
  onChange,
  disabled = false,
  showValue = true,
  className = '',
  id,
  name,
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const activeColor = resolveColorType(variant, colorType);
  const percentage = ((currentValue - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div
      ref={ref}
      className={`ui-slider ui-slider-${version} ${className}`}
      style={{ width: '100%', position: 'relative' }}
      data-version={version}
      data-variant={variant}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ flex: 1, position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
          {/* Track */}
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: version === 'stepped' ? '6px' : '4px',
            borderRadius: '2px',
            backgroundColor: getColorVar(activeColor, 'border'),
          }} />
          {/* Fill */}
          <div style={{
            position: 'absolute',
            left: 0,
            width: `${percentage}%`,
            height: version === 'stepped' ? '6px' : '4px',
            borderRadius: '2px',
            backgroundColor: getColorVar(activeColor, 'base'),
            transition: animated ? 'width 100ms' : 'none',
          }} />
          {/* Native input for accessibility */}
          <input
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            style={{
              position: 'absolute',
              width: '100%',
              height: '20px',
              opacity: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              margin: 0,
            }}
          />
          {/* Thumb */}
          <div style={{
            position: 'absolute',
            left: `${percentage}%`,
            transform: 'translateX(-50%)',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: getColorVar(activeColor, 'base'),
            border: `2px solid ${getColorVar(activeColor, 'foreground')}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            transition: animated ? 'left 100ms, transform 100ms' : 'none',
            pointerEvents: 'none',
          }} />
        </div>
        {showValue && (
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            color: getColorVar(activeColor, 'foreground'),
            minWidth: '36px',
            textAlign: 'right',
          }}>
            {currentValue}
          </span>
        )}
      </div>
    </div>
  );
});

Slider.displayName = 'Slider';
export { Slider };
export default Slider;
