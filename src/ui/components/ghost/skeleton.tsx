/**
 * Skeleton - Ghost Version
 * Loading placeholder with ghost styling
 */

import React from 'react';
import type { Variant, VariantColors } from '../../types/common';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  animated?: boolean;
}

const VARIANT_COLORS: Record<Variant, VariantColors> = {
  default: { base: 'rgba(100, 116, 139, 0.3)', foreground: '#94a3b8', border: 'rgba(100, 116, 139, 0.4)', glow: 'rgba(100, 116, 139, 0.2)' },
  info: { base: 'rgba(56, 189, 248, 0.2)', foreground: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)', glow: 'rgba(56, 189, 248, 0.15)' },
  success: { base: 'rgba(34, 197, 94, 0.2)', foreground: '#22c55e', border: 'rgba(34, 197, 94, 0.3)', glow: 'rgba(34, 197, 94, 0.15)' },
  warning: { base: 'rgba(245, 158, 11, 0.2)', foreground: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)', glow: 'rgba(245, 158, 11, 0.15)' },
  destructive: { base: 'rgba(239, 68, 68, 0.2)', foreground: '#ef4444', border: 'rgba(239, 68, 68, 0.3)', glow: 'rgba(239, 68, 68, 0.15)' },
  primary: { base: 'rgba(99, 102, 241, 0.2)', foreground: '#6366f1', border: 'rgba(99, 102, 241, 0.3)', glow: 'rgba(99, 102, 241, 0.15)' },
  secondary: { base: 'rgba(100, 116, 139, 0.25)', foreground: '#64748b', border: 'rgba(100, 116, 139, 0.35)', glow: 'rgba(100, 116, 139, 0.18)' },
  accent: { base: 'rgba(236, 72, 153, 0.2)', foreground: '#ec4899', border: 'rgba(236, 72, 153, 0.3)', glow: 'rgba(236, 72, 153, 0.15)' },
  neutral: { base: 'rgba(115, 115, 115, 0.25)', foreground: '#737373', border: 'rgba(115, 115, 115, 0.35)', glow: 'rgba(115, 115, 115, 0.18)' },
  inverse: { base: 'rgba(255, 255, 255, 0.15)', foreground: '#ffffff', border: 'rgba(255, 255, 255, 0.25)', glow: 'rgba(255, 255, 255, 0.1)' },
  'danger-soft': { base: 'rgba(239, 68, 68, 0.1)', foreground: '#ef4444', border: 'rgba(239, 68, 68, 0.2)', glow: 'rgba(239, 68, 68, 0.08)' },
  'warning-soft': { base: 'rgba(245, 158, 11, 0.1)', foreground: '#f59e0b', border: 'rgba(245, 158, 11, 0.2)', glow: 'rgba(245, 158, 11, 0.08)' },
  'success-soft': { base: 'rgba(34, 197, 94, 0.1)', foreground: '#22c55e', border: 'rgba(34, 197, 94, 0.2)', glow: 'rgba(34, 197, 94, 0.08)' },
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'default',
  animated = true,
  className = '',
  style,
  ...props
}) => {
  const colors = VARIANT_COLORS[variant] || VARIANT_COLORS.default;

  const styles: React.CSSProperties = {
    background: `linear-gradient(135deg, ${colors.base} 0%, ${colors.glow} 50%, ${colors.base} 100%)`,
    backgroundSize: '200% 200%',
    border: `1px solid ${colors.border}`,
    borderRadius: '6px',
    position: 'relative',
    opacity: 0.5,
    ...(animated && {
      animation: 'skeleton-pulse 1.5s ease-in-out infinite',
    }),
    ...style,
  };

  return (
    <>
      {animated && (
        <style>{`
          @keyframes skeleton-pulse {
            0%, 100% { background-position: 0% 50%; opacity: 0.5; }
            50% { background-position: 100% 50%; opacity: 0.8; }
          }
        `}</style>
      )}
      <div
        className={`w-full h-4 ${className}`}
        style={styles}
        {...props}
      />
    </>
  );
};

Skeleton.displayName = 'GhostSkeleton';

export default Skeleton;
