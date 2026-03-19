const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/input');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Input Clip Paths - Container based
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    anim: 'slide-in'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 10px, 5px 10px, 5px calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 5px, 10px 5px, 10px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(5px 0, 20px 0, 25px 5px, 50px 5px, 55px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 20px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
    anim: 'hud-boot'
  },
  'energy-shield': {
    clip: 'polygon(15px 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0 50%)',
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
import { cn } from '../../utils/component-helpers.js';

// Define Props locally to avoid type issues if not exported yet
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid'; // Note: this shadows HTML type attribute, but we handle it
  inputType?: string; // For HTML type attribute (text, password, etc)
  animated?: boolean;
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLInputElement, InputProps>(({
  variant = 'neutral',
  type = 'default', // Visual type
  inputType = 'text', // HTML Input type
  animated = true,
  className = '',
  label,
  error,
  leftIcon,
  rightIcon,
  disabled = false,
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
          boxShadow: \`inset 0 0 5px hsl(var(--\${color}-base) / 0.1)\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`, // Translucent fill
          border: \`1px solid hsl(var(--\${color}-base) / 0.5)\`,
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`,
          backdropFilter: 'blur(4px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
          boxShadow: \`0 0 10px -5px hsl(var(--\${color}-base) / 0.1)\`,
        };
    }
  };

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label className="text-xs font-mono text-cyan-500/80 uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      
      <div 
        className={cn(
          'relative group transition-all duration-300 w-full',
          animated ? 'animate-in fade-in duration-500' : '',
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        )}
      >
        {/* Shape Container */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(0,163,255,0.3)]"
          style={{
            clipPath: CLIP_PATH,
            ...getTypeStyles(),
            zIndex: 0
          }}
        />

        {/* Focus Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: \`radial-gradient(circle at center, hsl(var(--\${color}-base) / 0.1), transparent 70%)\`,
            zIndex: 0
          }}
        />

        {/* Input Wrapper */}
        <div className="relative z-10 flex items-center px-4" style={{ height: '42px' }}>
          {leftIcon && <span className="mr-3 text-cyan-500/70">{leftIcon}</span>}
          
          <input
            ref={ref}
            type={inputType}
            className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-white/30 font-mono focus:ring-0 p-0 m-0 h-full"
            disabled={disabled}
            {...props}
          />
          
          {rightIcon && <span className="ml-3 text-cyan-500/70">{rightIcon}</span>}
        </div>
        
        {/* Border Accents */}
        <div className="absolute inset-0 pointer-events-none z-20">
           <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--\${color}-base))] opacity-50 group-focus-within:opacity-100 transition-opacity" />
           <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--\${color}-base))] opacity-50 group-focus-within:opacity-100 transition-opacity" />
        </div>
      </div>

      {error && (
        <span className="text-xs text-red-400 ml-1 font-mono">{error}</span>
      )}
    </div>
  );
});

Component.displayName = 'Input-${version}';
export default Component;
`;

// Generate files
Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(COMPONENT_PATH, `input-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated input-${name}.tsx`);
});

console.log('Input regeneration complete.');
