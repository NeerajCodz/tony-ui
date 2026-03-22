import * as React from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/ui/components/circuit-board/table';
import { Button } from '@/ui/components/circuit-board/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DataTableColumn<T> {
    id: string;
    header: React.ReactNode;
    accessorKey?: keyof T;
    cell?: (props: { row: T; value: any }) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
}

interface DataTablePaginationState {
    pageIndex: number;
    pageSize: number;
}

interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    data: T[];
    className?: string;
    paginated?: boolean;
    paginationState?: DataTablePaginationState;
    onPaginationChange?: (state: DataTablePaginationState) => void;
    totalRows?: number;
    loading?: boolean;
    emptyMessage?: React.ReactNode;
    onRowClick?: (row: T, index: number) => void;
    selectedRows?: Set<string>;
}

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
        <div className={cn("space-y-4 font-mono uppercase tracking-wide", className)}>
            <div className="rounded-none border border-[var(--cb-trace)] shadow-[0_0_10px_var(--cb-trace)]">
                <Table>
                    <TableHeader>
                        <TableRow className="border-[var(--cb-trace)]">
                            {columns.map((col) => (
                                <TableHead key={col.id} className={cn('text-[var(--cb-trace-dim)]', col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left')}>
                                    {col.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow className="border-[var(--cb-trace)]">
                                <TableCell colSpan={columns.length} className="h-24 text-center text-[var(--cb-trace-dim)]">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : data.length ? (
                            data.map((row, i) => (
                                <TableRow 
                                    key={(row as any).id || i} 
                                    data-state={props.selectedRows?.has((row as any).id) ? "selected" : undefined}
                                    onClick={() => onRowClick?.(row, i)}
                                    className={cn("border-[var(--cb-trace)] hover:bg-[var(--cb-trace)]/10", onRowClick ? "cursor-pointer" : undefined)}
                                >
                                    {columns.map((col) => (
                                        <TableCell key={col.id} className={cn('text-[var(--cb-trace-lit)]', col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left')}>
                                            {col.cell ? col.cell({ row, value: (row as any)[col.accessorKey as string] }) : (row as any)[col.accessorKey as string]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow className="border-[var(--cb-trace)]">
                                <TableCell colSpan={columns.length} className="h-24 text-center text-[var(--cb-trace-dim)]">
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
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPaginationChange?.({ ...paginationState!, pageIndex: (paginationState?.pageIndex || 0) + 1 })}
                        disabled={!paginationState || (paginationState.pageIndex + 1) * paginationState.pageSize >= (props.totalRows || 0)}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
