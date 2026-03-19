const fs = require('fs');
const path = require('path');

// 1. Version Configuration
const versions = {
  'angular-corner': 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
  'holo-frame': 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 8px), 0 8px)',
  'data-panel': 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
  'circuit-board': 'polygon(4px 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
  'quantum-gate': 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)',
  'tactical-hud': 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
  'energy-shield': 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
  'terminal-window': 'polygon(0 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))',
  'matrix-grid': 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
  'neon-outline': 'polygon(4px 0, 100% 0, 100% 100%, 0 100%)',
};

const animations = {
  'angular-corner': 'popup-corner',
  'holo-frame': 'holo-fade',
  'data-panel': 'slide-reveal',
  'circuit-board': 'glitch-in',
  'quantum-gate': 'quantum-fade',
  'tactical-hud': 'slide-reveal',
  'energy-shield': 'energy-burst',
  'terminal-window': 'terminal-boot',
  'matrix-grid': 'matrix-load',
  'neon-outline': 'neon-flicker',
};

// 2. Templates
const templates = {
  // Input Template
  input: (version, clipPath, anim) => `
import React from 'react';
import type { InputProps } from '../../types/components/inputs.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLInputElement, InputProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.08)\`, backdropFilter: 'blur(8px)', border: \`1px solid hsl(var(--\${color}-base) / 0.5)\` };
    }
  };

  return (
    <div className={\`relative group \${className}\`} style={{ clipPath: CLIP_PATH, opacity: disabled ? 0.5 : 1 }}>
      <input
        ref={ref}
        disabled={disabled}
        className="w-full h-10 px-4 py-2 bg-transparent outline-none font-mono text-sm transition-all placeholder:text-muted-foreground/50"
        style={{
          ...getTypeStyles(),
          color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-foreground))\`,
          animation: animated ? \`\${anim} 0.5s ease-out\` : 'none'
        }}
        {...props}
      />
      <div className="absolute inset-0 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
           style={{
             boxShadow: \`inset 0 0 15px hsl(var(--\${color}-base) / 0.3)\`,
             zIndex: -1
           }}
      />
    </div>
  );
});

Component.displayName = 'Input-${version}';
export default Component;
`,

  // Alert Template
  alert: (version, clipPath, anim) => `
import React from 'react';
import type { AlertProps } from '../../types/components/feedback.js';
import { AlertTriangle, Info, CheckCircle, XCircle, Bell } from 'lucide-react';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, AlertProps>(({
  variant = 'info',
  type = 'default',
  animated = true,
  className = '',
  title,
  children,
  icon,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'info';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`, backdropFilter: 'blur(8px)', borderLeft: \`4px solid hsl(var(--\${color}-base))\` };
    }
  };

  const Icon = icon || {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    destructive: XCircle,
    neutral: Bell
  }[variant] || Info;

  return (
    <div
      ref={ref}
      className={\`relative p-4 flex gap-4 \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-foreground))\`,
        animation: animated ? \`\${anim} 0.5s ease-out\` : 'none'
      }}
      {...props}
    >
      <div className="flex-shrink-0 pt-1">
        {/* @ts-ignore */}
        <Icon size={20} style={{ color: type === 'solid' ? 'inherit' : \`hsl(var(--\${color}-base))\` }} />
      </div>
      <div className="flex-1">
        {title && <h5 className="font-bold mb-1 tracking-wide uppercase text-sm">{title}</h5>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
});

Component.displayName = 'Alert-${version}';
export default Component;
`,

  // Badge Template
  badge: (version, clipPath, anim) => `
import React from 'react';
import type { BadgeProps } from '../../types/components/feedback.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, BadgeProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`1px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base))\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`, backdropFilter: 'blur(4px)', border: \`1px solid hsl(var(--\${color}-base) / 0.3)\` };
    }
  };

  return (
    <div
      ref={ref}
      className={\`inline-flex items-center justify-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-base))\`,
        animation: animated ? \`\${anim} 0.3s ease-out\` : 'none'
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Component.displayName = 'Badge-${version}';
export default Component;
`,

  // Separator Template
  separator: (version, clipPath, anim) => `
import React from 'react';
import type { SeparatorProps } from '../../types/components/layout.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, SeparatorProps>(({
  variant = 'neutral',
  orientation = 'horizontal',
  animated = true,
  className = '',
  decorative = true,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  return (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={\`shrink-0 \${className}\`}
      style={{
        backgroundColor: \`hsl(var(--\${color}-base) / 0.3)\`,
        height: orientation === 'horizontal' ? '1px' : '100%',
        width: orientation === 'horizontal' ? '100%' : '1px',
        position: 'relative',
        clipPath: orientation === 'horizontal' ? CLIP_PATH : undefined,
        animation: animated ? \`\${anim} 1s ease-out\` : 'none'
      }}
      {...props}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
           style={{ backgroundColor: \`hsl(var(--\${color}-base))\`, opacity: 0.5, boxShadow: \`0 0 8px hsl(var(--\${color}-base))\` }} />
    </div>
  );
});

Component.displayName = 'Separator-${version}';
export default Component;
`,

  // Skeleton Template
  skeleton: (version, clipPath, anim) => `
import React from 'react';
import type { SkeletonProps } from '../../types/components/feedback.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, SkeletonProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  width,
  height,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  return (
    <div
      ref={ref}
      className={\`animate-pulse rounded-none \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        width: width,
        height: height,
        backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`,
        backgroundImage: \`linear-gradient(90deg, transparent, hsl(var(--\${color}-base) / 0.2), transparent)\`,
        backgroundSize: '200% 100%',
        animation: animated ? 'cyberShimmer 2s infinite linear' : 'none'
      }}
      {...props}
    >
      <style>{\`
        @keyframes cyberShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      \`}</style>
    </div>
  );
});

Component.displayName = 'Skeleton-${version}';
export default Component;
`,

  // Textarea Template
  textarea: (version, clipPath, anim) => `
import React from 'react';
import type { TextareaProps } from '../../types/components/inputs.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.08)\`, backdropFilter: 'blur(8px)', border: \`1px solid hsl(var(--\${color}-base) / 0.5)\` };
    }
  };

  return (
    <div className={\`relative group \${className}\`} style={{ clipPath: CLIP_PATH, opacity: disabled ? 0.5 : 1 }}>
      <textarea
        ref={ref}
        disabled={disabled}
        className="w-full min-h-[80px] px-4 py-3 bg-transparent outline-none font-mono text-sm transition-all placeholder:text-muted-foreground/50 resize-y"
        style={{
          ...getTypeStyles(),
          color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-foreground))\`,
          animation: animated ? \`\${anim} 0.5s ease-out\` : 'none'
        }}
        {...props}
      />
      <div className="absolute inset-0 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
           style={{
             boxShadow: \`inset 0 0 15px hsl(var(--\${color}-base) / 0.3)\`,
             zIndex: -1
           }}
      />
    </div>
  );
});

Component.displayName = 'Textarea-${version}';
export default Component;
`,

  // Checkbox Template
  checkbox: (version, clipPath, anim) => `
import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { CheckboxProps } from '../../types/components/inputs.js';
import { Check } from 'lucide-react';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`, border: 'none' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`, backdropFilter: 'blur(4px)', border: \`1px solid hsl(var(--\${color}-base) / 0.5)\` };
    }
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={\`peer h-5 w-5 shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        animation: animated ? \`\${anim} 0.3s ease-out\` : 'none'
      }}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="h-3.5 w-3.5" style={{ color: \`hsl(var(--\${color}-foreground))\` }} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Component.displayName = 'Checkbox-${version}';
export default Component;
`,

  // Spinner Template
  spinner: (version, clipPath, anim) => `
import React from 'react';
import type { SpinnerProps } from '../../types/components/feedback.js';
import { Loader2 } from 'lucide-react';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, SpinnerProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';
  
  const sizeMap = { sm: 16, md: 24, lg: 32, xl: 48 };
  const dim = sizeMap[size] || 24;

  return (
    <div
      ref={ref}
      className={\`relative inline-flex items-center justify-center \${className}\`}
      style={{
        width: dim,
        height: dim,
        color: \`hsl(var(--\${color}-base))\`
      }}
      {...props}
    >
      {/* Outer rotating shape */}
      <div className="absolute inset-0" style={{
        clipPath: CLIP_PATH,
        backgroundColor: \`hsl(var(--\${color}-base) / 0.2)\`,
        animation: 'spin 3s linear infinite'
      }} />
      
      {/* Inner icon */}
      <Loader2 className="animate-spin" size={dim * 0.6} />
    </div>
  );
});

Component.displayName = 'Spinner-${version}';
export default Component;
`,

  // Toast Template
  toast: (version, clipPath, anim) => `
import React from 'react';
import type { ToastProps } from '../../types/components/feedback.js';
import { X } from 'lucide-react';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, ToastProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  title,
  description,
  action,
  open = true,
  onOpenChange,
  ...props
}, ref) => {
  if (!open) return null;

  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'hsl(var(--background))', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base))\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`, backdropFilter: 'blur(8px)', border: \`1px solid hsl(var(--\${color}-base) / 0.5)\` };
    }
  };

  return (
    <div
      ref={ref}
      className={\`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden p-6 shadow-lg transition-all \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-foreground))\`,
        animation: animated ? \`\${anim} 0.5s ease-out\` : 'none'
      }}
      {...props}
    >
      <div className="grid gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      {action}
      {onOpenChange && (
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none group-hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
});

Component.displayName = 'Toast-${version}';
export default Component;
`,

  // Generic Button-like (Toggle, IconButton, etc.)
  genericButton: (version, clipPath, anim, compName, propsType) => `
import React from 'react';
import type { ${propsType} } from '../../types/components/misc.js'; // Adjust path if needed

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLButtonElement, ${propsType}>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.85)\`, border: 'none', color: 'hsl(var(--background))' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`, backdropFilter: 'blur(4px)', border: \`1px solid hsl(var(--\${color}-base) / 0.3)\` };
    }
  };

  return (
    <button
      ref={ref}
      className={\`inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        color: type === 'solid' ? 'hsl(var(--background))' : \`hsl(var(--\${color}-base))\`,
        animation: animated ? \`\${anim} 0.3s ease-out\` : 'none',
        padding: '0.5rem 1rem'
      }}
      {...props}
    >
      {children}
    </button>
  );
});

Component.displayName = '${compName}-${version}';
export default Component;
`,
  
  // Aspect Ratio
  aspectRatio: (version, clipPath, anim) => `
import React from 'react';
import type { AspectRatioProps } from '../../types/components/data-display.js';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, AspectRatioProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  ratio = 16 / 9,
  className = '',
  children,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';
  
  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`, border: 'none' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`, backdropFilter: 'blur(4px)', border: \`1px solid hsl(var(--\${color}-base) / 0.3)\` };
    }
  };

  return (
    <div className={\`relative w-full \${className}\`} ref={ref} {...props}>
      <AspectRatioPrimitive.Root ratio={ratio}>
        <div className="absolute inset-0 w-full h-full" style={{
          clipPath: CLIP_PATH,
          ...getTypeStyles(),
          animation: animated ? \`\${anim} 0.5s ease-out\` : 'none'
        }}>
          {children}
        </div>
      </AspectRatioPrimitive.Root>
    </div>
  );
});

Component.displayName = 'AspectRatio-${version}';
export default Component;
`,

  // Generic Wrapper (for complex components just to provide container)
  wrapper: (version, clipPath, anim, compName, propsType, typePath) => `
import React from 'react';
import type { ${propsType} } from '../../types/components/${typePath}.js';

const CLIP_PATH = '${clipPath}';

const Component = React.forwardRef<HTMLDivElement, ${propsType}>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  children,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive',
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline': return { backgroundColor: 'transparent', border: \`2px solid hsl(var(--\${color}-base))\` };
      case 'solid': return { backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`, border: 'none' };
      default: return { backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`, backdropFilter: 'blur(4px)', border: \`1px solid hsl(var(--\${color}-base) / 0.3)\` };
    }
  };

  return (
    <div
      ref={ref}
      className={\`relative \${className}\`}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
        animation: animated ? \`\${anim} 0.5s ease-out\` : 'none',
        padding: '1rem'
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Component.displayName = '${compName}-${version}';
export default Component;
`,
};

// 3. Components Mapping
const components = [
  { name: 'input', type: 'input' },
  { name: 'alert', type: 'alert' },
  { name: 'badge', type: 'badge' },
  { name: 'separator', type: 'separator' },
  { name: 'skeleton', type: 'skeleton' },
  { name: 'textarea', type: 'textarea' },
  { name: 'checkbox', type: 'checkbox' },
  { name: 'spinner', type: 'spinner' },
  { name: 'toast', type: 'toast' },
  { name: 'aspect-ratio', type: 'aspectRatio' },
  // Generic Button-like
  { name: 'toggle', type: 'genericButton', args: ['Toggle', 'ToggleProps'] },
  { name: 'kbd', type: 'genericButton', args: ['Kbd', 'KbdProps'] },
  { name: 'icon-button', type: 'genericButton', args: ['IconButton', 'IconButtonProps'] },
  // Generic Wrappers (for now)
  { name: 'label', type: 'wrapper', args: ['Label', 'LabelProps', 'misc'] },
  { name: 'field', type: 'wrapper', args: ['Field', 'FieldProps', 'misc'] },
  { name: 'empty', type: 'wrapper', args: ['Empty', 'EmptyProps', 'feedback'] },
  { name: 'avatar', type: 'wrapper', args: ['Avatar', 'AvatarProps', 'data-display'] },
  { name: 'switch', type: 'wrapper', args: ['Switch', 'SwitchProps', 'inputs'] },
  { name: 'slider', type: 'wrapper', args: ['Slider', 'SliderProps', 'inputs'] },
  { name: 'progress', type: 'wrapper', args: ['Progress', 'ProgressProps', 'feedback'] },
  { name: 'select', type: 'wrapper', args: ['Select', 'SelectProps', 'inputs'] },
  { name: 'radio-group', type: 'wrapper', args: ['RadioGroup', 'RadioGroupProps', 'inputs'] },
  { name: 'tabs', type: 'wrapper', args: ['Tabs', 'TabsProps', 'navigation'] },
  { name: 'breadcrumb', type: 'wrapper', args: ['Breadcrumb', 'BreadcrumbProps', 'navigation'] },
  { name: 'pagination', type: 'wrapper', args: ['Pagination', 'PaginationProps', 'navigation'] },
  { name: 'table', type: 'wrapper', args: ['Table', 'TableProps', 'data-display'] },
  { name: 'accordion', type: 'wrapper', args: ['Accordion', 'AccordionProps', 'layout'] },
  { name: 'collapsible', type: 'wrapper', args: ['Collapsible', 'CollapsibleProps', 'layout'] },
  { name: 'scroll-area', type: 'wrapper', args: ['ScrollArea', 'ScrollAreaProps', 'layout'] },
  { name: 'dialog', type: 'wrapper', args: ['Dialog', 'DialogProps', 'overlay'] },
  { name: 'sheet', type: 'wrapper', args: ['Sheet', 'SheetProps', 'overlay'] },
  { name: 'popover', type: 'wrapper', args: ['Popover', 'PopoverProps', 'overlay'] },
  { name: 'tooltip', type: 'wrapper', args: ['Tooltip', 'TooltipProps', 'overlay'] },
  { name: 'alert-dialog', type: 'wrapper', args: ['AlertDialog', 'AlertDialogProps', 'overlay'] },
  { name: 'toggle-group', type: 'wrapper', args: ['ToggleGroup', 'ToggleGroupProps', 'misc'] },
  { name: 'button-group', type: 'wrapper', args: ['ButtonGroup', 'ButtonGroupProps', 'misc'] },
];

// 4. Run Generation
const baseDir = path.join('E:', 'TONY', 'ui', 'src', 'ui', 'components');

components.forEach(comp => {
  const compDir = path.join(baseDir, comp.name);
  if (!fs.existsSync(compDir)) {
    console.log(`Creating directory: ${compDir}`);
    fs.mkdirSync(compDir, { recursive: true });
  }

  const template = templates[comp.type];
  if (!template) {
    console.warn(`Template not found for: ${comp.name}`);
    return;
  }

  Object.entries(versions).forEach(([version, clipPath]) => {
    const fileName = `${comp.name}-${version}.tsx`;
    const filePath = path.join(compDir, fileName);
    const anim = animations[version];
    
    if (!fs.existsSync(filePath)) {
      console.log(`Generating ${fileName}`);
      const args = comp.args || [];
      const content = template(version, clipPath, anim, ...args);
      fs.writeFileSync(filePath, content.trim());
    } else {
      console.log(`Skipping ${fileName} (already exists)`);
    }
  });
});

console.log('Script finished.');
