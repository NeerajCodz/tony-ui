import * as React from 'react';

/**
 * Table type variants
 */
export type TableType =
  | 'default'
  | 'striped'
  | 'bordered'
  | 'minimal'
  | 'unstyled';

/**
 * Table sizes
 * | Size | Row height | Font  | Padding |
 * | sm   | 32px       | 12px  | 8px     |
 * | md   | 44px       | 14px  | 12px    |
 * | lg   | 56px       | 16px  | 16px    |
 */
export type TableSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Table Root
// ============================================================================

export interface TableBaseProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: TableType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: TableSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether rows are hoverable
   * @default true
   */
  hoverable?: boolean;
  
  /**
   * Whether the table is sticky header
   * @default false
   */
  stickyHeader?: boolean;
}

/**
 * TableBase - Data table with semantic HTML
 * 
 * Anatomy:
 * - Table (table element)
 *   - TableCaption (optional caption)
 *   - TableHeader (thead)
 *     - TableRow (tr)
 *       - TableHead (th)
 *   - TableBody (tbody)
 *     - TableRow (tr)
 *       - TableCell (td)
 *   - TableFooter (tfoot)
 * 
 * Accessibility:
 * - Uses semantic table elements
 * - Properly structured headers
 * - Caption describes table purpose
 */
export const TableBase = React.forwardRef<HTMLTableElement, TableBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      variant,
      hoverable = true,
      stickyHeader,
      ...props
    },
    ref
  ) => (
    <table
      ref={ref}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-hoverable={hoverable}
      data-sticky-header={stickyHeader || undefined}
      {...props}
    />
  )
);
TableBase.displayName = 'TableBase';

// ============================================================================
// Table Header
// ============================================================================

export interface TableHeaderBaseProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * TableHeaderBase - Table head section (thead)
 */
export const TableHeaderBase = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderBaseProps
>((props, ref) => <thead ref={ref} {...props} />);
TableHeaderBase.displayName = 'TableHeaderBase';

// ============================================================================
// Table Body
// ============================================================================

export interface TableBodyBaseProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * TableBodyBase - Table body section (tbody)
 */
export const TableBodyBase = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyBaseProps
>((props, ref) => <tbody ref={ref} {...props} />);
TableBodyBase.displayName = 'TableBodyBase';

// ============================================================================
// Table Footer
// ============================================================================

export interface TableFooterBaseProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * TableFooterBase - Table footer section (tfoot)
 */
export const TableFooterBase = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterBaseProps
>((props, ref) => <tfoot ref={ref} {...props} />);
TableFooterBase.displayName = 'TableFooterBase';

// ============================================================================
// Table Row
// ============================================================================

export interface TableRowBaseProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Whether this row is selected
   */
  selected?: boolean;
}

/**
 * TableRowBase - Table row (tr)
 */
export const TableRowBase = React.forwardRef<HTMLTableRowElement, TableRowBaseProps>(
  ({ selected, ...props }, ref) => (
    <tr ref={ref} data-selected={selected || undefined} aria-selected={selected} {...props} />
  )
);
TableRowBase.displayName = 'TableRowBase';

// ============================================================================
// Table Head Cell
// ============================================================================

export interface TableHeadBaseProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Sort direction for sortable columns
   */
  sortDirection?: 'asc' | 'desc' | false;
  
  /**
   * Whether this column is sortable
   */
  sortable?: boolean;
}

/**
 * TableHeadBase - Table header cell (th)
 */
export const TableHeadBase = React.forwardRef<HTMLTableCellElement, TableHeadBaseProps>(
  ({ sortDirection, sortable, ...props }, ref) => (
    <th
      ref={ref}
      aria-sort={
        sortDirection === 'asc'
          ? 'ascending'
          : sortDirection === 'desc'
            ? 'descending'
            : undefined
      }
      data-sortable={sortable || undefined}
      data-sort={sortDirection || undefined}
      {...props}
    />
  )
);
TableHeadBase.displayName = 'TableHeadBase';

// ============================================================================
// Table Cell
// ============================================================================

export interface TableCellBaseProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

/**
 * TableCellBase - Table data cell (td)
 */
export const TableCellBase = React.forwardRef<HTMLTableCellElement, TableCellBaseProps>(
  (props, ref) => <td ref={ref} {...props} />
);
TableCellBase.displayName = 'TableCellBase';

// ============================================================================
// Table Caption
// ============================================================================

export interface TableCaptionBaseProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  /**
   * Position of the caption
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

/**
 * TableCaptionBase - Table caption for accessibility
 */
export const TableCaptionBase = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionBaseProps
>(({ position = 'bottom', style, ...props }, ref) => (
  <caption
    ref={ref}
    style={{ captionSide: position, ...style }}
    {...props}
  />
));
TableCaptionBase.displayName = 'TableCaptionBase';
