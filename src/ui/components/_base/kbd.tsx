import * as React from 'react';

export interface KbdBaseProps extends React.HTMLAttributes<HTMLElement> {}

export const KbdBase = React.forwardRef<HTMLElement, KbdBaseProps>(
  ({ ...props }, ref) => <kbd ref={ref} {...props} />
);
KbdBase.displayName = 'KbdBase';
