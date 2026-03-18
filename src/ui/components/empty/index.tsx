/**
 * Empty State Component
 */
import React from 'react';
import type { EmptyProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Empty: React.FC<EmptyProps> = ({
  version = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  title = 'No data',
  description,
  children,
  className = '',
  icon,
}) => {
  const activeColor = resolveColorType(variant, colorType);

  return (
    <div
      className={`ui-empty ui-empty-${version} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: version === 'compact' ? '24px' : '48px',
        textAlign: 'center',
      }}
      data-version={version}
    >
      {icon && (
        <div style={{
          marginBottom: '16px',
          color: getColorVar(activeColor, 'border'),
          fontSize: '48px',
          opacity: 0.5,
        }}>
          {icon}
        </div>
      )}
      {!icon && version === 'illustrated' && (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ marginBottom: '16px', opacity: 0.3 }}>
          <rect x="10" y="20" width="60" height="40" rx="4" stroke={getColorVar(activeColor, 'border')} strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="40" cy="40" r="8" stroke={getColorVar(activeColor, 'border')} strokeWidth="2" />
          <line x1="35" y1="35" x2="45" y2="45" stroke={getColorVar(activeColor, 'border')} strokeWidth="2" />
        </svg>
      )}
      <div style={{
        fontSize: '16px', fontWeight: '600', marginBottom: '8px',
        color: getColorVar(activeColor, 'foreground'),
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '13px', opacity: 0.6, maxWidth: '300px',
          color: getColorVar(activeColor, 'foreground'),
        }}>
          {description}
        </div>
      )}
      {children && <div style={{ marginTop: '16px' }}>{children}</div>}
    </div>
  );
};

export { Empty };
export default Empty;
