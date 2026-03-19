import React from 'react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from '../../utils/component-helpers';

import type { VariantColors } from '../../types/common';

const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};


interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  type?: 'default' | 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  colors?: VariantColors;
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(({ type, className, variant = 'primary', colors, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className, getTypeStyles(type))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { variant?: string; colors?: VariantColors; type?: string }>(({ type, className, variant = 'primary', colors, ...props }, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';
  
  const neonColor = colors?.accent?.primary || `hsl(var(--${color}-base))`;
  const neonGlow = colors?.accent?.glow || `hsl(var(--${color}-base))`;

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200",
        // Default / Neon styles
        (!type || type === 'default') && "border-[var(--neon-color)] shadow-[inset_0_0_5px_var(--neon-glow),0_0_5px_var(--neon-glow)] data-[state=checked]:bg-[var(--neon-color)] data-[state=checked]:shadow-[0_0_10px_var(--neon-glow)]",
        className, 
        getTypeStyles(type)
      )}
      style={{
        '--neon-color': neonColor,
        '--neon-glow': neonGlow,
      } as React.CSSProperties}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
