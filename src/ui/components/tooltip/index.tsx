/**
 * Tooltip Component
 */
import React, { useState, useRef } from 'react';
import type { TooltipProps } from '../../types/components/overlay.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Tooltip: React.FC<TooltipProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, content, children, side = 'top',
  delay = 200, className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const activeColor = resolveColorType(variant, colorType);

  const show = () => { timerRef.current = setTimeout(() => setVisible(true), delay); };
  const hide = () => { clearTimeout(timerRef.current); setVisible(false); };

  const posStyles: Record<string, React.CSSProperties> = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '6px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '6px' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '6px' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '6px' },
  };

  return (
    <div
      className={`ui-tooltip-wrapper ${className}`}
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          className="ui-tooltip"
          role="tooltip"
          style={{
            position: 'absolute', ...posStyles[side],
            padding: '6px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '500',
            whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 999,
            backgroundColor: getColorVar(activeColor, 'base'),
            color: getColorVar(activeColor, 'foreground'),
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            animation: animated ? 'ui-tooltip-fade 150ms ease-out' : 'none',
          }}
        >
          {content}
        </div>
      )}
      <style>{`@keyframes ui-tooltip-fade { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
};

export { Tooltip };
export default Tooltip;
