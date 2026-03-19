import React, { forwardRef, useState } from 'react';
import { ButtonProps } from '../../types/components/button';

export const TechPanelButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
  ({ children, styles, className, ...props }, ref) => {
    const [hover, setHover] = useState(false);
    
    // Extract base, border, accent from styles if present
    const accentColor = (styles as any)['--btn-accent'] || 'currentColor';

    return (
      <button
        ref={ref}
        className={className}
        style={{
          ...styles,
          position: 'relative',
          transition: 'all 0.2s ease-out',
          ...(hover ? { transform: 'translateX(4px)' } : {})
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {/* Decorative corner */}
        <span 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '8px',
            height: '8px',
            borderTop: `2px solid ${accentColor}`,
            borderRight: `2px solid ${accentColor}`,
            opacity: hover ? 1 : 0.5,
            transition: 'all 0.2s',
          }}
        />
        
        {/* Decorative bottom corner */}
         <span 
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-4px', // Offset for left border
            width: '8px',
            height: '8px',
            borderBottom: `2px solid ${accentColor}`,
            borderLeft: `2px solid ${accentColor}`,
            opacity: hover ? 1 : 0.5,
            transition: 'all 0.2s',
          }}
        />
        
        {children}
      </button>
    );
  }
);

TechPanelButton.displayName = 'TechPanelButton';
