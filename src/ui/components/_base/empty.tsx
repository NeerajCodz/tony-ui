import * as React from 'react';

export interface EmptyBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyBase = React.forwardRef<HTMLDivElement, EmptyBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
EmptyBase.displayName = 'EmptyBase';

export interface EmptyIconBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyIconBase = React.forwardRef<HTMLDivElement, EmptyIconBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
EmptyIconBase.displayName = 'EmptyIconBase';

export interface EmptyTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const EmptyTitleBase = React.forwardRef<HTMLHeadingElement, EmptyTitleBaseProps>(
  ({ ...props }, ref) => <h3 ref={ref} {...props} />
);
EmptyTitleBase.displayName = 'EmptyTitleBase';

export interface EmptyDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const EmptyDescriptionBase = React.forwardRef<HTMLParagraphElement, EmptyDescriptionBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
EmptyDescriptionBase.displayName = 'EmptyDescriptionBase';

export interface EmptyActionsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyActionsBase = React.forwardRef<HTMLDivElement, EmptyActionsBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
EmptyActionsBase.displayName = 'EmptyActionsBase';
