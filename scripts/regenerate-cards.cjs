const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/card');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Unique clip paths and decorators for each version
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
    decorators: `
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-[2px] transition-all duration-300 group-hover:w-10" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-0 left-0 w-[2px] h-6 transition-all duration-300 group-hover:h-10" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 right-0 w-6 h-[2px] transition-all duration-300 group-hover:w-10" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 right-0 w-[2px] h-6 transition-all duration-300 group-hover:h-10" style={{ background: \`hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'holo-frame': {
    clip: 'polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))',
    decorators: `
      {/* Holographic scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="absolute inset-0" style={{ 
          background: \`repeating-linear-gradient(0deg, transparent 0px, hsl(var(--\${color}-base) / 0.1) 2px, transparent 4px)\`,
        }} />
      </div>
      {/* Corner notches */}
      <div className="absolute top-0 left-4 w-6 h-[1px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-0 right-4 w-6 h-[1px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 left-4 w-6 h-[1px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 right-4 w-6 h-[1px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)',
    decorators: `
      {/* Top-right cutout accent */}
      <div className="absolute top-0 right-[37px] w-12 h-[2px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-[37px] right-0 w-[2px] h-12" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      {/* Data indicator dots */}
      <div className="absolute top-3 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: \`hsl(var(--\${color}-base))\` }} />
        <div className="w-1.5 h-1.5 rounded-full opacity-60" style={{ background: \`hsl(var(--\${color}-base))\` }} />
        <div className="w-1.5 h-1.5 rounded-full opacity-30" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      </div>
    `,
    extraContent: ''
  },
  'circuit-board': {
    clip: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
    decorators: `
      {/* Circuit traces */}
      <div className="absolute top-0 left-[25%] w-[2px] h-4" style={{ background: \`hsl(var(--\${color}-base) / 0.5)\` }} />
      <div className="absolute top-4 left-[25%] w-6 h-[2px]" style={{ background: \`hsl(var(--\${color}-base) / 0.5)\` }} />
      <div className="absolute top-4 left-[calc(25%+22px)] w-2 h-2 rounded-full" style={{ background: \`hsl(var(--\${color}-base))\`, boxShadow: \`0 0 6px hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 right-[30%] w-[2px] h-4" style={{ background: \`hsl(var(--\${color}-base) / 0.5)\` }} />
      <div className="absolute bottom-4 right-[30%] w-6 h-[2px]" style={{ background: \`hsl(var(--\${color}-base) / 0.5)\` }} />
    `,
    extraContent: ''
  },
  'quantum-gate': {
    clip: 'polygon(30px 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 30px 100%, 0 50%)',
    decorators: `
      {/* Hexagonal frame lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      {/* Quantum particles */}
      <div className="absolute top-1/2 left-3 -translate-y-1/2 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100" 
           style={{ background: \`hsl(var(--\${color}-base))\`, boxShadow: \`0 0 8px hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-1/2 right-3 -translate-y-1/2 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100" 
           style={{ background: \`hsl(var(--\${color}-base))\`, boxShadow: \`0 0 8px hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'tactical-hud': {
    clip: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)',
    decorators: `
      {/* Targeting brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: \`hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'energy-shield': {
    clip: 'polygon(0 25px, 25px 0, calc(100% - 25px) 0, 100% 25px, 100% calc(100% - 25px), calc(100% - 25px) 100%, 25px 100%, 0 calc(100% - 25px))',
    decorators: `
      {/* Energy pulse effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
           style={{ background: \`radial-gradient(ellipse at center, hsl(var(--\${color}-base) / 0.15) 0%, transparent 70%)\` }} />
      {/* Energy nodes */}
      <div className="absolute top-1 left-[28px] w-2 h-2 rounded-full" style={{ background: \`hsl(var(--\${color}-base))\`, boxShadow: \`0 0 6px hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-1 right-[28px] w-2 h-2 rounded-full" style={{ background: \`hsl(var(--\${color}-base))\`, boxShadow: \`0 0 6px hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'terminal-window': {
    clip: 'polygon(0 28px, 28px 0, 100% 0, 100% 100%, 0 100%)',
    decorators: `
      {/* Terminal header */}
      <div className="absolute top-0 left-[32px] right-0 h-7 flex items-center gap-2 px-3" style={{ background: \`hsl(var(--\${color}-base) / 0.12)\`, borderBottom: \`1px solid hsl(var(--\${color}-base) / 0.25)\` }}>
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <div className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="text-[9px] font-mono ml-2 opacity-50 uppercase tracking-widest" style={{ color: \`hsl(var(--\${color}-foreground))\` }}>terminal</span>
      </div>
    `,
    extraContent: 'pt-8'
  },
  'matrix-grid': {
    clip: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
    decorators: `
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ 
        backgroundImage: \`linear-gradient(hsl(var(--\${color}-base)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--\${color}-base)) 1px, transparent 1px)\`,
        backgroundSize: '16px 16px'
      }} />
      {/* Corner pixels */}
      <div className="absolute top-1 left-2 w-1 h-1" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute top-1 right-2 w-1 h-1" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-1 left-2 w-1 h-1" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-1 right-2 w-1 h-1" style={{ background: \`hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  },
  'neon-outline': {
    clip: 'none',
    borderRadius: '6px',
    decorators: `
      {/* Neon glow border */}
      <div className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300"
           style={{ boxShadow: \`0 0 10px hsl(var(--\${color}-base) / 0.4), inset 0 0 10px hsl(var(--\${color}-base) / 0.05)\` }} />
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
           style={{ boxShadow: \`0 0 20px hsl(var(--\${color}-base) / 0.6), 0 0 40px hsl(var(--\${color}-base) / 0.3)\` }} />
    `,
    extraContent: '',
    noBorderAccent: true
  },
  'glass-morphism': {
    clip: 'none',
    borderRadius: '16px',
    decorators: `
      {/* Glass shimmer */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity"
           style={{ background: \`linear-gradient(135deg, hsl(var(--\${color}-base) / 0.15) 0%, transparent 50%, hsl(var(--\${color}-base) / 0.08) 100%)\` }} />
    `,
    extraContent: '',
    noBorderAccent: true,
    glassEffect: true
  },
  'tech-panel': {
    clip: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
    decorators: `
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: \`linear-gradient(90deg, hsl(var(--\${color}-base)), hsl(var(--\${color}-base) / 0.2))\` }} />
      {/* Bottom-right cut indicators */}
      <div className="absolute bottom-[28px] right-0 w-[3px] h-6" style={{ background: \`hsl(var(--\${color}-base))\` }} />
      <div className="absolute bottom-0 right-[28px] w-6 h-[3px]" style={{ background: \`hsl(var(--\${color}-base))\` }} />
    `,
    extraContent: ''
  }
};

// Template generator
const TEMPLATE = (version, config) => {
  const useClipPath = config.clip !== 'none';
  const hasBorderRadius = config.borderRadius;
  const hasGlassEffect = config.glassEffect;
  const noBorderAccent = config.noBorderAccent;
  const extraPadding = config.extraContent || '';
  
  return `/**
 * Card Component - ${version}
 * Auto-generated unique shape variant
 */
import React from 'react';
import type { CardProps } from '../../types/components/card.js';
import { cn } from '../../utils/component-helpers.js';

${useClipPath ? `const CLIP_PATH = '${config.clip}';` : ''}

const Component = React.forwardRef<HTMLDivElement, CardProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      ${useClipPath ? 'clipPath: CLIP_PATH,' : ''}
      ${hasBorderRadius ? `borderRadius: '${config.borderRadius}',` : ''}
    };

    switch (type) {
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: \`2px solid hsl(var(--\${color}-base))\`,
          boxShadow: \`inset 0 0 15px hsl(var(--\${color}-base) / 0.1), 0 0 8px hsl(var(--\${color}-base) / 0.1)\`,
        };
      case 'solid':
        return {
          ...base,
          backgroundColor: \`hsl(var(--surface-base) / 0.92)\`,
          border: \`1px solid hsl(var(--\${color}-base) / 0.35)\`,
          boxShadow: \`0 8px 24px -6px hsl(var(--\${color}-base) / 0.2)\`,
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: \`hsl(var(--primary-base) / 0.06)\`,
          backdropFilter: '${hasGlassEffect ? 'blur(16px)' : 'blur(10px)'}',
          border: \`1px solid hsl(var(--\${color}-base) / 0.25)\`,
          boxShadow: \`0 4px 20px -4px hsl(var(--\${color}-base) / 0.12)\`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative group transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:scale-[1.02]' : 'hover:scale-[1.01]',
        className
      )}
      onClick={disabled ? undefined : onClick}
      style={getTypeStyles()}
      {...props}
    >
      {/* Hover glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: \`radial-gradient(ellipse at center, hsl(var(--\${color}-base) / 0.1), transparent 70%)\` }}
      />

${noBorderAccent ? '' : `      {/* Border accent lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        <div className="absolute top-0 left-0 w-1/4 h-[2px] transition-all duration-300 group-hover:w-1/2"
             style={{ background: \`linear-gradient(90deg, hsl(var(--\${color}-base)), transparent)\` }} />
        <div className="absolute bottom-0 right-0 w-1/4 h-[2px] transition-all duration-300 group-hover:w-1/2"
             style={{ background: \`linear-gradient(270deg, hsl(var(--\${color}-base)), transparent)\` }} />
      </div>
`}
      {/* Version decorators */}
      ${config.decorators}

      {/* Content */}
      <div className={cn("relative z-10 p-6 h-full flex flex-col", "${extraPadding}")} style={{ color: \`hsl(var(--\${color}-foreground))\` }}>
        {children}
      </div>
    </div>
  );
});

Component.displayName = 'Card-${version}';
export default Component;
`;
};

// Generate files
console.log('Regenerating card components with unique shapes...');

Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config);
  const filePath = path.join(COMPONENT_PATH, `card-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`✓ Generated card-${name}.tsx`);
});

console.log('\\n✓ Card regeneration complete!');
console.log('  - 12 unique shapes generated');
console.log('  - Proper color variable support');
console.log('  - Hover effects included');
console.log('  - No pink/purple gradients');

