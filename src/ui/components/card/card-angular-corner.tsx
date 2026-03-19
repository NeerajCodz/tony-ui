import React from 'react';
import { cn } from '../../../lib/utils';

const CLIP_PATH = 'polygon(20px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 20px)';

const Component = React.forwardRef<HTMLDivElement, any>(({
  variant = 'primary',
  type = 'default',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'slate',
    primary: 'cyan',
    success: 'emerald',
    warning: 'amber',
    info: 'blue',
    destructive: 'red',
  };
  const color = colorMap[variant] || 'cyan';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      clipPath: CLIP_PATH,
    };

    switch (type) {
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: `2px solid var(--${color}-500)`,
          filter: `drop-shadow(0 0 5px var(--${color}-900))`,
        };
      case 'solid':
        return {
          ...base,
          backgroundColor: `rgba(10, 14, 20, 0.95)`, // Deep black/blue, nearly opaque
          border: `1px solid var(--${color}-500)`,
          filter: `drop-shadow(0 5px 15px rgba(0,0,0, 0.8))`,
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: `rgba(var(--${color}-rgb), 0.08)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(var(--${color}-rgb), 0.3)`,
          boxShadow: `inset 0 0 20px rgba(var(--${color}-rgb), 0.05)`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative group transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:scale-[1.01]' : 'hover:scale-[1.005]',
        className
      )}
      onClick={disabled ? undefined : onClick}
      style={getTypeStyles()}
      {...props}
    >
      {/* Dynamic Background Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, rgba(var(--${color}-rgb), 0.15), transparent 70%)` }}
      />

      {/* Tech accents */}
      <div className="absolute top-0 left-0 w-8 h-[2px] transition-all duration-300 group-hover:w-16" style={{ background: `var(--${color}-500)` }} />
      <div className="absolute top-0 left-0 w-[2px] h-8 transition-all duration-300 group-hover:h-16" style={{ background: `var(--${color}-500)` }} />
      
      <div className="absolute bottom-0 right-0 w-8 h-[2px] transition-all duration-300 group-hover:w-16" style={{ background: `var(--${color}-500)` }} />
      <div className="absolute bottom-0 right-0 w-[2px] h-8 transition-all duration-300 group-hover:h-16" style={{ background: `var(--${color}-500)` }} />

      {/* Decorative label */}
      <div className="absolute top-2 right-4 text-[10px] font-mono opacity-50 tracking-widest uppercase pointer-events-none" style={{ color: `var(--${color}-400)` }}>
        {variant} :: {type}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-angular-corner';
export default Component;
