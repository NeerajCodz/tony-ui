"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  type?: BaseUIProps["uiType"];
  columns?: any[];
  data?: any[];
}

const DataTableHandler = createHandler<DataTableProps & BaseUIProps>({
  componentName: "data-table",
  exportName: "DataTable"
});

const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(
  ({ version = "default", variant = "default", effects, type = "default", ...props }, ref) => {
    return (
      <DataTableHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        uiType={type}
        {...props}
      />
    );
  }
);
DataTable.displayName = "DataTable";

export { DataTable };
export default DataTable;



export type { BaseUIProps };
