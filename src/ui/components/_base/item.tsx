import * as React from 'react';

export interface ItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemBase = React.forwardRef<HTMLDivElement, ItemBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ItemBase.displayName = 'ItemBase';
