/**
 * Toast Component
 */
import React from 'react';
import type { ToastProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  title,
  description,
  onClose,
  duration,
  className = '',
  action,
}, ref) => {
  const activeColor = resolveColorType(variant, colorType);

  React.useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      ref={ref}
      className={`ui-toast ui-toast-${version} ${className}`}
      role="status"
      style={{
        padding: version === 'compact' ? '8px 12px' : '12px 16px',
        border: `1px solid ${getColorVar(activeColor, 'border')}`,
        backgroundColor: getColorVar(activeColor, 'background'),
        borderRadius: '8px',
        color: getColorVar(activeColor, 'foreground'),
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        maxWidth: '400px',
        transition: animated ? 'all 200ms ease-in-out' : 'none',
      }}
      data-version={version}
      data-variant={variant}
    >
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: description ? '2px' : 0 }}>{title}</div>}
        {description && <div style={{ fontSize: '13px', opacity: 0.8 }}>{description}</div>}
      </div>
      {action && <div>{action}</div>}
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', color: 'inherit', cursor: 'pointer',
          fontSize: '16px', padding: '0', opacity: 0.5, lineHeight: 1,
        }}>×</button>
      )}
    </div>
  );
});

Toast.displayName = 'Toast';
export { Toast };
export default Toast;
