'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic HTML table wrappers
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const TerminalWindowTable = forwardRef<HTMLTableElement, TableProps>(
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
TerminalWindowTable.displayName = 'TerminalWindowTable';

const TerminalWindowTableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b ${className}`} style={style} {...props} />
  )
);
TerminalWindowTableHeader.displayName = 'TerminalWindowTableHeader';

const TerminalWindowTableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} style={style} {...props} />
  )
);
TerminalWindowTableBody.displayName = 'TerminalWindowTableBody';

const TerminalWindowTableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <tfoot ref={ref} className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`} style={style} {...props} />
  )
);
TerminalWindowTableFooter.displayName = 'TerminalWindowTableFooter';

const TerminalWindowTableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement> & { colors?: VariantColors }>(
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
TerminalWindowTableRow.displayName = 'TerminalWindowTableRow';

const TerminalWindowTableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
TerminalWindowTableHead.displayName = 'TerminalWindowTableHead';

const TerminalWindowTableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      style={style}
      {...props}
    />
  )
);
TerminalWindowTableCell.displayName = 'TerminalWindowTableCell';

const TerminalWindowTableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement> & { colors?: VariantColors }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <caption
      ref={ref}
      className={`mt-4 text-sm text-muted-foreground ${className}`}
      style={style}
      {...props}
    />
  )
);
TerminalWindowTableCaption.displayName = 'TerminalWindowTableCaption';

export {
  TerminalWindowTable as Table,
  TerminalWindowTableHeader as TableHeader,
  TerminalWindowTableBody as TableBody,
  TerminalWindowTableFooter as TableFooter,
  TerminalWindowTableHead as TableHead,
  TerminalWindowTableRow as TableRow,
  TerminalWindowTableCell as TableCell,
  TerminalWindowTableCaption as TableCaption,
};
