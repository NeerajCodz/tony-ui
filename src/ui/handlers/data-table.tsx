'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { TableProps } from '../types/components/data-display';

const DataTableHandler = createHandler<TableProps & BaseUIProps>({
  componentName: 'data-table',
  exportName: 'DataTable'
});

const DataTable = React.forwardRef<HTMLDivElement, TableProps & BaseUIProps>(({ version, variant, effects, ...props }, ref) => {
  return (
    <DataTableHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  );
});

DataTable.displayName = 'DataTable';

export default DataTable;
export type { TableProps as DataTableProps };
