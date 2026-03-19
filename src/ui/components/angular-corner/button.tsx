import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const AngularCornerButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
  ({ children, styles, className, ...props }, ref) => {
    // Extract variables from styles if they are passed as style object
    // Or we assume 'styles' object contains the CSS vars
    // The handler passes 'styles' which is merged config.base + size + type(colors)

    const clipPath = (styles as any).clipPath || 'none';
    const bg = (styles as any)['--btn-bg'] || 'transparent';
    const border = (styles as any)['--btn-border'] || 'transparent';
    const fg = (styles as any)['--btn-fg'] || 'currentColor';
    const glow = (styles as any)['--btn-glow'] || 'transparent';

    return (
      <button
        ref={ref}
        className={className}
        style={{
          ...styles,
          position: 'relative',
          background: 'transparent',
          border: 'none',
          padding: 0,
          overflow: 'visible', // Allow glow
        }}
        {...props}
      >
        {/* Background / Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: clipPath,
            backgroundColor: border,
            transition: 'all 0.2s',
            zIndex: 0,
            boxShadow: `0 0 10px ${glow}`,
          }}
        />
        
        {/* Content Layer (slightly smaller to show border) */}
        <div
          style={{
            position: 'absolute',
            inset: '2px', // Border width
            clipPath: clipPath,
            backgroundColor: bg,
            transition: 'all 0.2s',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
           <span style={{ color: fg, zIndex: 2 }}>{children}</span>
        </div>
      </button>
    );
  }
);

AngularCornerButton.displayName = 'AngularCornerButton';
