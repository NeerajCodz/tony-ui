'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  TableBase,
  TableHeaderBase,
  TableBodyBase,
  TableFooterBase,
  TableRowBase,
  TableHeadBase,
  TableCellBase,
  TableCaptionBase,
} from '../_base/table';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const TABLE_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.08)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : resolvedType === 'ghost'
            ? 'transparent'
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border ?? '#333';

  return (
    <div
      className="relative w-full overflow-auto"
      style={{
        clipPath: TABLE_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        boxShadow: '0 0 12px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
      }}
    >
      <TableBase
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        style={style}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    </div>
  );
});
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const headerBg =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? '#222'
      : resolvedType === 'inverse'
        ? palette.base ?? '#fff'
        : 'rgba(' + (palette.accentRgb ?? '50,50,50') + ', 0.15)';

  return (
    <TableHeaderBase
      ref={ref}
      className={cn('[&_tr]:border-b', className)}
      style={{
        backgroundColor: headerBg,
        ...style,
      }}
      {...props}
    />
  );
});
TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<
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

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const footerBg =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? '#222'
      : 'rgba(' + (palette.accentRgb ?? '50,50,50') + ', 0.1)';

  return (
    <TableFooterBase
      ref={ref}
      className={cn('border-t font-medium [&>tr]:last:border-b-0', className)}
      style={{
        backgroundColor: footerBg,
        ...style,
      }}
      {...props}
    />
  );
});
TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);

  return (
    <TableRowBase
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-white/5',
        className
      )}
      style={{
        borderColor: palette.border ?? '#333',
        ...style,
      }}
      {...props}
    />
  );
});
TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.foreground ?? '#000'
        : palette.foreground ?? '#fff';

  return (
    <TableHeadBase
      ref={ref}
      className={cn(
        'h-10 px-2 text-left align-middle font-bold uppercase tracking-wider [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      style={{
        color: textColor,
        letterSpacing: '0.08em',
        fontSize: '0.75rem',
        ...style,
      }}
      {...props}
    />
  );
});
TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.foreground ?? '#000'
        : palette.foreground ?? '#fff';

  return (
    <TableCellBase
      ref={ref}
      className={cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      style={{
        color: textColor,
        ...style,
      }}
      {...props}
    />
  );
});
TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);

  return (
    <TableCaptionBase
      ref={ref}
      className={cn('mt-4 text-sm uppercase tracking-wider', className)}
      style={{
        color: palette.foreground ?? '#aaa',
        opacity: 0.7,
        letterSpacing: '0.06em',
        ...style,
      }}
      {...props}
    />
  );
});
TableCaption.displayName = 'TableCaption';

export default Table;