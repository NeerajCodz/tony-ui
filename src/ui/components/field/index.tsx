/**
 * Field Component - Form field wrapper with label, description, error
 */
import React from 'react';
import type { FieldProps } from '../../types/components/inputs.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Field: React.FC<FieldProps> = ({
  version = 'default',
  variant = 'neutral',
  label,
  description,
  error,
  required,
  children,
  className = '',
  htmlFor,
}) => {
  const activeColor = resolveColorType(variant, 'primary');
  const isHorizontal = version === 'horizontal';

  return (
    <div
      className={`ui-field ui-field-${version} ${className}`}
      style={{
        display: isHorizontal ? 'flex' : 'block',
        gap: isHorizontal ? '16px' : undefined,
        alignItems: isHorizontal ? 'flex-start' : undefined,
        marginBottom: '16px',
      }}
    >
      {label && (
        <label
          htmlFor={htmlFor}
          style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '500',
            marginBottom: isHorizontal ? 0 : '6px',
            minWidth: isHorizontal ? '120px' : undefined,
            paddingTop: isHorizontal ? '8px' : undefined,
            color: getColorVar(activeColor, 'foreground'),
          }}
        >
          {label}
          {required && <span style={{ color: getColorVar('destructive', 'base'), marginLeft: '4px' }}>*</span>}
        </label>
      )}
      <div style={{ flex: 1 }}>
        {children}
        {description && !error && (
          <p style={{
            fontSize: '12px',
            marginTop: '4px',
            color: getColorVar(activeColor, 'border'),
            margin: '4px 0 0',
          }}>
            {description}
          </p>
        )}
        {error && (
          <p style={{
            fontSize: '12px',
            marginTop: '4px',
            color: getColorVar('destructive', 'base'),
            margin: '4px 0 0',
          }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export { Field };
export default Field;
