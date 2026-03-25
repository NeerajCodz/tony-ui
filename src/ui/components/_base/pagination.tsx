import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
/**
 * Pagination type variants
 */
export type PaginationType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * Pagination sizes
 * | Size | Button Height | Font  |
 * | sm   | 28px          | 12px  |
 * | md   | 36px          | 14px  |
 * | lg   | 44px          | 16px  |
 */
export type PaginationSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Pagination Root
// ============================================================================

export interface PaginationBaseProps extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: PaginationType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: PaginationSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * PaginationBase - Navigation between pages of content
 * 
 * Anatomy:
 * - Pagination (nav)
 *   - PaginationContent (ul)
 *     - PaginationItem (li)
 *       - PaginationPrevious / PaginationLink / PaginationNext / PaginationEllipsis
 * 
 * Accessibility:
 * - nav with role="navigation" aria-label="pagination"
 * - Current page has aria-current="page"
 * - Disabled buttons have aria-disabled
 */
export const PaginationBase = React.forwardRef<HTMLElement, PaginationBaseProps>(
  ({ type = 'default', size = 'md', variant, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      data-type={type}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
);
PaginationBase.displayName = 'PaginationBase';

// ============================================================================
// Pagination Content
// ============================================================================

export interface PaginationContentBaseProps extends React.ComponentPropsWithoutRef<'ul'> {}

/**
 * PaginationContentBase - List container for pagination items
 */
export const PaginationContentBase = React.forwardRef<HTMLUListElement, PaginationContentBaseProps>(
  (props, ref) => <ul ref={ref} {...props} />
);
PaginationContentBase.displayName = 'PaginationContentBase';

// ============================================================================
// Pagination Item
// ============================================================================

export interface PaginationItemBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

/**
 * PaginationItemBase - Individual pagination item wrapper
 */
export const PaginationItemBase = React.forwardRef<HTMLLIElement, PaginationItemBaseProps>(
  (props, ref) => <li ref={ref} {...props} />
);
PaginationItemBase.displayName = 'PaginationItemBase';

// ============================================================================
// Pagination Link
// ============================================================================

export interface PaginationLinkBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * Render as child component (e.g., for router links)
   */
  asChild?: boolean;
  
  /**
   * Whether this is the current page
   */
  isActive?: boolean;
}

/**
 * PaginationLinkBase - Page number link
 * 
 * States:
 * - default: ghost button appearance
 * - hover: subtle background
 * - active (current page): accent/solid background
 * - focus: focus ring
 * - disabled: reduced opacity
 */
export const PaginationLinkBase = React.forwardRef<HTMLAnchorElement, PaginationLinkBaseProps>(
  ({ asChild = false, isActive, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return (
      <Comp
        ref={ref as React.Ref<HTMLAnchorElement>}
        aria-current={isActive ? 'page' : undefined}
        data-active={isActive || undefined}
        {...props}
      />
    );
  }
);
PaginationLinkBase.displayName = 'PaginationLinkBase';

// ============================================================================
// Pagination Previous
// ============================================================================

export interface PaginationPreviousBaseProps extends PaginationLinkBaseProps {
  /**
   * Whether there is no previous page
   */
  disabled?: boolean;
}

/**
 * PaginationPreviousBase - Go to previous page button
 * 
 * Typically shows "← Previous" or just "←"
 */
export const PaginationPreviousBase = React.forwardRef<HTMLAnchorElement, PaginationPreviousBaseProps>(
  ({ disabled, ...props }, ref) => (
    <PaginationLinkBase
      ref={ref}
      aria-label="Go to previous page"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
PaginationPreviousBase.displayName = 'PaginationPreviousBase';

// ============================================================================
// Pagination Next
// ============================================================================

export interface PaginationNextBaseProps extends PaginationLinkBaseProps {
  /**
   * Whether there is no next page
   */
  disabled?: boolean;
}

/**
 * PaginationNextBase - Go to next page button
 * 
 * Typically shows "Next →" or just "→"
 */
export const PaginationNextBase = React.forwardRef<HTMLAnchorElement, PaginationNextBaseProps>(
  ({ disabled, ...props }, ref) => (
    <PaginationLinkBase
      ref={ref}
      aria-label="Go to next page"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
PaginationNextBase.displayName = 'PaginationNextBase';

// ============================================================================
// Pagination First
// ============================================================================

export interface PaginationFirstBaseProps extends PaginationLinkBaseProps {
  /**
   * Whether already on first page
   */
  disabled?: boolean;
}

/**
 * PaginationFirstBase - Go to first page button
 */
export const PaginationFirstBase = React.forwardRef<HTMLAnchorElement, PaginationFirstBaseProps>(
  ({ disabled, ...props }, ref) => (
    <PaginationLinkBase
      ref={ref}
      aria-label="Go to first page"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
PaginationFirstBase.displayName = 'PaginationFirstBase';

// ============================================================================
// Pagination Last
// ============================================================================

export interface PaginationLastBaseProps extends PaginationLinkBaseProps {
  /**
   * Whether already on last page
   */
  disabled?: boolean;
}

/**
 * PaginationLastBase - Go to last page button
 */
export const PaginationLastBase = React.forwardRef<HTMLAnchorElement, PaginationLastBaseProps>(
  ({ disabled, ...props }, ref) => (
    <PaginationLinkBase
      ref={ref}
      aria-label="Go to last page"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
PaginationLastBase.displayName = 'PaginationLastBase';

// ============================================================================
// Pagination Ellipsis
// ============================================================================

export interface PaginationEllipsisBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

/**
 * PaginationEllipsisBase - Indicates skipped pages
 * 
 * Typically "..." between page number groups
 */
export const PaginationEllipsisBase = React.forwardRef<HTMLSpanElement, PaginationEllipsisBaseProps>(
  ({ children = '…', ...props }, ref) => (
    <span ref={ref} aria-hidden="true" {...props}>
      {children}
    </span>
  )
);
PaginationEllipsisBase.displayName = 'PaginationEllipsisBase';

export { Slot };
