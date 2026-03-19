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
    
    // Data panel key style (flatter, more techy)
    const style = {
        '--key-color': `var(--${color}-500, ${color})`,
        borderColor: `var(--key-color)`,
        backgroundColor: `rgba(var(--${color}-rgb), 0.2)`,
        color: `var(--${color}-50)`,
    };

    return (
        <kbd
            ref={ref}
            className={cn(
                "pointer-events-none inline-flex h-7 select-none items-center gap-1 border-l-2 px-2 font-mono text-[10px] font-bold opacity-100 uppercase tracking-wider",
                className
            )}
            style={{
                ...style,
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)"
            }}
            {...props}
        >
            {children}
        </kbd>
    );
})
Kbd.displayName = "Kbd"

export default Kbd;
