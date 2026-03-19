import React from 'react';
import type { AspectRatioProps } from '../../types/components/data-display.js';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

const CLIP_PATH = 'polygon(4px 0, 100% 0, 100% 100%, 0 100%)';

const Component = React.forwardRef<HTMLDivElement, AspectRatioProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  ratio = 16 / 9,
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
      case 'solid': return { backgroundColor: `hsl(var(--${color}-base) / 0.1)`, border: 'none' };
      default: return { backgroundColor: `hsl(var(--${color}-base) / 0.05)`, backdropFilter: 'blur(4px)', border: `1px solid hsl(var(--${color}-base) / 0.3)` };
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={ref} {...props}>
      <AspectRatioPrimitive.Root ratio={ratio}>
        <div className="absolute inset-0 w-full h-full" style={{
          clipPath: CLIP_PATH,
          ...getTypeStyles(),
          animation: animated ? 'fadeIn 0.5s ease-out' : 'none'
        }}>
          {children}
        </div>
      </AspectRatioPrimitive.Root>
    </div>
  );
});

Component.displayName = 'AspectRatio-neon';
export default Component;
