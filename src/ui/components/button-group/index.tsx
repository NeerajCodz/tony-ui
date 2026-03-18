/**
 * Button Group Component
 */
import React from 'react';
import type { ButtonGroupProps } from '../../types/components/misc.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, children, orientation = 'horizontal',
  className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const isAttached = version === 'attached';

  return (
    <div className={`ui-button-group ui-button-group-${version} ${className}`}
      role="group"
      style={{
        display: 'inline-flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: isAttached ? '0' : '4px',
      }}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        if (!isAttached) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          style: {
            ...(child as React.ReactElement<any>).props.style,
            borderRadius: orientation === 'horizontal'
              ? idx === 0 ? '6px 0 0 6px' : idx === React.Children.count(children) - 1 ? '0 6px 6px 0' : '0'
              : idx === 0 ? '6px 6px 0 0' : idx === React.Children.count(children) - 1 ? '0 0 6px 6px' : '0',
            marginLeft: orientation === 'horizontal' && idx > 0 ? '-1px' : undefined,
            marginTop: orientation === 'vertical' && idx > 0 ? '-1px' : undefined,
          },
        });
      })}
    </div>
  );
};

export { ButtonGroup };
export default ButtonGroup;
