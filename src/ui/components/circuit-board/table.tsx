import { cn } from '@/lib/utils';
import { TableBase, TableBodyBase, TableCaptionBase, TableCellBase, TableFooterBase, TableHeadBase, TableHeaderBase, TableRowBase } from '@/ui/components/_base/table';
import * as React from 'react';

const Table = React.forwardRef<HTMLTableElement, React.ComponentPropsWithoutRef<typeof TableBase>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto rounded-none border border-[var(--cb-trace)] shadow-[0_0_15px_var(--cb-trace)] bg-[var(--cb-soldermask)]">
      <TableBase
        ref={ref}
        className={cn('w-full caption-bottom text-sm font-mono uppercase tracking-wide text-[var(--cb-trace-dim)]', className)}
        {...props}
      />
    </div>
  )
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<typeof TableHeaderBase>>(
  ({ className, ...props }, ref) => (
    <TableHeaderBase ref={ref} className={cn('[&_tr]:border-b bg-[var(--cb-trace-dim)]/10', className)} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<typeof TableBodyBase>>(
  ({ className, ...props }, ref) => (
    <TableBodyBase
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<typeof TableFooterBase>>(
  ({ className, ...props }, ref) => (
    <TableFooterBase
      ref={ref}
      className={cn('bg-[var(--cb-trace-dim)]/5 border-t border-[var(--cb-trace)] font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<typeof TableRowBase>>(
  ({ className, ...props }, ref) => (
    <TableRowBase
      ref={ref}
      className={cn(
        'border-b border-[var(--cb-trace)] transition-colors hover:bg-[var(--cb-trace-dim)]/20 data-[state=selected]:bg-[var(--cb-trace-dim)]/20',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<typeof TableHeadBase>>(
  ({ className, ...props }, ref) => (
    <TableHeadBase
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-bold text-[var(--cb-trace-lit)] [&:has([role=checkbox])]:pr-0 drop-shadow-[0_0_2px_currentColor]',
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<typeof TableCellBase>>(
  ({ className, ...props }, ref) => (
    <TableCellBase
      ref={ref}
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.ComponentPropsWithoutRef<typeof TableCaptionBase>>(
  ({ className, ...props }, ref) => (
    <TableCaptionBase
      ref={ref}
      className={cn('mt-4 text-sm text-[var(--cb-trace-dim)]', className)}
      {...props}
    />
  )
);
TableCaption.displayName = 'TableCaption';

export {
Table,TableBody,TableCaption,TableCell,TableFooter,
TableHead,TableHeader,TableRow
};
