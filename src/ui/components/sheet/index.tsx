/**
 * Sheet Component (Side panel overlay)
 */
import React, { useEffect, useCallback } from 'react';
import type { SheetProps } from '../../types/components/overlay.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Sheet: React.FC<SheetProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, open = false, onOpenChange,
  side = 'right', title, children, className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const handleClose = useCallback(() => onOpenChange?.(false), [onOpenChange]);

  useEffect(() => {
    if (open) {
      const h = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
      document.addEventListener('keydown', h);
      return () => document.removeEventListener('keydown', h);
    }
  }, [open, handleClose]);

  if (!open) return null;

  const sideStyles: Record<string, React.CSSProperties> = {
    left: { left: 0, top: 0, bottom: 0, width: '320px' },
    right: { right: 0, top: 0, bottom: 0, width: '320px' },
    top: { top: 0, left: 0, right: 0, height: '280px' },
    bottom: { bottom: 0, left: 0, right: 0, height: '280px' },
  };

  const slideKeyframes: Record<string, string> = {
    left: 'from { transform: translateX(-100%); } to { transform: translateX(0); }',
    right: 'from { transform: translateX(100%); } to { transform: translateX(0); }',
    top: 'from { transform: translateY(-100%); } to { transform: translateY(0); }',
    bottom: 'from { transform: translateY(100%); } to { transform: translateY(0); }',
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 998 }}>
      <div onClick={handleClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
      <div className={`ui-sheet ui-sheet-${side} ${className}`} style={{
        position: 'absolute', ...sideStyles[side],
        backgroundColor: getColorVar(activeColor, 'background'),
        borderColor: getColorVar(activeColor, 'border'),
        color: getColorVar(activeColor, 'foreground'),
        padding: version === 'padded' ? '32px' : '20px',
        boxShadow: '0 0 32px rgba(0,0,0,0.3)',
        overflowY: 'auto',
        animation: animated ? `ui-sheet-slide-${side} 250ms ease-out` : 'none',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          {title && <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{title}</h3>}
          <button onClick={handleClose} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '20px', opacity: 0.6, padding: '4px' }}>×</button>
        </div>
        {children}
      </div>
      <style>{`@keyframes ui-sheet-slide-${side} { ${slideKeyframes[side]} }`}</style>
    </div>
  );
};

export { Sheet };
export default Sheet;
