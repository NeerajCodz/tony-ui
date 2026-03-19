const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/button');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Button-specific Clip Paths (Generally smaller corner cuts than cards)
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
    anim: 'popup-corner'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 10px, 5px 10px, 5px calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 5px, 10px 5px, 10px 0)',
    anim: 'holo-fade' 
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(5px 0, 20px 0, 25px 5px, 40px 5px, 45px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 20px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 8px, 8px 0, 50% 0, calc(50% + 8px) 8px, calc(100% - 8px) 8px, 100% 0, 100% 100%, 0 100%)',
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
import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';
import { cn } from '../../utils/component-helpers.js';

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'neutral',
  type = 'default',
  size = 'md',
  animated = true,
  className = '',
  children,
  onClick,
  disabled = false,
  htmlType = 'button',
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  // DYNAMIC STYLES based on variant and type
  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: \`2px solid hsl(var(--\${color}-base))\`,
          boxShadow: \`inset 0 0 5px hsl(var(--\${color}-base) / 0.2)\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`,
          border: \`1px solid hsl(var(--\${color}-base) / 0.5)\`,
          color: 'hsl(var(--background-base))', // Dark text on solid color usually
          boxShadow: \`0 0 15px -5px hsl(var(--\${color}-base) / 0.5)\`,
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`,
          backdropFilter: 'blur(8px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.4)\`,
          boxShadow: \`0 0 10px -5px hsl(var(--\${color}-base) / 0.2)\`,
        };
    }
  };

  const getSizeClasses = () => {
    switch(size) {
      case 'sm': return 'h-8 px-3 text-xs';
      case 'lg': return 'h-12 px-8 text-lg';
      case 'xl': return 'h-14 px-10 text-xl';
      case 'md': default: return 'h-10 px-4 text-sm';
    }
  };

  return (
    <button
      ref={ref}
      type={htmlType}
      className={cn(
        'relative group transition-all duration-300 flex items-center justify-center font-medium overflow-hidden font-mono tracking-wider',
        animated ? 'animate-in fade-in zoom-in-95 duration-300' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95',
        getSizeClasses(),
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      {...props}
    >
      {/* Glow Effect on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: \`radial-gradient(circle at center, hsl(var(--\${color}-base) / 0.3), transparent 70%)\`,
          zIndex: 0
        }}
      />

      {/* Border Highlight Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        <div className="absolute top-0 left-0 w-2 h-2 transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50 border-t border-l border-[hsl(var(--\${color}-base))]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50 border-b border-r border-[hsl(var(--\${color}-base))]" />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});

Component.displayName = 'Button-${version}';
export default Component;
`;

// Generate files
Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(COMPONENT_PATH, `button-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated button-${name}.tsx`);
});

console.log('Button regeneration complete.');
