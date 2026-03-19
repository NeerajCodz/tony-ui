import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const CompactButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
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

CompactButton.displayName = 'CompactButton';
