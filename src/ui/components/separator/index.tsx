/**
 * Separator Component
 */
import React from 'react';
import type { SeparatorProps } from '../../types/components/layout.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Separator: React.FC<SeparatorProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, orientation = 'horizontal',
  className = '', label,
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const isVertical = orientation === 'vertical';

  if (label) {
    return (
      <div className={`ui-separator ${className}`} style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        margin: '16px 0',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: getColorVar(activeColor, 'border'),
          backgroundImage: version === 'gradient' ? `linear-gradient(to right, transparent, ${getColorVar(activeColor, 'border')}, transparent)` : undefined,
          borderStyle: version === 'dashed' ? 'dashed' : undefined,
        }} />
        <span style={{ fontSize: '11px', fontWeight: '500', color: getColorVar(activeColor, 'border'), whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: getColorVar(activeColor, 'border'),
          backgroundImage: version === 'gradient' ? `linear-gradient(to right, transparent, ${getColorVar(activeColor, 'border')}, transparent)` : undefined,
        }} />
      </div>
    );
  }

  return (
    <div className={`ui-separator ui-separator-${version} ${className}`}
      role="separator" aria-orientation={orientation}
      style={{
        width: isVertical ? '1px' : '100%',
        height: isVertical ? '100%' : '1px',
        margin: isVertical ? '0 8px' : '16px 0',
        backgroundColor: version === 'gradient' ? undefined : getColorVar(activeColor, 'border'),
        backgroundImage: version === 'gradient' ? `linear-gradient(${isVertical ? 'to bottom' : 'to right'}, transparent, ${getColorVar(activeColor, 'border')}, transparent)` : undefined,
        borderStyle: version === 'dashed' ? 'dashed' : undefined,
        borderColor: version === 'dashed' ? getColorVar(activeColor, 'border') : undefined,
        borderWidth: version === 'dashed' ? (isVertical ? '0 0 0 1px' : '0 0 1px 0') : undefined,
        flexShrink: 0,
      }}
    />
  );
};

export { Separator };
export default Separator;
