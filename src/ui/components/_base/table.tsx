import * as React from 'react';

export interface TableBaseProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export const TableBase = React.forwardRef<HTMLTableElement, TableBaseProps>(
  ({ ...props }, ref) => <table ref={ref} {...props} />
);
TableBase.displayName = 'TableBase';

export interface TableHeaderBaseProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeaderBase = React.forwardRef<HTMLTableSectionElement, TableHeaderBaseProps>(
  ({ ...props }, ref) => <thead ref={ref} {...props} />
);
TableHeaderBase.displayName = 'TableHeaderBase';

export interface TableBodyBaseProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBodyBase = React.forwardRef<HTMLTableSectionElement, TableBodyBaseProps>(
  ({ ...props }, ref) => <tbody ref={ref} {...props} />
);
TableBodyBase.displayName = 'TableBodyBase';

export interface TableFooterBaseProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableFooterBase = React.forwardRef<HTMLTableSectionElement, TableFooterBaseProps>(
  ({ ...props }, ref) => <tfoot ref={ref} {...props} />
);
TableFooterBase.displayName = 'TableFooterBase';

export interface TableRowBaseProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRowBase = React.forwardRef<HTMLTableRowElement, TableRowBaseProps>(
  ({ ...props }, ref) => <tr ref={ref} {...props} />
);
TableRowBase.displayName = 'TableRowBase';

export interface TableHeadBaseProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHeadBase = React.forwardRef<HTMLTableCellElement, TableHeadBaseProps>(
  ({ ...props }, ref) => <th ref={ref} {...props} />
);
TableHeadBase.displayName = 'TableHeadBase';

export interface TableCellBaseProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCellBase = React.forwardRef<HTMLTableCellElement, TableCellBaseProps>(
  ({ ...props }, ref) => <td ref={ref} {...props} />
);
TableCellBase.displayName = 'TableCellBase';

export interface TableCaptionBaseProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

export const TableCaptionBase = React.forwardRef<HTMLTableCaptionElement, TableCaptionBaseProps>(
  ({ ...props }, ref) => <caption ref={ref} {...props} />
);
TableCaptionBase.displayName = 'TableCaptionBase';
