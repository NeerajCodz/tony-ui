/**
 * Tabs Component
 */
import React, { useState } from 'react';
import type { TabsProps } from '../../types/components/navigation.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Tabs: React.FC<TabsProps> = ({
  version = 'default', type: styleType = 'default', variant = 'primary',
  colorType = 'primary', animated = true, items, value: controlledValue,
  defaultValue, onValueChange, orientation = 'horizontal', className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || (items[0]?.value ?? ''));
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const activeColor = resolveColorType(variant, colorType);

  const handleSelect = (val: string) => { setInternalValue(val); onValueChange?.(val); };
  const activeItem = items.find(i => i.value === currentValue);

  const tabListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap: version === 'pills' ? '4px' : '0',
    borderBottom: version === 'underline' || version === 'default' ? `1px solid ${getColorVar(activeColor, 'border')}` : 'none',
    border: version === 'enclosed' ? `1px solid ${getColorVar(activeColor, 'border')}` : undefined,
    borderRadius: version === 'enclosed' ? '8px 8px 0 0' : undefined,
    overflow: 'hidden',
  };

  return (
    <div className={`ui-tabs ui-tabs-${version} ${className}`} data-version={version} data-variant={variant}>
      <div role="tablist" style={tabListStyle}>
        {items.map(item => {
          const isActive = item.value === currentValue;
          let tabStyle: React.CSSProperties = {
            padding: '8px 16px', fontSize: '13px', fontWeight: isActive ? '600' : '400',
            cursor: item.disabled ? 'not-allowed' : 'pointer', border: 'none', outline: 'none',
            transition: animated ? 'all 150ms ease-in-out' : 'none', fontFamily: 'inherit',
            opacity: item.disabled ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '6px',
            backgroundColor: 'transparent', color: getColorVar(activeColor, 'foreground'),
          };

          if (version === 'pills') {
            tabStyle.borderRadius = '6px';
            tabStyle.backgroundColor = isActive ? getColorVar(activeColor, 'base') : 'transparent';
          } else if (version === 'underline') {
            tabStyle.borderBottom = isActive ? `2px solid ${getColorVar(activeColor, 'base')}` : '2px solid transparent';
            tabStyle.marginBottom = '-1px';
          } else if (version === 'enclosed') {
            tabStyle.backgroundColor = isActive ? getColorVar(activeColor, 'background') : 'transparent';
            tabStyle.borderBottom = isActive ? `2px solid ${getColorVar(activeColor, 'base')}` : 'none';
          } else {
            tabStyle.borderBottom = isActive ? `2px solid ${getColorVar(activeColor, 'base')}` : '2px solid transparent';
            tabStyle.marginBottom = '-1px';
          }

          return (
            <button key={item.value} role="tab" type="button" aria-selected={isActive}
              onClick={() => !item.disabled && handleSelect(item.value)} disabled={item.disabled} style={tabStyle}>
              {item.icon}{item.label}
            </button>
          );
        })}
      </div>
      {activeItem?.content && (
        <div role="tabpanel" style={{ padding: '16px 0' }}>{activeItem.content}</div>
      )}
    </div>
  );
};

export { Tabs };
export default Tabs;
