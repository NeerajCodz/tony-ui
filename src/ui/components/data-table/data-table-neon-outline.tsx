
import React from 'react';
import { cn } from '../../utils/component-helpers';
import { ChevronDown, ChevronUp, ChevronsUpDown, Filter, MoreHorizontal } from 'lucide-react';

export interface ColumnDef<TData, TValue> {
  accessorKey: string;
  header: string | ((props: { column: any }) => React.ReactNode);
  cell?: (props: { row: TData }) => React.ReactNode;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  className?: string;
}

const DataTable = <TData, TValue>({
  columns = [],
  data = [],
  variant = 'neutral',
  className,
  ...props
}: DataTableProps<TData, TValue>) => {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const handleSort = (key: string) => {
    if (sortColumn === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    return [...data].sort((a: any, b: any) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  // Version specific styles
  const versionStyles = {
    'angular-corner': {
      wrapper: `border: 1px solid hsl(var(--${color}-base) / 0.5); background: hsl(var(--${color}-base) / 0.05); clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);`,
      header: `background: hsl(var(--${color}-base) / 0.1); border-bottom: 1px solid hsl(var(--${color}-base) / 0.3);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.1); hover:bg-white/5`,
    },
    'holo-frame': {
      wrapper: `box-shadow: 0 0 15px hsl(var(--${color}-base) / 0.1); border: 1px solid hsl(var(--${color}-base) / 0.3); background: hsl(var(--${color}-base) / 0.02); backdrop-filter: blur(4px);`,
      header: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.2); background: linear-gradient(90deg, transparent, hsl(var(--${color}-base) / 0.1), transparent);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.1);`,
    },
    'data-panel': {
      wrapper: `border-top: 2px solid hsl(var(--${color}-base)); border-bottom: 2px solid hsl(var(--${color}-base)); background: hsl(var(--background));`,
      header: `background: hsl(var(--muted)); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.75rem;`,
      row: `border-bottom: 1px dashed hsl(var(--border));`,
    },
    'circuit-board': {
      wrapper: `background-image: radial-gradient(hsl(var(--${color}-base) / 0.2) 1px, transparent 1px); background-size: 20px 20px; border: 1px solid hsl(var(--${color}-base) / 0.3);`,
      header: `background: hsl(var(--${color}-base) / 0.1); border-bottom: 2px solid hsl(var(--${color}-base) / 0.4);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.2);`,
    },
    'quantum-gate': {
      wrapper: `clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); border: 1px solid hsl(var(--${color}-base) / 0.4); background: hsl(var(--${color}-base) / 0.05);`,
      header: `background: hsl(var(--${color}-base) / 0.15); clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.1);`,
    },
    'tactical-hud': {
      wrapper: `border: 1px solid hsl(var(--${color}-base)); background: hsl(var(--background) / 0.9); position: relative;`,
      header: `background: hsl(var(--${color}-base) / 0.2); text-transform: uppercase; letter-spacing: 1px; font-weight: bold;`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.3);`,
    },
    'energy-shield': {
      wrapper: `box-shadow: 0 0 20px hsl(var(--${color}-base) / 0.2), inset 0 0 20px hsl(var(--${color}-base) / 0.1); border: 1px solid hsl(var(--${color}-base) / 0.5); border-radius: 8px; overflow: hidden;`,
      header: `background: hsl(var(--${color}-base) / 0.1); border-bottom: 1px solid hsl(var(--${color}-base) / 0.3);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.1);`,
    },
    'terminal-window': {
      wrapper: `border: 2px solid hsl(var(--${color}-base)); background: black; font-family: monospace;`,
      header: `background: hsl(var(--${color}-base)); color: black; font-weight: bold;`,
      row: `border-bottom: 1px dashed hsl(var(--${color}-base) / 0.5);`,
    },
    'matrix-grid': {
      wrapper: `border: 1px solid hsl(var(--${color}-base)); background: black; box-shadow: 0 0 10px hsl(var(--${color}-base) / 0.5);`,
      header: `border-bottom: 1px solid hsl(var(--${color}-base)); text-shadow: 0 0 5px hsl(var(--${color}-base));`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.3);`,
    },
    'neon-outline': {
      wrapper: `border: 2px solid hsl(var(--${color}-base)); box-shadow: 0 0 10px hsl(var(--${color}-base)), inset 0 0 5px hsl(var(--${color}-base)); background: transparent;`,
      header: `border-bottom: 2px solid hsl(var(--${color}-base)); background: hsl(var(--${color}-base) / 0.1);`,
      row: `border-bottom: 1px solid hsl(var(--${color}-base) / 0.5);`,
    }
  };

  // @ts-ignore
  const currentStyle = versionStyles['neon-outline'] || versionStyles['angular-corner'];

  return (
    <div className={cn("w-full overflow-hidden", className)} style={{
      // @ts-ignore
      cssText: currentStyle.wrapper 
      // Note: cssText isn't valid React prop, we are just storing it here to hint at implementation. 
      // Since we can't use raw CSS strings in style prop easily without parsing, we use tailwind classes + inline styles
    }}>
      {/* Actual implementation using standard Tailwind + dynamic styles */}
      <div 
        className="w-full overflow-auto rounded-md"
        style={{
          // Apply dynamic border/bg from version logic manually mapped
          
          
          
          
          // Default fallback
          border: `1px solid hsl(var(--${color}-base) / 0.3)`, backgroundColor: `hsl(var(--${color}-base) / 0.05)`
        }}
      >
        <table className="w-full caption-bottom text-sm">
          <thead style={{
             backgroundColor: `hsl(var(--${color}-base) / 0.1)`
          }}>
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {columns.map((col, i) => (
                <th 
                  key={i} 
                  className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleSort(col.accessorKey)}
                >
                  <div className="flex items-center gap-2">
                    {typeof col.header === 'function' ? col.header({ column: col }) : col.header}
                    {sortColumn === col.accessorKey && (
                      sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                    {sortColumn !== col.accessorKey && <ChevronsUpDown className="h-4 w-4 opacity-50" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {sortedData.length > 0 ? (
              sortedData.map((row, i) => (
                <tr 
                  key={i} 
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  style={{ borderColor: `hsl(var(--${color}-base) / 0.1)` }}
                >
                  {columns.map((col, j) => (
                    <td key={j} className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {col.cell ? col.cell({ row }) : (row as any)[col.accessorKey]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls (Mock) */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {sortedData.length} row(s)
        </div>
        <div className="space-x-2">
          <button 
            className="px-3 py-1 border rounded text-sm disabled:opacity-50 hover:bg-accent transition-colors"
            disabled
            style={{ borderColor: `hsl(var(--${color}-base) / 0.3)` }}
          >
            Previous
          </button>
          <button 
            className="px-3 py-1 border rounded text-sm disabled:opacity-50 hover:bg-accent transition-colors"
            disabled
            style={{ borderColor: `hsl(var(--${color}-base) / 0.3)` }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

