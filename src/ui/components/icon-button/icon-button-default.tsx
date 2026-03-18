/**
 * Icon Button Default Version Component
 * Standard square icon button with rounded corners
 * Icons only - no text
 * Source: types/components/button.ts IconButtonVersion 'default'
 */

import React from 'react';
import type { IconButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const DefaultIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  version = 'default',
  type: buttonType = 'default',
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

  const typeStyles: Record<string, React.CSSProperties> = {
    'default': { border: `2px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: `${getColorVar(activeColorType, 'background')}` },
    'outline': { border: `2px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: 'transparent' },
    'solid': { border: 'none', backgroundColor: `${getColorVar(activeColorType, 'base')}` },
  };

  const buttonStyle: React.CSSProperties = {
    ...typeStyles[buttonType],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    width: '40px',
    height: '40px',
    padding: '0',
    borderRadius: '6px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: animated ? 'all 150ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`icon-btn icon-btn-default icon-btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} aria-label={label} data-version={version}>
      {icon}
    </button>
  );
});

DefaultIconButton.displayName = 'DefaultIconButton';
export default DefaultIconButton;
