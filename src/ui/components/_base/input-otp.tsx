import * as React from 'react';

export interface InputOTPBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
}

export const InputOTPBase = React.forwardRef<HTMLDivElement, InputOTPBaseProps>(
  ({ maxLength = 6, value, onChange, ...props }, ref) => (
    <div ref={ref} data-max-length={maxLength} data-otp-value={value ?? ''} {...props} />
  )
);
InputOTPBase.displayName = 'InputOTPBase';

export interface InputOTPGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPGroupBase = React.forwardRef<HTMLDivElement, InputOTPGroupBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputOTPGroupBase.displayName = 'InputOTPGroupBase';

export interface InputOTPSlotBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

export const InputOTPSlotBase = React.forwardRef<HTMLDivElement, InputOTPSlotBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputOTPSlotBase.displayName = 'InputOTPSlotBase';

export interface InputOTPSeparatorBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPSeparatorBase = React.forwardRef<HTMLDivElement, InputOTPSeparatorBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputOTPSeparatorBase.displayName = 'InputOTPSeparatorBase';
