/**
 * Icon Button Ghost Version Component
 * Invisible background with border on hover
 * Source: types/components/button.ts IconButtonVersion 'ghost'
 */

import React from 'react';
import type { IconButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const GhostIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  version = 'ghost',
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
    border: `1px solid transparent`,
    backgroundColor: 'transparent',
    color: `${getColorVar(activeColorType, 'foreground')}`,
    width: '40px',
    height: '40px',
    padding: '0',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 150ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`icon-btn icon-btn-ghost icon-btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} aria-label={label} data-version={version}>
      {icon}
    </button>
  );
});

GhostIconButton.displayName = 'GhostIconButton';
export default GhostIconButton;
