import React from 'react';
import type { IconButtonProps } from '../../types/components/misc.js'; // Adjust path if needed

const CLIP_PATH = 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)';

const Component = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
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
      case 'solid': return { backgroundColor: `hsl(var(--${color}-base) / 0.85)`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: `hsl(var(--${color}-base) / 0.1)`, backdropFilter: 'blur(4px)', border: `1px solid hsl(var(--${color}-base) / 0.3)` };
    }
  };

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        color: type === 'solid' ? 'hsl(var(--background))' : `hsl(var(--${color}-base))`,
        animation: animated ? 'fadeIn 0.3s ease-out' : 'none',
        padding: '0.5rem 1rem'
      }}
      {...props}
    >
      {children}
    </button>
  );
});

Component.displayName = 'IconButton-energy-shield';
export default Component;
