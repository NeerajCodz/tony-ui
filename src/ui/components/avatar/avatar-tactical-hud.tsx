import React from 'react';
import type { AvatarProps } from '../../types/components/data-display.js';

const CLIP_PATH = 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))';

const Component = React.forwardRef<HTMLDivElement, AvatarProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: `2px solid hsl(var(--${color}-base))` };
      case 'solid': return { backgroundColor: `hsl(var(--${color}-base) / 0.15)`, border: 'none' };
      default: return { backgroundColor: `hsl(var(--${color}-base) / 0.05)`, backdropFilter: 'blur(4px)', border: `1px solid hsl(var(--${color}-base) / 0.3)` };
    }
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        animation: animated ? 'fadeIn 0.5s ease-out' : 'none',
        padding: '1rem'
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Component.displayName = 'Avatar-tactical-hud';
export default Component;
