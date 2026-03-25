import * as React from 'react';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import { TableBase, TableHeaderBase, TableBodyBase, TableFooterBase, TableRowBase, TableHeadBase, TableCellBase, TableCaptionBase } from '../_base/table';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <TableBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'w-full caption-bottom text-sm font-mono', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeaderBase ref={ref} className={cn(energyShieldEffectsClass(effects), '[&_tr]:border-b border-[var(--es-hex-line)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableBodyBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableFooterBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'border-t bg-[var(--text-muted)]/10 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableRowBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'border-b border-[var(--es-hex-line)] transition-colors hover:bg-[var(--es-plasma-1)]/5 data-[state=selected]:bg-[var(--es-plasma-1)]/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableHeadBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'h-12 px-4 text-left align-middle font-bold text-[var(--text-muted)] [&:has([role=checkbox])]:pr-0 font-sans uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCellBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--text-primary)]',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TableCaptionBase
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 'mt-4 text-sm text-[var(--text-muted)]', className)}
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
