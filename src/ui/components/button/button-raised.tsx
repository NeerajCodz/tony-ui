/**
 * Button Raised Version Component
 * Elevated button with shadow effect
 * Source: types/components/button.ts ButtonVersion 'raised'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const RaisedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'raised',
  type: buttonType = 'default',
  variant = 'primary',
  colorType = 'primary',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  htmlType = 'button',
}, ref) => {
  const variantColorMap: Record<string, string> = { primary: 'primary', neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive' };
  const activeColorType = variantColorMap[variant] || colorType;

  const buttonStyle: React.CSSProperties = {
    border: 'none',
    backgroundColor: `${getColorVar(activeColorType, 'base')}`,
    color: `${getColorVar(activeColorType, 'foreground')}`,
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '6px',
    fontWeight: '600',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`btn btn-raised btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} data-version={version}>
      {children}
    </button>
  );
});

RaisedButton.displayName = 'RaisedButton';
export default RaisedButton;
