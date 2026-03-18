/**
 * Toggle Group Component
 */
import React, { useState } from 'react';
import type { ToggleGroupProps } from '../../types/components/misc.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, items, value: controlledValue,
  defaultValue, onValueChange, multiple = false, disabled = false,
  className = '', size = 'md',
}) => {
  const [internalValue, setInternalValue] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );
  const activeValues = controlledValue !== undefined
    ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue])
    : internalValue;
  const activeColor = resolveColorType(variant, colorType);

  const toggle = (val: string) => {
    if (disabled) return;
    let next: string[];
    if (activeValues.includes(val)) {
      next = activeValues.filter(v => v !== val);
    } else {
      next = multiple ? [...activeValues, val] : [val];
    }
    setInternalValue(next);
    onValueChange?.(multiple ? next : next[0] || '');
  };

  const sizeMap: Record<string, React.CSSProperties> = {
    sm: { padding: '4px 8px', fontSize: '12px' },
    md: { padding: '6px 12px', fontSize: '13px' },
    lg: { padding: '8px 16px', fontSize: '14px' },
  };

  return (
    <div className={`ui-toggle-group ui-toggle-group-${version} ${className}`}
      role="group" style={{ display: 'inline-flex', gap: '0' }}>
      {items.map((item, idx) => {
        const isActive = activeValues.includes(item.value);
        const isDisabled = disabled || item.disabled;

        return (
          <button key={item.value} type="button" onClick={() => !isDisabled && toggle(item.value)}
            disabled={isDisabled}
            style={{
              ...sizeMap[size],
              border: `1px solid ${getColorVar(activeColor, isActive ? 'base' : 'border')}`,
              backgroundColor: isActive ? getColorVar(activeColor, 'base') : 'transparent',
              color: getColorVar(activeColor, 'foreground'),
              fontWeight: isActive ? '600' : '400',
              borderRadius: idx === 0 ? '6px 0 0 6px' : idx === items.length - 1 ? '0 6px 6px 0' : '0',
              marginLeft: idx > 0 ? '-1px' : '0',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.5 : 1,
              transition: animated ? 'all 150ms ease-in-out' : 'none',
              outline: 'none', fontFamily: 'inherit', position: 'relative',
              zIndex: isActive ? 1 : 0,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export { ToggleGroup };
export default ToggleGroup;
