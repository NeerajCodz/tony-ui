/**
 * Card Component - neon
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
      
      borderRadius: '6px',
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
          backgroundColor: `rgba(var(--${color}-rgb), 0.1)`,
          border: `1px solid rgba(var(--${color}-rgb), 0.2)`,
          boxShadow: 'none',
        };
      case 'ghost':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          color: `var(--${color})`,
          textShadow: `0 0 5px rgba(var(--${color}-rgb), 0.5)`
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: `rgba(var(--card-bg-rgb), 0.8)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(var(--${color}-rgb), 0.6)`,
          boxShadow: `0 0 20px rgba(var(--${color}-rgb), 0.3), inset 0 0 10px rgba(var(--${color}-rgb), 0.1)`,
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


      {/* Version decorators */}
      
      {/* Neon glow border */}
      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300"
           style={{ boxShadow: `0 0 10px rgba(var(--${color}-rgb), 0.4), inset 0 0 10px rgba(var(--${color}-rgb), 0.05)` }} />
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
           style={{ boxShadow: `0 0 20px rgba(var(--${color}-rgb), 0.6), 0 0 40px rgba(var(--${color}-rgb), 0.3)` }} />
    

      {/* Content */}
      <div className={cn("relative z-10 p-6 h-full flex flex-col", "")} style={{ color: `var(--foreground)` }}>
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-neon';
export default Component;

