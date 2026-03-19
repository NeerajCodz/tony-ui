/**
 * Card Component - energy-shield
 * Auto-generated unique shape variant
 */
import React from 'react';
import type { CardProps } from '../../types/components/card.js';
import { cn } from '../../utils/component-helpers.js';

const CLIP_PATH = 'polygon(0 25px, 25px 0, calc(100% - 25px) 0, 100% 25px, 100% calc(100% - 25px), calc(100% - 25px) 100%, 25px 100%, 0 calc(100% - 25px))';

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
      
      case 'inverse':
        return {
          ...base,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        };
      case 'contrast':
        return {
          ...base,
          backgroundColor: 'black',
          border: '2px solid white',
          color: 'white',
          boxShadow: '4px 4px 0px white',
        };
      case 'soft':
        return {
          ...base,
          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
          border: '1px solid rgba(var(--primary-rgb), 0.2)',
          boxShadow: 'none',
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
      
      {/* Energy pulse effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
           style={{ background: `radial-gradient(ellipse at center, rgba(var(--${color}-rgb), 0.15) 0%, transparent 70%)` }} />
      {/* Energy nodes */}
      <div className="absolute top-1 left-[28px] w-2 h-2 rounded-full" style={{ background: `var(--${color})`, boxShadow: `0 0 6px var(--${color})` }} />
      <div className="absolute top-1 right-[28px] w-2 h-2 rounded-full" style={{ background: `var(--${color})`, boxShadow: `0 0 6px var(--${color})` }} />
    

      {/* Content */}
      <div className={cn("relative z-10 p-6 h-full flex flex-col", "")} style={{ color: `var(--foreground)` }}>
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-energy-shield';
export default Component;

