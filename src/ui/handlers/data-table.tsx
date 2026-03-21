import React, { useEffect, useState } from 'react';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

type DataTableVersion = Version;
type DataTableVariant = Variant;

export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: DataTableVersion;
  variant?: DataTableVariant;
  type?: StyleComponentType;
  columns?: any[];
  data?: any[];
}

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(
  ({ version = 'default', variant = 'default', type = 'default', ...props }, ref) => {
    const [Component, setComponent] = useState<any>(null);
    const colors = React.useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'data-table').then((m) => setComponent(() => m.default)).catch(() => setComponent(null));
    }, [version]);

    if (!Component) {
      return <div ref={ref} {...props} />;
    }

    return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
  }
);

DataTable.displayName = 'DataTable';

export default DataTable;

