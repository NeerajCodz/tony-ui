import * as React from 'react';

export interface SkeletonBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkeletonBase = React.forwardRef<HTMLDivElement, SkeletonBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
SkeletonBase.displayName = 'SkeletonBase';
