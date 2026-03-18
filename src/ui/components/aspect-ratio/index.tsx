/**
 * Aspect Ratio Component
 */
import React from 'react';
import type { AspectRatioProps } from '../../types/components/data-display.js';

const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9, children, className = '',
}) => {
  return (
    <div className={`ui-aspect-ratio ${className}`} style={{
      position: 'relative', width: '100%', paddingBottom: `${(1 / ratio) * 100}%`,
    }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};

export { AspectRatio };
export default AspectRatio;
