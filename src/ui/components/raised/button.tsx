import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const RaisedButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
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

RaisedButton.displayName = 'RaisedButton';
