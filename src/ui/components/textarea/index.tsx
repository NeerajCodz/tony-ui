/**
 * Textarea Component
 */
import React, { useState } from 'react';
import type { TextareaProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';
import '../../styles/inputs.css';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  size = 'md',
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  readOnly = false,
  rows = 4,
  className = '',
  'aria-label': ariaLabel,
  id,
  name,
}, ref) => {
  const [focused, setFocused] = useState(false);
  const activeColor = resolveColorType(variant, colorType);

  const sizeMap: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 10px', fontSize: '12px' },
    md: { padding: '8px 12px', fontSize: '14px' },
    lg: { padding: '10px 16px', fontSize: '16px' },
  };

  const style: React.CSSProperties = {
    ...sizeMap[size],
    border: `1px solid ${getColorVar(activeColor, focused ? 'ring' : 'border')}`,
    backgroundColor: version === 'ghost' ? 'transparent' : getColorVar(activeColor, 'background'),
    borderRadius: version === 'underline' ? '0' : '6px',
    color: getColorVar(activeColor, 'foreground'),
    outline: 'none',
    width: '100%',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    boxSizing: 'border-box',
  };

  return (
    <textarea
      ref={ref}
      id={id}
      name={name}
      className={`ui-textarea ui-textarea-${version} ${className}`}
      style={style}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      disabled={disabled}
      readOnly={readOnly}
      rows={rows}
      aria-label={ariaLabel}
      data-version={version}
      data-variant={variant}
    />
  );
});

Textarea.displayName = 'Textarea';
export { Textarea };
export default Textarea;
