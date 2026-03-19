const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');

// Ensure directories exist
const BADGE_PATH = path.join(UI_PATH, 'components/badge');
const ALERT_PATH = path.join(UI_PATH, 'components/alert');

[BADGE_PATH, ALERT_PATH].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// --- BADGE CONFIG ---
const BADGE_VERSIONS = {
  'angular-corner': {
    clip: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
    anim: 'scale-in'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 4px, 2px 4px, 2px calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 2px, 4px 2px, 4px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(2px 0, 100% 0, 100% calc(100% - 2px), calc(100% - 8px) 100%, 2px 100%, 0 calc(100% - 2px), 0 2px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
    anim: 'slide-reveal'
  },
  'energy-shield': {
    clip: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
    anim: 'energy-burst'
  },
  'terminal-window': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', 
    anim: 'terminal-boot'
  },
  'matrix-grid': {
    clip: 'polygon(0 2px, 2px 2px, 2px 0, calc(100% - 2px) 0, calc(100% - 2px) 2px, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 2px calc(100% - 2px), 0 calc(100% - 2px))',
    anim: 'matrix-load'
  },
  'neon-outline': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    anim: 'neon-flicker'
  }
};

const BADGE_TEMPLATE = (version, clip, anim) => `
import React from 'react';
import { cn } from '../../utils/component-helpers.js';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
}

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLDivElement, BadgeProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
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

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: \`1px solid hsl(var(--\${color}-base))\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.8)\`,
          border: 'none',
          color: 'hsl(var(--background-base))',
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`,
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium font-mono uppercase tracking-wide transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-300' : '',
        className
      )}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      {...props}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: \`radial-gradient(circle at center, hsl(var(--\${color}-base) / 0.2), transparent 70%)\`,
          zIndex: 0
        }}
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
});

Component.displayName = 'Badge-${version}';
export default Component;
`;

// --- ALERT CONFIG ---
const ALERT_VERSIONS = {
  'angular-corner': {
    clip: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
    anim: 'slide-in-from-top-2'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 15px, 5px 15px, 5px calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 5px, 15px 5px, 15px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(10px 0, 40px 0, 50px 10px, 80px 10px, 90px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 40px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)',
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
    clip: 'polygon(0 10px, 10px 10px, 10px 0, calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px))',
    anim: 'matrix-load'
  },
  'neon-outline': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    anim: 'neon-flicker'
  }
};

const ALERT_TEMPLATE = (version, clip, anim) => `
import React from 'react';
import { cn } from '../../utils/component-helpers.js';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
  icon?: React.ReactNode;
  title?: string;
}

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLDivElement, AlertProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  icon,
  title,
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

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: \`1px solid hsl(var(--\${color}-base))\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.8)\`,
          border: 'none',
          color: 'hsl(var(--background-base))',
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`,
          backdropFilter: 'blur(8px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full rounded-lg p-4 transition-all duration-300',
        animated ? 'animate-in fade-in slide-in-from-top-2 duration-300' : '',
        className
      )}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      role="alert"
      {...props}
    >
      <div className="flex gap-4">
        {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
        <div className="flex-1">
          {title && <h5 className="mb-1 font-mono font-medium leading-none tracking-tight uppercase" style={{ color: type === 'solid' ? 'currentColor' : \`hsl(var(--\${color}-base))\` }}>{title}</h5>}
          <div className={cn("text-sm opacity-90", type !== 'solid' && "text-gray-300")}>
            {children}
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--\${color}-base))] opacity-50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--\${color}-base))] opacity-50" />
    </div>
  );
});

Component.displayName = 'Alert-${version}';
export default Component;
`;

// GENERATE BADGES
Object.entries(BADGE_VERSIONS).forEach(([name, config]) => {
  const content = BADGE_TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(BADGE_PATH, `badge-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated badge-${name}.tsx`);
});

// GENERATE ALERTS
Object.entries(ALERT_VERSIONS).forEach(([name, config]) => {
  const content = ALERT_TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(ALERT_PATH, `alert-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated alert-${name}.tsx`);
});

console.log('Feedback components regeneration complete.');
