import React from 'react';
import { cn } from '../../../lib/utils';
import { CLIP_PATHS } from '../../utils/clip-paths.js';

// Get the notch clip-path from centralized definitions
const NOTCH_CLIP_PATH = CLIP_PATHS['notch'].small;

// Variant colors map for dynamic styling
const variantColors = {
  default: 'cyan',
  destructive: 'red',
  success: 'emerald',
  warning: 'amber',
  info: 'blue'
};

// Styles configuration
const versionStyles = {
  'angular-corner': {
    root: "relative w-full border-0 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-black/40 backdrop-blur-sm",
  },
  'default': {
    root: "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
  }
};

const Alert = React.forwardRef(({ className, variant = 'default', version = 'angular-corner', ...props }: any, ref: any) => {
    // Determine color based on variant
    const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
    
    // Determine styles based on version (though this file is technically for angular-corner, we can be safe)
    const styles = versionStyles['angular-corner'];

    // Dynamic styles for the cyber look
    const dynamicStyle: React.CSSProperties = {
        '--tw-shadow-color': `var(--${color}-500, ${color})`,
        borderLeft: `4px solid var(--${color}-500, ${color})`,
        clipPath: NOTCH_CLIP_PATH, // Apply clip-path via inline style for consistency
    } as React.CSSProperties;
    
    // Glow effect filter
    const glowStyle = {
         filter: `drop-shadow(0 0 2px var(--${color}-900, ${color}))`
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
            styles.root, 
            `text-${color}-50`,
            // Target children for consistent styling
            `[&>h5]:text-${color}-100 [&>h5]:font-bold [&>h5]:uppercase [&>h5]:tracking-wider [&>h5]:font-mono`,
            `[&>div]:text-${color}-200 [&>div]:opacity-90 [&>div]:font-mono`,
            `[&>svg]:text-${color}-400`,
            className
        )}
        style={{...dynamicStyle, ...glowStyle}}
        {...props}
      >
        {/* Decorative corner markers */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 opacity-60" style={{ borderColor: `var(--${color}-500)` }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-current opacity-40" />
        
        {/* Background Scanline Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] pointer-events-none z-0" />
        
        <div className="relative z-10">
            {props.children}
        </div>
      </div>
    );
})
Alert.displayName = "Alert"

export default Alert;
