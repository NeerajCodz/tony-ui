/**
 * Badge Component
 */
import React from 'react';
import type { BadgeProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  children,
  className = '',
}, ref) => {
  const activeColor = resolveColorType(variant, colorType);

  const versionStyles: Record<string, React.CSSProperties> = {
    default: { borderRadius: '4px', padding: '2px 8px' },
    pill: { borderRadius: '999px', padding: '2px 10px' },
    dot: { borderRadius: '4px', padding: '2px 8px', paddingLeft: '20px', position: 'relative' as const },
    outline: { borderRadius: '4px', padding: '2px 8px' },
  };

  const typeStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: getColorVar(activeColor, 'background'),
      border: `1px solid ${getColorVar(activeColor, 'border')}`,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${getColorVar(activeColor, 'border')}`,
    },
    solid: {
      backgroundColor: getColorVar(activeColor, 'base'),
      border: 'none',
    },
  };

  return (
    <span
      ref={ref}
      className={`ui-badge ui-badge-${version} ${className}`}
      style={{
        ...versionStyles[version],
        ...typeStyles[styleType || 'default'],
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.02em',
        color: getColorVar(activeColor, 'foreground'),
        transition: animated ? 'all 150ms ease-in-out' : 'none',
        whiteSpace: 'nowrap',
        lineHeight: '1.5',
      }}
      data-version={version}
      data-variant={variant}
    >
      {version === 'dot' && (
        <span style={{
          position: 'absolute',
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: getColorVar(activeColor, 'base'),
        }} />
      )}
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
export { Badge };
export default Badge;
