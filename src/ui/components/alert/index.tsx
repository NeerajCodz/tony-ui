/**
 * Alert Component
 */
import React from 'react';
import type { AlertProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'info',
  colorType = 'primary',
  animated = true,
  title,
  children,
  onClose,
  closable = false,
  className = '',
  icon,
}, ref) => {
  const activeColor = resolveColorType(variant, colorType);

  const versionStyles: Record<string, React.CSSProperties> = {
    default: {
      border: `1px solid ${getColorVar(activeColor, 'border')}`,
      backgroundColor: getColorVar(activeColor, 'background'),
      borderRadius: '8px',
    },
    filled: {
      border: 'none',
      backgroundColor: getColorVar(activeColor, 'base'),
      borderRadius: '8px',
    },
    outlined: {
      border: `2px solid ${getColorVar(activeColor, 'border')}`,
      backgroundColor: 'transparent',
      borderRadius: '8px',
    },
    accent: {
      border: 'none',
      borderLeft: `4px solid ${getColorVar(activeColor, 'base')}`,
      backgroundColor: getColorVar(activeColor, 'background'),
      borderRadius: '0 8px 8px 0',
    },
  };

  return (
    <div
      ref={ref}
      role="alert"
      className={`ui-alert ui-alert-${version} ${className}`}
      style={{
        ...versionStyles[version],
        padding: '12px 16px',
        color: getColorVar(activeColor, 'foreground'),
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        position: 'relative',
        transition: animated ? 'all 200ms ease-in-out' : 'none',
      }}
      data-version={version}
      data-variant={variant}
    >
      {icon && <div style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</div>}
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: children ? '4px' : 0 }}>
            {title}
          </div>
        )}
        {children && <div style={{ fontSize: '13px', opacity: 0.9 }}>{children}</div>}
      </div>
      {closable && onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '0',
            lineHeight: 1,
            opacity: 0.6,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';
export { Alert };
export default Alert;
