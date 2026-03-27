import { cn } from '@/lib/utils';
import { type DataTableBaseProps } from '../_base/data-table';
import { Button } from './button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

export interface DataTableProps<T> extends DataTableBaseProps<T> {}

export function DataTable<T>({
    columns = [],
    data = [],
    className,
    paginated,
    paginationState,
    onPaginationChange,
    loading,
    emptyMessage = "No results.",
    onRowClick,
    ...props
}: DataTableProps<T>) {
    return (
        <div className={cn("space-y-4", className)}>
            <div className="rounded-md border border-[var(--df-border)]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((col) => (
                                <TableHead key={col.id} className={cn(col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left')}>
                                    {col.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : data.length ? (
                            data.map((row, i) => (
                                <TableRow 
                                    key={(row as any).id || i} 
                                    data-state={(props.selectedRows as Set<string>)?.has((row as any).id) && "selected"}
                                    onClick={() => onRowClick?.(row, i)}
                                    className={onRowClick ? "cursor-pointer" : undefined}
                                >
                                    {columns.map((col) => (
                                        <TableCell key={col.id} className={cn(col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left')}>
                                            {col.cell ? col.cell({ row, value: (row as any)[col.accessorKey as string] }) : (row as any)[col.accessorKey as string]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            
            {paginated && (
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPaginationChange?.({ ...paginationState!, pageIndex: (paginationState?.pageIndex || 0) - 1 })}
                        disabled={!paginationState?.pageIndex || paginationState.pageIndex <= 0}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPaginationChange?.({ ...paginationState!, pageIndex: (paginationState?.pageIndex || 0) + 1 })}
                        disabled={!paginationState || (paginationState.pageIndex + 1) * paginationState.pageSize >= (props.totalRows || 0)}
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
}
