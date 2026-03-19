'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic HTML table wrappers
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const MatrixGridTable = forwardRef<HTMLTableElement, TableProps>(
  ({ className, colors, type, style, ...props }, ref) => {
    let border = colors?.border || '#e5e7eb';
    if (type === 'inverse') {
      border = colors?.foreground || '#ffffff';
    } else if (type === 'contrast') {
      border = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      border = colors?.border ? `${colors.border}40` : border;
    }
    return (
      <div className="relative w-full overflow-auto">
        <table
          ref={ref}
          className={`w-full caption-bottom text-sm ${className}`}
          style={{
              fontFamily: 'monospace',
              ...style
          }}
          {...props}
        />
      </div>
    );
  }
);
MatrixGridTable.displayName = 'MatrixGridTable';

const MatrixGridTableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b ${className}`} style={style} {...props} />
  )
);
MatrixGridTableHeader.displayName = 'MatrixGridTableHeader';

const MatrixGridTableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} style={style} {...props} />
  )
);
MatrixGridTableBody.displayName = 'MatrixGridTableBody';

const MatrixGridTableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tfoot ref={ref} className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`} style={style} {...props} />
  )
);
MatrixGridTableFooter.displayName = 'MatrixGridTableFooter';

const MatrixGridTableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => {
    let border = colors?.border || '#e5e7eb';
    if (type === 'inverse') {
      border = colors?.foreground || '#ffffff';
    } else if (type === 'contrast') {
      border = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      border = colors?.border ? `${colors.border}40` : border;
    }
    return (
        <tr
            ref={ref}
            className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
            style={{
                borderBottom: `1px solid ${border}`,
                ...style
            }}
            {...props}
        />
    );
  }
);
MatrixGridTableRow.displayName = 'MatrixGridTableRow';

const MatrixGridTableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
MatrixGridTableHead.displayName = 'MatrixGridTableHead';

const MatrixGridTableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
MatrixGridTableCell.displayName = 'MatrixGridTableCell';

const MatrixGridTableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <caption
      ref={ref}
      className={`mt-4 text-sm text-muted-foreground ${className}`}
      style={style}
      {...props}
    />
  )
);
MatrixGridTableCaption.displayName = 'MatrixGridTableCaption';

export {
  MatrixGridTable as Table,
  MatrixGridTableHeader as TableHeader,
  MatrixGridTableBody as TableBody,
  MatrixGridTableFooter as TableFooter,
  MatrixGridTableHead as TableHead,
  MatrixGridTableRow as TableRow,
  MatrixGridTableCell as TableCell,
  MatrixGridTableCaption as TableCaption,
};
