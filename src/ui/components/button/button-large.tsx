/**
 * Button Large Version Component
 * Large button for prominent actions
 * Source: types/components/button.ts ButtonVersion 'large'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const LargeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'large',
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
    'default': { border: `2px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: `${getColorVar(activeColorType, 'background')}` },
    'outline': { border: `2px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: 'transparent' },
    'solid': { border: 'none', backgroundColor: `${getColorVar(activeColorType, 'base')}` },
  };

  const buttonStyle: React.CSSProperties = {
    ...typeStyles[buttonType],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    padding: '16px 32px',
    fontSize: '16px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: animated ? 'all 200ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`btn btn-large btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} data-version={version}>
      {children}
    </button>
  );
});

LargeButton.displayName = 'LargeButton';
export default LargeButton;
