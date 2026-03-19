import React from 'react';
import type { AspectRatioProps } from '../../types/components/data-display.js';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

const CLIP_PATH = 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)';

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
      <style>{`
        @keyframes aspect-ratio-anim {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <AspectRatioPrimitive.Root ratio={ratio}>
        <div className="absolute inset-0 w-full h-full" style={{
          clipPath: CLIP_PATH,
          ...getTypeStyles(),
          animation: animated ? `aspect-ratio-anim 0.5s ease-out` : 'none'
        }}>
          {children}
        </div>
      </AspectRatioPrimitive.Root>
    </div>
  );
});

Component.displayName = 'AspectRatio-angular-corner';
export default Component;
