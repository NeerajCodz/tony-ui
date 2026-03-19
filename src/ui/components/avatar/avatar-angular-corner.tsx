import React from 'react';
import type { AvatarProps } from '../../types/components/data-display.js';

const CLIP_PATH = 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)';

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
        animation: animated ? `avatar-anim 0.5s ease-out` : 'none',
        padding: '1rem'
      }}
      {...props}
    >
      <style>{`
        @keyframes avatar-anim {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      {children}
    </div>
  );
});

Component.displayName = 'Avatar-angular-corner';
export default Component;
