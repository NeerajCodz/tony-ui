import React from 'react';
import { cn } from '../../../lib/utils';

const variantColors = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue'
};

const Kbd = React.forwardRef(({ className, variant = 'default', children, ...props }: any, ref: any) => {
    const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
    
    // Cyber key style with dynamic colors
    const style = {
        '--key-color': `var(--${color}-500, ${color})`,
        '--key-bg': `rgba(var(--${color}-rgb), 0.1)`,
        borderColor: `var(--key-color)`,
        backgroundColor: `var(--key-bg)`,
        color: `var(--${color}-100)`,
        boxShadow: `0 2px 0 var(--${color}-900)`
    };

    return (
        <kbd
            ref={ref}
            className={cn(
                "pointer-events-none inline-flex h-8 select-none items-center gap-1 border border-b-4 px-2.5 font-mono text-[11px] font-medium opacity-100 rounded-md clip-path-notch-sm",
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </kbd>
    );
})
Kbd.displayName = "Kbd"

export default Kbd;
