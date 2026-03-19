import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const GhostButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
  ({ children, styles, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={className}
        style={styles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GhostButton.displayName = 'GhostButton';
