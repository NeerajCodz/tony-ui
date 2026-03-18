/**
 * Select Component
 */
import React, { useState, useRef, useEffect } from 'react';
import type { SelectProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Select = React.forwardRef<HTMLDivElement, SelectProps>(({
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
  placeholder = 'Select...',
  className = '',
  id,
  name,
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const activeColor = resolveColorType(variant, colorType);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.value === currentValue);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleSelect = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`ui-select ui-select-${version} ${className}`}
      style={{ position: 'relative', width: '100%' }}
      data-version={version}
      data-variant={variant}
    >
      <button
        type="button"
        id={id}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '14px',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: `1px solid ${getColorVar(activeColor, isOpen ? 'ring' : 'border')}`,
          borderRadius: version === 'underline' ? '0' : '6px',
          backgroundColor: version === 'ghost' ? 'transparent' : getColorVar(activeColor, 'background'),
          color: selectedOption ? getColorVar(activeColor, 'foreground') : getColorVar(activeColor, 'border'),
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: animated ? 'all 200ms ease-in-out' : 'none',
          outline: 'none',
          fontFamily: 'inherit',
          boxSizing: 'border-box',
        }}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: animated ? 'transform 200ms' : 'none',
        }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '4px',
          border: `1px solid ${getColorVar(activeColor, 'border')}`,
          borderRadius: '6px',
          backgroundColor: getColorVar(activeColor, 'background'),
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 50,
          overflow: 'hidden',
          maxHeight: '200px',
          overflowY: 'auto',
        }}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => !option.disabled && handleSelect(option.value)}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                color: getColorVar(activeColor, 'foreground'),
                backgroundColor: currentValue === option.value ? getColorVar(activeColor, 'active') : 'transparent',
                cursor: option.disabled ? 'not-allowed' : 'pointer',
                opacity: option.disabled ? 0.5 : 1,
                transition: animated ? 'background-color 100ms' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!option.disabled) {
                  (e.target as HTMLElement).style.backgroundColor = getColorVar(activeColor, 'hover');
                }
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  currentValue === option.value ? getColorVar(activeColor, 'active') : 'transparent';
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';
export { Select };
export default Select;
