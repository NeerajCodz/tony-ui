import * as React from 'react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 'w-full caption-bottom text-sm font-sans', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <thead ref={ref} className={cn(quantumGateEffectsClass(effects), '[&_tr]:border-b border-[var(--qg-border)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'border-t bg-[var(--text-muted)]/10 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'border-b border-[var(--qg-border)] transition-colors hover:bg-[var(--qg-iris-1)]/5 data-[state=selected]:bg-[var(--qg-iris-1)]/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <th
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'h-12 px-4 text-left align-middle font-bold text-[var(--text-muted)] [&:has([role=checkbox])]:pr-0 font-sans uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <td
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--text-primary)]',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 'mt-4 text-sm text-[var(--text-muted)]', className)}
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
