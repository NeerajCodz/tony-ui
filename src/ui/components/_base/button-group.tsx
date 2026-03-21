import * as React from 'react';

export interface ButtonGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroupBase = React.forwardRef<HTMLDivElement, ButtonGroupBaseProps>(
  ({ orientation = 'horizontal', ...props }, ref) => (
    <div ref={ref} role="group" data-orientation={orientation} {...props} />
  )
);
ButtonGroupBase.displayName = 'ButtonGroupBase';
