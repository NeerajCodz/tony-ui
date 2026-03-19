/**
 * Card Component - data-panel
 * Auto-generated unique shape variant
 */
import React from 'react';
import type { CardProps } from '../../types/components/card.js';
import { cn } from '../../utils/component-helpers.js';

const Component = React.forwardRef<HTMLDivElement, CardProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
    };

    switch (type) {
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: `2px solid var(--${color})`,
          boxShadow: `0 0 20px rgba(var(--${color}-rgb), 0.3)`,
        };
      case 'solid':
        return {
          ...base,
          backgroundColor: `rgba(var(--card-bg-rgb), 0.92)`,
          border: `1px solid rgba(var(--${color}-rgb), 0.5)`,
          boxShadow: `0 8px 32px rgba(var(--${color}-rgb), 0.2)`,
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: `rgba(var(--primary-rgb), 0.08)`,
          backdropFilter: 'blur(12px)',
          border: `1px solid rgba(var(--${color}-rgb), 0.3)`,
          boxShadow: `0 4px 24px rgba(var(--${color}-rgb), 0.15)`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative group transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:scale-[1.02]' : 'hover:scale-[1.01]',
        className
      )}
      onClick={disabled ? undefined : onClick}
      style={getTypeStyles()}
      {...props}
    >
      {/* Hover glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: `radial-gradient(ellipse at center, rgba(var(--${color}-rgb), 0.15), transparent 70%)`,
          clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col" style={{ color: `var(--foreground)` }}>
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-data-panel';
export default Component;
