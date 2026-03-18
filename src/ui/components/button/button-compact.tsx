/**
 * Button Compact Version Component
 * Small compact button for tight spaces
 * Source: types/components/button.ts ButtonVersion 'compact'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const CompactButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'compact',
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
    padding: '6px 12px',
    fontSize: '12px',
    borderRadius: '4px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 100ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`btn btn-compact btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} data-version={version}>
      {children}
    </button>
  );
});

CompactButton.displayName = 'CompactButton';
export default CompactButton;
