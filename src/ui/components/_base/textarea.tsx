import * as React from 'react';

export interface TextareaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: string;
}

export const TextareaBase = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ ...props }, ref) => <textarea ref={ref} {...props} />
);
TextareaBase.displayName = 'TextareaBase';
