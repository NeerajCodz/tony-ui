import React from 'react';
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from '../../../lib/utils';

const variantColors = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue'
};

const Progress = React.forwardRef(({ className, value, variant = 'primary', ...props }: any, ref: any) => {
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  
  // Cyber styles
  const rootStyle = {
      borderColor: `var(--${color}-900, ${color})`,
      backgroundColor: `rgba(var(--${color}-rgb), 0.1)`,
  };
  
  const indicatorStyle = {
      backgroundColor: `var(--${color}-500, ${color})`,
      transform: `translateX(-${100 - (value || 0)}%)`,
      filter: `drop-shadow(0 0 5px var(--${color}-500, ${color}))`
  };

  return (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-6 w-full overflow-hidden border-2 bg-black/40 clip-path-slant", 
            className
        )}
        style={rootStyle}
        {...props}
    >
        {/* Background grid lines to give it a segmented look */}
        <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_19px,rgba(0,0,0,0.8)_20px)] z-10 pointer-events-none opacity-50" />

        <ProgressPrimitive.Indicator
            className="h-full w-full flex-1 transition-all"
            style={indicatorStyle}
        />
    </ProgressPrimitive.Root>
  );
})
Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress;
