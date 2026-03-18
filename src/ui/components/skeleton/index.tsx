/**
 * Skeleton Component
 */
import React from 'react';
import type { SkeletonProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Skeleton: React.FC<SkeletonProps> = ({
  version = 'default',
  variant = 'neutral',
  colorType = 'primary',
  animated = true,
  width = '100%',
  height = '16px',
  className = '',
  count = 1,
}) => {
  const activeColor = resolveColorType(variant, colorType);

  const baseStyle: React.CSSProperties = {
    backgroundColor: getColorVar(activeColor, 'border'),
    borderRadius: version === 'circle' ? '50%' : '6px',
    animation: animated ? 'ui-skeleton-pulse 1.5s ease-in-out infinite' : 'none',
    opacity: 0.3,
  };

  if (version === 'card') {
    return (
      <div className={`ui-skeleton ui-skeleton-card ${className}`} style={{
        border: `1px solid ${getColorVar(activeColor, 'border')}`,
        borderRadius: '8px',
        padding: '16px',
        width,
      }}>
        <div style={{ ...baseStyle, width: '40%', height: '14px', marginBottom: '12px' }} />
        <div style={{ ...baseStyle, width: '100%', height: '10px', marginBottom: '8px' }} />
        <div style={{ ...baseStyle, width: '80%', height: '10px', marginBottom: '8px' }} />
        <div style={{ ...baseStyle, width: '60%', height: '10px' }} />
        <style>{`@keyframes ui-skeleton-pulse { 0% { opacity: 0.3; } 50% { opacity: 0.15; } 100% { opacity: 0.3; } }`}</style>
      </div>
    );
  }

  return (
    <div className={`ui-skeleton ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          ...baseStyle,
          width: version === 'circle' ? height : width,
          height,
          marginBottom: i < count - 1 ? '8px' : 0,
        }} />
      ))}
      <style>{`@keyframes ui-skeleton-pulse { 0% { opacity: 0.3; } 50% { opacity: 0.15; } 100% { opacity: 0.3; } }`}</style>
    </div>
  );
};

export { Skeleton };
export default Skeleton;
