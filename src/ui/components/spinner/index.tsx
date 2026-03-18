/**
 * Spinner Component
 */
import React from 'react';
import type { SpinnerProps } from '../../types/components/feedback.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Spinner: React.FC<SpinnerProps> = ({
  version = 'default',
  variant = 'primary',
  colorType = 'primary',
  animated = true,
  size = 'md',
  className = '',
  label,
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const sizeMap: Record<string, number> = { sm: 16, md: 24, lg: 36 };
  const s = sizeMap[size] || 24;

  if (version === 'dots') {
    return (
      <div className={`ui-spinner ui-spinner-dots ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: s / 3, height: s / 3, borderRadius: '50%',
            backgroundColor: getColorVar(activeColor, 'base'),
            animation: animated ? `ui-dot-bounce 1.2s ease-in-out infinite ${i * 0.16}s` : 'none',
          }} />
        ))}
        {label && <span style={{ fontSize: '13px', marginLeft: '8px', color: getColorVar(activeColor, 'foreground') }}>{label}</span>}
        <style>{`@keyframes ui-dot-bounce { 0%,80%,100% { transform: scale(0.6); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }`}</style>
      </div>
    );
  }

  if (version === 'bars') {
    return (
      <div className={`ui-spinner ui-spinner-bars ${className}`} style={{ display: 'inline-flex', alignItems: 'end', gap: '2px', height: s }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            width: s / 6, height: '60%', borderRadius: '2px',
            backgroundColor: getColorVar(activeColor, 'base'),
            animation: animated ? `ui-bar-scale 1s ease-in-out infinite ${i * 0.15}s` : 'none',
          }} />
        ))}
        {label && <span style={{ fontSize: '13px', marginLeft: '8px', color: getColorVar(activeColor, 'foreground') }}>{label}</span>}
        <style>{`@keyframes ui-bar-scale { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1.5); } }`}</style>
      </div>
    );
  }

  if (version === 'pulse') {
    return (
      <div className={`ui-spinner ui-spinner-pulse ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: s, height: s, borderRadius: '50%',
          backgroundColor: getColorVar(activeColor, 'base'),
          animation: animated ? 'ui-pulse 1.5s ease-in-out infinite' : 'none',
        }} />
        {label && <span style={{ fontSize: '13px', color: getColorVar(activeColor, 'foreground') }}>{label}</span>}
        <style>{`@keyframes ui-pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }`}</style>
      </div>
    );
  }

  // Default spinner (rotating ring)
  return (
    <div className={`ui-spinner ui-spinner-default ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ animation: animated ? 'ui-spinner-rotate 1s linear infinite' : 'none' }}>
        <circle cx={s / 2} cy={s / 2} r={s / 2 - 2} fill="none"
          stroke={getColorVar(activeColor, 'border')} strokeWidth="2" />
        <circle cx={s / 2} cy={s / 2} r={s / 2 - 2} fill="none"
          stroke={getColorVar(activeColor, 'base')} strokeWidth="2"
          strokeDasharray={`${Math.PI * (s - 4) * 0.75} ${Math.PI * (s - 4) * 0.25}`}
          strokeLinecap="round" />
      </svg>
      {label && <span style={{ fontSize: '13px', color: getColorVar(activeColor, 'foreground') }}>{label}</span>}
      <style>{`@keyframes ui-spinner-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export { Spinner };
export default Spinner;
