
import React, { useState } from 'react';
import { cn } from '../../utils/component-helpers.js';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Command as CommandPrimitive } from 'cmdk';

interface ComboboxProps {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid' | 'inverse' | 'contrast' | 'soft';
  animated?: boolean;
  className?: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const CLIP_PATH = 'polygon(5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%, 0 10%)';

// Sample Options if none provided
const DEFAULT_OPTIONS = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

const Component = React.forwardRef<HTMLButtonElement, ComboboxProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  options = DEFAULT_OPTIONS,
  placeholder = "Select framework...",
  value,
  onValueChange,
  disabled = false,
  ...props
}, ref) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value || "");

  // Handle controlled vs uncontrolled
  const currentValue = value !== undefined ? value : internalValue;
  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    if (onValueChange) onValueChange(newValue);
    setInternalValue(newValue);
    setOpen(false);
  };

  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {};
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: `1px solid var(--${color})`,
        };
      case 'solid':
        return {
          backgroundColor: `rgba(var(--${color}-rgb), 0.15)`,
          border: `1px solid rgba(var(--${color}-rgb), 0.5)`,
        };
      
      case 'inverse':
        return {
          ...base,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        };
      case 'contrast':
        return {
          ...base,
          backgroundColor: 'black',
          border: '2px solid white',
          color: 'white',
          boxShadow: '4px 4px 0px white',
        };
      case 'soft':
        return {
          ...base,
          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
          border: '1px solid rgba(var(--primary-rgb), 0.2)',
          boxShadow: 'none',
        };
case 'default':
      default:
        return {
          backgroundColor: `rgba(var(--${color}-rgb), 0.05)`,
          backdropFilter: 'blur(8px)',
          border: `1px solid rgba(var(--${color}-rgb), 0.3)`,
        };
    }
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          ref={ref}
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between flex items-center px-3 py-2 text-sm font-mono transition-all duration-300 relative group",
            animated ? 'animate-in fade-in zoom-in-95 duration-300' : '',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-white/5',
            className
          )}
          style={{
            clipPath: CLIP_PATH,
            ...getTypeStyles(),
          }}
          {...props}
        >
          <span className={cn("truncate", !currentValue && "text-muted-foreground/50")}>
            {currentValue
              ? options.find((framework) => framework.value === currentValue)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, rgba(var(--${color}-rgb), 0.15), transparent 70%)`,
              zIndex: 0
            }}
          />
        </button>
      </PopoverPrimitive.Trigger>
      
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content 
          className={cn(
            "z-50 w-[200px] p-0 text-white bg-black/90 border border-gray-800 backdrop-blur-xl shadow-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          style={{
             borderColor: `rgba(var(--${color}-rgb), 0.3)`,
             boxShadow: `0 0 20px -5px rgba(var(--${color}-rgb), 0.2)`
          }}
        >
          <CommandPrimitive className="flex h-full w-full flex-col overflow-hidden rounded-md bg-transparent">
            <div className="flex items-center border-b border-gray-800 px-3" cmdk-input-wrapper="">
              <CommandPrimitive.Input 
                placeholder="Search..." 
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
              />
            </div>
            <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
              <CommandPrimitive.Empty className="py-6 text-center text-sm text-gray-500">No framework found.</CommandPrimitive.Empty>
              {options.map((option) => (
                 <CommandPrimitive.Item
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                  className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 font-mono data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer",
                    currentValue === option.value && "text-cyan-400 bg-white/5"
                  )}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 transition-opacity",
                      currentValue === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandPrimitive.Item>
              ))}
            </CommandPrimitive.List>
          </CommandPrimitive>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
});

Component.displayName = 'Combobox-energy-shield';
export default Component;

