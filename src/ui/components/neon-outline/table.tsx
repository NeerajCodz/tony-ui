'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic HTML table wrappers
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  version?: string;
  colors?: VariantColors;
}

const NeonOutlineTable = forwardRef<HTMLTableElement, TableProps>(
  ({ className, colors, style, ...props }, ref) => {
    const border = colors?.border || '#e5e7eb';
    return (
      <div className="relative w-full overflow-auto">
        <table
          ref={ref}
          className={`w-full caption-bottom text-sm ${className}`}
          style={{
              fontFamily: 'inherit',
              ...style
          }}
          {...props}
        />
      </div>
    );
  }
);
NeonOutlineTable.displayName = 'NeonOutlineTable';

const NeonOutlineTableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b ${className}`} style={style} {...props} />
  )
);
NeonOutlineTableHeader.displayName = 'NeonOutlineTableHeader';

const NeonOutlineTableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} style={style} {...props} />
  )
);
NeonOutlineTableBody.displayName = 'NeonOutlineTableBody';

const NeonOutlineTableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <tfoot ref={ref} className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`} style={style} {...props} />
  )
);
NeonOutlineTableFooter.displayName = 'NeonOutlineTableFooter';

const NeonOutlineTableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => {
    const border = colors?.border || '#e5e7eb';
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
NeonOutlineTableRow.displayName = 'NeonOutlineTableRow';

const NeonOutlineTableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineTableHead.displayName = 'NeonOutlineTableHead';

const NeonOutlineTableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineTableCell.displayName = 'NeonOutlineTableCell';

const NeonOutlineTableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <caption
      ref={ref}
      className={`mt-4 text-sm text-muted-foreground ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineTableCaption.displayName = 'NeonOutlineTableCaption';

export {
  NeonOutlineTable as Table,
  NeonOutlineTableHeader as TableHeader,
  NeonOutlineTableBody as TableBody,
  NeonOutlineTableFooter as TableFooter,
  NeonOutlineTableHead as TableHead,
  NeonOutlineTableRow as TableRow,
  NeonOutlineTableCell as TableCell,
  NeonOutlineTableCaption as TableCaption,
};
