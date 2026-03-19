import React, { forwardRef } from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  version?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: string;
  styles?: React.CSSProperties;
}

export const DefaultAvatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ children, styles, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={className}
        style={styles}
        {...props}
      >
        {children}
      </span>
    );
  }
);

DefaultAvatar.displayName = 'DefaultAvatar';
