/**
 * Label Component
 */
import React from 'react';
import type { LabelProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  version = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  children,
  htmlFor,
  required,
  className = '',
}, ref) => {
  const activeColor = resolveColorType(variant, colorType);

  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={`ui-label ui-label-${version} ${className}`}
      style={{
        display: 'inline-block',
        fontSize: version === 'accent' ? '11px' : '13px',
        fontWeight: version === 'accent' ? '700' : '500',
        letterSpacing: version === 'accent' ? '0.05em' : undefined,
        textTransform: version === 'accent' ? 'uppercase' : undefined,
        color: getColorVar(activeColor, 'foreground'),
        cursor: 'pointer',
        transition: animated ? 'color 150ms ease-in-out' : 'none',
      }}
    >
      {children}
      {required && <span style={{ color: getColorVar('destructive', 'base'), marginLeft: '4px' }}>*</span>}
    </label>
  );
});

Label.displayName = 'Label';
export { Label };
export default Label;
