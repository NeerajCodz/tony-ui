/**
 * Collapsible Component
 */
import React, { useState } from 'react';
import type { CollapsibleProps } from '../../types/components/layout.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Collapsible: React.FC<CollapsibleProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, open: controlledOpen,
  defaultOpen = false, onOpenChange, trigger, children, className = '',
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const activeColor = resolveColorType(variant, colorType);

  const toggle = () => { const next = !isOpen; setInternalOpen(next); onOpenChange?.(next); };

  return (
    <div className={`ui-collapsible ui-collapsible-${version} ${className}`}
      style={version === 'card' ? {
        border: `1px solid ${getColorVar(activeColor, 'border')}`,
        borderRadius: '8px', overflow: 'hidden',
      } : {}}
      data-version={version}>
      <div onClick={toggle} style={{ cursor: 'pointer', userSelect: 'none',
        padding: version === 'card' ? '12px 16px' : '0' }}>
        {trigger}
      </div>
      {isOpen && (
        <div style={{
          padding: version === 'card' ? '0 16px 16px' : '8px 0',
          animation: animated ? 'ui-collapsible-in 200ms ease-out' : 'none',
        }}>
          {children}
        </div>
      )}
      <style>{`@keyframes ui-collapsible-in { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
};

export { Collapsible };
export default Collapsible;
