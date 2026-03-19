const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/combobox');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Combobox Clip Paths (Similar to Select/Input)
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
    anim: 'scale-in'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 15px, 5px 15px, 5px calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 5px, 15px 5px, 15px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(10px 0, 40px 0, 50px 10px, 90px 10px, 100% 0, 100% calc(100% - 10px), calc(100% - 40px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(15px 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0 50%)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
    anim: 'slide-reveal'
  },
  'energy-shield': {
    clip: 'polygon(5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%, 0 10%)',
    anim: 'energy-burst'
  },
  'terminal-window': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', 
    anim: 'terminal-boot'
  },
  'matrix-grid': {
    clip: 'polygon(0 5px, 5px 5px, 5px 0, calc(100% - 5px) 0, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0 calc(100% - 5px))',
    anim: 'matrix-load'
  },
  'neon-outline': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    anim: 'neon-flicker'
  }
};

const TEMPLATE = (version, clip, anim) => `
import React, { useState } from 'react';
import { cn } from '../../utils/component-helpers.js';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Command as CommandPrimitive } from 'cmdk';

interface ComboboxProps {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
  className?: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const CLIP_PATH = '${clip}';

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
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: \`1px solid hsl(var(--\${color}-base))\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`,
          border: \`1px solid hsl(var(--\${color}-base) / 0.5)\`,
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`,
          backdropFilter: 'blur(8px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
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
              background: \`radial-gradient(circle at center, hsl(var(--\${color}-base) / 0.15), transparent 70%)\`,
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
             borderColor: \`hsl(var(--\${color}-base) / 0.3)\`,
             boxShadow: \`0 0 20px -5px hsl(var(--\${color}-base) / 0.2)\`
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

Component.displayName = 'Combobox-${version}';
export default Component;
`;

// Generate files
Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(COMPONENT_PATH, `combobox-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated combobox-${name}.tsx`);
});

console.log('Combobox regeneration complete.');
