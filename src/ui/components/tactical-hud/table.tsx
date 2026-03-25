import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import { TableBase, TableHeaderBase, TableBodyBase, TableFooterBase, TableRowBase, TableHeadBase, TableCellBase, TableCaptionBase } from '../_base/table';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <TableBase
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 'w-full caption-bottom text-sm font-sans', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeaderBase ref={ref} className={cn(tacticalHudEffectsClass(effects), '[&_tr]:border-b [&_tr]:border-[var(--th-primary)]/20', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableBodyBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableFooterBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'border-t border-[var(--th-primary)]/20 bg-[var(--th-muted)]/10 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableRowBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'border-b border-[var(--th-primary)]/20 transition-colors hover:bg-[var(--th-primary)]/5 data-[state=selected]:bg-[var(--th-primary)]/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeadBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'h-12 px-4 text-left align-middle font-bold text-[var(--th-muted)] [&:has([role=checkbox])]:pr-0 font-sans uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCellBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--th-primary)]',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCaptionBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'mt-4 text-sm text-[var(--th-muted)]', className)}
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
