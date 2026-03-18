/**
 * Alert Dialog Component
 */
import React from 'react';
import type { AlertDialogProps } from '../../types/components/overlay.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const AlertDialog: React.FC<AlertDialogProps> = ({
  version = 'default',
  type: styleType = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  open = false,
  onOpenChange,
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const isDestructive = version === 'destructive' || variant === 'destructive';

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} />
      <div
        className={`ui-alert-dialog ${className}`}
        role="alertdialog"
        aria-modal="true"
        style={{
          position: 'relative', width: '90%', maxWidth: '420px',
          border: `1px solid ${getColorVar(activeColor, 'border')}`,
          backgroundColor: getColorVar(activeColor, 'background'),
          borderRadius: '12px', padding: '24px',
          color: getColorVar(activeColor, 'foreground'),
          boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
          animation: animated ? 'ui-dialog-in 200ms ease-out' : 'none',
        }}
      >
        {title && <h2 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: '600' }}>{title}</h2>}
        {description && <p style={{ margin: '0 0 20px', fontSize: '13px', opacity: 0.8 }}>{description}</p>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button onClick={() => { onCancel?.(); onOpenChange?.(false); }} style={{
            padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '500',
            border: `1px solid ${getColorVar(activeColor, 'border')}`, backgroundColor: 'transparent',
            color: getColorVar(activeColor, 'foreground'), cursor: 'pointer', fontFamily: 'inherit',
          }}>{cancelLabel}</button>
          <button onClick={() => { onConfirm?.(); onOpenChange?.(false); }} style={{
            padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', border: 'none',
            backgroundColor: isDestructive ? getColorVar('destructive', 'base') : getColorVar(activeColor, 'base'),
            color: isDestructive ? getColorVar('destructive', 'foreground') : getColorVar(activeColor, 'foreground'),
            cursor: 'pointer', fontFamily: 'inherit',
          }}>{confirmLabel}</button>
        </div>
      </div>
      <style>{`@keyframes ui-dialog-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
};

export { AlertDialog };
export default AlertDialog;
