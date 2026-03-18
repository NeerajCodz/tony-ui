/**
 * Radio Group Component
 */
import React, { useState } from 'react';
import type { RadioGroupProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  options,
  value: controlledValue,
  defaultValue = '',
  onChange,
  disabled = false,
  orientation = 'vertical',
  className = '',
  name,
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const activeColor = resolveColorType(variant, colorType);

  const handleSelect = (val: string) => {
    if (disabled) return;
    setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div
      ref={ref}
      className={`ui-radio-group ui-radio-group-${version} ${className}`}
      role="radiogroup"
      style={{
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        gap: version === 'button' ? '0' : '10px',
      }}
      data-version={version}
      data-variant={variant}
    >
      {options.map((option) => {
        const isSelected = currentValue === option.value;
        const isDisabled = disabled || option.disabled;

        if (version === 'button') {
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(option.value)}
              disabled={isDisabled}
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: isSelected ? '600' : '400',
                border: `1px solid ${getColorVar(activeColor, 'border')}`,
                backgroundColor: isSelected ? getColorVar(activeColor, 'base') : getColorVar(activeColor, 'background'),
                color: isSelected ? getColorVar(activeColor, 'foreground') : getColorVar(activeColor, 'foreground'),
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.5 : 1,
                transition: animated ? 'all 150ms ease-in-out' : 'none',
                outline: 'none',
                fontFamily: 'inherit',
                marginLeft: '-1px',
              }}
            >
              {option.label}
            </button>
          );
        }

        return (
          <label
            key={option.value}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              userSelect: 'none',
              padding: version === 'card' ? '12px 16px' : '0',
              border: version === 'card' ? `1px solid ${getColorVar(activeColor, isSelected ? 'base' : 'border')}` : 'none',
              borderRadius: version === 'card' ? '8px' : '0',
              backgroundColor: version === 'card' && isSelected ? getColorVar(activeColor, 'background') : 'transparent',
              transition: animated ? 'all 150ms ease-in-out' : 'none',
            }}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => handleSelect(option.value)}
              disabled={isDisabled}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: `2px solid ${getColorVar(activeColor, isSelected ? 'base' : 'border')}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: animated ? 'all 200ms ease-in-out' : 'none',
              flexShrink: 0,
            }}>
              {isSelected && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: getColorVar(activeColor, 'base'),
                }} />
              )}
            </div>
            <span style={{
              fontSize: '14px',
              color: getColorVar(activeColor, 'foreground'),
              opacity: isDisabled ? 0.5 : 1,
            }}>
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';
export { RadioGroup };
export default RadioGroup;
