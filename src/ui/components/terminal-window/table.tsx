import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';
import { TableBase, TableHeaderBase, TableBodyBase, TableFooterBase, TableRowBase, TableHeadBase, TableCellBase, TableCaptionBase } from '../_base/table';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className='relative w-full overflow-auto'>
    <TableBase
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'w-full caption-bottom text-sm font-mono', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeaderBase ref={ref} className={cn(terminalWindowEffectsClass(effects), '[&_tr]:border-b border-[var(--tm-phosphor)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableBodyBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableFooterBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'border-t border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/5 font-medium [&>tr]:last:border-b-0 text-[var(--tm-phosphor)]', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableRowBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'border-b border-[var(--tm-phosphor)]/30 transition-colors hover:bg-[var(--tm-phosphor)]/10 data-[state=selected]:bg-[var(--tm-phosphor)]/20', className)}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeadBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'h-10 px-2 text-left align-middle font-medium text-[var(--tm-phosphor-dim)] [&:has([role=checkbox])]:pr-0 uppercase tracking-wider', className)}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCellBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'p-2 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--tm-phosphor)]', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCaptionBase
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'mt-4 text-sm text-[var(--tm-phosphor-dim)]', className)}
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
