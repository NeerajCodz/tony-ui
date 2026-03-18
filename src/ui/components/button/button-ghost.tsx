/**
 * Button Ghost Version Component
 * Invisible until hover
 * Source: types/components/button.ts ButtonVersion 'ghost'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const GhostButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'ghost',
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
    border: `1px solid transparent`,
    backgroundColor: 'transparent',
    color: `${getColorVar(activeColorType, 'foreground')}`,
    padding: '10px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 150ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`btn btn-ghost btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} data-version={version}>
      {children}
    </button>
  );
});

GhostButton.displayName = 'GhostButton';
export default GhostButton;
