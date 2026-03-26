'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  type?: BaseUIProps["uiType"];
}

const TableHandler = createHandler<TableProps & BaseUIProps>({
  componentName: "table",
  exportName: "Table"
});

const TableHeaderHandler = createHandler<React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableHeader"
});

const TableBodyHandler = createHandler<React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableBody"
});

const TableFooterHandler = createHandler<React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableFooter"
});

const TableRowHandler = createHandler<React.HTMLAttributes<HTMLTableRowElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableRow"
});

const TableHeadHandler = createHandler<React.ThHTMLAttributes<HTMLTableCellElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableHead"
});

const TableCellHandler = createHandler<React.TdHTMLAttributes<HTMLTableCellElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableCell"
});

const TableCaptionHandler = createHandler<React.HTMLAttributes<HTMLTableCaptionElement> & BaseUIProps>({
  componentName: "table",
  exportName: "TableCaption"
});

const TableContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  type?: string;
}>({});

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ version = "default", variant = "default", effects, type = "default", ...props }, ref) => {
    return (
      <TableContext.Provider value={{ version, variant, effects, type }}>
        <TableHandler
          ref={ref}
          version={version}
          variant={variant}
          effects={effects}
          type={type}
          {...props}
        />
      </TableContext.Provider>
    );
  }
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableHeaderHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableBodyHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableFooterHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableRowHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableHeadHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableCellHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TableContext);
    return (
      <TableCaptionHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        type={context.type}
        {...props}
      />
    );
  }
);
TableCaption.displayName = "TableCaption";

const TableExport = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
});

export {
  TableExport as Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
export default TableExport;


export type { BaseUIProps };
