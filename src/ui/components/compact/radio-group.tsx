import React from 'react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
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


interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  type?: 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(({ type, className, variant = 'primary', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className, getTypeStyles(type))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { variant?: string }>(({ type, className, variant = 'primary', ...props }, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn("aspect-square h-4 w-4 rounded-full border text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className, getTypeStyles(type))}
      style={{
        width: '12px', height: '12px'
      }}
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
