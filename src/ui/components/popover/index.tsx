/**
 * Popover Component
 */
import React, { useState, useRef, useEffect } from 'react';
import type { PopoverProps } from '../../types/components/overlay.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Popover: React.FC<PopoverProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, open: controlledOpen, onOpenChange,
  trigger, children, side = 'bottom', className = '',
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const activeColor = resolveColorType(variant, colorType);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => { const next = !isOpen; setInternalOpen(next); onOpenChange?.(next); };

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setInternalOpen(false); onOpenChange?.(false);
      }
    };
    if (isOpen) { document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }
  }, [isOpen, onOpenChange]);

  const posStyles: Record<string, React.CSSProperties> = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' },
  };

  return (
    <div ref={containerRef} className={`ui-popover ${className}`} style={{ position: 'relative', display: 'inline-flex' }}>
      <div onClick={toggle} style={{ cursor: 'pointer' }}>{trigger}</div>
      {isOpen && (
        <div style={{
          position: 'absolute', ...posStyles[side], zIndex: 50,
          minWidth: '200px', padding: version === 'compact' ? '8px' : '16px',
          border: `1px solid ${getColorVar(activeColor, 'border')}`,
          backgroundColor: getColorVar(activeColor, 'background'),
          color: getColorVar(activeColor, 'foreground'),
          borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          animation: animated ? 'ui-popover-in 150ms ease-out' : 'none',
        }}>
          {children}
        </div>
      )}
      <style>{`@keyframes ui-popover-in { from { opacity: 0; transform: translateX(-50%) translateY(4px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }`}</style>
    </div>
  );
};

export { Popover };
export default Popover;
