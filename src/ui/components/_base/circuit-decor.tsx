import * as React from 'react';

export interface CircuitDecorBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const CircuitDecorBase = React.forwardRef<HTMLSpanElement, CircuitDecorBaseProps>(
  (props, ref) => <span ref={ref} aria-hidden="true" {...props} />
);
CircuitDecorBase.displayName = 'CircuitDecorBase';
