import * as React from 'react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'w-full caption-bottom text-sm font-["JetBrains_Mono"]', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <thead ref={ref} className={cn(honeyCombEffectsClass(effects), '[&_tr]:border-b border-[var(--hc-hex-line)]', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), '[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'border-t bg-[var(--text-muted)]/10 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'border-b border-[var(--hc-hex-line)] transition-colors hover:bg-[var(--hc-plasma-1)]/5 data-[state=selected]:bg-[var(--hc-plasma-1)]/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, effects = 'on', ...props }, ref) => (
  <th
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'h-12 px-4 text-left align-middle font-bold text-[var(--text-muted)] [&:has([role=checkbox])]:pr-0 font-["Barlow"] uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, effects = 'on', ...props }, ref) => (
  <td
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--text-primary)]',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 'mt-4 text-sm text-[var(--text-muted)]', className)}
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
