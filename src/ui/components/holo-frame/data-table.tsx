import React from 'react';
import { cn } from '../../utils/component-helpers';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

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
  type = 'default', variant = 'neutral',
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
  const getTypeStyles = () => {
    switch (type) {
      case 'inverse': return { border: `1px solid hsl(var(--${color}-foreground))`, background: `hsl(var(--${color}-base))` };
      case 'contrast': return { border: `2px solid hsl(var(--${color}-foreground))`, background: `hsl(var(--${color}-base))` };
      case 'soft': return { border: 'none', background: `hsl(var(--${color}-base) / 0.15)` };
      default: return {};
    }
  };
  const typeStyles = getTypeStyles();


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

  return (
    <div className={cn("w-full overflow-hidden", className)} style={{
      boxShadow: `0 0 15px hsl(var(--${color}-base) / 0.1)`, border: `1px solid hsl(var(--${color}-base) / 0.3)`, background: `hsl(var(--${color}-base) / 0.02)`, backdropFilter: 'blur(4px)'
    , ...typeStyles}}>
      <div 
        className="w-full overflow-auto"
        style={{ ...typeStyles }}
      >
        <table className="w-full caption-bottom text-sm">
          <thead style={{
             borderBottom: `1px solid hsl(var(--${color}-base) / 0.2)`, background: `linear-gradient(90deg, transparent, hsl(var(--${color}-base) / 0.1), transparent)`
          , ...typeStyles}}>
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
                  style={{ borderBottom: `1px solid hsl(var(--${color}-base) / 0.1)` , ...typeStyles}}
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
    </div>
  );
};

export default DataTable;
