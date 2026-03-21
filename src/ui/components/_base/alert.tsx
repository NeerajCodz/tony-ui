import * as React from 'react';

export interface AlertBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
}

export const AlertBase = React.forwardRef<HTMLDivElement, AlertBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
AlertBase.displayName = 'AlertBase';

export interface AlertTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitleBase = React.forwardRef<HTMLParagraphElement, AlertTitleBaseProps>(
  ({ ...props }, ref) => <h5 ref={ref} {...props} />
);
AlertTitleBase.displayName = 'AlertTitleBase';

export interface AlertDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescriptionBase = React.forwardRef<HTMLParagraphElement, AlertDescriptionBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
AlertDescriptionBase.displayName = 'AlertDescriptionBase';
