import * as React from 'react';

export interface SpinnerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string | number;
}

export const SpinnerBase = React.forwardRef<HTMLDivElement, SpinnerBaseProps>(
  ({ size, ...props }, ref) => <div ref={ref} data-size={size} {...props} />
);
SpinnerBase.displayName = 'SpinnerBase';
