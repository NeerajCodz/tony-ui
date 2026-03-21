import * as React from 'react';

export interface DataTableBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: any[];
  data?: any[];
}

export const DataTableBase = React.forwardRef<HTMLDivElement, DataTableBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
DataTableBase.displayName = 'DataTableBase';
