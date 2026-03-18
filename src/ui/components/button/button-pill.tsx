/**
 * Button Pill Version Component
 * Fully rounded pill-shaped button
 * Source: types/components/button.ts ButtonVersion 'pill'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const PillButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'pill',
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

  const typeStyles: Record<string, React.CSSProperties> = {
    'default': { border: `1px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: `${getColorVar(activeColorType, 'background')}` },
    'outline': { border: `1px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: 'transparent' },
    'solid': { border: 'none', backgroundColor: `${getColorVar(activeColorType, 'base')}` },
  };

  const buttonStyle: React.CSSProperties = {
    ...typeStyles[buttonType],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    padding: '10px 24px',
    fontSize: '14px',
    borderRadius: '999px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 150ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`btn btn-pill btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} data-version={version}>
      {children}
    </button>
  );
});

PillButton.displayName = 'PillButton';
export default PillButton;
