import * as React from 'react';

/**
 * Data table sizes
 */
export type DataTableSize = 'sm' | 'md' | 'lg';

/**
 * Column definition for data table
 */
export interface DataTableColumn<T = unknown> {
  /**
   * Unique column key
   */
  id: string;
  
  /**
   * Column header text
   */
  header?: string | React.ReactNode;
  
  /**
   * Cell accessor key or render function
   */
  accessorKey?: keyof T;
  
  /**
   * Custom cell renderer
   */
  cell?: (props: { row: T; value: unknown }) => React.ReactNode;
  
  /**
   * Whether column is sortable
   * @default false
   */
  sortable?: boolean;
  
  /**
   * Whether column is filterable
   * @default false
   */
  filterable?: boolean;
  
  /**
   * Column width (CSS value)
   */
  width?: string | number;
  
  /**
   * Minimum width (CSS value)
   */
  minWidth?: string | number;
  
  /**
   * Maximum width (CSS value)
   */
  maxWidth?: string | number;
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Whether column is pinned
   */
  pinned?: 'left' | 'right' | false;
  
  /**
   * Whether column is visible
   * @default true
   */
  visible?: boolean;
}

/**
 * Sort state
 */
export interface DataTableSortState {
  column: string;
  direction: 'asc' | 'desc';
}

/**
 * Filter state
 */
export interface DataTableFilterState {
  column: string;
  value: string;
  operator?: 'contains' | 'equals' | 'startsWith' | 'endsWith';
}

/**
 * Pagination state
 */
export interface DataTablePaginationState {
  pageIndex: number;
  pageSize: number;
}

// ============================================================================
// Data Table
// ============================================================================

export interface DataTableBaseProps<T = unknown> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Column definitions
   */
  columns?: DataTableColumn<T>[];
  
  /**
   * Table data
   */
  data?: T[];
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DataTableSize;
  
  /**
   * Whether rows are selectable
   * @default false
   */
  selectable?: boolean;
  
  /**
   * Selected row IDs
   */
  selectedRows?: Set<string> | string[];
  
  /**
   * Row selection callback
   */
  onSelectionChange?: (selectedRows: Set<string>) => void;
  
  /**
   * Whether to enable sorting
   * @default true
   */
  sortable?: boolean;
  
  /**
   * Current sort state
   */
  sortState?: DataTableSortState;
  
  /**
   * Sort state callback
   */
  onSortChange?: (sortState: DataTableSortState | null) => void;
  
  /**
   * Whether to enable filtering
   * @default false
   */
  filterable?: boolean;
  
  /**
   * Current filter state
   */
  filterState?: DataTableFilterState[];
  
  /**
   * Filter state callback
   */
  onFilterChange?: (filterState: DataTableFilterState[]) => void;
  
  /**
   * Whether to enable pagination
   * @default false
   */
  paginated?: boolean;
  
  /**
   * Pagination state
   */
  paginationState?: DataTablePaginationState;
  
  /**
   * Pagination state callback
   */
  onPaginationChange?: (paginationState: DataTablePaginationState) => void;
  
  /**
   * Total row count (for server-side pagination)
   */
  totalRows?: number;
  
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * No data message
   * @default 'No data'
   */
  emptyMessage?: React.ReactNode;
  
  /**
   * Row key accessor
   * @default 'id'
   */
  rowKey?: keyof T | ((row: T) => string);
  
  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void;
  
  /**
   * Row double-click handler
   */
  onRowDoubleClick?: (row: T, index: number) => void;
  
  /**
   * Whether rows are striped
   * @default false
   */
  striped?: boolean;
  
  /**
   * Whether rows are hoverable
   * @default true
   */
  hoverable?: boolean;
  
  /**
   * Whether to show borders
   * @default true
   */
  bordered?: boolean;
  
  /**
   * Whether to enable column resizing
   * @default false
   */
  resizable?: boolean;
  
  /**
   * Whether to enable column reordering
   * @default false
   */
  reorderable?: boolean;
  
  /**
   * Sticky header
   * @default false
   */
  stickyHeader?: boolean;
}

/**
 * DataTableBase - Feature-rich data table
 * 
 * Anatomy:
 * - DataTable (root wrapper)
 *   - DataTableToolbar (filters, search, actions)
 *   - DataTableContent (scrollable table area)
 *     - Table element
 *       - Header rows
 *       - Body rows
 *   - DataTablePagination
 * 
 * Features:
 * - Sorting (client/server)
 * - Filtering (global/column)
 * - Pagination (client/server)
 * - Row selection (single/multi)
 * - Column resizing
 * - Column reordering
 * - Column pinning
 * - Column visibility toggle
 * - Loading states
 * - Empty states
 * 
 * Accessibility:
 * - Uses native table semantics
 * - Keyboard navigation
 * - aria-sort for sorted columns
 * - aria-selected for selected rows
 */
export const DataTableBase = React.forwardRef<HTMLDivElement, DataTableBaseProps>(
  (
    {
      columns,
      data,
      size = 'md',
      selectable = false,
      sortable = true,
      filterable = false,
      paginated = false,
      loading = false,
      striped = false,
      hoverable = true,
      bordered = true,
      resizable = false,
      reorderable = false,
      stickyHeader = false,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="grid"
      aria-busy={loading || undefined}
      data-size={size}
      data-selectable={selectable || undefined}
      data-sortable={sortable || undefined}
      data-filterable={filterable || undefined}
      data-paginated={paginated || undefined}
      data-loading={loading || undefined}
      data-striped={striped || undefined}
      data-hoverable={hoverable || undefined}
      data-bordered={bordered || undefined}
      data-resizable={resizable || undefined}
      data-reorderable={reorderable || undefined}
      data-sticky-header={stickyHeader || undefined}
      {...props}
    />
  )
);
DataTableBase.displayName = 'DataTableBase';

// ============================================================================
// Data Table Toolbar
// ============================================================================

export interface DataTableToolbarBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DataTableToolbarBase - Toolbar with filters and actions
 */
export const DataTableToolbarBase = React.forwardRef<HTMLDivElement, DataTableToolbarBaseProps>(
  (props, ref) => <div ref={ref} role="toolbar" {...props} />
);
DataTableToolbarBase.displayName = 'DataTableToolbarBase';

// ============================================================================
// Data Table Content
// ============================================================================

export interface DataTableContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DataTableContentBase - Scrollable table container
 */
export const DataTableContentBase = React.forwardRef<HTMLDivElement, DataTableContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DataTableContentBase.displayName = 'DataTableContentBase';

// ============================================================================
// Data Table Pagination
// ============================================================================

export interface DataTablePaginationBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Current page (1-indexed)
   */
  page?: number;
  
  /**
   * Total pages
   */
  totalPages?: number;
  
  /**
   * Page size options
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];
  
  /**
   * Current page size
   */
  pageSize?: number;
  
  /**
   * Total items
   */
  totalItems?: number;
}

/**
 * DataTablePaginationBase - Pagination controls
 */
export const DataTablePaginationBase = React.forwardRef<HTMLDivElement, DataTablePaginationBaseProps>(
  ({ page, totalPages, pageSize, totalItems, ...props }, ref) => (
    <div
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      data-page={page}
      data-total-pages={totalPages}
      {...props}
    />
  )
);
DataTablePaginationBase.displayName = 'DataTablePaginationBase';

// ============================================================================
// Data Table Column Header
// ============================================================================

export interface DataTableColumnHeaderBaseProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Whether column is sortable
   */
  sortable?: boolean;
  
  /**
   * Current sort direction
   */
  sortDirection?: 'asc' | 'desc' | false;
}

/**
 * DataTableColumnHeaderBase - Column header cell with sort controls
 */
export const DataTableColumnHeaderBase = React.forwardRef<
  HTMLTableCellElement,
  DataTableColumnHeaderBaseProps
>(({ sortable, sortDirection, ...props }, ref) => (
  <th
    ref={ref}
    aria-sort={
      sortDirection === 'asc'
        ? 'ascending'
        : sortDirection === 'desc'
        ? 'descending'
        : sortable
        ? 'none'
        : undefined
    }
    data-sortable={sortable || undefined}
    data-sort-direction={sortDirection || undefined}
    {...props}
  />
));
DataTableColumnHeaderBase.displayName = 'DataTableColumnHeaderBase';

// ============================================================================
// Data Table Row Actions
// ============================================================================

export interface DataTableRowActionsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DataTableRowActionsBase - Row action buttons container
 */
export const DataTableRowActionsBase = React.forwardRef<HTMLDivElement, DataTableRowActionsBaseProps>(
  (props, ref) => <div ref={ref} role="group" {...props} />
);
DataTableRowActionsBase.displayName = 'DataTableRowActionsBase';

// ============================================================================
// Data Table View Options
// ============================================================================

export interface DataTableViewOptionsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DataTableViewOptionsBase - Column visibility toggle dropdown
 */
export const DataTableViewOptionsBase = React.forwardRef<HTMLDivElement, DataTableViewOptionsBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DataTableViewOptionsBase.displayName = 'DataTableViewOptionsBase';
