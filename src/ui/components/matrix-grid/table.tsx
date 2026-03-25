import * as React from 'react';
import { TableBase, TableHeaderBase, TableBodyBase, TableFooterBase, TableRowBase, TableHeadBase, TableCellBase, TableCaptionBase } from '../_base/table';

import { cn } from '@/lib/utils';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <TableBase
      ref={ref}
      className={cn('w-full caption-bottom text-sm text-[var(--mg-text)] font-mono border-collapse', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableHeaderBase ref={ref} className={cn('[&_tr]:border-b border-[var(--mg-border)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableBodyBase
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableFooterBase
    ref={ref}
    className={cn(
      'border-t border-[var(--mg-border)] bg-[var(--mg-surface)] font-medium text-[var(--mg-text)]',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <TableRowBase
    ref={ref}
    className={cn(
      'border-b border-[var(--mg-border)] transition-colors hover:bg-[var(--mg-accent)]/10 data-[state=selected]:bg-[var(--mg-accent)]/20',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <TableHeadBase
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-[var(--mg-text-dim)] uppercase tracking-wider [&:has([role=checkbox])]:pr-0 border-r border-[var(--mg-border)] last:border-r-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <TableCellBase
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0 border-r border-[var(--mg-border)] last:border-r-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <TableCaptionBase
    ref={ref}
    className={cn('mt-4 text-sm text-[var(--mg-text-dim)] uppercase', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
