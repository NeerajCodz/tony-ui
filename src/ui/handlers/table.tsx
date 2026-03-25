'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

type TableVersion = Version;
type TableVariant = Variant;

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  version?: TableVersion;
  variant?: TableVariant;
  type?: StyleComponentType;
  effects?: string;
}

interface TableContextValue {
  version: TableVersion;
  variant: TableVariant;
  type: StyleComponentType;
  effects?: string;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const TableContext = createContext<TableContextValue>({
  version: 'default',
  variant: 'default',
  type: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useTableContext = () => useContext(TableContext);

const TableRoot = React.forwardRef<HTMLTableElement, TableProps>(
  ({ version = 'default', variant = 'default', type = 'default', effects, children, ...props }, ref) => {
    const [versionModule, setVersionModule] = useState<any>(null);
    const colors = React.useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'table').then(setVersionModule).catch(() => setVersionModule(null));
    }, [version]);

    const Component = versionModule?.Table as React.ComponentType<any> | undefined;

    return (
      <TableContext.Provider value={{ version, variant, type, effects, colors, versionModule }}>
        {Component ? (
          <Component ref={ref} variant={variant} type={type} colors={colors} effects={effects} {...props}>
            {children}
          </Component>
        ) : (
          <table ref={ref} {...props}>
            {children}
          </table>
        )}
      </TableContext.Provider>
    );
  }
);
TableRoot.displayName = 'Table';

const makePart = <T extends HTMLElement>(key: string, tag: keyof React.JSX.IntrinsicElements) =>
  React.forwardRef<T, any>((props, ref) => {
    const { versionModule, variant, type, effects, colors } = useTableContext();
    const Component = versionModule?.[key] as React.ComponentType<any> | undefined;
    if (Component) return <Component ref={ref} variant={variant} type={type} colors={colors} effects={effects} {...props} />;
    return React.createElement(tag, { ref, ...props });
  });

const TableHeader = makePart<HTMLTableSectionElement>('TableHeader', 'thead');
const TableBody = makePart<HTMLTableSectionElement>('TableBody', 'tbody');
const TableFooter = makePart<HTMLTableSectionElement>('TableFooter', 'tfoot');
const TableHead = makePart<HTMLTableCellElement>('TableHead', 'th');
const TableRow = makePart<HTMLTableRowElement>('TableRow', 'tr');
const TableCell = makePart<HTMLTableCellElement>('TableCell', 'td');
const TableCaption = makePart<HTMLTableCaptionElement>('TableCaption', 'caption');

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
});

export default Table;
