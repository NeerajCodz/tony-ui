import * as React from 'react';
import { cn } from '@/lib/utils';
import { glassEffectsClass, type GlassEffects } from './_effects';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className='relative w-full overflow-auto'>
    <table
      ref={ref}
      className={cn(
        'w-full caption-bottom text-sm font-display text-[var(--df-text)]',
        glassEffectsClass(effects),
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b border-[var(--gl-glass-border)]/20', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('border-t bg-[var(--gl-glass-bg)]/50 font-medium [&>tr]:last:border-b-0', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-[var(--gl-glass-border)]/10 transition-colors hover:bg-[var(--gl-glass-bg)]/50 data-[state=selected]:bg-[var(--gl-glass-bg)]/50',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-[var(--df-muted-text)] [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { effects?: GlassEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-[var(--df-muted-text)]', className)}
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
