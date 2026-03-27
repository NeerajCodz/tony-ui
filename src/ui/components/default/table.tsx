import { cn } from '@/lib/utils';
import * as React from 'react';
import { TableBase, TableBodyBase, TableCaptionBase, TableCellBase, TableFooterBase, TableHeadBase, TableHeaderBase, TableRowBase, type TableBaseProps } from '../_base/table';

export interface TableProps extends TableBaseProps {}

const getTypeStyles = (type: string = 'default') => {
    switch(type) {
        case 'default': return '';
        case 'striped': return '[&_tbody_tr:nth-child(odd)]:bg-[var(--df-surface)]/50';
        case 'bordered': return 'border border-[var(--df-border)] [&_th]:border-r [&_td]:border-r [&_th]:border-b [&_td]:border-b';
        case 'minimal': return '[&_th]:border-b-0 [&_td]:border-b-0';
        default: return '';
    }
}

const getSizeStyles = (size: string = 'md') => {
    switch(size) {
        case 'sm': return '[&_td]:p-2 [&_th]:p-2 text-xs';
        case 'md': return '[&_td]:p-4 [&_th]:p-4 text-sm';
        case 'lg': return '[&_td]:p-6 [&_th]:p-6 text-base';
        default: return '[&_td]:p-4 [&_th]:p-4 text-sm';
    }
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, type = 'default', size = 'md', ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <TableBase
        ref={ref}
        type={type}
        size={size}
        className={cn(
            'w-full caption-bottom text-sm',
            getTypeStyles(type),
            getSizeStyles(size),
            className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <TableHeaderBase ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <TableBodyBase ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  )
);
TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <TableFooterBase
      ref={ref}
      className={cn('border-t bg-[var(--df-surface)]/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
);
TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <TableRowBase
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-[var(--df-surface)]/50 data-[state=selected]:bg-[var(--df-surface)]',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <TableHeadBase
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-[var(--df-muted)] [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <TableCellBase
      ref={ref}
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
);
TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <TableCaptionBase
      ref={ref}
      className={cn('mt-4 text-sm text-[var(--df-muted)]', className)}
      {...props}
    />
  )
);
TableCaption.displayName = 'TableCaption';
