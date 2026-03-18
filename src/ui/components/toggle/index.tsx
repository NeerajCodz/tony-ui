/**
 * Toggle Component
 */
import React, { useState } from 'react';
import type { ToggleProps } from '../../types/components/misc.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, pressed: controlledPressed,
  defaultPressed = false, onPressedChange, disabled = false,
  children, className = '', size = 'md',
}, ref) => {
  const [internalPressed, setInternalPressed] = useState(defaultPressed);
  const isPressed = controlledPressed !== undefined ? controlledPressed : internalPressed;
  const activeColor = resolveColorType(variant, colorType);

  const handleClick = () => {
    if (disabled) return;
    const next = !isPressed;
    setInternalPressed(next);
    onPressedChange?.(next);
  };

  const sizeMap: Record<string, React.CSSProperties> = {
    sm: { padding: '4px 8px', fontSize: '12px' },
    md: { padding: '6px 12px', fontSize: '13px' },
    lg: { padding: '8px 16px', fontSize: '14px' },
  };

  const versionStyles: Record<string, React.CSSProperties> = {
    default: {
      border: `1px solid ${getColorVar(activeColor, isPressed ? 'base' : 'border')}`,
      backgroundColor: isPressed ? getColorVar(activeColor, 'background') : 'transparent',
    },
    outlined: {
      border: `2px solid ${getColorVar(activeColor, isPressed ? 'base' : 'border')}`,
      backgroundColor: 'transparent',
    },
    filled: {
      border: 'none',
      backgroundColor: isPressed ? getColorVar(activeColor, 'base') : getColorVar(activeColor, 'border'),
    },
  };

  return (
    <button ref={ref} type="button" role="switch" aria-pressed={isPressed}
      className={`ui-toggle ui-toggle-${version} ${className}`}
      onClick={handleClick} disabled={disabled}
      style={{
        ...sizeMap[size], ...versionStyles[version],
        color: getColorVar(activeColor, 'foreground'),
        borderRadius: '6px', fontWeight: '500', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, transition: animated ? 'all 150ms ease-in-out' : 'none',
        outline: 'none', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '6px',
      }}
      data-version={version} data-variant={variant} data-pressed={isPressed}
    >
      {children}
    </button>
  );
});

Toggle.displayName = 'Toggle';
export { Toggle };
export default Toggle;
