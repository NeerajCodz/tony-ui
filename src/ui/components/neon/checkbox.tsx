import React from 'react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from '../../utils/component-helpers';
import type { VariantColors } from '../../types/common';

const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    case 'outline': return "bg-transparent border-2";
    default: return '';
  }
};

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  type?: 'default' | 'outline' | 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  colors?: VariantColors;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, type = 'default', variant = 'primary', colors, ...props }, ref) => {
    const colorMap: Record<string, string> = {
      neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
    };
    const color = colorMap[variant] || 'primary';
    
    const neonColor = colors?.accent?.primary || `hsl(var(--${color}-base))`;
    const neonGlow = colors?.accent?.glow || `hsl(var(--${color}-base))`;
    const checkColor = colors?.background === '#ffffff' ? '#000000' : '#ffffff';

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200",
          // Default / Neon styles
          (!type || type === 'default') && "border-[var(--neon-color)] shadow-[inset_0_0_5px_var(--neon-glow),0_0_5px_var(--neon-glow)] data-[state=checked]:bg-[var(--neon-color)] data-[state=checked]:text-[var(--check-color)] data-[state=checked]:shadow-[0_0_10px_var(--neon-glow)]",
          // Outline style
          type === 'outline' && "border-[var(--neon-color)] shadow-[0_0_5px_var(--neon-glow)] bg-transparent data-[state=checked]:bg-transparent data-[state=checked]:text-[var(--neon-color)]",
          className,
          getTypeStyles(type)
        )}
        style={{
          '--neon-color': neonColor,
          '--neon-glow': neonGlow,
          '--check-color': checkColor,
        } as React.CSSProperties}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <Check className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox };
