/**
 * Kbd (Keyboard) Component
 */
import React from 'react';
import type { KbdProps } from '../../types/components/misc.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Kbd: React.FC<KbdProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, children, className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);

  const versionStyles: Record<string, React.CSSProperties> = {
    default: {
      border: `1px solid ${getColorVar(activeColor, 'border')}`,
      backgroundColor: getColorVar(activeColor, 'background'),
      boxShadow: `0 1px 0 1px ${getColorVar(activeColor, 'border')}`,
      borderRadius: '4px',
    },
    ghost: {
      border: 'none', backgroundColor: 'transparent', borderRadius: '4px',
    },
    outlined: {
      border: `1px solid ${getColorVar(activeColor, 'border')}`,
      backgroundColor: 'transparent', borderRadius: '4px',
    },
  };

  return (
    <kbd className={`ui-kbd ${className}`} style={{
      ...versionStyles[version],
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '2px 6px', fontSize: '11px', fontWeight: '500',
      fontFamily: 'monospace', lineHeight: 1.4,
      color: getColorVar(activeColor, 'foreground'),
      minWidth: '20px', textAlign: 'center',
      transition: animated ? 'all 100ms ease-in-out' : 'none',
    }}>
      {children}
    </kbd>
  );
};

export { Kbd };
export default Kbd;
