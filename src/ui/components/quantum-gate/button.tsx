import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const QuantumGateButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
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

QuantumGateButton.displayName = 'QuantumGateButton';
