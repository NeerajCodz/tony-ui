/**
 * Card Component - data-panel
 * Auto-generated unique shape variant
 */
import React from 'react';
import type { CardProps } from '../../types/components/card.js';
import { cn } from '../../utils/component-helpers.js';

const CLIP_PATH = 'polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)';

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
      clipPath: CLIP_PATH,
      
    };

    switch (type) {
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: `2px solid var(--${color})`,
          boxShadow: `inset 0 0 15px rgba(var(--${color}-rgb), 0.1), 0 0 8px rgba(var(--${color}-rgb), 0.1)`,
        };
      case 'solid':
        return {
          ...base,
          backgroundColor: `rgba(var(--card-bg-rgb), 0.92)`,
          border: `1px solid rgba(var(--${color}-rgb), 0.35)`,
          boxShadow: `0 8px 24px -6px rgba(var(--${color}-rgb), 0.2)`,
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: `rgba(var(--primary-rgb), 0.06)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(var(--${color}-rgb), 0.25)`,
          boxShadow: `0 4px 20px -4px rgba(var(--${color}-rgb), 0.12)`,
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
        style={{ background: `radial-gradient(ellipse at center, rgba(var(--${color}-rgb), 0.1), transparent 70%)` }}
      />

      {/* Border accent lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        <div className="absolute top-0 left-0 w-1/4 h-[2px] transition-all duration-300 group-hover:w-1/2"
             style={{ background: `linear-gradient(90deg, var(--${color}), transparent)` }} />
        <div className="absolute bottom-0 right-0 w-1/4 h-[2px] transition-all duration-300 group-hover:w-1/2"
             style={{ background: `linear-gradient(270deg, var(--${color}), transparent)` }} />
      </div>

      {/* Version decorators */}
      
      {/* Top-right cutout accent */}
      <div className="absolute top-0 right-[37px] w-12 h-[2px]" style={{ background: `var(--${color})` }} />
      <div className="absolute top-[37px] right-0 w-[2px] h-12" style={{ background: `var(--${color})` }} />
      {/* Data indicator dots */}
      <div className="absolute top-3 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: `var(--${color})` }} />
        <div className="w-1.5 h-1.5 rounded-full opacity-60" style={{ background: `var(--${color})` }} />
        <div className="w-1.5 h-1.5 rounded-full opacity-30" style={{ background: `var(--${color})` }} />
      </div>
    

      {/* Content */}
      <div className={cn("relative z-10 p-6 h-full flex flex-col", "")} style={{ color: `var(--foreground)` }}>
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-data-panel';
export default Component;

