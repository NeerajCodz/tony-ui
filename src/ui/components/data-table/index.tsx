
import React, { lazy, Suspense } from 'react';

// Fallback types
export type ColumnDef<TData, TValue = any> = {
  accessorKey: string;
  header: string | ((props: { column: any }) => React.ReactNode);
  cell?: (props: { row: TData }) => React.ReactNode;
};

// Lazy load versions
const versionComponents: Record<string, any> = {
  'angular-corner': lazy(() => import('./data-table-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./data-table-holo-frame.tsx')),
  'data-panel': lazy(() => import('./data-table-data-panel.tsx')),
  'circuit-board': lazy(() => import('./data-table-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./data-table-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./data-table-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./data-table-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./data-table-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./data-table-matrix-grid.tsx')),
  'neon': lazy(() => import('./data-table-neon.tsx')),
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  className?: string;
}

export const DataTable = <TData, TValue>({ 
  version = 'angular-corner',
  ...props 
}: DataTableProps<TData, TValue>) => {
  const VersionComponent = versionComponents[version] || versionComponents['angular-corner'];

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading Table...</div>}>
      <VersionComponent {...props} />
    </Suspense>
  );
};

export default DataTable;


