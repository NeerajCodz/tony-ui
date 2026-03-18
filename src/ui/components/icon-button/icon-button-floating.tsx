/**
 * Icon Button Floating Version Component
 * Floating action button with large shadow
 * Source: types/components/button.ts IconButtonVersion 'floating'
 */

import React from 'react';
import type { IconButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const FloatingIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  version = 'floating',
  type: buttonType = 'solid',
  variant = 'primary',
  colorType = 'primary',
  animated = true,
  icon,
  disabled = false,
  onClick,
  htmlType = 'button',
  label,
  className = '',
}, ref) => {
  const variantColorMap: Record<string, string> = { primary: 'primary', neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive' };
  const activeColorType = variantColorMap[variant] || colorType;

  const buttonStyle: React.CSSProperties = {
    border: 'none',
    backgroundColor: `${getColorVar(activeColorType, 'base')}`,
    color: `${getColorVar(activeColorType, 'foreground')}`,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`icon-btn icon-btn-floating icon-btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} aria-label={label} data-version={version}>
      {icon}
    </button>
  );
});

FloatingIconButton.displayName = 'FloatingIconButton';
export default FloatingIconButton;
