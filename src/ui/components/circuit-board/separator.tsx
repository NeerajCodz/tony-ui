import React from 'react';
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from '../../utils/component-helpers';

interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = "horizontal", variant = "neutral", decorative = true, ...props }, ref) => {
    const colorMap: Record<string, string> = {
        neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
    };
    const color = colorMap[variant] || 'primary';

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        style={{
            background: `repeating-linear-gradient(90deg, hsl(var(--${color}-base)), hsl(var(--${color}-base)) 5px, transparent 5px, transparent 10px)`
        }}
        {...props}
      />
    )
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
