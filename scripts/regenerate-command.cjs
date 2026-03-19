const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/command');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Command Palette Clip Paths (Modal/Dialog style)
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
    anim: 'scale-in'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 20px, 10px 20px, 10px calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 10px, 20px 10px, 20px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(10px 0, 40px 0, 50px 10px, 90px 10px, 100% 0, 100% calc(100% - 10px), calc(100% - 40px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
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
    clip: 'polygon(0 10px, 10px 10px, 10px 0, calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px))',
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
import { Search, Calculator, Calendar, CreditCard, Settings, User, Smile } from 'lucide-react';
import { Command as CommandPrimitive } from 'cmdk';
import { Dialog } from '@radix-ui/react-dialog';

interface CommandProps {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLDivElement, CommandProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  open: controlledOpen,
  onOpenChange,
  children,
  ...props
}, ref) => {
  // Can be used as a standalone list or a dialog
  const isDialog = controlledOpen !== undefined;
  
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
          backdropFilter: 'blur(12px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
          boxShadow: \`0 0 20px -5px hsl(var(--\${color}-base) / 0.1)\`,
        };
    }
  };

  const Content = (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md text-popover-foreground',
        animated ? 'animate-in fade-in zoom-in-95 duration-300' : '',
        className
      )}
      style={{
        clipPath: isDialog ? undefined : CLIP_PATH, // Clip path on wrapper if inline, or dialog content if modal
        ...getTypeStyles(),
      }}
      {...props}
    >
      {children || (
        <CommandPrimitive className="flex h-full w-full flex-col overflow-hidden rounded-md bg-transparent">
          <div className="flex items-center border-b border-gray-800 px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandPrimitive.Input 
              placeholder="Type a command or search..." 
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
            />
          </div>
          <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <CommandPrimitive.Empty className="py-6 text-center text-sm text-gray-500 font-mono">No results found.</CommandPrimitive.Empty>
            <CommandPrimitive.Group heading="Suggestions" className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-widest font-mono">
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandPrimitive.Item>
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandPrimitive.Item>
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandPrimitive.Item>
            </CommandPrimitive.Group>
            <CommandPrimitive.Separator className="h-px bg-gray-800" />
            <CommandPrimitive.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-widest font-mono">
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <span className="ml-auto text-xs tracking-widest text-muted-foreground opacity-50">⌘P</span>
              </CommandPrimitive.Item>
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <span className="ml-auto text-xs tracking-widest text-muted-foreground opacity-50">⌘B</span>
              </CommandPrimitive.Item>
              <CommandPrimitive.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-cyan-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer font-mono">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <span className="ml-auto text-xs tracking-widest text-muted-foreground opacity-50">⌘S</span>
              </CommandPrimitive.Item>
            </CommandPrimitive.Group>
          </CommandPrimitive.List>
        </CommandPrimitive>
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--\${color}-base))] opacity-50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--\${color}-base))] opacity-50" />
    </div>
  );

  if (isDialog) {
    return (
      <Dialog open={controlledOpen} onOpenChange={onOpenChange}>
        {Content}
      </Dialog>
    );
  }

  return Content;
});

Component.displayName = 'Command-${version}';
export default Component;
`;

// Generate files
Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(COMPONENT_PATH, `command-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated command-${name}.tsx`);
});

console.log('Command regeneration complete.');
