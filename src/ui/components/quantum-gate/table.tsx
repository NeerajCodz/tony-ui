'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic HTML table wrappers
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const QuantumGateTable = forwardRef<HTMLTableElement, TableProps>(
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
              fontFamily: 'inherit',
              ...style
          }}
          {...props}
        />
      </div>
    );
  }
);
QuantumGateTable.displayName = 'QuantumGateTable';

const QuantumGateTableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b ${className}`} style={style} {...props} />
  )
);
QuantumGateTableHeader.displayName = 'QuantumGateTableHeader';

const QuantumGateTableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} style={style} {...props} />
  )
);
QuantumGateTableBody.displayName = 'QuantumGateTableBody';

const QuantumGateTableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tfoot ref={ref} className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`} style={style} {...props} />
  )
);
QuantumGateTableFooter.displayName = 'QuantumGateTableFooter';

const QuantumGateTableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement> & { colors?: VariantColors }>(
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
QuantumGateTableRow.displayName = 'QuantumGateTableRow';

const QuantumGateTableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
QuantumGateTableHead.displayName = 'QuantumGateTableHead';

const QuantumGateTableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
QuantumGateTableCell.displayName = 'QuantumGateTableCell';

const QuantumGateTableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <caption
      ref={ref}
      className={`mt-4 text-sm text-muted-foreground ${className}`}
      style={style}
      {...props}
    />
  )
);
QuantumGateTableCaption.displayName = 'QuantumGateTableCaption';

export {
  QuantumGateTable as Table,
  QuantumGateTableHeader as TableHeader,
  QuantumGateTableBody as TableBody,
  QuantumGateTableFooter as TableFooter,
  QuantumGateTableHead as TableHead,
  QuantumGateTableRow as TableRow,
  QuantumGateTableCell as TableCell,
  QuantumGateTableCaption as TableCaption,
};
