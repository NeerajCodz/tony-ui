import React from 'react';
import type { ToggleGroupProps } from '../../types/components/misc.js';

const CLIP_PATH = 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)';

const Component = React.forwardRef<HTMLDivElement, ToggleGroupProps>(({
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

Component.displayName = 'ToggleGroup-energy-shield';
export default Component;
