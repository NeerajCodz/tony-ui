import * as React from 'react';

export interface BadgeBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
}

export const BadgeBase = React.forwardRef<HTMLDivElement, BadgeBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
BadgeBase.displayName = 'BadgeBase';
