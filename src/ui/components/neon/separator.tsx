import React from 'react';
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from '../../utils/component-helpers';

const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};


interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  type?: 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ type, className, orientation = "horizontal", variant = "neutral", decorative = true, ...props }, ref) => {
    const colorMap: Record<string, string> = {
        neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
    };
    const color = colorMap[variant] || 'primary';

    let customStyle: React.CSSProperties = {
        background: `hsl(var(--${color}-base))`, 
        boxShadow: `0 0 5px hsl(var(--${color}-base)), 0 0 10px hsl(var(--${color}-base))` // Intense glow for default
    };

    if (type === 'soft') {
        customStyle = {
            background: `rgba(var(--${color}-rgb), 0.3)`,
            boxShadow: 'none'
        };
    } else if (type === 'ghost') {
        customStyle = {
            background: `rgba(var(--${color}-rgb), 0.1)`,
            boxShadow: 'none'
        };
    } else if (type === 'inverse') {
        customStyle = {
             background: 'black',
             boxShadow: 'none'
        };
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className, getTypeStyles(type)
        )}
        style={{...customStyle, ...props.style}}
        {...props}
      />
    )
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
