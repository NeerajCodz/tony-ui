import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { TableBase, TableHeaderBase, TableBodyBase, TableFooterBase, TableRowBase, TableHeadBase, TableCellBase, TableCaptionBase } from '../_base/table';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <TableBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 'w-full caption-bottom text-sm font-mono', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeaderBase ref={ref} className={cn(holoFrameEffectsClass(effects), '[&_tr]:border-b border-[var(--hf-border-dim)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableBodyBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableFooterBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'border-t bg-[var(--hf-text)]/10 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableRowBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'border-b border-[var(--hf-border-dim)] transition-colors hover:bg-[var(--hf-border-main)]/5 data-[state=selected]:bg-[var(--hf-border-main)]/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeadBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'h-12 px-4 text-left align-middle font-bold text-[var(--hf-text)] [&:has([role=checkbox])]:pr-0 font-sans uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCellBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--hf-text)]',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCaptionBase
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 'mt-4 text-sm text-[var(--hf-text)]', className)}
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
