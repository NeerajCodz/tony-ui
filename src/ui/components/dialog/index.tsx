/**
 * Dialog Component
 */
import React, { useEffect, useCallback } from 'react';
import type { DialogProps } from '../../types/components/overlay.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Dialog: React.FC<DialogProps> = ({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  open = false,
  onOpenChange,
  title,
  description,
  children,
  className = '',
  showClose = true,
}) => {
  const activeColor = resolveColorType(variant, colorType);

  const handleClose = useCallback(() => {
    onOpenChange?.(false);
  }, [onOpenChange]);

  useEffect(() => {
    if (open) {
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [open, handleClose]);

  if (!open) return null;

  const isFullscreen = version === 'fullscreen';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      display: 'flex', alignItems: isFullscreen ? 'stretch' : 'center', justifyContent: 'center',
    }}>
      <div onClick={handleClose} style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
      }} />
      <div
        className={`ui-dialog ui-dialog-${version} ${className}`}
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width: isFullscreen ? '100%' : '90%',
          maxWidth: isFullscreen ? '100%' : '480px',
          height: isFullscreen ? '100%' : 'auto',
          maxHeight: isFullscreen ? '100%' : '85vh',
          border: `1px solid ${getColorVar(activeColor, 'border')}`,
          backgroundColor: getColorVar(activeColor, 'background'),
          borderRadius: isFullscreen ? '0' : '12px',
          padding: '24px',
          color: getColorVar(activeColor, 'foreground'),
          boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
          overflowY: 'auto',
          animation: animated ? 'ui-dialog-in 200ms ease-out' : 'none',
        }}
        data-version={version}
        data-variant={variant}
      >
        {showClose && (
          <button onClick={handleClose} style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'none', border: 'none', color: 'inherit',
            cursor: 'pointer', fontSize: '20px', opacity: 0.6, lineHeight: 1, padding: '4px',
          }}>×</button>
        )}
        {title && <h2 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: '600' }}>{title}</h2>}
        {description && <p style={{ margin: '0 0 16px', fontSize: '13px', opacity: 0.7 }}>{description}</p>}
        {children}
      </div>
      <style>{`@keyframes ui-dialog-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
};

export { Dialog };
export default Dialog;
