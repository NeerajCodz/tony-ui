import React from 'react';
import type { EmptyProps } from '../../types/components/feedback.js';
const CLIP_PATH = 'none';
const Component = React.forwardRef<HTMLDivElement, EmptyProps>(({ variant = 'neutral', type = 'default', animated = true, className = '', children, ...props }, ref) => {
  const colorMap: Record<string, string> = { neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', };
  const color = colorMap[variant] || 'primary';
  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'inverse': return { background: `hsl(var(--${color}-foreground))`, color: `hsl(var(--${color}-base))`, border: 'none' };
      case 'contrast': return { background: `hsl(var(--${color}-base))`, color: `hsl(var(--${color}-foreground))`, border: `2px solid hsl(var(--${color}-foreground))` };
      case 'soft': return { background: `hsl(var(--${color}-base) / 0.15)`, color: `hsl(var(--${color}-foreground))`, border: 'none' };

      case 'outline': return { backgroundColor: 'transparent', border: `2px solid hsl(var(--${color}-base))` };
      case 'solid': return { backgroundColor: `hsl(var(--${color}-base) / 0.15)`, border: 'none' };
      default: return { backgroundColor: `hsl(var(--${color}-base) / 0.05)`, backdropFilter: 'blur(4px)', border: `1px solid hsl(var(--${color}-base) / 0.3)` };
    }
  };
  return <div ref={ref} className={`relative ${className}`} style={{ clipPath: CLIP_PATH, ...getTypeStyles(), animation: animated ? 'fadeIn 0.5s ease-out' : 'none', padding: '1rem' }} {...props}>{children}</div>;
});
Component.displayName = 'Empty-data-panel';
export default Component;
