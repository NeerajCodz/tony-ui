/**
 * Accordion Component
 */
import React, { useState } from 'react';
import type { AccordionProps } from '../../types/components/layout.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Accordion: React.FC<AccordionProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, items, multiple = false,
  defaultValue = [], value: controlledValue, onValueChange, className = '',
}) => {
  const [internalOpen, setInternalOpen] = useState<string[]>(defaultValue);
  const openItems = controlledValue !== undefined ? controlledValue : internalOpen;
  const activeColor = resolveColorType(variant, colorType);

  const toggle = (val: string) => {
    let next: string[];
    if (openItems.includes(val)) {
      next = openItems.filter(v => v !== val);
    } else {
      next = multiple ? [...openItems, val] : [val];
    }
    setInternalOpen(next);
    onValueChange?.(next);
  };

  return (
    <div className={`ui-accordion ui-accordion-${version} ${className}`} data-version={version} data-variant={variant}>
      {items.map((item, idx) => {
        const isOpen = openItems.includes(item.value);
        const isSeparated = version === 'separated';

        return (
          <div key={item.value} style={{
            border: version === 'bordered' || isSeparated ? `1px solid ${getColorVar(activeColor, 'border')}` : 'none',
            borderBottom: version === 'default' ? `1px solid ${getColorVar(activeColor, 'border')}` : undefined,
            borderRadius: isSeparated ? '8px' : '0',
            marginBottom: isSeparated ? '8px' : '0',
            overflow: 'hidden',
          }}>
            <button
              type="button"
              onClick={() => !item.disabled && toggle(item.value)}
              disabled={item.disabled}
              style={{
                width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 16px', fontSize: '14px', fontWeight: '500', border: 'none', outline: 'none',
                backgroundColor: 'transparent', color: getColorVar(activeColor, 'foreground'),
                cursor: item.disabled ? 'not-allowed' : 'pointer', opacity: item.disabled ? 0.5 : 1,
                fontFamily: 'inherit', transition: animated ? 'all 150ms ease-in-out' : 'none',
              }}
            >
              <span>{item.title}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: animated ? 'transform 200ms ease-in-out' : 'none',
              }}>
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {isOpen && (
              <div style={{
                padding: '0 16px 16px', fontSize: '13px',
                color: getColorVar(activeColor, 'foreground'), opacity: 0.85,
                animation: animated ? 'ui-accordion-open 200ms ease-out' : 'none',
              }}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
      <style>{`@keyframes ui-accordion-open { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 500px; } }`}</style>
    </div>
  );
};

export { Accordion };
export default Accordion;
