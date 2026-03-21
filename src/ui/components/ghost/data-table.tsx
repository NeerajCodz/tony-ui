'use client';

import * as React from 'react';
import { DataTableBase } from '../_base/data-table';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type DataTableProps = Omit<React.ComponentPropsWithoutRef<typeof DataTableBase>, 'type'> & StyledProps;

export const DataTable = React.forwardRef<React.ElementRef<typeof DataTableBase>, DataTableProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <DataTableBase
      ref={ref}
      className={cx('w-full rounded p-2', className)}
      style={getSurfaceStyle(version ?? 'ghost', type, uiType, colors, style)}
      {...props}
    />
  )
);

DataTable.displayName = 'DataTable';

export default DataTable;
