import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

/**
 * Breadcrumb type variants
 */
export type BreadcrumbType =
  | 'default'
  | 'outline'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * Breadcrumb sizes
 * | Size | Height | Font  |
 * | sm   | 24px   | 12px  |
 * | md   | 32px   | 14px  |
 * | lg   | 40px   | 16px  |
 */
export type BreadcrumbSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Breadcrumb Root
// ============================================================================

export interface BreadcrumbBaseProps extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: BreadcrumbType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: BreadcrumbSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * BreadcrumbBase - Navigation trail showing hierarchy
 * 
 * Anatomy:
 * - Breadcrumb (nav container)
 *   - BreadcrumbList (ol)
 *     - BreadcrumbItem (li)
 *       - BreadcrumbLink | BreadcrumbPage
 *     - BreadcrumbSeparator (between items)
 *     - BreadcrumbEllipsis (for collapsed items)
 * 
 * Accessibility:
 * - nav with aria-label="breadcrumb"
 * - ol/li semantic structure
 * - Current page has aria-current="page"
 */
export const BreadcrumbBase = React.forwardRef<HTMLElement, BreadcrumbBaseProps>(
  ({ type = 'default', size = 'md', variant, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      data-type={type}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
);
BreadcrumbBase.displayName = 'BreadcrumbBase';

// ============================================================================
// Breadcrumb List
// ============================================================================

export interface BreadcrumbListBaseProps extends React.ComponentPropsWithoutRef<'ol'> {}

/**
 * BreadcrumbListBase - Ordered list container for items
 */
export const BreadcrumbListBase = React.forwardRef<HTMLOListElement, BreadcrumbListBaseProps>(
  (props, ref) => <ol ref={ref} {...props} />
);
BreadcrumbListBase.displayName = 'BreadcrumbListBase';

// ============================================================================
// Breadcrumb Item
// ============================================================================

export interface BreadcrumbItemBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

/**
 * BreadcrumbItemBase - Individual breadcrumb item
 */
export const BreadcrumbItemBase = React.forwardRef<HTMLLIElement, BreadcrumbItemBaseProps>(
  (props, ref) => <li ref={ref} {...props} />
);
BreadcrumbItemBase.displayName = 'BreadcrumbItemBase';

// ============================================================================
// Breadcrumb Link
// ============================================================================

export interface BreadcrumbLinkBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * Render as child component (e.g., for router links)
   */
  asChild?: boolean;
}

/**
 * BreadcrumbLinkBase - Clickable link to ancestor page
 * 
 * States:
 * - default: muted text
 * - hover: underline, brightens
 * - focus: focus ring
 */
export const BreadcrumbLinkBase = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkBaseProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return <Comp ref={ref as React.Ref<HTMLAnchorElement>} {...props} />;
  }
);
BreadcrumbLinkBase.displayName = 'BreadcrumbLinkBase';

// ============================================================================
// Breadcrumb Page
// ============================================================================

export interface BreadcrumbPageBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

/**
 * BreadcrumbPageBase - Current page (non-interactive)
 * 
 * Shows as text without link styling.
 * aria-current="page" marks it as current location.
 */
export const BreadcrumbPageBase = React.forwardRef<HTMLSpanElement, BreadcrumbPageBaseProps>(
  (props, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...props}
    />
  )
);
BreadcrumbPageBase.displayName = 'BreadcrumbPageBase';

// ============================================================================
// Breadcrumb Separator
// ============================================================================

export interface BreadcrumbSeparatorBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

/**
 * BreadcrumbSeparatorBase - Visual separator between items
 * 
 * Default is "/" but can be customized via children.
 * Hidden from screen readers.
 */
export const BreadcrumbSeparatorBase = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorBaseProps>(
  ({ children = '/', ...props }, ref) => (
    <li
      ref={ref}
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {children}
    </li>
  )
);
BreadcrumbSeparatorBase.displayName = 'BreadcrumbSeparatorBase';

// ============================================================================
// Breadcrumb Ellipsis
// ============================================================================

export interface BreadcrumbEllipsisBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

/**
 * BreadcrumbEllipsisBase - Collapsed items indicator
 * 
 * Typically "..." when there are too many breadcrumbs.
 * Can be made interactive to show hidden items.
 */
export const BreadcrumbEllipsisBase = React.forwardRef<HTMLSpanElement, BreadcrumbEllipsisBaseProps>(
  ({ children = '…', ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      aria-label="More pages"
      {...props}
    >
      {children}
    </span>
  )
);
BreadcrumbEllipsisBase.displayName = 'BreadcrumbEllipsisBase';
