import * as React from 'react';

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
}

export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ type = 'text', ...props }, ref) => <input ref={ref} type={type} {...props} />
);
InputBase.displayName = 'InputBase';
