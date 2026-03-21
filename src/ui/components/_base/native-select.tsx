import * as React from 'react';

export interface NativeSelectBaseProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: string;
}

export const NativeSelectBase = React.forwardRef<HTMLSelectElement, NativeSelectBaseProps>(
  ({ ...props }, ref) => <select ref={ref} {...props} />
);
NativeSelectBase.displayName = 'NativeSelectBase';
