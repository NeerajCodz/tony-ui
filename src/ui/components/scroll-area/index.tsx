/**
 * Scroll Area Component
 */
import React from 'react';
import type { ScrollAreaProps } from '../../types/components/layout.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const ScrollArea: React.FC<ScrollAreaProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, maxHeight = '300px',
  children, className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const scrollbarWidth = version === 'thin' ? '4px' : version === 'hidden' ? '0px' : '8px';

  return (
    <div className={`ui-scroll-area ui-scroll-area-${version} ${className}`}
      style={{ maxHeight, overflowY: 'auto', position: 'relative' }}>
      {children}
      <style>{`
        .ui-scroll-area::-webkit-scrollbar { width: ${scrollbarWidth}; }
        .ui-scroll-area::-webkit-scrollbar-track { background: transparent; }
        .ui-scroll-area::-webkit-scrollbar-thumb {
          background: ${getColorVar(activeColor, 'border')};
          border-radius: 4px;
        }
        .ui-scroll-area::-webkit-scrollbar-thumb:hover {
          background: ${getColorVar(activeColor, 'hover')};
        }
      `}</style>
    </div>
  );
};

export { ScrollArea };
export default ScrollArea;
