/**
 * Progress Component
 */
import React from 'react';
import type { ProgressProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({
  version = 'default',
  type: styleType = 'default',
  variant = 'primary',
  colorType = 'primary',
  animated = true,
  value = 0,
  max = 100,
  showLabel = false,
  size = 'md',
  className = '',
}, ref) => {
  const activeColor = resolveColorType(variant, colorType);
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeMap: Record<string, number> = { sm: 4, md: 8, lg: 12 };
  const barHeight = sizeMap[size] || 8;

  if (version === 'circle') {
    const circleSize = size === 'sm' ? 48 : size === 'lg' ? 80 : 64;
    const strokeWidth = 4;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div ref={ref} className={`ui-progress ui-progress-circle ${className}`} style={{ position: 'relative', width: circleSize, height: circleSize }}>
        <svg width={circleSize} height={circleSize} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={circleSize / 2} cy={circleSize / 2} r={radius} fill="none"
            stroke={getColorVar(activeColor, 'border')} strokeWidth={strokeWidth} />
          <circle cx={circleSize / 2} cy={circleSize / 2} r={radius} fill="none"
            stroke={getColorVar(activeColor, 'base')} strokeWidth={strokeWidth}
            strokeDasharray={circumference} strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: animated ? 'stroke-dashoffset 500ms ease-in-out' : 'none' }} />
        </svg>
        {showLabel && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: size === 'sm' ? '10px' : '12px', fontWeight: '600', color: getColorVar(activeColor, 'foreground'),
          }}>
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={`ui-progress ui-progress-${version} ${className}`} data-version={version} data-variant={variant}>
      <div style={{
        width: '100%',
        height: barHeight,
        borderRadius: barHeight,
        backgroundColor: getColorVar(activeColor, 'border'),
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          borderRadius: barHeight,
          backgroundColor: getColorVar(activeColor, 'base'),
          transition: animated ? 'width 500ms ease-in-out' : 'none',
          background: version === 'gradient'
            ? `linear-gradient(90deg, ${getColorVar(activeColor, 'base')}, ${getColorVar(activeColor, 'ring')})`
            : undefined,
        }} />
      </div>
      {showLabel && (
        <div style={{
          fontSize: '12px', fontWeight: '500', marginTop: '4px',
          color: getColorVar(activeColor, 'foreground'), textAlign: 'right',
        }}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
});

Progress.displayName = 'Progress';
export { Progress };
export default Progress;
